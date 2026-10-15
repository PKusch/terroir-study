// ─── Wine Data: Portugal Regions ─────────────────────────────────────────────
// Same field shape as germany.js, with `country` set to Portugal.
export const PORTUGAL_REGIONS = {
  vinhoVerde: {
    name: "Vinho Verde",
    country: "Portugal",
    climate: "Cool, wet maritime",
    climateDetail: "The northwest corner of Portugal is its wettest and greenest wine region. Winters are mild and summers warm and humid, with the Atlantic close by. Rain and humidity are the main problems, bringing rot and mildew; the sea air keeps temperatures moderate and the wines light.",
    keyGrapes: { red: [], white: ["Alvarinho", "Loureiro", "Arinto", "Trajadura"] },
    subRegions: ["Monção e Melgaço", "Lima", "Cávado", "Basto", "Amarante"],
    soils: "Granite: thin, sandy and acidic, weathered into a light soil that drains quickly, so the heavy rain runs through it.",
    viticultureNotes: "Vines were traditionally trained high, up pergolas or trees, to keep the grapes off damp ground and let air move through; many growers now use wires. Alvarinho is the finest grape, at its best in the Monção e Melgaço sub-region in the far north, beside Spain (it is Albariño across the river). Loureiro, Arinto (called Pedernã here), Trajadura and Azal make up most of the rest.",
    winemaking: "Picked early, at low sugar and high acidity, then fermented cool in stainless steel and bottled young for freshness. A little carbon dioxide is often kept or added to give a light spritz. Alvarinho can be made fuller, with lees stirring or a little oak. Most Vinho Verde is white; red and rosé are mostly drunk locally.",
    typicalStyle: "Pale, light body, low alcohol (often 9–11.5% abv), high acidity and sometimes a light spritz; lemon, lime, green apple and white flowers. Alvarinho: fuller, with ripe peach and citrus and more alcohol.",
    qualityLevels: ["Vinho", "Vinho Regional Minho", "DOC Vinho Verde", "DOC Vinho Verde sub-region (e.g. Monção e Melgaço)"],
    whyConnection: "Atlantic rain and humidity → high disease pressure → vines trained high for air and an early harvest. A cool, wet climate → grapes with low sugar and high acidity → light, low-alcohol, refreshing wine.",
    color: "#6FB05C"
  },
  douro: {
    name: "Douro",
    country: "Portugal",
    climate: "Hot, dry continental",
    climateDetail: "Hot, dry summers and cold winters in a steep river valley. The Serra do Marão mountains to the west hold back the Atlantic rain, so rainfall falls from west to east: the Baixo Corgo is the wettest, the Douro Superior near the Spanish border the hottest and driest.",
    keyGrapes: { red: ["Touriga Nacional", "Touriga Franca", "Tinta Roriz (Tempranillo)"], white: [] },
    subRegions: ["Baixo Corgo", "Cima Corgo", "Douro Superior"],
    soils: "Schist (xisto) on almost every slope: broken, layered rock that vine roots push deep into to find water; some granite on higher ground.",
    viticultureNotes: "Vineyards are cut into steep slopes as terraces, the older ones held up by stone walls, with wider terraces (patamares) and vines planted straight up the slope in newer sites. Old vineyards are often field blends of many grapes. Main reds: Touriga Nacional (aromatic, concentrated), Touriga Franca (the most planted, floral and structured), Tinta Roriz (Tempranillo), Tinta Barroca and Tinto Cão. Whites include Gouveio, Viosinho, Rabigato and Malvasia Fina.",
    winemaking: "Two families of wine. Port: fermentation is stopped part-way by adding grape spirit (aguardente, about 77% abv), so the wine keeps natural sweetness and ends up at 19–22% abv. It is aged in oak and in the lodges of Vila Nova de Gaia: Ruby (young, kept in tank or large oak), Reserve, Late Bottled Vintage (LBV), Tawny (aged in oak for years, nutty and oxidative) and Vintage (declared only in the best years, bottled young and aged in bottle). Table wine: dry reds and whites under Douro DOC, from the same grapes.",
    typicalStyle: "Ruby Port: deep ruby, sweet, full body, red and black fruit, a spirity kick. Tawny: amber-brown, nutty, dried fruit and caramel, high acidity. Douro red: deep colour, full body, high tannin, black fruit, violet and spice.",
    qualityLevels: ["Vinho Regional Duriense", "DOC Douro (table wine)", "DOC Porto: Ruby, Tawny", "DOC Porto: Reserve, LBV", "DOC Porto: aged Tawny (10, 20, 30, 40 years), Colheita", "DOC Porto: Vintage"],
    whyConnection: "Steep schist, hot dry summers and deep roots → low yields of concentrated, tannic grapes → wines strong enough to carry fortification and long ageing. Atlantic rain stops at the mountains → the Douro Superior is the hottest and driest part.",
    color: "#7A3E6B"
  },
  alentejo: {
    name: "Alentejo",
    country: "Portugal",
    climate: "Hot Mediterranean-continental",
    climateDetail: "A large, flat to rolling plain in the south, inland from the Atlantic. Summers are long, hot and dry, and winters mild. The hills near the Spanish border (Portalegre) are cooler thanks to altitude; the plains are the hottest. Water is short, so irrigation is common.",
    keyGrapes: { red: ["Aragonez (Tempranillo)", "Trincadeira", "Alicante Bouschet", "Syrah"], white: ["Antão Vaz", "Arinto"] },
    subRegions: ["Évora", "Borba", "Reguengos", "Vidigueira", "Portalegre", "Moura"],
    soils: "Varied: granite and schist in the north near Portalegre; clay and limestone around Borba and Vidigueira; deep, fertile clay and sand across much of the plain.",
    viticultureNotes: "Large estates and big vineyards on flat land that suits machine harvest, with cork oak woods between them. Main reds: Aragonez (Tempranillo), Trincadeira (late-ripening, it needs heat and a dry autumn), Alicante Bouschet (a red-fleshed grape of very deep colour), Syrah and Touriga Nacional. Whites: Antão Vaz (it keeps acidity in the heat), Arinto and Roupeiro.",
    winemaking: "Mostly fruit-driven, soft reds in stainless steel with some oak ageing; Alicante Bouschet and Trincadeira are blended for colour and concentration. Whites are picked early or at night to keep freshness. A traditional method survives in Vidigueira and nearby: vinho de talha, fermented on the skins in clay amphorae.",
    typicalStyle: "Red: deep ruby, medium to full body, ripe red and black plum, spice, soft to medium tannin, often high alcohol. White: medium body, lower acidity, stone fruit and citrus. Aged Reserva reds gain vanilla and dried fruit.",
    qualityLevels: ["Vinho", "Vinho Regional Alentejano", "DOC Alentejo", "DOC Alentejo sub-region (Borba, Évora, Granja-Amareleja, Moura, Portalegre, Redondo, Reguengos, Vidigueira)", "Reserva / Garrafeira"],
    whyConnection: "Heat and sun on a flat plain → fully ripe, fruit-forward grapes with high sugar and low acidity → soft, easy wines. Altitude (Portalegre) and night picking win back freshness → good-value, approachable wines rather than the angular, structured wines of the north.",
    color: "#D08B3A"
  }
};
