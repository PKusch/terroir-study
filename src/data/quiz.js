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
      "Gravel on the Left Bank, with Cabernet Sauvignon",
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
      "The limestone soils are too alkaline for any other grape",
      "Burgundy is warm enough for late-ripening grapes such as Grenache",
      "The continental climate with cold winters favours early-ripening varieties, and both ripen early",
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
      "Burgundy is terroir-driven: the same grape on a different site makes a different wine",
      "Frost and hail force growers to spread their risk across many small holdings",
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
      "Autumn rain at harvest from the Atlantic",
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
    question: "Which region grows Syrah on steep granite terraces that have to be harvested by hand?",
    answer: "rhoneNorth",
    explanation: "The Northern Rhône's vineyards (Côte-Rôtie, Hermitage, Cornas) sit on steep granite hillsides. The slopes give good drainage and sun exposure for Syrah, but they are too steep for anything but hand harvesting, so production is small."
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
      "It carries warm air that raises sugar levels",
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
      "Bush vines are required for the Châteauneuf-du-Pape label",
      "Bush vines protect the buds from spring frost",
      "In the hot climate no trellising is needed, and the bush shades the grapes from intense sun",
      "Bush vines expose the grapes to more Mistral wind"
    ],
    answer: 2,
    region: "rhoneSouth",
    explanation: "The Southern Rhône is hot and dry, so Grenache does not need trellising to ripen. The bushy canopy shades the bunches from the strong sun, which protects them from the heat."
  },
  {
    id: "fr-29",
    type: "connection",
    question: "Why do Southern Rhône producers age their reds in large old oak (foudre) rather than new barriques?",
    options: [
      "Oak flavour is not the goal; they want the fruit, herbs and spice of the Grenache blend to show",
      "Large casks add more oak flavour than small barrels",
      "New barriques would make the wine too high in alcohol",
      "Foudres are needed to soften Grenache's aggressive tannins"
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
      "Corbières (Languedoc)",
      "Cornas (Northern Rhône)",
      "Châteauneuf-du-Pape (Southern Rhône)",
      "Bandol (Provence)"
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
      "It deposits the flint that gives Sancerre its minerality",
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
      "Riesling from Alsace",
      "Gewurztraminer from Alsace",
      "Viognier from Condrieu",
      "Chenin Blanc from Vouvray"
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
      "Ageing in large oak foudres absorbs the sweetness",
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
      "Crémant d'Alsace",
      "Vendange Tardive",
      "Sélection de Grains Nobles",
      "Alsace Grand Cru"
    ],
    answer: 2,
    region: "alsace",
    explanation: "Sélection de Grains Nobles is Alsace's botrytis category. Vendange Tardive means late harvest. Crémant d'Alsace is sparkling, and Grand Cru refers to a single vineyard site with specific grapes only."
  },
  {
    id: "fr-39",
    type: "connection",
    question: "Why does Champagne's marginal climate produce such good base wine for sparkling?",
    options: [
      "The chalk soil adds the bubbles during the first fermentation",
      "The cold makes the second fermentation happen in the bottle on its own",
      "Strong sunshine gives ripe, sugar-rich grapes",
      "The grapes barely ripen, giving high acid and low sugar, which is exactly what sparkling base wine needs"
    ],
    answer: 3,
    region: "champagne",
    explanation: "Champagne sits at the northern limit of viticulture. Grapes there stay high in acid and low in sugar, which would make a thin still wine but is ideal for the traditional method, where the second fermentation adds about 1.5% alcohol and the bubbles."
  },
  {
    id: "fr-40",
    type: "scenario",
    question: "A Champagne shows bready, biscuity, brioche notes. Where do those flavours come from?",
    options: [
      "New oak barrels used in the first fermentation",
      "Autolysis: the wine resting on its yeast lees after the second fermentation in bottle",
      "The chalk soil, which gives a biscuity minerality",
      "A high proportion of Pinot Meunier in the blend"
    ],
    answer: 1,
    region: "champagne",
    explanation: "After the second fermentation in bottle (prise de mousse), the dead yeast cells break down in a process called autolysis. That is what gives Champagne its bready, biscuity character. The longer on the lees, the stronger it gets."
  },
  {
    id: "fr-41",
    type: "scenario",
    question: "A Champagne is labelled Blanc de Blancs, meaning it is made only from white grapes. Which grape is it, and how will it taste compared with a Blanc de Noirs?",
    options: [
      "Chardonnay; elegant and citrussy, where Blanc de Noirs is fuller with red fruit",
      "Pinot Meunier; fuller and red-fruited, where Blanc de Noirs is elegant",
      "Chardonnay and Pinot Noir blended; richer than either alone",
      "Pinot Noir; copper-coloured with red fruit"
    ],
    answer: 0,
    region: "champagne",
    explanation: "Chardonnay is Champagne's only white grape, so a Blanc de Blancs must be Chardonnay: elegant and citrussy. Blanc de Noirs comes from the black grapes, Pinot Noir and Pinot Meunier, and is fuller with red fruit."
  },
  {
    id: "fr-42",
    type: "connection",
    question: "Why does a vintage Champagne usually taste more bready and developed than a non-vintage one?",
    options: [
      "Vintage wines must spend at least 36 months on the lees, against 15 for non-vintage, so autolysis has longer to work",
      "Vintage wines use only Pinot Noir",
      "Vintage wines skip the second fermentation",
      "Vintage wines are made from chalk-grown grapes only"
    ],
    answer: 0,
    region: "champagne",
    explanation: "The minimum lees ageing is 15 months for non-vintage and 36 months for vintage. Autolysis, the breakdown of yeast on the lees, builds bready, biscuity flavour, so more time on the lees means more of it."
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
      "Old vines give low yields, and with the Mediterranean heat that means concentrated wines",
      "Old Carignan vines ripen early enough to avoid the summer heat",
      "Carignan on galets ripens more fully than Grenache"
    ],
    answer: 1,
    region: "languedocRoussillon",
    explanation: "The Languedoc used to be about bulk. Its old Carignan vines produce little fruit, and low yields plus hot, dry summers give concentrated wine, which is what the new quality producers want."
  },
  {
    id: "fr-45",
    type: "connection",
    question: "Why does Roussillon's schist suit Grenache destined for fortified wine?",
    options: [
      "Schist stores water so the vines never suffer in the heat",
      "Schist is a form of chalk that keeps the acidity high",
      "Schist stresses the vines, giving complex, concentrated Grenache",
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
    explanation: "Maury and Banyuls are Vin Doux Naturel: sweet, fortified, and oxidative in style, made from Grenache. Jurançon moelleux comes from late-harvested Petit Manseng, Sélection de Grains Nobles from botrytised Alsace grapes, and sweet Vouvray from botrytised Chenin Blanc; none is a fortified Grenache wine."
  },
  {
    id: "fr-48",
    type: "connection",
    question: "Most of Provence makes rosé, yet Bandol fully ripens Mourvèdre for serious reds. Why?",
    options: [
      "Bandol is cooler, which Mourvèdre prefers",
      "Bandol uses carbonic maceration to extract colour quickly",
      "Bandol's soils are galets that radiate heat at night",
      "Bandol's terraced limestone amphitheatre faces the sea and is sheltered and warm, and Mourvèdre needs more heat than Grenache"
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
      "Eighteen months in large oak"
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
      "Cool sea fog keeps the grapes from over-ripening",
      "Chalk soils give the high acidity rosé needs",
      "Mediterranean sun and the Mistral wind keep the grapes healthy, and an early harvest keeps the wine fresh",
      "Heavy autumn rain dilutes the colour naturally"
    ],
    answer: 2,
    region: "provence",
    explanation: "Hot, dry summers and the drying Mistral mean healthy grapes with little rot. Picking early keeps the acidity and freshness that a pale, dry rosé depends on."
  },
  {
    id: "fr-51",
    type: "map",
    question: "Which region is France's oldest wine region, growing Cinsault and Rolle (Vermentino) beside Grenache and Mourvèdre?",
    answer: "provence",
    explanation: "Provence is the oldest wine region in France. Cinsault and Rolle (also called Vermentino) are local to it, alongside the Mourvèdre, Grenache and Syrah it shares with the Rhône. Rosé makes up 88% of its production."
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
      "Its thick skins resist botrytis and let the sugar concentrate for late-harvest wines",
      "It is fortified with grape spirit like Maury",
      "Its low acidity makes the sweetness feel richer"
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
      "The South-West is cooler and wetter, so its wines are lighter",
      "The South-West is Mediterranean, like the Languedoc",
      "The South-West uses the same grapes but ages them in foudre",
      "Inland the climate is warmer and more continental, and indigenous grapes such as Malbec, Tannat and Petit Manseng set it apart"
    ],
    answer: 3,
    region: "southWest",
    explanation: "Atlantic influence fades as you move east, so inland the South-West is warmer and more continental than Bordeaux, giving fully ripe, concentrated grapes. Its own grapes, Malbec, Tannat, Négrette and the Mansengs, are what really distinguish it."
  },
  {
    id: "fr-55",
    type: "map",
    question: "Which region grows only Gamay, with ten Cru villages on granite hills?",
    answer: "beaujolais",
    explanation: "Beaujolais is Gamay country and nothing else. The ten Crus, such as Morgon, Fleurie and Moulin-à-Vent, sit on granite, which gives Gamay structure and minerality that it lacks on the clay of the south."
  },
  {
    id: "fr-56",
    type: "connection",
    question: "Why does carbonic maceration suit Gamay so well?",
    options: [
      "It pulls out colour and fruit without harsh tannins, which suits a thin-skinned, low-tannin grape",
      "It adds the tannin Gamay lacks",
      "It gives the oxidative character Gamay needs to age",
      "It is the only method that works on granite soils"
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
      "Cru Beaujolais, aged in oak",
      "Bourgogne Pinot Noir, whole bunch fermented",
      "Chinon, from Cabernet Franc",
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
      "Nebbiolo buds early and ripens late, so it needs the extra warmth to ripen its tannins",
      "Nebbiolo is thin-skinned and burns on cooler, shadier slopes",
      "Dolcetto and Barbera need the autumn fog to ripen properly",
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
    question: "Nebbiolo is named after the autumn fog (nebbia) of the Langhe. What does the fog do for Barolo?",
    options: [
      "It shortens the season, so the grapes are picked early and stay light",
      "It raises humidity and encourages noble rot, as in Sauternes",
      "It cools the vineyards while the grapes hang late, so slow ripening keeps the high acidity that lets the wine age",
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
      "The coastal gravel and clay are too wet for Sangiovese's roots",
      "Cool nights from altitude slow ripening and keep the acidity Sangiovese loses in heat",
      "Sangiovese ripens early, so it would rot in the coastal humidity",
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
      "Deep, fertile soils give high yields and light, simple wines",
      "Volcanic soils give a smoky edge, as on Etna",
      "Chalk soils give the high acidity needed for sparkling wine",
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
      "Stop the fermentation early by chilling, as for Moscato d'Asti",
      "Fortify the wine with spirit, as for Marsala",
      "Wait for noble rot on the vine, as in Sauternes"
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
      "Corvina rots easily on the vine, so the bunches must be dried to save them",
      "Corvina makes light wines on its own, and drying concentrates its sugar and flavour",
      "The plain is too cold to ripen the grapes fully in the vineyard",
      "The DOC rules require every Valpolicella wine to be made from dried grapes"
    ],
    answer: 1,
    region: "veneto",
    explanation: "Corvina on its own gives a light, sour-cherry red. Drying healthy bunches for months lets the water leave while sugar and flavour stay, so the same grape can make full-bodied Amarone and sweet Recioto. Plain Valpolicella is made from fresh grapes."
  },
  {
    id: "it-16",
    type: "connection",
    country: "Italy",
    question: "Why is Prosecco made by the tank method rather than the traditional method used in Champagne?",
    options: [
      "Glera's firm tannins need the shorter process to soften",
      "The tank method gives higher pressure and firmer bubbles",
      "It keeps Glera's fresh apple and pear aromas, with no lees character, and gets the wine to market quickly",
      "Glera is machine-picked, and machine-picked grapes cannot be bottle-fermented"
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
      "Blend in Pinot Grigio for extra weight",
      "Age the wine for five years in new barriques"
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
      "In flat, machine-worked vineyards, then made by the tank method",
      "By drying the Garganega and fermenting it sweet",
      "In the hillside Classico zone, on volcanic and limestone soils, with pergola training"
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
      "Nerello Mascalese is naturally low in sugar, whatever the site",
      "Sea breezes off the coast keep the vineyards cool",
      "Altitude on Etna gives cool nights, so the grapes keep high acid and fine tannin",
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
      "It ripens early, like Primitivo, so it escapes the summer heat",
      "It needs a cool, damp autumn to keep its acidity",
      "It has low acidity, so the heat does it no harm",
      "It buds early and ripens very late, and only the long, dry southern autumn lets it finish"
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
      "Planting the most fertile part of the plain for higher yields",
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
      "Blend in Primitivo to soften the wine",
      "Extended ageing in oak and bottle, which softens the tannin",
      "Dry the grapes first, as for Amarone",
      "Fortify the wine, as for Marsala"
    ],
    answer: 1,
    region: "southernItaly",
    explanation: "Taurasi and Aglianico del Vulture require extended ageing in oak and bottle before release. Time is what softens Aglianico's high tannin, in the same way that Barolo needs its years before it is sold."
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
      "The west is cooler with some Atlantic influence, which suits early-ripening Tempranillo; the east is warmer and drier, giving Garnacha the heat it needs",
      "Garnacha needs the clay-limestone slopes, which are only found in the east",
      "Tempranillo ripens late, so it needs the extra heat of the western zones",
      "The Ebro floods the western vineyards each spring, and only Tempranillo tolerates wet roots"
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
      "Fully ripe Garnacha gives coconut when it is grown in the east",
      "Malolactic fermentation in stainless steel produces these aromas",
      "The wine has spent years in American oak barrels, which give vanilla and coconut",
      "The clay-limestone soils of Rioja Alta add sweet spice to the fruit"
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
      "Joven",
      "Crianza",
      "Reserva",
      "Gran Reserva"
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
      "Cabernet Sauvignon makes up most of the Ribera blend",
      "American oak gives more tannin than French oak",
      "The Atlantic keeps Ribera humid, which thickens the skins",
      "Hot days on the high plateau build deep colour and thick skins, while cold nights keep the acidity"
    ],
    answer: 3,
    region: "riberaDelDuero",
    explanation: "The difference is altitude. Hot days on the plateau give deep colour and thick skins, so firmer tannin, while cold nights keep the acidity that heat would otherwise burn off. Only small amounts of Cabernet Sauvignon are permitted, and French oak is the more common barrel here."
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
      "Spring and autumn frost, because altitude means late budding and an early end to the season",
      "Drought from the hot levante wind, as in Jerez",
      "Rot from autumn mists off the river, as in the Rheingau",
      "Heat stress on black slate, as in Priorat"
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
      "Garnacha and Graciano",
      "Verdejo",
      "Cabernet Sauvignon and Merlot",
      "Syrah and Cariñena"
    ],
    answer: 2,
    region: "riberaDelDuero",
    explanation: "Ribera del Duero allows small amounts of Cabernet Sauvignon and Merlot in the blend alongside Tempranillo. Garnacha and Graciano belong to the Rioja blend, Verdejo is the white grape of neighbouring Rueda, and Syrah and Cariñena are Priorat's blending grapes."
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
      "Frost at altitude kills much of the crop each spring",
      "The vines are young and not yet in full production",
      "Licorella slate drains freely and holds little water, so the old vines struggle and produce very little",
      "Hand-harvesting on the terraces leaves much of the fruit unpicked"
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
      "It stores heat and drains, so the grapes ripen fully while the roots dig deep for water and the skins thicken",
      "It keeps the soil cool and wet, which slows ripening and keeps the wine light",
      "Its pale surface reflects sunlight back onto the vines, like the albariza of Jerez",
      "Its high fertility gives large bunches with thin skins"
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
      "The DOQ rules ban machinery in the vineyard",
      "The vines are trellised too high for a tractor to pass",
      "The soil is too sandy to carry a machine's weight",
      "The terraces (costers) are too steep for machines, so the work is done by hand"
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
    type: "connection",
    country: "Spain",
    question: "Why does Fino stay pale and fresh while Oloroso turns brown and nutty?",
    options: [
      "Fino is made from Pedro Ximénez and Oloroso from Palomino",
      "Fino is fortified lightly so flor grows and shields it from air; Oloroso is fortified higher, so flor cannot live and the wine ages in contact with air",
      "Fino is aged in stainless steel and Oloroso in new oak",
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
      "The levante wind brings summer rain from the east",
      "Palomino is a drought-resistant red grape with deep roots",
      "The vines are trained high to shade the soil",
      "The albariza soil soaks up the winter rain and holds it through the summer"
    ],
    answer: 3,
    region: "sherry",
    explanation: "Winter rain is the vines' water for the whole year. The chalky albariza stores it and gives it back through the dry summer, and its pale surface reflects light onto the vines. Palomino is a white grape, the levante is a hot dry wind, and the vines are trained low."
  },
  {
    id: "es-23",
    type: "scenario",
    country: "Spain",
    question: "A bodega wants its Fino to taste the same year after year. Which practice delivers that?",
    options: [
      "The solera system, fractional blending across rows of barrels so every bottle is a blend of ages",
      "Bottling each vintage separately, as for a vintage Champagne",
      "Fortifying higher so the flor dies and the wine stabilises",
      "Adding sun-dried Pedro Ximénez to mask the differences between years"
    ],
    answer: 0,
    region: "sherry",
    explanation: "The solera blends young wine into older wine across rows of barrels, so what is drawn off is always a blend of many ages. That is why the house style stays constant from year to year. Fortifying higher would kill the flor and turn the wine into an Oloroso."
  },
  {
    id: "es-24",
    type: "scenario",
    country: "Spain",
    question: "A buyer wants the lightest, freshest and saltiest style of Sherry. Which should they choose?",
    options: [
      "Oloroso from Jerez de la Frontera",
      "Cream",
      "Manzanilla from Sanlúcar de Barrameda",
      "Pedro Ximénez"
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
      "Warm summers give so much sugar that the yeast cannot finish fermenting it",
      "Slow, late ripening keeps very high acidity, so a little residual sugar balances the wine rather than cloying it",
      "The slate soils add sugar to the grapes",
      "German law requires residual sugar in every Qualitätswein"
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
      "The shaded slopes are on fertile loam kept for Müller-Thurgau",
      "The river floods the shaded bank every spring",
      "Slate only occurs on the sunny side of the valley",
      "At this northern latitude only steep, south-facing slopes catch enough of the low sun to ripen Riesling"
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
      "Stainless steel or old large Fuder, no new oak and no malolactic fermentation",
      "New barriques and full malolactic fermentation",
      "Long oxidative ageing under a layer of flor",
      "New American oak, as for a Rioja Reserva"
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
      "The sweetness of the finished wine at bottling",
      "How many years the wine spent in oak",
      "How ripe the grapes were at harvest, so the wine can still be dry if it is labelled trocken",
      "That the grapes were frozen on the vine"
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
      "The loess soils of the eastern Rheingau strip out the acidity",
      "The VDP growers' association forbids residual sugar",
      "More sun and less rain give riper grapes with enough acidity to stay balanced when dry",
      "Autumn mists off the Rhine stop the fermentation before it finishes"
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
      "The Taunus hills trap rain over the vineyards",
      "The slate soils hold moisture around the bunches",
      "Growers leave the grapes to freeze on the vine"
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
      "The deep loess and loam on the gentle eastern slopes",
      "The warm slate sites at the western end, around Assmannshausen",
      "The flat land beside the river",
      "The north-facing side of the Taunus hills"
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
      "It lies further south than any other German region",
      "The Rhine turns west here, so the whole bank faces the sun",
      "Its sandy soils store the summer heat",
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
      "Its warmth ripens Spätburgunder and Dornfelder, which a cool northern region cannot",
      "Its slate soils suit red grapes better than white",
      "The VDP requires red wine for Grosses Gewächs",
      "Müller-Thurgau, its volume grape, is red"
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
      "Carneros sits at high altitude in the mountains",
      "Napa has limestone soils that store heat overnight",
      "Cold Pacific fog and cool air reach Carneros through San Pablo Bay, but the mountains keep most of Napa warm",
      "Carneros gets summer rain that cools the vines"
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
      "Almost no rain falls in the growing season, so the fruit ripens healthy every year and irrigation, not rot, is the main worry",
      "The AVA rules set a minimum ripeness for every wine",
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
      "Barrel fermentation, full malolactic conversion, lees stirring and new oak"
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
      "Carneros",
      "Dry Creek Valley in Sonoma",
      "Russian River Valley",
      "Central Valley"
    ],
    answer: 1,
    region: "california",
    explanation: "Dry Creek Valley is the warmer part of Sonoma, where the fog does not reach, and old-vine Zinfandel does well on its gravel. Carneros and the Russian River are cool and grow Pinot Noir and Chardonnay, while the hot Central Valley makes soft, simple, high-yield wine."
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
      "It is fermented in new oak, which slows the wine down",
      "The humid Hunter brings cloud and harvest rain, so Sémillon is picked early, bottled young and left to age",
      "The terra rossa soil stops the grapes ripening fully",
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
      "Barossa is the coolest region in South Australia",
      "The vines grow on terra rossa over limestone",
      "Irrigation from the Murray keeps the yields high",
      "Some of the world's oldest Shiraz vines grow there, ungrafted because phylloxera never reached South Australia"
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
      "The Barossa Valley floor",
      "Riverland",
      "Hunter Valley"
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
    explanation: "Coonawarra's terra rossa is a flat strip beside the Southern Ocean, and the sea breezes cool the Cabernet so it keeps its structure. The result is blackcurrant, mint, eucalyptus and firm tannin. The Yarra is cool Pinot Noir country, the Barossa is Shiraz, and the Hunter is Sémillon."
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
    question: "Which region grows Sauvignon Blanc as most of its vineyard, on the stony Wairau plain, and holds the world's most southerly wine region?",
    answer: "newZealand",
    explanation: "Sauvignon Blanc is most of New Zealand's vineyard and nearly all of it is in Marlborough, on the flat, stony Wairau valley floor. Central Otago, inland in the south, is the world's most southerly wine region and grows Pinot Noir."
  },
  {
    id: "nw-15",
    type: "connection",
    country: "New World",
    question: "Why is Marlborough Sauvignon Blanc so pungent, with gooseberry and passion fruit, and yet so high in acidity?",
    options: [
      "Barrel fermentation and lees stirring build the aromas",
      "The schist soils add minerality and acidity",
      "Harvest rain dilutes the sugar and keeps the acid",
      "Long sunny days build intense aromas while cool nights keep the acidity, and steel and early bottling keep both"
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
      "The Gimblett Gravels are deep gravel from an old riverbed that warms quickly and drains fast",
      "Hawke's Bay is on the wet west coast, where it is warmer",
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
      "Irrigate more heavily",
      "Open up the canopy so the leaves and fruit get sun and air, the approach that was worked out here",
      "Move the vineyard to the wet west coast",
      "Switch to overhead pergola training"
    ],
    answer: 1,
    region: "newZealand",
    explanation: "Fertile soils and plenty of light make New Zealand vines vigorous, and canopy management, opening the leaves to sun and air, was worked out here to deal with it. More water would only add vigour, and the west coast is where the rain falls. Pergolas belong to Argentina's bulk vineyards."
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
      "They lie nearest the cold sea and higher up, so they are the coolest sites at the Cape",
      "Their granite soils are too poor for Cabernet Sauvignon",
      "The Cape Doctor brings them summer rain",
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
      "It ripens so late that it escapes the Cape heat",
      "It is a crossing bred specially for the Cape",
      "Its high acidity survives the sun, so it stays fresh whether picked for volume or from old vines for concentration",
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
    question: "A producer wants concentrated Syrah and Chenin Blanc from dry-farmed old bush vines, with no irrigation. Which South African district fits?",
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
    explanation: "Chile is walled off by desert, mountains, ocean and ice, so phylloxera never reached it and most vines grow on their own roots. Carmenère was lost to phylloxera in France but survived in Chile, where it was taken for Merlot for a hundred years."
  },
  {
    id: "nw-27",
    type: "connection",
    country: "New World",
    question: "Why do Casablanca and San Antonio grow Sauvignon Blanc and Pinot Noir while Maipo grows Cabernet Sauvignon?",
    options: [
      "Casablanca is high in the Andes, so the nights are cold",
      "Those valleys open to the sea, so fog and cool air pour in; Maipo is warmer and cooled by cold Andean nights instead",
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
      "Colchagua is the only valley free of phylloxera",
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
    explanation: "Maipo Alto sits on the Andean foothills, where the soils are poor, gravelly and free-draining and the cold night air from the mountains keeps Cabernet fresh. The result is full-bodied blackcurrant and mint with firm ripe tannin. Casablanca and Leyda are the foggy coastal valleys for white grapes and Pinot Noir, and Maule is part of the Central Valley volume area."
  },
  {
    id: "nw-30",
    type: "scenario",
    country: "New World",
    question: "A Chilean label carries the word Costa. What does that tell the buyer?",
    options: [
      "The grapes came from the coastal side of the valley, in the fog and cool breezes",
      "The wine was aged in French oak",
      "The grapes came from the Andean foothills",
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
    explanation: "Mendoza is a high desert in the rain shadow of the Andes: very dry, very sunny, with almost no rain in the growing season, so vines depend on snowmelt irrigation. The zonda, a hot dry wind off the mountains, can spoil flowering, and summer hail can strip a vineyard in minutes."
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
      "Mendoza's rich, fertile soils give bigger yields",
      "The zonda wind dries the grapes on the vine",
      "At altitude the intense sunlight thickens the skins for colour and ripe tannin, while cold nights keep the acidity",
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
      "Extreme altitude gives cold nights, which keep the perfume fresh instead of letting it turn oily",
      "It is barrel-fermented with full malolactic conversion",
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
  }
];
