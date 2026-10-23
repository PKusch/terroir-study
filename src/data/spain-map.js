// ─── Spain region polygons (real lat/lon, hand-projected) ───────────────────
import { geoToSvgSpain as geoToSvg, ptSpain as pt } from "../geo.js";

export const SPAIN_REGION_PATHS = {
  catalunya: {
    // Catalunya: the umbrella DO over the whole of Catalonia (drawn first, so smaller DOs sit on top)
    d: `M${pt(0.3,42.3)} L${pt(1.7,42.45)} L${pt(3.2,42.35)} L${pt(3.2,41.7)} L${pt(2.6,41.4)} L${pt(1.3,41.0)} L${pt(0.9,40.55)} L${pt(0.4,40.7)} L${pt(0.35,41.2)} L${pt(0.4,41.8)} Z`,
    label: geoToSvg(1.9, 42.2)
  },
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
  montsant: {
    // Montsant: a semicircle of mountains around Priorat, open to the south
    d: `M${pt(0.62,41.36)} L${pt(0.98,41.38)} L${pt(1.05,41.08)} L${pt(0.65,41.04)} Z`,
    label: geoToSvg(0.8, 41.5)
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
  },
  riasBaixas: {
    // The coast of southern Galicia, from the Miño on the Portuguese border up to the Ulla
    d: `M${pt(-8.85,41.98)} L${pt(-8.15,42.12)} L${pt(-8.2,42.5)} L${pt(-8.65,42.75)} L${pt(-8.95,42.55)} L${pt(-8.8,42.2)} Z`,
    label: geoToSvg(-8.55, 42.4)
  },
  cava: {
    // The Penedès, inland from Barcelona's coast around Sant Sadurní d'Anoia and Vilafranca del Penedès
    d: `M${pt(1.4,41.45)} L${pt(1.95,41.52)} L${pt(2.05,41.38)} L${pt(1.75,41.3)} L${pt(1.45,41.33)} Z`,
    label: geoToSvg(1.7, 41.62)
  },
  rueda: {
    // The Duero plain south of Valladolid, around Rueda, La Seca and Medina del Campo
    d: `M${pt(-5.1,41.5)} L${pt(-4.8,41.55)} L${pt(-4.65,41.35)} L${pt(-4.8,41.2)} L${pt(-5.15,41.25)} Z`,
    label: geoToSvg(-4.9, 41.65)
  },
  toro: {
    // The Duero plain around Toro in Zamora, west of Rueda
    d: `M${pt(-5.65,41.6)} L${pt(-5.3,41.65)} L${pt(-5.25,41.4)} L${pt(-5.55,41.33)} Z`,
    label: geoToSvg(-5.6, 41.75)
  },
  navarra: {
    // From the Pyrenean foothills to the Ebro, east of Rioja
    d: `M${pt(-2.1,42.82)} L${pt(-1.3,42.85)} L${pt(-1.15,42.55)} L${pt(-1.2,42.05)} L${pt(-1.65,42.05)} L${pt(-1.6,42.4)} L${pt(-1.9,42.62)} Z`,
    label: geoToSvg(-1.45, 42.95)
  },
  calatayud: {
    // Calatayud: west Zaragoza, along the Jalón and Jiloca
    d: `M${pt(-1.9,41.5)} L${pt(-1.45,41.5)} L${pt(-1.4,41.2)} L${pt(-1.85,41.15)} Z`,
    label: geoToSvg(-1.65, 41.33)
  },
  carinena: {
    // Cariñena: south-west of Zaragoza, between the Huerva and the Jalón
    d: `M${pt(-1.35,41.5)} L${pt(-0.95,41.5)} L${pt(-0.9,41.2)} L${pt(-1.3,41.15)} Z`,
    label: geoToSvg(-1.12, 41.33)
  },
  bierzo: {
    // Bierzo: a basin in the north of León, ringed by mountains
    d: `M${pt(-6.95,42.7)} L${pt(-6.45,42.7)} L${pt(-6.4,42.45)} L${pt(-6.9,42.4)} Z`,
    label: geoToSvg(-6.67, 42.55)
  },
  valencia: {
    // Valencia: inland from the city, from the Alto Turia down to Clariano
    d: `M${pt(-1.05,39.8)} L${pt(-0.5,39.8)} L${pt(-0.4,38.9)} L${pt(-0.95,38.9)} Z`,
    label: geoToSvg(-0.75, 39.55)
  },
  jumilla: {
    // Jumilla: the Murcia–Albacete border, around Jumilla and Hellín
    d: `M${pt(-1.75,38.65)} L${pt(-1.2,38.65)} L${pt(-1.2,38.35)} L${pt(-1.75,38.35)} Z`,
    label: geoToSvg(-1.48, 38.5)
  },
  yecla: {
    // Yecla: a single municipality north-east of Jumilla
    d: `M${pt(-1.2,38.75)} L${pt(-0.98,38.75)} L${pt(-0.98,38.5)} L${pt(-1.2,38.5)} Z`,
    label: geoToSvg(-1.09, 38.62)
  },
  laMancha: {
    // La Mancha: the great plateau of Ciudad Real, Albacete and Cuenca
    d: `M${pt(-3.4,39.55)} L${pt(-2.45,39.55)} L${pt(-2.45,39.0)} L${pt(-3.4,39.0)} Z`,
    label: geoToSvg(-2.9, 39.27)
  },
  valdepenas: {
    // Valdepeñas: an enclave on the southern edge of La Mancha
    d: `M${pt(-3.6,38.92)} L${pt(-3.1,38.92)} L${pt(-3.1,38.62)} L${pt(-3.6,38.62)} Z`,
    label: geoToSvg(-3.35, 38.77)
  }
};
