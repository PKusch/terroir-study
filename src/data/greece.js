// ─── Wine Data: Greece Regions ───────────────────────────────────────────────
// Same field shape as germany.js, with `country` set to Greece.
export const GREECE_REGIONS = {
  santorini: {
    name: "Santorini",
    country: "Greece",
    climate: "Hot, dry Mediterranean",
    climateDetail: "A volcanic island in the Aegean Sea with very little rain, hot, dry summers and strong, steady winds (the meltemi). Water is the main constraint: the vines drink the dew and the sea mist that settles at night, since there is almost no rain in the growing season.",
    keyGrapes: { red: [], white: ["Assyrtiko"] },
    subRegionsLabel: "Wine villages",
    subRegions: ["Oia", "Fira", "Pyrgos", "Megalochori", "Akrotiri"],
    soils: "Volcanic ash, pumice and lava, with very little organic matter and little clay. The sandy, free-draining soil has meant that the vine louse phylloxera has never taken hold, so many vines are old and ungrafted.",
    viticultureNotes: "Assyrtiko is the main grape, with Athiri and Aidani. Vines are trained in low, coiled baskets (kouloura) that sit close to the ground, which shelters the grapes from wind and sun and helps them catch the mist. Yields are tiny, and many vines are very old.",
    winemaking: "Mostly dry whites in stainless steel, with some oak for the finest wines. Dry PDO Santorini must be at least 85% Assyrtiko, with up to 15% Athiri and Aidani; sweet wines need at least 51%. Nykteri is a dry white, traditionally harvested at night to avoid the heat, with at least 13.5% alcohol and at least 3 months in oak. Vinsanto is sweet, made from grapes dried in the sun (at least 370 g/l of sugar) and matured oxidatively for at least 24 months.",
    typicalStyle: "Assyrtiko: pale lemon, medium to full body, very high acidity, lemon, grapefruit, a salty, mineral edge and a sense of volcanic smoke; unusually high acidity for such a hot place. Vinsanto: amber, sweet, dried apricot, raisin, caramel and spice, with high acidity.",
    qualityLevels: ["Epitrapezios (table wine)", "PGI Cyclades", "PDO Santorini (dry white)", "PDO Santorini, Nykteri style", "PDO Santorini, Vinsanto style"],
    whyConnection: "No rain, strong wind and poor volcanic soil → low yields from low-trained basket vines that catch the sea mist. Assyrtiko holds high acidity even in great heat → crisp, mineral whites from one of Europe's hottest, driest places.",
    color: "#4A90B8"
  },
  naoussa: {
    name: "Naoussa",
    country: "Greece",
    climate: "Continental, with Mediterranean influence",
    climateDetail: "Vineyards on the eastern slopes of Mount Vermio in northern Greece, at moderate altitude. Summers are warm, winters cold, and the mountain gives cooling nights and some shelter. The slopes face east and catch the morning sun.",
    keyGrapes: { red: ["Xinomavro"], white: [] },
    subRegions: ["Naoussa", "Mount Vermio slopes"],
    soils: "Clay, limestone and sand on the lower slopes, with more stony, well-drained soil higher up.",
    viticultureNotes: "Xinomavro ('acid black') is the grape: late-ripening, thin-skinned and high in both acidity and tannin. It needs a warm site and a long season; at lower altitude it ripens more easily, higher up it keeps more freshness. It is often compared with Nebbiolo.",
    winemaking: "Aged in oak and bottle for some time to soften the tannin and acidity. Traditional producers use large old oak; others use barriques. PDO Naoussa covers only red wine made entirely from Xinomavro, in dry to semi-sweet styles; rosé and sparkling Xinomavro are also made, but outside the PDO.",
    typicalStyle: "Xinomavro: pale to medium ruby, quick to show garnet, high acidity and high tannin; red cherry, tomato, olive, dried herbs and a savoury note. With age it gains leather and truffle. Like Nebbiolo, it is firm and structured when young.",
    qualityLevels: ["Epitrapezios (table wine)", "PGI Macedonia", "PDO Naoussa", "PDO Naoussa Reserve / Grande Reserve (longer ageing)"],
    whyConnection: "A late-ripening, thin-skinned grape on cool mountain slopes → the fruit holds high acidity and structure. Time in oak and bottle softens tannin → dry, savoury reds that need ageing to show at their best.",
    color: "#7B2C3F"
  },
  nemea: {
    name: "Nemea",
    country: "Greece",
    climate: "Warm Mediterranean, moderated by altitude",
    climateDetail: "Vineyards on hillsides in the northeast of the Peloponnese, from about 200 metres up to about 850. Summers are hot and dry in the lowlands; the higher slopes are noticeably cooler, with colder nights. The altitude is what matters most to the style of the wine.",
    keyGrapes: { red: ["Agiorgitiko"], white: [] },
    subRegionsLabel: "Villages",
    subRegions: ["Nemea", "Ancient Nemea", "Koutsi"],
    soils: "Clay-limestone and marl, with some sandy soil on the lower slopes; the higher vineyards are stonier.",
    viticultureNotes: "Agiorgitiko ('St George') is the only grape. Vineyards are grouped by altitude: the low, warm ones give soft, jammy wines; the mid-altitude ones are balanced; the high, cool ones give fresher wines with higher acidity, which many producers prize. The altitude zones are informal and are not part of the PDO rules.",
    winemaking: "Dry red wines, from easy, fruity styles in stainless steel to oak-aged Reserve and Grande Reserve. PDO Nemea is for red wine only, made entirely from Agiorgitiko: dry, semi-sweet, and sweet (fortified, or from dried grapes, in small amounts).",
    typicalStyle: "Agiorgitiko: medium to deep ruby, medium to full body, soft to medium tannin, ripe plum, red cherry, spice and sometimes chocolate; the high-altitude wines are fresher and brighter.",
    qualityLevels: ["Epitrapezios (table wine)", "PGI Peloponnese", "PDO Nemea", "PDO Nemea Reserve / Grande Reserve"],
    whyConnection: "The same grape in different places → altitude changes the style. Warm lowlands ripen Agiorgitiko to soft, jammy fruit; cooler nights at altitude keep its acidity and freshness → the best vineyards are usually in the middle or the heights.",
    color: "#B5651D"
  }
};
