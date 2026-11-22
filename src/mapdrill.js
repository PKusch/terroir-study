// ─── Map drill ───────────────────────────────────────────────────────────────
// Pure logic, no React and no DOM, so node can test it.
//
// Three ways to learn where things are, none of which needs a clue to be read:
//   find  - you get a region's name, and click it on the map
//   name  - a region lights up on the map, and you pick its name from four
//   place - you get a village or district, and click where it is on the
//           zoomed map of its region
//   recall - a region lights up, and you type its name with no options to
//           choose from, like labelling a blank map
// A round is ten questions. Nothing here is saved: it is practice, and the
// quiz's own progress is left alone.
import { REGIONS, COUNTRIES } from "./data/regions.js";
import { PLACES } from "./data/places.js";
import { countryOf, pathFor, projectionFor } from "./data/projections.js";
import { zoomViewBox } from "./zoom.js";
import { shuffled } from "./random.js";

export const ROUND_LENGTH = 10;

export const DRILLS = [
  { id: "find", label: "Find it", note: "You get a name. Click it on the map." },
  { id: "name", label: "Name it", note: "A region lights up. Pick its name." },
  { id: "place", label: "Place it", note: "You get a village or district. Click where it is." },
  { id: "recall", label: "Recall it", note: "A region lights up. Type its name, with no options." }
];

// Every region that has a shape on a map, for one country or all of them.
export function regionKeys(country = "All") {
  const keys = country === "All" ? Object.values(COUNTRIES).flat() : COUNTRIES[country] ?? [];
  return keys.filter((k) => REGIONS[k] && pathFor(k));
}

// ── Find it ──────────────────────────────────────────────────────────────────
// Region keys to look for: a random draw with no repeats (the whole list if the
// round is longer than the list).
export function buildFindRound(country = "All", length = ROUND_LENGTH, rng = Math.random) {
  return shuffled(regionKeys(country), rng).slice(0, Math.max(0, length));
}

// ── Name it ──────────────────────────────────────────────────────────────────
// A question about one region: four names, the right one among them. The wrong
// ones come from the same country first, since those are the ones that can be
// confused, then from other countries if the country has too few regions.
export function nameQuestion(key, rng = Math.random) {
  const country = countryOf(key);
  const others = regionKeys("All").filter((k) => k !== key);
  const near = shuffled(others.filter((k) => countryOf(k) === country), rng);
  const far = shuffled(others.filter((k) => countryOf(k) !== country), rng);
  const wrong = [...near, ...far].slice(0, 3);
  const options = shuffled([key, ...wrong], rng);
  return { key, options, answer: options.indexOf(key) };
}

export function buildNameRound(country = "All", length = ROUND_LENGTH, rng = Math.random) {
  return buildFindRound(country, length, rng).map((key) => nameQuestion(key, rng));
}

// ── Place it ─────────────────────────────────────────────────────────────────
// Every named place with a point on a map: { region, name, lon, lat }.
export function placeTargets(country = "All") {
  const out = [];
  for (const key of regionKeys(country)) {
    for (const [name, [lon, lat]] of Object.entries(PLACES[key] ?? {})) out.push({ region: key, name, lon, lat });
  }
  return out;
}

export function buildPlaceRound(country = "All", length = ROUND_LENGTH, rng = Math.random) {
  return shuffled(placeTargets(country), rng).slice(0, Math.max(0, length));
}

// The zoomed map a place is judged on: the same crop the Explore screen's
// "Zoom into" shows, so the markers there and the answers here agree.
export function placeView(regionKey) {
  const path = pathFor(regionKey);
  const project = projectionFor(regionKey);
  const places = Object.values(PLACES[regionKey] ?? {}).map(([lon, lat]) => project(lon, lat));
  const view = zoomViewBox(path.d, 0.35, 50, places);
  return { view, project };
}

// Where a place is, in the zoomed map's own units.
export function targetPoint(target) {
  const { project } = placeView(target.region);
  return project(target.lon, target.lat);
}

// How far from the place a click may land and still count, as a share of the
// zoomed map's width: a hit is within 1/12, "close" within 1/6.
export const hitTolerance = (viewWidth) => viewWidth / 12;
export const closeTolerance = (viewWidth) => viewWidth / 6;

// Judges a click on the zoomed map: "hit", "close" or "miss", and how far off.
export function judgePlacement(click, point, viewWidth) {
  const distance = Math.hypot(click[0] - point[0], click[1] - point[1]);
  const result = distance <= hitTolerance(viewWidth) ? "hit" : distance <= closeTolerance(viewWidth) ? "close" : "miss";
  return { result, distance };
}

// ── Scoring a round ──────────────────────────────────────────────────────────
// `results` is a list of { key, label, correct } (key is the region to study).
// Close placements count as wrong for the score, but are kept apart so the
// screen can say "close".
export function summariseRound(results) {
  const total = results.length;
  const correct = results.filter((r) => r.correct).length;
  const missed = results.filter((r) => !r.correct);
  return { total, correct, percent: total === 0 ? 0 : Math.round((correct / total) * 100), missed };
}

// ── Recall it ───────────────────────────────────────────────────────────────
// A typed name is right if it matches the region's name or one part of it, so
// "Jerez" and "Sherry" both answer "Sherry (Jerez)", and "Alto Adige" answers
// "Trentino-Alto Adige". Case, accents, hyphens and a leading "the" are
// ignored, and one slip of a letter is forgiven in an answer of five letters
// or more, as long as no other region is just as close.
export const normaliseName = (s) =>
  String(s ?? "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
    .replace(/[-–'’.]/g, " ").replace(/[^a-z0-9 ]/g, "").replace(/^the /, "").replace(/\s+/g, " ").trim();

export function acceptedNames(key) {
  const name = REGIONS[key]?.name ?? "";
  const parts = [name, name.replace(/\(.*\)/, ""), ...(name.match(/\(([^)]+)\)/) ?? []).slice(1)];
  for (const sep of ["-", "/"]) if (name.includes(sep) && !name.includes("(")) parts.push(...name.split(sep));
  // A part that is another region's own name ("Penedès" in "Cava (Penedès)")
  // does not count, or it would answer two regions.
  const others = new Set(Object.entries(REGIONS).filter(([k]) => k !== key).map(([, r]) => normaliseName(r.name)));
  return [...new Set(parts.map(normaliseName).filter((p) => p.length >= 3 && (p === normaliseName(name) || !others.has(p))))];
}

function editDistance(a, b) {
  const d = Array.from({ length: a.length + 1 }, (_, i) => [i, ...Array(b.length).fill(0)]);
  for (let j = 1; j <= b.length; j++) d[0][j] = j;
  for (let i = 1; i <= a.length; i++)
    for (let j = 1; j <= b.length; j++)
      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
  return d[a.length][b.length];
}

const distanceTo = (t, key) => Math.min(...acceptedNames(key).map((n) => editDistance(n, t)));

export function matchesRegion(typed, key) {
  const t = normaliseName(typed);
  if (!t) return false;
  if (acceptedNames(key).includes(t)) return true;
  if (t.length < 5) return false;
  const mine = distanceTo(t, key);
  if (mine > 1) return false;
  // A slip only counts if no other region is just as close.
  return regionKeys("All").every((k) => k === key || distanceTo(t, k) > mine);
}

export const buildRecallRound = buildFindRound;
