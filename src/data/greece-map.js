// ─── Greece region polygons (real lat/lon, hand-projected) ──────────────────
import { geoToSvgGreece as geoToSvg, ptGreece as pt } from "../geo.js";

export const GREECE_REGION_PATHS = {
  santorini: {
    // The crescent of the island, drawn a little larger than life so it can be clicked
    d: `M${pt(25.33,36.48)} L${pt(25.45,36.5)} L${pt(25.5,36.4)} L${pt(25.45,36.3)} L${pt(25.35,36.33)} L${pt(25.4,36.4)} Z`,
    label: geoToSvg(25.55, 36.62)
  },
  naoussa: {
    // The eastern slopes of Mount Vermio, west of Thessaloniki
    d: `M${pt(21.95,40.58)} L${pt(22.1,40.72)} L${pt(22.25,40.68)} L${pt(22.2,40.55)} L${pt(22.05,40.5)} Z`,
    label: geoToSvg(21.6, 40.9)
  },
  nemea: {
    // The hills of Corinthia, in the northeast of the Peloponnese
    d: `M${pt(22.5,37.7)} L${pt(22.7,37.9)} L${pt(22.9,37.85)} L${pt(22.85,37.7)} L${pt(22.65,37.6)} Z`,
    label: geoToSvg(22.0, 37.5)
  }
};
