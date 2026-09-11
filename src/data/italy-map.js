// ─── Italy region polygons (real lat/lon, hand-projected) ───────────────────
import { geoToSvgItaly as geoToSvg, ptItaly as pt } from "../geo.js";

export const ITALY_REGION_PATHS = {
  piedmont: {
    // Langhe, Roero and Monferrato hills south-east of Turin
    d: `M${pt(7.5,45.1)} L${pt(8.2,45.2)} L${pt(8.7,45.1)} L${pt(8.7,44.6)} L${pt(8.2,44.4)} L${pt(7.6,44.5)} Z`,
    label: geoToSvg(8.1, 44.85)
  },
  tuscany: {
    // Chianti hills, Montalcino, Montepulciano and the Bolgheri coast
    d: `M${pt(10.2,43.9)} L${pt(11.4,43.9)} L${pt(11.8,43.4)} L${pt(11.6,42.7)} L${pt(10.9,42.6)} L${pt(10.3,43.0)} Z`,
    label: geoToSvg(11.0, 43.3)
  },
  veneto: {
    // Lake Garda and Valpolicella in the west, Soave, then the Prosecco hills up to Treviso
    d: `M${pt(10.6,45.7)} L${pt(11.6,45.9)} L${pt(12.4,45.9)} L${pt(12.4,45.5)} L${pt(11.4,45.3)} L${pt(10.7,45.4)} Z`,
    label: geoToSvg(11.5, 45.6)
  },
  southernItaly: {
    // Two closed sub-paths: Campania/Basilicata/Puglia on the mainland, then Sicily
    d: `M${pt(14.0,41.3)} L${pt(15.5,41.5)} L${pt(16.8,41.2)} L${pt(18.3,40.4)} L${pt(18.0,40.0)} L${pt(16.9,40.3)} L${pt(15.8,40.0)} L${pt(14.6,40.4)} L${pt(14.0,40.8)} Z ` +
       `M${pt(12.6,38.0)} L${pt(13.5,38.15)} L${pt(15.1,38.2)} L${pt(15.5,38.0)} L${pt(15.2,37.2)} L${pt(14.3,37.1)} L${pt(12.7,37.7)} Z`,
    label: geoToSvg(16.0, 40.75)
  }
};
