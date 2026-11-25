// ─── Tell them apart: grapes that are easy to confuse ────────────────────────
// Pure logic, no React, so node can test it.
//
// A grape is paired with its closest look-alike among the app's own grape
// profiles: the same colour, almost the same body, acidity and tannin, and as
// many shared aromas as possible. The learner reads a description of one of the
// two and picks which grape it is, then sees both side by side. The pairs come
// from the profiles, not from an official WSET list.
import { GRAPES, regionsGrowing } from "./data/grapes.js";
import { REGIONS } from "./data/regions.js";

const LEVEL = { low: 0, medium: 1, high: 2 };
export const MIN_REGIONS = 3;

const usable = (slug) => {
  const g = GRAPES[slug];
  return g && (g.colour === "red" || g.colour === "white") && (g.aromas ?? []).length >= 4;
};

// How far apart two grapes' structure is: 0 when body, acidity and (for reds)
// tannin all match, one step for each level of difference.
export function structureGap(a, b) {
  const A = GRAPES[a];
  const B = GRAPES[b];
  let gap = Math.abs(LEVEL[A.body] - LEVEL[B.body]) + Math.abs(LEVEL[A.acidity] - LEVEL[B.acidity]);
  if (A.colour === "red") gap += Math.abs(LEVEL[A.tannin] - LEVEL[B.tannin]);
  return gap;
}

export const sharedAromas = (a, b) => GRAPES[a].aromas.filter((x) => GRAPES[b].aromas.includes(x));
export const ownAromas = (a, b) => GRAPES[a].aromas.filter((x) => !GRAPES[b].aromas.includes(x));

const regionCount = (slug) => {
  const r = regionsGrowing(slug, REGIONS);
  return r.red.length + r.white.length;
};

// The closest look-alike for a grape, or null: same colour, at most one step
// apart in structure, at least one shared aroma, and at least two aromas of
// its own on each side so the two can be told apart.
export function lookAlike(slug) {
  if (!usable(slug)) return null;
  let best = null;
  for (const other of Object.keys(GRAPES)) {
    if (other === slug || !usable(other) || GRAPES[other].colour !== GRAPES[slug].colour) continue;
    const gap = structureGap(slug, other);
    const shared = sharedAromas(slug, other).length;
    if (gap > 1 || shared < 1 || ownAromas(slug, other).length < 2 || ownAromas(other, slug).length < 2) continue;
    const score = shared * 10 - gap * 5 + Math.min(regionCount(other), 5);
    if (!best || score > best.score) best = { slug: other, score };
  }
  return best?.slug ?? null;
}

// Grapes grown in at least three of the app's regions that have a look-alike.
export function drillGrapes() {
  return Object.keys(GRAPES).filter((s) => usable(s) && regionCount(s) >= MIN_REGIONS && lookAlike(s));
}

function pick(list, rng) {
  const r = Number(rng());
  const i = Number.isFinite(r) ? Math.floor(Math.min(Math.max(r, 0), 0.999999) * list.length) : 0;
  return list[i];
}

function shuffle(list, rng) {
  const out = [...list];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.min(Math.max(Number(rng()) || 0, 0), 0.999999) * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

// One question: a pair, which of the two is described, and the clue.
export function buildPairQuestion(rng = Math.random, last = null) {
  let pool = drillGrapes();
  if (last && pool.length > 1) pool = pool.filter((s) => s !== last);
  const first = pick(pool, rng);
  const second = lookAlike(first);
  const mystery = rng() < 0.5 ? first : second;
  const other = mystery === first ? second : first;
  const own = shuffle(ownAromas(mystery, other), rng).slice(0, 3);
  const shared = shuffle(sharedAromas(mystery, other), rng).slice(0, 1);
  const g = GRAPES[mystery];
  const options = shuffle([first, second], rng);
  return {
    first,
    mystery,
    options,
    answer: options.indexOf(mystery),
    clue: {
      colour: g.colour,
      body: g.body,
      acidity: g.acidity,
      tannin: g.colour === "red" ? g.tannin : null,
      aromas: shuffle([...own, ...shared], rng)
    }
  };
}

// The two grapes side by side, for after the answer.
export function compare(a, b) {
  const row = (label, field) => ({ label, a: GRAPES[a][field] ?? "—", b: GRAPES[b][field] ?? "—", same: GRAPES[a][field] === GRAPES[b][field] });
  const rows = [row("Body", "body"), row("Acidity", "acidity")];
  if (GRAPES[a].colour === "red") rows.push(row("Tannin", "tannin"));
  return { rows, shared: sharedAromas(a, b), onlyA: ownAromas(a, b), onlyB: ownAromas(b, a) };
}
