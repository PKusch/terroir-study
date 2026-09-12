// ─── One map per country ─────────────────────────────────────────────────────
// Adding a country: a data file, a map file, one line here, one line in
// data/regions.js. Nothing in App.jsx needs to change.
import { FranceMap } from "./FranceMap.jsx";
import { ItalyMap } from "./ItalyMap.jsx";
import { SpainMap } from "./SpainMap.jsx";
import { GermanyMap } from "./GermanyMap.jsx";
import { NewWorldMap } from "./NewWorldMap.jsx";

export const MAPS = { France: FranceMap, Italy: ItalyMap, Spain: SpainMap, Germany: GermanyMap, "New World": NewWorldMap };
