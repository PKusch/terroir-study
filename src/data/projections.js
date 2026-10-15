// ─── Which projection and which polygon table a region belongs to ────────────
// The zoomed view draws the country map with a tighter view box and places
// markers with the same projection the map itself uses, so the two agree.
import { geoToSvg, geoToSvgItaly, geoToSvgSpain, geoToSvgGermany, geoToSvgAustria, geoToSvgPortugal, geoToSvgHungary, geoToSvgGreece } from "../geo.js";
import { COUNTRIES } from "./regions.js";
import { FRANCE_REGION_PATHS } from "./france-map.js";
import { ITALY_REGION_PATHS } from "./italy-map.js";
import { SPAIN_REGION_PATHS } from "./spain-map.js";
import { GERMANY_REGION_PATHS } from "./germany-map.js";
import { AUSTRIA_REGION_PATHS } from "./austria-map.js";
import { PORTUGAL_REGION_PATHS } from "./portugal-map.js";
import { HUNGARY_REGION_PATHS } from "./hungary-map.js";
import { GREECE_REGION_PATHS } from "./greece-map.js";
import { NEW_WORLD_REGION_PATHS, NEW_WORLD_PROJECTIONS } from "./newworld-map.js";

const PATHS = {
  France: FRANCE_REGION_PATHS,
  Italy: ITALY_REGION_PATHS,
  Spain: SPAIN_REGION_PATHS,
  Germany: GERMANY_REGION_PATHS,
  Austria: AUSTRIA_REGION_PATHS,
  Portugal: PORTUGAL_REGION_PATHS,
  Hungary: HUNGARY_REGION_PATHS,
  Greece: GREECE_REGION_PATHS,
  "New World": NEW_WORLD_REGION_PATHS
};

const PROJECTIONS = {
  France: () => geoToSvg,
  Italy: () => geoToSvgItaly,
  Spain: () => geoToSvgSpain,
  Germany: () => geoToSvgGermany,
  Austria: () => geoToSvgAustria,
  Portugal: () => geoToSvgPortugal,
  Hungary: () => geoToSvgHungary,
  Greece: () => geoToSvgGreece,
  "New World": (key) => NEW_WORLD_PROJECTIONS[key]
};

export function countryOf(regionKey) {
  return Object.keys(COUNTRIES).find((c) => COUNTRIES[c].includes(regionKey)) ?? null;
}

export function pathFor(regionKey) {
  const c = countryOf(regionKey);
  return c ? PATHS[c][regionKey] : null;
}

export function projectionFor(regionKey) {
  const c = countryOf(regionKey);
  return c ? PROJECTIONS[c](regionKey) : null;
}
