// ─── All regions, every country ──────────────────────────────────────────────
// The map files stay per country; the panels read this merged table so they
// do not care which country a region belongs to.
import { REGIONS as FRANCE_REGIONS } from "./france.js";
import { ITALY_REGIONS } from "./italy.js";
import { SPAIN_REGIONS } from "./spain.js";
import { GERMANY_REGIONS } from "./germany.js";
import { NEW_WORLD_REGIONS } from "./newworld.js";

export const REGIONS = { ...FRANCE_REGIONS, ...ITALY_REGIONS, ...SPAIN_REGIONS, ...GERMANY_REGIONS, ...NEW_WORLD_REGIONS };

export const COUNTRIES = {
  France: Object.keys(FRANCE_REGIONS),
  Italy: Object.keys(ITALY_REGIONS),
  Spain: Object.keys(SPAIN_REGIONS),
  Germany: Object.keys(GERMANY_REGIONS),
  "New World": Object.keys(NEW_WORLD_REGIONS)
};
