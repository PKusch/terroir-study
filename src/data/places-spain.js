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
  },
  toro: {
    "Toro": [-5.39111, 41.52556],
    "Morales de Toro": [-5.3, 41.533],
    "Villabuena del Puente": [-5.40667, 41.38083]
  },
  navarra: {
    "Baja Montaña": [-1.283, 42.583],
    "Valdizarbe": [-1.81504, 42.672134],
    "Tierra Estella": [-2.03194, 42.67194],
    "Ribera Alta": [-1.6625, 42.4875],
    "Ribera Baja": [-1.60667, 42.06528]
  },
  calatayud: {
    "Calatayud": [-1.633, 41.35],
    "Ateca": [-1.7929, 41.3308]
  },
  carinena: {
    "Cariñena": [-1.217, 41.333],
    "Aguarón": [-1.2697, 41.3389]
  },
  bierzo: {
    "Ponferrada": [-6.583, 42.55],
    "Cacabelos": [-6.717, 42.6],
    "Villafranca del Bierzo": [-6.811, 42.606],
    "Corullón": [-6.817, 42.583]
  },
  valencia: {
    "Alto Turia": [-0.998, 39.747],
    "Valentino": [-0.72, 39.471],
    "Moscatel de Valencia": [-0.712, 39.39],
    "Clariano": [-0.519, 38.989]
  },
  jumilla: {
    "Jumilla": [-1.325, 38.4792],
    "Hellín": [-1.68333, 38.51667]
  },
  yecla: {
    "Yecla": [-1.11447, 38.61]
  },
  laMancha: {
    "Tomelloso": [-3.02083, 39.15778],
    "Alcázar de San Juan": [-3.20556, 39.40556],
    "Socuéllamos": [-2.79417, 39.29333],
    "Villarrobledo": [-2.6, 39.26667]
  },
  valdepenas: {
    "Valdepeñas": [-3.385, 38.76167]
  },
  montsant: {
    "Falset": [0.82008, 41.14619],
    "Cornudella de Montsant": [0.90611, 41.26694],
    "La Figuera": [0.73222, 41.21778],
    "Ulldemolins": [0.87636, 41.3226]
  },
  catalunya: {
    "Gandesa": [0.43972, 41.05528],
    "Reus": [1.108, 41.156],
    "Vilafranca del Penedès": [1.69944, 41.34472]
  }
};
