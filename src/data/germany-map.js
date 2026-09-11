// ─── Germany region polygons (real lat/lon, hand-projected) ─────────────────
import { geoToSvgGermany as geoToSvg, ptGermany as pt } from "../geo.js";

export const GERMANY_REGION_PATHS = {
  mosel: {
    // A diagonal strip along the river from Trier (south-west) to Koblenz (north-east)
    d: `M${pt(6.55,49.6)} L${pt(6.5,49.85)} L${pt(7.0,50.15)} L${pt(7.5,50.45)} L${pt(7.75,50.3)} L${pt(7.2,49.95)} L${pt(6.85,49.6)} Z`,
    label: geoToSvg(6.95, 49.9)
  },
  rheingau: {
    // The short east–west stretch of the Rhine between Rüdesheim and Hochheim
    d: `M${pt(7.7,50.0)} L${pt(7.75,50.1)} L${pt(8.4,50.1)} L${pt(8.4,49.97)} L${pt(8.0,49.95)} Z`,
    label: geoToSvg(8.07, 50.0)
  },
  pfalz: {
    // A north–south strip along the Haardt hills, west of the Rhine
    d: `M${pt(8.0,49.6)} L${pt(8.4,49.6)} L${pt(8.4,49.1)} L${pt(8.05,49.1)} Z`,
    label: geoToSvg(8.2, 49.37)
  }
};
