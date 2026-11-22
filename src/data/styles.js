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


// Serving and storing wine, as WSET teaches it. Sources: WSET's Level 2 and 3
// specifications and its knowledge-centre blog (2022–2024), the Sherry and Port
// regulators' serving pages, and Wine Folly for glass shapes and opening
// sparkling wine. See the README for the list.
export const SERVICE_STEPS = [
  {
    id: "temperature",
    name: "Serving temperature",
    regions: [],
    rows: {
      "Rule": "Sparkling and sweet wines well chilled; light and medium whites and rosé chilled; full-bodied whites lightly chilled, about 10–13 °C; medium and full-bodied reds at room temperature, about 15–18 °C; light reds at room temperature or lightly chilled",
      "Why": "Below about 6 °C the cold masks a wine's flavours. Light, low-tannin reds such as Beaujolais and Pinot Noir take a chill well",
      "Example": "Fino and Manzanilla 5–7 °C (Sherry regulator); Tawny Port 10–14 °C and Ruby 12–16 °C (Port regulator)"
    }
  },
  {
    id: "glasses",
    name: "Glasses",
    regions: [],
    rows: {
      "Rule": "Smaller glasses for whites, larger bowls for reds, small glasses for fortified wines. For sparkling, a tulip or white-wine glass shows more aroma than a narrow flute",
      "Why": "A small glass keeps a white cool and its aromas close; a big bowl gives a red room to open; a small glass limits evaporation from a strong wine",
      "Example": "In a WSET study, tasters rated aroma lowest from the flute. The Sherry regulator recommends a white-wine glass with a generous bowl over the copita"
    }
  },
  {
    id: "opening",
    name: "Opening sparkling wine",
    regions: [],
    rows: {
      "Rule": "Loosen the cage but keep it on; keep a hand on the cork; tilt the bottle to about 45°; hold the cork still and turn the bottle, not the cork",
      "Why": "The wine is under pressure, so a loose cork can fly out and the wine can foam over",
      "Example": "Keep the bottle tilted for a couple of seconds after the cork comes out; a cloth helps grip"
    }
  },
  {
    id: "decanting",
    name: "Decanting",
    regions: ["douro"],
    rows: {
      "Rule": "Decant wines with a heavy deposit: Vintage Port, reds aged in bottle, lightly filtered reds. Most everyday wines do not need it",
      "Why": "To pour the clear wine off its sediment. Decanting to let a wine breathe is disputed",
      "Example": "Move the bottle gently so the deposit stays settled, pour slowly in front of a light, and stop when the deposit reaches the neck"
    }
  },
  {
    id: "storing",
    name: "Storing unopened wine",
    regions: [],
    rows: {
      "Rule": "Cool and steady, about 10–15 °C; dark; cork-sealed bottles on their side; no vibration. Not in a warm kitchen, and not for long in a fridge",
      "Why": "Heat and swings in temperature age and damage wine; light harms it; a cork that dries out lets air in",
      "Example": "Screwcapped bottles can stand upright. Most wine in the shops is made to drink soon, not to age"
    }
  },
  {
    id: "opened",
    name: "Keeping opened wine",
    regions: [],
    rows: {
      "Rule": "Re-close it and keep it upright in the fridge: still wine up to about five days, longer with a vacuum pump or inert gas. Sparkling wine needs a sparkling stopper, about five days",
      "Why": "Air slowly oxidises the wine and cold slows it down. A vacuum pump would pull the bubbles out of a sparkling wine",
      "Example": "Fortified wines differ: Vintage Port 1–2 days, Tawny 3–4 weeks (Port regulator); Fino and Manzanilla up to a week in the fridge (Sherry regulator)"
    }
  }
];

// Faults WSET Level 3 lists, with the smell and the cause (WSET blog, August
// 2023; Australian Wine Research Institute).
export const WINE_FAULTS = [
  ["Cork taint (TCA)", "musty, damp cardboard; dulls the fruit. A chemical formed by mould, often in the cork"],
  ["Oxidation", "brown colour; bruised apple, nuts, honey. Too much oxygen, from a faulty closure or an old open bottle"],
  ["Reduction", "struck match at low levels, then rotten eggs, cabbage, drains. Too little oxygen during winemaking"],
  ["Brettanomyces", "medicinal, plaster, farmyard. A spoilage yeast, more common in reds"],
  ["Volatile acidity", "vinegar, nail polish. Bacteria working with oxygen"],
  ["Heat damage", "dull, stale, fruit gone; the cork may push out. Storage that was too warm"]
];

