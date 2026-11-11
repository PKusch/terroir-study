// ─── Quiz Questions ──────────────────────────────────────────────────────────
// Every id is stable: progress is tracked against it.
export const QUIZ_QUESTIONS = [
  {
    id: "fr-01",
    type: "map",
    question: "Which region is famous for its chalk (craie) soils that are perfect for sparkling wine?",
    answer: "champagne",
    explanation: "Champagne's chalk soils drain well and store water as a drought buffer, which matters in this marginal climate."
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
      "Burgundy has much better soil than Bordeaux, so it never needs to blend and relies on a single grape in every year",
      "Bordeaux's maritime climate varies by vintage, so blending hedges risk; Burgundy shows terroir in single varieties",
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
      "The Gulf Stream warms the whole region and keeps the climate dry all year",
      "The Vosges Mountains block rain from the west, creating a rain shadow",
      "Granite soils absorb all the rainfall that falls on the vineyards",
      "It is too cold for rain: most precipitation falls as snow"
    ],
    answer: 1,
    region: "alsace",
    explanation: "The Vosges Mountains block Atlantic rain, creating one of France's driest wine regions. This allows aromatic grapes to ripen slowly and develop intense flavours."
  },
  {
    id: "fr-06",
    topic: "sparkling",
    type: "connection",
    question: "Why can Chenin Blanc in Vouvray be made dry, sweet, AND sparkling?",
    options: [
      "Different Chenin Blanc clones are used for each style, grown in separate vineyards across the appellation",
      "Vouvray uses different soils for each style: clay for sweet wines, flint for sparkling",
      "Cool-climate acidity balances every style; warm autumns allow botrytis for sweet wines",
      "EU regulations require producers to make all three styles in every vintage"
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
      "To add residual sugar from the yeast cells left in contact with the wine",
      "To add texture and protect the freshness of a light, neutral wine",
      "Because the wine is too tannic otherwise",
      "To develop botrytis character"
    ],
    answer: 1,
    region: "loire",
    explanation: "Melon de Bourgogne is naturally light and neutral. Lees contact adds body, texture, and a slight spritz while protecting from oxidation."
  },
  {
    id: "fr-09",
    topic: "sparkling",
    type: "scenario",
    question: "A producer in Champagne wants to make a richer, more full-bodied style. Which approach would achieve this?",
    options: [
      "Use only Chardonnay grapes from the Côte des Blancs, for a richer wine",
      "More Pinot Noir, longer lees ageing and more reserve wines",
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
      "To increase alcohol levels in cool vintages by letting oxygen concentrate the wine",
      "To tame Tannat's aggressive tannins and make wines approachable younger",
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
      "They use different grape varieties, with Cru wines made from Pinot Noir rather than from Gamay grapes",
      "Cru villages have granite soils and a longer maceration; Nouveau is made by carbonic maceration",
      "Nouveau is made from white grapes",
      "Cru wines are blended with Burgundy Pinot Noir to give them more structure and ageing power"
    ],
    answer: 1,
    region: "beaujolais",
    explanation: "Granite soils give Cru Beaujolais structure and minerality. A longer, more traditional maceration (often with some whole bunches) allows more tannin extraction, complexity, and ageing potential, where Nouveau is made by carbonic maceration."
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
    explanation: "Cahors is Malbec's birthplace. Historically called 'black wine' for its inky depth. The gravel terraces along the Lot and the limestone causse plateaux produce firm, concentrated Malbec that predates Argentine plantings by centuries."
  },
  {
    id: "fr-15",
    type: "map",
    question: "Which region's Left Bank has gravel soils that drain well and hold heat, suiting late-ripening Cabernet Sauvignon?",
    answer: "bordeaux",
    explanation: "The Médoc, on Bordeaux's Left Bank, sits on gravel. Gravel drains well and retains heat, which helps Cabernet Sauvignon ripen fully in a maritime climate where autumn rain is a risk at harvest."
  },
  {
    id: "fr-16",
    type: "scenario",
    question: "A red wine shows blackcurrant, cedar and firm, structured tannins, and was aged in new French barriques. Where is it most likely from?",
    options: [
      "Bordeaux Left Bank (Pauillac)",
      "Bordeaux Right Bank (Pomerol)",
      "Cahors (South-West)",
      "Chinon (Loire)"
    ],
    answer: 0,
    region: "bordeaux",
    explanation: "Blackcurrant and cedar with firm tannins is the classic Left Bank profile, where Cabernet Sauvignon leads the blend, and top Bordeaux is aged in new French oak barriques. Right Bank wines are softer and plummier; Cahors is inky Malbec; Chinon is fresh Cabernet Franc."
  },
  {
    id: "fr-17",
    type: "connection",
    question: "What does the Atlantic Ocean do to Bordeaux's climate?",
    options: [
      "It brings the Mistral wind that dries the grapes",
      "It makes the summers hot and dry, like the Mediterranean",
      "It keeps the winters cold enough to limit the region to early-ripening grapes",
      "It moderates the warm summers but brings the risk of rain at harvest"
    ],
    answer: 3,
    region: "bordeaux",
    explanation: "Bordeaux has a maritime climate. The Atlantic softens the summer heat, but it also brings autumn rain just when the grapes are being picked. That harvest risk is one reason Bordeaux blends several grapes."
  },
  {
    id: "fr-18",
    type: "scenario",
    question: "A Bordeaux producer wants a softer, plummier red with rounder tannins. Which soil and grape should lead the blend?",
    options: [
      "Gravel on the Left Bank, with Cabernet Sauvignon leading",
      "Clay and limestone on the Right Bank, with Merlot",
      "Gravel on the Left Bank, with Cabernet Franc",
      "Clay on the Right Bank, with Sauvignon Blanc"
    ],
    answer: 1,
    region: "bordeaux",
    explanation: "The Right Bank (Saint-Émilion, Pomerol) is clay and limestone, and Merlot leads the blend there. Clay holds water, which Merlot tolerates, and the style is softer with plum fruit and rounder tannins than the Left Bank."
  },
  {
    id: "fr-19",
    type: "map",
    question: "Which region's Chablis sub-region grows Chardonnay on Kimmeridgian limestone for a steely, mineral style?",
    answer: "burgundy",
    explanation: "Chablis is the northern outpost of Burgundy. Its Kimmeridgian limestone and continental climate give Chardonnay a steely, mineral character, quite unlike the rich, buttery style of Meursault further south."
  },
  {
    id: "fr-20",
    type: "connection",
    question: "Why are Pinot Noir and Chardonnay the grapes that thrive in Burgundy?",
    options: [
      "The limestone soils are too alkaline for any other grape variety to ripen anywhere in the region",
      "Burgundy is warm enough for late-ripening grapes such as Grenache, but they are not allowed",
      "The cold-winter continental climate favours early-ripening grapes, and both ripen early",
      "They are the only grapes that can be fermented with whole bunches"
    ],
    answer: 2,
    region: "burgundy",
    explanation: "Burgundy's continental climate has cold winters and warm summers, so only early-ripening grapes reliably ripen. Pinot Noir and Chardonnay both ripen early. The limestone soils then add minerality and finesse."
  },
  {
    id: "fr-21",
    type: "scenario",
    question: "A white wine is rich and buttery, was fermented in barrel and had its lees stirred (bâtonnage). Which is the most likely origin?",
    options: [
      "Chablis (Burgundy)",
      "Meursault (Burgundy)",
      "Muscadet (Loire)",
      "Condrieu (Northern Rhône)"
    ],
    answer: 1,
    region: "burgundy",
    explanation: "Meursault in the Côte de Beaune is the textbook rich, buttery Chardonnay, made with barrel fermentation and lees stirring. Chablis is the steely, mineral end of Burgundy Chardonnay. Muscadet is light and neutral; Condrieu is aromatic Viognier."
  },
  {
    id: "fr-22",
    type: "connection",
    question: "Why is Burgundy divided into tiny plots (climats), each with its own name?",
    options: [
      "Each plot grows a different grape variety",
      "Burgundy is terroir-driven: the same grape on a different site gives a different wine",
      "Frost and hail force growers to spread their risk across many small holdings of vines",
      "The plots mark where Premier Cru wines must be blended with Grand Cru"
    ],
    answer: 1,
    region: "burgundy",
    explanation: "Burgundy makes single-variety wines, so the site is what changes the wine. Limestone and clay vary plot by plot, and the classification (Village, Premier Cru, Grand Cru) follows the site rather than the producer."
  },
  {
    id: "fr-23",
    type: "scenario",
    question: "A grower in the Côte de Nuits is planning for the year ahead. Which weather risks come with Burgundy's continental climate?",
    options: [
      "Drought stress from hot, dry summers",
      "Autumn rain at harvest blowing in from the Atlantic every single year",
      "Rot spread by a damp sea breeze",
      "Frost and hail, with big differences between vintages"
    ],
    answer: 3,
    region: "burgundy",
    explanation: "Burgundy's continental climate brings cold winters and warm summers, and with them frost and hail. Vintage variation is significant. Drought is a Southern Rhône worry and harvest rain is Bordeaux's."
  },
  {
    id: "fr-24",
    type: "map",
    question: "Which region grows Syrah on steep granite and schist terraces that have to be harvested by hand?",
    answer: "rhoneNorth",
    explanation: "The Northern Rhône's vineyards (Côte-Rôtie, Hermitage, Cornas) sit on steep hillsides of granite and schist. The slopes give good drainage and sun exposure for Syrah, but they are too steep for anything but hand harvesting, so production is small."
  },
  {
    id: "fr-25",
    type: "scenario",
    question: "A red wine shows black pepper, dark fruit, a floral note and smoke, and is made from a single grape. Where is it most likely from?",
    options: [
      "Châteauneuf-du-Pape (Southern Rhône)",
      "Bandol (Provence)",
      "Madiran (South-West)",
      "Hermitage (Northern Rhône)"
    ],
    answer: 3,
    region: "rhoneNorth",
    explanation: "Black pepper, dark fruit, floral and smoky notes are the signature of Northern Rhône Syrah, made as a single variety. Châteauneuf-du-Pape is a Grenache-based blend, Bandol is Mourvèdre-led, and Madiran is powerfully tannic Tannat."
  },
  {
    id: "fr-26",
    type: "connection",
    question: "How does the Mistral wind help growers in the Northern Rhône?",
    options: [
      "It dries the grapes and reduces the risk of disease and rot",
      "It carries warm air from the south that raises sugar levels in the grapes",
      "It brings the rain the steep slopes need",
      "It deposits granite dust that adds minerality"
    ],
    answer: 0,
    region: "rhoneNorth",
    explanation: "The Mistral is a strong, dry wind. It dries the bunches and keeps rot at bay, which matters for Syrah on the steep slopes. Drainage comes from the granite, not the wind."
  },
  {
    id: "fr-27",
    type: "scenario",
    question: "A white wine is intensely aromatic with stone fruit and noticeably low acidity. Which grape and place fit best?",
    options: [
      "Viognier from Condrieu",
      "Sauvignon Blanc from Sancerre",
      "Chenin Blanc from Vouvray",
      "Riesling from Alsace"
    ],
    answer: 0,
    region: "rhoneNorth",
    explanation: "Viognier, the grape of Condrieu in the Northern Rhône, is aromatic with stone fruit and low acid. Sauvignon Blanc, Chenin Blanc and Riesling all come from cool climates and keep high acidity."
  },
  {
    id: "fr-28",
    type: "connection",
    question: "Why is Grenache in the Southern Rhône grown as untrellised bush vines (gobelet)?",
    options: [
      "Bush vines are legally required across every Côtes du Rhône wine, whatever the grape",
      "Bush vines protect the buds from spring frost",
      "In the hot climate no trellising is needed, and the bush shades the grapes",
      "Bush vines expose the grapes to more Mistral wind"
    ],
    answer: 2,
    region: "rhoneSouth",
    explanation: "The Southern Rhône is hot and dry, so Grenache does not need trellising to ripen. The bushy canopy shades the bunches from the strong sun, which protects them from the heat. (Châteauneuf-du-Pape also requires gobelet training for its main red grapes.)"
  },
  {
    id: "fr-29",
    type: "connection",
    question: "Why do Southern Rhône producers age their reds in large old oak (foudre) rather than new barriques?",
    options: [
      "Oak flavour is not the goal; they want the Grenache blend's fruit, herbs and spice to show",
      "Large casks add more oak flavour than small barrels",
      "New barriques would make the wine too high in alcohol",
      "Foudres are needed to soften Grenache's aggressive tannins, which would otherwise be undrinkable"
    ],
    answer: 0,
    region: "rhoneSouth",
    explanation: "The style is rich and warm, with red fruit, garrigue herbs and spice. Large old oak lets the wine mature without adding oak flavour, so the Grenache-based blend stays the focus."
  },
  {
    id: "fr-30",
    type: "scenario",
    question: "A rich, high-alcohol red with red fruit, garrigue herbs and spice is a Grenache-based blend from a village whose vineyards are covered in large heat-retaining stones. Which is it?",
    options: [
      "Corbières, a Languedoc red from the hills near Narbonne",
      "Cornas, a Syrah red from the Northern Rhône slopes",
      "Châteauneuf-du-Pape (Southern Rhône)",
      "Bandol, a Mourvèdre red from the Provence coast"
    ],
    answer: 2,
    region: "rhoneSouth",
    explanation: "The stones are the galets of Châteauneuf-du-Pape, which soak up heat by day and release it at night to help Grenache ripen. Cornas is single-variety Syrah and Bandol is led by Mourvèdre. Corbières can taste similar but has no galets."
  },
  {
    id: "fr-31",
    type: "map",
    question: "Which region includes Gigondas, Vacqueyras and the Côtes du Rhône-Villages appellation?",
    answer: "rhoneSouth",
    explanation: "Gigondas and Vacqueyras are villages in the Southern Rhône, alongside Châteauneuf-du-Pape. The quality ladder runs Côtes du Rhône, Côtes du Rhône-Villages, then the named villages."
  },
  {
    id: "fr-32",
    type: "map",
    question: "Which region grows Melon de Bourgogne on schist near the coast, with a river that moderates the temperature and the frost risk?",
    answer: "loire",
    explanation: "Muscadet, at the cool maritime end of the Loire Valley, is made from Melon de Bourgogne on schist soils. The River Loire runs the length of the region and softens both temperature swings and frost."
  },
  {
    id: "fr-33",
    type: "scenario",
    question: "A red wine is fresh, with red fruit and a 'pencil shavings' note, and is made from Cabernet Franc. Which sub-region is the best fit?",
    options: [
      "Saint-Émilion (Bordeaux)",
      "Fronton (South-West)",
      "Crozes-Hermitage (Northern Rhône)",
      "Chinon (Loire)"
    ],
    answer: 3,
    region: "loire",
    explanation: "Chinon and Bourgueil are the Loire's Cabernet Franc reds: fresh, red-fruited, with that pencil-shavings note. Cabernet Franc also grows in Bordeaux, but there it is a blending partner in softer, plummier Merlot-led wines."
  },
  {
    id: "fr-34",
    type: "connection",
    question: "Why does the River Loire matter so much to the region's growers?",
    options: [
      "It brings the botrytis needed for sweet wines",
      "It moderates temperature and reduces frost risk in a cool climate",
      "It deposits the flint that gives Sancerre its minerality, carried down in its floods",
      "It provides the water used to irrigate the vines"
    ],
    answer: 1,
    region: "loire",
    explanation: "The Loire is a cool region, from cool maritime Muscadet to cool continental Sancerre. The river evens out temperatures and cuts the risk of frost. Sancerre's flint is in the soil, not the water."
  },
  {
    id: "fr-35",
    type: "map",
    question: "Which region labels its wines by grape variety, grows almost only white grapes, and has 51 Grand Cru sites?",
    answer: "alsace",
    explanation: "Alsace is unusual in France for making single-variety wines and naming them after the grape: Riesling, Gewurztraminer, Pinot Gris, Muscat. Its soils are hugely varied, which is why it has 51 separate Grand Cru sites."
  },
  {
    id: "fr-36",
    type: "scenario",
    question: "A white wine is intensely aromatic, with lychee and rose, and is off-dry. Which grape is it most likely to be?",
    options: [
      "Riesling from the Alsace Grand Cru vineyards",
      "Gewurztraminer from Alsace",
      "Viognier from the Condrieu slopes in the Northern Rhône",
      "Chenin Blanc from the Vouvray hills in the Loire"
    ],
    answer: 1,
    region: "alsace",
    explanation: "Lychee and rose are the calling cards of Gewurztraminer, which in Alsace ranges from off-dry to sweet. Alsace Riesling is dry, steely and citrussy; Viognier gives stone fruit; Chenin Blanc gives apple, honey and quince."
  },
  {
    id: "fr-37",
    type: "connection",
    question: "Why can an off-dry Alsace Gewurztraminer or Pinot Gris taste balanced rather than cloying?",
    options: [
      "The cool climate gives high acidity that balances the residual sugar",
      "The rain shadow lowers the sugar in the grapes",
      "Ageing in large oak foudres absorbs the sweetness, leaving a drier finish in the glass",
      "Botrytis removes the sugar before fermentation"
    ],
    answer: 0,
    region: "alsace",
    explanation: "Alsace is dry but cool. Cool conditions keep the acidity high, and that acidity offsets the sweetness in off-dry styles. The dryness from the Vosges rain shadow lets the aromatic grapes ripen without rot."
  },
  {
    id: "fr-38",
    type: "scenario",
    question: "An Alsace producer wants to make a sweet wine from grapes affected by botrytis (noble rot). Which label applies?",
    options: [
      "Crémant d'Alsace, the sparkling wine",
      "Vendange Tardive, the late-harvest label",
      "Sélection de Grains Nobles",
      "Alsace Grand Cru, a single-site label"
    ],
    answer: 2,
    region: "alsace",
    explanation: "Sélection de Grains Nobles is Alsace's botrytis (noble rot) category, with higher minimum sugar than Vendange Tardive. Vendange Tardive means late harvest and need not have botrytis. Crémant d'Alsace is sparkling, and Grand Cru refers to a single vineyard site with specific grapes only."
  },
  {
    id: "fr-39",
    topic: "sparkling",
    type: "connection",
    question: "Why does Champagne's marginal climate produce such good base wine for sparkling?",
    options: [
      "The chalk soil adds the bubbles during the first fermentation",
      "The cold makes the second fermentation happen in the bottle on its own, without any yeast or sugar being added",
      "Strong sunshine gives ripe, sugar-rich grapes",
      "The grapes barely ripen, giving high acid and low sugar, which sparkling base wine needs"
    ],
    answer: 3,
    region: "champagne",
    explanation: "Champagne sits at the northern limit of viticulture. Grapes there stay high in acid and low in sugar, which would make a thin still wine but is ideal for the traditional method, where the second fermentation adds about 1.2% alcohol and the bubbles."
  },
  {
    id: "fr-40",
    topic: "sparkling",
    type: "scenario",
    question: "A Champagne shows bready, biscuity, brioche notes. Where do those flavours come from?",
    options: [
      "New oak barrels used in the first fermentation, which add toasty, buttery notes",
      "Autolysis: the wine resting on its yeast lees after the bottle fermentation",
      "The chalk soil, which gives a biscuity minerality",
      "A high proportion of Pinot Meunier in the blend"
    ],
    answer: 1,
    region: "champagne",
    explanation: "After the second fermentation in bottle (prise de mousse), the dead yeast cells break down in a process called autolysis. That is what gives Champagne its bready, biscuity character. The longer on the lees, the stronger it gets."
  },
  {
    id: "fr-41",
    topic: "sparkling",
    type: "scenario",
    question: "A Champagne is labelled Blanc de Blancs, meaning it is made only from white grapes. Which grape is it, and how will it taste compared with a Blanc de Noirs?",
    options: [
      "Chardonnay; elegant and citrussy, where Blanc de Noirs is fuller, with red fruit",
      "Pinot Meunier; fuller and red-fruited, where Blanc de Noirs is elegant and citrussy",
      "Chardonnay and Pinot Noir blended; richer than either alone",
      "Pinot Noir; copper-coloured with red fruit"
    ],
    answer: 0,
    region: "champagne",
    explanation: "Blanc de Blancs is made only from white grapes, and Chardonnay is by far Champagne's main white grape: elegant and citrussy. Blanc de Noirs comes from the black grapes, Pinot Noir and Pinot Meunier, and is fuller with red fruit."
  },
  {
    id: "fr-42",
    topic: "sparkling",
    type: "connection",
    question: "Why does a vintage Champagne usually taste more bready and developed than a non-vintage one?",
    options: [
      "Vintage must age 36 months from tirage, against 15 for non-vintage",
      "Vintage wines use only Pinot Noir",
      "Vintage wines skip the second fermentation",
      "Vintage wines are made only from grapes grown on chalk, which adds the biscuit flavour"
    ],
    answer: 0,
    region: "champagne",
    explanation: "Neither may be disgorged before 12 months on the lees, but non-vintage may be sold 15 months after tirage and vintage only after 36. Autolysis, the breakdown of yeast on the lees, builds bready, biscuity flavour, so more time on the lees means more of it."
  },
  {
    id: "fr-43",
    type: "map",
    question: "Which region is France's largest by volume, and makes fortified sweet wines from Grenache in Maury and Banyuls?",
    answer: "languedocRoussillon",
    explanation: "Languedoc-Roussillon is France's biggest wine region by volume, historically bulk wine and now going through a quality revolution. Maury and Banyuls in Roussillon make Vin Doux Naturel, sweet fortified wines from Grenache."
  },
  {
    id: "fr-44",
    type: "connection",
    question: "Why is old-vine Carignan prized in the Languedoc's quality revolution?",
    options: [
      "Carignan is the only grape the AOC rules allow",
      "Old vines give low yields, and in the Mediterranean heat that gives concentrated wines",
      "Old Carignan vines ripen early enough to avoid the summer heat, so the fruit stays fresh",
      "Carignan on galets ripens more fully than Grenache"
    ],
    answer: 1,
    region: "languedocRoussillon",
    explanation: "The Languedoc used to be about bulk. Its old Carignan vines produce little fruit, and low yields plus hot, dry summers give concentrated wine, which is what the new quality producers want."
  },
  {
    id: "fr-45",
    topic: "fortified",
    type: "connection",
    question: "Why does Roussillon's schist suit Grenache destined for fortified wine?",
    options: [
      "Schist stores water so the vines never suffer in the Roussillon heat",
      "Schist is a form of chalk that keeps the acidity high",
      "Schist stresses the vines, giving concentrated Grenache",
      "Schist reflects the sun and keeps the grapes cool"
    ],
    answer: 2,
    region: "languedocRoussillon",
    explanation: "Schist is a poor, stressful soil. Grenache vines on it work hard and produce concentrated, complex fruit, which is the base for the sweet, oxidative fortified wines of Maury and Banyuls."
  },
  {
    id: "fr-46",
    type: "scenario",
    question: "A retailer wants a southern French wine that is simply labelled with its grape variety, such as 'Syrah' or 'Viognier'. Which category allows this?",
    options: [
      "Languedoc AOC",
      "Vin Doux Naturel",
      "Corbières",
      "IGP Pays d'Oc"
    ],
    answer: 3,
    region: "languedocRoussillon",
    explanation: "IGP Pays d'Oc is the Languedoc's varietal-labelling category, so the grape name goes on the front. The AOCs such as Corbières and Minervois are named for place, and Vin Doux Naturel is the fortified sweet category."
  },
  {
    id: "fr-47",
    topic: "fortified",
    type: "scenario",
    question: "A sweet wine is fortified, made from Grenache, and shows complex, oxidative flavours. Where is it from?",
    options: [
      "Maury or Banyuls (Roussillon)",
      "Jurançon (South-West)",
      "Sélection de Grains Nobles (Alsace)",
      "Vouvray (Loire)"
    ],
    answer: 0,
    region: "languedocRoussillon",
    explanation: "Maury and Banyuls are Vin Doux Naturel: sweet, fortified, and often oxidative in style, made from Grenache. Jurançon moelleux comes from late-harvested Petit Manseng, Sélection de Grains Nobles from botrytised Alsace grapes, and sweet Vouvray from botrytised Chenin Blanc; none is a fortified Grenache wine."
  },
  {
    id: "fr-48",
    type: "connection",
    question: "Most of Provence makes rosé, yet Bandol fully ripens Mourvèdre for serious reds. Why?",
    options: [
      "Bandol is cooler, which Mourvèdre prefers",
      "Bandol uses carbonic maceration to extract colour quickly, which tames the Mourvèdre's tannins",
      "Bandol's soils are galets that radiate heat at night, as they do at Châteauneuf",
      "Bandol's terraced limestone slopes face the sea, sheltered and warm, and Mourvèdre needs heat"
    ],
    answer: 3,
    region: "provence",
    explanation: "Mourvèdre needs more heat than Grenache to ripen. Bandol's terraces, arranged like an amphitheatre facing the sea, are warm and sheltered enough to do it. The result is dark, structured, savoury reds that need at least 18 months in large oak."
  },
  {
    id: "fr-49",
    type: "scenario",
    question: "A Provence producer wants a pale, delicate, dry rosé. Which winemaking approach is right?",
    options: [
      "Direct pressing, or a short maceration, to keep the colour pale",
      "A long maceration on the skins for deeper colour",
      "Blending a finished red with a finished white",
      "Eighteen months in large oak foudres, which would add colour and weight"
    ],
    answer: 0,
    region: "provence",
    explanation: "Provence rosé is pale because the juice spends little or no time on the red skins: it is pressed straight off, or given only a short maceration. Quality rosé is serious winemaking; the 18 months in large oak belongs to Bandol reds."
  },
  {
    id: "fr-50",
    type: "connection",
    question: "Why is Provence's climate so well suited to rosé?",
    options: [
      "Cool sea fog rolling in from the Atlantic each morning keeps the grapes from over-ripening and keeps the juice pale",
      "Chalk soils give the high acidity rosé needs",
      "Mediterranean sun and the Mistral keep the grapes healthy, and an early harvest keeps it fresh",
      "Heavy autumn rain dilutes the colour naturally"
    ],
    answer: 2,
    region: "provence",
    explanation: "Hot, dry summers and the drying Mistral mean healthy grapes with little rot. Picking early keeps the acidity and freshness that a pale, dry rosé depends on."
  },
  {
    id: "fr-51",
    type: "map",
    question: "Which region, one of France's oldest, grows Cinsault and Rolle (Vermentino) beside Grenache and Mourvèdre?",
    answer: "provence",
    explanation: "Provence is one of the oldest wine regions in France, with vines planted by the Greeks around 600 BC. Cinsault and Rolle (also called Vermentino) are local to it, alongside the Mourvèdre, Grenache and Syrah it shares with the Rhône. Rosé makes up 88% of its production."
  },
  {
    id: "fr-52",
    type: "map",
    question: "Which region's Jurançon makes late-harvest sweet whites from thick-skinned Petit Manseng in the Pyrenean foothills?",
    answer: "southWest",
    explanation: "Jurançon is in the South-West, where the Pyrenean foothills add altitude. Petit Manseng's thick skins resist botrytis and let the sugar concentrate on the vine for sweet, tropical, honeyed wines."
  },
  {
    id: "fr-53",
    type: "connection",
    question: "Why does Petit Manseng suit sweet wine in Jurançon?",
    options: [
      "Its thin skins let botrytis in quickly",
      "Its thick skins resist botrytis and let sugar concentrate for late harvest",
      "It is fortified with grape spirit like Maury",
      "Its low acidity makes the sweetness feel richer, so no extra acid is ever needed"
    ],
    answer: 1,
    region: "southWest",
    explanation: "Petit Manseng has thick skins, so it can hang on the vine late without rotting while its sugar concentrates. Jurançon moelleux is the sweet, tropical, honeyed result; Jurançon sec is the dry version."
  },
  {
    id: "fr-54",
    type: "scenario",
    question: "A student says South-West wines are just like Bordeaux because the regions are neighbours. What is the key difference?",
    options: [
      "The South-West is cooler and wetter than Bordeaux, so its wines are always lighter in body",
      "The South-West is Mediterranean, like the Languedoc",
      "The South-West uses the same grapes as Bordeaux but ages them in foudre instead of barrique, which is the only difference",
      "Inland it is warmer and more continental, and local grapes like Malbec, Tannat and Petit Manseng set it apart"
    ],
    answer: 3,
    region: "southWest",
    explanation: "Atlantic influence fades as you move east, so inland the South-West is warmer and more continental than Bordeaux, giving fully ripe, concentrated grapes. Its own grapes, Malbec, Tannat, Négrette and the Mansengs, are what really distinguish it."
  },
  {
    id: "fr-55",
    type: "map",
    question: "Which region's reds are all Gamay, with ten Cru villages on hills of mostly granite?",
    answer: "beaujolais",
    explanation: "Beaujolais reds are all Gamay (a little white Chardonnay is also made). The ten Crus, such as Morgon, Fleurie and Moulin-à-Vent, sit mostly on granite, which gives Gamay structure and minerality that it lacks on the clay of the south."
  },
  {
    id: "fr-56",
    type: "connection",
    question: "Why does carbonic maceration suit Gamay so well?",
    options: [
      "It pulls out colour and fruit without harsh tannins, which suits a thin-skinned grape",
      "It adds the tannin Gamay lacks, so the wines can age for decades in the cellar",
      "It gives the oxidative character that Gamay needs to age, as in a fino Sherry",
      "It is the only method that works on granite soils, because the grapes there are small"
    ],
    answer: 0,
    region: "beaujolais",
    explanation: "Carbonic maceration ferments whole bunches from the inside, extracting colour and fresh fruit but little tannin. Gamay is thin-skinned and low in tannin anyway, so the method plays to its strengths and gives the light, fruity style."
  },
  {
    id: "fr-57",
    type: "scenario",
    question: "A red is very light and fruity, with banana and bubblegum notes. What is it, and how was it made?",
    options: [
      "Cru Beaujolais, aged in oak for a year or more",
      "Bourgogne Pinot Noir, fermented as whole bunches in open vats",
      "Chinon, from Cabernet Franc grown in the Loire",
      "Beaujolais Nouveau, made by carbonic maceration"
    ],
    answer: 3,
    region: "beaujolais",
    explanation: "Banana and bubblegum are the tell-tale notes of carbonic maceration, the method behind Beaujolais Nouveau. Cru Beaujolais is structured and earthy, Burgundy Pinot Noir is red-fruited and silky, and Chinon shows pencil shavings."
  },
  {
    id: "fr-58",
    type: "scenario",
    question: "A sommelier wants a Gamay that can age ten years or more and stand next to Burgundy Pinot Noir. Which should they buy?",
    options: [
      "Beaujolais Nouveau",
      "Beaujolais-Villages",
      "A Cru such as Morgon or Moulin-à-Vent",
      "Southern Beaujolais from clay and limestone"
    ],
    answer: 2,
    region: "beaujolais",
    explanation: "The ten Crus on granite make structured, earthy wines that can age 10+ years and rival Burgundy Pinot Noir. Traditional vinification and oak ageing add to that structure. Nouveau and the clay-based southern wines are made to drink young."
  },
  {
    id: "fr-59",
    type: "map",
    question: "Which region sits at the northern limit of viticulture, where grapes barely ripen and stay high in acid and low in sugar?",
    answer: "champagne",
    explanation: "Champagne is at the very edge of where vines will ripen. That marginal climate is a problem for still wine but perfect for sparkling base wine, which needs high acid and low sugar before the second fermentation."
  },
  {
    id: "fr-60",
    type: "map",
    question: "Which region classifies its wines as Village, Premier Cru and Grand Cru, based on tiny named plots called climats?",
    answer: "burgundy",
    explanation: "Burgundy's quality ladder runs Bourgogne AOC, Village, Premier Cru, Grand Cru. The rankings belong to the plot, not the producer, because the same grape on a different site makes a different wine."
  },
  {
    id: "fr-61",
    type: "map",
    question: "Which region is home to Condrieu, where Viognier makes aromatic, stone-fruit whites with low acidity?",
    answer: "rhoneNorth",
    explanation: "Condrieu is in the Northern Rhône, alongside the Syrah appellations of Côte-Rôtie, Hermitage and Cornas. Viognier is its grape, and in Côte-Rôtie a little of it is co-fermented with Syrah."
  },
  {
    id: "fr-62",
    type: "map",
    question: "Which region includes Corbières, Minervois, Fitou and Pic Saint-Loup, and grows Picpoul and old-vine Carignan?",
    answer: "languedocRoussillon",
    explanation: "These are all Languedoc-Roussillon appellations. Carignan is the region's old-vine speciality, and Picpoul is one of its white grapes, alongside Grenache Blanc and Viognier."
  },
  {
    id: "fr-63",
    type: "map",
    question: "Which region includes Pauillac, Margaux, Pomerol and Sauternes?",
    answer: "bordeaux",
    explanation: "Pauillac, Margaux, Saint-Julien and Saint-Estèphe are Left Bank villages in Bordeaux's Médoc. Pomerol and Saint-Émilion are on the Right Bank, and Sauternes and Pessac-Léognan are the other named sub-regions."
  },
  // ─── Italy ────────────────────────────────────────────────────────────────
  // Every fact below comes from src/data/italy.js. French names appear only as distractors.
  {
    id: "it-01",
    type: "map",
    country: "Italy",
    question: "Which region is home to Barolo and Barbaresco, where Nebbiolo ripens on the south-facing slopes of the Langhe?",
    answer: "piedmont",
    explanation: "Barolo and Barbaresco are in Piedmont, in the Langhe hills. Nebbiolo buds early and ripens late, so it takes the warmest south-facing sites and only a handful of hills ripen its tannins fully."
  },
  {
    id: "it-02",
    type: "map",
    country: "Italy",
    question: "Which region uses no IGT at all — its wines are DOC or DOCG — and makes Gavi from Cortese and Moscato d'Asti from Moscato Bianco?",
    answer: "piedmont",
    explanation: "Piedmont is the region with no IGT: its quality ladder runs from Piemonte DOC and Langhe DOC up to Barbaresco DOCG and Barolo DOCG. Gavi is its crisp, citrus white from Cortese, and Moscato d'Asti its sweet, lightly sparkling wine."
  },
  {
    id: "it-03",
    type: "connection",
    country: "Italy",
    question: "In the Langhe, Nebbiolo is given the warmest south-facing slopes while Dolcetto and Barbera take the cooler sites. Why?",
    options: [
      "Nebbiolo ripens late, so it needs the extra warmth to ripen its tannins",
      "Nebbiolo is thin-skinned and would burn on the cooler, shadier slopes of the Langhe",
      "Dolcetto and Barbera need the autumn fog to ripen properly, so they take the foggy sites",
      "The south-facing slopes have the deepest, most fertile soils"
    ],
    answer: 0,
    region: "piedmont",
    explanation: "Nebbiolo ripens late, so only the warmest slopes ripen its high tannins before the season ends. Dolcetto ripens earliest and Barbera in between, so they can cope with the cooler slopes left over."
  },
  {
    id: "it-04",
    type: "connection",
    country: "Italy",
    question: "Nebbiolo's name is thought to come from the autumn fog (nebbia) of the Langhe. What does the fog do for Barolo?",
    options: [
      "It shortens the season, so the grapes are picked early and the wines stay light",
      "It raises humidity and encourages noble rot, as in Sauternes, so the grapes are picked for sweet wine",
      "It cools the vineyards while the grapes hang late, so slow ripening keeps high acidity",
      "It protects the early-budding vines from spring frost"
    ],
    answer: 2,
    region: "piedmont",
    explanation: "Nebbiolo hangs on the vine into the fog season. The fog cools the vineyards during those last weeks, so ripening is slow and the grapes keep their acidity — that acidity, with the high tannin, is what lets Barolo age for decades."
  },
  {
    id: "it-05",
    type: "scenario",
    country: "Italy",
    question: "A Barolo producer wants a softer, more approachable style that is ready to drink sooner than the traditional wine. Which approach fits?",
    options: [
      "Longer maceration and ageing in large old oak botti",
      "Shorter maceration and ageing in new barriques",
      "Stopping the fermentation early by chilling the tank",
      "Blending in Barbera to add tannin and structure"
    ],
    answer: 1,
    region: "piedmont",
    explanation: "This is the modern Barolo approach: shorter maceration extracts less of Nebbiolo's harsh tannin, and new barriques soften what is left. The traditional method — long maceration and large old botti — makes wines that need years in bottle."
  },
  {
    id: "it-06",
    topic: "sparkling",
    type: "scenario",
    country: "Italy",
    question: "A winemaker in Asti wants a sweet, grapey, lightly sparkling wine from Moscato Bianco with low alcohol. Which method does the region use?",
    options: [
      "Tank method with a full second fermentation, as for Prosecco",
      "Traditional method with long lees ageing, as for Champagne",
      "Drying the grapes on racks before fermentation (appassimento)",
      "A single fermentation in tank, stopped early by chilling"
    ],
    answer: 3,
    region: "piedmont",
    explanation: "Asti and Moscato d'Asti use one fermentation in a sealed tank, stopped early by chilling. Because the yeast never finishes, the wine keeps its grape sugar and stays low in alcohol, and the trapped gas gives the light sparkle."
  },
  {
    id: "it-07",
    type: "map",
    country: "Italy",
    question: "Which region includes Chianti Classico, Brunello di Montalcino, Vino Nobile di Montepulciano and Bolgheri?",
    answer: "tuscany",
    explanation: "These are all Tuscan sub-regions. Chianti Classico, Brunello and Vino Nobile are Sangiovese country in the inland hills, and Bolgheri is the warm coastal strip where Cabernet Sauvignon and Merlot are grown."
  },
  {
    id: "it-08",
    type: "map",
    country: "Italy",
    question: "Which region's producers broke the DOC rules to make Bordeaux-style blends, sold as IGT and known as Super Tuscans?",
    answer: "tuscany",
    explanation: "The Super Tuscans are Bordeaux blends, or Sangiovese with Cabernet, from Tuscany. They did not fit the DOC rules, so they were sold as IGT Toscana; Bolgheri later got its own DOC for them."
  },
  {
    id: "it-09",
    type: "connection",
    country: "Italy",
    question: "Why is fine Sangiovese grown on the inland hills of Tuscany rather than on the warm coast at Bolgheri?",
    options: [
      "The coastal gravel and clay are too wet for Sangiovese's roots, which rot in the damp",
      "Cool nights at altitude slow ripening and keep acidity that heat would strip out",
      "Sangiovese ripens early, so it would rot in the coastal humidity before the harvest",
      "Chianti DOCG rules do not allow vineyards near the sea"
    ],
    answer: 1,
    region: "tuscany",
    explanation: "Sangiovese ripens late and loses acidity when it is too hot. The inland hills give warm days to ripen its tannins and cool nights from altitude to keep its acid. The coast is too hot for it, which is why Bolgheri grows Cabernet Sauvignon and Merlot instead."
  },
  {
    id: "it-10",
    type: "connection",
    country: "Italy",
    question: "The Chianti hills are galestro (crumbly marl) and alberese (limestone). What do these soils give the wine?",
    options: [
      "Deep, fertile soils give high yields of grapes and light, simple, easy-drinking wines",
      "Volcanic soils give the wines a smoky edge, as they do on Mount Etna in Sicily",
      "Chalk soils give the high acidity needed for sparkling wine, as in Champagne",
      "Poor, well-drained soils give slow ripening, ripe tannin and bright acid"
    ],
    answer: 3,
    region: "tuscany",
    explanation: "Galestro and alberese are poor and drain well, so the vine works hard and ripens slowly. Together with the cool hillside nights, that gives Sangiovese ripe tannin and bright acidity rather than the high yields a fertile soil would produce."
  },
  {
    id: "it-11",
    type: "scenario",
    country: "Italy",
    question: "A Tuscan producer wants to make a plush, new-oak blend of Cabernet Sauvignon and Merlot. Under which label can it be sold?",
    options: [
      "Chianti Classico DOCG",
      "Brunello di Montalcino DOCG",
      "IGT Toscana or Bolgheri DOC",
      "Vin Santo"
    ],
    answer: 2,
    region: "tuscany",
    explanation: "Chianti Classico must be mostly Sangiovese and Brunello di Montalcino is 100% Sangiovese, so a Cabernet–Merlot blend breaks both. That is the Super Tuscan story: these wines were sold as IGT Toscana, and Bolgheri later got its own DOC. Vin Santo is a sweet wine from dried grapes."
  },
  {
    id: "it-12",
    type: "scenario",
    country: "Italy",
    question: "A Tuscan estate wants to make Vin Santo. Which method is used?",
    options: [
      "Dry the grapes, then age the wine oxidatively in small sealed barrels",
      "Stop the fermentation early by chilling the must, as for Moscato d'Asti",
      "Fortify the wine with grape spirit after fermentation, as for Marsala",
      "Wait for noble rot to form on the vine, as in Sauternes"
    ],
    answer: 0,
    region: "tuscany",
    explanation: "Vin Santo is made from dried grapes, which concentrates the sugar, and is then aged oxidatively in small sealed barrels. Marsala is the fortified wine of the south, and chilling to stop fermentation belongs to Asti, not Tuscany."
  },
  {
    id: "it-13",
    type: "map",
    country: "Italy",
    question: "Which region makes Amarone, Ripasso and Recioto from dried Corvina grapes in Valpolicella?",
    answer: "veneto",
    explanation: "Valpolicella is in the Veneto. Corvina makes light wines on its own, so the region dries the grapes (appassimento) and one grape gives four wines: Valpolicella, Ripasso, Amarone and Recioto."
  },
  {
    id: "it-14",
    type: "map",
    country: "Italy",
    question: "Which region makes Prosecco from Glera on the steep Conegliano–Valdobbiadene hills, and Soave from Garganega?",
    answer: "veneto",
    explanation: "Both are Veneto wines. Conegliano Valdobbiadene Prosecco Superiore DOCG is the hand-picked hillside top of the Prosecco ladder, and Soave Classico comes from the volcanic and limestone hills."
  },
  {
    id: "it-15",
    type: "connection",
    country: "Italy",
    question: "Why is appassimento — drying the grapes on racks — so central to Valpolicella?",
    options: [
      "Corvina rots easily on the vine, so the bunches must be dried to save them from rot",
      "Corvina makes light wines alone, and drying concentrates its sugar and flavour",
      "The plain is too cold to ripen the grapes fully in the vineyard",
      "The DOC rules require every Valpolicella wine to be made from dried grapes"
    ],
    answer: 1,
    region: "veneto",
    explanation: "Corvina on its own gives a light, sour-cherry red. Drying healthy bunches for months lets the water leave while sugar and flavour stay, so the same grape can make full-bodied Amarone and sweet Recioto. Plain Valpolicella is made from fresh grapes."
  },
  {
    id: "it-16",
    topic: "sparkling",
    type: "connection",
    country: "Italy",
    question: "Why is Prosecco made by the tank method rather than the traditional method used in Champagne?",
    options: [
      "Glera's firm tannins need the shorter process to soften",
      "The tank method gives higher pressure and firmer bubbles",
      "It keeps Glera's fresh apple and pear aromas and gets the wine to market quickly",
      "Glera is machine-picked, and machine-picked grapes cannot be fermented in the bottle"
    ],
    answer: 2,
    region: "veneto",
    explanation: "Prosecco is meant to taste of Glera's fresh fruit and flowers. The tank method keeps those aromas, avoids the bready lees character of long bottle ageing, and gives soft bubbles in a wine that is quick to sell."
  },
  {
    id: "it-17",
    type: "scenario",
    country: "Italy",
    question: "A Valpolicella producer has a light, sour-cherry red and wants more body without drying another batch of grapes. Which technique fits?",
    options: [
      "Ripasso: re-ferment the young wine on the skins left over from Amarone",
      "Stop the fermentation early to keep some sugar, as for Recioto",
      "Blend in Pinot Grigio to add extra weight and a fuller, richer body",
      "Age the young wine for five years in new barriques before it is released"
    ],
    answer: 0,
    region: "veneto",
    explanation: "Ripasso passes young Valpolicella over the Amarone skins, which still carry sugar and flavour, so a second fermentation adds body. Stopping fermentation early is how Recioto is made sweet, and Pinot Grigio is a light, neutral white."
  },
  {
    id: "it-18",
    type: "scenario",
    country: "Italy",
    question: "A Soave producer wants a mineral, long-lived wine rather than a simple one. Where and how should the grapes be grown?",
    options: [
      "On the deep alluvial soils of the plain, at high yields",
      "In flat, machine-worked vineyards on the plain, then made by the tank method",
      "By drying the Garganega and fermenting it sweet",
      "In the hillside Classico zone, on volcanic and limestone soils"
    ],
    answer: 3,
    region: "veneto",
    explanation: "Soave Classico comes from the volcanic (basalt) and limestone hills, which keep it mineral and able to age. Pergola training shades the fruit and keeps air moving. The fertile plain gives volume and simpler wines."
  },
  {
    id: "it-19",
    type: "map",
    country: "Italy",
    question: "Which region includes Taurasi, Aglianico del Vulture, Primitivo di Manduria and Etna?",
    answer: "southernItaly",
    explanation: "Taurasi is in Campania, Aglianico del Vulture in Basilicata, Primitivo di Manduria in Puglia and Etna in Sicily — all grouped here as Southern Italy. Heat is the given, and altitude or sea breezes decide the style."
  },
  {
    id: "it-20",
    type: "map",
    country: "Italy",
    question: "Which region grows Nerello Mascalese on high terraces of black volcanic ash, and makes fortified Marsala?",
    answer: "southernItaly",
    explanation: "Both are Sicilian, so they belong to Southern Italy. Etna's old bush vines sit on lava and ash at altitude, and Marsala is the fortified wine, aged oxidatively and graded by age and colour."
  },
  {
    id: "it-21",
    type: "connection",
    country: "Italy",
    question: "Why does Etna Nerello Mascalese taste pale, high in acid and Pinot Noir-like, rather than ripe and jammy like most southern reds?",
    options: [
      "Nerello Mascalese is naturally low in sugar and colour, whatever the site it grows on",
      "Sea breezes off the coast keep the vineyards cool",
      "Altitude on Etna gives cool nights, so the grapes keep acid and fine tannin",
      "The volcanic soil lowers the alcohol in the finished wine"
    ],
    answer: 2,
    region: "southernItaly",
    explanation: "Etna's terraces are high, so nights are cool and Nerello Mascalese ripens late and slowly. That keeps acid and fine tannin in grapes that would be jammy on the hot plain, while the free-draining volcanic ash adds a smoky edge."
  },
  {
    id: "it-22",
    type: "connection",
    country: "Italy",
    question: "Why does Aglianico succeed in the hills of Campania and Basilicata?",
    options: [
      "It ripens early, like Primitivo, so it finishes before the worst of the summer heat",
      "It needs a cool, damp autumn to keep its acidity",
      "It has low acidity, so the heat does it no harm",
      "It buds early and ripens very late, so it needs the long, dry southern autumn"
    ],
    answer: 3,
    region: "southernItaly",
    explanation: "Aglianico is one of the latest-ripening grapes, so it needs a long autumn with no rain. The hills give altitude to moderate the heat while the southern climate stays dry, and the result is a full, high-acid, high-tannin wine — the 'Barolo of the South'."
  },
  {
    id: "it-23",
    type: "scenario",
    country: "Italy",
    question: "A Puglian grower wants ripe Primitivo without sunburnt fruit on the hot, flat plain. Which vineyard choice helps?",
    options: [
      "Bush vines (alberello), whose leaves shade the fruit from the sun",
      "A high trellis that exposes the bunches to full sun",
      "Planting the most fertile part of the plain, for the highest yields and big bunches",
      "Picking very late to build as much sugar as possible"
    ],
    answer: 0,
    region: "southernItaly",
    explanation: "Puglia has neither altitude nor much shelter, so the bush vine's own canopy is the protection. Bush vines and sea breezes keep Primitivo and Negroamaro from sunburn; Primitivo already ripens early, so a late pick would only add jam and alcohol."
  },
  {
    id: "it-24",
    type: "scenario",
    country: "Italy",
    question: "A producer of Taurasi finds the young Aglianico harsh and tannic. What does the DOCG expect to be done before release?",
    options: [
      "Blend in Primitivo, which is required by the DOCG, to soften the wine",
      "Extended ageing in oak and bottle, which softens the tannin",
      "Dry the grapes first, as for Amarone",
      "Fortify the wine, as for Marsala"
    ],
    answer: 1,
    region: "southernItaly",
    explanation: "Taurasi DOCG and Aglianico del Vulture Superiore DOCG require extended ageing in oak and bottle before release. Time is what softens Aglianico's high tannin, in the same way that Barolo needs its years before it is sold."
  },
  {
    id: "es-01",
    type: "map",
    country: "Spain",
    question: "Which Spanish region is shielded from Atlantic rain by the Cantabrian mountains and blends Tempranillo with Garnacha, Graciano and Mazuelo?",
    answer: "rioja",
    explanation: "Rioja sits behind the Cantabrian mountains, which block the Atlantic weather. Its tradition is to blend Tempranillo with Garnacha for body, Graciano for acidity and aroma, and Mazuelo for tannin."
  },
  {
    id: "es-02",
    type: "map",
    country: "Spain",
    question: "Which region is split into Alta, Alavesa and Oriental, and traditionally ages its reds in American oak for vanilla and coconut?",
    answer: "rioja",
    explanation: "Rioja Alta and Rioja Alavesa are the cooler western zones and Rioja Oriental is the warmer east. American oak is the region's traditional barrel, which is where the vanilla and coconut in a classic Rioja come from."
  },
  {
    id: "es-03",
    type: "connection",
    country: "Spain",
    question: "Why does Tempranillo do best in Rioja Alta and Rioja Alavesa while Garnacha suits Rioja Oriental?",
    options: [
      "The cooler, Atlantic-influenced west suits early-ripening Tempranillo; the warmer, drier east gives Garnacha its heat",
      "Garnacha needs the clay-limestone slopes, which are found only in the east of the region, around Rioja Oriental",
      "Tempranillo ripens late, so it needs the extra heat of the western zones, while Garnacha ripens early",
      "The Ebro floods the western vineyards every spring, and only Tempranillo tolerates wet roots, while Garnacha rots in them"
    ],
    answer: 0,
    region: "rioja",
    explanation: "Tempranillo ripens early and gives its most elegant, high-acid wines in the cooler west, where clay-limestone slopes add structure. Garnacha needs more heat, so it does well on the warmer, drier valley floor of Rioja Oriental, where it adds body and alcohol to the blend."
  },
  {
    id: "es-04",
    type: "connection",
    country: "Spain",
    question: "Why does a traditional Rioja Reserva show vanilla and coconut?",
    options: [
      "Fully ripe Garnacha gives coconut when it is grown in the east, where the sun is strongest",
      "Malolactic fermentation in stainless steel produces these aromas, as in many whites",
      "The wine has spent years in American oak, which gives vanilla and coconut",
      "The clay-limestone soils of Rioja Alta add sweet spice to the fruit through the roots"
    ],
    answer: 2,
    region: "rioja",
    explanation: "Oak ageing is Rioja's signature, and American oak is the traditional barrel. Tempranillo's soft red fruit takes the oak well, so long ageing in American oak became the style and the vanilla and coconut come from the barrel, not the grape or the soil."
  },
  {
    id: "es-05",
    type: "scenario",
    country: "Spain",
    question: "A Rioja producer wants a darker, riper and more tannic wine in the modern style. Which approach fits?",
    options: [
      "Age the wine longer in American oak and release it as Gran Reserva",
      "Use riper fruit, French oak and less time in barrel",
      "Add more Viura to the blend to build structure",
      "Move the Tempranillo plantings to the alluvial valley floor of Rioja Oriental"
    ],
    answer: 1,
    region: "rioja",
    explanation: "Modern Rioja producers pick riper fruit, use French oak instead of American and keep the wine in barrel for less time. That gives a darker, riper, more tannic wine, whereas longer ageing in American oak makes the mellow, vanilla-scented traditional style."
  },
  {
    id: "es-06",
    type: "scenario",
    country: "Spain",
    question: "A restaurant wants a savoury, mellow, long Rioja with leather, dried fruit and mushroom. Which label should the buyer look for?",
    options: [
      "Joven, bottled young with little or no ageing in oak or bottle",
      "Crianza, aged for at least two years in total",
      "Reserva, aged for at least three years in total",
      "Gran Reserva, aged for at least five years in total"
    ],
    answer: 3,
    region: "rioja",
    explanation: "The ladder runs Joven, Crianza, Reserva, Gran Reserva, each marking more time in oak and then in bottle before release. Gran Reserva has had the longest ageing, so it is the savoury, mellow wine where Tempranillo's red fruit has turned to leather, dried fruit and mushroom."
  },
  {
    id: "es-07",
    type: "map",
    country: "Spain",
    question: "Which region on the high Duero plateau makes full-bodied Tempranillo, known locally as Tinto Fino or Tinta del País, with Toro and Rueda as its neighbours?",
    answer: "riberaDelDuero",
    explanation: "Ribera del Duero sits at altitude on the Duero plateau, where Tempranillo goes by the names Tinto Fino and Tinta del País. Toro, with its Tinta de Toro, and Rueda, with its Verdejo whites, lie further along the same river."
  },
  {
    id: "es-08",
    type: "map",
    country: "Spain",
    question: "In which Spanish region do hot days, cold nights and frost at both ends of a short season shape the wine?",
    answer: "riberaDelDuero",
    explanation: "Ribera del Duero's altitude gives hot summer days, cold nights and harsh winters, and the growing season is short. Spring and autumn frost are the main risks, so the grapes must ripen in a narrow window."
  },
  {
    id: "es-09",
    type: "connection",
    country: "Spain",
    question: "Ribera del Duero and Rioja both rely on Tempranillo. Why is Ribera darker, fuller and more tannic?",
    options: [
      "Cabernet Sauvignon makes up most of the Ribera blend and adds all the extra colour and tannin",
      "American oak gives more tannin than French oak, and Ribera uses far more American oak than Rioja",
      "The Atlantic keeps Ribera humid and misty, which thickens the skins of the grapes",
      "Hot days on the high plateau build colour and thick skins, while cold nights keep acidity"
    ],
    answer: 3,
    region: "riberaDelDuero",
    explanation: "The difference is altitude. Hot days on the plateau give deep colour and thick skins, so firmer tannin, while cold nights keep the acidity that heat would otherwise burn off. Small amounts of other grapes such as Cabernet Sauvignon are permitted, and French oak is common here, often alongside some American."
  },
  {
    id: "es-10",
    type: "connection",
    country: "Spain",
    question: "Why does Ribera del Duero keep medium-high acidity despite its hot summer days?",
    options: [
      "Rain from the nearby Atlantic cools the vineyards in summer",
      "Cold nights at altitude slow ripening and preserve the acid",
      "Growers pick before the grapes are ripe to dodge the autumn frost",
      "The limestone soils add acidity to the wine"
    ],
    answer: 1,
    region: "riberaDelDuero",
    explanation: "The Atlantic and the Mediterranean are both far away, so the relief comes from altitude. Cold nights slow ripening and keep the acidity while the hot days build colour and tannin. Growers pick only fully ripe fruit, which is why the wines are concentrated."
  },
  {
    id: "es-11",
    type: "scenario",
    country: "Spain",
    question: "A grower is planning a new vineyard in Ribera del Duero. Which risk should the plan take most seriously, and why?",
    options: [
      "Frost in spring and autumn, because the altitude gives late budding and an early finish",
      "Drought from the hot levante wind, as in Jerez, which scorches the whole plateau by July",
      "Rot from autumn mists off the river, as in the Rheingau, which ruins the late harvest",
      "Heat stress on black slate soils, as in Priorat, where the sun burns the grapes"
    ],
    answer: 0,
    region: "riberaDelDuero",
    explanation: "On the plateau budding is late and the season ends early, so frost can strike at either end. Rain is low and the region is far from both seas, so rot is not the worry; the soils are limestone and clay, not slate."
  },
  {
    id: "es-12",
    type: "scenario",
    country: "Spain",
    question: "A Ribera del Duero producer wants to add a small amount of another grape to the Tempranillo. Which does the DO permit?",
    options: [
      "Graciano and Mazuelo, the usual Rioja blending grapes",
      "Verdejo, the white grape of neighbouring Rueda",
      "Cabernet Sauvignon or Merlot, among the permitted extras",
      "Syrah and Cariñena, the grapes of the Mediterranean east"
    ],
    answer: 2,
    region: "riberaDelDuero",
    explanation: "Ribera del Duero allows small amounts of other grapes alongside Tempranillo, including Cabernet Sauvignon, Merlot, Malbec and Garnacha Tinta. Graciano and Mazuelo belong to the Rioja blend, Verdejo is the white grape of neighbouring Rueda, and Syrah and Cariñena are Priorat's blending grapes."
  },
  {
    id: "es-13",
    type: "map",
    country: "Spain",
    question: "Which region grows old bush-vine Garnacha and Cariñena on steep terraces of black licorella slate, inland from Tarragona?",
    answer: "priorat",
    explanation: "Priorat's vineyards sit on licorella, black slate and quartz, on terraces so steep that the work is done by hand. Old bush vines of Garnacha and Cariñena root deep into the slate to find water."
  },
  {
    id: "es-14",
    type: "map",
    country: "Spain",
    question: "Which Spanish region is ringed by Montsant DO and shares Spain's top quality tier with Rioja?",
    answer: "priorat",
    explanation: "Priorat holds DOQ status, the top tier that only it and Rioja have. Montsant DO is the ring of vineyards around it."
  },
  {
    id: "es-15",
    type: "connection",
    country: "Spain",
    question: "Why are yields in Priorat so tiny?",
    options: [
      "Frost at altitude kills much of the crop every spring, leaving only a handful of grapes at harvest time",
      "The vines are young and not yet in full production, so the crop is small",
      "Licorella slate drains freely and holds little water, so the old vines struggle to produce",
      "Hand-harvesting on the steep terraces leaves much of the fruit unpicked on the vine"
    ],
    answer: 2,
    region: "priorat",
    explanation: "The slate stores heat, drains freely and holds little water, so in the hot, dry summer the old bush vines have to push their roots deep to find any. A stressed vine gives little fruit, and that tiny yield is what concentrates the wine."
  },
  {
    id: "es-16",
    type: "connection",
    country: "Spain",
    question: "What does the licorella slate do for ripening in Priorat?",
    options: [
      "It stores heat and drains, so grapes ripen fully while roots dig deep and skins thicken",
      "It keeps the soil cool and wet, which slows ripening and keeps the wine light, as in Rías Baixas",
      "Its pale surface reflects sunlight back onto the vines, like the albariza of Jerez",
      "Its high fertility gives large, vigorous bunches with thin skins and little colour"
    ],
    answer: 0,
    region: "priorat",
    explanation: "Licorella is black slate: it soaks up the heat and drains away the little rain that falls. Garnacha and Cariñena ripen fully in that warmth, and the struggle for water stresses the vine and thickens the skins, which gives the deep colour and high tannin."
  },
  {
    id: "es-17",
    type: "scenario",
    country: "Spain",
    question: "A Priorat grower wants to bring in machines to cut the cost of vineyard work. Why is that hard?",
    options: [
      "The DOQ rules ban all machinery in the vineyard, in order to protect the old vines",
      "The vines are trellised too high for a tractor to pass between the rows",
      "The soil is too soft and sandy to carry the weight of a machine",
      "The terraces (costers) are too steep for machines, so work is done by hand"
    ],
    answer: 3,
    region: "priorat",
    explanation: "Priorat's old bush vines sit on steep terraces, often too steep for any machine. That is why hand work runs right through the year, production is small and the wines are expensive."
  },
  {
    id: "es-18",
    type: "scenario",
    country: "Spain",
    question: "A taster has a deep, full-bodied, high-alcohol red with ripe black fruit, dried fig, liquorice and a stony edge, aged in new French oak. Which is it most likely to be?",
    options: [
      "Rioja Alavesa Crianza",
      "Priorat DOQ",
      "Oloroso Sherry",
      "Barolo"
    ],
    answer: 1,
    region: "priorat",
    explanation: "Deep colour, full body, high alcohol and high tannin with ripe black fruit, dried fig, liquorice and a mineral edge from the slate is the Priorat profile. Rioja is red-fruited and mellower, Oloroso is a fortified brown wine, and Barolo is Italian."
  },
  {
    id: "es-19",
    type: "map",
    country: "Spain",
    question: "Which region's white albariza soil soaks up the winter rain, and whose wines are fortified and aged in a solera?",
    answer: "sherry",
    explanation: "Albariza is the chalky white soil of the Sherry region in the far south of Spain. It holds winter rain through the dry summer, and every Sherry style is fortified and then aged in the solera system."
  },
  {
    id: "es-20",
    type: "map",
    country: "Spain",
    question: "Which region includes Jerez de la Frontera, Sanlúcar de Barrameda and El Puerto de Santa María?",
    answer: "sherry",
    explanation: "These three towns are the home of Sherry. Manzanilla is made only in seaside Sanlúcar de Barrameda, where the flor grows thickest."
  },
  {
    id: "es-21",
    topic: "fortified",
    type: "connection",
    country: "Spain",
    question: "Why does Fino stay pale and fresh while Oloroso turns brown and nutty?",
    options: [
      "Fino is made from Pedro Ximénez grapes picked early in the season, while Oloroso is made from Palomino grapes picked late and left to dry",
      "Fino is lightly fortified so flor grows and shields it from air; Oloroso is fortified higher, so the flor dies and it ages in air",
      "Fino is aged in stainless steel tanks and Oloroso in new oak barrels, which darken it",
      "Oloroso is sweetened with sun-dried grapes, which darken it"
    ],
    answer: 1,
    region: "sherry",
    explanation: "The level of fortification decides the style. A light fortification lets flor, a layer of yeast, grow on the wine and protect it from air, so Fino stays pale. Fortify a little more and the flor cannot live, so Oloroso ages oxidatively and turns brown, walnutty and full."
  },
  {
    id: "es-22",
    type: "connection",
    country: "Spain",
    question: "Why does Palomino survive the hot, dry summer in Jerez without irrigation?",
    options: [
      "The levante wind brings regular summer rain from the east, which the vines drink",
      "Palomino is a drought-resistant red grape with deep roots",
      "The vines are trained high on wires to shade the soil",
      "The albariza soil soaks up winter rain and holds it through the summer"
    ],
    answer: 3,
    region: "sherry",
    explanation: "Winter rain is the vines' water for the whole year. The chalky albariza stores it and gives it back through the dry summer, and its pale surface reflects light onto the vines. Palomino is a white grape, the levante is a hot dry wind, and the vines are trained low."
  },
  {
    id: "es-23",
    topic: "fortified",
    type: "scenario",
    country: "Spain",
    question: "A bodega wants its Fino to taste the same year after year. Which practice delivers that?",
    options: [
      "The solera system, fractional blending across rows of barrels, so every bottle mixes ages",
      "Bottling each vintage separately and keeping the year on the label, as for a vintage Champagne",
      "Fortifying higher so the flor dies and the wine stabilises",
      "Adding sun-dried Pedro Ximénez to mask the differences between years"
    ],
    answer: 0,
    region: "sherry",
    explanation: "The solera blends young wine into older wine across rows of barrels, so what is drawn off is always a blend of many ages. That is why the house style stays constant from year to year. Fortifying higher would kill the flor and turn the wine into an Oloroso."
  },
  {
    id: "es-24",
    topic: "fortified",
    type: "scenario",
    country: "Spain",
    question: "A buyer wants the lightest, freshest style of Sherry, with a salty tang. Which should they choose?",
    options: [
      "Oloroso from Jerez de la Frontera, nutty and full-bodied",
      "Cream, a sweetened blend of Oloroso and Pedro Ximénez",
      "Manzanilla from Sanlúcar de Barrameda",
      "Pedro Ximénez, sweet and dark from sun-dried grapes"
    ],
    answer: 2,
    region: "sherry",
    explanation: "Manzanilla is the lightest and freshest Sherry, with a salty tang. It is made only in seaside Sanlúcar de Barrameda, where the humid poniente wind off the Atlantic keeps the bodegas cool and the flor grows thickest."
  },
  {
    id: "de-01",
    type: "map",
    country: "Germany",
    question: "Which region grows Riesling on some of the steepest slopes in the world, on dark Devonian slate, with each vine tied to its own post?",
    answer: "mosel",
    explanation: "The Mosel's vineyards climb the slate slopes above the river's bends. Single-post training suits the slope, and almost all the work is by hand."
  },
  {
    id: "de-02",
    type: "map",
    country: "Germany",
    question: "Which German region includes Bernkastel, Piesport and Wehlen, together with the Saar and the Ruwer?",
    answer: "mosel",
    explanation: "Bernkastel, Piesport and Wehlen are villages of the Mittelmosel. The Saar and the Ruwer are the Mosel's tributary valleys and belong to the same region."
  },
  {
    id: "de-03",
    type: "connection",
    country: "Germany",
    question: "Why are off-dry and sweet styles the norm in the Mosel?",
    options: [
      "Warm summers give so much sugar that the yeast cannot finish fermenting all of it",
      "Slow, late ripening keeps very high acidity, so a little sugar balances the wine",
      "The slate soils pass sugar into the grapes as they ripen on the steep slopes",
      "German wine law requires a minimum of residual sugar in every Qualitätswein bottled"
    ],
    answer: 1,
    region: "mosel",
    explanation: "At the northern limit of grape growing, ripening is slow and late, so the acidity stays very high. Against that acid a little sugar reads as balance, not sweetness, which is why Kabinett and Spätlese are usually off-dry to medium-sweet. Low sugar at harvest also keeps the alcohol low."
  },
  {
    id: "de-04",
    type: "connection",
    country: "Germany",
    question: "In the Mosel the sunny side of each river bend is planted and the shaded side often is not. Why?",
    options: [
      "The shaded slopes sit on fertile loam, which is kept for Müller-Thurgau and other crops",
      "The river floods the shaded bank every spring and washes the young vines away",
      "Slate occurs only on the sunny side of the valley; the other bank is solid granite",
      "Only steep, south-facing slopes catch enough of the low northern sun to ripen Riesling"
    ],
    answer: 3,
    region: "mosel",
    explanation: "Getting the grapes ripe is the constant worry this far north. Steep, south-facing slate slopes catch the low sun, and the river adds reflected light and stored warmth into autumn. Sites that face away from the sun simply cannot ripen Riesling."
  },
  {
    id: "de-05",
    type: "scenario",
    country: "Germany",
    question: "A Mosel winemaker wants to keep the fruit and acidity of the Riesling intact. Which cellar approach fits?",
    options: [
      "Stainless steel or old large Fuder, with no new oak and no malolactic",
      "New small barriques, with full malolactic fermentation and long lees ageing",
      "Long oxidative ageing in half-filled casks under a layer of flor yeast",
      "Several years in new American oak, as for a Rioja Reserva or Gran Reserva"
    ],
    answer: 0,
    region: "mosel",
    explanation: "The Mosel aim is to change the Riesling as little as possible. Stainless steel or old Fuder add no oak flavour, and skipping malolactic keeps the sharp acidity. New oak or malolactic would soften and mask what the region is prized for."
  },
  {
    id: "de-06",
    type: "scenario",
    country: "Germany",
    question: "A buyer sees Spätlese on a Mosel label and assumes the wine must be sweet. What does the Prädikat actually tell them?",
    options: [
      "The exact level of sweetness the finished wine has when it is bottled for sale",
      "How many years the wine was aged in oak before it was released to buyers",
      "How ripe the grapes were at harvest; it can still be dry if labelled trocken",
      "That the grapes were frozen on the vine and pressed while still hard"
    ],
    answer: 2,
    region: "mosel",
    explanation: "The Prädikat ladder describes ripeness at harvest, not sweetness. A Spätlese is usually off-dry to medium-sweet, but a Spätlese trocken is fermented dry. Only Eiswein means the grapes were frozen on the vine."
  },
  {
    id: "de-07",
    type: "map",
    country: "Germany",
    question: "Which region's vineyards face south across the Rhine where the river turns west, with the Taunus hills behind them?",
    answer: "rheingau",
    explanation: "The Rhine turns west for a stretch in the Rheingau, so the whole slope faces south across the water. The Taunus hills shelter it from cold north winds."
  },
  {
    id: "de-08",
    type: "map",
    country: "Germany",
    question: "Which German region includes Rüdesheim, Johannisberg and Hochheim, and grows Spätburgunder on the slate at Assmannshausen?",
    answer: "rheingau",
    explanation: "These are the Rheingau's villages. Assmannshausen, at the steep slate western end, is where the region's Spätburgunder is concentrated."
  },
  {
    id: "de-09",
    type: "connection",
    country: "Germany",
    question: "Why is dry Riesling the main style in the Rheingau, where the Mosel makes off-dry?",
    options: [
      "The loess soils of the eastern Rheingau strip nearly all the acidity from the grapes",
      "The VDP growers' association forbids any residual sugar in its members' wines",
      "More sun and less rain give riper grapes with enough acidity to stay balanced dry",
      "Autumn mists off the Rhine stop the fermentation before it has finished"
    ],
    answer: 2,
    region: "rheingau",
    explanation: "The south-facing bank and the shelter of the Taunus make the Rheingau warmer and drier than the Mosel. Riper grapes carry enough acidity to be balanced without sugar, so the best wines are dry and full rather than off-dry and delicate."
  },
  {
    id: "de-10",
    type: "connection",
    country: "Germany",
    question: "Why does the Rheingau produce great botrytis wines in the right years?",
    options: [
      "Autumn mists off the wide, slow Rhine bring botrytis in warm years",
      "The Taunus hills trap heavy rain over the vineyards through the whole autumn",
      "The slate soils hold moisture around the bunches and so encourage rot every year",
      "Growers leave the grapes hanging until frost kills the vines in midwinter"
    ],
    answer: 0,
    region: "rheingau",
    explanation: "The Rhine is wide and slow here, and in warm autumns its mists settle on the vines and bring botrytis. That is what makes the sweet Prädikat wines, from Spätlese up to Trockenbeerenauslese, rich with honey and marmalade. Frozen grapes make Eiswein, a different thing."
  },
  {
    id: "de-11",
    type: "scenario",
    country: "Germany",
    question: "A Rheingau producer wants to label a top dry wine from a single top-rated vineyard with a grand-cru-style designation. Which should they use?",
    options: [
      "Trockenbeerenauslese",
      "Kabinett trocken",
      "DOCa",
      "VDP Grosses Gewächs"
    ],
    answer: 3,
    region: "rheingau",
    explanation: "Grosses Gewächs (GG) is the VDP growers' association label for a dry wine from a single top-rated vineyard, a grand cru idea set by the association rather than by national law. Trockenbeerenauslese is a sweet Prädikat, Kabinett is the lowest Prädikat rung, and DOCa is a Spanish tier."
  },
  {
    id: "de-12",
    type: "scenario",
    country: "Germany",
    question: "A Rheingau grower wants to plant Spätburgunder. Where in the region should it go?",
    options: [
      "The deep loess and loam on the gentle eastern slopes, where the soil is richest",
      "The warm slate sites at the western end, around Assmannshausen",
      "The flat land right beside the river, below the vineyards",
      "The cool, north-facing side of the Taunus hills behind the river"
    ],
    answer: 1,
    region: "rheingau",
    explanation: "Spätburgunder is concentrated on the slate at Assmannshausen, at the steep western end. Those warm slate sites ripen Pinot Noir, which the Mosel cannot, while the deeper loess to the east gives fuller Riesling."
  },
  {
    id: "de-13",
    type: "map",
    country: "Germany",
    question: "Which German region sits in the rain shadow of the Haardt hills, the northern continuation of Alsace's Vosges?",
    answer: "pfalz",
    explanation: "The Haardt hills block rain from the west, so the Pfalz is one of the warmest, driest and sunniest parts of Germany. The same hills, under another name, make Alsace dry."
  },
  {
    id: "de-14",
    type: "map",
    country: "Germany",
    question: "Which region includes the Mittelhaardt, Forst and Deidesheim, and makes Dornfelder and Grauburgunder alongside Riesling?",
    answer: "pfalz",
    explanation: "Forst and Deidesheim are the Mittelhaardt villages of the Pfalz, with its best Riesling sites on sandstone and basalt. The region is warm enough to be serious about red Dornfelder and Spätburgunder and about the Pinot whites."
  },
  {
    id: "de-15",
    type: "connection",
    country: "Germany",
    question: "Why is the Pfalz one of the warmest and driest regions in Germany?",
    options: [
      "It lies further south than any other German wine region, close to the Alps",
      "The Rhine turns west here, so the whole bank faces the sun for most of every day",
      "Its sandy soils store the summer heat and give it back to the vines at night",
      "The Haardt hills block rain from the west, so the vineyards sit in a rain shadow"
    ],
    answer: 3,
    region: "pfalz",
    explanation: "The Haardt hills are the Vosges under another name, and they give the Pfalz the same rain shadow that makes Alsace dry. Sunny summers and dry autumns follow, so drought is more of a risk than rot. The westward turn of the river is the Rheingau's story, not this one."
  },
  {
    id: "de-16",
    type: "connection",
    country: "Germany",
    question: "Why does the Pfalz make far more red wine than the Mosel?",
    options: [
      "Its warmth ripens Spätburgunder and Dornfelder, which a cool region cannot",
      "Its slate soils suit red grapes far better than they suit white grapes here",
      "The VDP requires every Grosses Gewächs from the region to be a red wine",
      "Müller-Thurgau, its volume grape, is a red variety"
    ],
    answer: 0,
    region: "pfalz",
    explanation: "The Pfalz is warm enough to ripen almost anything, so Spätburgunder and Dornfelder make it a serious red region. The Mosel struggles to ripen even Riesling and grows no red grapes of note. Müller-Thurgau is a white grape."
  },
  {
    id: "de-17",
    type: "scenario",
    country: "Germany",
    question: "A Pfalz producer wants a fuller, weightier Grauburgunder. Which cellar approach fits?",
    options: [
      "Stop the fermentation early and add back Süssreserve",
      "Lees contact and a little new oak",
      "Age the wine under a layer of flor",
      "Pick the grapes frozen on the vine"
    ],
    answer: 1,
    region: "pfalz",
    explanation: "Grauburgunder and Weissburgunder in the Pfalz are sometimes given lees contact and a little new oak for weight. Stopping fermentation would make a sweeter wine, not a fuller one, and flor and frozen grapes belong to Sherry and Eiswein."
  },
  {
    id: "de-18",
    type: "scenario",
    country: "Germany",
    question: "A buyer wants a deep-coloured, soft, fruity German red for early drinking, without oak. Which Pfalz grape should they ask for?",
    options: [
      "Spätburgunder",
      "Riesling",
      "Dornfelder",
      "Tempranillo"
    ],
    answer: 2,
    region: "pfalz",
    explanation: "Dornfelder is made deep-coloured and fruity, mostly unoaked, for early drinking, with plum, blackberry and soft tannin. Spätburgunder is paler and usually sees oak, Riesling is white, and Tempranillo is Spanish."
  },
  {
    id: "nw-01",
    type: "map",
    country: "New World",
    question: "Which New World region is cooled by Pacific fog that reaches inland only through gaps in the Coast Ranges, such as San Pablo Bay into Carneros and the Russian River?",
    answer: "california",
    explanation: "The cold Pacific makes fog and cool air, but the Coast Ranges block them except where there is a gap. San Pablo Bay lets the fog into Carneros, the Russian River lets it into Sonoma, and the east–west valleys of Santa Barbara let it pour in from the sea. Behind the mountains it is hot."
  },
  {
    id: "nw-02",
    type: "map",
    country: "New World",
    question: "Which region labels its wines by grape, uses AVAs as place names with no quality guarantee, and makes Fumé Blanc and White Zinfandel?",
    answer: "california",
    explanation: "California wines are labelled by grape, and an AVA such as Napa Valley is only a place name, not a promise of quality. Fumé Blanc is oaked Sauvignon Blanc, and White Zinfandel is an off-dry pink made from the Zinfandel grape."
  },
  {
    id: "nw-03",
    type: "connection",
    country: "New World",
    question: "Why can Carneros grow cool-climate Pinot Noir while Napa, only a few miles inland, ripens full-bodied Cabernet Sauvignon?",
    options: [
      "Carneros sits at high altitude in the Mayacamas mountains, well above the warm Napa valley floor and its fog",
      "Napa has limestone soils that store heat overnight",
      "Cold Pacific fog and cool air reach Carneros through San Pablo Bay; the mountains keep Napa warm",
      "Carneros gets regular summer rain that cools the vines, while Napa stays dry"
    ],
    answer: 2,
    region: "california",
    explanation: "Carneros lies at the foot of both valleys on San Pablo Bay, so the cold fog reaches it and it is the coolest site: Pinot Noir, Chardonnay and sparkling base. Napa's valley floor and benchlands sit behind the mountains, where it is warm enough for Cabernet, and the hillsides above the fog see even more sun. It is the fog line, not altitude or rain, that decides the style."
  },
  {
    id: "nw-04",
    type: "connection",
    country: "New World",
    question: "Why is the Californian style ripe, fruity and consistent from one year to the next?",
    options: [
      "Almost no rain falls in the growing season, so fruit ripens healthy and irrigation is the main worry",
      "The AVA rules set a minimum level of ripeness for every wine, so unripe grapes cannot be used in any vintage",
      "Chaptalisation is allowed in poor vintages",
      "The volcanic hillside soils keep the vines warm at night"
    ],
    answer: 0,
    region: "california",
    explanation: "Summers are long, dry and sunny with almost no rain, so grapes ripen fully and stay healthy in every vintage. That is why drought and irrigation, rather than rot, are the grower's concern, and why the wines come out ripe and fruity so reliably. An AVA is only a place name and sets no ripeness rule."
  },
  {
    id: "nw-05",
    type: "scenario",
    country: "New World",
    question: "A Californian producer wants a rich, buttery Chardonnay in the classic style. Which cellar approach fits?",
    options: [
      "Cool fermentation in stainless steel, no malolactic, bottled early",
      "Pick early and blend with Sauvignon Blanc",
      "Age the wine under a layer of flor",
      "Barrel fermentation, full malolactic, lees stirring and new oak"
    ],
    answer: 3,
    region: "california",
    explanation: "The classic Californian Chardonnay is barrel-fermented, put through full malolactic conversion, stirred on its lees and aged in new oak, which gives ripe peach, butter and toast. Stainless steel with no malolactic makes the leaner, citrus style that is now also common. Flor belongs to Sherry, not to Chardonnay."
  },
  {
    id: "nw-06",
    type: "scenario",
    country: "New World",
    question: "A buyer wants old-vine Zinfandel: full, jammy blackberry, spice and high alcohol. Which part of California should they look to?",
    options: [
      "Carneros, at the cool southern end of Napa and Sonoma",
      "Dry Creek Valley in Sonoma",
      "Russian River Valley, in the cool fog belt of Sonoma",
      "Santa Barbara, in the cool east-west valleys"
    ],
    answer: 1,
    region: "california",
    explanation: "Dry Creek Valley is the warmer part of Sonoma, where the fog does not reach, and old-vine Zinfandel does well on its gravel. Carneros and the Russian River are cool and grow Pinot Noir and Chardonnay, while the cool Santa Barbara valleys also grow Pinot Noir and Chardonnay."
  },
  {
    id: "nw-07",
    type: "map",
    country: "New World",
    question: "Which region has a narrow strip of terra rossa, red clay over limestone, at Coonawarra, and old ungrafted Shiraz vines in the Barossa?",
    answer: "australia",
    explanation: "Coonawarra's terra rossa is a flat, narrow strip of red clay over free-draining limestone beside the Southern Ocean. The Barossa has some of the world's oldest Shiraz vines, still on their own roots because phylloxera never reached South Australia."
  },
  {
    id: "nw-08",
    type: "map",
    country: "New World",
    question: "Which region lets one label draw on grapes from several states, adopted screwcaps early and widely, and makes sparkling Shiraz and fortified Muscat?",
    answer: "australia",
    explanation: "A South Eastern Australia label can blend across several states, which suits the clean, technical, blending-minded winemaking there. The industry took up screwcaps early, and sparkling Shiraz and fortified Muscat are its oddities."
  },
  {
    id: "nw-09",
    type: "connection",
    country: "New World",
    question: "Why does Hunter Valley Sémillon have low alcohol and high acidity, and why does it need years in bottle?",
    options: [
      "It is fermented in new oak barrels, which slow the fermentation down and keep the alcohol low for years",
      "The humid Hunter brings cloud and harvest rain, so Sémillon is picked early, bottled young and aged",
      "The terra rossa soil is so poor that it stops the grapes ever ripening fully, whatever the year",
      "It is fortified and then aged in a solera"
    ],
    answer: 1,
    region: "australia",
    explanation: "The Hunter is warm but humid, with cloud and rain at harvest, so growers pick Sémillon early before the rain arrives. Early picking means low alcohol and high acidity, and the wine is unoaked and neutral when young. Only years in bottle bring out its toast, honey and nuts."
  },
  {
    id: "nw-10",
    type: "connection",
    country: "New World",
    question: "Why is Barossa Shiraz concentrated enough to stand up to American oak?",
    options: [
      "Barossa is the coolest region in South Australia, so the grapes keep high acidity and structure",
      "The vines grow on terra rossa over limestone",
      "Irrigation from the Murray keeps the yields high",
      "Some of the world's oldest Shiraz vines grow there, ungrafted since phylloxera never arrived"
    ],
    answer: 3,
    region: "australia",
    explanation: "Old ungrafted vines on the Barossa valley floor give concentrated Shiraz, which is why the tradition of ageing it in American oak, with its vanilla and coconut, worked. Terra rossa is Coonawarra's soil, and the Murray irrigates the high-yield bulk regions, not the Barossa's old vines."
  },
  {
    id: "nw-11",
    type: "scenario",
    country: "New World",
    question: "A buyer wants a bone-dry Australian Riesling with high acidity and lime, made without oak or malolactic and sealed under screwcap. Where should they look?",
    options: [
      "Clare Valley or Eden Valley, at altitude",
      "The Barossa Valley floor, which is warm and dry",
      "Riverland, the hot irrigated inland",
      "Hunter Valley, the warm and humid east coast"
    ],
    answer: 0,
    region: "australia",
    explanation: "Eden Valley, on the hills above the Barossa, and Clare Valley are higher and cooler, which makes them Riesling country. The wine is fermented dry in steel with no oak and no malolactic, and bottled under screwcap, giving lime and lemon that turn toasty with age. The Barossa floor is Shiraz, Riverland is volume, and the Hunter is Sémillon."
  },
  {
    id: "nw-12",
    type: "scenario",
    country: "New World",
    question: "A producer wants Cabernet Sauvignon with blackcurrant, mint and eucalyptus and firm tannin, grown on a flat strip of red soil cooled by sea breezes. Which region?",
    options: [
      "Yarra Valley",
      "Barossa Valley",
      "Coonawarra",
      "Hunter Valley"
    ],
    answer: 2,
    region: "australia",
    explanation: "Coonawarra's terra rossa is a flat strip cooled by maritime air from the Southern Ocean, which cools the Cabernet so it keeps its structure. The result is blackcurrant, mint, eucalyptus and firm tannin. The Yarra is cool Pinot Noir country, the Barossa is Shiraz, and the Hunter is Sémillon."
  },
  {
    id: "nw-13",
    type: "map",
    country: "New World",
    question: "Which New World region is two long, narrow islands where mountains block the wet westerlies, so the vineyards sit on the drier, sunnier east coast?",
    answer: "newZealand",
    explanation: "Nowhere in New Zealand is far from the sea, and the mountains along the spine keep the rain on the west. Marlborough, Hawke's Bay and Martinborough are all on the dry east coast, with long sunshine hours and cool nights."
  },
  {
    id: "nw-14",
    type: "map",
    country: "New World",
    question: "Which region grows Sauvignon Blanc as about two-thirds of its vineyard, on the stony Wairau plain, and holds one of the world's most southerly wine regions?",
    answer: "newZealand",
    explanation: "Sauvignon Blanc is about two-thirds of New Zealand's vineyard and most of it is in Marlborough, on the flat, stony Wairau valley floor. Central Otago, inland in the south, is New Zealand's southernmost wine region, among the most southerly in the world, and grows Pinot Noir."
  },
  {
    id: "nw-15",
    type: "connection",
    country: "New World",
    question: "Why is Marlborough Sauvignon Blanc so pungent, with gooseberry and passion fruit, and yet so high in acidity?",
    options: [
      "Barrel fermentation and lees stirring in new French oak build both the aromas and the acidity of the finished wine",
      "The schist soils add minerality and acidity",
      "Harvest rain dilutes the sugar and keeps the acid",
      "Long sunny days build intense aromas while cool nights keep acidity; steel and early bottling keep both"
    ],
    answer: 3,
    region: "newZealand",
    explanation: "Marlborough's long sunny days let the grapes build flavour, and its cool nights stop the acidity falling. The wine is then fermented cool in stainless steel with no oak and bottled early, so the pungent aromas are locked in. Schist is Central Otago's soil, not Marlborough's."
  },
  {
    id: "nw-16",
    type: "connection",
    country: "New World",
    question: "Why can Hawke's Bay ripen Merlot, Cabernet Sauvignon and Syrah when most of New Zealand cannot?",
    options: [
      "The Gimblett Gravels are deep, old riverbed gravel that warms quickly and drains fast",
      "Hawke's Bay is on the wet west coast, where the sea keeps the vineyards much warmer all year",
      "It is the most southerly region, with the longest days",
      "The vines grow on north-facing schist slopes"
    ],
    answer: 0,
    region: "newZealand",
    explanation: "The Gimblett Gravels are the bed of an old river: deep gravel that warms up quickly and drains fast, so red grapes ripen there that the rest of Hawke's Bay cannot manage. It is the one place in a cool country where Bordeaux grapes and Syrah ripen fully. North-facing schist slopes describe Central Otago."
  },
  {
    id: "nw-17",
    type: "scenario",
    country: "New World",
    question: "A grower on fertile Marlborough soil finds the vines are so vigorous that leaves shade the fruit. What should they do?",
    options: [
      "Irrigate more heavily, to give the vines even more water through the summer",
      "Open up the canopy so the leaves and fruit get sun and air",
      "Move the vineyard to the wet west coast, where the fertile soil is less rich",
      "Switch to overhead pergola training, which shades the fruit completely"
    ],
    answer: 1,
    region: "newZealand",
    explanation: "Fertile soils and plenty of light make New Zealand vines vigorous, and canopy management, opening the leaves to sun and air, was promoted in New Zealand by Dr Richard Smart and widely adopted in Marlborough to deal with it. More water would only add vigour, and the west coast is where the rain falls. Pergolas belong to Argentina's bulk vineyards."
  },
  {
    id: "nw-18",
    type: "scenario",
    country: "New World",
    question: "A buyer wants a New Zealand Pinot Noir that is deeper and riper than Burgundy, from a continental region with hot dry summers, cold winters and frost. Which region?",
    options: [
      "Marlborough",
      "Hawke's Bay",
      "Central Otago",
      "Martinborough"
    ],
    answer: 2,
    region: "newZealand",
    explanation: "Central Otago is inland in the south and is the exception to New Zealand's maritime climate: continental, with hot dry summers, cold winters and spring frost. Its long days ripen Pinot Noir on north-facing slopes into a wine with deeper colour and riper cherry fruit than Burgundy. Martinborough Pinot is savoury and drier in tannin."
  },
  {
    id: "nw-19",
    type: "map",
    country: "New World",
    question: "Which region is cooled by the Benguela current and the Cape Doctor wind, and counts Chenin Blanc as its most planted grape?",
    answer: "southAfrica",
    explanation: "The cold Benguela current flows up from the Antarctic and cools the Cape coast with fog, while the Cape Doctor, a strong south-easterly summer wind, cools and dries the vines. Chenin Blanc is the most planted grape, long used for bulk wine and brandy and now taken seriously from old vines."
  },
  {
    id: "nw-20",
    type: "map",
    country: "New World",
    question: "Which region bred Pinotage, calls its traditional-method sparkling wine Cap Classique and labels under the Wine of Origin scheme?",
    answer: "southAfrica",
    explanation: "Pinotage is South Africa's own grape, a crossing of Pinot Noir and Cinsault bred at Stellenbosch. Cap Classique is the name for traditional-method sparkling wine there, and Wine of Origin guarantees where the grapes grew, not how good the wine is."
  },
  {
    id: "nw-21",
    type: "connection",
    country: "New World",
    question: "Why do Walker Bay and Elgin grow Pinot Noir and Chardonnay while Stellenbosch, not far away, ripens Cabernet Sauvignon?",
    options: [
      "They lie nearest the cold sea and higher up, so are the coolest sites at the Cape",
      "Their granite soils are too poor for Cabernet Sauvignon, which needs deep, rich soil",
      "The Cape Doctor wind brings them regular summer rain, so they stay green",
      "They are inland and rely on irrigation"
    ],
    answer: 0,
    region: "southAfrica",
    explanation: "Walker Bay and Elgin are nearest the Benguela-cooled sea and sit higher up, so they are the coolest places at the Cape and suit Pinot Noir and Chardonnay. Stellenbosch is a few miles inland on granite slopes, cooled only by False Bay, and is warm enough for Cabernet. The Cape Doctor is a dry wind, and inland South Africa is the hot, irrigated part."
  },
  {
    id: "nw-22",
    type: "connection",
    country: "New World",
    question: "Why has Chenin Blanc served both for cheap bulk wine and for serious old-vine dry whites in South Africa?",
    options: [
      "It ripens so early in the season that it escapes the worst of the Cape heat, before the summer peaks",
      "It is a crossing bred specially for the Cape, which is why it grows so well there",
      "Its high acidity survives the sun, so it stays fresh whether picked for volume or from old vines",
      "It is resistant to leafroll virus"
    ],
    answer: 2,
    region: "southAfrica",
    explanation: "Chenin Blanc keeps its high acidity even in the Cape sun, which made it useful for bulk wine and brandy and now makes old-vine, barrel-fermented versions full and honeyed yet fresh. The crossing bred at Stellenbosch is Pinotage, not Chenin, and leafroll virus has forced replanting across old vineyards regardless of grape."
  },
  {
    id: "nw-23",
    type: "scenario",
    country: "New World",
    question: "A producer wants concentrated Syrah and Chenin Blanc from dry-farmed old bush vines, with no irrigation. Which South African area fits?",
    options: [
      "Constantia",
      "Elgin",
      "Walker Bay",
      "Swartland"
    ],
    answer: 3,
    region: "southAfrica",
    explanation: "Swartland's dry, poor shale and granite soils carry old bush vines of Chenin and Syrah that are farmed without irrigation, and the dry summers concentrate the fruit. Elgin and Walker Bay are the cool coastal sites for Pinot Noir and Chardonnay, and Constantia is known for its sweet Muscat."
  },
  {
    id: "nw-24",
    type: "scenario",
    country: "New World",
    question: "A buyer wants a deep-coloured South African red with red plum, blackberry and a smoky edge, made from the country's own grape. Which should they ask for?",
    options: [
      "Cinsault",
      "Pinotage",
      "Carmenère",
      "Malbec"
    ],
    answer: 1,
    region: "southAfrica",
    explanation: "Pinotage is the grape South Africa bred for itself by crossing Pinot Noir with Cinsault, and it gives deep colour, red plum, blackberry, smoke and medium-high tannin. Cinsault is one of its parents rather than a signature grape, while Carmenère and Malbec are the signature reds of Chile and Argentina."
  },
  {
    id: "nw-25",
    type: "map",
    country: "New World",
    question: "Which long, thin region lies between the Humboldt-chilled Pacific and the Andes, with a coastal range that keeps its Central Valley warm and dry?",
    answer: "chile",
    explanation: "Chile has the cold Pacific on one side and the Andes on the other. The Humboldt current gives the coast fog and cool breezes, the Andes send cold air down at night and snowmelt for irrigation, and the coastal range in between keeps the Central Valley warm, dry and sunny."
  },
  {
    id: "nw-26",
    type: "map",
    country: "New World",
    question: "Which region grows Carmenère, the Bordeaux grape mistaken for Merlot for a century, on ungrafted vines because phylloxera has never arrived?",
    answer: "chile",
    explanation: "Chile is walled off by desert, mountains, ocean and ice, so phylloxera never reached it and most vines grow on their own roots. Carmenère almost disappeared from France after phylloxera but survived in Chile, where it was taken for Merlot for a hundred years."
  },
  {
    id: "nw-27",
    type: "connection",
    country: "New World",
    question: "Why do Casablanca and San Antonio grow Sauvignon Blanc and Pinot Noir while Maipo grows Cabernet Sauvignon?",
    options: [
      "Casablanca lies high in the Andes foothills, so the nights are cold and the grapes keep their acidity",
      "Those valleys open to the sea, so fog and cool air pour in; warmer Maipo is cooled by Andean nights",
      "Casablanca has limestone soils that suit white grapes",
      "Maipo is irrigated and Casablanca is not"
    ],
    answer: 1,
    region: "chile",
    explanation: "Chile has two ways to cool a warm country. Casablanca and San Antonio open to the Humboldt-chilled sea, so fog and cool days suit Sauvignon Blanc and Pinot Noir. Maipo Alto climbs the Andean foothills, where cold nights keep Cabernet fresh while the days ripen it fully."
  },
  {
    id: "nw-28",
    type: "connection",
    country: "New World",
    question: "Why is Carmenère grown in warm Colchagua rather than on the cool coast?",
    options: [
      "It needs fog to keep its colour",
      "It ripens early and would burn in the heat",
      "Colchagua is the only valley in Chile that is free of phylloxera, so Carmenère can be grown there",
      "It ripens very late and tastes green unless it gets a warm site"
    ],
    answer: 3,
    region: "chile",
    explanation: "Carmenère ripens very late, so it needs a warm, dry site between the ranges such as Colchagua, and winemakers pick it as late as the season allows to lose its green edge. On the cool, foggy coast it would not ripen. The whole of Chile is free of phylloxera, not just Colchagua."
  },
  {
    id: "nw-29",
    type: "scenario",
    country: "New World",
    question: "A producer wants Chilean Cabernet Sauvignon with structure and freshness, grown on poor gravelly foothill soils where cold nights slow the ripening. Which zone?",
    options: [
      "Casablanca Valley",
      "Leyda",
      "Maipo Alto",
      "Maule"
    ],
    answer: 2,
    region: "chile",
    explanation: "Maipo Alto sits on the Andean foothills, where the soils are poor, gravelly and free-draining and the cold night air from the mountains keeps Cabernet fresh. The result is full-bodied blackcurrant and mint with firm ripe tannin. Casablanca and Leyda are the foggy coastal valleys for white grapes and Pinot Noir, and Maule is in the larger, mostly volume-driven southern Central Valley."
  },
  {
    id: "nw-30",
    type: "scenario",
    country: "New World",
    question: "A Chilean label carries the word Costa. What does that tell the buyer?",
    options: [
      "The grapes came from the coastal side, with fog and cool breezes",
      "The wine was aged in French oak",
      "The grapes came from the foothills of the Andes, in the warmest part of the valley",
      "It is the top quality tier, above the valley DO"
    ],
    answer: 0,
    region: "chile",
    explanation: "Chilean labels may add Costa, Entre Cordilleras or Andes to say which side of the valley the grapes came from. Costa means the coastal side, where the Humboldt fog and breezes make it cool. Andes would mean the foothills, and the word says nothing about oak or quality."
  },
  {
    id: "nw-31",
    type: "map",
    country: "New World",
    question: "Which region sits in the rain shadow of the Andes, waters its vines with snowmelt carried in channels, and fears the zonda wind and summer hail?",
    answer: "argentina",
    explanation: "Mendoza is a high desert in the rain shadow of the Andes: very dry, very sunny, with almost no rain in the growing season, so vines depend on snowmelt irrigation. The zonda, a hot dry wind off the mountains, can damage vines, especially at flowering, and summer hail can strip a vineyard in minutes."
  },
  {
    id: "nw-32",
    type: "map",
    country: "New World",
    question: "Which region grows Torrontés at extreme altitude in Cafayate and Malbec in Luján de Cuyo and the Uco Valley?",
    answer: "argentina",
    explanation: "Luján de Cuyo is Argentina's classic Malbec district, and the Uco Valley, higher and cooler, gives a fresher, more structured Malbec. Torrontés, Argentina's own white, grows in Cafayate in Salta, where extreme altitude keeps its perfume fresh."
  },
  {
    id: "nw-33",
    type: "connection",
    country: "New World",
    question: "Why is Mendoza Malbec deeper, fuller and softer than Malbec from Cahors?",
    options: [
      "Mendoza's rich, fertile soils give much bigger yields, which dilute the wine into something softer and fuller",
      "The zonda wind dries the grapes on the vine",
      "At altitude the intense sunlight thickens the skins for colour and tannin, while cold nights keep acidity",
      "It is aged for longer in American oak"
    ],
    answer: 2,
    region: "argentina",
    explanation: "Altitude replaces the sea as Argentina's cooler. The fierce sunlight thickens the skins, giving deep colour and ripe tannin, and the cold nights keep the acidity, so Malbec here is fuller and softer than in Cahors. The soils are poor and stony, which keeps vigour down, and the serious wines see French oak."
  },
  {
    id: "nw-34",
    type: "connection",
    country: "New World",
    question: "Why does Torrontés keep its floral perfume when grown in Cafayate?",
    options: [
      "Extreme altitude gives cold nights, which keep the perfume fresh",
      "It is barrel-fermented with full malolactic conversion and long lees ageing in oak",
      "Cafayate is cooled by sea fog",
      "Pergola training shades the grapes from all sunlight"
    ],
    answer: 0,
    region: "argentina",
    explanation: "Cafayate in Salta is cooled only by extreme altitude, and its cold nights keep Torrontés fresh and floral, with rose, geranium and grape, instead of letting it turn oily. The wine is fermented cool in stainless steel with no oak and no malolactic, and drunk young. Salta is far from any sea."
  },
  {
    id: "nw-35",
    type: "scenario",
    country: "New World",
    question: "A Mendoza producer wants a fresher, firmer and more floral Malbec. Where should they plant?",
    options: [
      "Maipú, on the valley floor",
      "Under overhead pergolas for shade",
      "Beside the irrigation channels on deeper soil",
      "Higher and cooler, in the Uco Valley"
    ],
    answer: 3,
    region: "argentina",
    explanation: "The Uco Valley is higher and cooler than the classic districts, so its nights are colder and its Malbec comes out fresher, firmer and more floral, helped by more limestone and rock among the gravel. Pergola training is kept for bulk wine and Torrontés, and deeper soils would only add vigour."
  },
  {
    id: "nw-36",
    type: "scenario",
    country: "New World",
    question: "A Mendoza vineyard loses its whole crop in a few minutes one summer afternoon. What happened, and what is the usual precaution?",
    options: [
      "Spring frost; wind machines",
      "Hail; hail nets over the vines",
      "Harvest rain; picking early",
      "Phylloxera; grafting onto rootstock"
    ],
    answer: 1,
    region: "argentina",
    explanation: "Summer hail can strip a Mendoza vineyard in minutes, and hail nets are the common defence. Harvest rain is not a Mendoza problem, since almost none falls in the growing season, and the sandy soils are a poor home for phylloxera."
  },
  {
    id: "at-01",
    type: "map",
    country: "Austria",
    question: "Which Austrian region's wines are labelled Steinfeder, Federspiel and Smaragd by strength, from terraces above the Danube?",
    answer: "niederosterreich",
    explanation: "These are the Vinea Wachau style terms, used in the Wachau, the terraced Danube valley in Niederösterreich. Steinfeder is the lightest and Smaragd the fullest, at least 12.5% abv."
  },
  {
    id: "at-02",
    type: "map",
    country: "Austria",
    question: "Which region lies beside a shallow lake whose autumn mist brings noble rot, and makes sweet wines such as the Ausbruch of Rust?",
    answer: "burgenland",
    explanation: "The shallow Neusiedler See in Burgenland warms quickly, and its autumn mist and humidity settle on the vineyards along its shores and bring botrytis, which concentrates the grapes."
  },
  {
    id: "at-03",
    type: "map",
    country: "Austria",
    question: "Which region, in the far south, makes Sauvignon Blanc and a high-acid rosé called Schilcher from Blauer Wildbacher?",
    answer: "steiermark",
    explanation: "Steiermark is Austria's southern, hilly wine region. The Weststeiermark makes the Schilcher rosé, and the Südsteiermark is known for Sauvignon Blanc."
  },
  {
    id: "at-04",
    type: "connection",
    country: "Austria",
    question: "Why can Grüner Veltliner ripen fully in Niederösterreich and still keep high acidity?",
    options: [
      "Winemakers add tartaric acid to every wine before bottling, whatever the year",
      "The loess soils pass extra acid into the grapes as they ripen late in autumn",
      "Hot days and cold nights ripen the grapes while keeping their acidity",
      "The grape is picked while unripe, before its sugars have really formed"
    ],
    answer: 2,
    region: "niederosterreich",
    explanation: "Cool air from the west and warm, dry air from the east give hot days and cold nights. The grapes ripen and build aroma, but the cold nights slow the loss of acidity."
  },
  {
    id: "at-05",
    type: "scenario",
    country: "Austria",
    question: "A grower near Rust wants to make a rich, sweet wine. What makes that possible?",
    options: [
      "Autumn mist from the lake brings noble rot, which concentrates the grapes",
      "Hot, dry weather alone lifts the sugar enough, so the grapes stay perfectly clean",
      "Hard frost freezes every grape on the vine before the harvest begins",
      "Growers add sugar to a high-acid base wine before it ferments"
    ],
    answer: 0,
    region: "burgenland",
    explanation: "Mist and humidity from the Neusiedler See settle on the vineyards in autumn and bring botrytis. The fungus dries the berries on the vine, so sugar and acidity are both concentrated."
  },
  {
    id: "at-06",
    type: "connection",
    country: "Austria",
    question: "Why is Burgenland the centre of Austrian red wine, while cooler areas to the north and south lean to white?",
    options: [
      "Cold winters kill almost every white grape variety planted in the region",
      "Red grapes are the only varieties allowed under the regional DAC rules",
      "The lake leaves the vineyards too wet and humid for white grapes to ripen",
      "Warm, dry Pannonian summers fully ripen Blaufränkisch and Zweigelt"
    ],
    answer: 3,
    region: "burgenland",
    explanation: "Burgenland is Austria's warmest wine region, on the edge of the Hungarian plain. Late-ripening Blaufränkisch and Zweigelt ripen fully there."
  },
  {
    id: "at-07",
    type: "scenario",
    country: "Austria",
    question: "A guest wants a crisp, aromatic white with gooseberry and elderflower from Austria's cool south. Which wine fits?",
    options: [
      "Wachau Smaragd Grüner Veltliner",
      "Südsteiermark Sauvignon Blanc",
      "Mittelburgenland Blaufränkisch",
      "Neusiedlersee Zweigelt"
    ],
    answer: 1,
    region: "steiermark",
    explanation: "Sauvignon Blanc from the Südsteiermark has pronounced gooseberry, blackcurrant leaf and elderflower, with high acidity from warm days and cool nights."
  },
  {
    id: "at-08",
    type: "map",
    country: "Austria",
    question: "Which region includes Kamptal, Kremstal, Wagram and the Weinviertel, where DAC wines are named for the district?",
    answer: "niederosterreich",
    explanation: "These are all districts of Niederösterreich along and north of the Danube. A DAC wine from each must be made from set grapes, such as Grüner Veltliner in the Weinviertel."
  },
  {
    id: "pt-01",
    type: "map",
    country: "Portugal",
    question: "Which region in Portugal's wet northwest makes light, low-alcohol, slightly spritzy whites, and trained vines high on pergolas?",
    answer: "vinhoVerde",
    explanation: "Vinho Verde is Portugal's wettest and greenest region. High training keeps the grapes off damp ground, and the cool climate gives low sugar and high acidity."
  },
  {
    id: "pt-02",
    type: "map",
    country: "Portugal",
    question: "Which region has terraced schist slopes along a river, and is home to Port?",
    answer: "douro",
    explanation: "The Douro valley is cut into schist, with terraces on steep slopes. Port is fortified with grape spirit during fermentation, and aged in the lodges of Vila Nova de Gaia."
  },
  {
    id: "pt-03",
    type: "map",
    country: "Portugal",
    question: "Which large southern plain, with cork oak woods, makes soft reds from Aragonez, Trincadeira and Alicante Bouschet?",
    answer: "alentejo",
    explanation: "Alentejo is a hot, flat to rolling plain in the south. Long, dry summers ripen the grapes fully, giving soft, fruit-forward reds, and cork oak woods sit among the vineyards."
  },
  {
    id: "pt-04",
    type: "connection",
    country: "Portugal",
    question: "Why are Vinho Verde vines traditionally trained high, on pergolas or up trees?",
    options: [
      "To shade the grapes from the strong midsummer sun and keep them cool all day",
      "To lift grapes off damp ground and let air move through in a humid climate",
      "To make machine harvesting possible on the narrow, steeply terraced hillsides",
      "To protect the buds from the hard spring frosts of the high inland valleys"
    ],
    answer: 1,
    region: "vinhoVerde",
    explanation: "The northwest is wet and humid, so rot and mildew are the main problems. Training vines high keeps the fruit off damp ground and lets air dry the canopy."
  },
  {
    id: "pt-05",
    type: "connection",
    country: "Portugal",
    question: "Why do vines on the Douro's schist cope with hot, dry summers and give low yields of concentrated fruit?",
    options: [
      "Schist holds water near the surface, so the vines never have to push their roots down",
      "The dark schist reflects the sun's heat upward and so keeps the vineyards cool",
      "Schist feeds the vines extra nutrients, so the yields are high and the grapes are big and juicy",
      "Fractured schist lets roots reach deep water, so yields stay low and fruit is concentrated"
    ],
    answer: 3,
    region: "douro",
    explanation: "Broken, layered schist drains freely but lets roots push deep to find water. Vines struggle a little, so yields stay low and the grapes concentrated and tannic."
  },
  {
    id: "pt-06",
    topic: "fortified",
    type: "scenario",
    country: "Portugal",
    question: "A Port is amber-brown, with nutty, dried-fruit flavours from years of ageing in oak casks. What is it?",
    options: [
      "Tawny",
      "Ruby",
      "Vintage",
      "Late Bottled Vintage"
    ],
    answer: 0,
    region: "douro",
    explanation: "Tawny is aged in oak for years, which lets it oxidise slowly and turn amber-brown, with nutty and dried-fruit flavours. Ruby and Vintage keep their deep red colour."
  },
  {
    id: "pt-07",
    type: "connection",
    country: "Portugal",
    question: "Why are Alentejo's wines usually soft and fruity, with lower acidity?",
    options: [
      "The cold Atlantic coast keeps nights near freezing through the whole summer",
      "Heavy rainfall dilutes the grapes and washes out their natural acids",
      "Long, hot, dry summers ripen the grapes fully and burn off acidity",
      "Mountain altitude means the harvest is always picked very early"
    ],
    answer: 2,
    region: "alentejo",
    explanation: "Alentejo is a hot, flat plain. Grapes ripen fully with high sugar, but heat burns off acidity, so the wines are soft and fruit-forward."
  },
  {
    id: "pt-08",
    type: "scenario",
    country: "Portugal",
    question: "What is a vinho de talha, traditional in the Alentejo around Vidigueira?",
    options: [
      "A fortified wine from the Douro, aged in cask for decades",
      "A wine fermented and aged in a clay amphora, on its skins",
      "A lightly spritzy white from the Minho, drunk very young",
      "A sweet wine made from grapes dried on straw mats"
    ],
    answer: 1,
    region: "alentejo",
    explanation: "Vinho de talha is made in a clay amphora (talha): grapes and skins ferment together, and the wine is traditionally left in the same vessel afterwards."
  },
  {
    id: "hu-01",
    type: "map",
    country: "Hungary",
    question: "Which region, where the Bodrog meets the Tisza, makes sweet Aszú wines from botrytised Furmint and Hárslevelű?",
    answer: "tokaj",
    explanation: "Tokaj's river mist and dry autumn sun bring noble rot. Shrivelled aszú berries are added to a base wine to make Aszú, whose sweetness is graded in puttonyos."
  },
  {
    id: "hu-02",
    type: "map",
    country: "Hungary",
    question: "Which northern region, with cellars cut into volcanic tuff, is home to Egri Bikavér, 'Bull's Blood'?",
    answer: "eger",
    explanation: "Eger, in the foothills of the Bükk mountains, makes Egri Bikavér, a red blend typically led by Kékfrankos. Its cellars are dug into the soft volcanic tuff."
  },
  {
    id: "hu-03",
    type: "map",
    country: "Hungary",
    question: "Which warm southern region, near the Croatian border, has Cabernet Franc as its flagship red?",
    answer: "villany",
    explanation: "Villány is Hungary's warmest, sunniest corner. Limestone hills, long summers and a warm autumn ripen Cabernet Franc and other late reds fully."
  },
  {
    id: "hu-04",
    type: "connection",
    country: "Hungary",
    question: "Why does Tokaj so often get noble rot in autumn?",
    options: [
      "Hot, dry weather through autumn shrivels the grapes long before any rot can start",
      "The volcanic soils are rich in sugar that feeds the fungus all through the autumn",
      "Mist from the Bodrog and Tisza rivers settles on the grapes, then sun dries them",
      "Heavy spring rain washes the fungus into the vineyards, where it waits until harvest"
    ],
    answer: 2,
    region: "tokaj",
    explanation: "Botrytis needs humidity to take hold and dry weather afterwards to concentrate the grapes rather than rot them. Morning river mist and afternoon sun give both."
  },
  {
    id: "hu-05",
    type: "scenario",
    country: "Hungary",
    question: "A Tokaji Aszú is labelled 6 puttonyos. What does that tell you?",
    options: [
      "It was picked early from the best vineyards, for the highest acidity",
      "It is a very sweet Aszú, with at least 150 g/l of sugar",
      "It is a dry white blend of six different grape varieties",
      "It was aged for six years in a single oak barrel"
    ],
    answer: 1,
    region: "tokaj",
    explanation: "Puttonyos is an optional label term for the sugar level of Aszú: 5 means at least 120 g/l and 6 at least 150 g/l, so 6 is sweeter. The sweetness comes from shrivelled botrytised berries added to a base wine."
  },
  {
    id: "hu-06",
    type: "scenario",
    country: "Hungary",
    question: "What is Egri Bikavér?",
    options: [
      "A sweet wine made from dried grapes",
      "A white blend of Furmint and Hárslevelű grapes",
      "A single-vineyard Cabernet Franc",
      "A red blend, typically led by Kékfrankos"
    ],
    answer: 3,
    region: "eger",
    explanation: "Bikavér means Bull's Blood. Egri Bikavér is the red blend of Eger, with three tiers (Classicus, Superior and Grand Superior) in which Kékfrankos is always the largest part."
  },
  {
    id: "hu-07",
    type: "connection",
    country: "Hungary",
    question: "Why can Villány ripen Cabernet Franc fully when much of Hungary is cooler?",
    options: [
      "It is Hungary's warmest, sunniest corner, with a long season and warm autumn",
      "The vineyards lie on the Great Plain, where the nights stay hot all summer",
      "Cold winters kill off every other grape, leaving only Cabernet Franc to grow",
      "Water from the Danube is used to irrigate the vines through the winter"
    ],
    answer: 0,
    region: "villany",
    explanation: "Villány is in the far south, with long, hot summers and a warm autumn, and south-facing slopes on limestone. Late-ripening red grapes ripen fully there."
  },
  {
    id: "hu-08",
    type: "scenario",
    country: "Hungary",
    question: "Which Tokaj wine is the free-run juice of aszú berries, extremely sweet and very low in alcohol?",
    options: [
      "Száraz Furmint",
      "Aszú, 5 puttonyos",
      "Szamorodni",
      "Eszencia"
    ],
    answer: 3,
    region: "tokaj",
    explanation: "Eszencia is the syrupy juice that drips from aszú berries under their own weight. It is extremely sweet and ferments very slowly, so it stays very low in alcohol."
  },
  {
    id: "gr-01",
    type: "map",
    country: "Greece",
    question: "Which volcanic island makes mineral, high-acid Assyrtiko from vines trained in low baskets?",
    answer: "santorini",
    explanation: "Santorini's vines are trained in low coiled baskets (kouloura) that shelter the grapes from wind and sun and catch the sea mist, in a hot, dry, windy climate."
  },
  {
    id: "gr-02",
    type: "map",
    country: "Greece",
    question: "Which northern region, on the slopes of Mount Vermio, makes tannic, high-acid reds from Xinomavro?",
    answer: "naoussa",
    explanation: "Naoussa is the home of Xinomavro, a late-ripening grape with high acidity and high tannin, often compared with Nebbiolo."
  },
  {
    id: "gr-03",
    type: "map",
    country: "Greece",
    question: "Which Peloponnese region makes plummy reds from Agiorgitiko, grown at altitudes from about 200 to 850 metres?",
    answer: "nemea",
    explanation: "Nemea's Agiorgitiko changes with altitude: jammy and soft in the warm lowlands, balanced at mid-altitude, and fresher and more acidic in the heights. These altitude zones are informal, not part of the PDO rules."
  },
  {
    id: "gr-04",
    type: "connection",
    country: "Greece",
    question: "Why are Santorini's vines trained in low baskets (kouloura)?",
    options: [
      "To keep the grapes away from the wet clay soils beneath the vine",
      "To shelter the grapes from wind and sun, and to catch sea mist",
      "To make harvesting easier for pickers who work from the ground",
      "To shade the soil and keep the roots cool through the summer"
    ],
    answer: 1,
    region: "santorini",
    explanation: "There is almost no rain and a strong wind. The low basket shelters the grapes and holds the dew and sea mist that are the vine's main water."
  },
  {
    id: "gr-05",
    type: "scenario",
    country: "Greece",
    question: "A red wine is pale ruby, with high acidity and high tannin, and flavours of red cherry and tomato. Which Greek grape is it?",
    options: [
      "Agiorgitiko",
      "Assyrtiko",
      "Xinomavro",
      "Syrah"
    ],
    answer: 2,
    region: "naoussa",
    explanation: "Xinomavro, 'acid black', is pale, high in acidity and tannin, and savoury, with red fruit and tomato. Producers often compare it with Nebbiolo."
  },
  {
    id: "gr-06",
    type: "connection",
    country: "Greece",
    question: "Why do Nemea producers value mid- to high-altitude vineyards?",
    options: [
      "Cooler nights keep Agiorgitiko fresh, where lowlands give soft, jammy wine",
      "Higher vineyards get far more rain, so the vines never need any other water",
      "The grapes lose all their tannin above a certain height, giving lighter wines",
      "Altitude lets the same vines give two harvests in a single year"
    ],
    answer: 0,
    region: "nemea",
    explanation: "Altitude lowers temperatures, especially at night. Agiorgitiko keeps acidity and freshness there, where in the warm lowlands it ripens to soft, jammy fruit."
  },
  {
    id: "gr-07",
    type: "scenario",
    country: "Greece",
    question: "What is Vinsanto, from Santorini?",
    options: [
      "A dry white fermented in clay amphorae",
      "A light, fizzy white drunk young",
      "A fortified red aged for decades in tank",
      "A sweet wine made from sun-dried grapes"
    ],
    answer: 3,
    region: "santorini",
    explanation: "Vinsanto is made from Assyrtiko (with Athiri and Aidani) dried in the sun before pressing, then matured oxidatively for at least 24 months. It is very sweet, with high acidity."
  },
  {
    id: "gr-08",
    type: "connection",
    country: "Greece",
    question: "Why has phylloxera never been a threat to many of Santorini's old vines?",
    options: [
      "The island is too cold in winter for the pest to survive, so the vines are never touched",
      "Its vines are all grafted onto roots that resist the pest",
      "The sandy volcanic soil does not suit the pest, so vines grow on their own roots",
      "Local law bans imported vines and cuttings of every kind"
    ],
    answer: 2,
    region: "santorini",
    explanation: "Phylloxera does not thrive in sandy, ashy, free-draining volcanic soil, so many old vines on Santorini are ungrafted, on their own roots."
  },
  {
    id: "at-09",
    type: "connection",
    country: "Austria",
    question: "Why do loess soils give a fuller, softer Grüner Veltliner than the primary rock terraces do?",
    options: [
      "Loess is rich in limestone, which adds a sharper edge and more acidity",
      "Loess holds water and gives body; rock gives a lighter, mineral style",
      "Loess warms up faster than rock, so the grapes ripen weeks earlier",
      "Loess is poorer than rock, so the yields are lower and the wine thinner"
    ],
    answer: 1,
    region: "niederosterreich",
    explanation: "Primary rock soils (gneiss and other crystalline rock) give structured, mineral wines. Loess, a wind-blown silt, holds water and gives fuller, softer ones."
  },
  {
    id: "at-10",
    type: "scenario",
    country: "Austria",
    question: "A Wachau grower labels a dry wine Federspiel. What does that tell a buyer?",
    options: [
      "The lightest style of all, with up to 11.5% alcohol",
      "The fullest style, at least 12.5% alcohol",
      "A sweet wine made from botrytised grapes",
      "Medium weight, between 11.5% and 12.5% alcohol"
    ],
    answer: 3,
    region: "niederosterreich",
    explanation: "Vinea Wachau's three style terms are for dry wines: Steinfeder up to 11.5% abv, Federspiel 11.5 to 12.5%, and Smaragd at least 12.5%."
  },
  {
    id: "at-11",
    type: "scenario",
    country: "Austria",
    question: "Which grape is a Weinviertel DAC wine made from?",
    options: [
      "Grüner Veltliner",
      "Zweigelt, a red grape grown in the east",
      "Welschriesling, the main white of the south",
      "Riesling, as in the Kamptal"
    ],
    answer: 0,
    region: "niederosterreich",
    explanation: "Weinviertel DAC names a regional style from a set grape: Grüner Veltliner. Kamptal, Kremstal and Traisental DAC allow Grüner Veltliner and Riesling."
  },
  {
    id: "at-12",
    type: "scenario",
    country: "Austria",
    question: "Which red grape are the Mittelburgenland and Eisenberg DACs built around?",
    options: [
      "Zweigelt",
      "St. Laurent",
      "Blaufränkisch",
      "Blauer Wildbacher"
    ],
    answer: 2,
    region: "burgenland",
    explanation: "Mittelburgenland DAC and Eisenberg DAC are for Blaufränkisch, a late-ripening red with high acidity and firm tannins."
  },
  {
    id: "at-13",
    type: "connection",
    country: "Austria",
    question: "Zweigelt is a cross of which two Austrian reds?",
    options: [
      "Pinot Noir and Gamay",
      "St. Laurent and Blaufränkisch",
      "Blaufränkisch and Cabernet Sauvignon",
      "St. Laurent and Merlot"
    ],
    answer: 1,
    region: "burgenland",
    explanation: "Zweigelt is a cross of St. Laurent and Blaufränkisch. It ripens reliably and gives juicy, soft reds for drinking young."
  },
  {
    id: "at-14",
    type: "scenario",
    country: "Austria",
    question: "What is the Ausbruch of Rust?",
    options: [
      "A dry white from the Wachau terraces",
      "A rosé made from Blauer Wildbacher",
      "A sweet botrytised wine with its own DAC",
      "A sparkling wine made from Welschriesling"
    ],
    answer: 2,
    region: "burgenland",
    explanation: "Rust is on the shore of the Neusiedler See, where autumn mist brings noble rot. Ruster Ausbruch is the sweet wine made from those grapes."
  },
  {
    id: "at-15",
    type: "scenario",
    country: "Austria",
    question: "In Steiermark's DAC pyramid, which level is a single-vineyard wine?",
    options: [
      "Gebietswein",
      "Ortswein",
      "Landwein",
      "Riedenwein"
    ],
    answer: 3,
    region: "steiermark",
    explanation: "The pyramid runs from Gebietswein (a district) to Ortswein (a village) to Riedenwein (a single vineyard)."
  },
  {
    id: "at-16",
    type: "scenario",
    country: "Austria",
    question: "A pale pink-orange wine with very high acidity and tart red berries comes from Austria's south. What is it?",
    options: [
      "Schilcher, a rosé of Blauer Wildbacher from the west",
      "A Zweigelt rosé from the Neusiedlersee shore, in Burgenland",
      "A Pinot Noir rosé from the Wachau",
      "A Sekt made from Welschriesling"
    ],
    answer: 0,
    region: "steiermark",
    explanation: "Schilcher is the high-acid rosé of the Weststeiermark, made from the red Blauer Wildbacher grape."
  },
  {
    id: "at-17",
    type: "connection",
    country: "Austria",
    question: "Why do Steiermark's grapes keep high acidity in Austria's southernmost wine region?",
    options: [
      "A large lake keeps the summer evenings cool and the air damp all night long",
      "Warm days and cool nights, as cold Alpine and warm southern air meet",
      "The vineyards stand on chalk, which adds acidity",
      "Sea breezes from the Adriatic cool the vines every afternoon"
    ],
    answer: 1,
    region: "steiermark",
    explanation: "Warm air from the south meets cold air from the Alps, so days are warm and nights cool, which keeps acidity high."
  },
  {
    id: "pt-09",
    type: "scenario",
    country: "Portugal",
    question: "Which Vinho Verde grape is at its best in the Monção e Melgaço sub-region?",
    options: [
      "Loureiro",
      "Touriga Nacional",
      "Alvarinho",
      "Antão Vaz"
    ],
    answer: 2,
    region: "vinhoVerde",
    explanation: "Alvarinho does best in Monção e Melgaço, in the far north beside Spain. Across the river it is called Albariño."
  },
  {
    id: "pt-10",
    type: "scenario",
    country: "Portugal",
    question: "What is Arinto called in Vinho Verde?",
    options: [
      "Pedernã",
      "Azal",
      "Trajadura",
      "Loureiro"
    ],
    answer: 0,
    region: "vinhoVerde",
    explanation: "In Vinho Verde, Arinto is called Pedernã. Azal, Trajadura and Loureiro are separate grapes in the same blends."
  },
  {
    id: "pt-11",
    type: "connection",
    country: "Portugal",
    question: "Apart from Alvarinho, how strong is a typical Vinho Verde?",
    options: [
      "High, usually 14% or more, like Douro reds",
      "Medium, around 13%",
      "Fortified, around 20%",
      "Low, often about 9 to 11.5% alcohol"
    ],
    answer: 3,
    region: "vinhoVerde",
    explanation: "Vinho Verde is picked early at low sugar and high acidity, so the wines are light, low in alcohol and often slightly spritzy."
  },
  {
    id: "pt-12",
    topic: "fortified",
    type: "scenario",
    country: "Portugal",
    question: "How does Port keep its natural sweetness?",
    options: [
      "Sugar is added to the finished wine just before bottling",
      "Grape spirit is added mid-fermentation, which stops it",
      "The grapes are dried on straw mats before pressing",
      "The wine is chilled until the yeast stops working"
    ],
    answer: 1,
    region: "douro",
    explanation: "Fermentation is stopped by adding grape spirit (aguardente, about 77% abv), so some natural sugar is left and the wine ends up at 19 to 22% abv."
  },
  {
    id: "pt-13",
    type: "scenario",
    country: "Portugal",
    question: "Which Douro sub-region, by the Spanish border, is the hottest and driest?",
    options: [
      "Douro Superior",
      "Baixo Corgo",
      "Cima Corgo",
      "Vila Nova de Gaia"
    ],
    answer: 0,
    region: "douro",
    explanation: "Atlantic rain stops at the mountains, so rainfall falls from west to east: Baixo Corgo is the wettest and Douro Superior the hottest and driest."
  },
  {
    id: "pt-14",
    topic: "fortified",
    type: "scenario",
    country: "Portugal",
    question: "Which Port is declared only in the best years, bottled young and aged in bottle?",
    options: [
      "Ruby",
      "Tawny",
      "Vintage",
      "Late Bottled Vintage"
    ],
    answer: 2,
    region: "douro",
    explanation: "Vintage Port is declared only in the best years and bottled young, then ages in bottle. Tawny is aged in oak for years instead."
  },
  {
    id: "pt-15",
    type: "scenario",
    country: "Portugal",
    question: "Which Alentejo red grape has red flesh and gives very deep colour?",
    options: [
      "Aragonez, the local name for Tempranillo",
      "Trincadeira, a late-ripening local red",
      "Syrah, a Rhône red also grown here",
      "Alicante Bouschet"
    ],
    answer: 3,
    region: "alentejo",
    explanation: "Alicante Bouschet is a rare red-fleshed grape, so its juice is dark before it meets the skins. Aragonez is Tempranillo."
  },
  {
    id: "pt-16",
    type: "scenario",
    country: "Portugal",
    question: "How many DOC sub-regions does Alentejo have?",
    options: [
      "Three",
      "Eight",
      "Twelve",
      "Five"
    ],
    answer: 1,
    region: "alentejo",
    explanation: "The eight are Borba, Évora, Granja-Amareleja, Moura, Portalegre, Redondo, Reguengos and Vidigueira."
  },
  {
    id: "pt-17",
    type: "connection",
    country: "Portugal",
    question: "How do Alentejo producers win back freshness in a hot, flat region?",
    options: [
      "Altitude, as in Portalegre, and picking early or at night",
      "By harvesting as late as possible, into November",
      "By blending in wines from the cool north",
      "By planting only on the flat plain, where nights are cool"
    ],
    answer: 0,
    region: "alentejo",
    explanation: "The hills near Portalegre are cooler because of altitude, and whites are picked early or at night to keep their freshness."
  },
  {
    id: "hu-09",
    type: "scenario",
    country: "Hungary",
    question: "Which two rivers meet in the Tokaj region?",
    options: [
      "The Danube and the Drava",
      "The Rába and the Zala",
      "The Maros and the Körös",
      "The Bodrog and the Tisza"
    ],
    answer: 3,
    region: "tokaj",
    explanation: "Autumn mist from the Bodrog and the Tisza settles on the vineyards and, with dry sun after it, brings noble rot."
  },
  {
    id: "hu-10",
    type: "scenario",
    country: "Hungary",
    question: "Which grape is the backbone of Tokaj?",
    options: [
      "Furmint",
      "Olaszrizling",
      "Kadarka",
      "Kékfrankos"
    ],
    answer: 0,
    region: "tokaj",
    explanation: "Furmint is late-ripening, thin-skinned and high in acidity, so it takes botrytis easily and keeps its freshness when very ripe."
  },
  {
    id: "hu-11",
    type: "scenario",
    country: "Hungary",
    question: "When was Tokaj's first vineyard classification drawn up?",
    options: [
      "1855",
      "1737",
      "1935",
      "1971"
    ],
    answer: 1,
    region: "tokaj",
    explanation: "Tokaj has one of the oldest vineyard classifications in the world, drawn up in 1737 to rank the vineyards by quality."
  },
  {
    id: "hu-12",
    type: "scenario",
    country: "Hungary",
    question: "What is the minimum sugar of a Tokaji Aszú?",
    options: [
      "At least 20 g/l",
      "At least 60 g/l",
      "At least 120 g/l",
      "At least 450 g/l"
    ],
    answer: 2,
    region: "tokaj",
    explanation: "All Aszú must have at least 120 g/l of sugar. The 450 g/l figure is the minimum for Eszencia, the free-run juice of the aszú berries."
  },
  {
    id: "hu-13",
    type: "scenario",
    country: "Hungary",
    question: "What does 'Bikavér' mean?",
    options: [
      "Black Grape of Eger",
      "Bull's Blood",
      "Red Hill, after the vineyards",
      "Noble Wine of the north"
    ],
    answer: 1,
    region: "eger",
    explanation: "Egri Bikavér, 'Bull's Blood', is the red blend of Eger."
  },
  {
    id: "hu-14",
    type: "scenario",
    country: "Hungary",
    question: "Which grape is always the largest part of an Egri Bikavér?",
    options: [
      "Cabernet Franc",
      "Kadarka",
      "Merlot",
      "Kékfrankos"
    ],
    answer: 3,
    region: "eger",
    explanation: "Kékfrankos (Blaufränkisch in Austria) is always the largest part of the blend, in every tier."
  },
  {
    id: "hu-15",
    type: "scenario",
    country: "Hungary",
    question: "What are the three tiers of Egri Bikavér, from lowest to highest?",
    options: [
      "Classicus, Superior, Grand Superior",
      "Basic, Reserve, Grand Cru, as in Rioja",
      "Classicus, Premium, Super Premium",
      "Village, Premier Cru, Grand Cru"
    ],
    answer: 0,
    region: "eger",
    explanation: "Egri Bikavér has three tiers: Classicus, Superior and Grand Superior."
  },
  {
    id: "hu-16",
    type: "scenario",
    country: "Hungary",
    question: "Which grape is Villány's flagship red?",
    options: [
      "Furmint, the white grape of Tokaj",
      "Kékfrankos, the grape of Eger",
      "Cabernet Franc",
      "Olaszrizling, the Welschriesling of Hungary"
    ],
    answer: 2,
    region: "villany",
    explanation: "Cabernet Franc is the flagship of Villány, followed by Merlot, Cabernet Sauvignon and Kékfrankos."
  },
  {
    id: "hu-17",
    type: "connection",
    country: "Hungary",
    question: "Why is Villány Hungary's red-wine corner?",
    options: [
      "It is the highest and coldest part of the country, in the north",
      "It is the warmest, sunniest part of Hungary, in the far south",
      "Its soils are volcanic tuff, like Tokaj's",
      "It lies beside a cold lake that slows the ripening"
    ],
    answer: 1,
    region: "villany",
    explanation: "Villány, by the Croatian border, has long, hot summers and a warm autumn, which ripen late red grapes fully."
  },
  {
    id: "gr-09",
    type: "scenario",
    country: "Greece",
    question: "What is the minimum share of Assyrtiko in a dry PDO Santorini?",
    options: [
      "51%",
      "85%",
      "100%",
      "60%"
    ],
    answer: 1,
    region: "santorini",
    explanation: "Dry PDO Santorini must be at least 85% Assyrtiko, with up to 15% Athiri and Aidani. The sweet wines need at least 51%."
  },
  {
    id: "gr-10",
    type: "scenario",
    country: "Greece",
    question: "What is Santorini Nykteri?",
    options: [
      "A sweet wine made from grapes dried in the sun for many weeks",
      "A sparkling wine made by the tank method",
      "A fortified wine aged in a solera",
      "A dry white with 13.5% alcohol or more and 3 months in oak"
    ],
    answer: 3,
    region: "santorini",
    explanation: "Nykteri is a dry white, traditionally harvested at night to avoid the heat, with at least 13.5% alcohol and at least 3 months in oak."
  },
  {
    id: "gr-11",
    type: "scenario",
    country: "Greece",
    question: "How long must Santorini Vinsanto mature?",
    options: [
      "At least 24 months, oxidatively",
      "At least 3 months in stainless steel",
      "There is no minimum",
      "At least 10 years in oak"
    ],
    answer: 0,
    region: "santorini",
    explanation: "Vinsanto is made from sun-dried grapes (at least 370 g/l of sugar) and must mature oxidatively for at least 24 months."
  },
  {
    id: "gr-12",
    type: "scenario",
    country: "Greece",
    question: "What does Xinomavro mean?",
    options: [
      "Sweet red",
      "Old vine",
      "Acid black",
      "Black pearl"
    ],
    answer: 2,
    region: "naoussa",
    explanation: "Xinomavro means acid black: a late-ripening, thin-skinned grape that keeps high acidity and tannin."
  },
  {
    id: "gr-13",
    type: "scenario",
    country: "Greece",
    question: "Which wines does PDO Naoussa cover?",
    options: [
      "Dry whites from Assyrtiko",
      "Red wine only, from 100% Xinomavro",
      "Red, white and rosé from any local grape",
      "Sparkling wine from Xinomavro"
    ],
    answer: 1,
    region: "naoussa",
    explanation: "PDO Naoussa applies only to red wines made entirely from Xinomavro, in dry to semi-sweet styles."
  },
  {
    id: "gr-14",
    type: "scenario",
    country: "Greece",
    question: "Which Italian grape is Xinomavro most often compared with?",
    options: [
      "Sangiovese",
      "Barbera",
      "Aglianico",
      "Nebbiolo"
    ],
    answer: 3,
    region: "naoussa",
    explanation: "Xinomavro is pale in colour, high in acidity and tannin, and quick to turn garnet, like Nebbiolo."
  },
  {
    id: "gr-15",
    type: "scenario",
    country: "Greece",
    question: "Which grape is the only one in PDO Nemea?",
    options: [
      "Agiorgitiko",
      "Xinomavro",
      "Assyrtiko",
      "Moschofilero"
    ],
    answer: 0,
    region: "nemea",
    explanation: "PDO Nemea applies only to red wines made entirely from Agiorgitiko."
  },
  {
    id: "gr-16",
    type: "scenario",
    country: "Greece",
    question: "What is true of Nemea's three altitude zones, from about 200 to 850 metres?",
    options: [
      "They are legal tiers, each with its own label on the bottle",
      "They apply only to the sweet wines",
      "They are informal and not part of the PDO rules",
      "Each zone has its own separate PDO"
    ],
    answer: 2,
    region: "nemea",
    explanation: "The lower, semi-mountainous and mountainous zones describe how the wine changes with altitude, but they are informal and are not written into the PDO."
  },
  {
    id: "gr-17",
    type: "scenario",
    country: "Greece",
    question: "What does Agiorgitiko mean in English?",
    options: [
      "Black Mountain",
      "St George",
      "Golden Grape",
      "Island wine"
    ],
    answer: 1,
    region: "nemea",
    explanation: "Agiorgitiko means St George. Its style changes with altitude: soft and jammy low down, fresher and more acidic high up."
  },
  {
    id: "es-25",
    type: "scenario",
    country: "Spain",
    question: "How long must a Rioja Gran Reserva age before release?",
    options: [
      "At least two years in total, one in oak",
      "At least five years in total, two of them in oak",
      "At least three years in total, six months in oak",
      "At least ten years in total, five in oak"
    ],
    answer: 1,
    region: "rioja",
    explanation: "Gran Reserva needs at least five years in total, with at least two in oak and two in bottle. Reserva needs three years and Crianza two."
  },
  {
    id: "es-26",
    type: "scenario",
    country: "Spain",
    question: "What is the minimum total ageing of a Rioja Reserva?",
    options: [
      "Three years, one of them in oak",
      "One year in total, all of it in oak barrels",
      "Five years, with two in oak",
      "Six months in stainless steel"
    ],
    answer: 0,
    region: "rioja",
    explanation: "A Reserva needs three years in total, with at least one in oak and six months in bottle."
  },
  {
    id: "es-27",
    type: "scenario",
    country: "Spain",
    question: "Which wine region almost entirely surrounds Priorat?",
    options: [
      "Rioja",
      "Penedès",
      "Ribera del Duero",
      "Montsant"
    ],
    answer: 3,
    region: "priorat",
    explanation: "Priorat is almost entirely surrounded by the Montsant DO. Priorat is a DOQ, a top tier it shares with Rioja."
  },
  {
    id: "es-28",
    type: "scenario",
    country: "Spain",
    question: "What share of a Ribera del Duero red must be Tempranillo?",
    options: [
      "Exactly 50%",
      "At least 95%",
      "At least 75%",
      "At least 25%"
    ],
    answer: 2,
    region: "riberaDelDuero",
    explanation: "Ribera del Duero reds must be at least 75% Tempranillo. Small amounts of other grapes, such as Cabernet Sauvignon and Merlot, are allowed."
  },
  {
    id: "es-29",
    topic: "fortified",
    type: "scenario",
    country: "Spain",
    question: "Which two Sherry styles must be at least 17% alcohol, too strong for flor to grow?",
    options: [
      "Oloroso and Palo Cortado",
      "Fino and Manzanilla, the pale flor-aged styles",
      "Only Pedro Ximénez",
      "Fino and Oloroso"
    ],
    answer: 0,
    region: "sherry",
    explanation: "Fino and Manzanilla are usually fortified to about 15% (the legal minimum is now 14%) so flor grows. Oloroso and Palo Cortado need at least 17%. Amontillado, which starts under flor, needs at least 16%."
  },
  {
    id: "es-30",
    topic: "fortified",
    type: "scenario",
    country: "Spain",
    question: "Which soil of the Sherry region soaks up winter rain and reflects sunlight?",
    options: [
      "Licorella",
      "Albariza",
      "Terra rossa",
      "Galestro"
    ],
    answer: 1,
    region: "sherry",
    explanation: "Albariza is the pale, chalky soil that holds moisture through the hot summer and reflects sunlight back onto the vines."
  },
  {
    id: "it-25",
    type: "scenario",
    country: "Italy",
    question: "How long must a Barolo age before release?",
    options: [
      "At least 12 months, all in wood",
      "At least 62 months, all in bottle after a year in steel",
      "At least 26 months, with 9 in oak",
      "At least 38 months, with 18 in wood"
    ],
    answer: 3,
    region: "piedmont",
    explanation: "Barolo needs at least 38 months, 18 of them in wood. Barolo Riserva needs 62 months. Barbaresco is 26 months with 9 in oak."
  },
  {
    id: "it-26",
    type: "scenario",
    country: "Italy",
    question: "How long must a Barbaresco age before release?",
    options: [
      "At least 26 months, with 9 in oak",
      "At least 38 months, with 18 in wood",
      "At least 12 months in steel",
      "At least 62 months in total"
    ],
    answer: 0,
    region: "piedmont",
    explanation: "Barbaresco needs 26 months in total, 9 of them in oak, a little less than Barolo's 38 months."
  },
  {
    id: "it-27",
    type: "scenario",
    country: "Italy",
    question: "What is the minimum share of Sangiovese in Chianti Classico?",
    options: [
      "At least 51%",
      "At least 80%",
      "Exactly 100%",
      "At least 20%"
    ],
    answer: 1,
    region: "tuscany",
    explanation: "Chianti Classico is at least 80% Sangiovese. Brunello di Montalcino is 100% Sangiovese."
  },
  {
    id: "it-28",
    type: "scenario",
    country: "Italy",
    question: "How long is Brunello di Montalcino aged before release?",
    options: [
      "Two years, all of it in stainless steel tanks",
      "Ten years, all in oak",
      "Five years, at least two of them in oak",
      "One year in oak and one in bottle"
    ],
    answer: 2,
    region: "tuscany",
    explanation: "Brunello needs five years from the vintage, including two in oak and four months in bottle. A Riserva needs six years."
  },
  {
    id: "it-29",
    type: "scenario",
    country: "Italy",
    question: "What share of a Taurasi must be Aglianico?",
    options: [
      "At least 85%",
      "Exactly 50%",
      "At least 60%",
      "At least 100%"
    ],
    answer: 0,
    region: "southernItaly",
    explanation: "Taurasi is at least 85% Aglianico. Piedirosso, Sangiovese and Barbera may make up the rest."
  },
  {
    id: "it-30",
    type: "scenario",
    country: "Italy",
    question: "Which grape must make up at least 80% of an Etna Rosso?",
    options: [
      "Nero d'Avola, the grape of Sicily's south",
      "Primitivo, the early-ripening grape of Puglia",
      "Aglianico, the Taurasi grape",
      "Nerello Mascalese"
    ],
    answer: 3,
    region: "southernItaly",
    explanation: "Etna Rosso is at least 80% Nerello Mascalese, grown on volcanic soil on bush vines at altitude."
  },
  {
    id: "es-31",
    type: "map",
    country: "Spain",
    question: "Which Galician region, on cool, wet Atlantic granite, trains its Albariño vines on pergolas?",
    answer: "riasBaixas",
    explanation: "Rías Baixas, in the south-west corner of Galicia, has an Atlantic climate with about 1,300 mm of rain and a constant risk of fungal disease, so its vines are raised on pergolas."
  },
  {
    id: "es-32",
    type: "connection",
    country: "Spain",
    question: "Why are Rías Baixas vines traditionally trained on high pergolas?",
    options: [
      "They keep fruit off damp ground and let air through, holding back fungal disease",
      "They shade the grapes from the fierce summer sun and keep the bunches cool all day long",
      "They make machine harvesting possible on steep terraces",
      "They protect the buds from hard spring frosts"
    ],
    answer: 0,
    region: "riasBaixas",
    explanation: "Rain and humidity make fungal disease the main risk. A raised pergola lets air through and keeps the vegetation away from the damp ground. It also controls vigour and leaves room for other crops underneath."
  },
  {
    id: "es-33",
    type: "scenario",
    country: "Spain",
    question: "A bottle is labelled Rías Baixas Albariño. What must be in it?",
    options: [
      "At least 70% Albariño and Treixadura together",
      "100% Albariño",
      "At least 85% Albariño, with up to 15% Godello",
      "Any mix of the authorised white grapes"
    ],
    answer: 1,
    region: "riasBaixas",
    explanation: "A wine called Rías Baixas Albariño must be made entirely from Albariño. The sub-zone wines have their own rules, usually at least 70% from a list of grapes."
  },
  {
    id: "es-34",
    type: "scenario",
    country: "Spain",
    question: "What must a Condado do Tea wine contain?",
    options: [
      "100% Albariño, as in the plain Albariño wine",
      "At least 70% Loureiro, with Albariño left out",
      "At least 70% Albariño plus Treixadura",
      "Mainly Godello and Mencía"
    ],
    answer: 2,
    region: "riasBaixas",
    explanation: "Condado do Tea must be at least 70% Albariño and Treixadura together, and both the grapes and the winemaking must be inside that sub-zone to use its name."
  },
  {
    id: "es-35",
    topic: "sparkling",
    type: "scenario",
    country: "Spain",
    question: "How is Rías Baixas sparkling wine made?",
    options: [
      "By the tank method, with the second fermentation in a sealed tank",
      "By adding carbon dioxide to a still wine",
      "By stopping the first fermentation early to keep some fizz",
      "By second fermentation in the bottle, the traditional method"
    ],
    answer: 3,
    region: "riasBaixas",
    explanation: "The rules allow sparkling Rías Baixas only by second fermentation in the bottle. The vintage year is compulsory on the label, except for sparkling."
  },
  {
    id: "es-36",
    type: "scenario",
    country: "Spain",
    question: "What does 'Barrica' on a Rías Baixas label tell you?",
    options: [
      "Aged in wood of up to 600 litres, and the label says how long",
      "The wine was fermented in concrete tanks and then aged in glass bottles for years",
      "The wine is a sweet wine from dried grapes",
      "The wine was aged in a solera for at least five years"
    ],
    answer: 0,
    region: "riasBaixas",
    explanation: "Barrica wines are aged in wood containers of no more than 600 litres, and the label must give the time in wood, in months or years."
  },
  {
    id: "es-37",
    type: "connection",
    country: "Spain",
    question: "Why are Rías Baixas whites known for acidity and aroma rather than for alcohol?",
    options: [
      "Irrigation floods the vines every summer, which dilutes the sugar",
      "A cool Atlantic climate with modest sunshine",
      "The vineyards are high on a plateau, where the nights freeze",
      "Winemakers always remove alcohol after fermentation"
    ],
    answer: 1,
    region: "riasBaixas",
    explanation: "Ripening gets modest sunshine and medium temperatures with some rain, so the grapes keep acidity and aroma and do not build high alcohol."
  },
  {
    id: "es-38",
    type: "scenario",
    country: "Spain",
    question: "What is the main soil of Rías Baixas?",
    options: [
      "Granite, sandy and acidic",
      "Chalk, as in Champagne",
      "Black slate, as in Priorat",
      "Red clay over limestone, as in Coonawarra"
    ],
    answer: 0,
    region: "riasBaixas",
    explanation: "The soils are mostly granite, with some schist and river-laid deposits. They are sandy, acidic, poor and fairly shallow, so they dry out in summer."
  },
  {
    id: "es-39",
    type: "scenario",
    country: "Spain",
    question: "How many sub-zones does the Rías Baixas DO have?",
    options: [
      "Two",
      "Three",
      "Five",
      "Eight"
    ],
    answer: 2,
    region: "riasBaixas",
    explanation: "The five are Val do Salnés, Condado do Tea, O Rosal, Soutomaior and Ribeira do Ulla. Val do Salnés is the oldest, largest, coolest and wettest."
  },
  {
    id: "es-40",
    type: "map",
    country: "Spain",
    question: "Which Catalan region around Sant Sadurní d'Anoia makes Spain's traditional-method sparkling wine?",
    answer: "cava",
    explanation: "Cava is made by second fermentation in the bottle, centred on the Penedès around Sant Sadurní d'Anoia, where the first bottles were made in 1872."
  },
  {
    id: "es-41",
    topic: "sparkling",
    type: "scenario",
    country: "Spain",
    question: "What is the minimum time on the lees for a basic Cava de Guarda?",
    options: [
      "Nine months",
      "Three months",
      "Fifteen months",
      "Thirty months"
    ],
    answer: 0,
    region: "cava",
    explanation: "Cava de Guarda needs at least 9 months on the lees. Gran Reserva needs at least 30 months, and Paraje Calificado at least 36."
  },
  {
    id: "es-42",
    topic: "sparkling",
    type: "scenario",
    country: "Spain",
    question: "How long must a Cava Gran Reserva age on its lees?",
    options: [
      "At least 9 months",
      "At least 30 months",
      "At least 15 months",
      "At least 60 months"
    ],
    answer: 1,
    region: "cava",
    explanation: "Gran Reserva needs at least 30 months on the lees. Paraje Calificado, from a single estate, needs at least 36."
  },
  {
    id: "es-43",
    topic: "sparkling",
    type: "scenario",
    country: "Spain",
    question: "Which three white grapes make up most of the grapes used for Cava?",
    options: [
      "Chardonnay, Pinot Noir and Pinot Meunier",
      "Albariño, Verdejo and Godello",
      "Macabeo, Xarel·lo and Parellada",
      "Palomino, Pedro Ximénez and Moscatel"
    ],
    answer: 2,
    region: "cava",
    explanation: "Macabeo (Viura), Xarel·lo and Parellada are about 85% of the grapes used. Chardonnay and Pinot Noir are allowed too."
  },
  {
    id: "es-44",
    topic: "sparkling",
    type: "scenario",
    country: "Spain",
    question: "How is Cava made fizzy?",
    options: [
      "Carbon dioxide is pumped into a still wine",
      "The second fermentation happens in a large sealed tank",
      "The first fermentation is stopped early to keep the bubbles",
      "Its second fermentation happens in the same bottle you buy"
    ],
    answer: 3,
    region: "cava",
    explanation: "Cava is made by the traditional method: the second fermentation takes place in the same bottle, from filling to disgorging."
  },
  {
    id: "es-45",
    topic: "sparkling",
    type: "scenario",
    country: "Spain",
    question: "What does Brut Nature on a Cava label mean?",
    options: [
      "Under 3 g/l of sugar, with no sugar added",
      "Under 12 g/l of sugar, with a little added",
      "Between 12 and 17 g/l of sugar",
      "Over 50 g/l of sugar, a sweet style"
    ],
    answer: 0,
    region: "cava",
    explanation: "Brut Nature has less than 3 g/l of sugar and no added sugar. Brut is under 12 g/l, and Dulce is over 50 g/l."
  },
  {
    id: "es-46",
    topic: "sparkling",
    type: "scenario",
    country: "Spain",
    question: "What is special about a Cava de Paraje Calificado?",
    options: [
      "Machine-harvested grapes from many estates, aged for just 9 months at the cellar door",
      "Hand-picked whole bunches from one estate, aged at least 36 months",
      "A blend of Cava and Champagne, aged for 15 months",
      "A sweet Cava from dried grapes, aged for five years"
    ],
    answer: 1,
    region: "cava",
    explanation: "Paraje Calificado must be hand-harvested whole bunches at no more than 8,000 kg/ha, from one estate, and age at least 36 months."
  },
  {
    id: "es-47",
    topic: "sparkling",
    type: "scenario",
    country: "Spain",
    question: "Where were the first bottles of Cava made, in 1872?",
    options: [
      "Jerez de la Frontera",
      "Haro",
      "Reus",
      "Sant Sadurní d'Anoia"
    ],
    answer: 3,
    region: "cava",
    explanation: "The first Cava bottles were made in 1872 in Sant Sadurní d'Anoia, in the Penedès, which is still the centre of production."
  },
  {
    id: "es-48",
    topic: "sparkling",
    type: "scenario",
    country: "Spain",
    question: "What is the minimum pressure of a Cava?",
    options: [
      "3.5 bar at 20 °C",
      "1 bar at 20 °C, like a still wine",
      "2 bar at 20 °C, a light spritz",
      "6 bar at 20 °C, as for Champagne"
    ],
    answer: 0,
    region: "cava",
    explanation: "A Cava must have at least 3.5 bar of pressure at 20 °C."
  },
  {
    id: "es-49",
    type: "map",
    country: "Spain",
    question: "Which Castilla y León region, on a high plateau, is home to Verdejo?",
    answer: "rueda",
    explanation: "Rueda, on the Duero plateau south of Valladolid, is where Verdejo is the native grape. In 1980 it became the first DO in Castilla y León."
  },
  {
    id: "es-50",
    type: "scenario",
    country: "Spain",
    question: "Which grape is native to Rueda, grown there for more than ten centuries?",
    options: [
      "Albariño",
      "Verdejo",
      "Godello",
      "Viura"
    ],
    answer: 1,
    region: "rueda",
    explanation: "Verdejo is Rueda's native grape. Sauvignon Blanc and Viura are also grown, and Chardonnay and Viognier since 2019."
  },
  {
    id: "es-51",
    type: "connection",
    country: "Spain",
    question: "Why are Rueda's grapes mostly picked at night?",
    options: [
      "The cold keeps the must from oxidising and the grapes cool",
      "Night picking is required for the sparkling wines only, by the DO's rules",
      "The vines only ripen after dark, in the cold",
      "The vineyards are too wet to enter by day"
    ],
    answer: 0,
    region: "rueda",
    explanation: "Verdejo oxidises easily. About 95% of white grapes are machine-picked, at night, so the must stays cold and keeps its freshness."
  },
  {
    id: "es-52",
    type: "connection",
    country: "Spain",
    question: "Why do Rueda's vineyards ripen late and keep their acidity?",
    options: [
      "A warm sea breeze cools them every afternoon of the summer",
      "A high plateau with a big day–night swing",
      "Heavy summer rain slows the ripening",
      "Frost never reaches them, so they ripen steadily"
    ],
    answer: 1,
    region: "rueda",
    explanation: "The vineyards stand at about 700 to 930 m, with cold winters, late frosts and hot dry summers. The day–night swing keeps acidity while the sugar builds."
  },
  {
    id: "es-53",
    type: "scenario",
    country: "Spain",
    question: "What are the typical soils of Rueda's best vineyards?",
    options: [
      "Black slate and quartz, as in Priorat, over deep clay",
      "Chalk, as in Champagne",
      "Stony river terraces, brown soil over pebbles",
      "Pure sand, with no stones"
    ],
    answer: 2,
    region: "rueda",
    explanation: "The best vineyards are on the stony terraces of the Duero plain, a well-drained brown soil rich in calcium over pebbles, with limestone on the higher ground."
  },
  {
    id: "es-54",
    type: "scenario",
    country: "Spain",
    question: "What is a Rueda Dorado?",
    options: [
      "A sparkling wine aged for 36 months in the bottle on its lees",
      "A sweet wine from frozen grapes",
      "A light white drunk very young",
      "Oxidatively aged, fortified-style, at least 15% alcohol"
    ],
    answer: 3,
    region: "rueda",
    explanation: "Dorado is an oxidative style, aged in oak for at least two years, and at least 15% alcohol, made from Palomino Fino and/or Verdejo."
  },
  {
    id: "es-55",
    type: "scenario",
    country: "Spain",
    question: "In which provinces is the Rueda DO?",
    options: [
      "Valladolid, Segovia and Ávila",
      "Burgos, Soria and La Rioja, along the Ebro",
      "León, Zamora and Salamanca",
      "Madrid, Toledo and Cuenca"
    ],
    answer: 0,
    region: "rueda",
    explanation: "The DO covers three provinces: Valladolid (most of it), Segovia and Ávila."
  },
  {
    id: "es-56",
    type: "scenario",
    country: "Spain",
    question: "Since August 2024, what share of a Rueda white must come from the principal varieties?",
    options: [
      "At least 50%",
      "At least 75%",
      "At least 95%",
      "No minimum"
    ],
    answer: 1,
    region: "rueda",
    explanation: "The principal varieties (Verdejo, Sauvignon Blanc, Viura, Chardonnay and Viognier) must be at least 75%, with up to 25% of secondary varieties."
  },
  {
    id: "es-57",
    type: "map",
    country: "Spain",
    question: "Which high, semi-arid Castilla y León region makes powerful reds from Tinta de Toro?",
    answer: "toro",
    explanation: "Toro, on the Duero plain in Zamora, has an extreme continental, semi-arid climate. Its reds are at least 85% Tinta de Toro, a Tempranillo clone with thick skins."
  },
  {
    id: "es-58",
    type: "scenario",
    country: "Spain",
    question: "What is Tinta de Toro?",
    options: [
      "A cross of Garnacha and Cabernet Sauvignon grown only in Zamora",
      "A local clone of Tempranillo with thicker skins",
      "A white grape grown for sparkling wine",
      "The local name for Mencía"
    ],
    answer: 1,
    region: "toro",
    explanation: "Tinta de Toro is genetically very close to Tempranillo, with smaller berries, thicker skins and more tannin, and less acidity."
  },
  {
    id: "es-59",
    type: "scenario",
    country: "Spain",
    question: "What share of a Toro red must be Tinta de Toro?",
    options: [
      "At least 50%",
      "At least 95%",
      "At least 85%",
      "There is no minimum"
    ],
    answer: 2,
    region: "toro",
    explanation: "A Toro red must be at least 85% Tinta de Toro (or at least 85% Garnacha for a Garnacha red), with up to 15% of other authorised grapes."
  },
  {
    id: "es-60",
    type: "connection",
    country: "Spain",
    question: "How did Toro keep very old vines through phylloxera?",
    options: [
      "Its sandy soils protected them",
      "Growers grafted every vine onto American roots in the 1880s",
      "The Duero floods the vineyards each winter",
      "A law banned all imports of vines"
    ],
    answer: 0,
    region: "toro",
    explanation: "Sandy soils helped vines survive phylloxera, so some very old, ungrafted vines remain. How many is an unofficial estimate."
  },
  {
    id: "es-61",
    type: "scenario",
    country: "Spain",
    question: "How old are more than half of Toro's vineyards?",
    options: [
      "Under 10 years",
      "About 20 years",
      "Over 100 years",
      "Over 40 years"
    ],
    answer: 3,
    region: "toro",
    explanation: "The rules say more than 50% of Toro's vineyards are over 40 years old, mostly bush vines, which keep yields low."
  },
  {
    id: "es-62",
    type: "scenario",
    country: "Spain",
    question: "How is Toro's climate described in its rules?",
    options: [
      "Cool and wet Atlantic, like Galicia, with rain all year",
      "Extreme continental, semi-arid",
      "Warm and humid Mediterranean coast",
      "Cool maritime, like Rías Baixas"
    ],
    answer: 1,
    region: "toro",
    explanation: "Toro is continental and extreme, semi-arid, with only 350 to 400 mm of rain a year and frequent spring frosts."
  },
  {
    id: "es-63",
    type: "scenario",
    country: "Spain",
    question: "At what altitude do Toro's vineyards lie?",
    options: [
      "About 620 to 840 m",
      "Below 100 m",
      "About 200 to 300 m",
      "Above 1,500 m"
    ],
    answer: 0,
    region: "toro",
    explanation: "Toro's vineyards are high on the Duero plain, at about 620 to 840 m, with the highest ones in the south-west."
  },
  {
    id: "es-64",
    type: "connection",
    country: "Spain",
    question: "Why are Toro's reds high in alcohol and tannin but lower in acidity?",
    options: [
      "The wines are fortified before bottling, which raises the alcohol",
      "Winemakers add sugar to every vintage",
      "Hot, dry sun ripens the thick-skinned grapes fully",
      "The grapes are picked before they are ripe"
    ],
    answer: 2,
    region: "toro",
    explanation: "With about 2,600 hours of sun and little rain, Tinta de Toro ripens fully, so the wines are structured and strong, with higher pH and less acidity."
  },
  {
    id: "es-65",
    type: "scenario",
    country: "Spain",
    question: "In which year was Toro recognised as a DO?",
    options: [
      "1933",
      "1987",
      "1958",
      "2004"
    ],
    answer: 1,
    region: "toro",
    explanation: "Toro was recognised as a DO in 1987, although it was already named in the 1933 Wine Statute."
  },
  {
    id: "es-66",
    type: "map",
    country: "Spain",
    question: "Which north-eastern region, known for deeply coloured rosado, runs from the Pyrenean foothills to the Ebro in five sub-zones?",
    answer: "navarra",
    explanation: "Navarra has a Mediterranean climate with Atlantic influence in the north-west, and sub-zones from Baja Montaña to Ribera Baja."
  },
  {
    id: "es-67",
    type: "scenario",
    country: "Spain",
    question: "How many sub-zones does Navarra have?",
    options: [
      "Five",
      "Three",
      "Seven",
      "Twelve"
    ],
    answer: 0,
    region: "navarra",
    explanation: "The five are Baja Montaña, Valdizarbe, Tierra Estella, Ribera Alta and Ribera Baja."
  },
  {
    id: "es-68",
    type: "scenario",
    country: "Spain",
    question: "Which Navarra sub-zone is the driest and most arid?",
    options: [
      "Baja Montaña",
      "Ribera Baja",
      "Valdizarbe",
      "Tierra Estella"
    ],
    answer: 1,
    region: "navarra",
    explanation: "Ribera Baja, in the south by the Ebro, has about 360 to 380 mm of rain and a water deficit of over 300 mm. Valdizarbe is the wettest."
  },
  {
    id: "es-69",
    type: "connection",
    country: "Spain",
    question: "What does the cierzo do for Navarra's vineyards?",
    options: [
      "A warm wind that raises the sugar in the grapes each summer",
      "A sea breeze that brings fog and rain",
      "A cold, dry north-west wind that cuts disease",
      "It carries dust that makes the grapes bitter"
    ],
    answer: 2,
    region: "navarra",
    explanation: "The cierzo is a cold, dry north-west wind. It dries the vines and reduces disease."
  },
  {
    id: "es-70",
    type: "scenario",
    country: "Spain",
    question: "What must a Navarra rosado contain?",
    options: [
      "100% Garnacha Tinta",
      "At least 50% white grapes",
      "Only Tempranillo",
      "At least 85% red grapes"
    ],
    answer: 3,
    region: "navarra",
    explanation: "A Navarra rosado must be at least 85% red grapes, made by bleeding the vat or by pressing."
  },
  {
    id: "es-71",
    type: "scenario",
    country: "Spain",
    question: "What is a Navarra Rosado Tradición?",
    options: [
      "100% Garnacha Tinta, run off by gravity",
      "A sparkling rosé made from Chardonnay by the tank method",
      "A rosé aged in oak for two years",
      "A blend of Tempranillo and white grapes"
    ],
    answer: 0,
    region: "navarra",
    explanation: "Rosado Tradición is made entirely from Garnacha Tinta, run off by gravity alone, with a higher minimum alcohol than other rosados."
  },
  {
    id: "es-72",
    type: "scenario",
    country: "Spain",
    question: "What does a Navarra Crianza red need?",
    options: [
      "6 months in total, none of it in oak",
      "24 months, at least 9 in oak",
      "12 months in total, all in steel",
      "60 months in total, with 18 in oak"
    ],
    answer: 1,
    region: "navarra",
    explanation: "A Navarra Crianza red needs 24 months in total, at least 9 in oak of up to 330 litres. A white needs 18 months, at least 6 in oak."
  },
  {
    id: "es-73",
    type: "scenario",
    country: "Spain",
    question: "What do Navarra's rules say about the share of each grape in a table wine?",
    options: [
      "At least 85% of the named grape",
      "At least 75% Garnacha in every red",
      "No minimum, only a list of authorised grapes",
      "At least 60% Tempranillo in every red wine, by law"
    ],
    answer: 2,
    region: "navarra",
    explanation: "The rules set only a list of authorised grapes, with no minimum share for any of them. The percentages apply to rosado and the sweet Moscatel wine."
  },
  {
    id: "es-74",
    type: "connection",
    country: "Spain",
    question: "Why does Navarra make so much Garnacha?",
    options: [
      "Replanting after 1912 was mostly Garnacha",
      "Garnacha is the only grape the DO allows",
      "Garnacha is the only grape that survives frost",
      "Garnacha is the only grape that grows without irrigation"
    ],
    answer: 0,
    region: "navarra",
    explanation: "Phylloxera arrived in 1892, and replanting after 1912 was mostly Garnacha, which also suited the tradition of deeply coloured rosado."
  },
  {
    id: "es-75",
    type: "scenario",
    country: "Spain",
    question: "At what altitude does most of Calatayud's vineyard lie?",
    options: [
      "Below 150 m, close to the Mediterranean coast",
      "About 200 to 300 m, on the Ebro plain floor",
      "About 650 to 900 m, some sites above 1,000 m",
      "Only on valley floors under 400 m in altitude"
    ],
    answer: 2,
    region: "calatayud",
    explanation: "More than 80% of the vineyard is at 650 to 900 m, and the altitude gives cold nights that slow ripening."
  },
  {
    id: "es-76",
    type: "scenario",
    country: "Spain",
    question: "What do the rules of Calatayud say about spring frost?",
    options: [
      "It is very frequent in the valley bottoms",
      "It never happens, because of the sea breeze",
      "It is only a risk on the highest slopes of the DO",
      "It is stopped by the warm winds from the south"
    ],
    answer: 0,
    region: "calatayud",
    explanation: "The climate is extreme continental, and frost in the valley bottoms is very frequent in spring."
  },
  {
    id: "es-77",
    type: "scenario",
    country: "Spain",
    question: "What does 'Calatayud Superior' require?",
    options: [
      "At least 85% Garnacha Tinta from vines over 50 years",
      "At least 85% Tempranillo from vines over 20 years old",
      "Any blend of authorised reds aged for two years in oak",
      "At least 85% Syrah grown on terraces above 900 m"
    ],
    answer: 0,
    region: "calatayud",
    explanation: "It also needs yields of no more than 3,500 kg/ha, at least 14% alcohol and at least 6 months in oak."
  },
  {
    id: "es-78",
    type: "map",
    country: "Spain",
    question: "Which Aragón DO, the youngest in the region, is known for old-vine Garnacha grown at 650 to 900 m in the west of Zaragoza province?",
    answer: "calatayud",
    explanation: "Calatayud is the youngest DO in Aragón, built on old Garnacha vines at 650 to 900 m."
  },
  {
    id: "es-79",
    type: "scenario",
    country: "Spain",
    question: "What is the most widespread soil type in Cariñena?",
    options: [
      "'Cascajo': brown limestone over loose rock",
      "Slate in terraces cut by the Duero river gorge",
      "Pure sand that kept the vines free of phylloxera",
      "Black volcanic soil from an ancient eruption"
    ],
    answer: 0,
    region: "carinena",
    explanation: "Most of the DO lies on Miocene clays, and cascajo is the most extensive type."
  },
  {
    id: "es-80",
    type: "connection",
    country: "Spain",
    question: "Why is the Cariñena climate so dry?",
    options: [
      "Hot summers, cold winters and a dry cierzo wind",
      "It sits in the rain shadow of the Pyrenees only",
      "The Atlantic Ocean warms the vineyards all year round",
      "Irrigation is banned, so the soils cannot hold any water"
    ],
    answer: 0,
    region: "carinena",
    explanation: "The climate is temperate with a strong continental tendency, and the cierzo contributes to the dryness."
  },
  {
    id: "es-81",
    type: "scenario",
    country: "Spain",
    question: "What does 'Viñas viejas' mean on a Cariñena label?",
    options: [
      "Vines over 20 years old",
      "Vines over 35 years old yielding under 4,500 kg/ha",
      "Vines over 50 years old yielding under 3,500 kg/ha",
      "Vines that have never been grafted onto rootstock"
    ],
    answer: 0,
    region: "carinena",
    explanation: "In Cariñena the threshold is 20 years; in neighbouring Calatayud it is 35."
  },
  {
    id: "es-82",
    type: "map",
    country: "Spain",
    question: "Which Aragón DO, south-west of Zaragoza, is the likely namesake of the Carignan grape?",
    answer: "carinena",
    explanation: "The town of Cariñena is likely where Carignan got its name, and the region has had a wine law since the Estatuto de la Vid of 1696."
  },
  {
    id: "de-19",
    type: "scenario",
    country: "Germany",
    question: "How much rain does the Nahe normally get in a year?",
    options: [
      "About 1,500 mm a year, like the Black Forest",
      "About 500 mm a year",
      "About 1,100 mm a year, like the Mosel gorge",
      "About 900 mm a year, spread evenly all year"
    ],
    answer: 1,
    region: "nahe",
    explanation: "Rainfall is normally around 500 mm, and deep, fine soils hold water well."
  },
  {
    id: "de-20",
    type: "scenario",
    country: "Germany",
    question: "Which ranges shelter the Nahe to the north, west and south?",
    options: [
      "Soonwald, Hunsrück Hochwald and Nordpfälzer Bergland",
      "The Black Forest, the Vosges and the Swabian Jura ranges",
      "The Taunus, the Odenwald and the Spessart hill ranges",
      "The Eifel, the Westerwald and the Siebengebirge ranges"
    ],
    answer: 0,
    region: "nahe",
    explanation: "They rise to 500 to 800 m, and the region opens only east, towards Rheinhessen."
  },
  {
    id: "de-21",
    type: "scenario",
    country: "Germany",
    question: "Which rock is found at Niederhausen, Norheim and Traisen on the Nahe?",
    options: [
      "Muschelkalk, a shell limestone found in Franken",
      "Grey Devonian slate, as on the steep Mosel slopes",
      "Rhyolite (porphyry), a volcanic rock",
      "Keuper gypsum marl, as found around Iphofen"
    ],
    answer: 2,
    region: "nahe",
    explanation: "The Nahe has almost every kind of rock, and rhyolite soils lie at several of its best-known villages."
  },
  {
    id: "de-22",
    type: "scenario",
    country: "Germany",
    question: "Which grape covers the most vineyard in the Nahe?",
    options: [
      "Riesling, at about 29% in 2022",
      "Dornfelder, the leading red, at about 35%",
      "Müller-Thurgau, the old crossing, at about 40%",
      "Silvaner, the old Franconian grape, at about 30%"
    ],
    answer: 0,
    region: "nahe",
    explanation: "Riesling led in 2022 with 29.2%, followed by Müller-Thurgau at 11.4%."
  },
  {
    id: "de-23",
    type: "connection",
    country: "Germany",
    question: "Why does ripening in the upper Nahe come later than on the lower Nahe?",
    options: [
      "It is warmer upstream, because the valley is wider",
      "It is cooler upstream, by 8 to 12 days",
      "Rainfall is much heavier on the lower stretch",
      "Soils are all sandstone, which cool the vines"
    ],
    answer: 1,
    region: "nahe",
    explanation: "The lower Nahe feels Rheinhessen's warmth and dryness, while upstream and the side valleys are cooler."
  },
  {
    id: "de-24",
    type: "scenario",
    country: "Germany",
    question: "Which is Germany's largest wine region by vineyard area?",
    options: [
      "Rheinhessen, at about 27,000 ha",
      "Pfalz, at about 33,000 ha of vines",
      "Baden, at about 28,000 ha of vines",
      "Mosel, at about 29,000 ha of vines"
    ],
    answer: 0,
    region: "rheinhessen",
    explanation: "Rheinhessen had 27,499 ha in 2023, with Pfalz next at 23,793 ha."
  },
  {
    id: "de-25",
    type: "scenario",
    country: "Germany",
    question: "What is the Roter Hang between Nackenheim and Nierstein?",
    options: [
      "A slope of black volcanic basalt rock",
      "A slope of white Muschelkalk limestone",
      "Red iron-rich clayey slate, Rotliegend",
      "A slope of grey Devonian blue slate"
    ],
    answer: 2,
    region: "rheinhessen",
    explanation: "The Rotliegend gives some of the region's most intense Riesling."
  },
  {
    id: "de-26",
    type: "scenario",
    country: "Germany",
    question: "What share of Germany's Silvaner does Rheinhessen hold?",
    options: [
      "About 10%",
      "About 43%",
      "About 20%",
      "About 85%"
    ],
    answer: 1,
    region: "rheinhessen",
    explanation: "Rheinhessen has about 43% of Germany's Silvaner plantings."
  },
  {
    id: "de-27",
    type: "scenario",
    country: "Germany",
    question: "What are the three Bereiche of Rheinhessen?",
    options: [
      "Bingen, Nierstein and Wonnegau",
      "Bingen, Worms and Alzey",
      "Mainz, Nierstein and Ingelheim",
      "Nackenheim, Wonnegau and Mainz"
    ],
    answer: 0,
    region: "rheinhessen",
    explanation: "Bingen lies towards the Nahe, and Wonnegau is centred on Worms."
  },
  {
    id: "de-28",
    type: "scenario",
    country: "Germany",
    question: "Which red grape leads in Rheinhessen?",
    options: [
      "Spätburgunder, at about 25%",
      "Portugieser, at about 20%",
      "Dornfelder, at about 11%",
      "Merlot, at about 15%"
    ],
    answer: 2,
    region: "rheinhessen",
    explanation: "Dornfelder had 11.0% in 2023, and red area more than doubled in a decade."
  },
  {
    id: "de-29",
    type: "map",
    country: "Germany",
    question: "Which German region, the country's largest, holds the Roter Hang between Nackenheim and Nierstein?",
    answer: "rheinhessen",
    explanation: "Rheinhessen is the largest of the 13 regions, with 27,499 ha in 2023."
  },
  {
    id: "de-30",
    type: "map",
    country: "Germany",
    question: "Which small German region follows the Nahe river, with volcanic rhyolite soils at Niederhausen and Norheim?",
    answer: "nahe",
    explanation: "The Nahe is sheltered on three sides and has seven Grosslagen."
  },
  {
    id: "de-31",
    type: "scenario",
    country: "Germany",
    question: "Which German region is the only one in EU wine zone B?",
    options: [
      "Pfalz",
      "Baden",
      "Franken",
      "Mosel"
    ],
    answer: 1,
    region: "baden",
    explanation: "Zone B needs higher must weights, and the Kaiserstuhl is Germany's warmest area."
  },
  {
    id: "de-32",
    type: "scenario",
    country: "Germany",
    question: "What share of Baden's plantings is the Pinot family?",
    options: [
      "About 61%",
      "About 25%",
      "About 40%",
      "About 90%"
    ],
    answer: 0,
    region: "baden",
    explanation: "The Pinot family covers 9,162 ha, and Baden has more Spätburgunder than any other region."
  },
  {
    id: "de-33",
    type: "scenario",
    country: "Germany",
    question: "What is the Kaiserstuhl?",
    options: [
      "An old volcano with volcanic rock and loess",
      "A limestone plateau above the Main valley",
      "A slate cliff that rises steeply over the Rhine",
      "A glacial moraine on the shore of Lake Constance"
    ],
    answer: 0,
    region: "baden",
    explanation: "The loess on its sheltered sides is deep."
  },
  {
    id: "de-34",
    type: "scenario",
    country: "Germany",
    question: "What share of Baden's wine do its cooperatives make?",
    options: [
      "About 20%",
      "About 40%",
      "About 85%",
      "About 60%"
    ],
    answer: 2,
    region: "baden",
    explanation: "Cooperatives make about 85% of Baden's wine."
  },
  {
    id: "de-35",
    type: "scenario",
    country: "Germany",
    question: "What is the Ortenau name for Riesling?",
    options: [
      "Gutedel (Chasselas)",
      "Klingelberger",
      "Ruländer (Pinot Gris)",
      "Clevner (Pinot Noir)"
    ],
    answer: 1,
    region: "baden",
    explanation: "Gutedel (Chasselas) belongs to the Markgräflerland."
  },
  {
    id: "de-36",
    type: "map",
    country: "Germany",
    question: "Which region, the only one in zone B, runs from Lake Constance to Heidelberg east of the Rhine?",
    answer: "baden",
    explanation: "Baden has nine Bereiche, the most of any German region."
  },
  {
    id: "de-37",
    type: "scenario",
    country: "Germany",
    question: "Which grape is the signature of Franken?",
    options: [
      "Silvaner, at about a quarter of plantings",
      "Riesling, at about half of all plantings",
      "Spätburgunder, at about a third of plantings",
      "Dornfelder, at about a fifth of all plantings"
    ],
    answer: 0,
    region: "franken",
    explanation: "Silvaner covered 1,536 ha in 2025, with Müller-Thurgau second."
  },
  {
    id: "de-38",
    type: "scenario",
    country: "Germany",
    question: "What soil lies around Würzburg in the Maindreieck?",
    options: [
      "Buntsandstein, a coloured sandstone",
      "Muschelkalk (shell limestone)",
      "Keuper with gypsum marl layers",
      "Rotliegend, a red clayey slate"
    ],
    answer: 1,
    region: "franken",
    explanation: "Buntsandstein is in the Mainviereck and Keuper in the Steigerwald."
  },
  {
    id: "de-39",
    type: "scenario",
    country: "Germany",
    question: "What does a wine in a Bocksbeutel need?",
    options: [
      "At least 72 °Oechsle and an official test",
      "At least 95 °Oechsle and a gold medal",
      "At least 55 °Oechsle and ageing in oak",
      "At least 80 °Oechsle and a single vineyard"
    ],
    answer: 0,
    region: "franken",
    explanation: "The flat, round bottle is a protected emblem of Franconian wine."
  },
  {
    id: "de-40",
    type: "scenario",
    country: "Germany",
    question: "What does 'fränkisch trocken' mean?",
    options: [
      "Sugar of 9 g/L or less",
      "Sugar of 18 g/L or less",
      "Sugar of 4 g/L or less",
      "Sugar of 30 g/L or less"
    ],
    answer: 2,
    region: "franken",
    explanation: "German law allows up to 9 g/L for trocken, but the Franconian term is stricter."
  },
  {
    id: "de-41",
    type: "map",
    country: "Germany",
    question: "Which German region, with the Bocksbeutel bottle and Silvaner as its signature, lies along the Main around Würzburg?",
    answer: "franken",
    explanation: "Franken has three Bereiche: Mainviereck, Maindreieck and Steigerwald."
  },
  {
    id: "es-83",
    type: "scenario",
    country: "Spain",
    question: "What does a red Bierzo need?",
    options: [
      "At least 85% from four listed local reds",
      "At least 100% Mencía from the DO's own old vines",
      "At least 50% Tempranillo and the rest any local grape",
      "At least 70% Godello and the rest any red grape"
    ],
    answer: 0,
    region: "bierzo",
    explanation: "The old rule of 70% Mencía has been replaced by a list of four red grapes."
  },
  {
    id: "es-84",
    type: "scenario",
    country: "Spain",
    question: "When is irrigation allowed in Bierzo?",
    options: [
      "Only in the first two years of a new planting",
      "Always, using drip irrigation in summer",
      "Never, whatever the age of the vineyard",
      "Only in the driest years, with the regulator's leave"
    ],
    answer: 0,
    region: "bierzo",
    explanation: "The average vine age is about 75 years and 85% of the area is old vines."
  },
  {
    id: "es-85",
    type: "scenario",
    country: "Spain",
    question: "How does Bierzo's rule book describe its climate?",
    options: [
      "Dry Mediterranean with a long hot summer",
      "A transition between oceanic and continental",
      "Cold continental, like the high plateau of Toro",
      "Wet Atlantic, like Rías Baixas, all year round"
    ],
    answer: 1,
    region: "bierzo",
    explanation: "It is a basin ringed by mountains, with an average temperature of about 12.3 °C."
  },
  {
    id: "es-86",
    type: "scenario",
    country: "Spain",
    question: "How much lower is the yield for a Bierzo 'Vino de Paraje'?",
    options: [
      "25% lower",
      "10% lower",
      "40% lower",
      "50% lower"
    ],
    answer: 0,
    region: "bierzo",
    explanation: "Villa is 20% lower, Paraje 25%, Viña Clasificada 30% and Gran Viña Clasificada 35%."
  },
  {
    id: "es-87",
    type: "map",
    country: "Spain",
    question: "Which north-western DO, a basin ringed by mountains in León, is known for Mencía on slate and quartzite?",
    answer: "bierzo",
    explanation: "Its first village and paraje wines reached the market in June 2020."
  },
  {
    id: "es-88",
    type: "scenario",
    country: "Spain",
    question: "What are the four sub-zones of DO Valencia?",
    options: [
      "Alto Turia, Valentino, Moscatel and Clariano",
      "Alto Turia, Utiel-Requena, Valentino and Clariano",
      "Valentino, Utiel, Requena and Moscatel zones",
      "Alto Turia, Valentino, Utiel and Moscatel zone"
    ],
    answer: 0,
    region: "valencia",
    explanation: "The sub-zone names can be used only for grapes grown in that sub-zone."
  },
  {
    id: "es-89",
    type: "scenario",
    country: "Spain",
    question: "Which famous towns are NOT in DO Valencia?",
    options: [
      "Chiva and Turís, which are in the Valentino zone",
      "Utiel and Requena, which have their own DO",
      "Chelva and Titaguas, in the Alto Turia zone",
      "Xàtiva and Ontinyent, in the Clariano zone"
    ],
    answer: 1,
    region: "valencia",
    explanation: "Utiel-Requena is a separate DO."
  },
  {
    id: "es-90",
    type: "scenario",
    country: "Spain",
    question: "What is Moscatel de Valencia?",
    options: [
      "A dry white of any blend of Moscatel and Macabeo",
      "A sparkling wine made by the traditional method",
      "A vino de licor of 100% Moscatel de Alejandría",
      "A late-harvest wine of Verdejo and Moscatel grapes"
    ],
    answer: 2,
    region: "valencia",
    explanation: "Alcohol is added to the must, and it needs at least 15% acquired and 17.5% total alcohol."
  },
  {
    id: "es-91",
    type: "scenario",
    country: "Spain",
    question: "What is 'Petit Valencia'?",
    options: [
      "A light, partly fermented wine of 4.5 to 9%",
      "A dry white wine of 14% alcohol, kept in oak",
      "A fortified red wine of 17.5% alcohol or more",
      "A sparkling rosé wine of 11% alcohol or more"
    ],
    answer: 0,
    region: "valencia",
    explanation: "It is made by incomplete fermentation and may keep some sugar."
  },
  {
    id: "es-92",
    type: "map",
    country: "Spain",
    question: "Which eastern DO has the sub-zones Alto Turia, Valentino, Moscatel and Clariano, and makes a fortified Moscatel?",
    answer: "valencia",
    explanation: "Its rules give about 520 mm of rain a year over 55 rainy days."
  },
  {
    id: "es-93",
    type: "scenario",
    country: "Spain",
    question: "About how much rain does Jumilla get in a year?",
    options: [
      "About 300 mm",
      "About 700 mm",
      "About 1,000 mm",
      "About 450 mm"
    ],
    answer: 0,
    region: "jumilla",
    explanation: "Rain is uneven, with a peak in autumn, and the climate is dry continental."
  },
  {
    id: "es-94",
    type: "scenario",
    country: "Spain",
    question: "What does 'Jumilla Monastrell' on a label require?",
    options: [
      "At least 85% Monastrell",
      "At least 100% Monastrell from old ungrafted vines",
      "At least 50% Monastrell and the rest Tempranillo",
      "At least 70% Monastrell, as it is the main grape"
    ],
    answer: 0,
    region: "jumilla",
    explanation: "A plain Jumilla red has no general minimum share of Monastrell."
  },
  {
    id: "es-95",
    type: "scenario",
    country: "Spain",
    question: "What does 'Viña vieja' mean on a Jumilla label?",
    options: [
      "At least 85% of grapes from vines over 50 years old",
      "At least 85% of grapes from vines at least 30 years old",
      "All grapes from vines grown without any irrigation",
      "All grapes from ungrafted vines grown on their own roots"
    ],
    answer: 1,
    region: "jumilla",
    explanation: "The age must be provable from vineyard registers."
  },
  {
    id: "es-96",
    type: "scenario",
    country: "Spain",
    question: "What share of Jumilla's vineyard is Monastrell?",
    options: [
      "About 30% of it",
      "About 15% of it",
      "More than 70%",
      "About 50% of it"
    ],
    answer: 2,
    region: "jumilla",
    explanation: "Jumilla has the world's largest area of Monastrell, according to WSET."
  },
  {
    id: "es-97",
    type: "map",
    country: "Spain",
    question: "Which dry south-eastern DO, around 300 mm of rain and Monastrell on calcareous soils, sits on the Murcia–Albacete border?",
    answer: "jumilla",
    explanation: "Vineyards run from 320 to 900 m on the Altiplano Levantino."
  },
  {
    id: "es-98",
    type: "scenario",
    country: "Spain",
    question: "What is unusual about the Yecla production zone?",
    options: [
      "It is a single municipality",
      "It lies in two regions of Spain",
      "It sits wholly above 1,200 m",
      "It is all an island in the sea"
    ],
    answer: 0,
    region: "yecla",
    explanation: "Yecla is the only Spanish wine zone made of one municipality."
  },
  {
    id: "es-99",
    type: "scenario",
    country: "Spain",
    question: "Is irrigation allowed in Yecla?",
    options: [
      "Yes, dry-farmed and irrigated vines",
      "No, it has been banned since the 1970s",
      "Only for white grapes in the first year",
      "Only with water from the Mediterranean"
    ],
    answer: 0,
    region: "yecla",
    explanation: "Maximum red yields are 4,000 kg/ha dry-farmed and 7,000 kg/ha irrigated."
  },
  {
    id: "es-100",
    type: "scenario",
    country: "Spain",
    question: "What is Yecla's principal grape?",
    options: [
      "Tempranillo, with at least 85% required",
      "Monastrell, with no legal minimum share",
      "Garnacha, with at least 70% required",
      "Airén, with at least 50% required"
    ],
    answer: 1,
    region: "yecla",
    explanation: "The rule book names Monastrell as the principal variety."
  },
  {
    id: "es-101",
    type: "map",
    country: "Spain",
    question: "Which Murcia DO, the only wine zone in Spain that is one municipality, lies north-east of Jumilla?",
    answer: "yecla",
    explanation: "It has over 3,000 hours of clear sun a year."
  },
  {
    id: "es-102",
    type: "scenario",
    country: "Spain",
    question: "What is Cencibel, a red grape of La Mancha?",
    options: [
      "Tempranillo",
      "Garnacha (Grenache)",
      "Bobal, a Levante red",
      "Monastrell (Mourvèdre)"
    ],
    answer: 0,
    region: "laMancha",
    explanation: "Cencibel is the local name for Tempranillo."
  },
  {
    id: "es-103",
    type: "connection",
    country: "Spain",
    question: "What happened to Airén in 2022?",
    options: [
      "Tempranillo passed it as Spain's top grape",
      "It was banned in all Spanish quality wines",
      "It became the most planted grape in the world",
      "It was replaced by Verdejo in La Mancha DO"
    ],
    answer: 0,
    region: "laMancha",
    explanation: "Spanish ministry data in 2022 showed Tempranillo (202,198 ha) just ahead of Airén (200,084 ha)."
  },
  {
    id: "es-104",
    type: "scenario",
    country: "Spain",
    question: "What is La Mancha's maximum yield for bush vines?",
    options: [
      "5,000 kg/ha",
      "13,000 kg/ha",
      "10,000 kg/ha",
      "20,000 kg/ha"
    ],
    answer: 2,
    region: "laMancha",
    explanation: "Trellised vines may reach 13,000 kg/ha."
  },
  {
    id: "es-105",
    type: "scenario",
    country: "Spain",
    question: "What does a red Gran Reserva from La Mancha need?",
    options: [
      "60 months in total, at least 18 in oak",
      "24 months in total, at least 6 in oak",
      "36 months in total, at least 12 in oak",
      "48 months in total, at least 24 in oak"
    ],
    answer: 0,
    region: "laMancha",
    explanation: "Oak is limited to 330 litres, and cork is mandatory."
  },
  {
    id: "es-106",
    type: "scenario",
    country: "Spain",
    question: "What is banned in La Mancha DO wine?",
    options: [
      "Using Tempranillo in a white wine",
      "Mixing white and red grapes",
      "Growing more than one variety in a plot",
      "Using any oak barrel above 100 litres"
    ],
    answer: 1,
    region: "laMancha",
    explanation: "A grape name on the label needs at least 85% of that variety."
  },
  {
    id: "es-107",
    type: "map",
    country: "Spain",
    question: "Which huge plateau DO, with Airén and Cencibel and summers near 45 °C, is the largest demarcated vineyard in Spain?",
    answer: "laMancha",
    explanation: "It has more than 3,000 hours of sun and 300 to 350 mm of rain."
  },
  {
    id: "es-108",
    type: "scenario",
    country: "Spain",
    question: "How much red grape must a Valdepeñas red contain?",
    options: [
      "At least 85% red grapes",
      "At least 100% red grapes",
      "At least 50% red grapes",
      "At least 25% red grapes"
    ],
    answer: 0,
    region: "valdepenas",
    explanation: "A rosé needs at least 25% red grapes."
  },
  {
    id: "es-109",
    type: "scenario",
    country: "Spain",
    question: "When did phylloxera reach Valdepeñas?",
    options: [
      "In 1863, early",
      "In 1892",
      "In 1911, late",
      "In 1950"
    ],
    answer: 2,
    region: "valdepenas",
    explanation: "Its arrival was late."
  },
  {
    id: "es-110",
    type: "scenario",
    country: "Spain",
    question: "What is Valdepeñas' average altitude?",
    options: [
      "705 m",
      "205 m",
      "1,205 m",
      "1,505 m"
    ],
    answer: 0,
    region: "valdepenas",
    explanation: "It has over 2,500 hours of sun and 200 to 400 mm of rain."
  },
  {
    id: "es-111",
    type: "scenario",
    country: "Spain",
    question: "What does a Valdepeñas Roble red need?",
    options: [
      "More than 90 days in oak",
      "At least 24 months in oak",
      "At least 18 days in oak",
      "No time in oak, only oak chips"
    ],
    answer: 0,
    region: "valdepenas",
    explanation: "A Roble white needs more than 45 days."
  },
  {
    id: "es-112",
    type: "map",
    country: "Spain",
    question: "Which enclave DO, almost surrounded by La Mancha, has limestone soils and red Crianza of 24 months?",
    answer: "valdepenas",
    explanation: "Valdepeñas has an average altitude of 705 m."
  },
  {
    id: "es-113",
    type: "scenario",
    country: "Spain",
    question: "What did DO Montsant grow out of?",
    options: [
      "The Falset sub-zone of DO Tarragona",
      "The Priorat DOQ's own outer ring zone",
      "The old Penedès sub-zone of Terra Alta",
      "The DO Costers del Segre foothill zone"
    ],
    answer: 0,
    region: "montsant",
    explanation: "Montsant was approved in 2001."
  },
  {
    id: "es-114",
    type: "scenario",
    country: "Spain",
    question: "What shape do the mountains of Montsant form around Priorat?",
    options: [
      "A closed ring with no gaps at all",
      "A semicircle, open to the south",
      "A straight wall along the coast",
      "A single line along the river Ebre"
    ],
    answer: 1,
    region: "montsant",
    explanation: "The Serra de Montsant lies to the north, and the DO opens towards the Ebre."
  },
  {
    id: "es-115",
    type: "scenario",
    country: "Spain",
    question: "Which two grapes together make up about two-thirds of Montsant's vineyard?",
    options: [
      "Garnatxa negra and Carinyena",
      "Tempranillo and Merlot together",
      "Syrah and Cabernet Sauvignon",
      "Macabeo and Garnacha Blanca"
    ],
    answer: 0,
    region: "montsant",
    explanation: "About 95% of the vineyard is black grapes."
  },
  {
    id: "es-116",
    type: "scenario",
    country: "Spain",
    question: "What is llicorella in Montsant?",
    options: [
      "Pure white chalk from the coast",
      "Black volcanic sand from the hills",
      "Stony soil from siliceous slate",
      "Deep red alluvial clay from the Ebre"
    ],
    answer: 2,
    region: "montsant",
    explanation: "The rules also name calcareous soils with red clays, and granitic sands mainly around Falset."
  },
  {
    id: "es-117",
    type: "scenario",
    country: "Spain",
    question: "What is the maximum yield for black grapes in Montsant?",
    options: [
      "10,000 kg/ha",
      "5,000 kg/ha",
      "7,000 kg/ha",
      "20,000 kg/ha"
    ],
    answer: 0,
    region: "montsant",
    explanation: "White grapes may reach 12,000 kg/ha."
  },
  {
    id: "es-118",
    type: "map",
    country: "Spain",
    question: "Which Catalan DO forms a semicircle of mountains around Priorat and used to be the Falset sub-zone of DO Tarragona?",
    answer: "montsant",
    explanation: "Montsant was approved in 2001."
  },
  {
    id: "es-119",
    type: "scenario",
    country: "Spain",
    question: "What is DO Catalunya?",
    options: [
      "An umbrella DO across Catalonia",
      "A DO for sparkling wine only, like Cava",
      "A DO for a single village in the Penedès",
      "A DO only for fortified wines of Tarragona"
    ],
    answer: 0,
    region: "catalunya",
    explanation: "Its area overlaps other DOs, so many vineyards could go to either."
  },
  {
    id: "es-120",
    type: "scenario",
    country: "Spain",
    question: "How many grapes does DO Catalunya authorise?",
    options: [
      "8, with at least 85% Garnacha",
      "About 38, no minimum share",
      "12, with at least 50% Macabeo",
      "19, with at least 70% Carignan"
    ],
    answer: 1,
    region: "catalunya",
    explanation: "19 are white and 19 or 20 are black."
  },
  {
    id: "es-121",
    type: "scenario",
    country: "Spain",
    question: "Which wine types does DO Catalunya allow besides still wine?",
    options: [
      "Semi-sparkling and liqueur wine",
      "Only sparkling wine by the traditional method",
      "Only fortified solera wines like Sherry",
      "Only late-harvest sweet wines of botrytis"
    ],
    answer: 0,
    region: "catalunya",
    explanation: "Vino de aguja has 1 to 2.5 bar, and liqueur wine is 15 to 22% alcohol."
  },
  {
    id: "es-122",
    type: "scenario",
    country: "Spain",
    question: "What happens where a Catalunya vineyard could also go to another DO?",
    options: [
      "The higher yield limit applies",
      "The vineyard must leave Catalunya",
      "The stricter yield limit applies",
      "The yield limit does not apply"
    ],
    answer: 2,
    region: "catalunya",
    explanation: "The maximum yield is 10,000 kg/ha black and 12,000 kg/ha white."
  },
  {
    id: "es-123",
    type: "map",
    country: "Spain",
    question: "Which umbrella DO covers municipalities across Catalonia, many of which also lie in Penedès, Montsant and Cava?",
    answer: "catalunya",
    explanation: "It authorises about 38 grapes and sets no minimum share."
  },
  {
    id: "it-31",
    type: "scenario",
    country: "Italy",
    question: "What does Montepulciano d'Abruzzo DOC need?",
    options: [
      "At least 85% Montepulciano",
      "At least 100% Sangiovese grapes",
      "At least 50% Trebbiano grapes",
      "At least 70% Nebbiolo grapes"
    ],
    answer: 0,
    region: "abruzzo",
    explanation: "The Montepulciano grape is not the Tuscan town's wine, which is Sangiovese."
  },
  {
    id: "it-32",
    type: "scenario",
    country: "Italy",
    question: "What does 'Cerasuolo' mean in Cerasuolo d'Abruzzo?",
    options: [
      "Cherry-red, a rosato",
      "Cherry-scented, a sparkling white",
      "Cherry-sweet, a late-harvest red",
      "Cherry-wood, an oak-aged red"
    ],
    answer: 0,
    region: "abruzzo",
    explanation: "It is darker and more intense than most rosés, with brief skin contact, and its own DOC since 2010."
  },
  {
    id: "it-33",
    type: "scenario",
    country: "Italy",
    question: "How much of Abruzzo's vineyard is trained on the pergola abruzzese?",
    options: [
      "About 10% of it",
      "About 30% of it",
      "More than 80%",
      "About 50% of it"
    ],
    answer: 2,
    region: "abruzzo",
    explanation: "New plantings mostly use row systems."
  },
  {
    id: "it-34",
    type: "scenario",
    country: "Italy",
    question: "What is the minimum Montepulciano in Colline Teramane DOCG?",
    options: [
      "At least 90%",
      "At least 50%",
      "At least 70%",
      "At least 100%"
    ],
    answer: 0,
    region: "abruzzo",
    explanation: "It became a DOCG in 2003."
  },
  {
    id: "it-35",
    type: "scenario",
    country: "Italy",
    question: "What is the altitude limit for Montepulciano d'Abruzzo DOC vineyards?",
    options: [
      "600 m, or 700 m on south-facing slopes",
      "200 m, or 300 m on north-facing slopes",
      "1,000 m on any slope",
      "No limit, vines may grow at any height"
    ],
    answer: 0,
    region: "abruzzo",
    explanation: "More than 65% of Abruzzo is mountainous."
  },
  {
    id: "it-36",
    type: "map",
    country: "Italy",
    question: "Which Adriatic region, with Montepulciano and the pergola abruzzese, makes the cherry-red Cerasuolo rosato?",
    answer: "abruzzo",
    explanation: "Montepulciano d'Abruzzo DOC dates from 1968."
  },
  {
    id: "pt-18",
    type: "scenario",
    country: "Portugal",
    question: "What soils does the Dão have?",
    options: [
      "Very poor granite soils",
      "Deep clay-limestone soils",
      "Black volcanic soils",
      "Schist terraces cut by the Douro"
    ],
    answer: 0,
    region: "dao",
    explanation: "They are sandy and well drained, which keeps yields low."
  },
  {
    id: "pt-19",
    type: "scenario",
    country: "Portugal",
    question: "Which mountains shelter the Dão?",
    options: [
      "The Marão and Alvão ranges in the north",
      "The Estrela, Caramulo and Nave",
      "The Sintra and Arrábida hills by the sea",
      "The Algarve and Monchique ranges"
    ],
    answer: 1,
    region: "dao",
    explanation: "They shield the vines from both continental and maritime influences."
  },
  {
    id: "pt-20",
    type: "scenario",
    country: "Portugal",
    question: "Which grape is the leading white of the Dão?",
    options: [
      "Encruzado",
      "Fernão Pires",
      "Loureiro",
      "Alvarinho"
    ],
    answer: 0,
    region: "dao",
    explanation: "It gives citrus and mineral tension."
  },
  {
    id: "pt-21",
    type: "scenario",
    country: "Portugal",
    question: "In which year was the Dão first demarcated?",
    options: [
      "1756",
      "1933",
      "1908",
      "1999"
    ],
    answer: 2,
    region: "dao",
    explanation: "It has seven sub-regions."
  },
  {
    id: "pt-22",
    type: "map",
    country: "Portugal",
    question: "Which granite-soiled region around Viseu, sheltered by the Estrela mountains, is known for elegant reds and Encruzado whites?",
    answer: "dao",
    explanation: "Vineyards grow from about 200 m to 1,000 m."
  },
  {
    id: "pt-23",
    type: "scenario",
    country: "Portugal",
    question: "What is Bairrada's main red grape?",
    options: [
      "Baga",
      "Castelão",
      "Touriga Franca",
      "Trincadeira"
    ],
    answer: 0,
    region: "bairrada",
    explanation: "It is thick-skinned and late ripening, with firm tannin and high acidity."
  },
  {
    id: "pt-24",
    type: "scenario",
    country: "Portugal",
    question: "What is Fernão Pires called locally in Bairrada?",
    options: [
      "Arinto, the Bucelas white",
      "Maria Gomes",
      "Bical, the Bairrada white",
      "Cercial, the Bairrada white"
    ],
    answer: 1,
    region: "bairrada",
    explanation: "It is one of the main white grapes."
  },
  {
    id: "pt-25",
    topic: "sparkling",
    type: "scenario",
    country: "Portugal",
    question: "Which town is nicknamed the 'Capital do Espumante'?",
    options: [
      "Anadia",
      "Viseu city",
      "Porto city",
      "Évora city"
    ],
    answer: 0,
    region: "bairrada",
    explanation: "Bairrada makes roughly half to two-thirds of Portugal's sparkling wine."
  },
  {
    id: "pt-26",
    type: "scenario",
    country: "Portugal",
    question: "What kind of soil is best for Baga in Bairrada?",
    options: [
      "Pure granite rock",
      "Loose wind-blown sand",
      "Clay-limestone",
      "Black schist slate"
    ],
    answer: 2,
    region: "bairrada",
    explanation: "Sandy strips give lighter wines."
  },
  {
    id: "pt-27",
    type: "map",
    country: "Portugal",
    question: "Which cool, Atlantic-influenced region around Anadia is known for Baga and traditional-method sparkling wine?",
    answer: "bairrada",
    explanation: "The cool humid climate gives high-acid, low-alcohol grapes."
  },
  {
    id: "it-37",
    type: "scenario",
    country: "Italy",
    question: "What is the minimum Verdicchio in the Verdicchio DOCs?",
    options: [
      "At least 85%",
      "At least 100%",
      "At least 50%",
      "At least 70%"
    ],
    answer: 0,
    region: "marche",
    explanation: "Other white grapes suitable for the Marche can make up the rest."
  },
  {
    id: "it-38",
    type: "scenario",
    country: "Italy",
    question: "How does Matelica differ from Castelli di Jesi?",
    options: [
      "Matelica is inland, no sea influence",
      "Matelica lies right on the Adriatic coast",
      "Matelica sits on volcanic soil near Rome",
      "Matelica is lower, at under 100 m"
    ],
    answer: 0,
    region: "marche",
    explanation: "Matelica vineyards lie at 250 to 700 m, against 80 to 280 m for most of Jesi."
  },
  {
    id: "it-39",
    type: "scenario",
    country: "Italy",
    question: "How much ageing does a Verdicchio Riserva DOCG need?",
    options: [
      "At least 18 months from 1 December",
      "At least 6 months from the harvest date",
      "At least 36 months with 12 in oak barrels",
      "At least 60 months with 18 in oak barrels"
    ],
    answer: 0,
    region: "marche",
    explanation: "Jesi Riserva needs at least 6 of those months in bottle; both Riservas became DOCGs in 2010."
  },
  {
    id: "it-40",
    type: "scenario",
    country: "Italy",
    question: "What is the mean annual rainfall in the Castelli di Jesi zone?",
    options: [
      "About 300 mm",
      "About 1,800 mm",
      "About 800 mm",
      "About 100 mm"
    ],
    answer: 2,
    region: "marche",
    explanation: "The zone is about 20 km from the sea."
  },
  {
    id: "it-41",
    type: "map",
    country: "Italy",
    question: "Which Adriatic region is known for Verdicchio, from Castelli di Jesi and Matelica?",
    answer: "marche",
    explanation: "Verdicchio is a high-acidity white with a bitter-almond finish."
  },
  {
    id: "it-42",
    type: "scenario",
    country: "Italy",
    question: "What does Montefalco Sagrantino DOCG require?",
    options: [
      "100% Sagrantino",
      "At least 70% Sangiovese",
      "At least 85% Grechetto",
      "At least 60% Montepulciano"
    ],
    answer: 0,
    region: "umbria",
    explanation: "The maximum yield is 8 t/ha."
  },
  {
    id: "it-43",
    type: "scenario",
    country: "Italy",
    question: "How long is Sagrantino Secco aged before release?",
    options: [
      "37 months, at least 12 in oak",
      "12 months in all, none of them in oak",
      "6 months in all, all of them in oak",
      "60 months in all, all of them in oak"
    ],
    answer: 0,
    region: "umbria",
    explanation: "At least 33 months from 1 December of the harvest year, plus at least 4 months in bottle."
  },
  {
    id: "it-44",
    type: "scenario",
    country: "Italy",
    question: "What blend is Montefalco Rosso DOC?",
    options: [
      "Sangiovese 60-80%, Sagrantino 10-25%",
      "100% Sagrantino with no other grapes",
      "60 to 80% Grechetto, with Sagrantino",
      "10 to 25% Sangiovese, with Merlot"
    ],
    answer: 0,
    region: "umbria",
    explanation: "The DOC dates from 1979; the Sagrantino DOCG from 1992."
  },
  {
    id: "it-45",
    type: "scenario",
    country: "Italy",
    question: "Which grapes must make up at least 60% of Orvieto?",
    options: [
      "Verdicchio and Malvasia di Candia",
      "Procanico and Grechetto",
      "Sagrantino and Sangiovese",
      "Cortese and Garganega"
    ],
    answer: 1,
    region: "umbria",
    explanation: "Vineyards must lie between 100 and 500 m."
  },
  {
    id: "it-46",
    type: "scenario",
    country: "Italy",
    question: "What helps botrytis for sweet Orvieto?",
    options: [
      "Lake Corbara and autumn fog",
      "A hot dry wind from Africa in summer",
      "Heavy snow on the vines in winter",
      "Irrigation with sea water in spring"
    ],
    answer: 0,
    region: "umbria",
    explanation: "Muffa Nobile needs grapes of at least 16% natural alcohol."
  },
  {
    id: "it-47",
    type: "map",
    country: "Italy",
    question: "Which landlocked region, with Sagrantino and Orvieto, lies between Tuscany and Marche?",
    answer: "umbria",
    explanation: "Montefalco Sagrantino became a DOCG in 1992."
  },
  {
    id: "it-48",
    type: "scenario",
    country: "Italy",
    question: "What does Frascati need?",
    options: [
      "At least 70% Malvasia grapes",
      "100% Trebbiano Toscano grapes",
      "At least 85% Verdicchio grapes",
      "At least 60% Sangiovese grapes"
    ],
    answer: 0,
    region: "lazio",
    explanation: "The rest can include Trebbiano, Greco, Bellone and Bombino Bianco."
  },
  {
    id: "it-49",
    type: "scenario",
    country: "Italy",
    question: "Which Frascati wines became DOCGs in 2011?",
    options: [
      "Superiore and Cannellino",
      "Spumante and Novello styles",
      "Rosso and Rosato styles",
      "Riserva and Passito styles"
    ],
    answer: 0,
    region: "lazio",
    explanation: "The Frascati DOC itself dates from 1966."
  },
  {
    id: "it-50",
    type: "map",
    country: "Italy",
    question: "Which region around Rome, on the Alban Hills, is the home of Frascati?",
    answer: "lazio",
    explanation: "Its vineyards grow on volcanic soils."
  },
  {
    id: "it-51",
    type: "scenario",
    country: "Italy",
    question: "What did Friulano used to be called?",
    options: [
      "Tocai Friulano",
      "Ribolla Gialla",
      "Pinot Bianco",
      "Verduzzo Friulano"
    ],
    answer: 0,
    region: "friuli",
    explanation: "It was renamed after an EU ruling (2005) over the name Tokaji; the old name ended on EU labels in March 2007."
  },
  {
    id: "it-52",
    type: "scenario",
    country: "Italy",
    question: "What does a Collio single-grape wine need?",
    options: [
      "At least 85% of the named grape",
      "At least 100% of the named grape",
      "At least 50% of the named grape",
      "At least 70% of the named grape"
    ],
    answer: 0,
    region: "friuli",
    explanation: "Friulano, Pinot Grigio, Ribolla Gialla and Pinot Bianco each follow this rule."
  },
  {
    id: "it-53",
    type: "scenario",
    country: "Italy",
    question: "How much Pinot Grigio does Friuli Grave Pinot Grigio need?",
    options: [
      "At least 95%",
      "At least 50%",
      "At least 70%",
      "At least 85%"
    ],
    answer: 0,
    region: "friuli",
    explanation: "Refosco dal Peduncolo Rosso also needs at least 95%."
  },
  {
    id: "it-54",
    type: "scenario",
    country: "Italy",
    question: "Which soils are typical of Collio?",
    options: [
      "Black volcanic ash from Etna",
      "Calcareous marl and flysch sandstone",
      "Red porphyry of the Bolzano hills",
      "Deep alluvial gravel of the Po plain"
    ],
    answer: 1,
    region: "friuli",
    explanation: "Over 85% of Collio's production is white."
  },
  {
    id: "it-55",
    type: "scenario",
    country: "Italy",
    question: "What are the official sub-zones of Colli Orientali del Friuli?",
    options: [
      "Cialla and four named for a grape and a village",
      "Collio, Grave, Carso, Isonzo, Aquileia and Latisana",
      "Barolo, Langhe, Roero, Asti, Alba and Barbaresco",
      "Soave, Valpolicella, Lugana, Bardolino and Garda"
    ],
    answer: 0,
    region: "friuli",
    explanation: "The four are Ribolla Gialla di Rosazzo, Pignolo di Rosazzo, Schioppettino di Prepotto and Refosco di Faedis. Ramandolo became a DOCG in 2001, Picolit in 2006 and Rosazzo in 2011."
  },
  {
    id: "it-56",
    type: "map",
    country: "Italy",
    question: "Which north-eastern region, known for Collio, Colli Orientali and Friuli Grave, borders Slovenia?",
    answer: "friuli",
    explanation: "Collio DOC dates from 1968."
  },
  {
    id: "it-57",
    topic: "sparkling",
    type: "scenario",
    country: "Italy",
    question: "How many months on the lees does a Trento DOC non-vintage need?",
    options: [
      "15 months",
      "3 months",
      "60 months",
      "9 months"
    ],
    answer: 0,
    region: "trentinoAltoAdige",
    explanation: "A Millesimato needs 24 months and a Riserva 36 months."
  },
  {
    id: "it-58",
    topic: "sparkling",
    type: "scenario",
    country: "Italy",
    question: "Which grapes may go into Trento DOC?",
    options: [
      "Chardonnay and the Pinots",
      "Glera, Verdicchio and Garganega only",
      "Nebbiolo, Barbera and Dolcetto only",
      "Lagrein, Schiava and Teroldego only"
    ],
    answer: 0,
    region: "trentinoAltoAdige",
    explanation: "Trento DOC dates from 1993 and is a traditional-method wine."
  },
  {
    id: "it-59",
    type: "scenario",
    country: "Italy",
    question: "What must Teroldego Rotaliano be made from?",
    options: [
      "At least 85% Lagrein",
      "At least 70% Schiava",
      "100% Teroldego",
      "At least 50% Merlot"
    ],
    answer: 2,
    region: "trentinoAltoAdige",
    explanation: "Teroldego Rotaliano DOC dates from 1971."
  },
  {
    id: "it-60",
    type: "scenario",
    country: "Italy",
    question: "What is the range of vineyard altitudes in Alto Adige?",
    options: [
      "200 to 1,000 m",
      "0 to 50 m",
      "1,500 to 2,500 m",
      "100 to 150 m"
    ],
    answer: 0,
    region: "trentinoAltoAdige",
    explanation: "The climate is described as Alpine-Mediterranean."
  },
  {
    id: "it-61",
    type: "scenario",
    country: "Italy",
    question: "Which soil is typical around Bolzano in Alto Adige?",
    options: [
      "White coastal chalk",
      "Red porphyry rock",
      "Black basalt rock",
      "Pure river sand"
    ],
    answer: 1,
    region: "trentinoAltoAdige",
    explanation: "Dolomitic limestone is found mainly south of Bolzano."
  },
  {
    id: "it-62",
    type: "map",
    country: "Italy",
    question: "Which alpine region has Alto Adige and Trentino, with Lagrein, Teroldego and Trento DOC sparkling wine?",
    answer: "trentinoAltoAdige",
    explanation: "Alto Adige is 65% white and 35% red."
  },
  {
    id: "nw-37",
    type: "scenario",
    country: "New World",
    question: "Which grape is almost half of McLaren Vale's crush each year?",
    options: [
      "Riesling",
      "Pinot Noir",
      "Semillon",
      "Shiraz"
    ],
    answer: 3,
    region: "australia",
    explanation: "Grenache, from vines planted in the late 1800s and early 1900s, is the base of its GSM blends."
  },
  {
    id: "nw-38",
    type: "scenario",
    country: "New World",
    question: "Why are the Adelaide Hills cool for South Australia?",
    options: [
      "The ocean cold current on a low coast",
      "Dense forest that shades the vines",
      "A lake that cools the valley floor",
      "Altitude, with vineyards up to 714 m"
    ],
    answer: 3,
    region: "australia",
    explanation: "Many meso-climates exist, and Sauvignon Blanc, Chardonnay and Pinot Noir do well."
  },
  {
    id: "nw-39",
    type: "scenario",
    country: "New World",
    question: "Which grape is the most planted on the Mornington Peninsula?",
    options: [
      "Shiraz",
      "Pinot Noir",
      "Semillon",
      "Cabernet Sauvignon"
    ],
    answer: 1,
    region: "australia",
    explanation: "No vineyard is more than 7 km from the sea."
  },
  {
    id: "nw-40",
    type: "scenario",
    country: "New World",
    question: "What are Heathcote's soils known as?",
    options: [
      "Black volcanic ash soils",
      "White limestone and chalk soils",
      "Pale sandy beach soils",
      "Red Cambrian greenstone soils"
    ],
    answer: 3,
    region: "australia",
    explanation: "Shiraz is the signature grape."
  },
  {
    id: "nw-41",
    type: "scenario",
    country: "New World",
    question: "What is special about Goulburn Valley's Marsanne?",
    options: [
      "It is the only Marsanne in the world",
      "Oldest and largest in the world",
      "It is always aged in new oak barrels",
      "It is grown only as a sweet wine"
    ],
    answer: 1,
    region: "australia",
    explanation: "Tahbilk's winery dates from 1860."
  },
  {
    id: "nw-42",
    type: "scenario",
    country: "New World",
    question: "What is Tasmania's January mean temperature, among Australian regions?",
    options: [
      "The highest, at 28.0 °C",
      "About the same as Riverina",
      "About the same as Barossa",
      "The lowest, at 15.6 °C"
    ],
    answer: 3,
    region: "australia",
    explanation: "Pinot Noir and Chardonnay drive its traditional-method sparkling wine."
  },
  {
    id: "nw-43",
    type: "scenario",
    country: "New World",
    question: "How long does Great Southern Riesling need to peak?",
    options: [
      "About six months",
      "About eight weeks",
      "About ten years",
      "About one year only"
    ],
    answer: 2,
    region: "australia",
    explanation: "The region runs from maritime coast to continental inland."
  },
  {
    id: "nw-44",
    topic: "fortified",
    type: "scenario",
    country: "New World",
    question: "What are the four fortified tiers of Rutherglen Muscat and Topaque?",
    options: [
      "Young, Old, Older and Oldest",
      "Fino, Amontillado, Oloroso and Palo Cortado",
      "Ruby, Tawny, Colheita and Vintage",
      "Rutherglen, Classic, Grand and Rare"
    ],
    answer: 3,
    region: "australia",
    explanation: "The tiers rise with age, and Rare is over 20 years old on average. Topaque is made from Muscadelle and replaced the name Tokay around 1999, to avoid confusion with Hungary's Tokaji."
  },
  {
    id: "nw-45",
    type: "scenario",
    country: "New World",
    question: "What does Riverina's Semillon speciality use?",
    options: [
      "Ice, for a frozen Icewine",
      "Botrytis, for a dessert wine",
      "Straw mats, for a dried passito",
      "Flor yeast, for a dry fino"
    ],
    answer: 1,
    region: "australia",
    explanation: "Irrigation is essential in this hot region."
  },
  {
    id: "nw-46",
    type: "scenario",
    country: "New World",
    question: "Which NZ region has the Ormond Golden Slope?",
    options: [
      "Nelson",
      "Marlborough",
      "Waipara",
      "Gisborne"
    ],
    answer: 3,
    region: "newZealand",
    explanation: "Patutahi is known for Gewürztraminer."
  },
  {
    id: "nw-47",
    type: "scenario",
    country: "New World",
    question: "Which grape is more than half of Nelson's vineyard?",
    options: [
      "Riesling, the German grape",
      "Chardonnay, the Burgundian grape",
      "Sauvignon Blanc",
      "Syrah, the Rhône grape"
    ],
    answer: 2,
    region: "newZealand",
    explanation: "Sauvignon Blanc is the leading grape in Nelson."
  },
  {
    id: "nw-48",
    type: "scenario",
    country: "New World",
    question: "What shelters North Canterbury (Waipara) from rain?",
    options: [
      "The rain shadow of the Southern Alps",
      "The warm Pacific current off the coast",
      "A ring of volcanic hills",
      "The Cook Strait winds in winter"
    ],
    answer: 0,
    region: "newZealand",
    explanation: "Waipara lies in the lee of the Southern Alps."
  },
  {
    id: "nw-49",
    type: "scenario",
    country: "New World",
    question: "Why is the Anderson Valley in Mendocino cooler than inland Mendocino?",
    options: [
      "A large inland lake",
      "Volcanic heat from the soil",
      "The Sierra Nevada snowmelt",
      "Pacific fog"
    ],
    answer: 3,
    region: "california",
    explanation: "It is known for Pinot Noir and sparkling wine."
  },
  {
    id: "nw-50",
    type: "scenario",
    country: "New World",
    question: "How is the Santa Cruz Mountains AVA boundary set?",
    options: [
      "By county lines only",
      "By the river catchment area",
      "By soil type, shale only",
      "By elevation, above fog"
    ],
    answer: 3,
    region: "california",
    explanation: "It was published in 1981, and its soils are varied and low in fertility."
  },
  {
    id: "nw-51",
    type: "scenario",
    country: "New World",
    question: "What cools Lodi's hot summer days?",
    options: [
      "The Pacific fog",
      "The Santa Ana wind",
      "The Delta breeze",
      "The Sierra snowmelt"
    ],
    answer: 2,
    region: "california",
    explanation: "The Delta is the main sea-level gap in the Coast Ranges."
  },
  {
    id: "nw-52",
    type: "scenario",
    country: "New World",
    question: "Why does Monterey need irrigation?",
    options: [
      "Rainfall is over 100 inches a year",
      "The soil is pure clay, which holds no water",
      "The vines are all own-rooted on sand",
      "Rainfall is only about 10 to 16 inches"
    ],
    answer: 3,
    region: "california",
    explanation: "Winds from Monterey Bay blow down the Salinas Valley, and Chardonnay is about half of the vines."
  },
  {
    id: "nw-53",
    type: "scenario",
    country: "New World",
    question: "Which soil is a feature of Limarí, in Chile?",
    options: [
      "Granite soil",
      "Black volcanic ash soil",
      "Red slate soil",
      "Calcareous soil"
    ],
    answer: 3,
    region: "chile",
    explanation: "Limarí is semi-arid, with Camanchaca fog, and Chardonnay is its best-known grape."
  },
  {
    id: "nw-54",
    type: "scenario",
    country: "New World",
    question: "What is Camanchaca?",
    options: [
      "A cold wind off the Andes",
      "A frost that hits spring buds",
      "A sea current of the Pacific",
      "Chile's morning coastal fog"
    ],
    answer: 3,
    region: "chile",
    explanation: "It cools the maritime-influenced Limarí Valley."
  },
  {
    id: "nw-55",
    type: "scenario",
    country: "New World",
    question: "Which grape is the main red of arid Elqui?",
    options: [
      "Carmenère",
      "Pinot Noir",
      "Syrah",
      "Malbec"
    ],
    answer: 2,
    region: "chile",
    explanation: "Vineyards climb to roughly 2,000 m."
  },
  {
    id: "nw-56",
    type: "scenario",
    country: "New World",
    question: "Which grape is Peumo, in Cachapoal, known for?",
    options: [
      "Pinot Noir",
      "Riesling",
      "Torrontés",
      "Carmenère"
    ],
    answer: 3,
    region: "chile",
    explanation: "Cabernet Sauvignon, Carmenère and Merlot lead the valley."
  },
  {
    id: "nw-57",
    type: "scenario",
    country: "New World",
    question: "Which grapes are old vines of the Itata Valley?",
    options: [
      "Cabernet Sauvignon and Merlot",
      "Syrah and Viognier",
      "Carmenère and Sauvignon Blanc",
      "País and Moscatel"
    ],
    answer: 3,
    region: "chile",
    explanation: "Itata soils are sandy and granitic."
  },
  {
    id: "nw-58",
    type: "scenario",
    country: "New World",
    question: "What share of Argentina's vineyard area is in Mendoza province?",
    options: [
      "About 10% of it",
      "About 25% of it",
      "About 40% of it",
      "More than 70%"
    ],
    answer: 3,
    region: "argentina",
    explanation: "Cafayate in Salta stands at about 1,683 m."
  },
  {
    id: "nw-59",
    type: "scenario",
    country: "New World",
    question: "What is Worcester best known for in South Africa?",
    options: [
      "Pinot Noir on the coast",
      "Cool-climate Riesling",
      "Most wine, and brandy",
      "Pinotage on old bush vines"
    ],
    answer: 2,
    region: "southAfrica",
    explanation: "It depends on irrigation and makes fortified Muscadel."
  },
  {
    id: "nw-60",
    type: "scenario",
    country: "New World",
    question: "What cools Durbanville's vineyards?",
    options: [
      "Snow melt from the Hex River mountains",
      "Warm dry winds from the Karoo",
      "The Agulhas Current of the Indian Ocean",
      "Table Bay and False Bay winds"
    ],
    answer: 3,
    region: "southAfrica",
    explanation: "Sauvignon Blanc is the signature."
  },
  {
    id: "nw-61",
    type: "scenario",
    country: "New World",
    question: "Why does Robertson need the Breede River?",
    options: [
      "Over 1,500 mm of rain, so it needs drainage",
      "The river brings cooling snow to the vines",
      "The river stops frost from reaching the vines",
      "Under 400 mm of rain, so irrigation"
    ],
    answer: 3,
    region: "southAfrica",
    explanation: "Its soils are lime-rich, and Chardonnay is the signature."
  },
  {
    id: "nw-62",
    type: "scenario",
    country: "New World",
    question: "What is Jory soil?",
    options: [
      "Volcanic soil from Columbia River basalt",
      "Marine sediment from an old sea floor",
      "Windblown loess from the Missoula floods",
      "Gravel from an old glacial river"
    ],
    answer: 0,
    region: "oregon",
    explanation: "It covers about 80% of the Dundee Hills AVA."
  },
  {
    id: "nw-63",
    type: "scenario",
    country: "New World",
    question: "What does the Coast Range do for the Willamette Valley?",
    options: [
      "Holds back cold air from the Arctic",
      "Blocks Pacific rain, a rain shadow",
      "Shelters the vines from the Pacific fog",
      "Funnels warm winds in from the desert"
    ],
    answer: 1,
    region: "oregon",
    explanation: "The Coast Range gets 90 to 135 inches of rain, and Dundee Hills 30 to 45."
  },
  {
    id: "nw-64",
    type: "scenario",
    country: "New World",
    question: "Which grape is about 60% of Oregon's planted acreage?",
    options: [
      "Chardonnay",
      "Pinot Gris",
      "Pinot Noir",
      "Riesling"
    ],
    answer: 2,
    region: "oregon",
    explanation: "The share changes a little from year to year."
  },
  {
    id: "nw-65",
    type: "map",
    country: "New World",
    question: "Which state, with the Willamette Valley, Dundee Hills and Jory soils, is known for Pinot Noir?",
    answer: "oregon",
    explanation: "The Willamette Valley AVA was approved in 1983."
  },
  {
    id: "nw-66",
    type: "scenario",
    country: "New World",
    question: "What is the Columbia Valley's annual rainfall?",
    options: [
      "6 to 8 inches",
      "About 30 inches",
      "About 60 inches",
      "About 100 inches"
    ],
    answer: 0,
    region: "washington",
    explanation: "It sits in the rain shadow of the Cascades."
  },
  {
    id: "nw-67",
    type: "scenario",
    country: "New World",
    question: "What left slackwater deposits across the Columbia Valley?",
    options: [
      "The Pacific tsunamis",
      "The Missoula floods",
      "The Columbia River's slow flow",
      "The melting of the Rocky Mountains"
    ],
    answer: 1,
    region: "washington",
    explanation: "Windblown loess lies on top."
  },
  {
    id: "nw-68",
    type: "scenario",
    country: "New World",
    question: "Why can many Washington vines be own-rooted?",
    options: [
      "Rootstocks are banned by law",
      "The sandy soil is too wet",
      "Winter freezes kill many pests",
      "The vines are too old to graft"
    ],
    answer: 2,
    region: "washington",
    explanation: "Water comes from the Columbia, Snake, Yakima and Walla Walla rivers."
  },
  {
    id: "nw-69",
    type: "scenario",
    country: "New World",
    question: "Which grape was 27% of Washington's 2024 harvest?",
    options: [
      "Merlot, the Bordeaux red",
      "Syrah, the Rhône red",
      "Chardonnay, the white",
      "Cabernet Sauvignon"
    ],
    answer: 3,
    region: "washington",
    explanation: "Riesling was second at 15%."
  },
  {
    id: "nw-70",
    type: "map",
    country: "New World",
    question: "Which state has the Columbia Valley, Yakima Valley and Red Mountain, in the rain shadow of the Cascades?",
    answer: "washington",
    explanation: "Yakima Valley (1983) was its first AVA."
  },
  {
    id: "nw-71",
    type: "scenario",
    country: "New World",
    question: "What do the Finger Lakes do for vines?",
    options: [
      "Moderate winter cold",
      "Add salt to the soil for minerals",
      "Bring heavy rain through summer",
      "Block the wind from the north"
    ],
    answer: 0,
    region: "newYork",
    explanation: "Without the lakes, winters would be colder and riskier for vinifera."
  },
  {
    id: "nw-72",
    type: "scenario",
    country: "New World",
    question: "Which grape is the most planted vinifera in the Finger Lakes?",
    options: [
      "Merlot",
      "Syrah",
      "Zinfandel",
      "Riesling"
    ],
    answer: 3,
    region: "newYork",
    explanation: "It had 832 of 10,790 producing acres in 2024."
  },
  {
    id: "nw-73",
    type: "scenario",
    country: "New World",
    question: "How are Finger Lakes vines protected in winter?",
    options: [
      "Wrapped in plastic from the top",
      "Planted in pots indoors",
      "Mounded soil, multiple trunks",
      "Sprayed with salt and water"
    ],
    answer: 2,
    region: "newYork",
    explanation: "Growers also train spare trunks as insurance."
  },
  {
    id: "nw-74",
    type: "map",
    country: "New World",
    question: "Which eastern state, with Seneca and Cayuga lakes, has the Finger Lakes AVA?",
    answer: "newYork",
    explanation: "The AVA was established in 1982."
  },
  {
    id: "nw-75",
    type: "scenario",
    country: "New World",
    question: "At what temperature is Ontario Icewine picked?",
    options: [
      "Below -8 °C",
      "Below 0 °C",
      "Below -25 °C",
      "Below 10 °C"
    ],
    answer: 0,
    region: "ontario",
    explanation: "The juice must be at least 35 degrees Brix, and Vidal is the one hybrid exception."
  },
  {
    id: "nw-76",
    type: "scenario",
    country: "New World",
    question: "What share of local grapes does a Niagara Peninsula wine need?",
    options: [
      "100% from the region",
      "At least 85%",
      "50% from the region",
      "At least 70% from Ontario"
    ],
    answer: 1,
    region: "ontario",
    explanation: "A sub-appellation needs 100% from it."
  },
  {
    id: "nw-77",
    type: "scenario",
    country: "New World",
    question: "What delays bud-break on the Niagara Peninsula in spring?",
    options: [
      "The warm lake",
      "A cold wind off the Rockies",
      "The winter-cooled lake",
      "Snow cover on the vines"
    ],
    answer: 2,
    region: "ontario",
    explanation: "In autumn, lake breezes extend the season."
  },
  {
    id: "nw-78",
    type: "map",
    country: "New World",
    question: "Which Canadian province, with Niagara Peninsula, Beamsville Bench and Icewine from Vidal, has three designated viticultural areas?",
    answer: "ontario",
    explanation: "VQA Ontario means 100% Ontario grapes."
  },
  {
    id: "nw-79",
    type: "scenario",
    country: "New World",
    question: "Why is irrigation essential in the Okanagan?",
    options: [
      "It is a desert with no mountains",
      "It is hit by monsoon rains",
      "It is far from any lake",
      "The Coast Mountains' rain shadow"
    ],
    answer: 3,
    region: "britishColumbia",
    explanation: "Osoyoos gets about 318 mm and Kelowna about 415 mm."
  },
  {
    id: "nw-80",
    type: "scenario",
    country: "New World",
    question: "What is the minimum for each pressing of BC Icewine?",
    options: [
      "32 degrees Brix",
      "22 degrees Brix",
      "26 degrees Brix",
      "10 degrees Brix"
    ],
    answer: 0,
    region: "britishColumbia",
    explanation: "The tank average must be at least 35, with 100 g/L of sugar at bottling."
  },
  {
    id: "nw-81",
    type: "scenario",
    country: "New World",
    question: "How many of British Columbia's 12 sub-geographical indications are in the Okanagan?",
    options: [
      "2",
      "11",
      "6",
      "All 12"
    ],
    answer: 1,
    region: "britishColumbia",
    explanation: "The Okanagan is home to 11 of the 12, including Naramata Bench and Okanagan Falls, and it is the largest of BC's regions."
  },
  {
    id: "nw-82",
    type: "map",
    country: "New World",
    question: "Which western Canadian province has the Okanagan Valley, in the rain shadow of the Coast Mountains?",
    answer: "britishColumbia",
    explanation: "It has 11 sub-GIs, including Naramata Bench."
  },
  {
    id: "nw-83",
    type: "scenario",
    country: "New World",
    question: "What cools Elim, in the Cape Agulhas district?",
    options: [
      "Strong summer winds",
      "Snow melt from the mountains in spring",
      "Warm dry winds blowing from the Karoo desert",
      "Heavy cloud that stays all through the summer"
    ],
    answer: 0,
    region: "southAfrica",
    explanation: "Elim is known for Sauvignon Blanc, Sémillon and Shiraz."
  },
  {
    id: "pt-28",
    type: "scenario",
    country: "Portugal",
    question: "What must Bucelas DOC wine be?",
    options: [
      "White, 75% Arinto or more",
      "Red, 75% Ramisco or more",
      "Rosé, 75% Touriga or more",
      "Sparkling, 75% Baga or more"
    ],
    answer: 0,
    region: "lisboa",
    explanation: "Rabo-de-Ovelha and Esgana-Cão can make up to 25% together."
  },
  {
    id: "pt-29",
    type: "scenario",
    country: "Portugal",
    question: "Why is Colares unusual?",
    options: [
      "Vines in sand, on own roots",
      "Vines grown on high terraces of slate",
      "Vines trained high up trees for shade",
      "Vines grown under glass in winter"
    ],
    answer: 0,
    region: "lisboa",
    explanation: "The sand kept phylloxera away, and cuttings are pushed down into the clay beneath."
  },
  {
    id: "pt-30",
    type: "scenario",
    country: "Portugal",
    question: "What is the red grape of Colares?",
    options: [
      "Baga",
      "Ramisco",
      "Castelão",
      "Alfrocheiro"
    ],
    answer: 1,
    region: "lisboa",
    explanation: "Colares red is about 80% Ramisco, and it is tannic with high acidity."
  },
  {
    id: "pt-31",
    type: "scenario",
    country: "Portugal",
    question: "What protects Colares vines from sea winds?",
    options: [
      "Rows of tall pine trees",
      "Glass greenhouses",
      "Cane palisades",
      "Rubber netting over the rows"
    ],
    answer: 2,
    region: "lisboa",
    explanation: "Strong, humid sea winds blow in from the Atlantic."
  },
  {
    id: "pt-32",
    type: "scenario",
    country: "Portugal",
    question: "What do Bucelas vines grow on?",
    options: [
      "Pure granite sand soils",
      "Black volcanic soils",
      "Deep alluvial river soils",
      "Caeiras, soils from marl"
    ],
    answer: 3,
    region: "lisboa",
    explanation: "The soils come from marls and hard limestones, and the yield cap is 70 hl/ha."
  },
  {
    id: "pt-33",
    type: "map",
    country: "Portugal",
    question: "Which Atlantic region, with Bucelas, Colares and Óbidos, has an Arinto-led white DOC and a sand-grown red DOC?",
    answer: "lisboa",
    explanation: "Colares was demarcated in 1908."
  },
  {
    id: "nw-84",
    type: "scenario",
    country: "New World",
    question: "What is Laurelwood soil in Oregon made of?",
    options: [
      "Basalt and loess",
      "Marine sediment alone",
      "River gravel and sand",
      "Black volcanic ash alone"
    ],
    answer: 0,
    region: "oregon",
    explanation: "It is fine and silty, with no rocks, and up to 100 feet deep."
  },
  {
    id: "nw-85",
    type: "scenario",
    country: "New World",
    question: "Which AVA was Washington's first?",
    options: [
      "Walla Walla Valley",
      "Yakima Valley",
      "Red Mountain",
      "Columbia Valley"
    ],
    answer: 1,
    region: "washington",
    explanation: "It was designated in 1983, and Columbia Valley followed in 1984."
  },
  {
    id: "nw-86",
    type: "scenario",
    country: "New World",
    question: "Which Washington AVA has about 5 inches of rain and almost only reds?",
    options: [
      "Red Mountain",
      "Yakima Valley",
      "Puget Sound",
      "Walla Walla Valley"
    ],
    answer: 0,
    region: "washington",
    explanation: "It was designated in 2001."
  },
  {
    id: "nw-87",
    type: "scenario",
    country: "New World",
    question: "Which two lakes have their own sub-AVAs in the Finger Lakes?",
    options: [
      "Erie and Ontario",
      "Huron and Michigan",
      "Cayuga and Seneca",
      "Champlain and George"
    ],
    answer: 2,
    region: "newYork",
    explanation: "Cayuga Lake dates from 1988 and Seneca Lake from 2003."
  },
  {
    id: "nw-88",
    type: "scenario",
    country: "New World",
    question: "How many sub-appellations does the Niagara Peninsula have?",
    options: [
      "Two",
      "Four",
      "Twenty",
      "Ten"
    ],
    answer: 3,
    region: "ontario",
    explanation: "A sub-appellation wine must be 100% from it."
  },
  {
    id: "es-124",
    type: "scenario",
    country: "Spain",
    question: "How long must Calatayud Superior spend in oak?",
    options: [
      "At least 36 months",
      "At least 6 months",
      "No time in oak at all",
      "At least 5 years"
    ],
    answer: 1,
    region: "calatayud",
    explanation: "It needs at least 85% Garnacha Tinta from vines over 50 years old."
  },
  {
    id: "es-125",
    type: "scenario",
    country: "Spain",
    question: "In what year was Cariñena's Estatuto de la Vid approved?",
    options: [
      "1696",
      "1066",
      "1932",
      "1989"
    ],
    answer: 0,
    region: "carinena",
    explanation: "It was approved in the town of Cariñena."
  },
  {
    id: "es-126",
    type: "scenario",
    country: "Spain",
    question: "How many hours of clear sun does Yecla get in a year?",
    options: [
      "About 800",
      "About 1,200",
      "About 1,800",
      "Over 3,000"
    ],
    answer: 3,
    region: "yecla",
    explanation: "It also gets only about 300 mm of rain."
  },
  {
    id: "it-63",
    type: "scenario",
    country: "Italy",
    question: "What kind of wine is Cannellino di Frascati?",
    options: [
      "A sweet wine",
      "A dry sparkling wine",
      "A dry red wine",
      "A fortified wine"
    ],
    answer: 0,
    region: "lazio",
    explanation: "It became a DOCG in 2011, along with Frascati Superiore."
  },
  {
    id: "es-127",
    type: "scenario",
    country: "Spain",
    question: "Which red grape is native to Utiel-Requena and the Valencia hills?",
    options: [
      "Mencía",
      "Monastrell",
      "Bobal",
      "Tempranillo"
    ],
    answer: 2,
    region: "valencia",
    explanation: "It is vigorous, drought-resistant and best on high, cool-night sites."
  },
  {
    id: "de-42",
    type: "scenario",
    country: "Germany",
    question: "Which German grape is a cross of Trollinger and Riesling?",
    options: [
      "Kerner",
      "Scheurebe",
      "Dornfelder",
      "Müller-Thurgau"
    ],
    answer: 0,
    region: "pfalz",
    explanation: "It is robust and frost-hardy, with lively acidity and a slight muscat note."
  },
  {
    id: "it-64",
    type: "scenario",
    country: "Italy",
    question: "What is Schiava called in Alto Adige?",
    options: [
      "Lagrein",
      "Vernatsch",
      "Teroldego",
      "Marzemino"
    ],
    answer: 1,
    region: "trentinoAltoAdige",
    explanation: "In Württemberg the same grape is called Trollinger."
  },
  {
    id: "it-65",
    type: "scenario",
    country: "Italy",
    question: "Which Friulian red is a slow ripener that needs plenty of warmth and sun?",
    options: [
      "Refosco",
      "Pinot Nero",
      "Lagrein",
      "Schiava"
    ],
    answer: 0,
    region: "friuli",
    explanation: "It is deep in colour, full-bodied and high in acidity."
  },
  {
    id: "at-18",
    type: "scenario",
    country: "Austria",
    question: "Which Austrian cross has Saint Laurent as one of its parents?",
    options: [
      "Grüner Veltliner",
      "Welschriesling",
      "Müller-Thurgau",
      "Zweigelt"
    ],
    answer: 3,
    region: "niederosterreich",
    explanation: "Zweigelt is Saint Laurent crossed with Blaufränkisch."
  },
  {
    id: "pt-34",
    type: "scenario",
    country: "Portugal",
    question: "Which red grape of southern Portugal likes hot climates and dry, sandy soils?",
    options: [
      "Baga",
      "Alfrocheiro",
      "Castelão",
      "Tinta Roriz"
    ],
    answer: 2,
    region: "lisboa",
    explanation: "The best old-vine wines age well, though it rarely loses a rustic edge."
  },
  {
    id: "pt-35",
    type: "scenario",
    country: "Portugal",
    question: "How many vines per hectare must new Bucelas plantings have?",
    options: [
      "At least 3,300",
      "At least 500",
      "At least 1,000",
      "At least 10,000"
    ],
    answer: 0,
    region: "lisboa",
    explanation: "The vines must be low-trained, as bush vines or on low cordons."
  },
  {
    id: "pt-36",
    type: "scenario",
    country: "Portugal",
    question: "What is the maximum yield for Bucelas DOC?",
    options: [
      "20 hl/ha",
      "70 hl/ha",
      "200 hl/ha",
      "120 hl/ha"
    ],
    answer: 1,
    region: "lisboa",
    explanation: "The regional Vinho Regional Lisboa allows up to 200 hl/ha."
  },
  {
    id: "pt-37",
    type: "scenario",
    country: "Portugal",
    question: "What is the maximum yield for Vinho Regional Lisboa?",
    options: [
      "200 hl/ha",
      "100 hl/ha",
      "70 hl/ha",
      "55 hl/ha"
    ],
    answer: 0,
    region: "lisboa",
    explanation: "The wine institute may raise it by up to a quarter in a given year."
  },
  {
    id: "pt-38",
    type: "scenario",
    country: "Portugal",
    question: "How long must Bucelas be aged before sale?",
    options: [
      "At least 6 years in oak",
      "No ageing is required",
      "8 months, 2 in bottle",
      "At least 3 years, 1 in bottle"
    ],
    answer: 2,
    region: "lisboa",
    explanation: "Bucelas must also have at least 4.0 g/L of fixed acidity."
  },
  {
    id: "de-43",
    type: "scenario",
    country: "Germany",
    question: "How many Grosslagen (collective sites) does the Nahe have?",
    options: [
      "One",
      "Twenty",
      "Seven",
      "Seventy"
    ],
    answer: 2,
    region: "nahe",
    explanation: "The Nahe is one Bereich, Nahetal."
  },
  {
    id: "de-44",
    type: "scenario",
    country: "Germany",
    question: "How many districts does Baden have?",
    options: [
      "Two",
      "Four",
      "Fourteen",
      "Nine"
    ],
    answer: 3,
    region: "baden",
    explanation: "Baden is the third-largest German region."
  },
  {
    id: "de-45",
    type: "scenario",
    country: "Germany",
    question: "What share of Franken's vineyard is white?",
    options: [
      "About 83%",
      "About 30%",
      "About 50%",
      "About 65%"
    ],
    answer: 0,
    region: "franken",
    explanation: "Silvaner covered 1,536 ha in 2025."
  },
  {
    id: "de-46",
    type: "scenario",
    country: "Germany",
    question: "How many districts does Rheinhessen have?",
    options: [
      "One",
      "Three",
      "Seven",
      "Twelve"
    ],
    answer: 1,
    region: "rheinhessen",
    explanation: "They are commonly named Bingen, Nierstein and Wonnegau."
  },
  {
    id: "es-128",
    type: "scenario",
    country: "Spain",
    question: "What farming rule applies to DO Penedès grapes from the 2025 vintage on?",
    options: [
      "They must be certified organic",
      "They must be hand-harvested",
      "They must come from bush vines",
      "They must be dry-farmed"
    ],
    answer: 0,
    region: "penedes",
    explanation: "The DO rules make organic certification mandatory from the 2025 vintage."
  },
  {
    id: "es-129",
    type: "scenario",
    country: "Spain",
    question: "What is the maximum yield for white grapes in DO Penedès?",
    options: [
      "6,000 kg/ha",
      "9,000 kg/ha",
      "12,000 kg/ha",
      "20,000 kg/ha"
    ],
    answer: 2,
    region: "penedes",
    explanation: "Red grapes are held lower, at 9,000 kg/ha."
  },
  {
    id: "es-130",
    type: "scenario",
    country: "Spain",
    question: "What is the maximum yield for red grapes in DO Penedès?",
    options: [
      "9,000 kg/ha",
      "5,000 kg/ha",
      "12,000 kg/ha",
      "15,000 kg/ha"
    ],
    answer: 0,
    region: "penedes",
    explanation: "White grapes are allowed 12,000 kg/ha."
  },
  {
    id: "es-131",
    type: "scenario",
    country: "Spain",
    question: "Which local white grapes make up the core of DO Penedès, as they do in Cava?",
    options: [
      "Verdejo, Viura and Albariño",
      "Xarel·lo, Macabeo and Parellada",
      "Garnacha Blanca, Godello and Airén",
      "Palomino, Moscatel and Pedro Ximénez"
    ],
    answer: 1,
    region: "penedes",
    explanation: "Chardonnay, Sauvignon Blanc and others are also authorised."
  },
  {
    id: "es-132",
    type: "scenario",
    country: "Spain",
    question: "What do the sub-zone names on a Penedès label, such as Costers de l'Anoia, require?",
    options: [
      "Organic vines, all grapes from that sub-zone",
      "Grapes only from vines more than fifty years old",
      "Hand harvesting into small boxes at dawn only",
      "Wine aged for at least twelve months in oak"
    ],
    answer: 0,
    region: "penedes",
    explanation: "There are ten optional sub-zone names, and the grapes must all come from the named sub-zone."
  },
  {
    id: "es-133",
    topic: "sparkling",
    type: "scenario",
    country: "Spain",
    question: "How long must Penedès quality sparkling wine spend from bottling to disgorgement?",
    options: [
      "At least 9 months",
      "At least 30 months",
      "At least 15 months",
      "At least 5 years"
    ],
    answer: 2,
    region: "penedes",
    explanation: "This is made by the traditional method, with the second fermentation in the bottle."
  },
  {
    id: "es-134",
    topic: "sparkling",
    type: "scenario",
    country: "Spain",
    question: "What is different about Penedès ancestral sparkling wine?",
    options: [
      "It is made in a large closed tank",
      "No sugar or must is added",
      "It is sweetened with grape spirit",
      "It is never left to age on its lees"
    ],
    answer: 1,
    region: "penedes",
    explanation: "The first fermentation is slowed so enough natural sugar remains, and the bottle fermentation uses that."
  },
  {
    id: "es-135",
    topic: "sparkling",
    type: "scenario",
    country: "Spain",
    question: "What must the label say on an undisgorged ancestral Penedès sparkling wine?",
    options: [
      "No degollado",
      "Brut Nature",
      "Gran Reserva",
      "Vino de Mas"
    ],
    answer: 0,
    region: "penedes",
    explanation: "It means the wine is sold with its lees still in the bottle."
  },
  {
    id: "es-136",
    topic: "sparkling",
    type: "scenario",
    country: "Spain",
    question: "Which Penedès sparkling label must come from the producer's own organic vineyards and be vintage-dated?",
    options: [
      "Cava de Paraje Calificado",
      "Clàssic Penedès",
      "Corpinnat",
      "Vino de Mas"
    ],
    answer: 1,
    region: "penedes",
    explanation: "The producer must also disgorge on site and show the disgorgement date. Corpinnat is a separate private mark."
  },
  {
    id: "es-137",
    type: "scenario",
    country: "Spain",
    question: "Which grape is called Ull de Llebre in Penedès?",
    options: [
      "Tempranillo",
      "Cabernet Franc",
      "Sumoi Tinto",
      "Pinot Noir"
    ],
    answer: 0,
    region: "penedes",
    explanation: "The name means hare's eye in Catalan."
  },
  {
    id: "es-138",
    type: "scenario",
    country: "Spain",
    question: "How long must a Penedès red Crianza be aged in total?",
    options: [
      "24 months, 6 in oak",
      "12 months, 3 in oak",
      "18 months, 12 in oak",
      "36 months, 12 in oak"
    ],
    answer: 0,
    region: "penedes",
    explanation: "The oak vessels may hold up to 330 litres."
  },
  {
    id: "es-139",
    type: "scenario",
    country: "Spain",
    question: "How long must a Penedès red Reserva be aged in total?",
    options: [
      "24 months, 6 in oak",
      "48 months, 18 in oak",
      "36 months, 12 in oak",
      "60 months, 24 in oak"
    ],
    answer: 2,
    region: "penedes",
    explanation: "A Gran Reserva red needs 60 months, 24 of them in oak."
  },
  {
    id: "es-140",
    type: "scenario",
    country: "Spain",
    question: "How much oak ageing does a Penedès red Gran Reserva need?",
    options: [
      "6 months",
      "24 months",
      "12 months",
      "36 months"
    ],
    answer: 1,
    region: "penedes",
    explanation: "The total ageing is 60 months."
  },
  {
    id: "es-141",
    type: "scenario",
    country: "Spain",
    question: "What is the minimum alcohol for a still red wine under DO Penedès?",
    options: [
      "11%",
      "9.5%",
      "12.5%",
      "13.5%"
    ],
    answer: 0,
    region: "penedes",
    explanation: "White and rosé wines need at least 9.5%."
  },
  {
    id: "es-142",
    type: "scenario",
    country: "Spain",
    question: "What does the Penedès label term Vino de Mas mean?",
    options: [
      "Wine from the oldest local vines",
      "Wine from a named estate (masia)",
      "Wine made without added sulphur",
      "Wine from the Garraf coast alone"
    ],
    answer: 1,
    region: "penedes",
    explanation: "Gran Vino de Mas also exists, and both have yields 15% below the general limit."
  },
  {
    id: "es-143",
    type: "scenario",
    country: "Spain",
    question: "How many optional sub-zone names can a DO Penedès label use?",
    options: [
      "Ten",
      "Three",
      "Five",
      "Twenty"
    ],
    answer: 0,
    region: "penedes",
    explanation: "They include Alts d'Ancosa, Marina del Garraf, Massís del Garraf and Turons de Vilafranca."
  },
  {
    id: "es-144",
    type: "scenario",
    country: "Spain",
    question: "Which Penedès sub-zones cover the Garraf area?",
    options: [
      "Alts d'Ancosa and Conca del Foix",
      "Marina del Garraf and Massís del Garraf",
      "Turons de Vilafranca and Vall Bitlles-Anoia",
      "Costers de Lavernó and Muntanyes d'Ordal"
    ],
    answer: 1,
    region: "penedes",
    explanation: "One is the coastal part and the other the limestone massif behind it."
  },
  {
    id: "es-145",
    type: "scenario",
    country: "Spain",
    question: "Which range of hills runs from Montserrat to Montmell through the Penedès?",
    options: [
      "The Prelittoral Range",
      "The Sierra de Guadarrama range",
      "The Pyrenees",
      "The Montsant massif ridge"
    ],
    answer: 0,
    region: "penedes",
    explanation: "The other two physical units are the Garraf massif and the Prelittoral Depression."
  },
  {
    id: "es-146",
    type: "scenario",
    country: "Spain",
    question: "Why can Penedès still wine and sparkling base wine keep freshness in a warm Mediterranean climate?",
    options: [
      "Almost all vines grow below sea level on flat ground",
      "Rainfall is above 2,000 mm a year, all in summer",
      "Vines climb from the coast to 800 m",
      "The soils are pure slate that stays cold all year"
    ],
    answer: 2,
    region: "penedes",
    explanation: "Cooler inland sites hold acidity, while the coastal plain is warm and dry."
  },
  {
    id: "es-147",
    type: "scenario",
    country: "Spain",
    question: "Which town is the centre of the Penedès DO?",
    options: [
      "Sitges, a seaside resort town",
      "Vilafranca del Penedès",
      "Figueres, near the French border",
      "Reus, in Tarragona province"
    ],
    answer: 1,
    region: "penedes",
    explanation: "Sant Sadurní d'Anoia, to the north, is the centre of Cava."
  },
  {
    id: "es-148",
    topic: "sparkling",
    type: "scenario",
    country: "Spain",
    question: "Clàssic Penedès needs at least 15 months of ageing. What is the Cava minimum for Cava de Guarda?",
    options: [
      "3 months",
      "30 months",
      "9 months",
      "36 months"
    ],
    answer: 2,
    region: "penedes",
    explanation: "Clàssic Penedès asks for more time, and also bans non-vintage wines."
  },
  {
    id: "es-149",
    topic: "sparkling",
    type: "scenario",
    country: "Spain",
    question: "Can a Clàssic Penedès producer buy in wine to make the sparkling base?",
    options: [
      "No, every step is done on its own premises",
      "Yes, from any other DO in Catalonia or Aragon",
      "Yes, but only for up to half of the volume made",
      "Yes, if the bought wine is also certified organic"
    ],
    answer: 0,
    region: "penedes",
    explanation: "The wine must also be vintage-dated, with the disgorgement date on the label."
  },
  {
    id: "es-150",
    topic: "sparkling",
    type: "scenario",
    country: "Spain",
    question: "What is Corpinnat?",
    options: [
      "A private mark of growers who left Cava",
      "A DO for still wine from the Garraf massif",
      "A sparkling category inside Clàssic Penedès rules",
      "A Cava de Paraje Calificado single estate"
    ],
    answer: 0,
    region: "penedes",
    explanation: "It is not a DO, and the Penedès DO's own sparkling rules are separate from it."
  },
  {
    id: "fr-64",
    type: "scenario",
    country: "France",
    question: "How many grape names does the Châteauneuf-du-Pape rule book list, counting colour variants separately?",
    options: [
      "Eighteen",
      "Only five",
      "Only eight",
      "Over thirty"
    ],
    answer: 0,
    region: "rhoneSouth",
    explanation: "The traditional figure is thirteen, which groups colour variants of Grenache, Clairette and Piquepoul together."
  },
  {
    id: "fr-65",
    type: "scenario",
    country: "France",
    question: "What is the maximum yield for Châteauneuf-du-Pape?",
    options: [
      "20 hl/ha",
      "35 hl/ha",
      "50 hl/ha",
      "65 hl/ha"
    ],
    answer: 1,
    region: "rhoneSouth",
    explanation: "The appellation is lost above 36 hl/ha, or above 42 hl/ha when the extra is sorted out."
  },
  {
    id: "fr-66",
    type: "scenario",
    country: "France",
    question: "What is the minimum natural alcohol for Châteauneuf-du-Pape?",
    options: [
      "12.5%",
      "10.5%",
      "11%",
      "14%"
    ],
    answer: 0,
    region: "rhoneSouth",
    explanation: "This is a rule for the grapes as harvested, before any fermentation."
  },
  {
    id: "fr-67",
    type: "scenario",
    country: "France",
    question: "How must Châteauneuf-du-Pape grapes be harvested?",
    options: [
      "By hand, with machines banned",
      "By machine only, at night",
      "By hand or machine, as the grower likes",
      "By machine, with hand sorting afterwards"
    ],
    answer: 0,
    region: "rhoneSouth",
    explanation: "Sorting the grapes is also compulsory, in the vineyard or the cellar."
  },
  {
    id: "fr-68",
    type: "scenario",
    country: "France",
    question: "Is the embossed bottle with the tiara and crossed keys a rule of the Châteauneuf-du-Pape appellation?",
    options: [
      "Yes, it is compulsory for every bottle",
      "Yes, but only for the white wine",
      "No, it is the growers' own trademark",
      "No, it is a rule of the wider Rhône instead"
    ],
    answer: 2,
    region: "rhoneSouth",
    explanation: "It dates from 1937, and the appellation's rule book does not make it compulsory."
  },
  {
    id: "fr-69",
    type: "scenario",
    country: "France",
    question: "Which colour of wine may Tavel be?",
    options: [
      "Red and rosé",
      "White and rosé",
      "Red, white and rosé",
      "Rosé only"
    ],
    answer: 3,
    region: "rhoneSouth",
    explanation: "The rule book reserves the appellation for still rosé wines."
  },
  {
    id: "fr-70",
    type: "scenario",
    country: "France",
    question: "What is the minimum share of Grenache in Gigondas?",
    options: [
      "50%",
      "20%",
      "30%",
      "80%"
    ],
    answer: 0,
    region: "rhoneSouth",
    explanation: "Syrah and Mourvèdre together must reach at least 15%."
  },
  {
    id: "fr-71",
    type: "scenario",
    country: "France",
    question: "In Côtes du Rhône reds and rosés, what is the minimum Grenache share, except north of Montélimar?",
    options: [
      "10%",
      "30%",
      "50%",
      "70%"
    ],
    answer: 1,
    region: "rhoneSouth",
    explanation: "Syrah and Mourvèdre together must reach at least 20%."
  },
  {
    id: "fr-72",
    type: "scenario",
    country: "France",
    question: "How does Côtes du Rhône-Villages differ from basic Côtes du Rhône?",
    options: [
      "A lower yield, more Grenache",
      "It allows only white grapes and no reds",
      "It has no limit at all on its yield",
      "It must come from north of Montélimar only"
    ],
    answer: 0,
    region: "rhoneSouth",
    explanation: "The yield is 44 hl/ha against 51, and Grenache must be at least 40% against 30%."
  },
  {
    id: "fr-73",
    type: "scenario",
    country: "France",
    question: "What is the maximum yield for basic Côtes du Rhône?",
    options: [
      "25 hl/ha",
      "35 hl/ha",
      "51 hl/ha",
      "90 hl/ha"
    ],
    answer: 2,
    region: "rhoneSouth",
    explanation: "Côtes du Rhône-Villages is held lower, at 44 hl/ha."
  },
  {
    id: "fr-74",
    type: "scenario",
    country: "France",
    question: "What is the minimum Mourvèdre share in a red Bandol?",
    options: [
      "50%",
      "15%",
      "30%",
      "85%"
    ],
    answer: 0,
    region: "provence",
    explanation: "The maximum is 95%. A Bandol rosé needs only 20%."
  },
  {
    id: "fr-75",
    type: "scenario",
    country: "France",
    question: "What is the maximum yield for Bandol?",
    options: [
      "25 hl/ha",
      "40 hl/ha",
      "60 hl/ha",
      "85 hl/ha"
    ],
    answer: 1,
    region: "provence",
    explanation: "Bandol grapes must also be picked by hand."
  },
  {
    id: "fr-76",
    type: "scenario",
    country: "France",
    question: "What are the 'restanques' of Bandol?",
    options: [
      "Dry-stone terraces on the hillsides",
      "Wind breaks of cypress trees",
      "Underground cellars cut in limestone",
      "Stone huts used by the pickers"
    ],
    answer: 0,
    region: "provence",
    explanation: "The terraces hold the thin soil and face the sea."
  },
  {
    id: "fr-77",
    type: "scenario",
    country: "France",
    question: "Which white grape must make up at least half of a white Bandol?",
    options: [
      "Viognier",
      "Chenin Blanc",
      "Clairette",
      "Muscat"
    ],
    answer: 2,
    region: "provence",
    explanation: "Clairette must be between 50% and 95% of a white Bandol."
  },
  {
    id: "fr-78",
    type: "scenario",
    country: "France",
    question: "How many ways of making rosé does the Côtes de Provence rule book allow?",
    options: [
      "Four, among them bleeding and direct pressing",
      "Only one, direct pressing with no skin contact",
      "Only one, bleeding off a tank of red wine",
      "None, it is made by blending red and white wine"
    ],
    answer: 0,
    region: "provence",
    explanation: "Direct pressing is only one of four allowed methods."
  },
  {
    id: "fr-79",
    type: "scenario",
    country: "France",
    question: "Which colour makes up about two thirds of the vineyard area of Cassis?",
    options: [
      "White",
      "Red",
      "Rosé",
      "Orange"
    ],
    answer: 0,
    region: "provence",
    explanation: "Cassis is one of the few Provence appellations where white leads."
  },
  {
    id: "fr-80",
    type: "scenario",
    country: "France",
    question: "How many sun hours a year do the Bandol, Cassis and Palette rule books give?",
    options: [
      "About 1,500",
      "About 3,000",
      "About 2,000",
      "About 4,000"
    ],
    answer: 1,
    region: "provence",
    explanation: "Rainfall is about 650 to 670 mm a year, and the mistral blows through."
  },
  {
    id: "fr-81",
    type: "scenario",
    country: "France",
    question: "What is the maximum yield for Coteaux d'Aix-en-Provence?",
    options: [
      "60 hl/ha",
      "30 hl/ha",
      "40 hl/ha",
      "90 hl/ha"
    ],
    answer: 0,
    region: "provence",
    explanation: "Côtes de Provence is lower, at 55 hl/ha for the plain appellation."
  },
  {
    id: "fr-82",
    type: "scenario",
    country: "France",
    question: "What is the maximum yield for the plain Côtes de Provence appellation?",
    options: [
      "25 hl/ha",
      "35 hl/ha",
      "55 hl/ha",
      "80 hl/ha"
    ],
    answer: 2,
    region: "provence",
    explanation: "The named zones such as Sainte-Victoire and Fréjus are held to 50 hl/ha."
  },
  {
    id: "fr-83",
    type: "scenario",
    country: "France",
    question: "Does the Les Baux-de-Provence rule book require organic farming?",
    options: [
      "No, it only bans herbicide on the plot",
      "Yes, every vineyard must be certified organic",
      "Yes, but only for the red wines made there",
      "No, it bans every kind of spraying in the vineyard"
    ],
    answer: 0,
    region: "provence",
    explanation: "The 2024 text bans herbicide use, not all synthetic treatments."
  },
  {
    id: "fr-84",
    type: "scenario",
    country: "France",
    question: "In red Vacqueyras, what is the minimum share of Grenache?",
    options: [
      "50%",
      "10%",
      "25%",
      "75%"
    ],
    answer: 0,
    region: "rhoneSouth",
    explanation: "Syrah and Mourvèdre together must reach at least 20%."
  },
  {
    id: "fr-85",
    type: "scenario",
    country: "France",
    question: "Which three colours may Lirac be?",
    options: [
      "Red only",
      "Red, white and rosé",
      "Red and rosé only",
      "White and rosé only"
    ],
    answer: 1,
    region: "rhoneSouth",
    explanation: "Tavel, its neighbour across the river, is rosé only."
  },
  {
    id: "fr-86",
    type: "scenario",
    country: "France",
    question: "What are the galets roulés of Châteauneuf-du-Pape?",
    options: [
      "Rounded stones over red clay",
      "Windblown dunes of sand",
      "Layers of black slate",
      "Chalk cliffs above the river"
    ],
    answer: 0,
    region: "rhoneSouth",
    explanation: "The rule book's own description is of rounded stones in a red clay matrix."
  },
  {
    id: "fr-87",
    type: "scenario",
    country: "France",
    question: "Which pair of Côtes du Rhône-Villages names is for red wine only?",
    options: [
      "Sablet and Séguret, say",
      "Valréas and Visan, say",
      "Nyons and Plan de Dieu",
      "Roaix and Rochegude, say"
    ],
    answer: 2,
    region: "rhoneSouth",
    explanation: "Nyons and Plan de Dieu are red only. Sablet, Séguret, Valréas, Visan, Roaix and Rochegude may be white, red or rosé."
  },
  {
    id: "fr-88",
    type: "scenario",
    country: "France",
    question: "How many Grand Cru sites does the Alsace Grand Cru rule book list?",
    options: [
      "51",
      "12",
      "33",
      "70"
    ],
    answer: 0,
    region: "alsace",
    explanation: "The Grand Cru rules name each site as its own appellation."
  },
  {
    id: "fr-89",
    type: "scenario",
    country: "France",
    question: "What is the maximum yield for white Alsace Grand Cru?",
    options: [
      "30 hl/ha",
      "50 hl/ha",
      "65 hl/ha",
      "90 hl/ha"
    ],
    answer: 1,
    region: "alsace",
    explanation: "Red Grand Cru is held lower, at 40 hl/ha, and plain AOC Alsace white is allowed 80 hl/ha."
  },
  {
    id: "fr-90",
    type: "scenario",
    country: "France",
    question: "Which red grape is allowed in a few Alsace Grand Cru sites such as Hengst, Vorbourg and Kirchberg de Barr?",
    options: [
      "Pinot Noir",
      "Gamay",
      "Syrah",
      "Cabernet Franc"
    ],
    answer: 0,
    region: "alsace",
    explanation: "Every other Grand Cru is white."
  },
  {
    id: "fr-91",
    type: "scenario",
    country: "France",
    question: "What minimum must weight do Gewurztraminer and Pinot Gris need for Alsace Vendange Tardive?",
    options: [
      "170 g/L of sugar",
      "195 g/L of sugar",
      "270 g/L of sugar",
      "306 g/L of sugar"
    ],
    answer: 2,
    region: "alsace",
    explanation: "Sélection de Grains Nobles needs 306 g/L, and Riesling and Muscat need 244 g/L for Vendange Tardive."
  },
  {
    id: "fr-92",
    topic: "sparkling",
    type: "scenario",
    country: "France",
    question: "How long must Crémant d'Alsace stay on its lees?",
    options: [
      "At least 9 months",
      "At least 3 months",
      "At least 24 months",
      "At least 5 years"
    ],
    answer: 0,
    region: "alsace",
    explanation: "It is not sold before 12 months from bottling, and the grapes are hand-picked and pressed whole."
  },
  {
    id: "fr-93",
    type: "scenario",
    country: "France",
    question: "Do the Beaujolais cru rule books require harvesting by hand?",
    options: [
      "No, machines are allowed, with sorting compulsory",
      "Yes, by hand only",
      "Yes, by hand for the north and machine for the south",
      "No, and no sorting is needed either"
    ],
    answer: 0,
    region: "beaujolais",
    explanation: "Many people assume the crus must be hand-picked, but the rule books allow machines."
  },
  {
    id: "fr-94",
    type: "scenario",
    country: "France",
    question: "What is the maximum yield for each of the ten Beaujolais crus?",
    options: [
      "35 hl/ha",
      "56 hl/ha",
      "45 hl/ha",
      "75 hl/ha"
    ],
    answer: 1,
    region: "beaujolais",
    explanation: "Plain Beaujolais red may go to 60 hl/ha."
  },
  {
    id: "fr-95",
    type: "scenario",
    country: "France",
    question: "What is the minimum vine density for the Beaujolais crus?",
    options: [
      "6,000 per hectare",
      "2,000 vines per hectare",
      "3,500 vines per hectare",
      "10,000 vines per hectare"
    ],
    answer: 0,
    region: "beaujolais",
    explanation: "Plain Beaujolais needs at least 5,000."
  },
  {
    id: "fr-96",
    type: "scenario",
    country: "France",
    question: "Which is a Beaujolais cru?",
    options: [
      "Moulin-à-Vent",
      "Pouilly-Fuissé",
      "Mâcon-Villages",
      "Givry"
    ],
    answer: 0,
    region: "beaujolais",
    explanation: "The ten crus are Brouilly, Côte de Brouilly, Chénas, Chiroubles, Fleurie, Juliénas, Morgon, Moulin-à-Vent, Régnié and Saint-Amour."
  },
  {
    id: "fr-97",
    type: "scenario",
    country: "France",
    question: "What colour of Beaujolais may be made from grapes other than Gamay?",
    options: [
      "Red, which may be Pinot Noir only",
      "Rosé, which is Syrah only",
      "White, which is Chardonnay only",
      "None, all Beaujolais is Gamay"
    ],
    answer: 2,
    region: "beaujolais",
    explanation: "Red and rosé are Gamay, with only a small allowance of other grapes."
  },
  {
    id: "fr-98",
    type: "scenario",
    country: "France",
    question: "Which grape makes up all of a Cornas?",
    options: [
      "Viognier",
      "Syrah",
      "Marsanne",
      "Grenache"
    ],
    answer: 1,
    region: "rhoneNorth",
    explanation: "The rule book says the wines come from Syrah alone."
  },
  {
    id: "fr-99",
    type: "scenario",
    country: "France",
    question: "What is the maximum share of Viognier in a Côte-Rôtie vineyard?",
    options: [
      "20%",
      "5%",
      "50%",
      "80%"
    ],
    answer: 0,
    region: "rhoneNorth",
    explanation: "Syrah must be at least 80% of the holding."
  },
  {
    id: "fr-100",
    type: "scenario",
    country: "France",
    question: "Which grape makes all of Condrieu and Château-Grillet?",
    options: [
      "Marsanne",
      "Roussanne",
      "Viognier",
      "Chardonnay"
    ],
    answer: 2,
    region: "rhoneNorth",
    explanation: "Both are 100% Viognier and both are hand-picked."
  },
  {
    id: "fr-101",
    type: "scenario",
    country: "France",
    question: "What is the maximum yield for Côte-Rôtie?",
    options: [
      "40 hl/ha",
      "25 hl/ha",
      "55 hl/ha",
      "70 hl/ha"
    ],
    answer: 0,
    region: "rhoneNorth",
    explanation: "Côte-Rôtie is hand-picked from terraces, at least 6,000 vines per hectare."
  },
  {
    id: "fr-102",
    type: "scenario",
    country: "France",
    question: "What is the minimum Syrah share in Hermitage and Crozes-Hermitage red?",
    options: [
      "50% of the holding",
      "85% of the holding",
      "60% of the holding",
      "100% of the holding"
    ],
    answer: 1,
    region: "rhoneNorth",
    explanation: "Saint-Joseph asks for at least 90%, and the rest may be Marsanne or Roussanne."
  },
  {
    id: "fr-103",
    topic: "fortified",
    type: "scenario",
    country: "France",
    question: "How is Banyuls made sweet?",
    options: [
      "Neutral spirit is added mid-fermentation",
      "Late-harvested grapes dried on straw mats",
      "Noble rot concentrates the grape sugar",
      "Sugar is stirred in after fermentation"
    ],
    answer: 0,
    region: "languedocRoussillon",
    explanation: "Neutral grape spirit of at least 96% is added during fermentation, which stops it and keeps the grape sugar. Counted as pure alcohol, it is 5 to 10% of the must volume."
  },
  {
    id: "fr-104",
    topic: "fortified",
    type: "scenario",
    country: "France",
    question: "Counted as pure alcohol, how much of the must's volume is the spirit added to Banyuls and Rivesaltes?",
    options: [
      "5 to 10%",
      "1 to 2%",
      "15 to 20%",
      "40 to 50%"
    ],
    answer: 0,
    region: "languedocRoussillon",
    explanation: "It is added during fermentation, which stops it and keeps the grape sugar."
  },
  {
    id: "fr-105",
    topic: "sparkling",
    type: "scenario",
    country: "France",
    question: "Which grape must make up at least 30% of the blend in white Crémant de Limoux?",
    options: [
      "Mauzac",
      "Pinot Noir",
      "Chardonnay",
      "Chenin Blanc"
    ],
    answer: 2,
    region: "languedocRoussillon",
    explanation: "In the wine, Chardonnay must be at least 30% and Chenin at least 10%, together 60 to 90%. Mauzac and Pinot Noir together may be at most 40%, and Mauzac at most 20%."
  },
  {
    id: "fr-106",
    type: "scenario",
    country: "France",
    question: "Which colours may Pic Saint-Loup be?",
    options: [
      "Red only",
      "White only",
      "Red, white and rosé",
      "Red and rosé only"
    ],
    answer: 3,
    region: "languedocRoussillon",
    explanation: "Syrah must be at least 50% of a red."
  },
  {
    id: "fr-107",
    type: "scenario",
    country: "France",
    question: "What is the share of Carignan and Grenache that Fitou needs, each?",
    options: [
      "At least 5% each",
      "At least 20% each",
      "At least 45% each",
      "Exactly half each"
    ],
    answer: 1,
    region: "languedocRoussillon",
    explanation: "Fitou is red only, and the main grapes together must reach 60%."
  },
  {
    id: "fr-108",
    type: "scenario",
    country: "France",
    question: "What is the maximum yield for Sauternes?",
    options: [
      "25 hl/ha",
      "10 hl/ha",
      "45 hl/ha",
      "60 hl/ha"
    ],
    answer: 0,
    region: "bordeaux",
    explanation: "The grapes are picked by hand in several passes, from vines with noble rot."
  },
  {
    id: "fr-109",
    type: "scenario",
    country: "France",
    question: "What minimum sugar must Sauternes grapes reach in the must?",
    options: [
      "144 g/L",
      "221 g/L",
      "170 g/L",
      "340 g/L"
    ],
    answer: 1,
    region: "bordeaux",
    explanation: "The finished wine must still reach at least 12% alcohol, with a minimum of 15% potential."
  },
  {
    id: "fr-110",
    type: "scenario",
    country: "France",
    question: "How many red grapes does the Médoc rule book permit?",
    options: [
      "Two",
      "Four",
      "Six",
      "Nine"
    ],
    answer: 2,
    region: "bordeaux",
    explanation: "Cabernet Franc, Cabernet Sauvignon, Carmenère, Merlot, Malbec and Petit Verdot."
  },
  {
    id: "fr-111",
    type: "scenario",
    country: "France",
    question: "How long is a Saint-Émilion Grand Cru Classé classification valid?",
    options: [
      "Ten years",
      "One year",
      "Fifty years",
      "For ever"
    ],
    answer: 0,
    region: "bordeaux",
    explanation: "The classification covers Grand Cru Classé and Premier Grand Cru Classé."
  },
  {
    id: "fr-112",
    type: "scenario",
    country: "France",
    question: "What is the maximum yield for Haut-Médoc and Médoc?",
    options: [
      "30 hl/ha",
      "55 hl/ha",
      "40 hl/ha",
      "75 hl/ha"
    ],
    answer: 1,
    region: "bordeaux",
    explanation: "The ceiling is 65 hl/ha, and Saint-Émilion Grand Cru is held lower, at 46 hl/ha."
  },
  {
    id: "it-66",
    type: "scenario",
    country: "Italy",
    question: "How much Corvina and Corvinone together must go into Amarone della Valpolicella?",
    options: [
      "45 to 95%",
      "10 to 25%",
      "100%",
      "5 to 30%"
    ],
    answer: 0,
    region: "veneto",
    explanation: "Rondinella makes up 5 to 30% of the blend."
  },
  {
    id: "it-67",
    type: "scenario",
    country: "Italy",
    question: "What natural alcohol must the dried grapes for Amarone reach?",
    options: [
      "At least 9%",
      "At least 14%",
      "At least 11%",
      "At least 17%"
    ],
    answer: 1,
    region: "veneto",
    explanation: "The finished wine must also reach at least 14% alcohol."
  },
  {
    id: "it-68",
    type: "scenario",
    country: "Italy",
    question: "How long must an Amarone Riserva age, counted from 1 November of the harvest?",
    options: [
      "At least 1 year",
      "At least 2 years",
      "At least 4 years",
      "At least 10 years"
    ],
    answer: 2,
    region: "veneto",
    explanation: "The rules set no minimum number of drying days, only the alcohol the dried grapes must reach."
  },
  {
    id: "it-69",
    type: "scenario",
    country: "Italy",
    question: "What is the maximum yield for Amarone della Valpolicella?",
    options: [
      "12 tonnes per hectare",
      "4 tonnes per hectare",
      "7 tonnes per hectare",
      "25 tonnes per hectare"
    ],
    answer: 0,
    region: "veneto",
    explanation: "The fresh grapes must have at least 11% natural alcohol before drying."
  },
  {
    id: "it-70",
    topic: "sparkling",
    type: "scenario",
    country: "Italy",
    question: "Which method is used to make Prosecco DOC spumante?",
    options: [
      "Tank fermentation (autoclave)",
      "Second fermentation in each bottle",
      "Carbon dioxide pumped into a still wine",
      "Fermentation in small oak barrels"
    ],
    answer: 0,
    region: "veneto",
    explanation: "Frizzante may also be made by bottle fermentation."
  },
  {
    id: "fr-113",
    type: "scenario",
    country: "France",
    question: "What is the minimum share of Tannat in Madiran?",
    options: [
      "60%",
      "15%",
      "30%",
      "90%"
    ],
    answer: 0,
    region: "southWest",
    explanation: "The accessory grapes are Cabernet Franc, Cabernet Sauvignon, Fer and Manseng Noir."
  },
  {
    id: "fr-114",
    type: "scenario",
    country: "France",
    question: "What is the maximum yield for Madiran?",
    options: [
      "30 hl/ha",
      "40 hl/ha",
      "55 hl/ha",
      "85 hl/ha"
    ],
    answer: 2,
    region: "southWest",
    explanation: "The hard ceiling is 60 hl/ha."
  },
  {
    id: "fr-115",
    type: "scenario",
    country: "France",
    question: "What minimum grape sugar must Monbazillac reach?",
    options: [
      "221 g/L, about 14% potential alcohol",
      "144 g/L, about 9% potential alcohol",
      "170 g/L, about 10% potential alcohol",
      "300 g/L, about 18% potential alcohol"
    ],
    answer: 0,
    region: "southWest",
    explanation: "Sélection de grains nobles needs 255 g/L, about 17%."
  },
  {
    id: "fr-116",
    type: "scenario",
    country: "France",
    question: "What is the maximum yield for Monbazillac?",
    options: [
      "40 hl/ha",
      "25 hl/ha",
      "60 hl/ha",
      "90 hl/ha"
    ],
    answer: 0,
    region: "southWest",
    explanation: "The grapes are picked over-ripe, with or without noble rot."
  },
  {
    id: "fr-117",
    type: "scenario",
    country: "France",
    question: "Which grapes are the principal ones for Jurançon?",
    options: [
      "Sémillon and Sauvignon Blanc",
      "Gros and Petit Manseng",
      "Chenin Blanc and Mauzac",
      "Viognier and Marsanne"
    ],
    answer: 1,
    region: "southWest",
    explanation: "The wines may be dry (sec), sweet (moelleux) or late-harvest (vendanges tardives)."
  },
  {
    id: "de-47",
    type: "scenario",
    country: "Germany",
    question: "Which part of the Mosel runs from Riveris to Ruwer near Trier and is the smallest?",
    options: [
      "The Saar",
      "The Middle Mosel",
      "The Ruwer",
      "The Lower Mosel"
    ],
    answer: 2,
    region: "mosel",
    explanation: "The Saar runs from Serrig to Konz."
  },
  {
    id: "de-48",
    type: "scenario",
    country: "Germany",
    question: "About how steep are half of the Mosel's vineyards?",
    options: [
      "Almost flat, under 3 degrees",
      "Over 30 degrees",
      "A gentle 5 degrees or so",
      "A uniform 10 degrees or so"
    ],
    answer: 1,
    region: "mosel",
    explanation: "The slopes are terraced slate, and some plots reach 70 degrees."
  },
  {
    id: "de-49",
    type: "scenario",
    country: "Germany",
    question: "What protects the Rheingau vineyards from cold winds?",
    options: [
      "The Black Forest ranges",
      "The Eifel volcanoes",
      "The Harz mountains",
      "The Taunus Hills"
    ],
    answer: 3,
    region: "rheingau",
    explanation: "Riesling does best on dry, stony, south-facing slopes."
  },
  {
    id: "at-19",
    type: "scenario",
    country: "Austria",
    question: "Which three tiers does the Südsteiermark DAC have?",
    options: [
      "Kabinett, Spätlese and Auslese wines",
      "Classic, Reserve and Grand Reserve wines",
      "Gebietswein, Ortswein, Riedenwein",
      "Village, Premier Cru and Grand Cru wines"
    ],
    answer: 2,
    region: "steiermark",
    explanation: "Ortswein names a village and Riedenwein a registered single vineyard."
  },
  {
    id: "at-20",
    type: "scenario",
    country: "Austria",
    question: "What is Riedenwein in Südsteiermark DAC?",
    options: [
      "Wine from a registered vineyard",
      "Wine blended from the whole region",
      "Wine from one named village alone",
      "A sparkling wine made by tank method"
    ],
    answer: 0,
    region: "steiermark",
    explanation: "Ortswein is from a named village, and up to 15% may come from neighbouring municipalities."
  },
  {
    id: "nw-89",
    type: "scenario",
    country: "New World",
    question: "At what air temperature or colder must grapes be frozen on the vine for BC Icewine?",
    options: [
      "-8°C",
      "-4°C",
      "-2°C",
      "-15°C"
    ],
    answer: 0,
    region: "britishColumbia",
    explanation: "The grapes must freeze naturally and be pressed frozen. Freezing them with refrigeration is not allowed."
  },
  {
    id: "nw-90",
    type: "scenario",
    country: "New World",
    question: "What is the minimum residual sugar for BC Icewine?",
    options: [
      "100 g/L",
      "30 g/L",
      "60 g/L",
      "180 g/L"
    ],
    answer: 0,
    region: "britishColumbia",
    explanation: "Chaptalisation is not allowed, and the grapes must be grown and pressed in the same geographical indication."
  },
  {
    id: "nw-91",
    type: "scenario",
    country: "New World",
    question: "How much of a BC VQA wine must come from BC-grown grapes?",
    options: [
      "All of it",
      "Three quarters",
      "Half",
      "Nine tenths"
    ],
    answer: 0,
    region: "britishColumbia",
    explanation: "Imported grapes or juice cannot be in a VQA wine."
  },
  {
    id: "nw-92",
    type: "scenario",
    country: "New World",
    question: "How is the Okanagan Valley geographical indication drawn?",
    options: [
      "Along the Okanagan watershed",
      "Along the lake shoreline",
      "Along the Canada-US border",
      "Along the 500 m contour line"
    ],
    answer: 0,
    region: "britishColumbia",
    explanation: "The Similkameen Valley is likewise defined by its river watershed."
  },
  {
    id: "it-71",
    type: "scenario",
    country: "Italy",
    question: "What is the minimum share of Verdicchio in Verdicchio dei Castelli di Jesi DOC?",
    options: [
      "85%",
      "60%",
      "70%",
      "100%"
    ],
    answer: 0,
    region: "marche",
    explanation: "Up to 15% of other white grapes is allowed. The text read is an older copy, amended to 2011."
  },
  {
    id: "it-72",
    type: "scenario",
    country: "Italy",
    question: "What is the minimum natural alcohol for Castelli di Jesi Classico Superiore?",
    options: [
      "11.5%",
      "9.5%",
      "10.5%",
      "12.5%"
    ],
    answer: 0,
    region: "marche",
    explanation: "The plain and Classico wines need 10.5%. The text read is an older copy, amended to 2011."
  },
  {
    id: "es-151",
    type: "scenario",
    country: "Spain",
    question: "What must a Bierzo 'Vino de Villa' be made from?",
    options: [
      "Grapes from one named village",
      "One grape variety only",
      "One estate with its own winery",
      "Vines over 80 years old"
    ],
    answer: 0,
    region: "bierzo",
    explanation: "A 'Vino de Paraje' narrows this to one named plot, with a bigger yield cut."
  },
  {
    id: "es-152",
    type: "scenario",
    country: "Spain",
    question: "What is the maximum yield for Mencía in Bierzo?",
    options: [
      "5,000 kg/ha",
      "11,000 kg/ha",
      "7,000 kg/ha",
      "15,000 kg/ha"
    ],
    answer: 1,
    region: "bierzo",
    explanation: "The rule book gives the same figure for Godello. It is about 81 hl/ha."
  },
  {
    id: "es-153",
    type: "scenario",
    country: "Spain",
    question: "What is the altitude range of Jumilla's vineyards?",
    options: [
      "0 to 150 m",
      "150 to 250 m",
      "320 to 900 m",
      "1,000 to 1,500 m"
    ],
    answer: 2,
    region: "jumilla",
    explanation: "The rule book calls the climate continental, with about 300 mm of rain and summer highs above 40°C."
  },
  {
    id: "es-154",
    type: "scenario",
    country: "Spain",
    question: "What is the yield cap for red grapes in Jumilla's non-trellised vineyards?",
    options: [
      "5,000 kg/ha",
      "2,000 kg/ha",
      "8,750 kg/ha",
      "12,000 kg/ha"
    ],
    answer: 0,
    region: "jumilla",
    explanation: "Intensive, trellised vineyards may crop 8,750 kg/ha."
  },
  {
    id: "es-155",
    type: "scenario",
    country: "Spain",
    question: "How long must a Valdepeñas red Crianza age in total?",
    options: [
      "12 months",
      "24 months",
      "18 months",
      "36 months"
    ],
    answer: 1,
    region: "valdepenas",
    explanation: "At least 6 months must be in oak of 330 L or less. The 2019 rule book was read; a renewal may be under way."
  },
  {
    id: "es-156",
    type: "scenario",
    country: "Spain",
    question: "How long must a Valdepeñas red Reserva age in total?",
    options: [
      "24 months",
      "48 months",
      "36 months",
      "60 months"
    ],
    answer: 2,
    region: "valdepenas",
    explanation: "At least 12 months must be in oak of 330 L or less, and the rest in bottle."
  },
  {
    id: "es-157",
    type: "scenario",
    country: "Spain",
    question: "How many months of oak does a Valdepeñas Gran Reserva need?",
    options: [
      "At least 18",
      "At least 6",
      "At least 12",
      "At least 36"
    ],
    answer: 0,
    region: "valdepenas",
    explanation: "Its total ageing is 60 months, the rest in bottle."
  },
  {
    id: "es-158",
    type: "scenario",
    country: "Spain",
    question: "What is the maximum yield for red grapes in Cariñena?",
    options: [
      "8,500 kg/ha",
      "4,000 kg/ha",
      "6,000 kg/ha",
      "12,000 kg/ha"
    ],
    answer: 0,
    region: "carinena",
    explanation: "Whites may crop 9,000 kg/ha. The rule book read is the 2025 order."
  },
  {
    id: "es-159",
    type: "scenario",
    country: "Spain",
    question: "At what altitudes do Cariñena's vineyards sit?",
    options: [
      "0 to 100 m",
      "400 to 800 m",
      "100 to 250 m",
      "900 to 1,300 m"
    ],
    answer: 1,
    region: "carinena",
    explanation: "The rule book describes a semi-arid, tending-to-continental climate dried by the cierzo wind."
  },
  {
    id: "es-160",
    type: "scenario",
    country: "Spain",
    question: "What is the maximum yield for red grapes in Calatayud?",
    options: [
      "3,500 kg/ha",
      "5,000 kg/ha",
      "7,000 kg/ha",
      "10,000 kg/ha"
    ],
    answer: 2,
    region: "calatayud",
    explanation: "Calatayud Superior is held to an average of 3,500 kg/ha. The rule book read is the 2024 order."
  },
  {
    id: "es-161",
    type: "scenario",
    country: "Spain",
    question: "How long must a DO Catalunya red Gran Reserva age in total?",
    options: [
      "At least five years",
      "At least two years",
      "At least three years",
      "At least eight years"
    ],
    answer: 0,
    region: "catalunya",
    explanation: "It needs at least 24 months in oak of 330 L or less. The text read is the April 2026 version, and a further change is proposed."
  },
  {
    id: "es-162",
    type: "scenario",
    country: "Spain",
    question: "What is the maximum yield for white grapes in DO Catalunya?",
    options: [
      "7,000 kg/ha",
      "12,000 kg/ha",
      "9,000 kg/ha",
      "16,000 kg/ha"
    ],
    answer: 1,
    region: "catalunya",
    explanation: "Reds are capped at 10,000 kg/ha."
  },
  {
    id: "it-73",
    type: "scenario",
    country: "Italy",
    question: "What is the minimum share of Garganega in Soave DOC?",
    options: [
      "70%",
      "50%",
      "85%",
      "100%"
    ],
    answer: 0,
    region: "veneto",
    explanation: "Trebbiano di Soave and Chardonnay make up most of the rest. The text read is the 2009 version."
  },
  {
    id: "it-74",
    type: "scenario",
    country: "Italy",
    question: "What is the maximum yield for Soave Superiore DOCG?",
    options: [
      "7 t/ha",
      "12 t/ha",
      "10 t/ha",
      "15 t/ha"
    ],
    answer: 2,
    region: "veneto",
    explanation: "Plain Soave DOC may crop 15 t/ha. The text read is the 2011 version."
  },
  {
    id: "it-75",
    type: "scenario",
    country: "Italy",
    question: "What is the minimum residual sugar in Recioto di Soave?",
    options: [
      "70 g/L",
      "10 g/L",
      "30 g/L",
      "150 g/L"
    ],
    answer: 0,
    region: "veneto",
    explanation: "The grapes are dried and must reach 14% natural alcohol. The text read is the 2019 version."
  },
  {
    id: "it-76",
    type: "scenario",
    country: "Italy",
    question: "When can Soave Superiore Riserva first be sold?",
    options: [
      "After 1 April the next year",
      "After 1 November the next year",
      "After 1 December the same year",
      "After 1 February the next year"
    ],
    answer: 1,
    region: "veneto",
    explanation: "Soave Superiore without Riserva is released after 1 April. The text read is the 2011 version."
  },
  {
    id: "fr-118",
    type: "scenario",
    country: "France",
    question: "What is the minimum share of Cot (Malbec) in a Cahors wine?",
    options: [
      "100%",
      "50%",
      "85%",
      "70%"
    ],
    answer: 3,
    region: "southWest",
    explanation: "The rest can only be Merlot and Tannat. The cahier read is the 2011 version; later amendments are unchecked."
  },
  {
    id: "fr-119",
    type: "scenario",
    country: "France",
    question: "What is the hard yield ceiling for Cahors?",
    options: [
      "90 hl/ha",
      "45 hl/ha",
      "75 hl/ha",
      "60 hl/ha"
    ],
    answer: 3,
    region: "southWest",
    explanation: "The base yield is 50 hl/ha. Destemming is compulsory."
  },
  {
    id: "fr-120",
    type: "scenario",
    country: "France",
    question: "Which are the only accessory grapes allowed in Cahors?",
    options: [
      "Syrah and Grenache",
      "Merlot and Tannat",
      "Négrette and Fer Servadou",
      "Cabernet Franc and Cabernet Sauvignon"
    ],
    answer: 1,
    region: "southWest",
    explanation: "Cot is the principal grape. 'Auxerrois' is a local name that does not appear in the cahier."
  },
  {
    id: "fr-121",
    type: "scenario",
    country: "France",
    question: "What minimum natural alcohol must Saussignac reach?",
    options: [
      "13%",
      "15%",
      "17%",
      "21%"
    ],
    answer: 2,
    region: "southWest",
    explanation: "Saussignac is sweet white only, hand-picked in several passes, with no chaptalisation. The cahier read is the 2017 version."
  },
  {
    id: "fr-122",
    type: "scenario",
    country: "France",
    question: "What is the maximum yield for Saussignac?",
    options: [
      "70 hl/ha",
      "40 hl/ha",
      "55 hl/ha",
      "25 hl/ha"
    ],
    answer: 3,
    region: "southWest",
    explanation: "The hard ceiling is 30 hl/ha."
  },
  {
    id: "fr-123",
    type: "scenario",
    country: "France",
    question: "Which style is Bergerac AOC not made in?",
    options: [
      "Still dry white",
      "Sweet white",
      "Still red wine",
      "Still rosé wine"
    ],
    answer: 1,
    region: "southWest",
    explanation: "Sweet whites are sold as Saussignac, Monbazillac and others. The cahier read is the 2021 version."
  },
  {
    id: "fr-124",
    type: "scenario",
    country: "France",
    question: "What is Pécharmant made as?",
    options: [
      "Still red and rosé",
      "Sweet white only",
      "Still red only",
      "Still red and sparkling"
    ],
    answer: 2,
    region: "southWest",
    explanation: "No single grape may be more than 65% of the blend. The cahier read is the 2018 version."
  },
  {
    id: "it-77",
    type: "scenario",
    country: "Italy",
    question: "What is the minimum share of Malvasia in Frascati DOC?",
    options: [
      "90%",
      "30%",
      "50%",
      "70%"
    ],
    answer: 3,
    region: "lazio",
    explanation: "Bellone, Bombino, Greco and Trebbiano can make up the rest. The text read is an AIS copy; later amendments are unchecked."
  },
  {
    id: "it-78",
    type: "scenario",
    country: "Italy",
    question: "What is the maximum grape yield for Frascati DOC?",
    options: [
      "8 t/ha",
      "14 t/ha",
      "11 t/ha",
      "18 t/ha"
    ],
    answer: 1,
    region: "lazio",
    explanation: "Frascati Superiore DOCG is held to 11 t/ha."
  },
  {
    id: "it-79",
    type: "scenario",
    country: "Italy",
    question: "What is the minimum residual sugar in Cannellino di Frascati?",
    options: [
      "4 g/L",
      "15 g/L",
      "35 g/L",
      "90 g/L"
    ],
    answer: 2,
    region: "lazio",
    explanation: "The grapes are picked late and may be partly dried. Its ageing minimum could not be confirmed."
  },
  {
    id: "it-80",
    type: "scenario",
    country: "Italy",
    question: "What is the maximum grape yield for Superiore di Cartizze?",
    options: [
      "16 t/ha",
      "9 t/ha",
      "13.5 t/ha",
      "12 t/ha"
    ],
    answer: 3,
    region: "veneto",
    explanation: "Plain Conegliano Valdobbiadene is held to 13.5 t/ha. The text read is a 2018 translation."
  },
  {
    id: "it-81",
    type: "scenario",
    country: "Italy",
    question: "How many municipalities make up the Conegliano Valdobbiadene zone?",
    options: [
      "24",
      "6",
      "9",
      "15"
    ],
    answer: 3,
    region: "veneto",
    explanation: "Cartizze is a small sub-zone in Valdobbiadene. The text read is a 2018 translation."
  },
  {
    id: "it-82",
    topic: "sparkling",
    type: "scenario",
    country: "Italy",
    question: "How must grapes for a Conegliano Valdobbiadene Rive be harvested?",
    options: [
      "In one early pass",
      "By machine at night",
      "By machine or by hand",
      "By hand only"
    ],
    answer: 3,
    region: "veneto",
    explanation: "Rive are sparkling wines labelled with the village name and the vintage year."
  },
  {
    id: "de-50",
    type: "scenario",
    country: "Germany",
    question: "What is the minimum must weight for a Mosel Kabinett, for most varieties?",
    options: [
      "60 °Oechsle",
      "85 °Oechsle",
      "93 °Oechsle",
      "73 °Oechsle"
    ],
    answer: 3,
    region: "mosel",
    explanation: "Elbling needs 70. The figures are from the Mosel product specification, which is a very recent consolidated text."
  },
  {
    id: "de-51",
    type: "scenario",
    country: "Germany",
    question: "What is the minimum must weight for a Mosel Beerenauslese?",
    options: [
      "110 °Oechsle",
      "88 °Oechsle",
      "130 °Oechsle",
      "150 °Oechsle"
    ],
    answer: 0,
    region: "mosel",
    explanation: "Eiswein needs the same 110. Trockenbeerenauslese needs 150."
  },
  {
    id: "de-52",
    type: "scenario",
    country: "Germany",
    question: "What is the minimum must weight for a Mosel Riesling Spätlese?",
    options: [
      "65 °Oechsle",
      "80 °Oechsle",
      "95 °Oechsle",
      "110 °Oechsle"
    ],
    answer: 1,
    region: "mosel",
    explanation: "Other white grapes need 85. Riesling Auslese needs 88."
  },
  {
    id: "de-53",
    type: "scenario",
    country: "Germany",
    question: "What is the maximum yield for the Mosel?",
    options: [
      "60 hl/ha",
      "90 hl/ha",
      "125 hl/ha",
      "160 hl/ha"
    ],
    answer: 2,
    region: "mosel",
    explanation: "The Prädikat minimums are set in each region's own specification, not in one national table."
  },
  {
    id: "es-163",
    type: "scenario",
    country: "Spain",
    question: "What must a bottle labelled 'Rías Baixas Albariño' contain?",
    options: [
      "100% Albariño",
      "At least 70% Albariño",
      "At least 85% Albariño",
      "At least 50% Albariño"
    ],
    answer: 0,
    region: "riasBaixas",
    explanation: "The pliego read is the July 2024 version."
  },
  {
    id: "es-164",
    type: "scenario",
    country: "Spain",
    question: "How many subzones does Rías Baixas have?",
    options: [
      "Two",
      "Three",
      "Eight",
      "Five"
    ],
    answer: 3,
    region: "riasBaixas",
    explanation: "They are Val do Salnés, Condado do Tea, O Rosal, Ribeira do Ulla and Soutomaior."
  },
  {
    id: "es-165",
    type: "scenario",
    country: "Spain",
    question: "What is the maximum yield for Albariño in Rías Baixas?",
    options: [
      "6,000 kg/ha",
      "12,000 kg/ha",
      "8,000 kg/ha",
      "16,000 kg/ha"
    ],
    answer: 1,
    region: "riasBaixas",
    explanation: "Caíño tinto is held to 10,000 kg/ha."
  },
  {
    id: "es-166",
    type: "scenario",
    country: "Spain",
    question: "What is the base yield cap for red grapes in Priorat?",
    options: [
      "6,000 kg/ha",
      "3,000 kg/ha",
      "9,000 kg/ha",
      "12,000 kg/ha"
    ],
    answer: 0,
    region: "priorat",
    explanation: "Whites may crop 8,000 kg/ha. The pliego read is the November 2021 version."
  },
  {
    id: "es-167",
    type: "scenario",
    country: "Spain",
    question: "How many vilas can name a Priorat 'Vi de Vila'?",
    options: [
      "Three",
      "Six",
      "Twelve",
      "Twenty"
    ],
    answer: 2,
    region: "priorat",
    explanation: "They include Gratallops, Porrera, Poboleda and Torroja."
  },
  {
    id: "es-168",
    type: "scenario",
    country: "Spain",
    question: "How much Cariñena and/or Garnacha must a Priorat Vi de Vila contain?",
    options: [
      "At least 60%",
      "At least 30%",
      "At least 85%",
      "Exactly 100%"
    ],
    answer: 0,
    region: "priorat",
    explanation: "The same minimum applies to Vi de Paratge."
  },
  {
    id: "es-169",
    type: "scenario",
    country: "Spain",
    question: "What is the yield cap for red grapes in a Priorat Vi de Paratge?",
    options: [
      "2,000 kg/ha",
      "6,000 kg/ha",
      "8,000 kg/ha",
      "4,000 kg/ha"
    ],
    answer: 3,
    region: "priorat",
    explanation: "A Vi de Vila red is held to 5,000 kg/ha."
  },
  {
    id: "es-170",
    topic: "fortified",
    type: "scenario",
    country: "Spain",
    question: "How long must a Rueda Dorado age?",
    options: [
      "Four years, two in oak",
      "Two years, none in oak",
      "Six months in oak",
      "One year in bottle"
    ],
    answer: 0,
    region: "rueda",
    explanation: "It is a dry fortified wine of at least 15%. The text read is revision 4 of July 2024."
  },
  {
    id: "es-171",
    type: "scenario",
    country: "Spain",
    question: "How old must the vines be for a 'Gran Vino de Rueda'?",
    options: [
      "Over 10 years",
      "Over 30 years",
      "Over 15 years",
      "Over 60 years"
    ],
    answer: 1,
    region: "rueda",
    explanation: "Yields are held to 6,500 kg/ha, with extraction of no more than 65%."
  },
  {
    id: "es-172",
    type: "scenario",
    country: "Spain",
    question: "What is the yield cap for trellised Verdejo in Rueda?",
    options: [
      "10,000 kg/ha",
      "5,000 kg/ha",
      "7,000 kg/ha",
      "14,000 kg/ha"
    ],
    answer: 0,
    region: "rueda",
    explanation: "Bush-trained Verdejo is held to 8,000 kg/ha."
  },
  {
    id: "gr-18",
    type: "scenario",
    country: "Greece",
    question: "What is the maximum yield for PDO Naoussa?",
    options: [
      "6,000 kg/ha",
      "10,000 kg/ha",
      "14,000 kg/ha",
      "18,000 kg/ha"
    ],
    answer: 1,
    region: "naoussa",
    explanation: "It is 100% Xinomavro. The specification read is the 2011 text, and no later amendment was found."
  },
  {
    id: "gr-20",
    type: "scenario",
    country: "Greece",
    question: "How long must a Nemea Grande Réserve age in total?",
    options: [
      "At least one year",
      "At least two years",
      "At least seven years",
      "At least four years"
    ],
    answer: 3,
    region: "nemea",
    explanation: "It needs 18 months in oak and 18 in bottle. Some wine-education pages give a different figure, but nothing official was found for it."
  },
  {
    id: "hu-18",
    type: "scenario",
    country: "Hungary",
    question: "How many grape varieties must an Egri Bikavér blend contain at least?",
    options: [
      "Four",
      "Two",
      "Three",
      "Seven"
    ],
    answer: 0,
    region: "eger",
    explanation: "Each of the four must be over 5%. The text read is the 2020 amendment; a later one was not read."
  },
  {
    id: "hu-19",
    type: "scenario",
    country: "Hungary",
    question: "What share of an Egri Bikavér must Kékfrankos make up?",
    options: [
      "5 to 10%",
      "70 to 95%",
      "30 to 65%",
      "100%"
    ],
    answer: 2,
    region: "eger",
    explanation: "It must also be the largest part. Turán may not exceed 10%."
  },
  {
    id: "hu-20",
    type: "scenario",
    country: "Hungary",
    question: "How long is the skin contact for a Bikavér Superior, at the least?",
    options: [
      "3 days",
      "8 days",
      "30 days",
      "14 days"
    ],
    answer: 3,
    region: "eger",
    explanation: "Classicus needs 8 days. Superior also needs 12 months in oak."
  },
  {
    id: "pt-39",
    topic: "sparkling",
    type: "scenario",
    country: "Portugal",
    question: "How is sparkling Bairrada made?",
    options: [
      "Tank method, in steel vats",
      "Traditional method",
      "Carbonation, then bottling",
      "One fermentation in cask"
    ],
    answer: 1,
    region: "bairrada",
    explanation: "The text read is the 2011 specification; a 2023 amendment was not read."
  },
  {
    id: "pt-40",
    topic: "sparkling",
    type: "scenario",
    country: "Portugal",
    question: "How long must sparkling Bairrada age before sale?",
    options: [
      "At least nine months",
      "At least three months",
      "At least eighteen months",
      "At least three years"
    ],
    answer: 0,
    region: "bairrada",
    explanation: "The finished wine needs at least 11% alcohol."
  },
  {
    id: "pt-41",
    type: "scenario",
    country: "Portugal",
    question: "Which rock dominates the soils of the Dão?",
    options: [
      "Limestone",
      "Chalk",
      "Granite",
      "Basalt"
    ],
    answer: 2,
    region: "dao",
    explanation: "Some schist outcrops occur. The Dão wine board says about 97% of the soils are granitic."
  },
  {
    id: "nw-93",
    type: "scenario",
    country: "New World",
    question: "How much of a wine labelled Niagara Escarpment must be grown in it?",
    options: [
      "All of it",
      "At least 85%",
      "About one half",
      "About 70 per cent"
    ],
    answer: 1,
    region: "ontario",
    explanation: "The other 15% must come from the Niagara Peninsula. A single sub-appellation such as Four Mile Creek needs 100%."
  },
  {
    id: "nw-94",
    type: "scenario",
    country: "New World",
    question: "How much of an Ontario VQA wine must come from its stated vintage?",
    options: [
      "At least 85%",
      "100%",
      "At least 70%",
      "At least 95%"
    ],
    answer: 0,
    region: "ontario",
    explanation: "The rule is in Ontario Regulation 406/00, read in its July 2026 consolidation."
  },
  {
    id: "nw-95",
    type: "scenario",
    country: "New World",
    question: "What is the minimum residual sugar for Ontario VQA Icewine?",
    options: [
      "30 g/L",
      "60 g/L",
      "180 g/L",
      "100 g/L"
    ],
    answer: 3,
    region: "ontario",
    explanation: "It must come from the grapes' own sugar. Freeze concentration is not allowed."
  },
  {
    id: "pt-42",
    type: "scenario",
    country: "Portugal",
    topic: "fortified",
    question: "How long does a Late Bottled Vintage Port spend in wood before bottling?",
    options: [
      "Two to three years",
      "Four to six years",
      "At least seven years",
      "Ten years on average"
    ],
    answer: 1,
    region: "douro",
    explanation: "LBV is a Ruby from a single year. It is bottled after four to six years in wood. Vintage Port is bottled sooner, after two to three years."
  },
  {
    id: "pt-43",
    type: "scenario",
    country: "Portugal",
    topic: "fortified",
    question: "What is a Colheita Port?",
    options: [
      "A blend of years kept in tank for two years",
      "A single-year Ruby bottled after four years",
      "A one-harvest Tawny, seven years in cask",
      "A one-estate Vintage bottled after two years"
    ],
    answer: 2,
    region: "douro",
    explanation: "Colheita is a Tawny from one harvest. It must age in cask for at least seven years. It ages in wood, unlike Vintage, which ages in bottle."
  },
  {
    id: "pt-44",
    type: "connection",
    country: "Portugal",
    topic: "fortified",
    question: "Roughly how much of a finished Port is the added grape spirit?",
    options: [
      "About a fifth",
      "About a tenth",
      "About a twentieth",
      "About a half"
    ],
    answer: 0,
    region: "douro",
    explanation: "The rules give about 115 litres of spirit to 435 litres of fermenting wine. That makes the spirit about a fifth of the finished Port, which ends at 19 to 22% abv."
  },
  {
    id: "pt-45",
    type: "scenario",
    country: "Portugal",
    topic: "fortified",
    question: "Which Port is a blend of several harvests that must spend three years in bottle and throws a deposit?",
    options: [
      "Colheita",
      "Reserve Tawny",
      "Reserve White",
      "Crusted"
    ],
    answer: 3,
    region: "douro",
    explanation: "Crusted is a blended Port. It must rest at least three years in bottle before sale. The deposit it throws is the crust that gives it its name."
  },
  {
    id: "pt-46",
    type: "connection",
    country: "Portugal",
    topic: "fortified",
    question: "What must a 20 Year Old Tawny show to be approved by the IVDP?",
    options: [
      "Cask records proving every drop is 20 years old",
      "Grapes from one harvest exactly 20 years earlier",
      "A style and character that match the stated age",
      "Twenty years in bottle before it goes on sale"
    ],
    answer: 2,
    region: "douro",
    explanation: "The age on an aged Tawny describes its style. The IVDP tasting panel checks that the wine tastes like a Port of that age. Only Colheita is tied to a single harvest."
  },
  {
    id: "pt-47",
    type: "scenario",
    country: "Portugal",
    topic: "fortified",
    question: "When is a Vintage Port bottled?",
    options: [
      "Two to three years after harvest",
      "Within a year of the harvest",
      "Four to six years after harvest",
      "Seven years after harvest at the soonest"
    ],
    answer: 0,
    region: "douro",
    explanation: "Vintage Port comes from one harvest. It is bottled two to three years later and then ages in bottle. Four to six years in wood describes LBV."
  },
  {
    id: "pt-48",
    type: "connection",
    country: "Portugal",
    topic: "fortified",
    question: "Why did Port houses traditionally age their wine at Vila Nova de Gaia rather than up the Douro?",
    options: [
      "Gaia had the only cooperage able to build Port casks",
      "The law banned any Port from being stored in the valley",
      "Gaia's schist cellars added the nutty flavour of Tawny",
      "Gaia's cellars near the Atlantic are cooler and damper"
    ],
    answer: 3,
    region: "douro",
    explanation: "Gaia sits near the coast, so its lodges stay cooler and damper than the hot inland valley. Wine aged in Douro heat can pick up a cooked taste called the Douro bake."
  },
  {
    id: "pt-49",
    type: "connection",
    country: "Portugal",
    topic: "fortified",
    question: "What does the benefício decide each year?",
    options: [
      "How much of a vineyard's crop may become Port",
      "Which years producers may declare as a Vintage",
      "The date on which the Douro harvest may start",
      "The price the lodges must pay for each grape"
    ],
    answer: 0,
    region: "douro",
    explanation: "The benefício is a yearly quota set by the IVDP. Each vineyard's share depends on its grade, and A is the best."
  },
  {
    id: "pt-50",
    type: "connection",
    country: "Portugal",
    topic: "fortified",
    question: "Why did Symington build robotic lagares to replace foot treading?",
    options: [
      "Robots extract more colour than any human foot can",
      "Foot treading was banned by the IVDP in the 1990s",
      "There were too few workers left to tread",
      "Steel lagares let them skip fortification altogether"
    ],
    answer: 2,
    region: "douro",
    explanation: "The Douro ran short of workers. Symington copied the shape of the granite lagar in steel, and the first units started work at Quinta dos Malvedos in 2000."
  },
  {
    id: "pt-51",
    type: "scenario",
    country: "Portugal",
    topic: "fortified",
    question: "Which White Port is the sweetest style?",
    options: [
      "Extra Dry",
      "Light Dry",
      "Semi-sweet",
      "Lágrima"
    ],
    answer: 3,
    region: "douro",
    explanation: "White Port runs from extra dry to Lágrima, the sweetest. Light Dry White Port is a lower-alcohol style with a minimum of 16.5% abv."
  },
  {
    id: "es-173",
    type: "scenario",
    country: "Spain",
    topic: "fortified",
    question: "What is the minimum average age for any DO Sherry before sale?",
    options: [
      "Six months",
      "One year",
      "Two years",
      "Three years"
    ],
    answer: 2,
    region: "sherry",
    explanation: "The rule text sets a minimum average age of two years. This covers the dry styles and the blended sweet styles. Pedro Ximénez and Moscatel also need at least two years of ageing."
  },
  {
    id: "es-174",
    type: "scenario",
    country: "Spain",
    topic: "fortified",
    question: "A Sherry is labelled VORS. What average age does that guarantee?",
    options: [
      "More than 12 years",
      "More than 15 years",
      "More than 20 years",
      "More than 30 years"
    ],
    answer: 3,
    region: "sherry",
    explanation: "VORS means Very Old Rare Sherry, over 30 years old. VOS means over 20 years. There are also 12-year and 15-year statements."
  },
  {
    id: "es-175",
    type: "scenario",
    country: "Spain",
    topic: "fortified",
    question: "Fino may be aged in any town of the Sherry zone except one. Which?",
    options: [
      "Sanlúcar de Barrameda",
      "El Puerto de Santa María",
      "Jerez de la Frontera",
      "Chiclana de la Frontera"
    ],
    answer: 0,
    region: "sherry",
    explanation: "Flor-aged wine from Sanlúcar de Barrameda is Manzanilla. So Fino is made everywhere else in the zone."
  },
  {
    id: "es-176",
    type: "scenario",
    country: "Spain",
    topic: "fortified",
    question: "What sugar range does the DO set for a Cream Sherry?",
    options: [
      "50 to 115 g/L",
      "115 to 140 g/L",
      "4 to 50 g/L",
      "At least 212 g/L"
    ],
    answer: 1,
    region: "sherry",
    explanation: "Cream has 115 to 140 g/L of sugar. Pale Cream has 50 to under 115 g/L, and Pale Dry 4 to under 50 g/L. Pedro Ximénez needs at least 212 g/L."
  },
  {
    id: "es-177",
    type: "connection",
    country: "Spain",
    topic: "fortified",
    question: "What does 'en rama' on a Sherry label tell you?",
    options: [
      "Aged at least seven years under flor",
      "Made only from one single vineyard",
      "Sweetened with grape must before bottling",
      "Only filtered, nothing else to stabilise"
    ],
    answer: 3,
    region: "sherry",
    explanation: "En rama is reserved for wines given no stabilisation other than filtering. Seven years under flor is Fino Viejo or Manzanilla Pasada."
  },
  {
    id: "es-178",
    type: "scenario",
    country: "Spain",
    topic: "fortified",
    question: "A long-aged Manzanilla shows a golden colour. What minimum average age lets it be called Manzanilla Pasada?",
    options: [
      "Two years",
      "Seven years",
      "Ten years",
      "Twelve years"
    ],
    answer: 1,
    region: "sherry",
    explanation: "Manzanilla Pasada needs an average of at least seven years. The long flor ageing gives it more colour and structure. Fino Viejo is the same idea in the Jerez DO."
  },
  {
    id: "es-179",
    type: "scenario",
    country: "Spain",
    topic: "fortified",
    question: "What minimum sugar does the DO set for a Pedro Ximénez?",
    options: [
      "At least 160 g/L",
      "At least 115 g/L",
      "At least 212 g/L",
      "At least 50 g/L"
    ],
    answer: 2,
    region: "sherry",
    explanation: "Pedro Ximénez needs at least 212 g/L of sugar. At least 85% must come from sun-dried Pedro Ximénez grapes. Moscatel needs at least 160 g/L."
  },
  {
    id: "es-180",
    type: "connection",
    country: "Spain",
    topic: "fortified",
    question: "In the criaderas and solera system, what is the solera itself?",
    options: [
      "The oldest row, from which wine is bottled",
      "The youngest row, topped up with new wine",
      "The vineyard plot the grapes came from",
      "The layer of yeast that floats on the wine"
    ],
    answer: 0,
    region: "sherry",
    explanation: "The solera is the oldest row of casks, and wine for bottling is drawn from it. The criaderas are the younger rows that refill it, each from the next younger row."
  },
  {
    id: "es-181",
    type: "scenario",
    country: "Spain",
    topic: "fortified",
    question: "Which Sherry style needs at least 16% alcohol, rather than 17%?",
    options: [
      "Oloroso",
      "Amontillado",
      "Palo Cortado",
      "Pedro Ximénez"
    ],
    answer: 1,
    region: "sherry",
    explanation: "Amontillado needs 16 to 22%. Oloroso and Palo Cortado need at least 17%. Pedro Ximénez needs at least 15%."
  },
  {
    id: "nw-96",
    type: "connection",
    country: "New World",
    topic: "fortified",
    question: "Which grape makes Rutherglen Muscat?",
    options: [
      "Muscadelle",
      "Muscat Ottonel",
      "Muscat à Petits Grains Rouge",
      "Muscat of Alexandria (Gordo Blanco)"
    ],
    answer: 2,
    region: "australia",
    explanation: "Rutherglen Muscat comes from Muscat à Petits Grains Rouge, known locally as Brown Muscat. Muscadelle makes Topaque."
  },
  {
    id: "nw-97",
    type: "connection",
    country: "New World",
    topic: "fortified",
    question: "Why was Rutherglen Tokay renamed Topaque?",
    options: [
      "To avoid confusion with Hungary's Tokaji",
      "Because producers swapped to Muscadelle",
      "Because the wines became much drier",
      "To match the new Rare classification tier"
    ],
    answer: 0,
    region: "australia",
    explanation: "The name changed to avoid confusion with Hungary's Tokaji. The grape stayed Muscadelle. The change followed Australia's wine agreement with the EU."
  },
  {
    id: "nw-98",
    type: "connection",
    country: "New World",
    topic: "fortified",
    question: "Why are Rutherglen Muscat casks often kept under hot tin roofs?",
    options: [
      "Cool sheds stop the wine oxidising",
      "Heat and evaporation concentrate the wine",
      "The roof keeps winter rain off the casks",
      "Low light keeps the colour pale and bright"
    ],
    answer: 1,
    region: "australia",
    explanation: "Warm storage speeds maturing, and casks lose about 3% a year to evaporation. Both make the wine richer and more concentrated. Casks nearest the roof mature fastest."
  },
  {
    id: "pt-52",
    type: "connection",
    country: "Portugal",
    topic: "fortified",
    question: "Why are many Madeira vines trained on low latada pergolas?",
    options: [
      "To shade the grapes from the summer sun",
      "To limit fungal disease in the humid air",
      "To let machines pass along the terraces",
      "To protect the flowers from spring frost"
    ],
    answer: 1,
    region: "madeira",
    explanation: "Madeira is humid. Pergolas lift the grapes off the ground, where air moves more freely and rot is less likely."
  },
  {
    id: "pt-53",
    type: "scenario",
    country: "Portugal",
    topic: "fortified",
    question: "A bottle is labelled Madeira Sercial. Under the rules, which sweetness must it be?",
    options: [
      "Medium sweet only",
      "Sweet or very sweet",
      "Medium dry only",
      "Dry or extra dry"
    ],
    answer: 3,
    region: "madeira",
    explanation: "The DO rules tie Sercial to dry or extra dry, Verdelho to medium dry, Boal to medium sweet and Malvasia to sweet."
  },
  {
    id: "pt-54",
    type: "connection",
    country: "Portugal",
    topic: "fortified",
    question: "Under the rules, a Madeira labelled Boal (Bual) must be which style?",
    options: [
      "Dry or extra dry",
      "Medium sweet",
      "Medium dry",
      "Sweet"
    ],
    answer: 1,
    region: "madeira",
    explanation: "Boal is medium sweet. It sits between Verdelho (medium dry) and Malvasia (sweet)."
  },
  {
    id: "pt-55",
    type: "scenario",
    country: "Portugal",
    topic: "fortified",
    question: "A producer ages young Madeira by estufagem. What do the rules allow?",
    options: [
      "Up to 50 °C, for at least three months",
      "At least 60 °C, for no more than one month",
      "Up to 40 °C, for at least two years",
      "Any heat, as long as it lasts a year"
    ],
    answer: 0,
    region: "madeira",
    explanation: "Estufagem tanks may not go above 50 °C, and the heating must last at least three months. The wine cannot be sold before 31 October of the second year after the harvest."
  },
  {
    id: "pt-56",
    type: "connection",
    country: "Portugal",
    topic: "fortified",
    question: "Why does an opened bottle of Madeira keep for months?",
    options: [
      "Its high sugar keeps oxygen out of the wine",
      "It is bottled under inert gas after heating",
      "Heat and air have already changed it",
      "Its low alcohol makes it stable once opened"
    ],
    answer: 2,
    region: "madeira",
    explanation: "Madeira is deliberately heated and oxidised as it ages. Fresh air does little further harm, so the wine is almost indestructible."
  },
  {
    id: "pt-57",
    type: "scenario",
    country: "Portugal",
    topic: "fortified",
    question: "A label shows a vintage year, one grape and the word Frasqueira. What must be true?",
    options: [
      "Heated in an estufa, then 5 years in cask",
      "Aged at least 10 years in bottle first",
      "Made from Tinta Negra in a solera",
      "Canteiro-aged 20+ years in cask"
    ],
    answer: 3,
    region: "madeira",
    explanation: "Frasqueira (or Garrafeira) is the top vintage category. It must be made by canteiro, never heated in a tank, with at least 20 years of unbroken cask ageing."
  },
  {
    id: "pt-58",
    type: "connection",
    country: "Portugal",
    topic: "fortified",
    question: "What is the minimum cask ageing for a Madeira Colheita?",
    options: [
      "3 years",
      "5 years",
      "10 years",
      "20 years"
    ],
    answer: 1,
    region: "madeira",
    explanation: "A Colheita is a single-vintage Madeira with at least 5 years in cask. Frasqueira needs at least 20."
  },
  {
    id: "pt-59",
    type: "connection",
    country: "Portugal",
    topic: "fortified",
    question: "What job do Madeira's levadas do for the vineyards?",
    options: [
      "Carry mountain water down to the farms",
      "Drain heavy rain off the terraces",
      "Hold up the terraces with basalt walls",
      "Channel warm air into the canteiro lofts"
    ],
    answer: 0,
    region: "madeira",
    explanation: "Levadas are old irrigation channels. They bring mountain water to farms on the steep terraces (poios), in places from the wetter north to the drier south."
  },
  {
    id: "pt-60",
    type: "scenario",
    country: "Portugal",
    topic: "fortified",
    question: "A Madeira is labelled Special Reserve. What age does that term stand for?",
    options: [
      "5 years old",
      "15 years old",
      "10 years old",
      "20 years old"
    ],
    answer: 2,
    region: "madeira",
    explanation: "Reserve means 5 years, Special Reserve or Old Reserve means 10 years, and Extra Reserve means 15 years."
  },
  {
    id: "pt-61",
    type: "connection",
    country: "Portugal",
    topic: "fortified",
    question: "How is fermentation stopped when making Madeira?",
    options: [
      "Chilling the must and filtering the yeast",
      "Adding grape spirit at about 77% abv",
      "Heating the must in an estufa tank",
      "Adding neutral grape spirit at 96% abv"
    ],
    answer: 3,
    region: "madeira",
    explanation: "Madeira is fortified with neutral spirit of at least 96% abv. Port uses a weaker spirit of about 77%."
  },
  {
    id: "pt-62",
    type: "scenario",
    country: "Portugal",
    topic: "fortified",
    question: "How is a canteiro Madeira aged?",
    options: [
      "Heated in steel tanks for three months",
      "In casks in warm lofts for two years",
      "In glass demijohns out in the open sun",
      "Under flor in a solera near the sea"
    ],
    answer: 1,
    region: "madeira",
    explanation: "Canteiro wine ages slowly in casks in the warm upper floors of the lodges, for at least two years, and is never heated in a tank. It cannot be bottled until it has had three years."
  },
  {
    id: "pt-63",
    type: "map",
    country: "Portugal",
    question: "Which Atlantic island's wines are fortified and then aged in heat, by estufagem or canteiro?",
    answer: "madeira",
    explanation: "Madeira is heated in tanks (estufagem, up to 50 °C) or aged in casks in warm lofts (canteiro), which makes it nutty, high in acid and long-lived."
  },
  {
    id: "fr-125",
    type: "scenario",
    country: "France",
    topic: "fortified",
    question: "What does 'rimage' on a Banyuls label tell you?",
    options: [
      "Aged in oak for at least five years",
      "A red kept from air and bottled young",
      "Made only from white Grenache grapes",
      "Aged outdoors in glass jars for years"
    ],
    answer: 1,
    region: "languedocRoussillon",
    explanation: "Rimage is red Grenache kept away from air. It is aged until 1 May after the harvest, with at least three months in bottle. That keeps its fresh red fruit and kirsch flavours."
  },
  {
    id: "fr-126",
    type: "scenario",
    country: "France",
    topic: "fortified",
    question: "What is the minimum share of Grenache Noir in Banyuls Grand Cru?",
    options: [
      "50%",
      "60%",
      "75%",
      "90%"
    ],
    answer: 2,
    region: "languedocRoussillon",
    explanation: "Banyuls Grand Cru needs at least 75% Grenache Noir. It is red only and spends at least 30 months in wood."
  },
  {
    id: "fr-127",
    type: "scenario",
    country: "France",
    topic: "fortified",
    question: "How is a Maury labelled 'grenat' made?",
    options: [
      "Red Grenache, aged away from air",
      "White grapes, aged in contact with air",
      "Red Grenache, aged in air for 5 years",
      "Muscat grapes, bottled within a year"
    ],
    answer: 0,
    region: "languedocRoussillon",
    explanation: "Grenat is mainly Grenache Noir, kept away from air. It keeps a deep colour and red and black fruit."
  },
  {
    id: "fr-128",
    type: "scenario",
    country: "France",
    topic: "fortified",
    question: "In Banyuls, which grapes make an 'ambré'?",
    options: [
      "Red Grenache Noir only",
      "Carignan and Syrah",
      "Muscat grapes only",
      "White or grey grapes"
    ],
    answer: 3,
    region: "languedocRoussillon",
    explanation: "Ambré is made from white or grey grapes and aged in contact with air, which turns it amber."
  },
  {
    id: "fr-129",
    type: "connection",
    country: "France",
    topic: "fortified",
    question: "Why do some Roussillon producers leave Vin Doux Naturel in glass jars outdoors?",
    options: [
      "So sun and heat build oxidised flavours",
      "To keep the wine fresh, pale and fruity",
      "To let a layer of flor yeast grow on it",
      "To set off a second, sparkling fermentation"
    ],
    answer: 0,
    region: "languedocRoussillon",
    explanation: "The jars are called bonbonnes. Sun and heat age the wine with air, which gives the dried fruit, nut and coffee notes of the oxidative styles."
  },
  {
    id: "fr-130",
    type: "scenario",
    country: "France",
    topic: "fortified",
    question: "Which grape makes Muscat de Beaumes-de-Venise?",
    options: [
      "Muscat of Alexandria only",
      "Muscat Ottonel",
      "Orange Muscat",
      "Muscat à Petits Grains"
    ],
    answer: 3,
    region: "rhoneSouth",
    explanation: "Only Muscat à Petits Grains is allowed, in its white and red forms. Most of the wine is white, fresh and grapey."
  },
  {
    id: "fr-131",
    type: "scenario",
    country: "France",
    topic: "fortified",
    question: "Which of these must keep at least 100 g/L of sugar, not 45 g/L?",
    options: [
      "Banyuls rimage from Roussillon",
      "Maury grenat from Roussillon",
      "Muscat de Beaumes-de-Venise",
      "Rasteau tuilé from the Rhône"
    ],
    answer: 2,
    region: "rhoneSouth",
    explanation: "The Grenache-based styles need at least 45 g/L of sugar. Muscat de Beaumes-de-Venise needs at least 100 g/L. All need at least 15% alcohol."
  },
  {
    id: "fr-132",
    type: "connection",
    country: "France",
    topic: "fortified",
    question: "Which Southern Rhône village makes a Grenache-based Vin Doux Naturel?",
    options: [
      "Gigondas",
      "Rasteau",
      "Vacqueyras",
      "Tavel"
    ],
    answer: 1,
    region: "rhoneSouth",
    explanation: "Rasteau makes VDN as well as dry reds. Its grenat and tuilé styles need at least 75% Grenache Noir."
  },
  {
    id: "it-83",
    type: "scenario",
    country: "Italy",
    topic: "fortified",
    question: "What is the minimum ageing for Marsala Vergine?",
    options: [
      "2 years",
      "4 years",
      "10 years",
      "5 years"
    ],
    answer: 3,
    region: "southernItaly",
    explanation: "Vergine (also called Soleras) needs at least five years in wood. Superiore needs two and Superiore Riserva four. Vergine Stravecchio needs ten."
  },
  {
    id: "it-84",
    type: "scenario",
    country: "Italy",
    topic: "fortified",
    question: "Which Marsala colour is made with cooked must (mosto cotto)?",
    options: [
      "Oro",
      "Ambra",
      "Rubino",
      "All three"
    ],
    answer: 1,
    region: "southernItaly",
    explanation: "Fine and Superiore ambra must contain at least 1% cooked must, which darkens the colour. It is banned in oro and rubino, and Vergine may not use it at all."
  },
  {
    id: "it-85",
    type: "scenario",
    country: "Italy",
    topic: "fortified",
    question: "Which grapes make Marsala Rubino?",
    options: [
      "Nero d'Avola and Perricone",
      "Grillo and Ansonica (Inzolia)",
      "Catarratto and Damaschino",
      "Aglianico and Negroamaro"
    ],
    answer: 0,
    region: "southernItaly",
    explanation: "Rubino comes from black grapes: Perricone (locally Pignatello), Nero d'Avola and Nerello Mascalese. Up to 30% white grapes may be added. Grillo, Catarratto, Inzolia and Damaschino make oro and ambra."
  },
  {
    id: "it-86",
    type: "scenario",
    country: "Italy",
    topic: "fortified",
    question: "How much sugar does a Marsala labelled 'semisecco' have?",
    options: [
      "Under 40 g/L",
      "100 to 150 g/L",
      "40 to 100 g/L",
      "Over 100 g/L"
    ],
    answer: 2,
    region: "southernItaly",
    explanation: "Secco is under 40 g/L of sugar. Semisecco is between 40 and 100 g/L. Dolce is over 100 g/L."
  },
  {
    id: "es-182",
    type: "scenario",
    country: "Spain",
    topic: "sparkling",
    question: "What is the minimum time on the lees for a Cava Reserva today?",
    options: [
      "At least 9 months",
      "At least 12 months",
      "At least 18 months",
      "At least 24 months"
    ],
    answer: 2,
    region: "cava",
    explanation: "Reserva needs at least 18 months on the lees. It was 15 months before the rules changed in January 2022."
  },
  {
    id: "es-183",
    type: "connection",
    country: "Spain",
    topic: "sparkling",
    question: "Which Cava group includes Reserva, Gran Reserva and Paraje Calificado?",
    options: [
      "Cava de Guarda Superior",
      "Cava de Guarda Reserva",
      "Cava de Paraje Selecto",
      "Cava de Crianza Especial"
    ],
    answer: 0,
    region: "cava",
    explanation: "These three form Cava de Guarda Superior, which has stricter vineyard rules. All other Cava is Cava de Guarda."
  },
  {
    id: "es-184",
    type: "scenario",
    country: "Spain",
    topic: "sparkling",
    question: "From the 2025 harvest, what must be true of the vineyards for Cava de Guarda Superior?",
    options: [
      "Picked by hand at night",
      "Grown above 500 metres",
      "Planted over 30 years ago",
      "Certified organic"
    ],
    answer: 3,
    region: "cava",
    explanation: "Guarda Superior vineyards had to be organic or in conversion from 2022. From the 2025 harvest, they must be fully organic."
  },
  {
    id: "es-185",
    type: "scenario",
    country: "Spain",
    topic: "sparkling",
    question: "What is the minimum vine age for grapes used in Cava de Guarda Superior?",
    options: [
      "3 years",
      "5 years",
      "10 years",
      "25 years"
    ],
    answer: 2,
    region: "cava",
    explanation: "Guarda Superior vines must be at least 10 years old. Other Cava can use grapes from the vine's third year."
  },
  {
    id: "es-186",
    type: "connection",
    country: "Spain",
    topic: "sparkling",
    question: "Which of these is a Cava zone outside Catalonia?",
    options: [
      "Comtats de Barcelona",
      "Valle del Ebro",
      "Serra de Mar",
      "Conca del Gaià"
    ],
    answer: 1,
    region: "cava",
    explanation: "Valle del Ebro is a Cava zone with its own subzones, Alto Ebro and Valle del Cierzo. Comtats de Barcelona is the Catalan zone, and Serra de Mar and Conca del Gaià are two of its subzones."
  },
  {
    id: "de-54",
    type: "scenario",
    country: "Germany",
    topic: "sparkling",
    question: "A German sparkling wine is labelled Winzersekt. What must be true?",
    options: [
      "Tank method, from grapes bought across Germany",
      "Bottle-fermented from the estate's own grapes",
      "Made only from Riesling, aged for two years",
      "Carbonated, from imported base wine"
    ],
    answer: 1,
    region: "mosel",
    explanation: "Winzersekt must come from the producer's own grapes and ferment a second time in the bottle. The label must show the estate, the grape and the vintage."
  },
  {
    id: "de-55",
    type: "scenario",
    country: "Germany",
    topic: "sparkling",
    question: "How long must a Winzersekt rest on its lees before disgorging?",
    options: [
      "At least 9 months",
      "At least 3 months",
      "At least 18 months",
      "At least 6 months"
    ],
    answer: 0,
    region: "mosel",
    explanation: "German wine law requires at least 9 months on the lees, without a break and in the same cellar. The wine is then disgorged."
  },
  {
    id: "de-56",
    type: "connection",
    country: "Germany",
    topic: "sparkling",
    question: "What does the b.A. in Sekt b.A. tell you?",
    options: [
      "Made by the traditional method, in this bottle",
      "Aged for at least three years on its lees",
      "Made from at least 85% Riesling grapes",
      "Grapes from one named German wine region"
    ],
    answer: 3,
    region: "mosel",
    explanation: "Sekt b.A. must name its German wine region on the label. It may still be made in a tank, so b.A. says nothing about the method."
  },
  {
    id: "de-57",
    type: "connection",
    country: "Germany",
    topic: "sparkling",
    question: "Which grape makes about half of premium German Sekt?",
    options: [
      "Müller-Thurgau",
      "Silvaner",
      "Pinot Blanc",
      "Riesling"
    ],
    answer: 3,
    region: "mosel",
    explanation: "About half of premium Sekt is Riesling. About 30% comes from the three Pinots: Pinot Noir, Pinot Blanc and Pinot Gris."
  },
  {
    id: "at-21",
    type: "connection",
    country: "Austria",
    topic: "sparkling",
    question: "From which tier of Austrian Sekt g.U. must the wine be made by the traditional method?",
    options: [
      "Klassik",
      "Reserve",
      "Große Reserve only",
      "None: tank is allowed at every tier"
    ],
    answer: 1,
    region: "niederosterreich",
    explanation: "Klassik may be made in a tank or in the bottle. From Reserve upwards, only the traditional method is allowed."
  },
  {
    id: "at-22",
    type: "scenario",
    country: "Austria",
    topic: "sparkling",
    question: "What is the minimum time on the lees for an Austrian Sekt g.U. Reserve?",
    options: [
      "6 months",
      "9 months",
      "12 months",
      "18 months"
    ],
    answer: 3,
    region: "niederosterreich",
    explanation: "Reserve needs at least 18 months on the lees and hand-picked grapes. Klassik needs 9 months in bottle, or 6 months by tank."
  },
  {
    id: "at-23",
    type: "scenario",
    country: "Austria",
    topic: "sparkling",
    question: "Where must the grapes for an Austrian Sekt g.U. Große Reserve come from?",
    options: [
      "One municipality",
      "One federal state",
      "Anywhere in Austria",
      "Any Wachau estate"
    ],
    answer: 0,
    region: "niederosterreich",
    explanation: "Große Reserve grapes come from a single municipality, and a single vineyard is allowed. Klassik and Reserve may draw on one federal state."
  },
  {
    id: "nw-99",
    type: "scenario",
    country: "New World",
    topic: "sparkling",
    question: "What is the minimum time on the lees for South African Cap Classique today?",
    options: [
      "6 months",
      "9 months",
      "12 months",
      "15 months"
    ],
    answer: 2,
    region: "southAfrica",
    explanation: "Cap Classique must now spend at least 12 months on its lees. The old minimum was 9 months."
  },
  {
    id: "nw-100",
    type: "connection",
    country: "New World",
    topic: "sparkling",
    question: "Why does Tasmania suit traditional-method sparkling wine?",
    options: [
      "Hot summers give ripe, sugary grapes",
      "Volcanic soils add bubbles to the base wine",
      "Cool weather keeps the acid high",
      "Heavy irrigation gives large, neutral crops"
    ],
    answer: 2,
    region: "australia",
    explanation: "Tasmania is Australia's coolest wine region. Its Pinot Noir and Chardonnay keep the high acidity that sparkling base wine needs."
  },
  {
    id: "it-87",
    type: "connection",
    country: "Italy",
    topic: "sparkling",
    question: "What is the minimum share of Glera in Prosecco DOC?",
    options: [
      "85%",
      "60%",
      "100%",
      "75%"
    ],
    answer: 0,
    region: "veneto",
    explanation: "Prosecco DOC must be at least 85% Glera. Up to 15% may come from other grapes, such as Chardonnay or the Pinots."
  },
  {
    id: "it-88",
    type: "connection",
    country: "Italy",
    topic: "sparkling",
    question: "How much Pinot Nero goes into Prosecco DOC Rosé?",
    options: [
      "Up to 5% of the blend",
      "At least 35% of the blend",
      "Between 10% and 15%",
      "Exactly half of the blend"
    ],
    answer: 2,
    region: "veneto",
    explanation: "Prosecco Rosé is 85–90% Glera and 10–15% Pinot Nero. The Pinot Nero is made as a red wine, which gives the pink colour."
  },
  {
    id: "it-89",
    type: "scenario",
    country: "Italy",
    topic: "sparkling",
    question: "A producer makes Prosecco DOC Rosé. How long must its second fermentation in tank last?",
    options: [
      "At least 30 days",
      "At least 60 days",
      "At least 9 months",
      "At least 15 months"
    ],
    answer: 1,
    region: "veneto",
    explanation: "The rules set at least sixty days in tank for the Rosé. The label must also say 'millesimato' and give the vintage."
  },
  {
    id: "it-90",
    type: "connection",
    country: "Italy",
    topic: "sparkling",
    question: "Which sweetness levels may Prosecco DOC Rosé be sold in?",
    options: [
      "Dry and demi-sec only",
      "From demi-sec up to dolce",
      "Only brut and dolce",
      "Brut nature to extra dry"
    ],
    answer: 3,
    region: "veneto",
    explanation: "Rosé is sold from brut nature to extra dry. White Prosecco spumante may go further, up to dry and demi-sec."
  },
  {
    id: "it-91",
    type: "scenario",
    country: "Italy",
    topic: "sparkling",
    question: "A Conegliano Valdobbiadene bottle says 'sui lieviti'. What does that mean?",
    options: [
      "Made in tank, then aged in oak",
      "Pumped full of carbon dioxide",
      "Fermented again in bottle, on lees",
      "From dried grapes, fermented sweet"
    ],
    answer: 2,
    region: "veneto",
    explanation: "Sui lieviti, or col fondo, is re-fermented in the bottle and left on its lees. It is slightly cloudy and always Brut Nature."
  },
  {
    id: "it-92",
    type: "connection",
    country: "Italy",
    topic: "sparkling",
    question: "Which Italian regions does the Prosecco DOC zone cover?",
    options: [
      "Veneto and Friuli-Venezia Giulia",
      "Only Veneto and Lombardy, not Friuli",
      "Veneto and Trentino-Alto Adige",
      "Friuli and Emilia-Romagna"
    ],
    answer: 0,
    region: "veneto",
    explanation: "Prosecco DOC covers nine provinces in Veneto and Friuli-Venezia Giulia. The label may add 'Treviso' or 'Trieste'."
  },
  {
    id: "it-93",
    type: "connection",
    country: "Italy",
    topic: "sparkling",
    question: "How much actual alcohol may Moscato d'Asti have?",
    options: [
      "Between 9% and 11%",
      "Between 4.5% and 6.5%",
      "At least 12% or more",
      "Between 7.5% and 8.5%"
    ],
    answer: 1,
    region: "piedmont",
    explanation: "Fermentation is stopped early, so actual alcohol stays between 4.5% and 6.5%. The rest stays as grape sugar."
  },
  {
    id: "it-94",
    type: "scenario",
    country: "Italy",
    topic: "sparkling",
    question: "A buyer wants the fully sparkling Moscato wine with more alcohol. Which should they pick?",
    options: [
      "Moscato d'Asti Vendemmia Tardiva",
      "Moscato d'Asti from Strevi",
      "Moscato d'Asti, lightly sparkling",
      "Asti Spumante"
    ],
    answer: 3,
    region: "piedmont",
    explanation: "Asti Spumante is fully sparkling, with at least 6% actual alcohol. Moscato d'Asti is lighter, with between 4.5% and 6.5%."
  },
  {
    id: "it-95",
    type: "connection",
    country: "Italy",
    topic: "sparkling",
    question: "Where is Franciacorta?",
    options: [
      "In Piedmont, in the hills near Asti",
      "On the Adriatic coast",
      "In Lombardy, south of Lake Iseo",
      "In the Trentino mountains"
    ],
    answer: 2,
    region: "franciacorta",
    explanation: "Franciacorta lies in the province of Brescia in Lombardy. Lake Iseo is to the north and Monte Orfano to the south."
  },
  {
    id: "it-96",
    type: "connection",
    country: "Italy",
    topic: "sparkling",
    question: "What are most Franciacorta soils made of?",
    options: [
      "Glacial moraine",
      "Volcanic basalt",
      "Chalk, as in Champagne",
      "Red clay over limestone"
    ],
    answer: 0,
    region: "franciacorta",
    explanation: "Franciacorta is a morainic bowl left by the Valcamonica glacier. Its soils drain well and still hold a good water reserve."
  },
  {
    id: "it-97",
    type: "scenario",
    country: "Italy",
    topic: "sparkling",
    question: "How long must a non-vintage Franciacorta stay on its lees?",
    options: [
      "9 months",
      "15 months",
      "18 months",
      "36 months"
    ],
    answer: 2,
    region: "franciacorta",
    explanation: "Non-vintage Franciacorta needs 18 months on the lees. Rosé and Satèn need 24, Millesimato 30 and Riserva 60."
  },
  {
    id: "it-98",
    type: "connection",
    country: "Italy",
    topic: "sparkling",
    question: "What makes Franciacorta Satèn different?",
    options: [
      "Pinot Nero only, at any sweetness",
      "White grapes only, 5 bar, Brut",
      "Tank-made, for early drinking",
      "No lees ageing, sold as dolce"
    ],
    answer: 1,
    region: "franciacorta",
    explanation: "Satèn is at least 50% Chardonnay, with up to 50% Pinot Bianco and no Pinot Nero. Its pressure is at most 5 bar, which gives a softer mousse. It may only be sold as brut."
  },
  {
    id: "it-99",
    type: "scenario",
    country: "Italy",
    topic: "sparkling",
    question: "A Franciacorta producer wants 'metodo classico' on the label. What do the rules say?",
    options: [
      "It must appear on every label",
      "Only Riserva may use it",
      "Only on non-vintage wines",
      "It is not allowed"
    ],
    answer: 3,
    region: "franciacorta",
    explanation: "The rules ban 'metodo classico', 'metodo tradizionale' and 'vino spumante' on the label. The word Franciacorta names both the wine and the method."
  },
  {
    id: "it-100",
    type: "connection",
    country: "Italy",
    topic: "sparkling",
    question: "How much Pinot Nero must Franciacorta Rosé contain?",
    options: [
      "At least 35%",
      "Up to 10% at most",
      "None at all",
      "Exactly 15%"
    ],
    answer: 0,
    region: "franciacorta",
    explanation: "Rosé needs at least 35% Pinot Nero, with at most 65% Chardonnay. It must spend at least 24 months on the lees."
  },
  {
    id: "it-101",
    type: "map",
    country: "Italy",
    question: "Which region, between Lake Iseo and Brescia, makes traditional-method sparkling wine from Chardonnay, Pinot Nero and Pinot Bianco?",
    answer: "franciacorta",
    explanation: "Franciacorta is a glacial moraine bowl in Lombardy. Its wines are bottle-fermented, and Satèn is its white-grape, softer-bubbled style."
  },
  {
    id: "fr-133",
    type: "connection",
    country: "France",
    topic: "sparkling",
    question: "After the second fermentation, what is the earliest a Champagne may be disgorged?",
    options: [
      "9 months after tirage",
      "12 months after tirage",
      "15 months after tirage",
      "36 months after tirage"
    ],
    answer: 1,
    region: "champagne",
    explanation: "Disgorgement cannot happen until 12 months after tirage, and the wine stays in its bottle on the lees all that time. Release then waits until 15 months after tirage, or 36 months for vintage."
  },
  {
    id: "fr-134",
    type: "scenario",
    country: "France",
    topic: "sparkling",
    question: "A Champagne press holds 4,000 kg of grapes. How much juice may be kept as the cuvée, the first and best fraction?",
    options: [
      "2,550 litres",
      "500 litres",
      "3,000 litres",
      "2,050 litres"
    ],
    answer: 3,
    region: "champagne",
    explanation: "The cuvée is the first 2,050 litres. The next 500 litres are the taille. Together that makes 2,550 litres, the legal cap of 102 litres per 160 kg."
  },
  {
    id: "fr-135",
    type: "scenario",
    country: "France",
    topic: "sparkling",
    question: "A Champagne blender wants more fresh acidity and ageing potential. Which pressing fraction should they favour?",
    options: [
      "The cuvée, the first juice",
      "The taille, the later juice",
      "The rebêche, the last juice",
      "Juice from destemmed grapes"
    ],
    answer: 0,
    region: "champagne",
    explanation: "The cuvée is rich in acid and gives fresh, lively aromas. The taille is fruitier with more tannin. The rebêche cannot be used for Champagne and goes to the distillery, and grapes go into the press as whole bunches."
  },
  {
    id: "fr-136",
    type: "connection",
    country: "France",
    topic: "sparkling",
    question: "Which way of making rosé is allowed in Champagne?",
    options: [
      "Only by bleeding off black grapes",
      "Red wine added in the dosage",
      "Blending red and white base wine",
      "Skin contact during riddling"
    ],
    answer: 2,
    region: "champagne",
    explanation: "Champagne may make rosé by blending white and red wine before tirage. Direct pressing, maceration and saignée are also allowed. Colour is never added at dosage."
  },
  {
    id: "fr-137",
    type: "connection",
    country: "France",
    topic: "sparkling",
    question: "Why may a Champagne producer sell no more than 80% of a year's wine as vintage?",
    options: [
      "To keep the price of vintage wine high",
      "To keep reserve wine for blending",
      "Because vintage must age 36 months",
      "To leave wine for Coteaux Champenois"
    ],
    answer: 1,
    region: "champagne",
    explanation: "The rules cap vintage at 80% of the year's volume, to keep wine back for blending and reserves. Reserve wines from earlier harvests add riper, more mature character and keep a house style consistent."
  },
  {
    id: "fr-138",
    type: "scenario",
    country: "France",
    topic: "sparkling",
    question: "A Champagne label carries the code RM. Who made the wine?",
    options: [
      "A grower, from their own vines",
      "A large house buying in grapes",
      "A cooperative making wine for members",
      "A merchant selling bought-in bottles"
    ],
    answer: 0,
    region: "champagne",
    explanation: "RM means récoltant-manipulant, a grower who makes the wine. NM is a négociant-manipulant, such as the big houses. CM is a cooperative. ND is a merchant selling bottles made by others."
  },
  {
    id: "fr-139",
    type: "scenario",
    country: "France",
    topic: "sparkling",
    question: "A sparkling wine has 40 g/L of sugar after dosage. Which term goes on the label?",
    options: [
      "Brut",
      "Extra Dry",
      "Sec",
      "Demi-Sec"
    ],
    answer: 3,
    region: "champagne",
    explanation: "Demi-Sec covers 32 to 50 g/L. Sec is 17 to 32, Extra Dry 12 to 17, and Brut under 12. Doux is over 50."
  },
  {
    id: "fr-140",
    type: "scenario",
    country: "France",
    topic: "sparkling",
    question: "A customer wants the drier of two Champagnes: Brut or Extra Dry. Which should you pour?",
    options: [
      "Extra Dry, as the name suggests",
      "They are the same sweetness",
      "Brut, which is under 12 g/L",
      "Extra Dry, which is under 6 g/L"
    ],
    answer: 2,
    region: "champagne",
    explanation: "Brut is under 12 g/L. Extra Dry is sweeter, at 12 to 17 g/L, and the name misleads many people. Extra Brut, at 0 to 6 g/L, is drier than both."
  },
  {
    id: "fr-141",
    type: "connection",
    country: "France",
    topic: "sparkling",
    question: "In the transfer method, how is the wine cleared of its lees?",
    options: [
      "It is filtered in a pressure tank",
      "It is riddled and then disgorged",
      "It is sold with its lees in bottle",
      "It is fined in barrel before tirage"
    ],
    answer: 0,
    region: "champagne",
    explanation: "The second fermentation and lees ageing happen in bottle, as in the traditional method. The bottles are then emptied into a pressurised tank, filtered, dosed and rebottled, which skips riddling and disgorging."
  },
  {
    id: "fr-142",
    type: "connection",
    country: "France",
    topic: "sparkling",
    question: "Limoux méthode ancestrale is sweet, gently sparkling and 6–7% alcohol. How is it made?",
    options: [
      "Second fermentation in a sealed tank",
      "Traditional method, long lees ageing",
      "Grape spirit added to stop fermentation",
      "One fermentation, ended in bottle"
    ],
    answer: 3,
    region: "languedocRoussillon",
    explanation: "The wine is bottled before its first fermentation ends. That fermentation finishes in the bottle and makes the bubbles. It is 100% Mauzac and keeps some grape sugar, so the alcohol stays low."
  },
  {
    id: "fr-143",
    type: "scenario",
    country: "France",
    topic: "sparkling",
    question: "Which grape must make up at least 90% of Blanquette de Limoux?",
    options: [
      "Chardonnay",
      "Mauzac",
      "Chenin Blanc",
      "Pinot Noir"
    ],
    answer: 1,
    region: "languedocRoussillon",
    explanation: "Blanquette de Limoux is at least 90% Mauzac, with Chardonnay or Chenin making up the rest. It is made by the traditional method. Crémant de Limoux is the one led by Chardonnay and Chenin."
  },
  {
    id: "fr-144",
    type: "connection",
    country: "France",
    topic: "sparkling",
    question: "Which pressing rule applies to every Crémant, including Crémant de Bourgogne?",
    options: [
      "No more than 102 L per 160 kg",
      "No pressing limit at all",
      "No more than 100 L per 150 kg",
      "No more than 150 L per 100 kg"
    ],
    answer: 2,
    region: "burgundy",
    explanation: "EU law caps Crémant at 100 litres of juice per 150 kg of grapes. The grapes must be picked by hand and the wine must spend at least nine months on its lees. Champagne's own cap is 102 litres per 160 kg."
  },
  {
    id: "fr-145",
    type: "scenario",
    country: "France",
    topic: "sparkling",
    question: "Which grape is NOT allowed in Crémant de Loire?",
    options: [
      "Sauvignon Blanc",
      "Cabernet-Sauvignon",
      "Chenin Blanc",
      "Pinot Noir"
    ],
    answer: 0,
    region: "loire",
    explanation: "The white grapes are Chenin Blanc, Chardonnay and Orbois. The black grapes include Cabernet Franc, Cabernet-Sauvignon, Grolleau, Pineau d'Aunis and Pinot Noir. Sauvignon Blanc is not on the list."
  },
  {
    id: "fr-146",
    type: "connection",
    country: "France",
    topic: "sparkling",
    question: "How does Vouvray pétillant differ from Vouvray mousseux?",
    options: [
      "It is made by the tank method",
      "It must be medium-sweet",
      "It skips any lees ageing",
      "It has less gas in the bottle"
    ],
    answer: 3,
    region: "loire",
    explanation: "Both get their second fermentation in the bottle, and both must age at least 12 months from tirage before sale. Pétillant just has less carbon dioxide, so its bubbles are gentler."
  },
  {
    id: "nw-101",
    type: "scenario",
    country: "New World",
    question: "A wine is labelled with the Finger Lakes AVA. Under US federal rules, how much of the wine must come from grapes grown inside the AVA?",
    options: [
      "At least 75% of it",
      "At least 85% of it",
      "At least 95% of it",
      "Every single grape, 100%"
    ],
    answer: 1,
    region: "newYork",
    explanation: "US federal labelling rules say a wine named for an AVA must get at least 85% of its grapes from inside that AVA's boundaries."
  },
  {
    id: "nw-102",
    type: "scenario",
    country: "New World",
    question: "A wine is labelled simply 'New York'. Under US federal rules, how much of it must come from fruit grown in the state?",
    options: [
      "At least 51% of it",
      "At least 95% of it",
      "Every single grape, 100%",
      "At least 75% of it"
    ],
    answer: 3,
    region: "newYork",
    explanation: "A state name on a US label needs at least 75% of the wine from fruit grown in that state, and the wine must be finished in that state or a neighbouring one. An AVA name asks more: 85%."
  },
  {
    id: "nw-103",
    type: "scenario",
    country: "New World",
    question: "A New York producer labels a wine 'Concord', a native Vitis labrusca grape. What is the lowest share of Concord the label allows?",
    options: [
      "At least 85%, the AVA rule",
      "At least 90%, like Oregon",
      "51%, if the label says so",
      "75%, with no exceptions"
    ],
    answer: 2,
    region: "newYork",
    explanation: "US rules let a Vitis labrusca grape such as Concord be named on the label at 51%, as long as the label states that it contains at least 51% of that grape. Below 75%, that statement is required."
  },
  {
    id: "nw-104",
    type: "scenario",
    country: "New World",
    question: "Which is the deepest of the Finger Lakes, with its own sub-AVA?",
    options: [
      "Seneca Lake",
      "Cayuga Lake",
      "Keuka Lake",
      "Canandaigua Lake"
    ],
    answer: 0,
    region: "newYork",
    explanation: "Seneca Lake is the deepest of the Finger Lakes and rarely freezes, so it does the most to soften winter cold on the slopes around it."
  },
  {
    id: "nw-105",
    type: "scenario",
    country: "New World",
    question: "An Oregon producer wants to call a wine 'Pinot Noir'. How much of the wine must be Pinot Noir under Oregon's rules?",
    options: [
      "At least 75%, the US rule",
      "At least 85% of the wine",
      "At least 90% of the wine",
      "Every drop of it, 100%"
    ],
    answer: 2,
    region: "oregon",
    explanation: "Oregon's own rules ask for at least 90% of a named grape, stricter than the US minimum of 75%. Pinot Noir is not on the short list of grapes allowed at 75%."
  },
  {
    id: "nw-106",
    type: "scenario",
    country: "New World",
    question: "Oregon lets a few grape names go on the label at only 75%. Which of these is one of them?",
    options: [
      "Pinot Noir",
      "Pinot Gris",
      "Chardonnay",
      "Syrah"
    ],
    answer: 3,
    region: "oregon",
    explanation: "Oregon's 90% rule has a list of exceptions allowed at 75%, mostly grapes often blended, such as Syrah, Cabernet Sauvignon, Merlot and Malbec. Pinot Noir, Pinot Gris and Chardonnay are not on it, so they need 90%."
  },
  {
    id: "nw-107",
    type: "scenario",
    country: "New World",
    question: "A wine is labelled 'Willamette Valley'. How much of it must come from inside the AVA under Oregon's rules?",
    options: [
      "At least 95% of it",
      "At least 85%, the US rule",
      "At least 75% of it",
      "Just over half of it"
    ],
    answer: 0,
    region: "oregon",
    explanation: "Oregon asks that 95% of the grapes come from inside a named appellation, stricter than the US rule of 85% for an AVA."
  },
  {
    id: "nw-108",
    type: "scenario",
    country: "New World",
    question: "A wine is labelled 'Oregon'. How many of its grapes must be grown in Oregon?",
    options: [
      "At least 75% of them",
      "All of them",
      "At least 85% of them",
      "At least 90% of them"
    ],
    answer: 1,
    region: "oregon",
    explanation: "If 'Oregon' appears anywhere on the label, every grape must have been grown in Oregon. The US rule for a state name is only 75%."
  },
  {
    id: "nw-109",
    type: "connection",
    country: "New World",
    question: "Under Argentina's 1999 wine law, which wines may use an Indicación de Procedencia (IP)?",
    options: [
      "Only quality Malbec",
      "Only single-estate wines",
      "Only table and regional wines",
      "Only wines aged two years or more"
    ],
    answer: 2,
    region: "argentina",
    explanation: "The law keeps the IP for table and regional wines. The Indicación Geográfica (IG) is kept for quality wines, and the DOC sits above both."
  },
  {
    id: "nw-110",
    type: "connection",
    country: "New World",
    question: "What must happen inside the area of an Argentine DOC, such as Luján de Cuyo?",
    options: [
      "Growing, making, ageing, bottling",
      "Only the growing; bottling can be anywhere",
      "Only the bottling; grapes can come from anywhere",
      "Only the ageing in barrel"
    ],
    answer: 0,
    region: "argentina",
    explanation: "Argentina's wine law says a DOC wine's grapes, winemaking, ageing and bottling all take place in the same defined area. Joining a DOC is voluntary, and the idea for a new one must come from growers and producers in the area."
  },
  {
    id: "nw-111",
    type: "connection",
    country: "New World",
    question: "How big can an Argentine Indicación Geográfica (IG), such as Mendoza, be?",
    options: [
      "No bigger than one department",
      "It must cover two provinces",
      "Any size, up to the whole country",
      "No bigger than a province"
    ],
    answer: 3,
    region: "argentina",
    explanation: "The law limits an IG to an area no larger than one province, or an inter-provincial zone already recognised. The wine must be made and bottled in that area from vinifera grapes."
  },
  {
    id: "es-187",
    type: "connection",
    country: "Spain",
    question: "Besides Crianza, Reserva and Gran Reserva, which ageing terms may a Yecla label use?",
    options: [
      "Noble, Añejo and Viejo",
      "Roble, Joven and Tradicional",
      "Superior, Clásico and Riserva",
      "Fino, Oloroso and Amontillado"
    ],
    answer: 0,
    region: "yecla",
    explanation: "The rule book lists Noble, Añejo and Viejo alongside Crianza, Reserva and Gran Reserva."
  },
  {
    id: "es-188",
    type: "connection",
    country: "Spain",
    question: "How ripe must red grapes be at harvest for DO Yecla?",
    options: [
      "At least 9 °Baumé",
      "At least 10 °Baumé",
      "At least 11 °Baumé",
      "At least 13 °Baumé"
    ],
    answer: 2,
    region: "yecla",
    explanation: "Reds need 11 °Baumé and whites 10. Grapes for vino de licor need 13."
  },
  {
    id: "es-189",
    type: "connection",
    country: "Spain",
    question: "How much finished wine may a Yecla producer take from 100 kg of grapes?",
    options: [
      "No more than 60 litres",
      "No more than 74 litres",
      "No more than 85 litres",
      "No more than 90 litres"
    ],
    answer: 1,
    region: "yecla",
    explanation: "The cap is 74 litres per 100 kg. Pressing too hard is ruled out: continuous screw presses are banned."
  },
  {
    id: "es-190",
    type: "connection",
    country: "Spain",
    question: "Which two red grapes are on Yecla's authorised list?",
    options: [
      "Bobal and Mencía, two other Spanish reds",
      "Graciano and Carignan from Rioja",
      "Pinot Noir and Malbec, two French grapes",
      "Garnacha Tintorera and Petit Verdot"
    ],
    answer: 3,
    region: "yecla",
    explanation: "The reds are Monastrell, Tempranillo, Cabernet Sauvignon, Syrah, Merlot, Garnacha Tinta, Garnacha Tintorera and Petit Verdot. Monastrell is the principal one."
  },
  {
    id: "es-191",
    type: "connection",
    country: "Spain",
    question: "What must a 'Vendimia tardía' (late-harvest) wine from Calatayud reach?",
    options: [
      "At least 12% alcohol, any total",
      "At least 13.5% alcohol, over 15% in total",
      "At least 15% alcohol, over 17.5% in total",
      "At least 11% alcohol, over 13% in total"
    ],
    answer: 1,
    region: "calatayud",
    explanation: "It needs at least 13.5% actual alcohol and more than 15% total alcohol, counting the sugar left in the wine."
  },
  {
    id: "es-192",
    type: "connection",
    country: "Spain",
    question: "How much sugar must a 'Naturalmente dulce' wine from Calatayud keep?",
    options: [
      "At least 4 g/l",
      "At least 12 g/l",
      "At least 45 g/l",
      "At least 100 g/l"
    ],
    answer: 2,
    region: "calatayud",
    explanation: "It must keep 45 g/l of sugar or more. Like the late-harvest wine, it needs at least 13.5% actual alcohol."
  },
  {
    id: "es-193",
    type: "connection",
    country: "Spain",
    question: "Over how many municipalities is DO Calatayud's vineyard spread?",
    options: [
      "51",
      "12",
      "120",
      "5"
    ],
    answer: 0,
    region: "calatayud",
    explanation: "About 3,200 ha of vines lie in 51 municipalities in the south-west of Zaragoza province, around the rivers that feed the Ebro."
  },
  {
    id: "es-194",
    type: "connection",
    country: "Spain",
    question: "Which four provinces does DO La Mancha cover?",
    options: [
      "Madrid, Toledo, Guadalajara and Ávila de los Caballeros",
      "Albacete, Murcia, Alicante and Valencia",
      "Albacete, Ciudad Real, Cuenca and Toledo",
      "Ciudad Real, Badajoz, Jaén and Córdoba"
    ],
    answer: 2,
    region: "laMancha",
    explanation: "The rule book lists towns in Albacete, Ciudad Real, Cuenca and Toledo, all in Castilla-La Mancha."
  },
  {
    id: "es-195",
    type: "connection",
    country: "Spain",
    question: "How long must a La Mancha 'Roble' wine spend in oak?",
    options: [
      "At least 6 months",
      "At least 60 days",
      "At least 12 months",
      "At least 30 days"
    ],
    answer: 1,
    region: "laMancha",
    explanation: "A Roble wine needs at least 60 days in oak barrels. Crianza needs 6 months in oak within 24 months in total."
  },
  {
    id: "es-196",
    type: "connection",
    country: "Spain",
    question: "A La Mancha sparkling wine is not made by the traditional method. What must its label say?",
    options: [
      "Nothing extra, since the method is free",
      "The word 'Cava' under the DO name",
      "The method used, such as Charmat or Granvás",
      "'Vino de aguja' in place of the word sparkling"
    ],
    answer: 2,
    region: "laMancha",
    explanation: "Quality sparkling wine is allowed. If it is made another way than the traditional method, the label must name that method."
  },
  {
    id: "es-197",
    type: "connection",
    country: "Spain",
    question: "Where in Montsant are the granite sands mostly found, and what are they like?",
    options: [
      "Around Falset; low in organic matter and slow to hold water",
      "Around Ulldemolins; rich clay that holds water well",
      "On the coast; deep sand lying over limestone and marl",
      "Along the Ebre; fertile river silt left by floods each year"
    ],
    answer: 0,
    region: "montsant",
    explanation: "The granite sands lie mainly around Falset. They hold little water and little organic matter, and give structure to all the wines."
  },
  {
    id: "es-198",
    type: "connection",
    country: "Spain",
    question: "What does a red Montsant Reserva need?",
    options: [
      "2 years in total, 6 months in oak",
      "5 years in total, 24 months in oak",
      "1 year in oak, with no rule at all on bottle ageing",
      "3 years, with 12 months in oak and 18 in bottle"
    ],
    answer: 3,
    region: "montsant",
    explanation: "A red Reserva ages at least 3 years, with at least 12 months in oak and 18 months in bottle."
  },
  {
    id: "es-199",
    type: "connection",
    country: "Spain",
    question: "After phylloxera, what helped keep vines growing in Montsant?",
    options: [
      "Large estates bought up by foreign investors from France",
      "Co-operatives, like Falset's and Cornudella's of 1919",
      "Moving the vineyards down to the coastal plain",
      "A switch to white grapes sold to Cava houses"
    ],
    answer: 1,
    region: "montsant",
    explanation: "Co-operatives founded in the early 1900s kept growers on the land. The modernista co-operatives of Falset and Cornudella date from 1919 and still work today."
  },
  {
    id: "es-200",
    type: "connection",
    country: "Spain",
    question: "Since the 2019 rule change, what must a white Ribera del Duero be made from?",
    options: [
      "At least 75% Verdejo",
      "Any white grape",
      "At least 50% Sauvignon Blanc",
      "At least 75% Albillo Mayor"
    ],
    answer: 3,
    region: "riberaDelDuero",
    explanation: "White wines joined the DO in 2019. They need at least 75% Albillo Mayor, the local white grape also called Blanca del País."
  },
  {
    id: "es-201",
    type: "connection",
    country: "Spain",
    question: "What is the maximum yield for Tempranillo in Ribera del Duero?",
    options: [
      "7,000 kg/ha",
      "4,500 kg/ha",
      "9,500 kg/ha",
      "12,000 kg/ha"
    ],
    answer: 0,
    region: "riberaDelDuero",
    explanation: "All grapes are capped at 7,000 kg/ha except the white Albillo Mayor, which may reach 9,500 kg/ha."
  },
  {
    id: "es-202",
    type: "connection",
    country: "Spain",
    question: "What can a Ribera del Duero rosé call itself, and what must it contain?",
    options: [
      "Only 'rosado'; it must be 100% Tempranillo",
      "'Rosado' or 'clarete'; at least 50% red grapes",
      "Only 'clarete'; it may be made from any white grape",
      "'Rosado'; it needs at least 85% Garnacha Tinta"
    ],
    answer: 1,
    region: "riberaDelDuero",
    explanation: "The rules allow either word, rosado or clarete. The wine needs at least 50% of the authorised red grapes."
  },
  {
    id: "es-203",
    type: "connection",
    country: "Spain",
    question: "How long must a Valencia quality sparkling wine take if its second fermentation is in bottle?",
    options: [
      "At least 3 months",
      "At least 6 months",
      "At least 9 months",
      "At least 15 months"
    ],
    answer: 2,
    region: "valencia",
    explanation: "It needs at least 9 months from that fermentation, ageing included. A sparkling wine made in a closed tank needs at least 6 months."
  },
  {
    id: "es-204",
    type: "connection",
    country: "Spain",
    question: "A Valencia wine blends grapes from Alto Turia and Clariano. What name can its label use?",
    options: [
      "Alto Turia, the higher one",
      "Clariano, the larger share",
      "Valentino, as a compromise",
      "Only 'Valencia'"
    ],
    answer: 3,
    region: "valencia",
    explanation: "A sub-zone name needs grapes only from that sub-zone. Wine from more than one sub-zone can only be sold as 'Valencia'."
  },
  {
    id: "es-205",
    type: "connection",
    country: "Spain",
    question: "How much wine may a Valencia 'Vino de Parcela' take from 100 kg of grapes?",
    options: [
      "Up to 65 litres",
      "Up to 76 litres",
      "Up to 82 litres",
      "Up to 90 litres"
    ],
    answer: 0,
    region: "valencia",
    explanation: "The usual cap is 76 litres of wine per 100 kg. A Vino de Parcela, from a single plot, is held to 65 litres."
  },
  {
    id: "it-102",
    type: "scenario",
    country: "Italy",
    question: "What must Trebbiano d'Abruzzo DOC be made from?",
    options: [
      "At least 85% Montepulciano, made as a white wine",
      "At least 85% Trebbiano abruzzese or toscano",
      "Equal parts of Pecorino, Passerina and Cococciola",
      "Only Bombino Bianco from the coastal hills"
    ],
    answer: 1,
    region: "abruzzo",
    explanation: "The rule book asks for at least 85% Trebbiano abruzzese and/or Trebbiano toscano, with up to 15% of other non-aromatic white grapes."
  },
  {
    id: "it-103",
    type: "scenario",
    country: "Italy",
    question: "How many sub-zones does the Montepulciano d'Abruzzo DOC have today?",
    options: [
      "Three",
      "Five",
      "Nine",
      "Twelve"
    ],
    answer: 2,
    region: "abruzzo",
    explanation: "There were five at first, such as Terre di Casauria and Teate, and four more were added later. Colline Teramane left to become its own DOCG in 2003."
  },
  {
    id: "it-104",
    type: "connection",
    country: "Italy",
    question: "What is the most grapes a hectare may give for basic Montepulciano d'Abruzzo DOC?",
    options: [
      "15 t/ha",
      "9.5 t/ha",
      "8 t/ha",
      "20 t/ha"
    ],
    answer: 0,
    region: "abruzzo",
    explanation: "The basic DOC allows 15 tonnes a hectare. The Terre di Casauria sub-zone allows only 9.5, so its grapes are more concentrated."
  },
  {
    id: "it-105",
    type: "scenario",
    country: "Italy",
    question: "How long must Torgiano Rosso Riserva DOCG be aged?",
    options: [
      "At least 24 months, with 6 in oak barrels",
      "At least 60 months, all of it in large oak",
      "At least 18 months, with no wood needed at all",
      "36 months: 12 in wood, 6 in bottle"
    ],
    answer: 3,
    region: "umbria",
    explanation: "At least 36 months from 1 November of the harvest year, of which at least 12 in wood and 6 in bottle."
  },
  {
    id: "it-106",
    type: "scenario",
    country: "Italy",
    question: "Where must the grapes for Torgiano Rosso Riserva DOCG be grown?",
    options: [
      "Only in the commune of Torgiano",
      "Anywhere in the province of Perugia",
      "Across Umbria and northern Lazio",
      "Around Lake Corbara near Orvieto"
    ],
    answer: 0,
    region: "umbria",
    explanation: "The grapes must come from the commune of Torgiano, and flat, damp land along the Tiber and Chiascio rivers is left out. The wine is 70 to 100% Sangiovese."
  },
  {
    id: "it-107",
    type: "scenario",
    country: "Italy",
    question: "The Orvieto DOC crosses a regional border. Which two regions share it?",
    options: [
      "Umbria and Tuscany",
      "Umbria and Marche",
      "Umbria and Lazio",
      "Umbria and Abruzzo"
    ],
    answer: 2,
    region: "umbria",
    explanation: "Its communes lie in the province of Terni, in Umbria, and the province of Viterbo, in Lazio."
  },
  {
    id: "pt-64",
    type: "scenario",
    country: "Portugal",
    question: "Which optional label term is kept only for Alvarinho wines from Monção e Melgaço?",
    options: [
      "Vinho Regional Minho",
      "Origem do Alvarinho",
      "Alvarinho Clássico",
      "Reserva do Minho"
    ],
    answer: 1,
    region: "vinhoVerde",
    explanation: "A 2016 change to the Vinho Verde rules created 'Origem do Alvarinho' for Alvarinho-labelled wines made in Monção e Melgaço."
  },
  {
    id: "pt-65",
    type: "scenario",
    country: "Portugal",
    question: "How many sub-regions does the Vinho Verde DOC have?",
    options: [
      "Nine",
      "Five",
      "Seven",
      "Twelve"
    ],
    answer: 0,
    region: "vinhoVerde",
    explanation: "They are Monção e Melgaço, Lima, Cávado, Ave, Basto, Sousa, Amarante, Baião and Paiva, and a sub-region name can go on the label next to Vinho Verde."
  },
  {
    id: "pt-66",
    type: "connection",
    country: "Portugal",
    question: "Which white grape is the speciality of Baião, the inland sub-region beside the Douro?",
    options: [
      "Loureiro",
      "Alvarinho",
      "Trajadura",
      "Avesso"
    ],
    answer: 3,
    region: "vinhoVerde",
    explanation: "Baião sits between the warmer Douro valley and the sea-cooled coast, and is known for its whites from Avesso."
  },
  {
    id: "pt-67",
    type: "scenario",
    country: "Portugal",
    question: "A wine is labelled Vinho Verde from the coastal Lima sub-region. Which aromatic grape is it most likely built on?",
    options: [
      "Avesso",
      "Loureiro",
      "Encruzado",
      "Antão Vaz"
    ],
    answer: 1,
    region: "vinhoVerde",
    explanation: "Loureiro, a floral grape, is strongest in the coastal sub-regions of Lima, Cávado and Ave."
  },
  {
    id: "pt-68",
    type: "scenario",
    country: "Portugal",
    question: "To be labelled Vinho de Talha DOC Alentejo, how long must the wine stay in the clay pot?",
    options: [
      "Until Easter of the year after the harvest",
      "At least two full years, then into bottle",
      "Until at least 11 November that year",
      "Only until the fermentation has stopped"
    ],
    answer: 2,
    region: "alentejo",
    explanation: "The wine must stay in the talha from the start of fermentation until at least 11 November, St Martin's Day, of the harvest year."
  },
  {
    id: "pt-69",
    type: "scenario",
    country: "Portugal",
    question: "Which Alentejo white grape also goes by the names Síria and Códega?",
    options: [
      "Antão Vaz",
      "Arinto",
      "Roupeiro",
      "Encruzado"
    ],
    answer: 2,
    region: "alentejo",
    explanation: "Roupeiro is grown in almost every Alentejo sub-region for its high yields and strong fruity aromas."
  },
  {
    id: "pt-70",
    type: "connection",
    country: "Portugal",
    question: "Which white grape suits the Alentejo's hot plains and has become a star in Vidigueira and Évora?",
    options: [
      "Antão Vaz",
      "Loureiro",
      "Fernão Pires",
      "Alvarinho"
    ],
    answer: 0,
    region: "alentejo",
    explanation: "Antão Vaz is a hot-climate grape from the Alentejo itself, and its oldest vines are found around Vidigueira."
  },
  {
    id: "pt-71",
    type: "scenario",
    country: "Portugal",
    question: "Which Dão sub-region is made up of the municipality of Mangualde?",
    options: [
      "Terras de Senhorim",
      "Terras de Azurara",
      "Silgueiros",
      "Castendo"
    ],
    answer: 1,
    region: "dao",
    explanation: "Terras de Azurara is Mangualde. Terras de Senhorim is Carregal do Sal and Nelas, and Castendo is Penalva do Castelo."
  },
  {
    id: "pt-72",
    type: "scenario",
    country: "Portugal",
    question: "Which two rivers give the Dão its vineyard valleys?",
    options: [
      "The Douro and the Tâmega",
      "The Tagus and the Zêzere",
      "The Minho and the Lima",
      "The Mondego and the Dão"
    ],
    answer: 3,
    region: "dao",
    explanation: "The Dão wine region lies around the Mondego and its tributary, the Dão, which gives the region its name."
  },
  {
    id: "pt-73",
    type: "connection",
    country: "Portugal",
    question: "Which red grape, now central to Port, is thought to come from the Dão?",
    options: [
      "Baga",
      "Tinta Roriz (Tempranillo)",
      "Castelão",
      "Touriga Nacional"
    ],
    answer: 3,
    region: "dao",
    explanation: "The Dão is believed to be the home of Touriga Nacional, which is now the leading quality grape of Port and the Douro."
  },
  {
    id: "fr-147",
    type: "connection",
    country: "France",
    question: "In 2015 UNESCO put Burgundy on its World Heritage list. What exactly was listed?",
    options: [
      "The Hospices de Beaune and its wine auction",
      "Its climats, the small named vineyard plots",
      "The abbey of Cîteaux and the cellars its monks dug",
      "The Grand Cru villages of the Côte de Nuits"
    ],
    answer: 1,
    region: "burgundy",
    explanation: "UNESCO listed the Climats of Burgundy in July 2015: 1,247 small, precisely mapped vineyard plots on the slopes of the Côte de Nuits and Côte de Beaune, stretching 50 km south of Dijon to Maranges. The listing honours the idea that each plot gives its own wine."
  },
  {
    id: "fr-148",
    type: "connection",
    country: "France",
    question: "How many Grand Cru appellations does Burgundy have?",
    options: [
      "33, each one a named vineyard",
      "7, all of them in Chablis",
      "44, one for each wine village",
      "562, one for every Premier Cru"
    ],
    answer: 0,
    region: "burgundy",
    explanation: "The Burgundy wine board counts 33 Grand Cru appellations and 44 village appellations. Premier Cru is not a separate appellation: the board lists 562 Premier Cru climats inside the village appellations. Its counts of regional appellations differ between its own documents (7 or 23), so that number is left out."
  },
  {
    id: "fr-149",
    type: "connection",
    country: "France",
    question: "A buyer picks up a Burgundy Grand Cru such as Chambertin. What is missing from the label that a Premier Cru would show?",
    options: [
      "The vintage year",
      "The grape variety",
      "The producer's own name",
      "The village name"
    ],
    answer: 3,
    region: "burgundy",
    explanation: "A Premier Cru label gives the village, the words Premier Cru and usually the plot name, for example Gevrey-Chambertin Premier Cru. A Grand Cru stands alone under its own name, with no village on the label."
  },
  {
    id: "fr-150",
    type: "connection",
    country: "France",
    question: "Roughly what share of Burgundy's wine is Grand Cru?",
    options: [
      "About a third",
      "About a tenth",
      "Less than 2%",
      "About a quarter"
    ],
    answer: 2,
    region: "burgundy",
    explanation: "Grand Cru is under 2% of Burgundy's wine. Premier Cru is about 10%, village wine about 37%, and regional wine such as Bourgogne about half."
  },
  {
    id: "de-58",
    type: "connection",
    country: "Germany",
    question: "What sets the Rheingau apart among Germany's wine regions in what it plants?",
    options: [
      "It has the highest share of Riesling",
      "It grows more red grapes than white",
      "It plants mostly Silvaner and Müller-Thurgau",
      "It is the largest region by area"
    ],
    answer: 0,
    region: "rheingau",
    explanation: "Riesling covers roughly three quarters of the Rheingau's vineyards, the highest share of any German region. Spätburgunder is the main red grape, especially around Assmannshausen."
  },
  {
    id: "de-59",
    type: "connection",
    country: "Germany",
    question: "Tradition says late-picked, noble-rotted Riesling was first made in 1775 at one Rheingau estate, after the harvest permit arrived late. Which estate?",
    options: [
      "Kloster Eberbach abbey",
      "Schloss Vollrads",
      "Schloss Johannisberg",
      "Weingut Robert Weil"
    ],
    answer: 2,
    region: "rheingau",
    explanation: "Schloss Johannisberg needed permission from the abbey of Fulda to start picking. In 1775 the messenger came late, the grapes had noble rot, and the wine turned out far better than expected. Historians treat the messenger as legend, but the estate still celebrates it as the birth of Spätlese."
  },
  {
    id: "de-60",
    type: "connection",
    country: "Germany",
    question: "How big is the Rheingau compared with the Pfalz?",
    options: [
      "About the same size as the Pfalz",
      "Twice as big",
      "About half the size",
      "About a seventh the size"
    ],
    answer: 3,
    region: "rheingau",
    explanation: "The Rheingau has a little over 3,100 hectares of vines. The Pfalz has more than 23,000, so the Rheingau is about a seventh of its size, small but famous."
  },
  {
    id: "de-61",
    type: "connection",
    country: "Germany",
    question: "Where does the Pfalz rank among Germany's wine regions by vineyard area?",
    options: [
      "Largest of all",
      "Second, after Rheinhessen",
      "Third, after Rheinhessen and Baden",
      "Fifth, after the Mosel"
    ],
    answer: 1,
    region: "pfalz",
    explanation: "The Pfalz is Germany's second largest wine region, after its northern neighbour Rheinhessen. It has more than 23,000 hectares of vines."
  },
  {
    id: "de-62",
    type: "connection",
    country: "Germany",
    question: "The Deutsche Weinstrasse runs about 85 km through the Pfalz. Where does it end in the south?",
    options: [
      "At Schweigen, on the border with Alsace",
      "At Bockenheim, near Rheinhessen",
      "At Neustadt, in the middle of the region",
      "At Worms, on the Rhine"
    ],
    answer: 0,
    region: "pfalz",
    explanation: "The German Wine Route runs from Bockenheim in the north to Schweigen in the south, right on the French border with Alsace. Most of the Pfalz's wine villages lie along it."
  },
  {
    id: "de-63",
    type: "connection",
    country: "Germany",
    question: "The Pfalz is split into two Bereiche. Which are they?",
    options: [
      "Maindreieck and Mainviereck",
      "Johannisberg and Bingen",
      "Mittelhaardt and Südliche Weinstrasse",
      "Kaiserstuhl, Tuniberg and the Ortenau"
    ],
    answer: 2,
    region: "pfalz",
    explanation: "Mittelhaardt-Deutsche Weinstrasse is the northern half, with Forst and Deidesheim. Südliche Weinstrasse runs from Neustadt south to the French border."
  },
  {
    id: "de-64",
    type: "connection",
    country: "Germany",
    question: "Silvaner is Franken's signature grape. Where and when is it first recorded there?",
    options: [
      "Würzburg, in 1775",
      "Castell, in 1659",
      "Iphofen, in 1855",
      "Escherndorf, in 1910"
    ],
    answer: 1,
    region: "franken",
    explanation: "A document from Castell records Silvaner in 1659. That is the oldest written record of the grape in Franken."
  },
  {
    id: "de-65",
    type: "connection",
    country: "Germany",
    question: "Since 1989 the Bocksbeutel bottle has had EU protection. Who may use it?",
    options: [
      "Only producers inside Franken",
      "Any German wine region at all",
      "Any EU producer of dry white wine",
      "Franken and parts of Baden"
    ],
    answer: 3,
    region: "franken",
    explanation: "The flat, round Bocksbeutel is Franken's emblem and has been protected since 1989. But it is not Franken's alone: some neighbouring parts of Baden have a traditional right to use it too."
  },
  {
    id: "de-66",
    type: "connection",
    country: "Germany",
    question: "Roughly how many hectares of vines does Franken have?",
    options: [
      "About 6,000",
      "About 600",
      "About 23,000",
      "About 60,000"
    ],
    answer: 0,
    region: "franken",
    explanation: "The German Wine Institute gives Franken 6,040 hectares of vines in 2025, mostly along the Main, with Silvaner on about a quarter of them. That is about a quarter of the size of the Pfalz."
  },
  {
    id: "at-24",
    type: "connection",
    country: "Austria",
    question: "Which was Burgenland's first DAC, and Austria's first DAC for red wine?",
    options: [
      "Neusiedlersee DAC, for Zweigelt reds",
      "Eisenberg DAC, for Blaufränkisch",
      "Mittelburgenland, for Blaufränkisch",
      "Leithaberg DAC, for its white wines"
    ],
    answer: 2,
    region: "burgenland",
    explanation: "Mittelburgenland DAC began with the 2005 vintage. It covers Blaufränkisch alone and was Austria's first DAC for a red wine."
  },
  {
    id: "at-25",
    type: "connection",
    country: "Austria",
    question: "Which is the smallest of Burgenland's DACs, with only about 240 hectares?",
    options: [
      "Eisenberg",
      "Rosalia",
      "Carnuntum",
      "Leithaberg"
    ],
    answer: 1,
    region: "burgenland",
    explanation: "Rosalia, with about 240 hectares, is Burgenland's smallest DAC. Neusiedlersee is the largest, at about 6,000 hectares. Carnuntum is in Lower Austria."
  },
  {
    id: "at-26",
    type: "connection",
    country: "Austria",
    question: "Which two Burgenland DACs came next after Mittelburgenland, set up in 2009 and 2010?",
    options: [
      "Leithaberg and Eisenberg",
      "Rosalia and Neusiedlersee",
      "Kamptal and Kremstal",
      "Wachau and Weinviertel"
    ],
    answer: 0,
    region: "burgenland",
    explanation: "Mittelburgenland came first, in 2005. Leithaberg followed in 2009 and Eisenberg in 2010. Kamptal, Kremstal, Wachau and Weinviertel are in Lower Austria, not Burgenland."
  },
  {
    id: "hu-21",
    type: "connection",
    country: "Hungary",
    question: "Which settlers reshaped Villány's wine villages from the 1740s onward?",
    options: [
      "French Huguenot refugees",
      "Italian Benedictine monks",
      "Danube Swabians",
      "Serbian river traders"
    ],
    answer: 2,
    region: "villany",
    explanation: "After Turkish rule had emptied the area, German-speaking settlers were brought in from the 1740s. They brought their grapes and wine-making customs, and built most of the cellar rows at Villány, Villánykövesd and Palkonya."
  },
  {
    id: "hu-22",
    type: "connection",
    country: "Hungary",
    question: "Which light, fruity red grape is thought to have come to Villány with German settlers, and is still more at home there than anywhere else in Hungary?",
    options: [
      "Kadarka",
      "Kékfrankos",
      "Cabernet Franc",
      "Portugieser"
    ],
    answer: 3,
    region: "villany",
    explanation: "Portugieser was probably brought by the Swabian settlers. Villány remains its stronghold in Hungary, even though Cabernet Franc and Bordeaux-style blends now lead its fine wine."
  },
  {
    id: "hu-23",
    type: "connection",
    country: "Hungary",
    question: "What was the Villány-Siklós Wine Route, set up in 1994, the first of in Hungary?",
    options: [
      "The first wine route",
      "The first organic region",
      "The first PDO",
      "The first wine school"
    ],
    answer: 0,
    region: "villany",
    explanation: "The Villány-Siklós Wine Route was founded in 1994 as Hungary's first wine route. It links villages, cellars and guest houses for wine tourism."
  },
  {
    id: "hu-24",
    type: "connection",
    country: "Hungary",
    question: "What happened to Villány's vineyards in the four decades after 1945?",
    options: [
      "Wine-making stopped there entirely",
      "Large state farms took them over",
      "They were replanted with white grapes",
      "They made only sweet wine for export"
    ],
    answer: 1,
    region: "villany",
    explanation: "Large state farms ran the vineyards for four decades. Kadarka, once the main red grape, declined and Portugieser took its place, with new Kékfrankos, Merlot and Cabernet. Small producers took over again from the late 1980s, and quality became the aim."
  },
  {
    id: "hu-25",
    type: "connection",
    country: "Hungary",
    question: "What style is Villány best known for today?",
    options: [
      "Sweet wines from noble rot",
      "Traditional-method sparkling wine",
      "Full-bodied Bordeaux-style reds",
      "Light, dry whites made from Furmint"
    ],
    answer: 2,
    region: "villany",
    explanation: "Villány is Hungary's warm south and its red-wine corner. It is known for full-bodied reds, often blends of Bordeaux grapes, with Cabernet Franc as the flagship."
  },
  {
    id: "gr-21",
    type: "connection",
    country: "Greece",
    question: "When was the Nemea appellation set up?",
    options: [
      "1935",
      "1971",
      "1989",
      "2009"
    ],
    answer: 1,
    region: "nemea",
    explanation: "Wines of Greece dates the Nemea zone to 1971. It is for red wine made entirely from Agiorgitiko."
  },
  {
    id: "gr-22",
    type: "connection",
    country: "Greece",
    question: "How many villages may make PDO Nemea?",
    options: [
      "3",
      "7",
      "40",
      "17"
    ],
    answer: 3,
    region: "nemea",
    explanation: "Seventeen villages may make Nemea wine. Most are in southern-central Korinthia, with a few in the north-west of Argolida, and they differ widely in altitude, soil and aspect."
  },
  {
    id: "gr-23",
    type: "connection",
    country: "Greece",
    question: "What is special about the size of PDO Nemea within Greece?",
    options: [
      "Largest PDO zone for red wine",
      "Smallest PDO in the whole country",
      "The only PDO for rosé wine in Greece",
      "Largest PDO for white wine"
    ],
    answer: 0,
    region: "nemea",
    explanation: "Nemea is Greece's largest PDO zone for red wine, spread across hillsides from about 200 to 850 metres in the north-east Peloponnese."
  },
  {
    id: "nw-112",
    type: "connection",
    country: "New World",
    question: "A wine label says \"Washington\". How much of the grapes must be grown in Washington?",
    options: [
      "At least 75%, the federal minimum for a state name",
      "At least 85%",
      "At least 95%",
      "All of them"
    ],
    answer: 2,
    region: "washington",
    explanation: "Washington state law (RCW 66.28.110) asks for at least 95% Washington grapes when the label names Washington. That is stricter than the US federal rule of 75% for a state name."
  },
  {
    id: "nw-113",
    type: "connection",
    country: "New World",
    question: "A Washington wine names an AVA, such as Red Mountain, and a vintage. How much must come from that year?",
    options: [
      "At least 95%",
      "At least 85%, as for a state-named wine",
      "At least 75%",
      "All of it"
    ],
    answer: 0,
    region: "washington",
    explanation: "US federal rules (27 CFR 4.27) ask for at least 95% from the stated year when the label names an AVA. For a state or county name it is 85%."
  },
  {
    id: "nw-114",
    type: "connection",
    country: "New World",
    question: "A BC wine of distinction names one grape, such as Merlot. How much of the wine must be that grape?",
    options: [
      "At least 75%",
      "At least 85%",
      "At least 95%",
      "All of it, with no blending allowed"
    ],
    answer: 1,
    region: "britishColumbia",
    explanation: "The BC Wines of Marked Quality Regulation (s. 51(3)(a)) says a single grape name may be used if at least 85% of the wine comes from that grape."
  },
  {
    id: "nw-115",
    type: "scenario",
    country: "New World",
    question: "A New Zealand wine for retail sale is labelled 'Marlborough'. How much of it must come from Marlborough?",
    options: [
      "At least 75% of the wine",
      "At least 85% of the wine",
      "At least 95% of the wine",
      "Every grape in the wine"
    ],
    answer: 1,
    region: "newZealand",
    explanation: "New Zealand's 85% rule, as the Ministry for Primary Industries sets it out: if a label states a grape variety, a vintage or an area, at least 85% of the wine must be from that variety, vintage or area. It does not apply to wine sold in bulk."
  },
  {
    id: "nw-116",
    type: "connection",
    country: "New World",
    question: "Which three New Zealand wine names are \"enduring\" GIs, which never expire?",
    options: [
      "Marlborough, Hawke's Bay and Central Otago",
      "Marlborough, Martinborough and Waiheke Island",
      "Auckland, Wellington and Christchurch",
      "New Zealand, North Island and South Island"
    ],
    answer: 3,
    region: "newZealand",
    explanation: "The register run by IPONZ lists three enduring GIs: New Zealand, North Island and South Island. They cannot be altered or removed. Regions such as Marlborough are registered GIs instead."
  },
  {
    id: "nw-117",
    type: "connection",
    country: "New World",
    question: "An Ontario VQA wine names one vinifera grape, such as Riesling. What does the rule say?",
    options: [
      "It may have up to 15% hybrid grapes, such as Vidal",
      "At least 85% Riesling, and no hybrid grapes at all",
      "It needs all Riesling, with no other grape allowed in the blend",
      "It needs at least 75% Riesling, with hybrids allowed"
    ],
    answer: 1,
    region: "ontario",
    explanation: "Ontario's VQA rule (O. Reg. 406/00, as amended in 2025) asks for at least 85% from the named grape. A wine named after a vinifera grape may not contain any wine from hybrid grapes."
  },
  {
    id: "it-111",
    type: "connection",
    country: "Italy",
    question: "Erbamat is a local white grape now allowed in Franciacorta. How much of the blend may it make up?",
    options: [
      "Up to 10%, in every type except Satèn",
      "Up to 50%, in every type",
      "Up to 25%, in Rosé only",
      "None: it may only go into still wines"
    ],
    answer: 0,
    region: "franciacorta",
    explanation: "The consortium's rules allow Erbamat up to 10% of the blend, to start with, in all types except Satèn. It is a late-ripening local grape that keeps its acidity."
  },
  {
    id: "it-112",
    type: "connection",
    country: "Italy",
    question: "How long must a Franciacorta Riserva spend on its lees?",
    options: [
      "At least 18 months",
      "At least 30 months",
      "At least 60 months",
      "At least 36 months"
    ],
    answer: 2,
    region: "franciacorta",
    explanation: "A Riserva needs at least 60 months on the lees. That is far longer than the 18 months for non-vintage and the 30 months for a Millesimato."
  },
  {
    id: "it-113",
    type: "connection",
    country: "Italy",
    question: "Which grape must make up the whole of Ramandolo DOCG?",
    options: [
      "Picolit",
      "Refosco dal Peduncolo Rosso",
      "Friulano",
      "Verduzzo Friulano"
    ],
    answer: 3,
    region: "friuli",
    explanation: "Ramandolo must be 100% Verduzzo Friulano, known locally as Verduzzo Giallo. It is a sweet, golden wine from the hills around Nimis and Tarcento, with at least 14% alcohol."
  },
  {
    id: "it-114",
    type: "connection",
    country: "Italy",
    question: "What kind of wine is Colli Orientali del Friuli Picolit DOCG?",
    options: [
      "A dry, high-acid white sparkling wine",
      "A sweet white from the Picolit grape",
      "A deep red from the Refosco grape",
      "A skin-contact amber wine from Ribolla"
    ],
    answer: 1,
    region: "friuli",
    explanation: "Picolit must be at least 85% Picolit. It is sweet or medium-sweet and golden, with at least 15% alcohol, and the grapes may be dried on the vine or on racks first."
  },
  {
    id: "it-115",
    type: "connection",
    country: "Italy",
    question: "Lazio's best-known red DOCG is Cesanese del Piglio. What is it made from?",
    options: [
      "At least 90% Cesanese",
      "At least 85% Sangiovese",
      "Montepulciano and Merlot",
      "Mostly Malvasia, a red clone"
    ],
    answer: 0,
    region: "lazio",
    explanation: "Cesanese del Piglio needs at least 90% Cesanese (di Affile and/or Comune), with up to 10% of other local grapes. It comes from the province of Frosinone, south-east of Rome."
  },
  {
    id: "it-116",
    type: "connection",
    country: "Italy",
    question: "When did Frascati become a DOC?",
    options: [
      "In 2011, with Cannellino",
      "In 1985",
      "In 1966, among Italy's first",
      "In 1996, as part of Castelli Romani"
    ],
    answer: 2,
    region: "lazio",
    explanation: "Frascati became a DOC in 1966, one of Italy's earliest. Frascati Superiore and Cannellino di Frascati followed as DOCGs in 2011."
  },
  {
    id: "it-117",
    type: "connection",
    country: "Italy",
    question: "The Marche also makes a red DOCG, Cònero. Which grape must lead it?",
    options: [
      "Sangiovese, at least 85%, plus Merlot",
      "Lagrein, at least 85%",
      "Cesanese, at least 90%",
      "Montepulciano, at least 85%"
    ],
    answer: 3,
    region: "marche",
    explanation: "Cònero DOCG must be at least 85% Montepulciano, with up to 15% Sangiovese. It comes from the hills around Monte Conero, near Ancona on the Adriatic."
  },
  {
    id: "it-118",
    type: "connection",
    country: "Italy",
    question: "How long must Cònero DOCG age before it is sold?",
    options: [
      "At least 6 months",
      "At least 2 years",
      "At least 5 years",
      "There is no rule"
    ],
    answer: 1,
    region: "marche",
    explanation: "Cònero must age at least 2 years, counted from 1 November of the harvest year. It also needs at least 12.5% alcohol."
  },
  {
    id: "it-119",
    type: "connection",
    country: "Italy",
    question: "How long must a Trento DOC Riserva spend on its lees?",
    options: [
      "At least 15 months",
      "At least 24 months",
      "At least 36 months",
      "At least 60 months"
    ],
    answer: 2,
    region: "trentinoAltoAdige",
    explanation: "A Trento DOC Riserva needs at least 36 months on the lees, against 15 for non-vintage and 24 for a Millesimato. Many producers go much longer."
  },
  {
    id: "it-120",
    type: "connection",
    country: "Italy",
    question: "In Alto Adige, what is a Lagrein Kretzer?",
    options: [
      "A rosé made from Lagrein",
      "A sweet wine from dried Lagrein",
      "A sparkling Lagrein",
      "A Lagrein aged in large old casks"
    ],
    answer: 0,
    region: "trentinoAltoAdige",
    explanation: "Kretzer is the local name for a Lagrein rosé. Lagrein, a native red of the Bolzano area, is better known as a deep-coloured, full-bodied red."
  },
  {
    id: "gr-24",
    type: "connection",
    country: "Greece",
    question: "At what altitude are most of Naoussa's vineyards?",
    options: [
      "Below 50 m, on the coastal plain",
      "About 600 to 900 m",
      "Above 1,000 m",
      "About 150 to 400 m"
    ],
    answer: 3,
    region: "naoussa",
    explanation: "Most vineyards sit on the south-eastern slopes of Mount Vermio at 150 to 400 m. Varied altitude, aspect and soil give the zone many small terroirs."
  },
  {
    id: "gr-25",
    type: "connection",
    country: "Greece",
    question: "In what year was the Naoussa appellation set up?",
    options: [
      "1937",
      "1971",
      "1995",
      "2009"
    ],
    answer: 1,
    region: "naoussa",
    explanation: "The Naoussa zone was set up in 1971. It covers ten areas in the north-west of the Imathia prefecture, including Naoussa itself."
  },
  {
    id: "gr-26",
    type: "connection",
    country: "Greece",
    question: "How much Assyrtiko must a sweet Santorini Vinsanto contain?",
    options: [
      "At least 85%",
      "At least 51%",
      "All of it (100%)",
      "There is no minimum"
    ],
    answer: 1,
    region: "santorini",
    explanation: "Vinsanto needs at least 51% Assyrtiko, with the rest mostly Aidani and Athiri. The dry PDO wine needs at least 85%."
  },
  {
    id: "gr-27",
    type: "connection",
    country: "Greece",
    question: "What are the grapes for Santorini Vinsanto dried by?",
    options: [
      "Warm air in a heated room",
      "Hanging in a cool, airy loft",
      "Laying them out in the sun",
      "Freezing on the vine"
    ],
    answer: 2,
    region: "santorini",
    explanation: "The grapes are laid out in the sun for several days after picking, which concentrates their sugar. Producers differ on the exact number of days."
  },
  {
    id: "es-206",
    type: "connection",
    country: "Spain",
    question: "What must a red Rioja Crianza do before it can use that word on the label?",
    options: [
      "Age for two years, at least one of them in oak barrels",
      "Age for one year in any vessel it likes, with no oak needed at all",
      "Age for three years, every month of it spent in new French oak",
      "Age for six months in oak barrels and then go straight on sale"
    ],
    answer: 0,
    region: "rioja",
    explanation: "Rioja's rule book says a red Crianza ages for at least two years, with at least one of them in oak barrels of about 225 litres, followed by time in bottle. White and rosé Crianza need 18 months, with six in oak."
  },
  {
    id: "es-207",
    type: "connection",
    country: "Spain",
    question: "How long must a white or rosé Rioja Reserva age before release?",
    options: [
      "12 months in tank, with no oak needed at all",
      "36 months, with at least 12 of them in oak",
      "60 months, with at least 24 of them in oak",
      "24 months, with at least 6 of them in oak"
    ],
    answer: 3,
    region: "rioja",
    explanation: "Rioja's whites and rosés have shorter ladders than its reds. A white or rosé Reserva needs at least 24 months in oak and bottle together, with at least six months in oak. The 36-month figure is for red Reserva."
  },
  {
    id: "es-208",
    type: "connection",
    country: "Spain",
    question: "A Rioja producer wants to label a wine 'Viñedo Singular' (single vineyard). Which rule must the vineyard meet?",
    options: [
      "It must lie in the warmer, drier zone of Rioja Oriental",
      "Its vines are at least 35 years old and picked by hand",
      "It must be planted only with Garnacha and Graciano vines",
      "It must cover the whole of one village and its land"
    ],
    answer: 1,
    region: "rioja",
    explanation: "A Viñedo Singular is a named site smaller than a village, with its own soil and climate. Its vines must be at least 35 years old, it must be picked by hand, and its yield limit is lower than for ordinary Rioja."
  },
  {
    id: "it-108",
    type: "connection",
    country: "Italy",
    question: "What is the minimum share of Sangiovese in Vino Nobile di Montepulciano, and what is the grape called locally?",
    options: [
      "100%, called Brunello",
      "80%, called Morellino",
      "70%, called Prugnolo Gentile",
      "85%, called Sangioveto Grosso"
    ],
    answer: 2,
    region: "tuscany",
    explanation: "The Vino Nobile rule book asks for at least 70% Sangiovese, which in Montepulciano is called Prugnolo Gentile. Up to 30% can be other grapes allowed in Tuscany, with no more than 5% white grapes."
  },
  {
    id: "it-109",
    type: "connection",
    country: "Italy",
    question: "A Vino Nobile di Montepulciano must mature for at least two years. What is the least time it can spend in wood?",
    options: [
      "12 months in wood, plus 6 months in bottle",
      "No time in wood at all, if it rests in bottle",
      "24 months in wood, whatever the producer wants",
      "36 months in wood, the same as for a Riserva"
    ],
    answer: 0,
    region: "tuscany",
    explanation: "The rule book gives the producer three choices within the two years: 24 months in wood, at least 18 months in wood, or at least 12 months in wood plus at least 6 months in bottle. The two years count from 1 January after the harvest."
  },
  {
    id: "it-110",
    type: "connection",
    country: "Italy",
    question: "What does a Vino Nobile di Montepulciano need before it can be called Riserva?",
    options: [
      "Five years of ageing, every month of it in new oak",
      "Grapes dried on straw mats for months before pressing",
      "A blend led by Cabernet Sauvignon and Merlot",
      "Three years of maturing, 6 months in bottle"
    ],
    answer: 3,
    region: "tuscany",
    explanation: "A Riserva needs grapes with at least 12.5% natural alcohol and at least three years of maturing, six months of it in bottle. The ordinary wine needs two years."
  },
  {
    id: "fr-151",
    type: "connection",
    country: "France",
    question: "Which Loire appellation may add the words 'grand cru' to its name?",
    options: [
      "Muscadet Sèvre et Maine",
      "Sancerre",
      "Chinon",
      "Quarts de Chaume"
    ],
    answer: 3,
    region: "loire",
    explanation: "Quarts de Chaume, a sweet Chenin Blanc from the commune of Rochefort-sur-Loire in Anjou, may be labelled 'grand cru'. Its rule book allows only Chenin Blanc."
  },
  {
    id: "fr-152",
    type: "connection",
    country: "France",
    question: "How must the grapes for Quarts de Chaume be picked?",
    options: [
      "By machine, in one pass when the grapes are ripest",
      "By hand, in several passes through each plot",
      "By machine, as soon as the first frost has come",
      "By hand, with every plot picked on the same day"
    ],
    answer: 1,
    region: "loire",
    explanation: "Pickers go through each plot several times, taking the bunches or berries that are ready, often shrivelled by noble rot. The grapes need at least 298 g/l of sugar, and adding sugar or freezing the grapes below -5°C is not allowed."
  },
  {
    id: "hu-26",
    type: "connection",
    country: "Hungary",
    question: "How is Tokaji Szamorodni made?",
    options: [
      "From whole bunches, rotten and healthy berries together",
      "By pouring wine over the pressed paste left from aszú berries",
      "From the free-run juice that drips from aszú berries in the vat",
      "By soaking hand-picked aszú berries in a base wine or must"
    ],
    answer: 0,
    region: "tokaj",
    explanation: "Szamorodni uses whole bunches, rotten and healthy berries together, and can be dry or sweet. Dry Szamorodni needs at least 24 months in barrel and sweet Szamorodni at least 6. Pouring wine over pressed aszú paste makes Fordítás."
  },
  {
    id: "hu-27",
    type: "connection",
    country: "Hungary",
    question: "How long must a Tokaji Aszú age in wooden barrels, at the least?",
    options: [
      "6 months",
      "12 months",
      "18 months",
      "36 months"
    ],
    answer: 2,
    region: "tokaj",
    explanation: "The Tokaj rule book asks for at least 18 months in wooden barrels. Aszú cannot go on sale before 1 January of the third year after the harvest."
  },
  {
    id: "hu-28",
    type: "connection",
    country: "Hungary",
    question: "What is Egri Csillag ('Star of Eger')?",
    options: [
      "A sweet wine from botrytised grapes",
      "A red blend led by Kékfrankos",
      "A dry white blend of at least four grapes",
      "A sparkling rosé made in the tuff cellars"
    ],
    answer: 2,
    region: "eger",
    explanation: "Egri Csillag is Eger's dry white blend, the partner to the red Egri Bikavér. At least four grapes must each make up more than 5%, and at least half the blend must be local Hungarian grapes such as Olaszrizling, Furmint, Hárslevelű or Leányka."
  },
  {
    id: "hu-29",
    type: "connection",
    country: "Hungary",
    question: "In an Egri Csillag, what is the most that any one grape can make up?",
    options: [
      "30%",
      "50%",
      "75%",
      "85%"
    ],
    answer: 1,
    region: "eger",
    explanation: "No single grape may go over 50%, so the wine always tastes of the blend. Aromatic grapes such as Irsai Olivér and the Muscats are held to 20% in total."
  },
  {
    id: "es-216",
    type: "connection",
    country: "Spain",
    question: "What share of red grapes must a Bierzo clarete contain?",
    options: [
      "40% to 60%",
      "At least 85%",
      "At least 70%",
      "Up to 25% only"
    ],
    answer: 0,
    region: "bierzo",
    explanation: "Clarete is Bierzo's traditional pale red, so the rule book keeps red grapes between 40% and 60%, with white grapes making up the rest. A Bierzo rosé is different: it needs at least 70% red grapes."
  },
  {
    id: "es-217",
    type: "connection",
    country: "Spain",
    question: "Before a Bierzo wine can be called 'Viña Clasificada', how long must its plot have used the 'Vino de Paraje' name?",
    options: [
      "At least two years",
      "At least ten years",
      "At least five years",
      "At least twenty years"
    ],
    answer: 2,
    region: "bierzo",
    explanation: "The plot must have used the Vino de Paraje name for at least five years. 'Gran Viña Clasificada' then needs five years as Viña Clasificada. Both wines are assessed by the regulating council before sale."
  },
  {
    id: "es-218",
    type: "connection",
    country: "Spain",
    question: "How must Cariñena growers control the grape moth?",
    options: [
      "With insecticide sprays each year",
      "With pheromones, in every season",
      "By hand-picking the larvae",
      "Growers may choose any method"
    ],
    answer: 1,
    region: "carinena",
    explanation: "Since the 2025 change, pheromone treatment against the grape moth is compulsory every season in place of chemical sprays. Grapes from sprayed plots must be made separately, as wine outside the DO."
  },
  {
    id: "es-219",
    type: "connection",
    country: "Spain",
    question: "What natural alcohol must a Cariñena 'Vendimia tardía' wine have?",
    options: [
      "Over 12% vol",
      "Over 13% vol",
      "Over 15% vol",
      "Over 17.5% vol"
    ],
    answer: 2,
    region: "carinena",
    explanation: "Late-harvest and 'naturally sweet' Cariñena must have over 15% natural alcohol from very ripe grapes, and at least 13% actual alcohol once made. A 'naturally sweet' wine also needs 45 g/L of sugar or more."
  },
  {
    id: "es-220",
    type: "connection",
    country: "Spain",
    question: "How long must a white DO Catalunya Gran Reserva age in total?",
    options: [
      "At least 4 years, 6 months in oak",
      "At least 5 years, 24 months in oak",
      "At least 2 years, 6 months in oak",
      "At least 3 years, 12 months in oak"
    ],
    answer: 0,
    region: "catalunya",
    explanation: "Whites and rosés need 4 years, with at least 6 months in oak of 330 L or less and the rest in bottle. The red Gran Reserva needs 5 years with 24 months in oak. The text read is the April 2026 version."
  },
  {
    id: "es-221",
    type: "connection",
    country: "Spain",
    question: "What is the largest wooden vessel a DO Catalunya 'fermentado en barrica' wine may ferment in?",
    options: [
      "225 litres",
      "330 litres",
      "500 litres",
      "600 litres"
    ],
    answer: 3,
    region: "catalunya",
    explanation: "Barrel fermentation may use wood of up to 600 L, the same limit as the 'barrica' and 'roble' labels. The Crianza, Reserva and Gran Reserva terms are stricter and need oak of 330 L or less."
  },
  {
    id: "es-222",
    type: "connection",
    country: "Spain",
    question: "Besides using at least 85% white grapes, how else may a white Jumilla be made?",
    options: [
      "With up to 50% Monastrell in the blend",
      "From Airén alone, aged in oak for a year",
      "By blending finished white and rosé wine",
      "As blanc de noirs, from only red grapes"
    ],
    answer: 3,
    region: "jumilla",
    explanation: "A white Jumilla can be a 'blanc de noirs' made from 100% authorised red grapes, and the label must say so. Otherwise a white needs at least 85% of the authorised white grapes."
  },
  {
    id: "es-223",
    type: "connection",
    country: "Spain",
    question: "Where does DO Jumilla's production zone lie?",
    options: [
      "Only in Murcia, around Jumilla town",
      "Jumilla in Murcia, six towns in Albacete",
      "In Murcia, Albacete and Alicante provinces",
      "Only in Albacete, around Hellín town"
    ],
    answer: 1,
    region: "jumilla",
    explanation: "The zone is the municipality of Jumilla in Murcia, plus Fuente-Álamo, Albatana, Ontur, Hellín, Tobarra and Montealegre del Castillo in Albacete."
  },
  {
    id: "es-224",
    type: "connection",
    country: "Spain",
    question: "How long must a white Valdepeñas Crianza age in total?",
    options: [
      "18 months, 6 in oak",
      "12 months, 3 in oak",
      "24 months, 6 in oak",
      "36 months, 12 in oak"
    ],
    answer: 0,
    region: "valdepenas",
    explanation: "A white Crianza needs 18 months, with at least 6 in oak of 330 L or less; a red Crianza needs 24 months. The 2019 rule book was read; a renewal may be under way."
  },
  {
    id: "es-225",
    type: "connection",
    country: "Spain",
    question: "What colours may Valdepeñas sparkling wine be?",
    options: [
      "White only",
      "White and rosé",
      "Red, white and rosé",
      "Rosé only"
    ],
    answer: 1,
    region: "valdepenas",
    explanation: "Valdepeñas quality sparkling wine may be white or rosé, with its bubbles from its own fermentation and at least 11% alcohol. The 2019 rule book was read."
  },
  {
    id: "pt-74",
    type: "connection",
    country: "Portugal",
    question: "When was Bairrada first officially recognised and demarcated?",
    options: [
      "1908",
      "1937",
      "1979",
      "1991"
    ],
    answer: 2,
    region: "bairrada",
    explanation: "Despite its long wine history, Bairrada was only recognised and demarcated in 1979. Its regional wine commission followed in 1986."
  },
  {
    id: "pt-75",
    type: "connection",
    country: "Portugal",
    question: "What did Portugal's 1991 Bairrada decree add to the denomination?",
    options: [
      "Fortified and late-harvest wines",
      "Wines made only from Arinto",
      "A cru tier for single vineyards",
      "Rosé and sparkling wines"
    ],
    answer: 3,
    region: "bairrada",
    explanation: "The 1991 decree extended the denomination to rosé and natural sparkling wines, citing a climate well suited to them. Sparkling wine had already been made there for about a century."
  },
  {
    id: "de-67",
    type: "connection",
    country: "Germany",
    question: "Which parts of Baden may sell their wine in the flat, round Bocksbeutel bottle?",
    options: [
      "The whole of Baden, exactly as in Franken",
      "Only the Kaiserstuhl and Tuniberg",
      "Taubertal and four Baden-Baden villages",
      "None at all: the bottle is reserved for Franken"
    ],
    answer: 2,
    region: "baden",
    explanation: "EU rules reserve the Bocksbeutel for Franken and for parts of Baden: Taubertal, Schüpfergrund, and Neuweier, Steinbach, Umweg and Varnhalt in Baden-Baden."
  },
  {
    id: "de-68",
    type: "connection",
    country: "Germany",
    question: "Which two German state governments may set extra quality rules for wine sold in Bocksbeutel bottles?",
    options: [
      "Baden-Württemberg and Bavaria",
      "Rhineland-Palatinate and Hesse",
      "Bavaria and Saxony",
      "Hesse and Baden-Württemberg"
    ],
    answer: 0,
    region: "baden",
    explanation: "German wine rules let Baden-Württemberg (for Baden) and Bavaria (for Franken) require, for example, a minimum score in the official quality test before wine goes into a Bocksbeutel."
  },
  {
    id: "de-69",
    type: "connection",
    country: "Germany",
    question: "Before the 1971 German wine law, how were Nahe wines usually sold?",
    options: [
      "As Mosel wine",
      "As plain Rhine wine",
      "As Franken wine",
      "Under their village names only"
    ],
    answer: 1,
    region: "nahe",
    explanation: "The Nahe became a wine region of its own only with the 1971 wine law. Before that, its wines were sold simply as Rhine wine."
  },
  {
    id: "de-71",
    type: "connection",
    country: "Germany",
    question: "Where and when did Georg Scheu breed the Scheurebe grape?",
    options: [
      "Alzey in Rheinhessen, in 1916",
      "Geisenheim in the Rheingau, in 1882",
      "Würzburg in Franken, in 1929",
      "Freiburg in Baden, in 1938"
    ],
    answer: 0,
    region: "rheinhessen",
    explanation: "Scheu bred it at the state vine-breeding institute in Alzey in 1916. Rheinhessen still has about half of Germany's Scheurebe."
  },
  {
    id: "de-72",
    type: "connection",
    country: "Germany",
    question: "DNA tests in 2012 showed Scheurebe's parents. Which are they?",
    options: [
      "Riesling and Silvaner",
      "Silvaner and Trollinger",
      "Riesling and Bukettrebe",
      "Müller-Thurgau and Riesling"
    ],
    answer: 2,
    region: "rheinhessen",
    explanation: "For decades it was thought to be Riesling and Silvaner, but DNA tests showed the second parent is Bukettrebe."
  },
  {
    id: "at-27",
    type: "connection",
    country: "Austria",
    question: "Which area makes up Vulkanland Steiermark DAC?",
    options: [
      "All of Steiermark south of the city of Graz",
      "Only the district of Leibnitz",
      "The Schilcher country west of Graz",
      "Three districts and part of Leibnitz"
    ],
    answer: 3,
    region: "steiermark",
    explanation: "The DAC rules define it as the districts of Südoststeiermark, Hartberg-Fürstenfeld and Weiz, plus the Leibnitz villages on the left bank of the Mur."
  },
  {
    id: "at-28",
    type: "connection",
    country: "Austria",
    question: "Where must a Südsteiermark DAC wine be made and bottled?",
    options: [
      "Anywhere in Austria",
      "In the Steiermark wine region",
      "Only on the estate that grew it",
      "In the Südsteiermark district only"
    ],
    answer: 1,
    region: "steiermark",
    explanation: "The 2018 DAC rules say Südsteiermark DAC must be made and bottled in the Steiermark wine region."
  },
  {
    id: "es-226",
    type: "scenario",
    country: "Spain",
    question: "Which words may a Castilla y León label use in place of 'IGP'?",
    options: [
      "Denominación de Origen",
      "Vino de la Tierra",
      "Vino de Pago",
      "Vino de Calidad"
    ],
    answer: 1,
    region: "castillaYLeon",
    explanation: "The rule book lets the traditional term 'Vino de la Tierra' stand in for IGP. Castilla y León is a protected geographical indication, a step below the DOs inside it."
  },
  {
    id: "es-227",
    type: "connection",
    country: "Spain",
    question: "Which area does the Castilla y León IGP cover?",
    options: [
      "Only the Duero valley",
      "Only land outside the DOs",
      "Every municipality in the region",
      "The provinces of León and Zamora"
    ],
    answer: 2,
    region: "castillaYLeon",
    explanation: "It covers every municipality in Castilla y León, so growers outside the region's DOs, such as Ribera del Duero and Rueda, can still use a regional name."
  },
  {
    id: "es-228",
    type: "scenario",
    country: "Spain",
    question: "A Castilla y León wine says 'Roble' on the label. What does that require?",
    options: [
      "At least 3 months in oak barrels",
      "At least 12 months in oak barrels",
      "Fermentation in new oak only",
      "Two years of ageing in total"
    ],
    answer: 0,
    region: "castillaYLeon",
    explanation: "The rule book allows 'Roble' only when the wine has spent at least three months in oak barrels."
  },
  {
    id: "es-229",
    type: "connection",
    country: "Spain",
    question: "How much wine may a Castilla y León producer press from 100 kg of grapes?",
    options: [
      "Up to 60 litres",
      "Up to 70 litres",
      "Up to 85 litres",
      "Up to 75 litres"
    ],
    answer: 3,
    region: "castillaYLeon",
    explanation: "Pressing may give no more than 75 litres of wine from 100 kg of grapes, and yields are capped at 16,000 kg a hectare."
  },
  {
    id: "es-230",
    type: "connection",
    country: "Spain",
    question: "Which of these is one of Castilla y León's main local red grapes?",
    options: [
      "Bobal, from Valencia",
      "Prieto Picudo",
      "Monastrell, from Murcia",
      "Cariñena"
    ],
    answer: 1,
    region: "castillaYLeon",
    explanation: "The main reds are Tempranillo, Garnacha Tinta, Mencía, Juan García and Prieto Picudo. Prieto Picudo also gives full-bodied rosés."
  },
  {
    id: "es-231",
    type: "connection",
    country: "Spain",
    question: "Why does Castilla y León's climate make frost a real risk for vines?",
    options: [
      "The sea air brings fog that freezes",
      "The vines grow below sea level",
      "Altitude brings long frost seasons",
      "Rain falls mostly as snow in summer"
    ],
    answer: 2,
    region: "castillaYLeon",
    explanation: "More than 98% of the land is above 600 m. Frost can come on 180 to 220 days a year, from October to May, and late frosts are frequent."
  },
  {
    id: "es-232",
    type: "scenario",
    country: "Spain",
    question: "Which wine types may be made under the Castilla y León IGP?",
    options: [
      "Still, liqueur, sparkling, aguja",
      "Only still red and white wines, no rosé",
      "Only still wines and fortified wines",
      "Only red wines that have aged in oak"
    ],
    answer: 0,
    region: "castillaYLeon",
    explanation: "It allows still white, rosé and red wine, liqueur wine, quality sparkling wine, semi-sparkling vino de aguja and wine from overripe grapes."
  },
  {
    id: "es-233",
    type: "connection",
    country: "Spain",
    question: "What is the minimum alcohol for a red Castilla y León wine?",
    options: [
      "9% in total",
      "13% in total",
      "10% in total",
      "11% in total"
    ],
    answer: 3,
    region: "castillaYLeon",
    explanation: "Reds need at least 11% total alcohol. Whites and rosés need 9%, and still wines may not go above 16%."
  },
  {
    id: "es-234",
    type: "map",
    country: "Spain",
    question: "Which Vino de la Tierra covers the whole of the high northern plateau around the Duero, taking in Ribera del Duero, Rueda, Toro and Bierzo?",
    answer: "castillaYLeon",
    explanation: "Castilla y León is one IGP for the whole region, from El Bierzo in the west to Soria in the east."
  },
  {
    id: "de-73",
    type: "connection",
    country: "Germany",
    question: "Besides the Nahe itself, which two rivers have vineyards on or near their banks in the Nahe region?",
    options: [
      "The Glan and the Alsenz",
      "The Ahr and the Lahn",
      "The Saar and the Ruwer, near Trier",
      "The Main and the Tauber"
    ],
    answer: 0,
    region: "nahe",
    explanation: "Vines grow along the Nahe and two side rivers, the Glan and the Alsenz. Winegrowing has shaped these valleys for about 2,000 years."
  },
  {
    id: "de-74",
    type: "connection",
    country: "Germany",
    question: "How is a large share of Nahe wine sold?",
    options: [
      "Through big cooperatives, as in Baden",
      "Directly to consumers by single estates",
      "In bulk to merchants in Rheinhessen",
      "Mostly as export wine under a Rhine label"
    ],
    answer: 1,
    region: "nahe",
    explanation: "Many Nahe estates sell straight to their customers. Cooperatives exist, at Meddersheim and Bretzenheim, but matter less here than in Baden, Württemberg or Franken."
  },
  {
    id: "gr-28",
    type: "connection",
    country: "Greece",
    question: "Why are traditional-style Naoussa reds pale and austere when young?",
    options: [
      "They are made from early-picked grapes grown on the flat plain",
      "They are blended with white grapes",
      "Long skin contact and long wood ageing to soften tannin",
      "They are bottled straight after fermentation, with no oak at all"
    ],
    answer: 2,
    region: "naoussa",
    explanation: "Traditional producers give Xinomavro long skin contact and long wood ageing to tame its tannins. The wine starts pale and severe and needs time in bottle."
  },
  {
    id: "gr-29",
    type: "connection",
    country: "Greece",
    question: "How do modern-style Naoussa reds differ from traditional ones?",
    options: [
      "They are paler and need longer in bottle",
      "They are made from a blend of Xinomavro and Merlot",
      "They are always sweet and low in alcohol",
      "More colour and fruit, easier to drink young"
    ],
    answer: 3,
    region: "naoussa",
    explanation: "Modern Naoussa has riper, more concentrated fruit, deeper colour and firm but less aggressive tannins, sometimes with noticeable oak. Both styles can age for more than ten years."
  },
  {
    id: "es-235",
    type: "connection",
    country: "Spain",
    question: "A red Rioja is labelled Gran Reserva. What is the least time it must have spent in oak?",
    options: [
      "6 months",
      "12 months",
      "24 months",
      "36 months"
    ],
    answer: 2,
    region: "rioja",
    explanation: "A red Rioja Gran Reserva needs at least 60 months of ageing in total, with at least 24 in oak barrels and 24 in bottle. Crianza and Reserva need 12 months in oak."
  },
  {
    id: "es-236",
    type: "connection",
    country: "Spain",
    question: "Since 2017, which Rioja label names a wine from one single vineyard?",
    options: [
      "Viñedo Singular",
      "Vino de Municipio",
      "Rioja Oriental",
      "Gran Reserva"
    ],
    answer: 0,
    region: "rioja",
    explanation: "Viñedo Singular is Rioja's single-vineyard label. Vino de Municipio names one village, Rioja Oriental is one of the three zones, and Gran Reserva is an ageing term."
  },
  {
    id: "es-237",
    type: "connection",
    country: "Spain",
    question: "Which Priorat tier sits at the top of the DOQ's own classification?",
    options: [
      "Vi de Vila (village)",
      "Vi de Paratge (named site)",
      "Vinya Classificada (vineyard)",
      "Gran Vinya Classificada"
    ],
    answer: 3,
    region: "priorat",
    explanation: "Priorat's ladder runs DOQ Priorat, Vi de Vila (one village), Vi de Paratge (one named site), Vinya Classificada and, at the top, Gran Vinya Classificada."
  },
  {
    id: "es-238",
    type: "connection",
    country: "Spain",
    question: "A Priorat label says Vi de Vila. What does that tell you?",
    options: [
      "The grapes come from one village",
      "The wine spent a year in oak",
      "The vines are over seventy-five years old",
      "It is a sweet fortified wine"
    ],
    answer: 0,
    region: "priorat",
    explanation: "Vi de Vila is Priorat's village tier: the grapes come from one of the DOQ's named villages, such as Gratallops or Porrera."
  },
  {
    id: "es-239",
    type: "connection",
    country: "Spain",
    topic: "fortified",
    question: "A Sherry is labelled 15 Years. Why is that figure an average rather than an exact age?",
    options: [
      "The solera blends younger wine into older wine",
      "The label rounds to the nearest five years",
      "The age counts from the date of the grape harvest",
      "It is the age of the oldest barrel used"
    ],
    answer: 0,
    region: "sherry",
    explanation: "In a solera, wine is drawn from the oldest barrels and topped up with younger wine, so no Sherry has a single vintage. The Consejo Regulador says the age can only be given as an average."
  }
];
