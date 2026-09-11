// ─── Wine Data: Spain Regions ────────────────────────────────────────────────
// Same field shape as france.js and italy.js, with `country` set to Spain.
export const SPAIN_REGIONS = {
  rioja: {
    name: "Rioja",
    country: "Spain",
    climate: "Continental with Atlantic influence",
    climateDetail: "The Cantabrian mountains to the north shield the region from Atlantic rain and wind. Rioja Alta and Rioja Alavesa in the west are cooler and wetter with some Atlantic influence; Rioja Oriental in the east is warmer and drier, with a Mediterranean feel. Drought is a risk in the east.",
    keyGrapes: { red: ["Tempranillo", "Garnacha", "Graciano", "Mazuelo"], white: ["Viura", "Malvasía", "Garnacha Blanca"] },
    subRegions: ["Rioja Alta", "Rioja Alavesa", "Rioja Oriental (Rioja Baja)"],
    soils: "Rioja Alta and Rioja Alavesa: clay-limestone on slopes and terraces — Tempranillo's best sites. Rioja Oriental: alluvial and clay soils on the flatter, warmer valley floor, where Garnacha does well.",
    viticultureNotes: "Tempranillo ripens early (its name comes from temprano, early) and gives elegant, ageworthy wines in the cooler west. Garnacha needs more heat and suits the east, where it adds body and alcohol to the blend. Graciano adds acidity and aroma, Mazuelo adds tannin. Bush vines are traditional; newer plantings are trellised.",
    winemaking: "Blending across grapes and across the three zones is the tradition. Oak ageing is the region's signature: Crianza, Reserva and Gran Reserva mark increasing time in oak and then in bottle before release; Joven is unoaked or barely oaked. American oak is traditional and gives vanilla and coconut; modern producers use French oak, riper fruit and less time in barrel. Whites: traditional oxidative barrel-aged Viura, or modern fresh unoaked styles.",
    typicalStyle: "Red: medium body, medium-high acid, medium tannin; red fruit (strawberry, red plum) with vanilla, coconut and sweet spice from American oak; leather, dried fruit and mushroom with age. Gran Reserva is savoury, mellow and long. Modern styles are darker, riper and more tannic. White: traditional Viura is nutty and oxidative; modern is crisp and neutral.",
    qualityLevels: ["Vino de España", "Vino de la Tierra", "DO", "DOCa Rioja"],
    whyConnection: "The Cantabrian mountains block the Atlantic → the west is cool enough for elegant, high-acid Tempranillo, the east warm enough for ripe Garnacha, and blending the zones gives a balanced wine. Tempranillo's soft red fruit takes oak well → long barrel ageing became the style, and the Crianza–Reserva–Gran Reserva ladder tells the buyer how long the wine spent in oak and bottle. Clay-limestone gives structure; alluvial valley soils give volume.",
    color: "#A83246"
  },
  riberaDelDuero: {
    name: "Ribera del Duero",
    country: "Spain",
    climate: "Continental",
    climateDetail: "High altitude on the Duero plateau: hot summer days, cold nights, harsh winters and a short growing season. Spring and autumn frost are the main risks. Rain is low; the Atlantic and Mediterranean are both far away.",
    keyGrapes: { red: ["Tempranillo (Tinto Fino / Tinta del País)", "Cabernet Sauvignon", "Merlot"], white: [] },
    subRegions: ["Ribera del Duero", "Toro (neighbour on the Duero, Tinta de Toro)", "Rueda (neighbour on the Duero, Verdejo whites)"],
    soils: "Limestone and clay on the plateau and river terraces, with some sand and gravel nearer the Duero. Poor, well-drained soils keep yields low.",
    viticultureNotes: "Tempranillo is called Tinto Fino or Tinta del País here. The altitude means budding is late and frost can strike at either end of the season, so the grape must ripen in a short window. Cold nights slow ripening and keep acidity while the hot days build colour and tannin. Small amounts of Cabernet Sauvignon and Merlot are permitted in the blend.",
    winemaking: "Mostly Tempranillo, made as a full-bodied red. Oak ageing follows the same Crianza, Reserva and Gran Reserva ladder as Rioja, with French oak more common than American. Extraction is firmer than in Rioja: darker colour, more tannin, more new oak.",
    typicalStyle: "Deep ruby, full-bodied, high tannin, medium-high acid; black fruit (blackberry, black plum), toasty oak, spice. Firmer, darker and more powerful than Rioja from the same grape. Best wines age for decades.",
    qualityLevels: ["Vino de España", "Vino de la Tierra de Castilla y León", "DO Ribera del Duero"],
    whyConnection: "Same grape as Rioja, different wine — because of altitude. Hot days on the plateau → deep colour and thick skins, so firmer tannin. Cold nights → acidity survives the heat. The short, frost-bound season → only fully ripe fruit is picked, and the wine is concentrated. Limestone and clay keep yields small. Where Rioja is red-fruited and mellow, Ribera is black-fruited and structured.",
    color: "#5B2C6F"
  },
  priorat: {
    name: "Priorat",
    country: "Spain",
    climate: "Hot Mediterranean",
    climateDetail: "Hot, dry summers inland from Tarragona, with very little rain. Steep slopes and altitude give some cool nights; the mountains shelter the vineyards from the sea. Drought and heat stress are the risks — old vines cope by rooting deep.",
    keyGrapes: { red: ["Garnacha", "Cariñena", "Cabernet Sauvignon", "Syrah"], white: ["Garnacha Blanca", "Macabeo"] },
    subRegions: ["Priorat DOQ", "Montsant DO (the ring of vineyards around Priorat)"],
    soils: "Licorella: black slate and quartz on very steep terraced hillsides. The slate stores heat, drains freely and holds little water, so vines struggle and yields are tiny.",
    viticultureNotes: "Old bush vines of Garnacha and Cariñena on steep terraces (costers), often too steep for machines — hand work throughout. Roots push deep into the slate to find water. Yields are very low, which concentrates the fruit. Some Cabernet Sauvignon and Syrah is planted for blending.",
    winemaking: "Powerful, concentrated reds, usually Garnacha and Cariñena blends, aged in French oak (often new). Small producers; the wines were rediscovered in the late twentieth century and are now among Spain's most expensive.",
    typicalStyle: "Deep colour, full body, high alcohol, high tannin, medium-high acid; ripe black fruit, dried fig, liquorice, a stony, mineral edge from the slate. Concentrated and long-lived.",
    qualityLevels: ["Vino de España", "Vino de la Tierra", "DO", "DOQ Priorat"],
    whyConnection: "Heat plus licorella slate plus old bush vines → tiny yields, and tiny yields → concentration. The slate drains and stores heat, so Garnacha and Cariñena ripen fully but the roots have to dig deep for water, which stresses the vine and thickens the skins. Steep terraces mean hand work and small production. Result: powerful, mineral wines that earned DOQ status, Spain's top tier shared only with Rioja.",
    color: "#1F6F6B"
  },
  sherry: {
    name: "Sherry (Jerez)",
    country: "Spain",
    climate: "Hot Mediterranean",
    climateDetail: "Hot, sunny summers in the far south of Spain. The poniente, a humid west wind off the Atlantic, moderates the heat and feeds the flor yeast; the levante, a hot dry east wind, dries the grapes. Winter rain is the vines' water for the year.",
    keyGrapes: { red: [], white: ["Palomino", "Pedro Ximénez", "Moscatel"] },
    subRegions: ["Jerez de la Frontera", "Sanlúcar de Barrameda (Manzanilla)", "El Puerto de Santa María", "Fino", "Manzanilla", "Amontillado", "Oloroso", "Palo Cortado", "Pedro Ximénez", "Cream"],
    soils: "Albariza: chalky white soil that soaks up winter rain and holds it through the dry summer; its pale surface reflects sunlight back onto the vines. The best vineyards (pagos) are on albariza; barros (clay) and arenas (sand) are lesser.",
    viticultureNotes: "Palomino is a neutral grape that gives a low-acid base wine — its character comes later, in the bodega. Vines are trained low and the soil is worked to trap winter rain. Pedro Ximénez and Moscatel are dried in the sun before pressing to make the sweet wines.",
    winemaking: "Fortified after fermentation. Fino and Manzanilla: fortified lightly and aged under flor, a layer of yeast that protects the wine from air (biological ageing). Oloroso: fortified higher so flor cannot grow, aged in contact with air (oxidative). Amontillado: starts under flor, then flor dies and ageing turns oxidative. Palo Cortado: sits between Amontillado and Oloroso. Pedro Ximénez: sweet, from sun-dried grapes. Cream: sweetened Oloroso. All are aged in the solera system — fractional blending across rows of barrels, so every bottle is a blend of ages and the style stays constant.",
    typicalStyle: "Fino / Manzanilla: pale, bone-dry, light body, bread, almond, salty tang (Manzanilla is the lightest and freshest). Amontillado: amber, dry, nutty, more body. Oloroso: brown, dry, walnut, dried fruit, full body. Pedro Ximénez: black, very sweet, raisin, coffee, syrupy. Cream: sweet, nutty, medium-full.",
    qualityLevels: ["Vino de España", "Vino de la Tierra", "DO Jerez-Xérès-Sherry / DO Manzanilla-Sanlúcar de Barrameda"],
    whyConnection: "Albariza stores winter rain → Palomino survives the hot, dry summer without irrigation. The poniente wind off the Atlantic keeps the bodegas cool and humid → flor thrives, and Fino and Manzanilla stay pale and fresh; Manzanilla is only made in seaside Sanlúcar de Barrameda, where flor grows thickest and the wine tastes saltiest. Fortify a little more and flor cannot live → oxidative Oloroso. The solera system blends young into old, so the style never changes from year to year.",
    color: "#C9A227"
  }
};
