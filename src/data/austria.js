// ─── Wine Data: Austria Regions ──────────────────────────────────────────────
// Same field shape as germany.js, with `country` set to Austria.
export const AUSTRIA_REGIONS = {
  niederosterreich: {
    name: "Niederösterreich",
    country: "Austria",
    climate: "Cool to warm continental",
    climateDetail: "Cool air from the west meets warm, dry air from the east. Summer days are hot and nights cold, which lets aromas build and keeps acidity high. The forested hills north of the Danube shelter the vineyards, and the river itself moderates the cold. In the Wachau, the cold air also drains down the valley at night.",
    keyGrapes: { red: ["Zweigelt", "Blaufränkisch"], white: ["Grüner Veltliner", "Riesling"] },
    subRegions: ["Wachau", "Kremstal", "Kamptal", "Wagram", "Traisental", "Weinviertel"],
    soils: "Primary rock (gneiss and other crystalline rock) on the steep terraces of the Wachau and the Kamp valley; loess, a wind-blown silt, on the gentler slopes of Kremstal, Wagram and the Weinviertel; some limestone and clay. The rock soils give structured, mineral wines; loess holds water and gives fuller, softer ones.",
    viticultureNotes: "Grüner Veltliner is Austria's signature grape, with Riesling on the primary rock terraces. In the Wachau the vineyards are small terraces held up by dry-stone walls and worked mostly by hand. Grüner Veltliner needs a good site and a warm end to the season; on poor or overcropped sites it tastes thin and green.",
    winemaking: "Mostly dry, in stainless steel or large old oak. In the Wachau, members of Vinea Wachau grade wines by weight, all fermented dry: Steinfeder (light, up to 11.5% abv), Federspiel (medium, 11.5–12.5%) and Smaragd (the fullest, at least 12.5%). Several districts use the DAC system, which names a regional style from set grapes: Weinviertel DAC for Grüner Veltliner, and Kamptal and Kremstal DAC for Grüner Veltliner and Riesling.",
    typicalStyle: "Grüner Veltliner: pale lemon-green, medium to full body, medium-plus to high acidity, green apple, lime and a distinctive white-pepper note; fuller, spicier and more concentrated at Smaragd and Reserve level. Riesling: dry, high acidity, citrus, peach and a stony edge, long-lived.",
    qualityLevels: ["Österreichischer Wein", "Landwein", "Qualitätswein", "DAC (regional style, e.g. Weinviertel, Kamptal, Kremstal)", "Wachau: Steinfeder / Federspiel / Smaragd", "DAC Reserve (more concentrated, longer ageing)"],
    whyConnection: "Hot days and cold nights → the grapes ripen fully but keep high acidity and build aroma. Rock terraces store and give back heat; loess holds water and gives body → the same two grapes make a light, peppery wine on poor rock and a rich, spicy one on deep loess.",
    color: "#8E9F3B"
  },
  burgenland: {
    name: "Burgenland",
    country: "Austria",
    climate: "Warm continental (Pannonian)",
    climateDetail: "Hot, dry summers and long, mild autumns on the edge of the Hungarian plain. A large, shallow lake, the Neusiedler See, lies on the eastern side; it warms quickly in summer, and in autumn its mist and humidity settle over the vineyards on its shores and bring noble rot (botrytis).",
    keyGrapes: { red: ["Blaufränkisch", "Zweigelt"], white: ["Welschriesling", "Weissburgunder", "Chardonnay"] },
    subRegions: ["Neusiedlersee", "Leithaberg", "Mittelburgenland", "Eisenberg"],
    soils: "Varied: gravel, sand and loam on the flat plain around the lake; schist, limestone and shell-rich soils on the Leithaberg hills; heavy clay-loam in Mittelburgenland; iron-rich schist and slate at Eisenberg in the south.",
    viticultureNotes: "Red-wine country by Austrian standards. Zweigelt, a cross of St. Laurent and Blaufränkisch, is the most planted red. Blaufränkisch gives the most serious wines: it ripens late and needs a warm site. Welschriesling and Pinot Blanc make the whites, and the lake's shores are planted for sweet wine from botrytised grapes.",
    winemaking: "Reds are fermented on their skins and often aged in oak, large old casks for freshness or small barriques for more structure. Mittelburgenland DAC and Eisenberg DAC are for Blaufränkisch; Leithaberg DAC covers whites (Pinot Blanc, Chardonnay, Neuburger, Grüner Veltliner) and Blaufränkisch reds; Neusiedlersee DAC is centred on Zweigelt. Sweet wines (Beerenauslese, Trockenbeerenauslese and the Ausbruch of Rust) come from botrytised grapes.",
    typicalStyle: "Zweigelt: medium body, ripe cherry and plum, soft tannins, easy to drink young. Blaufränkisch: medium to full body, high acidity, firm tannins, black cherry, blackberry and pepper; it ages well. Sweet wines: apricot, honey and marmalade, intensely sweet but held up by high acidity.",
    qualityLevels: ["Österreichischer Wein", "Landwein", "Qualitätswein", "DAC (Neusiedlersee, Leithaberg, Mittelburgenland, Eisenberg)", "Prädikatswein (Beerenauslese, Ausbruch, Trockenbeerenauslese)"],
    whyConnection: "A shallow lake beside a warm plain → autumn mist and humidity → noble rot, which concentrates the grapes into sweet wine. The same warmth fully ripens Blaufränkisch and Zweigelt → this is Austria's red-wine region, while the cooler north and south lean white.",
    color: "#A63D5E"
  },
  steiermark: {
    name: "Steiermark",
    country: "Austria",
    climate: "Cool continental, with a Mediterranean touch",
    climateDetail: "Austria's southernmost wine region, and one of its coolest and wettest. Warm air from the south meets cold air from the Alps, so days are warm and nights cool, which keeps acidity high. The vineyards sit on steep hills, many at altitude, which drain well and catch the sun.",
    keyGrapes: { red: [], white: ["Sauvignon Blanc", "Welschriesling", "Chardonnay (Morillon)", "Weissburgunder", "Gelber Muskateller"] },
    subRegions: ["Südsteiermark", "Vulkanland Steiermark", "Weststeiermark"],
    soils: "Mixed: sand, marl and limestone clay in the Südsteiermark; volcanic soils in the Vulkanland, which give the wines more spice; schist in the Weststeiermark, where the local Schilcher rosé comes from.",
    viticultureNotes: "Sauvignon Blanc is the star, with Welschriesling, Chardonnay (often called Morillon here), Pinot Blanc and Gelber Muskateller. The hillsides are steep and mostly hand-harvested, with several passes through the vineyard. The Weststeiermark makes Schilcher, a high-acid rosé from the red Blauer Wildbacher grape.",
    winemaking: "Mostly stainless steel to keep freshness, with some oak ageing for Chardonnay and the finest Sauvignon Blanc. The region has its own DAC system with three districts (Südsteiermark, Vulkanland Steiermark and Weststeiermark), graded as a pyramid: Gebietswein (district), Ortswein (village) and Riedenwein (single vineyard).",
    typicalStyle: "Sauvignon Blanc: pale lemon-green, medium body, high acidity, pronounced gooseberry, blackcurrant leaf, elderflower and green pepper. Welschriesling: light, dry, green apple. Schilcher: pale pink-orange, very high acidity, tart red berries.",
    qualityLevels: ["Österreichischer Wein", "Landwein", "Qualitätswein", "DAC Gebietswein (district)", "DAC Ortswein (village)", "DAC Riedenwein (single vineyard)"],
    whyConnection: "Cold air from the Alps meets warm air from the south → warm days and cool nights → aromatic, high-acid grapes. Steep hills drain well and catch the sun → Sauvignon Blanc ripens fully without losing its freshness.",
    color: "#3F7F5A"
  }
};
