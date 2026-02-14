import { useState, useEffect, useCallback, useRef } from "react";

// ─── Wine Data: France Regions ───────────────────────────────────────────────
const REGIONS = {
  bordeaux: {
    name: "Bordeaux",
    climate: "Maritime",
    climateDetail: "Warm summers moderated by Atlantic; autumn rain risk at harvest",
    keyGrapes: { red: ["Cabernet Sauvignon", "Merlot", "Cabernet Franc"], white: ["Sauvignon Blanc", "Sémillon"] },
    subRegions: ["Médoc", "Haut-Médoc", "Pauillac", "Margaux", "Saint-Julien", "Saint-Estèphe", "Pessac-Léognan", "Saint-Émilion", "Pomerol", "Sauternes"],
    soils: "Left Bank: gravel (Médoc). Right Bank: clay & limestone (Saint-Émilion, Pomerol).",
    viticultureNotes: "Blending tradition driven by vintage variation. Left Bank = Cabernet Sauvignon dominant. Right Bank = Merlot dominant.",
    winemaking: "Oak ageing (new French barriques for top wines). Blending is key — balances ripeness across varieties.",
    typicalStyle: "Left Bank: structured, tannic, blackcurrant, cedar. Right Bank: softer, plum, rounder tannins.",
    qualityLevels: ["Bordeaux AOC", "Bordeaux Supérieur", "Cru Bourgeois", "Cru Classé", "Premier Grand Cru Classé"],
    whyConnection: "Gravel soils on Left Bank drain well and retain heat → suits late-ripening Cabernet Sauvignon. Clay on Right Bank retains water → suits earlier-ripening Merlot.",
    color: "#722F37"
  },
  burgundy: {
    name: "Burgundy",
    climate: "Continental",
    climateDetail: "Cold winters, warm summers. Frost and hail risks. Vintage variation significant.",
    keyGrapes: { red: ["Pinot Noir"], white: ["Chardonnay"] },
    subRegions: ["Chablis", "Côte de Nuits", "Côte de Beaune", "Côte Chalonnaise", "Mâconnais"],
    soils: "Limestone and clay; varies plot by plot. Chablis: Kimmeridgian limestone.",
    viticultureNotes: "Single-variety wines. Terroir-driven — same grape, different site = different wine. Tiny plots (climat).",
    winemaking: "Pinot Noir: whole bunch fermentation possible, gentle extraction. Chardonnay: barrel fermentation, lees stirring (bâtonnage).",
    typicalStyle: "Pinot Noir: red fruit, silky tannins, earthy complexity. Chardonnay: ranges from steely mineral (Chablis) to rich buttery (Meursault).",
    qualityLevels: ["Bourgogne AOC", "Village", "Premier Cru", "Grand Cru"],
    whyConnection: "Continental climate with cold winters limits to early-ripening varieties → Pinot Noir and Chardonnay thrive. Limestone soils add minerality and finesse.",
    color: "#8B1A1A"
  },
  rhoneNorth: {
    name: "Northern Rhône",
    climate: "Continental",
    climateDetail: "Warm summers, cold winters. Mistral wind dries grapes and reduces disease. Steep slopes.",
    keyGrapes: { red: ["Syrah"], white: ["Viognier", "Marsanne", "Roussanne"] },
    subRegions: ["Côte-Rôtie", "Condrieu", "Hermitage", "Crozes-Hermitage", "Saint-Joseph", "Cornas"],
    soils: "Granite (Côte-Rôtie, Hermitage). Steep terraced hillsides.",
    viticultureNotes: "Steep slopes require hand harvesting. Single variety (Syrah) for reds. Small production, high quality.",
    winemaking: "Syrah: whole bunch fermentation common in top wines. Some co-fermentation with Viognier (Côte-Rôtie).",
    typicalStyle: "Syrah: black pepper, dark fruit, floral, smoky. Ages beautifully. Viognier: aromatic, stone fruit, low acid.",
    qualityLevels: ["Côte-Rôtie", "Hermitage (top)", "Crozes-Hermitage (accessible)", "Saint-Joseph"],
    whyConnection: "Steep granite slopes = good drainage and sun exposure for Syrah. Mistral wind reduces rot risk. Co-fermentation with Viognier stabilises Syrah's colour.",
    color: "#4A0E0E"
  },
  rhoneSouth: {
    name: "Southern Rhône",
    climate: "Mediterranean",
    climateDetail: "Hot, dry summers. Mistral wind. Drought stress possible.",
    keyGrapes: { red: ["Grenache", "Syrah", "Mourvèdre"], white: ["Grenache Blanc", "Roussanne", "Clairette"] },
    subRegions: ["Châteauneuf-du-Pape", "Gigondas", "Vacqueyras", "Côtes du Rhône", "Côtes du Rhône-Villages"],
    soils: "Châteauneuf-du-Pape: famous galets (large stones) that retain heat.",
    viticultureNotes: "Bush vines (gobelet) for Grenache — no trellising needed in hot climate. Blending tradition.",
    winemaking: "Large old oak (foudre) for ageing — oak flavour not the goal. Grenache-based blends.",
    typicalStyle: "Rich, warm, high alcohol. Red fruit, herbs (garrigue), spice. Generous and full-bodied.",
    qualityLevels: ["Côtes du Rhône", "Côtes du Rhône-Villages", "Gigondas", "Châteauneuf-du-Pape"],
    whyConnection: "Mediterranean heat → Grenache thrives (drought-tolerant, late-ripening). Galets radiate heat at night → extra ripening. Bush vines shade grapes from intense sun.",
    color: "#A0522D"
  },
  loire: {
    name: "Loire Valley",
    climate: "Cool to moderate",
    climateDetail: "Ranges from cool maritime (Muscadet) to cool continental (Sancerre). River moderates temperature.",
    keyGrapes: { red: ["Cabernet Franc"], white: ["Sauvignon Blanc", "Chenin Blanc", "Melon de Bourgogne"] },
    subRegions: ["Muscadet", "Anjou-Saumur", "Vouvray", "Chinon", "Bourgueil", "Sancerre", "Pouilly-Fumé"],
    soils: "Varied: schist (Muscadet), tuffeau limestone (Vouvray), flint/kimmeridgian (Sancerre).",
    viticultureNotes: "Cool climate = high acidity wines. Chenin Blanc incredibly versatile (dry, sweet, sparkling). Botrytis for sweet wines in warm autumns.",
    winemaking: "Muscadet: sur lie ageing adds texture. Vouvray: range from bone dry to lusciously sweet. Sancerre: stainless steel, crisp, unoaked.",
    typicalStyle: "Sauvignon Blanc: herbaceous, citrus, mineral. Chenin Blanc: apple, honey, quince (varies dry to sweet). Cabernet Franc: red fruit, pencil shavings, fresh.",
    qualityLevels: ["Muscadet Sèvre et Maine sur Lie", "Vouvray", "Sancerre", "Pouilly-Fumé"],
    whyConnection: "Cool climate preserves acidity → ideal for Chenin Blanc's versatility. Flint soils in Sancerre give Sauvignon Blanc its 'gunflint' minerality. River Loire moderates frost risk.",
    color: "#DAA520"
  },
  alsace: {
    name: "Alsace",
    climate: "Cool continental (dry)",
    climateDetail: "Vosges Mountains create rain shadow — one of driest regions in France. Cold winters, warm dry summers.",
    keyGrapes: { red: [], white: ["Riesling", "Gewurztraminer", "Pinot Gris", "Muscat"] },
    subRegions: ["Alsace AOC", "Alsace Grand Cru", "Crémant d'Alsace"],
    soils: "Hugely varied: granite, limestone, sandstone, volcanic, clay. 51 Grand Cru sites.",
    viticultureNotes: "Single variety wines (unusual for France). Labelled by grape variety. Grand Cru = single vineyard, specific grapes only.",
    winemaking: "Mostly stainless steel. Some traditional large oak (foudre). Vendange Tardive (late harvest) and Sélection de Grains Nobles (botrytis).",
    typicalStyle: "Riesling: dry, steely, citrus, petrol with age. Gewurztraminer: aromatic, lychee, rose, off-dry to sweet. Pinot Gris: rich, smoky, honeyed.",
    qualityLevels: ["Alsace AOC", "Alsace Grand Cru", "Vendange Tardive", "Sélection de Grains Nobles"],
    whyConnection: "Rain shadow of Vosges = dry conditions → aromatic grapes develop intense flavours without rot. Cool climate = high acidity balancing residual sugar in off-dry styles.",
    color: "#F0C75E"
  },
  champagne: {
    name: "Champagne",
    climate: "Cool continental (marginal)",
    climateDetail: "At the northern limit of viticulture. Cool temperatures = high acidity, low sugar — perfect for sparkling base wine.",
    keyGrapes: { red: ["Pinot Noir", "Pinot Meunier"], white: ["Chardonnay"] },
    subRegions: ["Montagne de Reims", "Côte des Blancs", "Vallée de la Marne", "Côte des Bar"],
    soils: "Chalk (craie) — excellent drainage, retains heat, stores water. Unique to Champagne.",
    viticultureNotes: "Marginal climate means grapes barely ripen → high acid, low sugar = ideal sparkling base. Traditional method (méthode traditionnelle).",
    winemaking: "Two fermentations: 1st in tank/barrel, 2nd in bottle (prise de mousse). Autolysis on lees gives bready, biscuity character. Non-vintage: min 15 months on lees. Vintage: min 36 months.",
    typicalStyle: "Non-vintage: fresh, citrus, brioche, fine bubbles. Blanc de Blancs: elegant, citrus. Blanc de Noirs: fuller, red fruit. Rosé: red fruit, copper colour.",
    qualityLevels: ["Non-Vintage", "Vintage", "Prestige Cuvée", "Blanc de Blancs", "Blanc de Noirs"],
    whyConnection: "Chalk soil stores water (drought buffer) and radiates heat (aids ripening in marginal climate). High acid base wine is essential — secondary fermentation adds 1.5% ABV and CO2.",
    color: "#E8D5B7"
  },
  languedocRoussillon: {
    name: "Languedoc-Roussillon",
    climate: "Mediterranean",
    climateDetail: "Hot, dry summers. Some areas very warm. France's largest wine region by volume.",
    keyGrapes: { red: ["Grenache", "Syrah", "Mourvèdre", "Carignan"], white: ["Grenache Blanc", "Picpoul", "Viognier"] },
    subRegions: ["Corbières", "Minervois", "Fitou", "Pic Saint-Loup", "Limoux", "Maury", "Banyuls"],
    soils: "Varied: limestone, schist, garrigue scrubland.",
    viticultureNotes: "Traditionally bulk wine, now quality revolution. Old vine Carignan. IGP Pays d'Oc allows varietal labelling.",
    winemaking: "Range from bulk to serious quality. Maury and Banyuls: fortified sweet wines (Vin Doux Naturel) from Grenache.",
    typicalStyle: "Reds: ripe, warm, herbal (garrigue). Best sites rival Southern Rhône. Fortified: sweet, complex, oxidative.",
    qualityLevels: ["IGP Pays d'Oc", "Languedoc AOC", "Specific AOCs (Corbières, Minervois)", "Vin Doux Naturel"],
    whyConnection: "Mediterranean heat + old vines = concentrated, low-yield wines. Schist soils in Roussillon stress vines → complex Grenache for fortified wines.",
    color: "#6B3A2A"
  },
  provence: {
    name: "Provence",
    climate: "Mediterranean",
    climateDetail: "Hot, dry summers. Mistral wind. Strong sunshine. France's oldest wine region.",
    keyGrapes: { red: ["Mourvèdre", "Grenache", "Syrah", "Cinsault"], white: ["Rolle (Vermentino)", "Clairette"] },
    subRegions: ["Côtes de Provence", "Bandol", "Cassis", "Aix-en-Provence", "Les Baux-de-Provence"],
    soils: "Limestone, clay, schist. Bandol: terraced limestone amphitheatre facing the sea.",
    viticultureNotes: "Rosé dominates (88% of production). Bandol is the exception — serious, age-worthy reds from Mourvèdre (min 50% of blend). Bush vines common.",
    winemaking: "Rosé: direct pressing or short maceration for pale colour. Bandol reds: min 18 months ageing in large oak. Quality rosé is serious winemaking — not simple.",
    typicalStyle: "Rosé: pale, dry, delicate, red fruit and herbs. Bandol red: dark, structured, savoury, meaty — needs ageing. Bandol is Mourvèdre's spiritual home.",
    qualityLevels: ["Côtes de Provence", "Coteaux d'Aix-en-Provence", "Bandol", "Cassis"],
    whyConnection: "Mediterranean sun + Mistral wind = perfect for rosé (healthy grapes, early harvest for freshness). Bandol's sheltered limestone terraces are warm enough to fully ripen Mourvèdre, which needs more heat than Grenache.",
    color: "#E8A0B0"
  },
  southWest: {
    name: "South-West",
    climate: "Continental to maritime",
    climateDetail: "Inland = warmer, more continental than Bordeaux. Atlantic influence decreases moving east. Pyrenean foothills add altitude.",
    keyGrapes: { red: ["Malbec (Côt)", "Tannat", "Négrette"], white: ["Gros Manseng", "Petit Manseng"] },
    subRegions: ["Cahors", "Madiran", "Jurançon", "Bergerac", "Fronton", "Irouléguy"],
    soils: "Cahors: limestone plateaux (causse) and gravel terraces. Madiran: clay-limestone. Jurançon: Pyrenean foothills.",
    viticultureNotes: "Indigenous grape varieties distinguish this region from Bordeaux. Malbec originated here (not Argentina). Tannat is extremely tannic — needs careful handling.",
    winemaking: "Cahors: Malbec min 70%. Historically 'black wine' — inky, tannic. Modern styles softer. Madiran: Tannat — micro-oxygenation invented here to tame tannins. Jurançon: late-harvest sweet whites from Petit Manseng.",
    typicalStyle: "Cahors: dark, plummy, firm tannins — the original Malbec. Madiran: powerful, tannic, dark fruit. Jurançon sec: dry, aromatic. Jurançon moelleux: sweet, tropical, honeyed.",
    qualityLevels: ["Bergerac", "Cahors", "Madiran", "Jurançon"],
    whyConnection: "Continental climate inland = fully ripe, concentrated grapes. Malbec on limestone causse → deep colour, firm structure. Tannat's extreme tannins led to the invention of micro-oxygenation. Petit Manseng's thick skins resist botrytis and concentrate sugar for sweet wines.",
    color: "#7B8B3A"
  },
  beaujolais: {
    name: "Beaujolais",
    climate: "Continental to Mediterranean transition",
    climateDetail: "Warmer than Burgundy to the north. Sheltered from cold westerly winds. Southern influence.",
    keyGrapes: { red: ["Gamay"], white: [] },
    subRegions: ["Beaujolais", "Beaujolais-Villages", "Morgon", "Fleurie", "Moulin-à-Vent", "Brouilly", "Côte de Brouilly", "Chiroubles", "Juliénas", "Saint-Amour", "Chénas", "Régnié"],
    soils: "Cru Beaujolais: granite. Southern Beaujolais: clay and limestone.",
    viticultureNotes: "Gamay is the only grape. 10 Cru villages on granite hills produce the best wines. Beaujolais Nouveau is the simple, carbonic maceration style — but Cru Beaujolais is serious wine.",
    winemaking: "Carbonic maceration (whole bunches, intracellular fermentation) gives fresh, fruity character. Cru wines may use traditional vinification and oak ageing for more structure.",
    typicalStyle: "Beaujolais/Nouveau: light, fruity, banana, bubblegum. Cru Beaujolais (Morgon, Moulin-à-Vent): structured, earthy, can age 10+ years — rivals Burgundy Pinot Noir in complexity.",
    qualityLevels: ["Beaujolais", "Beaujolais-Villages", "10 Cru Beaujolais (Morgon, Fleurie, Moulin-à-Vent etc.)"],
    whyConnection: "Granite soils in Cru villages give Gamay minerality and structure it lacks on clay. Carbonic maceration extracts colour and fruit without harsh tannins — perfect for Gamay's thin-skinned, low-tannin character.",
    color: "#9B59B6"
  }
};

