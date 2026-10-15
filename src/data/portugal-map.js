// ─── Portugal region polygons (real lat/lon, hand-projected) ────────────────
import { geoToSvgPortugal as geoToSvg, ptPortugal as pt } from "../geo.js";

export const PORTUGAL_REGION_PATHS = {
  vinhoVerde: {
    // The wet northwest, between the Minho river on the Spanish border and the Douro
    d: `M${pt(-8.85,41.88)} L${pt(-8.25,42.1)} L${pt(-8.05,41.8)} L${pt(-8.1,41.35)} L${pt(-8.3,41.15)} L${pt(-8.7,41.1)} L${pt(-8.8,41.5)} Z`,
    label: geoToSvg(-8.45, 41.6)
  },
  douro: {
    // The river valley from Mesão Frio east to the Spanish border at Barca d'Alva
    d: `M${pt(-7.95,41.12)} L${pt(-7.9,41.28)} L${pt(-7.5,41.36)} L${pt(-7.1,41.3)} L${pt(-6.95,41.17)} L${pt(-6.98,41.03)} L${pt(-7.3,40.98)} L${pt(-7.65,41.03)} L${pt(-7.9,41.03)} Z`,
    label: geoToSvg(-7.45, 41.17)
  },
  alentejo: {
    // The large southern plain, from Portalegre in the north to Moura in the south
    d: `M${pt(-8.2,39.5)} L${pt(-7.4,39.55)} L${pt(-7.15,38.9)} L${pt(-7.3,38.2)} L${pt(-7.45,37.75)} L${pt(-8.2,37.8)} L${pt(-8.6,38.2)} L${pt(-8.5,38.7)} L${pt(-8.4,39.1)} Z`,
    label: geoToSvg(-7.9, 38.6)
  }
};
