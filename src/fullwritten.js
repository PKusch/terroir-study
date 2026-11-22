// ─── A full 25-mark written question ─────────────────────────────────────────
// Pure logic, no React, so node can test it.
//
// Each of the four questions in part 2 of the WSET Level 3 theory paper is
// worth 25 marks, split into parts of about 2 to 12 marks. WSET's sample paper
// mixes region questions with service ones, such as storing a cork-sealed wine
// for ageing or decanting a mature Vintage Port. This builds one such question
// for a region: parts on its climate and soils, growing and making, styles and
// quality levels, then one service or food part, adding up to 25 marks.
//
// The model answer is the list of points from the app's own notes. WSET does
// not publish its mark schemes, so this follows the study-guide rule of thumb
// of one distinct, accurate point per mark.
import { REGIONS } from "./data/regions.js";
import { KINDS, pointsFor } from "./written.js";

export const TOTAL = 25;

// Service and food parts. The points come from the facts on the Styles tab's
// Service and Food cards (see the README for sources).
export const SERVICE_PARTS = {
  storage: {
    command: "Describe",
    ask: () => "This wine is sealed with a natural cork. Describe the storage conditions you would recommend for its long-term ageing.",
    points: [
      "A cool temperature, about 10–15 °C",
      "A steady temperature, without swings",
      "Dark, away from direct light",
      "Bottles lying on their side, so the cork stays moist and keeps air out",
      "No vibration",
      "Not in a warm kitchen, and not for long in a domestic fridge"
    ]
  },
  opened: {
    command: "Describe",
    ask: () => "A restaurant has half a bottle of this wine left at closing. Describe how it should be kept, and for how long.",
    points: [
      "Re-close the bottle",
      "Keep it in the fridge, which slows oxidation",
      "Store it upright",
      "A re-closed still wine keeps up to about five days",
      "A vacuum pump or inert gas keeps it longer",
      "Air slowly oxidises an opened wine"
    ]
  },
  decanting: {
    command: "Describe",
    ask: () => "Describe the process of opening and decanting a fully mature Vintage Port.",
    points: [
      "A mature Vintage Port has a heavy deposit, so it is decanted",
      "Move the bottle gently so the deposit stays settled",
      "Remove the seal and wipe the top of the bottle",
      "Pour slowly and steadily, with the bottle in front of a light",
      "Stop when the deposit reaches the neck",
      "A heavy deposit can be filtered through clean muslin"
    ]
  },
  sparkling: {
    command: "Describe",
    ask: (r) => `Describe how a sommelier should open a bottle of sparkling wine from ${r.name} safely.`,
    points: [
      "Serve it well chilled",
      "Loosen the cage but leave it on",
      "Keep a hand over the cork and cage",
      "Tilt the bottle to about 45°",
      "Hold the cork still and turn the bottle, not the cork",
      "Keep the bottle tilted for a couple of seconds after the cork comes out",
      "A cloth helps grip"
    ]
  },
  fino: {
    command: "Describe",
    ask: () => "Describe how a Fino should be served, and how long it keeps once open.",
    points: [
      "Well chilled, about 5–7 °C",
      "In a white-wine glass with a generous bowl",
      "Keep an opened bottle in the fridge",
      "Drink it within about a week of opening"
    ]
  },
  sweetFood: {
    command: "Explain",
    ask: (r) => `A guest wants a dry wine from ${r.name} with a very sweet dessert. Explain how the dessert will change the taste of the wine, and what kind of wine would suit it better.`,
    points: [
      "Sweetness in food makes a wine seem more bitter",
      "It makes the wine seem more acidic",
      "It makes the alcohol burn more",
      "It makes the wine seem less sweet and less fruity",
      "It makes the wine seem lighter in body",
      "Choose a wine at least as sweet as the food"
    ]
  },
  chilliFood: {
    command: "Explain",
    ask: (r) => `A guest wants a wine from ${r.name} with a hot chilli dish. Explain how the chilli will change the taste of the wine, and what to look for in a wine to match it.`,
    points: [
      "Chilli heat makes a wine seem more bitter",
      "It makes the wine seem more acidic",
      "It makes the alcohol burn more",
      "Tannin and oak taste harsher",
      "Choose a white or a low-tannin red",
      "Look for fruit and some sweetness",
      "Avoid high alcohol"
    ]
  },
  umamiFood: {
    command: "Explain",
    ask: (r) => `A guest wants a wine from ${r.name} with a dish rich in umami. Explain how the umami will change the taste of the wine, and how the match could be helped.`,
    points: [
      "Umami makes a wine seem more bitter",
      "It makes the wine seem more acidic",
      "It makes the alcohol burn more",
      "It makes the wine seem less sweet, fruity and full",
      "Choose a fruity, low-tannin wine",
      "Salt or acid in the dish helps the match"
    ]
  }
};

