// ─── Real-world centres of the New World sub-regions ────────────────────────
// Keys match NEW_WORLD in newworld.js; names match its subRegions character
// for character. Each value is [longitude, latitude] to two decimal places.

export const PLACES_NEW_WORLD = {
  california: {
    "Napa Valley": [-122.36, 38.40], // Yountville / Oakville, mid-valley
    "Sonoma (Russian River Valley, Dry Creek Valley)": [-122.80, 38.50], // between Santa Rosa and Healdsburg
    "Carneros": [-122.35, 38.24],
    "Central Coast (Santa Barbara, Paso Robles)": [-120.44, 35.00], // Santa Maria, midway between the two
    "Central Valley": [-119.95, 36.95] // San Joaquin Valley near Fresno / Madera
  },
  australia: {
    "Barossa Valley": [138.96, -34.53], // Tanunda
    "Eden Valley": [139.10, -34.65],
    "Clare Valley": [138.61, -33.83],
    "Coonawarra": [140.83, -37.29],
    "Hunter Valley": [151.30, -32.78], // Pokolbin
    "Margaret River": [115.07, -33.95],
    "Yarra Valley": [145.52, -37.65], // Healesville
    "Riverland and Murray–Darling (volume)": [141.40, -34.20], // between Renmark and Mildura
    "McLaren Vale": [138.54, -35.22],
    "Adelaide Hills": [138.83, -34.92],
    "Mornington Peninsula": [145.02, -38.36],
    "Geelong": [144.36, -38.15],
    "Heathcote": [144.7, -36.92],
    "Goulburn Valley": [145.16, -36.77],
    "Tasmania": [147.15, -41.44],
    "Great Southern": [117.67, -34.63],
    "Rutherglen": [146.46, -36.06],
    "Riverina": [146.04, -34.29]
  },
  newZealand: {
    "Marlborough (Wairau Valley, Awatere Valley)": [173.85, -41.52], // Renwick / Blenheim
    "Central Otago": [169.20, -45.04], // Cromwell
    "Hawke's Bay (Gimblett Gravels)": [176.80, -39.63], // Hastings
    "Wairarapa (Martinborough)": [175.46, -41.22],
    "Gisborne": [178.02, -38.66],
    "Nelson": [173.28, -41.27],
    "Canterbury (Waipara)": [172.75, -43.07]
  },
  southAfrica: {
    "Stellenbosch": [18.86, -33.93],
    "Paarl": [18.96, -33.73],
    "Constantia": [18.42, -34.03],
    "Swartland": [18.80, -33.40], // Malmesbury / Riebeek-Kasteel
    "Elgin": [19.03, -34.15],
    "Walker Bay (Hemel-en-Aarde)": [19.24, -34.40] // just inland of Hermanus
  },
  chile: {
    "Casablanca Valley": [-71.41, -33.32],
    "San Antonio Valley (Leyda)": [-71.55, -33.60],
    "Maipo Valley": [-70.65, -33.70], // Pirque / Buin
    "Colchagua Valley": [-71.36, -34.64], // Santa Cruz
    "Southern Central Valley (Rapel, Curicó, Maule)": [-71.40, -35.10] // between Curicó and Talca
  },
  argentina: {
    "Luján de Cuyo": [-68.88, -33.04],
    "Maipú": [-68.79, -32.98],
    "Uco Valley (Tupungato)": [-69.15, -33.40],
    "San Juan": [-68.53, -31.54],
    "Salta (Cafayate)": [-65.98, -26.07], // NOTE: lies north of the argentina tile (latMax -28)
    "Patagonia": [-67.90, -38.90] // Río Negro / Neuquén valleys
  }
};
