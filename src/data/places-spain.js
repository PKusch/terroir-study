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
    "Ribera del Duero": [-3.85, 41.65],
    "Peñafiel": [-4.122, 41.597],
    "Aranda de Duero": [-3.685, 41.672],
    "Roa": [-3.928, 41.697],
    "Pesquera de Duero": [-4.156, 41.642]
  },
  priorat: {
    "Priorat DOQ": [0.77, 41.19],
    "Montsant DO (the ring of vineyards around Priorat)": [0.82, 41.14],
    "Gratallops": [0.777, 41.193],
    "Porrera": [0.856, 41.189],
    "Poboleda": [0.845, 41.233],
    "Torroja del Priorat": [0.811, 41.213]
  },
  sherry: {
    "Jerez de la Frontera": [-6.14, 36.69],
    "Sanlúcar de Barrameda (Manzanilla)": [-6.35, 36.78],
    "El Puerto de Santa María": [-6.23, 36.6],
    "Chipiona": [-6.435, 36.736],
    "Trebujena": [-6.177, 36.869],
    "Lebrija": [-6.076, 36.919]
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
    "Vilafranca del Penedès": [1.69294, 41.34826],
    "Subirats": [1.811, 41.395],
    "Gelida": [1.861, 41.432],
    "Avinyonet del Penedès": [1.782, 41.356]
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
    "Villabuena del Puente": [-5.40667, 41.38083],
    "San Román de Hornija": [-5.285, 41.481],
    "Venialbo": [-5.539, 41.39],
    "Sanzoles": [-5.567, 41.432]
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
    "Ateca": [-1.7929, 41.3308],
    "Munébrega": [-1.721, 41.24],
    "Maluenda": [-1.616, 41.287],
    "Cervera de la Cañada": [-1.735, 41.432],
    "Villarroya de la Sierra": [-1.784, 41.464]
  },
  carinena: {
    "Cariñena": [-1.217, 41.333],
    "Aguarón": [-1.2697, 41.3389],
    "Paniza": [-1.212, 41.284],
    "Almonacid de la Sierra": [-1.324, 41.397],
    "Longares": [-1.168, 41.403],
    "Cosuenda": [-1.299, 41.366]
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
    "Hellín": [-1.68333, 38.51667],
    "Tobarra": [-1.689, 38.594],
    "Ontur": [-1.498, 38.615],
    "Albatana": [-1.523, 38.571]
  },
  yecla: {
    "Yecla": [-1.11447, 38.61],
    "Campo Arriba": [-1.162, 38.647],
    "Campo Abajo": [-1.131, 38.48]
  },
  laMancha: {
    "Tomelloso": [-3.02083, 39.15778],
    "Alcázar de San Juan": [-3.20556, 39.40556],
    "Socuéllamos": [-2.79417, 39.29333],
    "Villarrobledo": [-2.6, 39.26667]
  },
  valdepenas: {
    "Valdepeñas": [-3.385, 38.76167],
    "Moral de Calatrava": [-3.579, 38.829],
    "San Carlos del Valle": [-3.242, 38.844],
    "Santa Cruz de Mudela": [-3.467, 38.642],
    "Torrenueva": [-3.365, 38.64],
    "Alcubillas": [-3.134, 38.752]
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
    "Vilafranca del Penedès": [1.69944, 41.34472],
    "Alella": [2.294, 41.496],
    "Raimat": [0.478, 41.678],
    "Sant Sadurní d'Anoia": [1.786, 41.424]
  },
  penedes: {
    "Vilafranca del Penedès": [1.6929, 41.3483],
    "Sant Sadurní d'Anoia": [1.785, 41.4261],
    "Sitges": [1.823, 41.237],
    "El Vendrell": [1.5347, 41.2203],
    "Olèrdola": [1.7231, 41.3219]
  },
  castillaYLeon: {
    "Valladolid": [-4.72, 41.65],
    "León": [-5.57, 42.6],
    "Burgos": [-3.7, 42.34],
    "Palencia": [-4.53, 42.01],
    "Zamora": [-5.75, 41.5],
    "Salamanca": [-5.66, 40.97],
    "Segovia": [-4.12, 40.95],
    "Ávila": [-4.7, 40.66],
    "Soria": [-2.47, 41.76]
  }
};