// ─── Quiz Questions ──────────────────────────────────────────────────────────
const QUIZ_QUESTIONS = [
  {
    type: "map",
    question: "Which region is famous for its chalk (craie) soils that are perfect for sparkling wine?",
    answer: "champagne",
    explanation: "Champagne's chalk soils provide excellent drainage, retain heat, and store water — all crucial in this marginal climate."
  },
  {
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
    type: "map",
    question: "Which region's galets (large stones) radiate heat at night to help Grenache ripen fully?",
    answer: "rhoneSouth",
    explanation: "Châteauneuf-du-Pape's famous galets absorb daytime heat and release it at night, extending the ripening period for Grenache."
  },
  {
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
    type: "map",
    question: "Which region produces 88% rosé and is home to Bandol — France's greatest Mourvèdre wines?",
    answer: "provence",
    explanation: "Provence is France's rosé capital. Bandol, on the Mediterranean coast, produces serious, age-worthy reds from Mourvèdre (minimum 50% of blend)."
  },
  {
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

// ─── Geo projection helper ───────────────────────────────────────────────────
// Maps real lat/lon to SVG coordinates. France spans ~-5°..9.5° lon, ~42°..51.5° lat
// We map to a viewBox of 0,0 500,420
const geoToSvg = (lon, lat) => {
  const x = ((lon - (-5.5)) / (10 - (-5.5))) * 500;
  const y = ((51.5 - lat) / (51.5 - 41.5)) * 420;
  return [Math.round(x * 10) / 10, Math.round(y * 10) / 10];
};

const pt = (lon, lat) => { const [x, y] = geoToSvg(lon, lat); return `${x},${y}`; };

// ─── France SVG Map Component ────────────────────────────────────────────────
const FranceMap = ({ activeRegion, onRegionClick, quizMode }) => {
  // Wine region approximate bounding polygons (using real lat/lon)
  const regionPaths = {
    champagne: {
      d: `M${pt(3.2,49.8)} L${pt(4.4,49.8)} L${pt(4.5,49.0)} L${pt(4.0,48.5)} L${pt(3.3,48.6)} L${pt(3.0,49.2)} Z`,
      label: geoToSvg(3.7, 49.15)
    },
    alsace: {
      d: `M${pt(7.0,48.9)} L${pt(7.8,48.9)} L${pt(7.8,47.9)} L${pt(7.3,47.5)} L${pt(6.9,47.7)} L${pt(6.9,48.4)} Z`,
      label: geoToSvg(7.35, 48.2)
    },
    burgundy: {
      d: `M${pt(3.2,47.8)} L${pt(4.2,47.8)} L${pt(4.8,47.2)} L${pt(4.8,46.4)} L${pt(4.2,46.0)} L${pt(3.4,46.2)} L${pt(3.0,47.0)} Z`,
      label: geoToSvg(3.9, 46.9)
    },
    loire: {
      d: `M${pt(-1.8,47.6)} L${pt(0.0,47.8)} L${pt(1.5,47.5)} L${pt(2.8,47.3)} L${pt(2.8,47.0)} L${pt(1.5,47.0)} L${pt(0.0,47.2)} L${pt(-1.8,47.2)} Z`,
      label: geoToSvg(0.5, 47.4)
    },
    bordeaux: {
      d: `M${pt(-1.2,45.5)} L${pt(-0.2,45.5)} L${pt(0.0,44.8)} L${pt(-0.2,44.2)} L${pt(-0.8,44.2)} L${pt(-1.3,44.7)} Z`,
      label: geoToSvg(-0.6, 44.85)
    },
    rhoneNorth: {
      d: `M${pt(4.5,45.7)} L${pt(5.0,45.7)} L${pt(5.0,44.9)} L${pt(4.7,44.7)} L${pt(4.4,44.8)} L${pt(4.3,45.3)} Z`,
      label: geoToSvg(4.65, 45.2)
    },
    rhoneSouth: {
      d: `M${pt(4.2,44.6)} L${pt(5.1,44.6)} L${pt(5.2,43.9)} L${pt(4.8,43.6)} L${pt(4.1,43.8)} L${pt(4.0,44.2)} Z`,
      label: geoToSvg(4.6, 44.1)
    },
    languedocRoussillon: {
      d: `M${pt(1.8,43.7)} L${pt(3.2,43.7)} L${pt(3.9,43.4)} L${pt(3.5,42.8)} L${pt(2.5,42.5)} L${pt(1.6,42.8)} L${pt(1.5,43.3)} Z`,
      label: geoToSvg(2.7, 43.2)
    },
    provence: {
      d: `M${pt(5.2,43.9)} L${pt(6.2,43.9)} L${pt(7.0,43.6)} L${pt(6.8,43.2)} L${pt(5.8,43.1)} L${pt(5.0,43.3)} L${pt(4.9,43.6)} Z`,
      label: geoToSvg(5.9, 43.5)
    },
    southWest: {
      d: `M${pt(-0.2,44.2)} L${pt(0.8,44.3)} L${pt(1.5,43.8)} L${pt(1.5,43.2)} L${pt(0.5,42.9)} L${pt(-0.3,43.2)} L${pt(-0.8,43.8)} L${pt(-0.8,44.2)} Z`,
      label: geoToSvg(0.4, 43.6)
    },
    beaujolais: {
      d: `M${pt(4.3,46.3)} L${pt(4.9,46.3)} L${pt(4.9,45.8)} L${pt(4.5,45.7)} L${pt(4.2,45.9)} Z`,
      label: geoToSvg(4.55, 46.05)
    }
  };

  // France mainland outline traced from real geographic points
  // Going clockwise from Dunkirk (north)
  const franceOutline = [
    // North coast (Dunkirk to Brittany tip)
    [2.4, 51.05],   // Dunkirk
    [1.6, 50.95],   // Calais
    [1.5, 50.7],    // Boulogne
    [1.4, 50.1],    // Somme estuary
    [0.2, 49.7],    // Dieppe area
    [0.1, 49.5],    // Le Havre
    [-0.4, 49.7],   // Normandy coast
    [-1.2, 49.7],   // Cherbourg peninsula
    [-1.9, 48.85],  // Mont St Michel
    [-2.0, 48.65],  // St Malo
    [-3.0, 48.85],  // North Brittany
    [-4.5, 48.7],   // Brest area
    [-4.8, 48.4],   // Brittany tip
    // West coast (Brittany to Spain)
    [-4.3, 47.85],  // Quimper
    [-3.5, 47.6],   // South Brittany
    [-2.8, 47.3],   // Vannes
    [-2.2, 47.1],   // St Nazaire
    [-2.0, 46.7],   // Noirmoutier
    [-1.5, 46.3],   // La Rochelle
    [-1.2, 45.9],   // Royan
    [-1.2, 45.5],   // Bordeaux coast
    [-1.3, 44.6],   // Arcachon
    [-1.2, 43.5],   // Biarritz
    [-1.7, 43.35],  // Hendaye (Spanish border)
    // Pyrenees (west to east)
    [-0.7, 42.8],
    [0.5, 42.7],
    [1.5, 42.5],
    [2.0, 42.45],
    [3.0, 42.45],   // Perpignan
    // Mediterranean coast
    [3.1, 43.0],    // Narbonne
    [3.5, 43.25],   // Béziers
    [3.9, 43.4],    // Montpellier
    [4.4, 43.4],    // Aigues-Mortes
    [4.85, 43.35],  // Marseille area
    [5.4, 43.25],   // Toulon
    [6.2, 43.1],    // St Tropez
    [6.6, 43.4],    // Cannes
    [7.0, 43.55],   // Nice
    [7.5, 43.78],   // Monaco / Menton
    // Italian border north
    [7.1, 44.2],
    [6.7, 44.5],
    [6.6, 45.1],
    [7.0, 45.5],    // Mont Blanc area
    [6.8, 46.15],   // Lake Geneva south
    [6.15, 46.2],   // Geneva
    // Swiss border
    [6.0, 46.4],
    [6.2, 46.9],
    [6.8, 47.45],   // Basel area
    [7.5, 47.6],    // Rhine
    // German border
    [7.6, 48.1],
    [8.1, 48.95],   // Strasbourg
    [7.5, 49.1],    // Wissembourg
    // Luxembourg / Belgium border
    [6.4, 49.45],
    [5.8, 49.55],
    [5.5, 49.5],
    [4.8, 49.95],
    [4.2, 49.95],
    [3.5, 50.35],
    [2.6, 50.95],
    [2.4, 51.05],   // Back to Dunkirk
  ];

  const outlinePath = "M" + franceOutline.map(([lon, lat]) => pt(lon, lat)).join(" L") + " Z";

  // Corsica outline
  const corsica = [
    [8.6, 42.95], [9.4, 43.0], [9.55, 42.5], [9.4, 41.4],
    [9.15, 41.38], [8.8, 41.65], [8.55, 42.0], [8.55, 42.5], [8.6, 42.95]
  ];
  const corsicaPath = "M" + corsica.map(([lon, lat]) => pt(lon, lat)).join(" L") + " Z";

  // Paris coordinates
  const paris = geoToSvg(2.35, 48.86);

  return (
    <svg viewBox="0 0 500 420" style={{ width: "100%", height: "100%", maxHeight: "520px" }}>
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="shadow">
          <feDropShadow dx="1" dy="1" stdDeviation="2" floodOpacity="0.15" />
        </filter>
        <linearGradient id="franceFill" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8E4D9" />
          <stop offset="100%" stopColor="#D5D0C4" />
        </linearGradient>
      </defs>

      {/* France mainland — real geographic outline */}
      <path
        d={outlinePath}
        fill="url(#franceFill)"
        stroke="#B8B0A0"
        strokeWidth="1.5"
        strokeLinejoin="round"
        filter="url(#shadow)"
      />

      {/* Corsica */}
      <path
        d={corsicaPath}
        fill="url(#franceFill)"
        stroke="#B8B0A0"
        strokeWidth="1"
        strokeLinejoin="round"
        opacity="0.5"
      />
      <text x={geoToSvg(9.8, 42.0)[0]} y={geoToSvg(9.8, 42.0)[1]} fontSize="7" fill="#B8B0A0" fontStyle="italic" fontFamily="'Cormorant Garamond', Georgia, serif">Corse</text>

      {/* Paris marker */}
      <circle cx={paris[0]} cy={paris[1]} r="3.5" fill="#1a1a1a" stroke="#C4A962" strokeWidth="1.5" />
      <text x={paris[0] + 7} y={paris[1] + 2} fontSize="8" fill="#8B7355" fontFamily="'Source Sans 3', sans-serif" fontWeight="500">Paris</text>

      {/* Region shapes */}
      {Object.entries(regionPaths).map(([key, { d, label }]) => {
        const region = REGIONS[key];
        const isActive = activeRegion === key;

        return (
          <g key={key}>
            <path
              d={d}
              fill={isActive ? region.color : region.color + "55"}
              stroke={isActive ? region.color : "#8B7355"}
              strokeWidth={isActive ? 2.5 : 1}
              strokeLinejoin="round"
              style={{
                cursor: "pointer",
                transition: "all 0.3s ease",
                filter: isActive ? "url(#glow)" : "none"
              }}
              onClick={() => onRegionClick(key)}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.target.setAttribute("fill", region.color + "99");
                  e.target.setAttribute("stroke-width", "1.5");
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.target.setAttribute("fill", region.color + "55");
                  e.target.setAttribute("stroke-width", "1");
                }
              }}
            />
            {!quizMode && (
              <text
                x={label[0]}
                y={label[1]}
                textAnchor="middle"
                fill={isActive ? "#fff" : "#4A4A4A"}
                fontSize="8"
                fontFamily="'Cormorant Garamond', Georgia, serif"
                fontWeight={isActive ? "700" : "400"}
                style={{ pointerEvents: "none", textShadow: isActive ? "0 1px 2px rgba(0,0,0,0.5)" : "none" }}
              >
                {region.name}
              </text>
            )}
          </g>
        );
      })}

      {/* Rivers */}
      <path d={`M${pt(-1.8,47.3)} Q${pt(0,47.4)} ${pt(1.5,47.3)} Q${pt(3,47.2)} ${pt(4,47.3)}`} fill="none" stroke="#A8C4D4" strokeWidth="1.2" opacity="0.4" strokeDasharray="3,2" />
      <path d={`M${pt(4.8,46.2)} Q${pt(4.7,45.5)} ${pt(4.7,44.8)} Q${pt(4.7,44)} ${pt(4.5,43.4)}`} fill="none" stroke="#A8C4D4" strokeWidth="1.2" opacity="0.4" strokeDasharray="3,2" />

      {/* River labels */}
      <text x={geoToSvg(0.8, 47.55)[0]} y={geoToSvg(0.8, 47.55)[1]} fontSize="7" fill="#7BA3B8" fontStyle="italic" fontFamily="'Cormorant Garamond', Georgia, serif">Loire</text>
      <text x={geoToSvg(5.1, 45.0)[0]} y={geoToSvg(5.1, 45.0)[1]} fontSize="7" fill="#7BA3B8" fontStyle="italic" fontFamily="'Cormorant Garamond', Georgia, serif">Rhône</text>
    </svg>
  );
};

