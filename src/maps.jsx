// ─── One map per country ─────────────────────────────────────────────────────
// Adding a country: a data file, a map file, one line here, one line in
// data/regions.js. Nothing in App.jsx needs to change.
import { FranceMap } from "./FranceMap.jsx";
import { ItalyMap } from "./ItalyMap.jsx";
import { SpainMap } from "./SpainMap.jsx";

export const MAPS = { France: FranceMap, Italy: ItalyMap, Spain: SpainMap };
