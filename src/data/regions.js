// ─── All regions, every country ──────────────────────────────────────────────
// The map files stay per country; the panels read this merged table so they
// do not care which country a region belongs to.
import { REGIONS as FRANCE_REGIONS } from "./france.js";
import { ITALY_REGIONS } from "./italy.js";

export const REGIONS = { ...FRANCE_REGIONS, ...ITALY_REGIONS };

export const COUNTRIES = {
  France: Object.keys(FRANCE_REGIONS),
  Italy: Object.keys(ITALY_REGIONS)
};