// How parts of a dish change the way a wine tastes, as WSET teaches food and
// wine (Level 3 specification; WSET blog, July 2023; WSET Level 1 sample
// question on umami). WSET's own table is in its textbook, so the directions
// below come from study material that agrees with it (Brainscape's WSET decks,
// Decanter's WSET food-matching article).
export const FOOD_EFFECTS = [
  {
    id: "sweetness",
    name: "Sweetness in the food",
    regions: [],
    rows: {
      "Makes the wine seem": "More bitter, more acidic, with more burn from the alcohol; less sweet, less fruity, lighter in body",
      "Pick": "A wine at least as sweet as the food",
      "Why": "Next to sugar, a drier wine tastes thin and sour"
    }
  },
  {
    id: "umami",
    name: "Umami",
    regions: [],
    rows: {
      "Makes the wine seem": "The same as sweetness: more bitter, acidic and alcoholic; less sweet, fruity and full",
      "Pick": "A fruity, low-tannin wine; salt or acid in the dish helps",
      "Why": "Umami is a high-risk food for wine: WSET's own sample question says it does not make wine seem sweeter or fruitier"
    }
  },
  {
    id: "salt",
    name: "Salt",
    regions: [],
    rows: {
      "Makes the wine seem": "Fuller in body, less bitter and less acidic",
      "Pick": "Most wines: salt is one of the easy partners",
      "Why": "Salt is a low-risk food: it softens a wine's harder edges. Salt and fat on a steak smooth a red's tannin"
    }
  },
  {
    id: "acid",
    name: "Acidity in the food",
    regions: [],
    rows: {
      "Makes the wine seem": "Less acidic; fuller, sweeter and fruitier",
      "Pick": "A wine at least as acidic as the food",
      "Why": "Lemon or vinegar softens a high-acid wine, as with oysters; a low-acid wine tastes flat beside a sharp dish"
    }
  },
  {
    id: "bitterness",
    name: "Bitterness",
    regions: [],
    rows: {
      "Makes the wine seem": "More bitter",
      "Pick": "A white wine or a low-tannin red",
      "Why": "Bitterness in the food adds to the bitterness of tannin and oak"
    }
  },
  {
    id: "chilli",
    name: "Chilli heat",
    regions: [],
    rows: {
      "Makes the wine seem": "More bitter, more acidic, with more burn from the alcohol",
      "Pick": "A white or a low-tannin red with fruit, some sweetness and not too much alcohol",
      "Why": "Chilli, like sugar, makes tannin and alcohol taste harsher"
    }
  },
  {
    id: "fat",
    name: "Fat and oil",
    regions: [],
    rows: {
      "Makes the wine seem": "Softer in tannin",
      "Pick": "A high-acid wine to cut through, or a tannic red with fatty meat",
      "Why": "Acidity cuts the oily feeling of rich food; fat smooths tannin"
    }
  }
];

// High-risk and low-risk foods and wines.
export const FOOD_RISK = [
  ["High-risk foods", "sweetness, umami, bitterness, chilli heat: they make wine taste harder"],
  ["Low-risk foods", "salt and acidity: they make wine taste softer"],
  ["High-risk wines", "high tannin or oak, high acidity, high alcohol, complex flavours: can clash, or be the most exciting match"],
  ["Low-risk wines", "simple, unoaked, with a little sugar: safe, but less interesting"]
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
  },
  {
    id: "service",
    label: "Service",
    intro: "Serving, storing and the faults to spot. Questions 3 and 4 of the written paper carry marks for these.",
    items: SERVICE_STEPS,
    table: { title: "Common faults: what you smell, and why", rows: WINE_FAULTS }
  },
  {
    id: "food",
    label: "Food",
    intro: "What a dish does to the taste of a wine. The aim is a wine that seems softer, sweeter and fruitier with the food, not harder.",
    items: FOOD_EFFECTS,
    table: { title: "High risk and low risk", rows: FOOD_RISK }
  }
];
