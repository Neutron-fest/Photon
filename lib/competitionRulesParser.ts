export type RuleItem = {
  title: string;
  content: string;
};

const cleanInlineMarkdown = (value: string): string => {
  return value
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[*_~`>#]+/g, "")
    .replace(/\s+/g, " ")
    .trim();
};

const normalizeRule = (rule: unknown, index: number): RuleItem | null => {
  if (typeof rule === "string") {
    const content = cleanInlineMarkdown(rule);
    if (!content) return null;
    return {
      title: `Rule ${index + 1}`,
      content,
    };
  }

  if (rule && typeof rule === "object") {
    const ruleObj = rule as { title?: unknown; content?: unknown; description?: unknown };
    const title = cleanInlineMarkdown(String(ruleObj.title ?? ""));
    const content = cleanInlineMarkdown(
      String(ruleObj.content ?? ruleObj.description ?? ""),
    );

    if (!title && !content) return null;

    return {
      title: title || `Rule ${index + 1}`,
      content: content || "Follow standard event policy.",
    };
  }

  return null;
};

const parseMarkdownRules = (markdown: string): RuleItem[] => {
  const lines = markdown.replace(/\r\n?/g, "\n").split("\n");
  const sections: RuleItem[] = [];

  let currentTitle = "";
  let currentLines: string[] = [];

  const pushSection = () => {
    const content = currentLines
      .map((line) => line.trim())
      .filter(Boolean)
      .join("\n")
      .trim();

    if (!content && !currentTitle) return;

    sections.push({
      title: currentTitle || `Rule ${sections.length + 1}`,
      content: content || "Follow standard event policy.",
    });

    currentLines = [];
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) {
      if (currentLines.length > 0) {
        currentLines.push("");
      }
      continue;
    }

    if (/^(-{3,}|\*{3,}|_{3,})$/.test(line)) {
      continue;
    }

    const headingMatch = line.match(/^#{1,6}\s+(.+)$/);
    if (headingMatch) {
      pushSection();
      currentTitle = cleanInlineMarkdown(headingMatch[1]) || `Rule ${sections.length + 1}`;
      continue;
    }

    const tableCells = line
      .split("|")
      .map((cell) => cleanInlineMarkdown(cell))
      .filter(Boolean);

    if (tableCells.length >= 2 && line.includes("|")) {
      if (!tableCells.every((cell) => /^:?-+:?$/.test(cell))) {
        currentLines.push(`${tableCells[0]}: ${tableCells.slice(1).join(" | ")}`);
      }
      continue;
    }

    const bulletMatch = line.match(/^[-*+]\s+(.+)$/);
    if (bulletMatch) {
      currentLines.push(`- ${cleanInlineMarkdown(bulletMatch[1])}`);
      continue;
    }

    const orderedMatch = line.match(/^\d+[.)]\s+(.+)$/);
    if (orderedMatch) {
      currentLines.push(`- ${cleanInlineMarkdown(orderedMatch[1])}`);
      continue;
    }

    currentLines.push(cleanInlineMarkdown(line));
  }

  pushSection();

  if (sections.length > 0) return sections;

  const fallback = cleanInlineMarkdown(markdown);
  return fallback
    ? [
        {
          title: "Rules",
          content: fallback,
        },
      ]
    : [];
};

export const parseCompetitionRules = (rulesInput: unknown): RuleItem[] => {
  if (Array.isArray(rulesInput)) {
    return rulesInput
      .map((rule, index) => normalizeRule(rule, index))
      .filter((rule): rule is RuleItem => Boolean(rule));
  }

  if (typeof rulesInput === "string") {
    return parseMarkdownRules(rulesInput);
  }

  return [];
};
