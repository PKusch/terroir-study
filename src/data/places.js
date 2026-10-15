// ─── Sub-region places, per region key: name -> [lon, lat] ───────────────────
// One file per country, merged here. A name must match the region's own
// sub-region list character for character, and a test checks that every
// marker lands on or near its region once projected with the map's projection.
import { PLACES_FRANCE } from "./places-france.js";
import { PLACES_ITALY } from "./places-italy.js";
import { PLACES_SPAIN } from "./places-spain.js";
import { PLACES_AUSTRIA } from "./places-austria.js";
import { PLACES_PORTUGAL } from "./places-portugal.js";
import { PLACES_HUNGARY } from "./places-hungary.js";
import { PLACES_GREECE } from "./places-greece.js";
import { PLACES_GERMANY } from "./places-germany.js";
import { PLACES_NEW_WORLD } from "./places-newworld.js";

export const PLACES = { ...PLACES_FRANCE, ...PLACES_ITALY, ...PLACES_SPAIN, ...PLACES_GERMANY, ...PLACES_AUSTRIA, ...PLACES_PORTUGAL, ...PLACES_HUNGARY, ...PLACES_GREECE, ...PLACES_NEW_WORLD };
