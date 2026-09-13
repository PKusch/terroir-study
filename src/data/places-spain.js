// ─── Spain sub-region places (real lon/lat, longitude first) ────────────────
// One point per sub-region that is a real place: the centre of the town or
// appellation zone. Keys match REGIONS_SPAIN[key].subRegions exactly.
// Sherry styles (Fino, Manzanilla, Amontillado, Oloroso, Palo Cortado,
// Pedro Ximénez, Cream) are wines, not places, so they have no point.
export const PLACES_SPAIN = {
  rioja: {
    "Rioja Alta": [-2.85, 42.58],
    "Rioja Alavesa": [-2.58, 42.55],
    "Rioja Oriental (Rioja Baja)": [-1.95, 42.30]
  },
  riberaDelDuero: {
    "Ribera del Duero": [-3.85, 41.65]
  },
  priorat: {
    "Priorat DOQ": [0.77, 41.19],
    "Montsant DO (the ring of vineyards around Priorat)": [0.82, 41.14]
  },
  sherry: {
    "Jerez de la Frontera": [-6.14, 36.69],
    "Sanlúcar de Barrameda (Manzanilla)": [-6.35, 36.78],
    "El Puerto de Santa María": [-6.23, 36.60]
  }
};
