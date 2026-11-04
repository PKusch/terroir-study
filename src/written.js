// ─── Written-answer practice ─────────────────────────────────────────────────
// Part 2 of the WSET Level 3 theory paper is four written questions. This
// builds practice questions from a region's own notes, and the points to check
// an answer against come from the same notes. It is a self-check, not WSET's
// mark scheme: WSET publishes no rule for how many marks a point earns.
import { REGIONS } from "./data/regions.js";

// WSET's own meaning of the words its written questions use (study blog,
// February 2026).
export const COMMAND_WORDS = {
  Identify: "Give a straightforward answer.",
  Describe: "Give a detailed account of the characteristics, features or aspects.",
  Explain: "Say how and why something happens."
};

// Each kind of question names the region fields its points come from.
export const KINDS = [
  {
    id: "terroir",
    command: "Explain",
    ask: (r) => `Explain how the climate and soils of ${r.name} shape the style of its wines.`,
    fields: ["whyConnection", "climateDetail", "soils"]
  },
  {
    id: "making",
    command: "Explain",
    ask: (r) => `Explain how growing and winemaking choices in ${r.name} affect the finished wines.`,
    fields: ["viticultureNotes", "winemaking"]
  },
  {
    id: "style",
    command: "Describe",
    ask: (r) => `Describe the typical styles of wine made in ${r.name}, and the grapes they come from.`,
    fields: ["typicalStyle"],
    grapes: true
  },
  {
    id: "quality",
    command: "Identify",
    ask: (r) => `Identify the quality levels or labelling terms used for the wines of ${r.name}.`,
    fields: ["qualityLevels"]
  }
];

// Split a note into separate points: one per sentence, or per item where the
// note is already a list. Very short scraps are dropped.
export function splitPoints(text) {
  if (!text) return [];
  const items = Array.isArray(text) ? text : String(text).split(/(?<=[.;!?])\s+(?=[A-Z0-9'"(])/);
  return items.map((s) => s.trim().replace(/[;.]$/, "").trim()).filter((s) => s.length >= 12);
}

export function pointsFor(regionKey, kindId) {
  const r = REGIONS[regionKey];
  const kind = KINDS.find((k) => k.id === kindId);
  if (!r || !kind) return [];
  const points = kind.fields.flatMap((f) => splitPoints(r[f]));
  if (kind.grapes) {
    const red = r.keyGrapes?.red ?? [];
    const white = r.keyGrapes?.white ?? [];
    if (red.length) points.push(`Red grapes: ${red.join(", ")}`);
    if (white.length) points.push(`White grapes: ${white.join(", ")}`);
  }
  return [...new Set(points)];
}

// One practice question: a region, a kind, its wording and its points.
export function buildWritten(regionKey, kindId) {
  const r = REGIONS[regionKey];
  const kind = KINDS.find((k) => k.id === kindId);
  if (!r || !kind) return null;
  return { regionKey, kind: kind.id, command: kind.command, question: kind.ask(r), points: pointsFor(regionKey, kind.id) };
}

// A random question from a list of regions, skipping any with too few points
// to be worth writing about.
export function randomWritten(regionKeys, rng = Math.random) {
  const pairs = regionKeys.flatMap((key) => KINDS.map((k) => [key, k.id])).filter(([key, k]) => pointsFor(key, k).length >= 3);
  if (!pairs.length) return null;
  const [key, k] = pairs[Math.floor(rng() * pairs.length)];
  return buildWritten(key, k);
}

// How many of the points were ticked, as a share.
export function selfScore(points, ticked) {
  const n = points.length;
  const got = points.filter((_, i) => ticked.has(i)).length;
  return { got, n, percent: n ? Math.round((got / n) * 100) : 0 };
}
