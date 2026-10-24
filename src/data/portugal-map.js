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
  },
  dao: {
    // Dão: granite plateau around Viseu, between the Estrela, Caramulo and Nave mountains
    d: `M${pt(-8.1,40.75)} L${pt(-7.6,40.78)} L${pt(-7.5,40.35)} L${pt(-8.05,40.3)} Z`,
    label: geoToSvg(-7.8, 40.55)
  },
  bairrada: {
    // Bairrada: the flat Atlantic plain around Anadia, inland of Figueira da Foz
    d: `M${pt(-8.65,40.6)} L${pt(-8.3,40.62)} L${pt(-8.3,40.32)} L${pt(-8.65,40.3)} Z`,
    label: geoToSvg(-8.5, 40.45)
  },
  lisboa: {
    // Lisboa: the Atlantic coast and the hills north of Lisbon, from Colares and Bucelas up to Óbidos
    d: `M${pt(-9.45,39.4)} L${pt(-8.95,39.3)} L${pt(-8.95,38.85)} L${pt(-9.45,38.7)} Z`,
    label: geoToSvg(-9.2, 39.05)
  }
};