// Which service parts fit a region. Sparkling and fortified regions get their
// own; every other region gets storage, opened wine or a food question.
const SPECIAL = { champagne: ["sparkling"], cava: ["sparkling"], franciacorta: ["sparkling"], douro: ["decanting"], sherry: ["fino"] };
const GENERAL = ["storage", "opened", "sweetFood", "chilliFood", "umamiFood"];
export const serviceOptions = (key) => SPECIAL[key] ?? GENERAL;

// Region parts, in the order they are asked, with the most marks each may carry.
const REGION_PARTS = [
  { kind: "terroir", cap: 10 },
  { kind: "making", cap: 10 },
  { kind: "style", cap: 6 },
  { kind: "quality", cap: 4 }
];
const MIN_PART = 2;

// Share `need` marks across the region parts: each part gets one mark per
// point, up to its cap, then the largest is trimmed until the total is right.
// Returns null when the notes do not have enough points.
export function allocate(counts, need) {
  const parts = REGION_PARTS.map((p, i) => ({ ...p, marks: Math.min(counts[i], p.cap) })).filter((p) => p.marks >= MIN_PART);
  let sum = parts.reduce((a, p) => a + p.marks, 0);
  if (sum < need) return null;
  while (sum > need) {
    const big = parts.reduce((a, p) => (p.marks > a.marks ? p : a));
    if (big.marks <= MIN_PART) return null;
    big.marks -= 1;
    sum -= 1;
  }
  return parts.map(({ kind, marks }) => ({ kind, marks }));
}

// A full question for one region with one or two chosen service parts (two
// when the region's notes are short, as in WSET's sample question 4), or null.
export function buildFull(regionKey, serviceIds) {
  const r = REGIONS[regionKey];
  const ids = [].concat(serviceIds);
  const services = ids.map((id) => SERVICE_PARTS[id]);
  if (!r || !ids.length || services.some((x) => !x) || new Set(ids).size !== ids.length) return null;
  const serviceMarks = services.map((x) => Math.min(5, x.points.length));
  const counts = REGION_PARTS.map((p) => pointsFor(regionKey, p.kind).length);
  const shares = allocate(counts, TOTAL - serviceMarks.reduce((a, b) => a + b, 0));
  if (!shares) return null;
  const parts = shares.map(({ kind, marks }) => {
    const k = KINDS.find((x) => x.id === kind);
    return { kind, command: k.command, question: k.ask(r), marks, points: pointsFor(regionKey, kind) };
  });
  services.forEach((x, i) => parts.push({ kind: ids[i], command: x.command, question: x.ask(r), marks: serviceMarks[i], points: x.points }));
  return { regionKey, name: r.name, parts: parts.map((p, i) => ({ ...p, letter: "abcdefg"[i] })) };
}

// Every way to build a question for a region: one service part first, two
// only if one is not enough.
export function fullChoices(key) {
  const own = serviceOptions(key);
  const one = own.map((s) => [s]).filter((ids) => buildFull(key, ids));
  if (one.length) return one;
  const extra = GENERAL.filter((s) => !own.includes(s));
  const pool = [...own, ...extra];
  const two = [];
  for (const a of own) for (const b of pool) if (a !== b && buildFull(key, [a, b])) two.push([a, b]);
  return two;
}

// Regions with enough notes for a full question.
export function fullRegions() {
  return Object.keys(REGIONS).filter((k) => fullChoices(k).length > 0);
}

function pick(list, rng) {
  const r = Number(rng());
  const i = Number.isFinite(r) ? Math.floor(Math.min(Math.max(r, 0), 0.999999) * list.length) : 0;
  return list[i];
}

// A random full question, never the same region twice running.
export function randomFull(regionKeys, rng = Math.random, lastKey = null) {
  let keys = regionKeys.filter((k) => fullChoices(k).length > 0);
  if (lastKey && keys.length > 1) keys = keys.filter((k) => k !== lastKey);
  if (!keys.length) return null;
  const key = pick(keys, rng);
  return buildFull(key, pick(fullChoices(key), rng));
}

// Score: each part earns one mark per ticked point, up to its marks.
export function scoreFull(question, ticked) {
  const parts = question.parts.map((p, i) => {
    const got = Math.min(p.marks, (ticked[i] ?? new Set()).size);
    return { letter: p.letter, got, marks: p.marks };
  });
  const got = parts.reduce((a, p) => a + p.got, 0);
  return { parts, got, total: TOTAL, percent: Math.round((got / TOTAL) * 100) };
}
