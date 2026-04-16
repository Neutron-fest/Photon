#!/usr/bin/env node
// @ts-nocheck

import "dotenv/config";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const NOTION_API_BASE = "https://api.notion.com/v1";
const NOTION_VERSION = "2022-06-28";
const OUTPUT_FILE = path.resolve(process.cwd(), "data/competition-data.ts");
const FIELDS_TO_SYNC = [
  "title",
  "date",
  "details",
  "subtitle",
  "description",
  "prizePool",
  "location",
  "rules",
];

const HELP_TEXT = `
Sync competitions from a Notion database into data/competition-data.ts

Required env vars:
  NOTION_TOKEN
  NOTION_COMPETITIONS_DATABASE_ID

Optional env vars:
  NOTION_SYNC_INTERVAL_MS=60000
  NOTION_COMPETITIONS_FILTER_JSON='{"property":"Published","checkbox":{"equals":true}}'
  NOTION_COMPETITIONS_SORTS_JSON='[{"property":"Title","direction":"ascending"}]'
  NOTION_DEFAULT_IMAGE_URL='https://example.com/fallback.jpg'

Usage:
  npm run sync:competitions
  npm run sync:competitions:watch
`.trim();

function getRequiredEnv(name) {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

function normalizeKey(value) {
  return value.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function slugify(value) {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function toMatchKey(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");
}

function formatDateLabel(value) {
  if (!value) return "TBD";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return String(value);

  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function joinRichText(entries = []) {
  if (!Array.isArray(entries)) return "";
  return entries
    .map((entry) => entry?.plain_text ?? "")
    .join("")
    .trim();
}

function getProperty(properties, aliases) {
  const targets = aliases.map(normalizeKey);
  for (const [key, prop] of Object.entries(properties)) {
    if (targets.includes(normalizeKey(key))) return prop;
  }
  return null;
}

function readPropertyValue(prop) {
  if (!prop || typeof prop !== "object") return "";

  switch (prop.type) {
    case "title":
      return joinRichText(prop.title);
    case "rich_text":
      return joinRichText(prop.rich_text);
    case "number":
      return prop.number === null ? "" : String(prop.number);
    case "url":
      return prop.url ?? "";
    case "select":
      return prop.select?.name ?? "";
    case "multi_select":
      return Array.isArray(prop.multi_select)
        ? prop.multi_select.map((entry) => entry.name).join(", ")
        : "";
    case "status":
      return prop.status?.name ?? "";
    case "date":
      return prop.date?.start ?? "";
    case "email":
      return prop.email ?? "";
    case "phone_number":
      return prop.phone_number ?? "";
    case "checkbox":
      return prop.checkbox ? "true" : "false";
    case "formula": {
      const formula = prop.formula;
      if (!formula) return "";
      if (formula.type === "string") return formula.string ?? "";
      if (formula.type === "number")
        return formula.number === null ? "" : String(formula.number);
      if (formula.type === "boolean") return formula.boolean ? "true" : "false";
      if (formula.type === "date") return formula.date?.start ?? "";
      return "";
    }
    case "files": {
      if (!Array.isArray(prop.files) || prop.files.length === 0) return "";
      const first = prop.files[0];
      if (first.type === "external") return first.external?.url ?? "";
      if (first.type === "file") return first.file?.url ?? "";
      return "";
    }
    default:
      return "";
  }
}

function hasMeaningfulProperty(properties, aliases) {
  const value = readPropertyValue(getProperty(properties, aliases));
  return value.trim().length > 0;
}

function escapeTemplateLiteral(value) {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/`/g, "\\`")
    .replace(/\$\{/g, "\\${");
}

function parseOptionalJsonEnv(name) {
  const rawValue = process.env[name]?.trim();
  if (!rawValue) return undefined;
  try {
    return JSON.parse(rawValue);
  } catch (error) {
    throw new Error(`Invalid JSON in ${name}: ${error.message}`);
  }
}

async function notionRequest(endpoint, options = {}) {
  const token = getRequiredEnv("NOTION_TOKEN");
  const method = options.method ?? "POST";
  const response = await fetch(`${NOTION_API_BASE}${endpoint}`, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      "Notion-Version": NOTION_VERSION,
      "Content-Type": "application/json",
    },
    body: options.payload ? JSON.stringify(options.payload) : undefined,
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Notion API error (${response.status}): ${errorBody}`);
  }

  return response.json();
}

async function fetchAllCompetitionPages() {
  const databaseId = getRequiredEnv("NOTION_COMPETITIONS_DATABASE_ID");
  const filter = parseOptionalJsonEnv("NOTION_COMPETITIONS_FILTER_JSON");
  const sorts = parseOptionalJsonEnv("NOTION_COMPETITIONS_SORTS_JSON");

  const pages = [];
  let nextCursor = null;

  do {
    const payload = {
      page_size: 100,
    };

    if (nextCursor) payload.start_cursor = nextCursor;
    if (filter) payload.filter = filter;
    if (sorts) payload.sorts = sorts;

    const result = await notionRequest(`/databases/${databaseId}/query`, {
      method: "POST",
      payload,
    });

    if (Array.isArray(result.results)) {
      pages.push(...result.results);
    }

    nextCursor = result.has_more ? result.next_cursor : null;
  } while (nextCursor);

  return pages;
}

function richTextToMarkdown(entries = []) {
  if (!Array.isArray(entries)) return "";
  return entries
    .map((entry) => {
      let text = entry?.plain_text ?? "";
      if (!text) return "";

      const href = entry?.href || entry?.text?.link?.url;
      if (href) {
        text = `[${text}](${href})`;
      }

      const annotations = entry?.annotations ?? {};
      if (annotations.code) text = `\`${text}\``;
      if (annotations.bold) text = `**${text}**`;
      if (annotations.italic) text = `*${text}*`;
      if (annotations.strikethrough) text = `~~${text}~~`;
      return text;
    })
    .join("");
}

function blockToMarkdown(block, listState) {
  const type = block?.type;
  const value = block?.[type];
  const text = richTextToMarkdown(value?.rich_text ?? []);

  if (type !== "bulleted_list_item") listState.inBulletedList = false;
  if (type !== "numbered_list_item") listState.inNumberedList = false;

  switch (type) {
    case "paragraph":
      return text || "";
    case "heading_1":
      return text ? `# ${text}` : "";
    case "heading_2":
      return text ? `## ${text}` : "";
    case "heading_3":
      return text ? `### ${text}` : "";
    case "quote":
      return text ? `> ${text}` : "";
    case "bulleted_list_item":
      listState.inBulletedList = true;
      return text ? `- ${text}` : "-";
    case "numbered_list_item":
      if (!listState.inNumberedList) {
        listState.numberedIndex = 0;
      }
      listState.inNumberedList = true;
      listState.numberedIndex += 1;
      return text ? `${listState.numberedIndex}. ${text}` : `${listState.numberedIndex}.`;
    case "code": {
      const language = value?.language || "";
      const codeText = text || "";
      return `\`\`\`${language}\n${codeText}\n\`\`\``;
    }
    case "divider":
      return "---";
    case "callout":
      return text ? `> ${text}` : "";
    case "toggle":
      return text ? `- ${text}` : "-";
    default:
      return text || "";
  }
}

async function fetchBlockChildren(blockId) {
  const blocks = [];
  let nextCursor = null;

  do {
    const query = new URLSearchParams({
      page_size: "100",
    });
    if (nextCursor) query.set("start_cursor", nextCursor);

    const result = await notionRequest(
      `/blocks/${blockId}/children?${query.toString()}`,
      { method: "GET" },
    );

    if (Array.isArray(result.results)) {
      blocks.push(...result.results);
    }

    nextCursor = result.has_more ? result.next_cursor : null;
  } while (nextCursor);

  return blocks;
}

async function blocksToMarkdown(blocks, depth = 0) {
  const lines = [];
  const listState = {
    inNumberedList: false,
    numberedIndex: 0,
    inBulletedList: false,
  };

  for (const block of blocks) {
    const line = blockToMarkdown(block, listState);
    if (line) {
      const prefix = depth > 0 ? `${"  ".repeat(depth)}` : "";
      lines.push(`${prefix}${line}`);
    }

    if (block?.has_children) {
      const childBlocks = await fetchBlockChildren(block.id);
      const childMarkdown = await blocksToMarkdown(childBlocks, depth + 1);
      if (childMarkdown.trim()) {
        lines.push(childMarkdown);
      }
    }
  }

  return lines.join("\n\n").trim();
}

async function fetchPageBodyMarkdown(pageId) {
  const blocks = await fetchBlockChildren(pageId);
  return blocksToMarkdown(blocks);
}

async function mapNotionPageToCompetition(page) {
  const properties = page.properties ?? {};

  // Skip records that look like person/registration rows instead of competition master rows.
  const hasCompetitionSignals =
    hasMeaningfulProperty(properties, ["officialname", "official name"]) ||
    hasMeaningfulProperty(properties, ["competitiontype", "competition type"]) ||
    hasMeaningfulProperty(properties, ["prizepool", "prize pool"]) ||
    hasMeaningfulProperty(properties, ["venue", "location"]) ||
    hasMeaningfulProperty(properties, ["description"]);

  if (!hasCompetitionSignals) {
    return null;
  }

  const title =
    readPropertyValue(getProperty(properties, ["officialname", "official name"])) ||
    readPropertyValue(getProperty(properties, ["title", "name"])) ||
    "Untitled Competition";
  const details =
    readPropertyValue(getProperty(properties, ["details", "summary", "description"])) ||
    "Details will be announced soon.";
  const subtitle =
    readPropertyValue(getProperty(properties, ["subtitle", "tagline"])) ||
    details;
  const description =
    readPropertyValue(getProperty(properties, ["description", "about", "details"])) ||
    details;
  const prizePool =
    readPropertyValue(
      getProperty(properties, ["prizepool", "prize pool", "prize", "bounty"]),
    ) ||
    "TBD";
  const location =
    readPropertyValue(getProperty(properties, ["venue", "location"])) || "TBD";
  const teamSize =
    readPropertyValue(getProperty(properties, ["teamsize", "team size", "team"])) ||
    "TBD";
  const category =
    readPropertyValue(
      getProperty(properties, ["competitiontype", "competition type", "category", "domain"]),
    ) || "General";
  const slug =
    readPropertyValue(getProperty(properties, ["slug"])) || slugify(title);

  const imageFromFields = readPropertyValue(
    getProperty(properties, ["image", "poster", "posterpath", "banner"]),
  );
  const imageFromCover =
    page.cover?.type === "external"
      ? page.cover.external?.url
      : page.cover?.type === "file"
        ? page.cover.file?.url
        : "";
  const image =
    imageFromFields ||
    imageFromCover ||
    process.env.NOTION_DEFAULT_IMAGE_URL ||
    "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa";

  const rawDate =
    readPropertyValue(getProperty(properties, ["date", "eventdate", "startdate"])) ||
    page.last_edited_time;

  const rulesFromProperty = readPropertyValue(
    getProperty(properties, ["rules", "rulebook", "guidelines"]),
  );
  const rulesFromPage = await fetchPageBodyMarkdown(page.id);
  const rules = rulesFromPage || rulesFromProperty || "Rules will be announced soon.";

  return {
    title,
    image,
    slug,
    category,
    date: formatDateLabel(rawDate),
    details,
    subtitle,
    description,
    prizePool,
    location,
    teamSize,
    rules,
  };
}

async function loadExistingCompetitions() {
  try {
    const moduleUrl = `${pathToFileURL(OUTPUT_FILE).href}?t=${Date.now()}`;
    const mod = await import(moduleUrl);
    return Array.isArray(mod.COMPETITIONS_DATA) ? mod.COMPETITIONS_DATA : [];
  } catch {
    return [];
  }
}

function mergeCompetitions(existingCompetitions, notionCompetitions) {
  const bySlug = new Map();
  const byTitle = new Map();

  for (const competition of notionCompetitions) {
    bySlug.set(toMatchKey(competition.slug), competition);
    byTitle.set(toMatchKey(competition.title), competition);
  }

  let matchedCount = 0;

  const merged = existingCompetitions.map((existing) => {
    const match =
      bySlug.get(toMatchKey(existing.slug)) ||
      byTitle.get(toMatchKey(existing.title));

    if (!match) return existing;

    matchedCount += 1;

    const updates = {};
    for (const field of FIELDS_TO_SYNC) {
      updates[field] = match[field];
    }

    return {
      ...existing,
      ...updates,
    };
  });

  return {
    merged,
    matchedCount,
    unmatchedCount: notionCompetitions.length - matchedCount,
  };
}

function renderCompetitionDataFile(competitions) {
  const interfaceBlock = `export interface Rule {
  title: string;
  content: string;
}

export type CompetitionRules = Rule[] | string;

export interface Competition {
  title: string;
  image: string;
  slug: string;
  category: string;
  date: string;
  details: string;
  subtitle: string;
  description: string;
  prizePool: string;
  location: string;
  teamSize: string;
  rules: CompetitionRules;
}

export const COMPETITIONS_DATA: Competition[] = [
`;

  const itemBlocks = competitions.map((competition) => {
    const rulesField = Array.isArray(competition.rules)
      ? JSON.stringify(competition.rules)
      : String(competition.rules).includes("\n")
        ? `\`${escapeTemplateLiteral(String(competition.rules))}\``
        : JSON.stringify(competition.rules);

    return `  {
    title: ${JSON.stringify(competition.title)},
    image: ${JSON.stringify(competition.image)},
    slug: ${JSON.stringify(competition.slug)},
    category: ${JSON.stringify(competition.category)},
    date: ${JSON.stringify(competition.date)},
    details: ${JSON.stringify(competition.details)},
    subtitle: ${JSON.stringify(competition.subtitle)},
    description: ${JSON.stringify(competition.description)},
    prizePool: ${JSON.stringify(competition.prizePool)},
    location: ${JSON.stringify(competition.location)},
    teamSize: ${JSON.stringify(competition.teamSize)},
    rules: ${rulesField},
  },`;
  });

  return `${interfaceBlock}
${itemBlocks.join("\n\n")}
];
`;
}

async function syncCompetitions() {
  const pages = await fetchAllCompetitionPages();
  const mapped = await Promise.all(pages.map((page) => mapNotionPageToCompetition(page)));
  const notionCompetitions = mapped.filter((entry) => entry !== null);
  const skippedCount = mapped.length - notionCompetitions.length;
  console.log(`Competition pages kept: ${notionCompetitions.length}, skipped: ${skippedCount}`);
  if (notionCompetitions.length === 0) {
    const sampleKeys =
      pages.length > 0 ? Object.keys(pages[0]?.properties ?? {}) : [];
    throw new Error(
      `No competition-like rows found. Refusing to overwrite data/competition-data.ts. Sample property keys from fetched database: ${sampleKeys.join(", ")}`,
    );
  }
  const existingCompetitions = await loadExistingCompetitions();
  if (existingCompetitions.length === 0) {
    throw new Error(
      "Existing data/competition-data.ts has no COMPETITIONS_DATA entries to merge into.",
    );
  }

  const { merged, matchedCount, unmatchedCount } = mergeCompetitions(
    existingCompetitions,
    notionCompetitions,
  );
  console.log(
    `Merged Notion fields into existing entries. Matched: ${matchedCount}, Unmatched Notion rows: ${unmatchedCount}`,
  );
  const output = renderCompetitionDataFile(merged);

  let previous = "";
  try {
    previous = await readFile(OUTPUT_FILE, "utf8");
  } catch {
    previous = "";
  }

  if (previous === output) {
    return { changed: false, count: notionCompetitions.length };
  }

  await writeFile(OUTPUT_FILE, output, "utf8");
  return { changed: true, count: notionCompetitions.length };
}

async function runOnce() {
  const { changed, count } = await syncCompetitions();
  if (changed) {
    console.log(`Updated ${OUTPUT_FILE} with ${count} competition entries.`);
  } else {
    console.log(`No changes detected. ${count} competition entries checked.`);
  }
}

async function runWatchMode() {
  const everyMs = Number(process.env.NOTION_SYNC_INTERVAL_MS || 60_000);
  if (!Number.isFinite(everyMs) || everyMs < 10_000) {
    throw new Error("NOTION_SYNC_INTERVAL_MS must be a number >= 10000");
  }

  console.log(`Watching Notion for competition changes every ${everyMs}ms...`);
  await runOnce();

  setInterval(async () => {
    try {
      await runOnce();
    } catch (error) {
      console.error("Sync failed:", error.message);
    }
  }, everyMs);
}

const args = new Set(process.argv.slice(2));

if (args.has("--help") || args.has("-h")) {
  console.log(HELP_TEXT);
  process.exit(0);
}

if (args.has("--watch")) {
  runWatchMode().catch((error) => {
    console.error(error.message);
    process.exit(1);
  });
} else {
  runOnce().catch((error) => {
    console.error(error.message);
    process.exit(1);
  });
}