// ─── Connection Chain Component ──────────────────────────────────────────────
const ConnectionChain = ({ region }) => {
  const r = REGIONS[region];
  if (!r) return null;

  const chain = [
    { label: "Climate", value: r.climate, detail: r.climateDetail, icon: "☀️" },
    { label: "Soil", value: r.soils.split(".")[0], detail: r.soils, icon: "🪨" },
    { label: "Grapes", value: [...(r.keyGrapes.red || []), ...(r.keyGrapes.white || [])].slice(0, 3).join(", "), detail: r.viticultureNotes, icon: "🍇" },
    { label: "Winemaking", value: r.winemaking.split(".")[0], detail: r.winemaking, icon: "🏺" },
    { label: "Style", value: r.typicalStyle.split(".")[0], detail: r.typicalStyle, icon: "🍷" }
  ];

  const [expandedStep, setExpandedStep] = useState(null);

  return (
    <div style={{ padding: "0" }}>
      <div style={{
        background: "linear-gradient(135deg, #1a1a1a 0%, #2a1f1f 100%)",
        borderRadius: "12px",
        padding: "20px",
        marginBottom: "16px",
        border: "1px solid #3a2f2f"
      }}>
        <div style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.15em", color: "#C4A962", marginBottom: "8px" }}>
          Why it works
        </div>
        <div style={{ fontSize: "14px", lineHeight: "1.6", color: "#E8E4D9" }}>
          {r.whyConnection}
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
        {chain.map((step, i) => (
          <div key={i}>
            <div
              onClick={() => setExpandedStep(expandedStep === i ? null : i)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "12px 16px",
                background: expandedStep === i ? "#2a2420" : "#1E1E1E",
                borderRadius: i === 0 ? "10px 10px 2px 2px" : i === chain.length - 1 ? "2px 2px 10px 10px" : "2px",
                cursor: "pointer",
                transition: "all 0.2s ease",
                border: expandedStep === i ? "1px solid #C4A962" : "1px solid transparent"
              }}
            >
              <span style={{ fontSize: "18px", width: "28px", textAlign: "center" }}>{step.icon}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.12em", color: "#C4A962", marginBottom: "2px" }}>
                  {step.label}
                </div>
                <div style={{ fontSize: "13px", color: "#E8E4D9" }}>{step.value}</div>
              </div>
              {i < chain.length - 1 && (
                <span style={{ color: "#C4A962", fontSize: "14px" }}>→</span>
              )}
            </div>
            {expandedStep === i && (
              <div style={{
                padding: "12px 16px 12px 56px",
                background: "#252020",
                fontSize: "12px",
                lineHeight: "1.6",
                color: "#B8B0A0",
                borderLeft: "2px solid #C4A962",
                marginLeft: "30px"
              }}>
                {step.detail}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// ─── Explore Panel ───────────────────────────────────────────────────────────
const ExplorePanel = ({ region }) => {
  const r = REGIONS[region];
  if (!r) return null;

  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "grapes", label: "Grapes" },
    { id: "quality", label: "Quality" }
  ];

  return (
    <div>
      <div style={{ display: "flex", gap: "4px", marginBottom: "16px" }}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              flex: 1,
              padding: "8px",
              fontSize: "11px",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              background: activeTab === tab.id ? "#C4A962" : "transparent",
              color: activeTab === tab.id ? "#1a1a1a" : "#B8B0A0",
              border: activeTab === tab.id ? "none" : "1px solid #3a3530",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: activeTab === tab.id ? "600" : "400",
              transition: "all 0.2s"
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === "overview" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <InfoCard label="Climate" value={r.climateDetail} />
          <InfoCard label="Soils" value={r.soils} />
          <InfoCard label="Viticulture" value={r.viticultureNotes} />
          <InfoCard label="Winemaking" value={r.winemaking} />
          <InfoCard label="Typical Style" value={r.typicalStyle} />
        </div>
      )}

      {activeTab === "grapes" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {r.keyGrapes.red.length > 0 && (
            <div style={{ background: "#1E1E1E", borderRadius: "10px", padding: "16px" }}>
              <div style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.12em", color: "#722F37", marginBottom: "10px", fontWeight: "600" }}>
                Red Grapes
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {r.keyGrapes.red.map(g => (
                  <span key={g} style={{
                    background: "#722F3722",
                    border: "1px solid #722F3744",
                    color: "#D4A0A0",
                    padding: "4px 12px",
                    borderRadius: "20px",
                    fontSize: "12px"
                  }}>
                    {g}
                  </span>
                ))}
              </div>
            </div>
          )}
          {r.keyGrapes.white.length > 0 && (
            <div style={{ background: "#1E1E1E", borderRadius: "10px", padding: "16px" }}>
              <div style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.12em", color: "#C4A962", marginBottom: "10px", fontWeight: "600" }}>
                White Grapes
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {r.keyGrapes.white.map(g => (
                  <span key={g} style={{
                    background: "#C4A96222",
                    border: "1px solid #C4A96244",
                    color: "#E8D5B7",
                    padding: "4px 12px",
                    borderRadius: "20px",
                    fontSize: "12px"
                  }}>
                    {g}
                  </span>
                ))}
              </div>
            </div>
          )}
          <div style={{ background: "#1E1E1E", borderRadius: "10px", padding: "16px" }}>
            <div style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.12em", color: "#C4A962", marginBottom: "8px" }}>
              Sub-regions
            </div>
            <div style={{ fontSize: "13px", color: "#B8B0A0", lineHeight: "1.7" }}>
              {r.subRegions.join(" · ")}
            </div>
          </div>
        </div>
      )}

      {activeTab === "quality" && (
        <div style={{ background: "#1E1E1E", borderRadius: "10px", padding: "16px" }}>
          <div style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.12em", color: "#C4A962", marginBottom: "12px" }}>
            Quality Hierarchy
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            {r.qualityLevels.map((level, i) => (
              <div key={level} style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "8px 12px",
                background: i === r.qualityLevels.length - 1 ? "#C4A96215" : "transparent",
                borderRadius: "6px",
                borderLeft: `3px solid ${i === r.qualityLevels.length - 1 ? "#C4A962" : "#3a3530"}`
              }}>
                <span style={{ fontSize: "11px", color: "#666", width: "20px" }}>{i + 1}</span>
                <span style={{
                  fontSize: "13px",
                  color: i === r.qualityLevels.length - 1 ? "#E8D5B7" : "#B8B0A0",
                  fontWeight: i === r.qualityLevels.length - 1 ? "600" : "400"
                }}>
                  {level}
                </span>
                {i === r.qualityLevels.length - 1 && (
                  <span style={{ fontSize: "10px", color: "#C4A962", marginLeft: "auto" }}>TOP</span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const InfoCard = ({ label, value }) => (
  <div style={{ background: "#1E1E1E", borderRadius: "10px", padding: "14px 16px" }}>
    <div style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.12em", color: "#C4A962", marginBottom: "6px" }}>
      {label}
    </div>
    <div style={{ fontSize: "13px", color: "#D5D0C4", lineHeight: "1.6" }}>{value}</div>
  </div>
);

// ─── Quiz Component ──────────────────────────────────────────────────────────
const QuizMode = ({ mapClick, clearMapClick }) => {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [mapAnswer, setMapAnswer] = useState(null);

  const q = QUIZ_QUESTIONS[currentQ];
  const isMapQ = q.type === "map";

  // Handle map clicks from parent
  useEffect(() => {
    if (mapClick && isMapQ && !showAnswer) {
      setMapAnswer(mapClick);
      const correct = mapClick === q.answer;
      setShowAnswer(true);
      setScore(s => ({ correct: s.correct + (correct ? 1 : 0), total: s.total + 1 }));
      clearMapClick();
    } else if (mapClick) {
      clearMapClick();
    }
  }, [mapClick]);

  const handleOptionSelect = (idx) => {
    if (showAnswer) return;
    setSelected(idx);
    const correct = idx === q.answer;
    setShowAnswer(true);
    setScore(s => ({ correct: s.correct + (correct ? 1 : 0), total: s.total + 1 }));
  };

  const nextQuestion = () => {
    setSelected(null);
    setShowAnswer(false);
    setMapAnswer(null);
    setCurrentQ((currentQ + 1) % QUIZ_QUESTIONS.length);
  };

  const resetQuiz = () => {
    setCurrentQ(0);
    setSelected(null);
    setShowAnswer(false);
    setMapAnswer(null);
    setScore({ correct: 0, total: 0 });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {/* Score bar */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 16px",
        background: "#1E1E1E",
        borderRadius: "10px",
        marginBottom: "16px"
      }}>
        <span style={{ fontSize: "12px", color: "#B8B0A0" }}>
          Question {currentQ + 1} / {QUIZ_QUESTIONS.length}
        </span>
        <span style={{ fontSize: "12px", color: "#C4A962" }}>
          {score.correct} / {score.total} correct
        </span>
        <button onClick={resetQuiz} style={{
          background: "none", border: "1px solid #3a3530", color: "#B8B0A0",
          padding: "4px 10px", borderRadius: "4px", fontSize: "11px", cursor: "pointer",
          transition: "all 0.15s"
        }}>Reset</button>
      </div>

      {/* Question type badge */}
      <div style={{
        display: "inline-flex",
        alignSelf: "flex-start",
        padding: "3px 10px",
        borderRadius: "4px",
        fontSize: "10px",
        textTransform: "uppercase",
        letterSpacing: "0.1em",
        marginBottom: "10px",
        background: q.type === "map" ? "#1a3a2a" : q.type === "scenario" ? "#3a2a1a" : "#2a1a3a",
        color: q.type === "map" ? "#7BC47B" : q.type === "scenario" ? "#C4A962" : "#A47BC4"
      }}>
        {q.type === "map" ? "📍 Map" : q.type === "scenario" ? "🎯 Scenario" : "🔗 Connection"}
      </div>

      {/* Question */}
      <div style={{
        fontSize: "15px",
        color: "#E8E4D9",
        lineHeight: "1.6",
        marginBottom: "16px",
        fontFamily: "'Cormorant Garamond', Georgia, serif",
        fontWeight: "600"
      }}>
        {q.question}
      </div>

      {/* Map question or multiple choice */}
      {isMapQ ? (
        <div style={{ marginBottom: "16px" }}>
          <div style={{
            fontSize: "13px",
            padding: "12px 16px",
            borderRadius: "8px",
            background: showAnswer
              ? (mapAnswer === q.answer ? "#1a3a2a" : "#3a1a1a")
              : "#1E1E1E",
            border: showAnswer
              ? (mapAnswer === q.answer ? "1px solid #4a7a4a" : "1px solid #7a4a4a")
              : "1px solid #3a3530",
            color: showAnswer
              ? (mapAnswer === q.answer ? "#7BC47B" : "#C47B7B")
              : "#B8B0A0"
          }}>
            {showAnswer
              ? (mapAnswer === q.answer
                ? `✓ Correct! ${REGIONS[q.answer].name}`
                : `✗ You clicked ${REGIONS[mapAnswer]?.name || "unknown"}. The answer is ${REGIONS[q.answer].name}`)
              : "👆 Click a region on the map above"
            }
          </div>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "16px" }}>
          {q.options.map((opt, i) => {
            let bg = "#1E1E1E";
            let border = "1px solid #3a3530";
            let color = "#D5D0C4";
            if (showAnswer) {
              if (i === q.answer) { bg = "#1a3a2a"; border = "1px solid #4a7a4a"; color = "#7BC47B"; }
              else if (i === selected) { bg = "#3a1a1a"; border = "1px solid #7a4a4a"; color = "#C47B7B"; }
            } else if (i === selected) {
              bg = "#2a2520"; border = "1px solid #C4A962";
            }
            return (
              <button
                key={i}
                onClick={() => handleOptionSelect(i)}
                style={{
                  textAlign: "left", padding: "12px 14px", background: bg,
                  border, borderRadius: "8px", color, fontSize: "13px",
                  lineHeight: "1.5", cursor: showAnswer ? "default" : "pointer",
                  transition: "all 0.2s"
                }}
              >
                {opt}
              </button>
            );
          })}
        </div>
      )}

      {/* Explanation */}
      {showAnswer && (
        <div style={{
          background: "linear-gradient(135deg, #1a1a1a 0%, #2a1f1f 100%)",
          borderRadius: "10px",
          padding: "14px 16px",
          marginBottom: "16px",
          border: "1px solid #3a2f2f"
        }}>
          <div style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.12em", color: "#C4A962", marginBottom: "6px" }}>
            Why
          </div>
          <div style={{ fontSize: "13px", color: "#D5D0C4", lineHeight: "1.6" }}>
            {q.explanation}
          </div>
        </div>
      )}

      {showAnswer && (
        <button
          onClick={nextQuestion}
          style={{
            padding: "12px",
            background: "#C4A962",
            color: "#1a1a1a",
            border: "none",
            borderRadius: "8px",
            fontSize: "13px",
            fontWeight: "600",
            cursor: "pointer",
            letterSpacing: "0.05em"
          }}
        >
          Next Question →
        </button>
      )}
    </div>
  );
};

// ─── Main App ────────────────────────────────────────────────────────────────
export default function WsetStudyApp() {
  const [mode, setMode] = useState("explore");
  const [activeRegion, setActiveRegion] = useState("bordeaux");
  const [quizMapClick, setQuizMapClick] = useState(null);

  const modes = [
    { id: "explore", label: "Explore", icon: "🗺️" },
    { id: "connect", label: "Connect", icon: "🔗" },
    { id: "quiz", label: "Quiz", icon: "✦" }
  ];

  const handleRegionClick = (key) => {
    if (mode === "quiz") {
      setQuizMapClick(key);
    } else {
      setActiveRegion(key);
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#141212",
      color: "#E8E4D9",
      fontFamily: "'Source Sans 3', -apple-system, sans-serif"
    }}>
      {/* ── Header ── */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 20px",
        borderBottom: "1px solid #2a2520"
      }}>
        <div>
          <div style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "22px",
            fontWeight: "600",
            letterSpacing: "0.02em",
            color: "#E8E4D9"
          }}>
            Terroir <span style={{ color: "#C4A962" }}>Study</span>
          </div>
          <div style={{ fontSize: "10px", color: "#8B7355", letterSpacing: "0.15em", textTransform: "uppercase", marginTop: "2px" }}>
            WSET Level 3 · France
          </div>
        </div>
      </div>

      {/* ── Mode Tabs ── */}
      <div style={{
        display: "flex",
        gap: "4px",
        padding: "12px 20px",
        borderBottom: "1px solid #2a2520"
      }}>
        {modes.map(m => (
          <button
            key={m.id}
            onClick={() => {
              setMode(m.id);
              setQuizMapClick(null);
            }}
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
              padding: "10px",
              background: mode === m.id ? "#C4A962" : "transparent",
              color: mode === m.id ? "#1a1a1a" : "#8B7355",
              border: mode === m.id ? "none" : "1px solid #2a2520",
              borderRadius: "8px",
              fontSize: "12px",
              fontWeight: mode === m.id ? "600" : "400",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              cursor: "pointer",
              transition: "all 0.2s ease"
            }}
          >
            <span>{m.icon}</span> {m.label}
          </button>
        ))}
      </div>

      {/* ── Main Content ── */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "900px",
        margin: "0 auto"
      }}>
        {/* Map */}
        <div style={{
          padding: "16px 20px 0",
          display: "flex",
          justifyContent: "center"
        }}>
          <div style={{ width: "100%", maxWidth: "400px" }}>
            <FranceMap
              activeRegion={mode === "quiz" ? null : activeRegion}
              onRegionClick={handleRegionClick}
              quizMode={mode === "quiz"}
            />
          </div>
        </div>

        {/* Active region name */}
        {mode !== "quiz" && (
          <div style={{
            textAlign: "center",
            padding: "8px 0 4px",
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "24px",
            fontWeight: "600",
            color: REGIONS[activeRegion]?.color || "#E8E4D9"
          }}>
            {REGIONS[activeRegion]?.name}
            <span style={{
              display: "block",
              fontSize: "11px",
              color: "#8B7355",
              fontFamily: "'Source Sans 3', sans-serif",
              fontWeight: "400",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginTop: "4px"
            }}>
              {REGIONS[activeRegion]?.climate}
            </span>
          </div>
        )}

        {/* Content Panel */}
        <div style={{ padding: "16px 20px 40px" }}>
          {mode === "explore" && <ExplorePanel region={activeRegion} />}
          {mode === "connect" && <ConnectionChain region={activeRegion} />}
          {mode === "quiz" && (
            <QuizMode
              mapClick={quizMapClick}
              clearMapClick={() => setQuizMapClick(null)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
