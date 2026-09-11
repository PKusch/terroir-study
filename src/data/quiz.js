// ─── Quiz Questions ──────────────────────────────────────────────────────────
// Every id is stable: progress is tracked against it.
export const QUIZ_QUESTIONS = [
  {
    id: "fr-01",
    type: "map",
    question: "Which region is famous for its chalk (craie) soils that are perfect for sparkling wine?",
    answer: "champagne",
    explanation: "Champagne's chalk soils provide excellent drainage, retain heat, and store water — all crucial in this marginal climate."
  },
  {
    id: "fr-02",
    type: "connection",
    question: "Why is Merlot dominant on Bordeaux's Right Bank rather than Cabernet Sauvignon?",
    options: [
      "Clay soils retain water → suits earlier-ripening Merlot",
      "Limestone soils are too alkaline for Cabernet Sauvignon",
      "The Atlantic wind is stronger on the Right Bank",
      "Merlot produces higher yields on any soil type"
    ],
    answer: 0,
    region: "bordeaux",
    explanation: "Right Bank clay retains water (Merlot tolerates this). Merlot ripens earlier than Cabernet Sauvignon, crucial in cooler clay sites."
  },
  {
    id: "fr-03",
    type: "connection",
    question: "In Côte-Rôtie, Viognier is sometimes co-fermented with Syrah. Why?",
    options: [
      "To increase the wine's acidity",
      "To stabilise Syrah's colour and add aromatic complexity",
      "Because Viognier is the dominant grape in Northern Rhône",
      "To reduce the alcohol level"
    ],
    answer: 1,
    region: "rhoneNorth",
    explanation: "Viognier's compounds bond with Syrah's anthocyanins, stabilising colour. It also adds floral aromatics and textural richness."
  },
  {
    id: "fr-04",
    type: "connection",
    question: "Why does Burgundy use single-variety wines while Bordeaux blends?",
    options: [
      "Burgundy has better soil so doesn't need to blend",
      "Bordeaux's maritime climate creates vintage variation — blending hedges risk. Burgundy's continental terroir is expressed through single varieties.",
      "EU regulations require Burgundy to use one grape",
      "Pinot Noir and Chardonnay cannot be blended"
    ],
    answer: 1,
    region: "burgundy",
    explanation: "Bordeaux's variable maritime climate means different grapes ripen differently each year — blending provides consistency. Burgundy's focus is terroir expression through one grape."
  },
  {
    id: "fr-05",
    type: "connection",
    question: "What makes Alsace unusually dry for its northerly location?",
    options: [
      "The Gulf Stream warms the region",
      "The Vosges Mountains create a rain shadow",
      "Granite soils absorb all rainfall",
      "It's too cold for rain — mostly snow"
    ],
    answer: 1,
    region: "alsace",
    explanation: "The Vosges Mountains block Atlantic rain, creating one of France's driest wine regions. This allows aromatic grapes to ripen slowly and develop intense flavours."
  },
  {
    id: "fr-06",
    type: "connection",
    question: "Why can Chenin Blanc in Vouvray be made dry, sweet, AND sparkling?",
    options: [
      "Different clones are used for each style",
      "Vouvray uses different soils for each style",
      "Cool Loire climate preserves high acidity that balances all styles; warm autumns allow botrytis for sweet wines",
      "EU regulations require producers to make all three"
    ],
    answer: 2,
    region: "loire",
    explanation: "Chenin Blanc's naturally high acidity is the key — it provides structure for dry wines, balances sweetness, and creates ideal sparkling base wine."
  },
  {
    id: "fr-07",
    type: "map",
    question: "Which region's galets (large stones) radiate heat at night to help Grenache ripen fully?",
    answer: "rhoneSouth",
    explanation: "Châteauneuf-du-Pape's famous galets absorb daytime heat and release it at night, extending the ripening period for Grenache."
  },
  {
    id: "fr-08",
    type: "connection",
    question: "Why is Muscadet aged 'sur lie'?",
    options: [
      "To add residual sugar",
      "To add texture and protect freshness in a naturally light, neutral wine",
      "Because the wine is too tannic otherwise",
      "To develop botrytis character"
    ],
    answer: 1,
    region: "loire",
    explanation: "Melon de Bourgogne is naturally light and neutral. Lees contact adds body, texture, and a slight spritz while protecting from oxidation."
  },
  {
    id: "fr-09",
    type: "scenario",
    question: "A producer in Champagne wants to make a richer, more full-bodied style. Which approach would achieve this?",
    options: [
      "Use only Chardonnay grapes from Côte des Blancs",
      "Increase the proportion of Pinot Noir, extend lees ageing, and use reserve wines",
      "Harvest earlier for higher acidity",
      "Switch to Muscat grapes"
    ],
    answer: 1,
    region: "champagne",
    explanation: "Pinot Noir adds body and red fruit character. Extended lees ageing develops bready richness. Reserve wines add complexity and depth."
  },
  {
    id: "fr-10",
    type: "scenario",
    question: "You're tasting a French Sauvignon Blanc with intense gooseberry, cut grass, and a distinct flinty mineral note. Which region is it most likely from?",
    options: [
      "Bordeaux (Pessac-Léognan)",
      "Languedoc (IGP Pays d'Oc)",
      "Sancerre or Pouilly-Fumé",
      "Alsace"
    ],
    answer: 2,
    region: "loire",
    explanation: "The flinty/gunflint mineral character is classic Sancerre/Pouilly-Fumé, from silex (flint) and Kimmeridgian limestone soils. Herbaceous intensity points to Loire's cool climate."
  },
  {
    id: "fr-11",
    type: "map",
    question: "Which region produces 88% rosé and is home to Bandol — France's greatest Mourvèdre wines?",
    answer: "provence",
    explanation: "Provence is France's rosé capital. Bandol, on the Mediterranean coast, produces serious, age-worthy reds from Mourvèdre (minimum 50% of blend)."
  },
  {
    id: "fr-12",
    type: "connection",
    question: "Why was micro-oxygenation invented in Madiran (South-West)?",
    options: [
      "To increase alcohol levels in cool vintages",
      "To tame Tannat's extremely aggressive tannins and make wines approachable younger",
      "To prevent oxidation in barrel",
      "To speed up malolactic conversion"
    ],
    answer: 1,
    region: "southWest",
    explanation: "Tannat is one of the most tannic grapes in the world. Micro-oxygenation was developed in Madiran in the 1990s to soften its harsh tannins without extended barrel ageing."
  },
  {
    id: "fr-13",
    type: "connection",
    question: "Why does Cru Beaujolais (Morgon, Moulin-à-Vent) taste so different from basic Beaujolais Nouveau?",
    options: [
      "They use different grape varieties",
      "Cru villages have granite soils and use traditional vinification, while Nouveau uses carbonic maceration on clay",
      "Nouveau is made from white grapes",
      "Cru wines are blended with Burgundy Pinot Noir"
    ],
    answer: 1,
    region: "beaujolais",
    explanation: "Granite soils give Cru Beaujolais structure and minerality. Traditional vinification (not carbonic maceration) allows more tannin extraction, complexity, and ageing potential."
  },
  {
    id: "fr-14",
    type: "scenario",
    question: "A wine is described as 'inky black, with plum, violet, and firm tannins — the original Malbec before Argentina.' Where is it from?",
    options: [
      "Bordeaux Left Bank",
      "Northern Rhône",
      "Cahors (South-West)",
      "Languedoc-Roussillon"
    ],
    answer: 2,
    region: "southWest",
    explanation: "Cahors is Malbec's birthplace. Historically called 'black wine' for its inky depth. The limestone causse plateaux produce firm, concentrated Malbec that predates Argentine plantings by centuries."
  }
];
