// ─── Spain region polygons (real lat/lon, hand-projected) ───────────────────
import { geoToSvgSpain as geoToSvg, ptSpain as pt } from "../geo.js";

export const SPAIN_REGION_PATHS = {
  rioja: {
    // Along the upper Ebro from Haro in the west to Alfaro in the east
    d: `M${pt(-3.1,42.65)} L${pt(-2.4,42.7)} L${pt(-1.7,42.45)} L${pt(-1.75,42.2)} L${pt(-2.5,42.25)} L${pt(-3.05,42.4)} Z`,
    label: geoToSvg(-2.4, 42.45)
  },
  riberaDelDuero: {
    // The Duero plateau east of Valladolid, from Peñafiel to Aranda de Duero
    d: `M${pt(-4.3,41.75)} L${pt(-3.6,41.8)} L${pt(-3.2,41.7)} L${pt(-3.25,41.45)} L${pt(-3.9,41.4)} L${pt(-4.3,41.5)} Z`,
    label: geoToSvg(-3.75, 41.6)
  },
  priorat: {
    // A small pocket of hills inland from Tarragona; the label sits just above it
    d: `M${pt(0.6,41.3)} L${pt(0.85,41.35)} L${pt(1.0,41.25)} L${pt(0.95,41.1)} L${pt(0.65,41.1)} Z`,
    label: geoToSvg(0.8, 41.45)
  },
  sherry: {
    // The sherry triangle: Jerez, Sanlúcar de Barrameda and El Puerto de Santa María
    d: `M${pt(-6.5,36.85)} L${pt(-6.0,36.9)} L${pt(-5.9,36.6)} L${pt(-6.2,36.5)} L${pt(-6.45,36.6)} Z`,
    label: geoToSvg(-6.2, 36.72)
  }
};
