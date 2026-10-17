// ─── Wine Data: Hungary Regions ──────────────────────────────────────────────
// Same field shape as germany.js, with `country` set to Hungary.
export const HUNGARY_REGIONS = {
  tokaj: {
    name: "Tokaj",
    country: "Hungary",
    climate: "Warm continental",
    climateDetail: "Warm summers and cold winters in the foothills of the Zemplén mountains, in the far northeast. Two rivers, the Bodrog and the Tisza, meet here. In autumn their mist settles on the vineyards in the morning, and the sun and dry air that follow dry the grapes again, a pattern that brings noble rot (botrytis) in many years.",
    keyGrapes: { red: [], white: ["Furmint", "Hárslevelű", "Muscat (Sárga Muskotály)"] },
    subRegions: ["Tokaj", "Mád", "Tarcal", "Tolcsva", "Sátoraljaújhely"],
    soils: "Volcanic: rhyolite and andesite tuff, with loess and clay over them on the lower slopes. The volcanic rock gives the wines a tense, mineral edge; the loess and clay hold water and give weight.",
    viticultureNotes: "Furmint is the main grape: late-ripening, high in acidity and sugar, with thin skins that take noble rot easily. Hárslevelű adds perfume and a rounder body; Yellow Muscat (Sárga Muskotály) adds aroma. Tokaj has one of the oldest vineyard classifications in the world, drawn up in 1737, which ranked the vineyards by quality.",
    winemaking: "A range of styles from one set of grapes. Dry Furmint is a modern dry white. Szamorodni is made from whole bunches, including botrytised berries, and can be dry or sweet. Aszú is made by soaking individual shrivelled, botrytised berries (aszú berries) in a base wine. All Aszú must have at least 120 g/l of sugar. The old label term puttonyos is now optional and tells you the sugar level: 5 puttonyos means at least 120 g/l and 6 at least 150 g/l. Aszú is aged in oak for at least 18 months. Aszúeszencia, once a category sweeter still, was dropped in 2013. Eszencia, the free-run juice of the aszú berries, remains: at least 450 g/l of sugar, very low in alcohol and very slow to ferment.",
    typicalStyle: "Dry Furmint: medium to full body, high acidity, apple, pear and a smoky, mineral note. Aszú: deep gold to amber, very sweet and rich, apricot, honey, orange peel and dried fruit, with very high acidity that stops it feeling heavy; it can age for decades.",
    qualityLevels: ["Tájbor (PGI)", "Tokaj PDO: dry Furmint and Hárslevelű", "Szamorodni (dry or sweet)", "Aszú, 5 puttonyos", "Aszú, 6 puttonyos", "Eszencia"],
    whyConnection: "Two rivers meeting → autumn mist, then dry sun → noble rot, which shrivels the grapes and concentrates sugar and acid. Furmint keeps very high acidity when ripe → sweet Aszú that stays fresh, rather than syrupy.",
    color: "#D9A441"
  },
  eger: {
    name: "Eger",
    country: "Hungary",
    climate: "Cool continental",
    climateDetail: "The foothills of the Bükk mountains in northern Hungary. Summers are warm and winters cold, and the hills shelter the vineyards from the north. Cool nights keep acidity in the grapes, so red wines here are fresher and lighter than those of the warmer south.",
    keyGrapes: { red: ["Kékfrankos", "Kadarka", "Cabernet Franc"], white: ["Olaszrizling"] },
    subRegions: ["Eger", "Szépasszony-völgy (Valley of the Beautiful Women)", "Noszvaj", "Egerszalók"],
    soils: "Volcanic tuff (rhyolite) and limestone, with clay and loess. Many of the town's cellars are cut into the soft tuff, which keeps a steady cool temperature.",
    viticultureNotes: "Kékfrankos (Blaufränkisch in Austria) is the backbone of the reds, with Kadarka, a thin-skinned, spicy grape, and Cabernet Franc. Olaszrizling (Welschriesling) is the main white. Egri Bikavér, 'Bull's Blood', is the region's famous red blend.",
    winemaking: "Egri Bikavér is a blend of several red grapes with three tiers, Classicus, Superior and Grand Superior; Kékfrankos is always the largest part of the blend. Egri Csillag is the region's white blend. Reds are often aged in oak, in the cellars cut into the tuff.",
    typicalStyle: "Egri Bikavér: medium to full body, medium-plus to high acidity, red and black cherry, plum and spice, and firm tannins that soften with age. Whites: dry, light to medium body, green apple and citrus.",
    qualityLevels: ["Tájbor (PGI)", "Eger PDO", "Egri Bikavér Classicus", "Egri Bikavér Superior", "Egri Bikavér Grand Superior", "Egri Csillag (white blend)"],
    whyConnection: "Hills shelter a cool-ish northern site, and cool nights keep acidity → red blends that are fresh, with firm tannin. A blend, led by Kékfrankos, balances a late-ripening, high-acid grape with softer, more perfumed partners.",
    color: "#9B2D30"
  },
  villany: {
    name: "Villány",
    country: "Hungary",
    climate: "Warm continental, with Mediterranean influence",
    climateDetail: "The warmest and sunniest corner of Hungary, in the far south by the Croatian border. Long, hot summers and a warm autumn ripen red grapes fully; the Villány hills give south-facing slopes and some protection from the cold. The Mediterranean reaches this far north in the mild winters and long season.",
    keyGrapes: { red: ["Cabernet Franc", "Merlot", "Cabernet Sauvignon", "Kékfrankos"], white: [] },
    subRegions: ["Villány", "Palkonya", "Nagyharsány"],
    soils: "Limestone and loess over the Villány hills; the limestone drains well and adds structure and a mineral edge.",
    viticultureNotes: "Red wine country. Cabernet Franc is the flagship, followed by Merlot, Cabernet Sauvignon and Kékfrankos. Yields are kept low on the best sites, and the long season lets late-ripening grapes reach full ripeness.",
    winemaking: "Reds are fermented on their skins and aged in oak, often small barriques for the top wines. The Villány PDO has three tiers, Classicus, Premium and Super Premium, each asking for lower yields and longer ageing. Cabernet Franc from the top tier is sold as 'Villányi Franc'.",
    typicalStyle: "Cabernet Franc: medium to full body, medium-plus tannins, red and black berry, pencil shavings and green herbs, riper and richer here than in the Loire. Blends: deeper colour, full body, black fruit, spice and oak.",
    qualityLevels: ["Tájbor (PGI)", "Villány PDO", "Villányi Classicus", "Villányi Premium", "Villányi Super Premium (Villányi Franc)"],
    whyConnection: "The warmest, sunniest corner of Hungary → late-ripening red grapes ripen fully and give body and colour. Limestone drains the hills and adds structure → red wines more like Bordeaux or the Loire's warmer sites than the lighter reds of the north.",
    color: "#5B7C99"
  }
};
