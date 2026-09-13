// ─── Which projection and which polygon table a region belongs to ────────────
// The zoomed view draws the country map with a tighter view box and places
// markers with the same projection the map itself uses, so the two agree.
import { geoToSvg, geoToSvgItaly, geoToSvgSpain, geoToSvgGermany } from "../geo.js";
import { COUNTRIES } from "./regions.js";
import { FRANCE_REGION_PATHS } from "./france-map.js";
import { ITALY_REGION_PATHS } from "./italy-map.js";
import { SPAIN_REGION_PATHS } from "./spain-map.js";
import { GERMANY_REGION_PATHS } from "./germany-map.js";
import { NEW_WORLD_REGION_PATHS, NEW_WORLD_PROJECTIONS } from "./newworld-map.js";

const PATHS = {
  France: FRANCE_REGION_PATHS,
  Italy: ITALY_REGION_PATHS,
  Spain: SPAIN_REGION_PATHS,
  Germany: GERMANY_REGION_PATHS,
  "New World": NEW_WORLD_REGION_PATHS
};

const PROJECTIONS = {
  France: () => geoToSvg,
  Italy: () => geoToSvgItaly,
  Spain: () => geoToSvgSpain,
  Germany: () => geoToSvgGermany,
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
