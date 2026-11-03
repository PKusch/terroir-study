// ─── Styles side by side ─────────────────────────────────────────────────────
// The Styles tab sets the ways of making one family of wine next to each other,
// so the differences stand out. Each card names the regions it links to (keys
// from regions.js; none where no region in the app is a checked example), and the facts come from the same researched rule books as
// the region notes. A field left out is one the sources did not settle.

// Fortified wines: when the spirit goes in decides how sweet the wine is, and
// how it ages decides whether it tastes fresh or nutty.
export const FORTIFIED_STYLES = [
  {
    id: "port",
    name: "Port",
    regions: ["douro"],
    rows: {
      "Spirit added": "During fermentation, once about half the sugar has turned to alcohol",
      "Spirit strength": "About 77% abv, roughly a fifth of the finished wine",
      "Ageing": "Ruby styles and Vintage are kept from air; Tawny ages in oak for years and turns nutty",
      "Finished wine": "Sweet, 19–22% abv"
    }
  },
  {
    id: "madeira",
    name: "Madeira",
    regions: ["madeira"],
    rows: {
      "Spirit added": "During or after fermentation: early for sweet styles, later for dry ones",
      "Spirit strength": "Neutral spirit of at least 96% abv",
      "Ageing": "Heated on purpose: estufagem (tanks at up to 50 °C for three months or more) or canteiro (casks in warm lofts for two years or more)",
      "Finished wine": "Dry to sweet by grape, always high in acid, 17–22% abv"
    }
  },
  {
    id: "sherry",
    name: "Sherry",
    regions: ["sherry"],
    rows: {
      "Spirit added": "After fermentation, to a dry wine (optional since 2022 if the wine is strong enough already)",
      "Spirit strength": "Fino and Manzanilla about 15% (at least 14%); Amontillado at least 16%; Oloroso and Palo Cortado at least 17%",
      "Ageing": "In a solera: under flor (Fino, Manzanilla), in air (Oloroso), or one then the other (Amontillado)",
      "Finished wine": "Dry, unless sweetened (Cream) or made from dried grapes (Pedro Ximénez)"
    }
  },
  {
    id: "vdn",
    name: "Vin Doux Naturel",
    regions: ["languedocRoussillon", "rhoneSouth"],
    rows: {
      "Spirit added": "During fermentation, which stops it and keeps the grape sugar",
      "Spirit strength": "At least 96% abv, 5–10% of the must counted as pure alcohol",
      "Ageing": "Kept from air (rimage, grenat, most Muscat) or aged in air in wood or glass jars in the sun (ambré, tuilé)",
      "Finished wine": "Sweet: at least 15% abv and 45 g/L of sugar (Muscat de Beaumes-de-Venise 100 g/L)"
    }
  },
  {
    id: "marsala",
    name: "Marsala",
    regions: ["southernItaly"],
    rows: {
      "Spirit added": "The rules do not fix when",
      "Ageing": "In wood: Fine 1 year, Superiore 2, Superiore Riserva 4, Vergine 5, Vergine Stravecchio 10",
      "Finished wine": "Secco, semisecco or dolce; oro, ambra (with cooked must) or rubino"
    }
  },
  {
    id: "rutherglen",
    name: "Rutherglen Muscat",
    regions: ["australia"],
    rows: {
      "Spirit added": "Early in fermentation, from grapes left to shrivel on the vine",
      "Ageing": "Old oak, often under hot tin roofs, losing about 3% a year to evaporation",
      "Finished wine": "Very sweet; tiers Rutherglen, Classic, Grand and Rare (over 20 years)"
    }
  }
];

// Sparkling wines: where the second fermentation happens, and how long the wine
// sits on its dead yeast, decide the style.
export const SPARKLING_METHODS = [
  {
    id: "traditional",
    name: "Traditional method",
    regions: ["champagne", "cava", "franciacorta", "trentinoAltoAdige", "loire", "southAfrica"],
    rows: {
      "Second fermentation": "In the bottle it is sold in, after the liqueur de tirage (sugar and yeast) is added",
      "Time on the lees": "At least 9 months in EU law; Champagne 12 before disgorging, sold after 15 (non-vintage) or 36 (vintage) from tirage; Franciacorta 18",
      "Clearing": "Riddling, by hand or in gyropalettes, then disgorging; the liqueur d'expédition sets the sweetness",
      "Style": "Bread, toast and brioche from autolysis; fine bubbles, about 6 bar in Champagne"
    }
  },
  {
    id: "transfer",
    name: "Transfer method",
    regions: [],
    rows: {
      "Second fermentation": "In bottle, as in the traditional method",
      "Time on the lees": "In bottle, before the transfer",
      "Clearing": "Emptied into a pressurised tank, filtered, dosed and rebottled: no riddling or disgorging",
      "Style": "Some lees character, at lower cost; may say 'bottle-fermented' but not 'traditional method'"
    }
  },
  {
    id: "tank",
    name: "Tank method",
    regions: ["veneto"],
    rows: {
      "Second fermentation": "In a sealed steel tank (Charmat or Martinotti)",
      "Time on the lees": "Little or none (Prosecco Rosé at least 60 days)",
      "Clearing": "Filtered under pressure, then bottled",
      "Style": "Fresh primary fruit and softer bubbles, to drink young"
    }
  },
  {
    id: "asti",
    name: "Asti method",
    regions: ["piedmont"],
    rows: {
      "Second fermentation": "None: one fermentation in a sealed tank, stopped by chilling, and the yeast filtered out",
      "Time on the lees": "None",
      "Clearing": "Filtered",
      "Style": "Sweet, grapey and low in alcohol: Moscato d'Asti 4.5–6.5% and lightly sparkling, Asti at least 6% and fully sparkling"
    }
  },
  {
    id: "ancestral",
    name: "Ancestral method",
    regions: ["languedocRoussillon", "penedes"],
    rows: {
      "Second fermentation": "None: the wine is bottled before its first fermentation ends, and it finishes in the bottle",
      "Time on the lees": "Often left in, so the wine may be cloudy",
      "Clearing": "Often not cleared",
      "Style": "Light, fruity, often sweet and low in alcohol: Limoux méthode ancestrale, pét-nat"
    }
  },
  {
    id: "carbonation",
    name: "Carbonation",
    regions: [],
    rows: {
      "Second fermentation": "None: carbon dioxide is pumped in",
      "Time on the lees": "None",
      "Clearing": "Not needed",
      "Style": "Large bubbles that fade fast; EU labels call it 'aerated'"
    }
  }
];

// The EU sweetness terms for sparkling wine (grams of sugar per litre).
export const SPARKLING_SWEETNESS = [
  ["Brut Nature", "under 3, with no sugar added after the second fermentation"],
  ["Extra Brut", "0–6"],
  ["Brut", "under 12"],
  ["Extra Dry", "12–17"],
  ["Sec", "17–32"],
  ["Demi-Sec", "32–50"],
  ["Doux", "over 50"]
];

export const STYLE_FAMILIES = [
  {
    id: "sparkling",
    label: "Sparkling",
    intro: "Where the second fermentation happens, and how long the wine sits on its dead yeast, decide the style.",
    items: SPARKLING_METHODS,
    table: { title: "Sweetness on the label (EU terms, grams of sugar per litre)", rows: SPARKLING_SWEETNESS }
  },
  {
    id: "fortified",
    label: "Fortified",
    intro: "When the spirit goes in decides how sweet the wine is. How it ages decides whether it tastes fresh or nutty.",
    items: FORTIFIED_STYLES
  }
];
