const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa";
import { parseCompetitionRules } from "@/lib/competitionRulesParser";

const EVENT_TYPES = new Set(["EVENT", "WORKSHOP"]);

const UUID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

const toStringSafe = (value: unknown): string =>
  typeof value === "string" ? value.trim() : "";

const toNumberSafe = (value: unknown): number | null => {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string") {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : null;
  }
  return null;
};

const formatInr = (value: number): string =>
  `Rs ${new Intl.NumberFormat("en-IN").format(Math.round(value))}`;

const toDateLabel = (value: unknown): string => {
  const textValue = toStringSafe(value);
  if (!textValue) return "TBD";

  const parsed = new Date(textValue);
  if (Number.isNaN(parsed.getTime())) return textValue;

  return parsed.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

const toTimeLabel = (value: unknown): string => {
  const textValue = toStringSafe(value);
  if (!textValue) return "TBD";

  const parsed = new Date(textValue);
  if (Number.isNaN(parsed.getTime())) return "TBD";

  return parsed.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
};

const slugify = (value: string): string =>
  value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const getTitle = (competition: any): string =>
  toStringSafe(competition?.title) ||
  toStringSafe(competition?.name) ||
  "Untitled";

const getSummary = (competition: any): string =>
  toStringSafe(competition?.shortDescription) ||
  toStringSafe(competition?.details) ||
  toStringSafe(competition?.description) ||
  "Mission details are classified.";

const getImage = (competition: any): string =>
  toStringSafe(competition?.posterPath) ||
  toStringSafe(competition?.image) ||
  toStringSafe(competition?.bannerPath) ||
  DEFAULT_IMAGE;

const getDate = (competition: any): string =>
  toDateLabel(
    competition?.startTime || competition?.startDate || competition?.date,
  );

const getLocation = (competition: any): string => {
  const direct =
    toStringSafe(competition?.location) ||
    toStringSafe(competition?.venue) ||
    toStringSafe(competition?.sector);

  if (direct) return direct;

  const venueName = toStringSafe(competition?.venueName);
  const venueRoom = toStringSafe(competition?.venueRoom);
  const venueFloor = toStringSafe(competition?.venueFloor);

  const parts = [
    venueName,
    venueRoom ? `Room ${venueRoom}` : "",
    venueFloor ? `Floor ${venueFloor}` : "",
  ].filter(Boolean);

  return parts.length ? parts.join(", ") : "Remote";
};

const getTeamSize = (competition: any): string => {
  const explicit =
    toStringSafe(competition?.teamSize) || toStringSafe(competition?.crewSize);
  if (explicit) return explicit;

  const min = toNumberSafe(competition?.minTeamSize);
  const max = toNumberSafe(competition?.maxTeamSize);
  if (min !== null && max !== null) {
    if (min === 1 && max === 1) return "Solo";
    if (min === max) return `${min} Members`;
    return `${min}-${max} Members`;
  }

  const type = toStringSafe(competition?.type).toUpperCase();
  if (type === "SOLO") return "Solo";
  if (type === "TEAM") return "Team";

  return "Solo / Team";
};

const getPrizePool = (competition: any): string => {
  const prizePool = competition?.prizePool;

  if (Array.isArray(prizePool) && prizePool.length > 0) {
    const totalCash = prizePool.reduce((sum: number, tier: any) => {
      const cash = toNumberSafe(tier?.cash);
      return cash !== null ? sum + cash : sum;
    }, 0);

    if (totalCash > 0) {
      return formatInr(totalCash);
    }

    return `${prizePool.length} Prize Tiers`;
  }

  const numericPrize = toNumberSafe(prizePool);
  if (numericPrize !== null && numericPrize > 0) {
    return formatInr(numericPrize);
  }

  const stringPrize =
    toStringSafe(prizePool) || toStringSafe(competition?.bounty);
  if (stringPrize) return stringPrize;

  return "TBD";
};

const toRules = (
  competition: any,
): Array<{ title: string; content: string }> => {
  const directRules = parseCompetitionRules(competition?.rules);
  if (directRules.length > 0) {
    return directRules;
  }

  const rulesRichText = toStringSafe(competition?.rulesRichText);
  if (rulesRichText) {
    const parsedRichText = parseCompetitionRules(rulesRichText);
    if (parsedRichText.length > 0) {
      return parsedRichText;
    }
  }

  return [
    {
      title: "Standard Protocol",
      content: "Participants must follow event conduct and safety guidelines.",
    },
    {
      title: "Fair Play",
      content:
        "Any cheating or unauthorized assistance leads to disqualification.",
    },
  ];
};

const getEventType = (competition: any): string =>
  (
    toStringSafe(competition?.eventType) ||
    toStringSafe(competition?.event_type) ||
    toStringSafe(competition?.type) ||
    "COMPETITION"
  ).toUpperCase();

const getRouteSegment = (competition: any): string =>
  toStringSafe(competition?.slug) ||
  toStringSafe(competition?.id) ||
  toStringSafe(competition?._id) ||
  slugify(getTitle(competition));

const getTicketPrice = (competition: any): string => {
  const explicit = toStringSafe(competition?.ticketPrice);
  if (explicit) return explicit;

  const fee = toNumberSafe(competition?.registrationFee);
  if (fee !== null && fee > 0) return formatInr(fee);

  if (competition?.isPaid === false) return "FREE";

  return "FREE";
};

export const isUuidLike = (value: string): boolean => UUID_PATTERN.test(value);

export const isEventCompetition = (competition: any): boolean =>
  EVENT_TYPES.has(getEventType(competition));

export const isMainCompetition = (competition: any): boolean =>
  !isEventCompetition(competition);

export const mapCompetitionToGalleryItem = (competition: any) => {
  const details = getSummary(competition);

  return {
    ...competition,
    slug: getRouteSegment(competition),
    title: getTitle(competition),
    posterPath: getImage(competition),
    image: getImage(competition),
    category: toStringSafe(competition?.category) || getEventType(competition),
    date: getDate(competition),
    details,
    description: toStringSafe(competition?.description) || details,
    prizePool: getPrizePool(competition),
    location: getLocation(competition),
    teamSize: getTeamSize(competition),
    eventType: getEventType(competition),
  };
};

export const mapCompetitionToCompetitionDetail = (competition: any) => {
  const subtitle = getSummary(competition);

  return {
    ...competition,
    title: getTitle(competition),
    subtitle,
    category: toStringSafe(competition?.category) || "General",
    date: getDate(competition),
    image: getImage(competition),
    description: toStringSafe(competition?.description) || subtitle,
    prizePool: getPrizePool(competition),
    teamSize: getTeamSize(competition),
    location: getLocation(competition),
    highlights: Array.isArray(competition?.highlights)
      ? competition.highlights
      : [],
    rules: toRules(competition),
  };
};

export const mapCompetitionToEventDetail = (competition: any) => {
  const details = getSummary(competition);

  return {
    ...competition,
    title: getTitle(competition),
    category: toStringSafe(competition?.category) || getEventType(competition),
    details,
    description: toStringSafe(competition?.description) || details,
    image: getImage(competition),
    highlights: Array.isArray(competition?.highlights)
      ? competition.highlights
      : [],
    rules: toRules(competition),
    ticketPrice: getTicketPrice(competition),
    location: getLocation(competition),
    time: toTimeLabel(competition?.startTime || competition?.startDate),
    date: getDate(competition),
    slug: getRouteSegment(competition),
  };
};

export const resolveCompetitionIdFromParam = (
  routeParam: string,
  competitions: any[] = [],
): string | null => {
  const cleanParam = toStringSafe(routeParam);
  if (!cleanParam) return null;

  if (isUuidLike(cleanParam)) {
    return cleanParam;
  }

  const loweredParam = cleanParam.toLowerCase();
  const match = competitions.find((competition) => {
    const id = toStringSafe(competition?.id || competition?._id).toLowerCase();
    const slug = toStringSafe(competition?.slug).toLowerCase();
    const titleSlug = slugify(getTitle(competition));

    return (
      id === loweredParam || slug === loweredParam || titleSlug === loweredParam
    );
  });

  const resolvedId = toStringSafe(match?.id || match?._id);
  return resolvedId || null;
};
