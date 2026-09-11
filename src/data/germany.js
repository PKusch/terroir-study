// ─── Wine Data: Germany Regions ──────────────────────────────────────────────
// Same field shape as france.js and italy.js, with `country` set to Germany.
export const GERMANY_REGIONS = {
  mosel: {
    name: "Mosel",
    country: "Germany",
    climate: "Cool continental",
    climateDetail: "Cool and wet, at the northern limit of grape growing. The steep, south-facing slopes above the river catch the low sun; the river reflects light and holds warmth into autumn. Frost, rain and rot are risks, and getting the grapes ripe is the constant worry.",
    keyGrapes: { red: [], white: ["Riesling", "Müller-Thurgau"] },
    subRegions: ["Mittelmosel", "Bernkastel", "Piesport", "Wehlen", "Saar", "Ruwer"],
    soils: "Slate — dark Devonian slate on the steep slopes. It soaks up heat in the day and gives it back at night, and drains freely, so the vine has to root deep. Flatter land by the river is heavier and fertile.",
    viticultureNotes: "Riesling on some of the steepest vineyards in the world, above the river's bends. Each vine is tied to its own single post, which suits the slope; almost all the work is by hand. South-facing sites are everything at this latitude — the sunny side of each bend is planted, the shaded side often is not. Müller-Thurgau, the high-yielding, early-ripening workhorse, fills the flatter, easier land.",
    winemaking: "Stainless steel or old large oak (Fuder), no new oak, no malolactic — the aim is to keep Riesling's fruit and acidity. Fermentation is often stopped, or unfermented juice (Süssreserve) added back, to leave residual sugar. The Prädikat ladder — Kabinett, Spätlese, Auslese, Beerenauslese, Trockenbeerenauslese, plus Eiswein from grapes frozen on the vine — describes how ripe the grapes were at harvest, not how sweet the wine is. Trocken on the label means dry.",
    typicalStyle: "Riesling: pale, light-bodied, low alcohol, very high acidity; green apple, lime, white flowers, a wet-stone 'slatey' edge; honey and petrol with age. Kabinett and Spätlese are usually off-dry to medium-sweet, the sugar balanced by the acid. Auslese and above are sweet and honeyed from botrytis; Eiswein is pure and piercing. Trocken versions are bone dry and steely.",
    qualityLevels: ["Deutscher Wein", "Landwein", "Qualitätswein (Mosel)", "Prädikatswein: Kabinett / Spätlese / Auslese", "Prädikatswein: Beerenauslese / Trockenbeerenauslese / Eiswein"],
    whyConnection: "At the northern limit, ripeness is the problem → only steep, south-facing slate slopes catch enough sun, and the river adds reflected light and stored warmth. Slow, late ripening keeps very high acidity, so a little residual sugar is balancing rather than cloying — the reason off-dry and sweet styles are the norm. Low sugar at harvest means low alcohol. The Prädikat ladder exists because how ripe the grapes got is the biggest thing a cool year decides.",
    color: "#2F8F8A"
  },
  rheingau: {
    name: "Rheingau",
    country: "Germany",
    climate: "Continental",
    climateDetail: "Warmer and drier than the Mosel. The Rhine turns west here for a stretch, so the whole vineyard slope faces south across the water; the Taunus hills behind shelter it from cold north winds. Autumn mists off the wide river bring botrytis in warm years.",
    keyGrapes: { red: ["Spätburgunder"], white: ["Riesling"] },
    subRegions: ["Rüdesheim", "Assmannshausen", "Johannisberg", "Hochheim"],
    soils: "Slate and quartzite on the steep western end near Rüdesheim and Assmannshausen; deeper loess, loam and clay on the gentler slopes to the east, which give fuller wines.",
    viticultureNotes: "Almost all Riesling, on south-facing slopes running down to the river; the steep west end is hand-worked, the gentler middle can be mechanised. Spätburgunder (Pinot Noir) is concentrated on the slate at Assmannshausen. Warmer sites and drier autumns give riper grapes than the Mosel, and dry (trocken) wine has become the main style.",
    winemaking: "Mostly fermented dry, in stainless steel or large old oak. The VDP growers' association labels its top dry wines Grosses Gewächs (GG): a dry wine from a single top-rated vineyard — a grand cru idea, set by the association rather than by national law. Sweet Prädikat wines are still made when botrytis arrives, from Spätlese up to Trockenbeerenauslese. Spätburgunder is made like red Burgundy: gentle extraction, some new oak.",
    typicalStyle: "Riesling: fuller and more powerful than the Mosel — medium body, high acidity, ripe peach and apricot over citrus, more alcohol. Dry versions are firm and long-lived; sweet Auslese and above are rich with botrytis honey and marmalade. Spätburgunder: pale, red cherry, light tannin, fresh.",
    qualityLevels: ["Deutscher Wein", "Landwein", "Qualitätswein (Rheingau)", "Prädikatswein (Kabinett to Trockenbeerenauslese)", "VDP Grosses Gewächs (dry, single vineyard)"],
    whyConnection: "The river turns west → one long south-facing bank, with hills behind it blocking the cold. More sun and less rain than the Mosel → riper Riesling with enough acidity to stay balanced when dry, so the best wines are dry and full rather than off-dry and delicate. Warm slate sites at the western end ripen Pinot Noir, which the Mosel cannot. A wide, slow river gives autumn mist → botrytis → the great sweet wines in the right years.",
    color: "#5C7A29"
  },
  pfalz: {
    name: "Pfalz",
    country: "Germany",
    climate: "Warm continental",
    climateDetail: "One of the warmest, driest and sunniest parts of Germany. The Haardt hills — the northern continuation of Alsace's Vosges — block rain from the west, so the vineyards sit in a rain shadow. Sunny summers and dry autumns; drought is more of a risk than rot.",
    keyGrapes: { red: ["Spätburgunder", "Dornfelder"], white: ["Riesling", "Grauburgunder", "Weissburgunder", "Müller-Thurgau"] },
    subRegions: ["Mittelhaardt", "Forst", "Deidesheim", "Südliche Weinstrasse"],
    soils: "Varied: sandstone, basalt, limestone, loess, clay and sand across the foothills and the plain. The best Riesling sites of the Mittelhaardt sit on sandstone and basalt on the lower slopes of the Haardt.",
    viticultureNotes: "Warm enough to ripen almost anything. Riesling still leads, riper and fuller than further north; Grauburgunder (Pinot Gris) and Weissburgunder (Pinot Blanc) do well in the warmth; Spätburgunder and Dornfelder make this a serious red region. Müller-Thurgau on the flat land for volume; a little Silvaner — earthy, dry, neutral — though that grape's real home is Franken. Gentler slopes than the Mosel, so more machine work is possible.",
    winemaking: "Mostly dry. Riesling in stainless steel or old oak; Grauburgunder and Weissburgunder sometimes given lees contact and a little new oak for weight. Spätburgunder made like red Burgundy with oak ageing; Dornfelder deep-coloured and fruity, mostly unoaked, for early drinking. VDP Grosses Gewächs for the best dry single-vineyard wines. Sweet Prädikat wines are made but are the exception here.",
    typicalStyle: "Riesling: dry, medium-bodied, ripe stone fruit and citrus, high but softer acidity, more alcohol than the Mosel. Grauburgunder: full, ripe pear, spice. Weissburgunder: fresh, apple, subtle. Spätburgunder: red fruit, light-to-medium tannin, some oak. Dornfelder: deep colour, plum and blackberry, soft tannin.",
    qualityLevels: ["Deutscher Wein", "Landwein", "Qualitätswein (Pfalz)", "Prädikatswein (Kabinett to Trockenbeerenauslese)", "VDP Grosses Gewächs (dry, single vineyard)"],
    whyConnection: "The Haardt hills are the Vosges under another name → the same rain shadow that makes Alsace dry makes the Pfalz warm and dry. Warmth means Riesling ripens fully → dry is the natural style, fuller in body and higher in alcohol, and the sweetness the Mosel needs for balance is not needed here. The same warmth ripens the Pinot family and Dornfelder — so the Pfalz makes far more dry and red wine than any cool northern region can.",
    color: "#C77D2A"
  }
};
