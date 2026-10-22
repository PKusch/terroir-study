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
  },
  riasBaixas: {
    "Val do Salnés": [-8.81361, 42.51472],
    "Condado do Tea": [-8.49806, 42.08306],
    "O Rosal": [-8.825, 41.93556],
    "Soutomaior": [-8.567, 42.333],
    "Ribeira do Ulla": [-8.66028, 42.73806]
  },
  cava: {
    "Sant Sadurní d'Anoia": [1.785, 41.42611],
    "Vilafranca del Penedès": [1.69294, 41.34826]
  },
  rueda: {
    "Rueda": [-4.96, 41.414],
    "La Seca": [-4.9069, 41.415],
    "Serrada": [-4.8611, 41.4592],
    "Nava del Rey": [-5.0833, 41.3333],
    "Medina del Campo": [-4.9167, 41.3],
    "Tordesillas": [-5.0, 41.5]
  }
};
