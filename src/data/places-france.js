// ─── Real-world coordinates for French sub-regions ───────────────────────────
// Each value is [longitude, latitude] to two decimal places: the centre of the
// village or appellation. Keys match the `subRegions` strings in france.js
// exactly. Entries in france.js that are categories or tiers rather than places
// (for example "Alsace AOC" or "Beaujolais-Villages") are left out on purpose.

export const PLACES_FRANCE = {
  bordeaux: {
    "Médoc": [-0.93, 45.30],
    "Haut-Médoc": [-0.78, 45.08],
    "Pauillac": [-0.75, 45.20],
    "Margaux": [-0.67, 45.04],
    "Saint-Julien": [-0.74, 45.16],
    "Saint-Estèphe": [-0.77, 45.26],
    "Pessac-Léognan": [-0.61, 44.75],
    "Saint-Émilion": [-0.16, 44.89],
    "Pomerol": [-0.20, 44.93],
    "Sauternes": [-0.33, 44.53]
  },
  burgundy: {
    "Chablis": [3.80, 47.81],
    "Côte de Nuits": [4.96, 47.17],
    "Côte de Beaune": [4.82, 47.00],
    "Côte Chalonnaise": [4.72, 46.82],
    "Mâconnais": [4.78, 46.32]
  },
  rhoneNorth: {
    "Côte-Rôtie": [4.81, 45.49],
    "Condrieu": [4.77, 45.46],
    "Hermitage": [4.85, 45.07],
    "Crozes-Hermitage": [4.90, 45.10],
    "Saint-Joseph": [4.80, 45.18],
    "Cornas": [4.84, 44.96]
  },
  rhoneSouth: {
    "Châteauneuf-du-Pape": [4.83, 44.06],
    "Gigondas": [5.00, 44.16],
    "Vacqueyras": [4.98, 44.14]
  },
  loire: {
    "Muscadet": [-1.30, 47.17],
    "Anjou-Saumur": [-0.35, 47.30],
    "Vouvray": [0.80, 47.41],
    "Chinon": [0.24, 47.17],
    "Bourgueil": [0.17, 47.28],
    "Sancerre": [2.83, 47.33],
    "Pouilly-Fumé": [2.95, 47.28]
  },
  alsace: {},
  champagne: {
    "Montagne de Reims": [4.10, 49.15],
    "Côte des Blancs": [4.00, 48.97],
    "Vallée de la Marne": [3.75, 49.07],
    "Côte des Bar": [4.55, 48.15]
  },
  languedocRoussillon: {
    "Corbières": [2.70, 43.10],
    "Minervois": [2.75, 43.30],
    "Fitou": [2.99, 42.90],
    "Pic Saint-Loup": [3.82, 43.77],
    "Limoux": [2.22, 43.05],
    "Maury": [2.61, 42.81],
    "Banyuls": [3.13, 42.48]
  },
  provence: {
    "Côtes de Provence": [6.45, 43.45],
    "Bandol": [5.75, 43.16],
    "Cassis": [5.54, 43.21],
    "Aix-en-Provence": [5.45, 43.53],
    "Les Baux-de-Provence": [4.80, 43.74]
  },
  southWest: {
    "Cahors": [1.44, 44.45],
    "Madiran": [-0.06, 43.55],
    "Jurançon": [-0.39, 43.28],
    "Bergerac": [0.48, 44.85],
    "Fronton": [1.39, 43.84],
    "Irouléguy": [-1.25, 43.18]
  },
  beaujolais: {
    "Morgon": [4.68, 46.16],
    "Fleurie": [4.70, 46.19],
    "Moulin-à-Vent": [4.73, 46.19],
    "Brouilly": [4.69, 46.07],
    "Côte de Brouilly": [4.66, 46.10],
    "Chiroubles": [4.65, 46.18],
    "Juliénas": [4.71, 46.24],
    "Saint-Amour": [4.74, 46.25],
    "Chénas": [4.72, 46.22],
    "Régnié": [4.65, 46.15]
  }
};
