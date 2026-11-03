// ─── Portugal region polygons (real lat/lon, hand-projected) ────────────────
import { geoToSvgPortugal as geoToSvg, ptPortugal as pt, geoToSvgMadeira, ptMadeira } from "../geo.js";

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
  },
  madeira: {
    // The whole island, drawn in the inset box (its own projection, see geo.js).
    // Clockwise from Ponta do Pargo in the west along the north coast to Ponta de
    // São Lourenço, then back along the south coast past Funchal (OpenStreetMap points).
    d: `M${ptMadeira(-17.265,32.814)} L${ptMadeira(-17.168,32.87)} L${ptMadeira(-17.107,32.83)} L${ptMadeira(-17.047,32.808)} L${ptMadeira(-16.987,32.832)} L${ptMadeira(-16.91,32.83)} L${ptMadeira(-16.85,32.798)} L${ptMadeira(-16.68,32.748)} L${ptMadeira(-16.74,32.735)} L${ptMadeira(-16.766,32.716)} L${ptMadeira(-16.909,32.642)} L${ptMadeira(-16.946,32.632)} L${ptMadeira(-17.065,32.666)} L${ptMadeira(-17.18,32.718)} L${ptMadeira(-17.228,32.752)} Z`,
    label: geoToSvgMadeira(-16.98, 32.76)
  }
};
