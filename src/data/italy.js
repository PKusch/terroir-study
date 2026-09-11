// ─── Wine Data: Italy Regions ────────────────────────────────────────────────
// Same field shape as france.js, plus `country` so the panels can tell them apart.
export const ITALY_REGIONS = {
  piedmont: {
    name: "Piedmont",
    country: "Italy",
    climate: "Continental",
    climateDetail: "Cold winters, hot summers. Autumn fog (nebbia) in the Langhe — Nebbiolo is named for it. The Alps to the north and west shelter the region from rain. Hail and spring frost are risks.",
    keyGrapes: { red: ["Nebbiolo", "Barbera", "Dolcetto"], white: ["Moscato Bianco", "Cortese"] },
    subRegions: ["Barolo", "Barbaresco", "Langhe", "Roero", "Barbera d'Asti", "Barbera d'Alba", "Dolcetto d'Alba", "Moscato d'Asti", "Asti", "Gavi"],
    soils: "Langhe: calcareous marl and sandstone on steep hillsides. Barolo and Barbaresco: the best sites are south-facing slopes where Nebbiolo ripens fully.",
    viticultureNotes: "Nebbiolo buds early (frost risk) and ripens late — it gets the warmest south-facing sites. Dolcetto ripens earliest and Barbera in between, so they take the cooler slopes. Hillside vineyards, mostly hand-worked. Piedmont uses no IGT — its wines are DOC or DOCG.",
    winemaking: "Barolo and Barbaresco: extended ageing in oak and bottle is required before release (Barolo longer than Barbaresco; Riserva longer still). Traditional: long maceration, large old oak (botti). Modern: shorter maceration, new barriques. Asti and Moscato d'Asti: single fermentation in tank, stopped early by chilling to keep sweetness and low alcohol.",
    typicalStyle: "Nebbiolo: pale garnet, high acid, high tannin; tar, rose, red cherry, dried herbs — needs years in bottle. Barbera: deep colour, high acid, low tannin, red fruit. Dolcetto: soft, dark fruit, drink young. Moscato d'Asti: sweet, lightly sparkling, grapey, low alcohol. Gavi: dry, crisp, citrus.",
    qualityLevels: ["Vino d'Italia", "Piemonte DOC", "Langhe DOC", "Barbaresco DOCG", "Barolo DOCG"],
    whyConnection: "Nebbiolo buds early and ripens late → only the warmest south-facing Langhe slopes ripen its tannins, so Barolo and Barbaresco come from a handful of hills. Autumn fog cools the vineyards while the grapes hang late — slow ripening keeps the high acidity that lets the wines age for decades. Calcareous marl gives structure and perfume.",
    color: "#7A2E4F"
  },
  tuscany: {
    name: "Tuscany",
    country: "Italy",
    climate: "Warm Mediterranean",
    climateDetail: "Warm, dry summers on the coast (Bolgheri). Inland hills are more continental, with cool nights from altitude that slow ripening and keep Sangiovese's acidity. Rain at harvest is a risk.",
    keyGrapes: { red: ["Sangiovese", "Cabernet Sauvignon", "Merlot"], white: ["Vernaccia", "Trebbiano Toscano"] },
    subRegions: ["Chianti", "Chianti Classico", "Brunello di Montalcino", "Vino Nobile di Montepulciano", "Bolgheri", "Vernaccia di San Gimignano", "Maremma"],
    soils: "Galestro (crumbly, schist-like marl) and alberese (limestone) on the Chianti hills — poor and well-drained. Bolgheri: gravel and clay near the coast.",
    viticultureNotes: "Sangiovese is the grape: thin-skinned, late-ripening, needs warmth and sun to ripen its tannins — hillside sites at altitude. Chianti Classico is mostly Sangiovese; Brunello di Montalcino is 100% Sangiovese. Bolgheri grows Bordeaux varieties on the warm coast.",
    winemaking: "Traditionally large old oak (botti); modern producers use barriques. Brunello di Montalcino and Vino Nobile need extended ageing before release (Brunello longest; Riserva longer still). Super Tuscans: Bordeaux blends or Sangiovese with Cabernet, sold as IGT Toscana (later Bolgheri DOC) because they broke the DOC rules. Vin Santo: dried grapes, oxidative ageing in small sealed barrels.",
    typicalStyle: "Sangiovese: high acid, high firm tannin, medium body; sour cherry, plum, dried herbs, tomato leaf; savoury with age. Brunello: fuller, more concentrated, long-lived. Bolgheri / Super Tuscan: blackcurrant, cedar, plush tannins, new oak.",
    qualityLevels: ["Vino d'Italia", "IGT Toscana", "Chianti DOCG", "Chianti Classico DOCG", "Brunello di Montalcino DOCG"],
    whyConnection: "Sangiovese ripens late and loses acidity in heat → the cool nights of the inland hills and the poor galestro soils give slow ripening, ripe tannin and bright acid. The warm coast at Bolgheri is too hot for fine Sangiovese but ideal for Cabernet Sauvignon and Merlot — the Super Tuscan story.",
    color: "#B8452F"
  },
  veneto: {
    name: "Veneto",
    country: "Italy",
    climate: "Warm continental",
    climateDetail: "Warm summers, cold winters. Lake Garda and cool air from the Alps moderate the hills; the flat plain to the south is hotter, wetter and more fertile. Autumn fog and rot are risks on the plain.",
    keyGrapes: { red: ["Corvina", "Corvinone", "Rondinella"], white: ["Garganega", "Glera", "Pinot Grigio"] },
    subRegions: ["Valpolicella", "Valpolicella Classico", "Amarone della Valpolicella", "Recioto della Valpolicella", "Valpolicella Ripasso", "Soave", "Soave Classico", "Prosecco", "Conegliano Valdobbiadene Prosecco Superiore"],
    soils: "Hills: volcanic (basalt) and limestone — Soave Classico and Valpolicella Classico. Plain: deep, fertile alluvial soils — high yields, simpler wines.",
    viticultureNotes: "Pergola training is traditional in Valpolicella and Soave — shades the fruit and keeps air moving. Hillside Classico zones give the best grapes; the plain gives volume. Prosecco: Glera on the steep Conegliano–Valdobbiadene hills is hand-picked; flatter Prosecco DOC vineyards are machine-worked.",
    winemaking: "Appassimento: healthy Corvina bunches dried for months on racks → sugar and flavour concentrate. Amarone: fermented dry, full-bodied, high alcohol. Recioto: fermentation stopped early → sweet. Ripasso: young Valpolicella re-fermented on the Amarone skins → more body. Prosecco: tank method, fresh and fruity, no lees character. Soave: mostly unoaked, some lees contact.",
    typicalStyle: "Valpolicella: light, sour red cherry, low tannin. Amarone: full-bodied, dried fruit, high alcohol, bittersweet finish. Soave: dry, medium body, pear, almond, floral; Classico is mineral and can age. Prosecco: light, apple, pear, floral, dry to off-dry, soft bubbles. Pinot Grigio: light, neutral, crisp.",
    qualityLevels: ["Vino d'Italia", "IGT Veneto", "Prosecco DOC / Soave DOC / Valpolicella DOC", "Conegliano Valdobbiadene Prosecco Superiore DOCG", "Amarone della Valpolicella DOCG"],
    whyConnection: "Corvina makes light wines on its own → appassimento (drying the grapes) is the region's answer: water leaves, sugar and flavour concentrate, and one grape gives four wines — Valpolicella, Ripasso, Amarone, Recioto. Volcanic and limestone hills keep Soave Classico mineral and long-lived; the fertile plain gives volume. Glera's fresh aromas are kept by the tank method — no lees ageing, quick to market.",
    color: "#3D6B8E"
  },
  southernItaly: {
    name: "Southern Italy",
    country: "Italy",
    climate: "Hot Mediterranean",
    climateDetail: "Hot, dry summers, mild winters. Altitude (Etna, Vulture, the Irpinia hills) and sea breezes are the moderating factors; the Puglian plain has neither and is hot. Drought is a risk; disease pressure is low.",
    keyGrapes: { red: ["Aglianico", "Primitivo", "Negroamaro", "Nero d'Avola", "Nerello Mascalese"], white: ["Fiano", "Greco", "Grillo", "Catarratto"] },
    subRegions: ["Taurasi (Campania)", "Fiano di Avellino", "Greco di Tufo", "Aglianico del Vulture (Basilicata)", "Primitivo di Manduria (Puglia)", "Salice Salentino", "Etna (Sicily)", "Cerasuolo di Vittoria", "Marsala"],
    soils: "Campania and Basilicata: volcanic (Vesuvius, Vulture) and tufa. Etna: black volcanic ash and lava on high terraces. Puglia: flat, red clay over limestone.",
    viticultureNotes: "Aglianico buds early and ripens very late — it needs the long, dry autumn of the hills. Puglia: bush vines (alberello) shade the fruit from the sun; Primitivo ripens early (its name means 'first'). Etna: old bush vines on high terraces; Nerello Mascalese ripens late in the cool of the altitude.",
    winemaking: "Taurasi and Aglianico del Vulture: extended ageing in oak and bottle required — softens the tannin. Primitivo and Negroamaro: ripe, warm-fermented reds; old-vine bush fruit once sold in bulk is now bottled as quality wine. Marsala: fortified, dry to sweet, aged oxidatively, graded by age and colour. Fiano and Greco: unoaked or lightly oaked, some lees ageing.",
    typicalStyle: "Aglianico: full-bodied, high acid, high tannin, dark fruit, smoke, earth — the 'Barolo of the South'. Primitivo: ripe, jammy, high alcohol, soft tannin. Negroamaro: dark fruit, bitter finish. Nero d'Avola: plum, spice, medium tannin. Etna Nerello Mascalese: pale, high acid, fine tannin, red fruit, smoky — Pinot Noir-like. Fiano: waxy, honeyed stone fruit. Greco: crisp, mineral.",
    qualityLevels: ["Vino d'Italia", "IGT Puglia / IGT Terre Siciliane", "Salice Salentino DOC / Etna DOC", "Fiano di Avellino DOCG / Greco di Tufo DOCG", "Taurasi DOCG / Aglianico del Vulture DOC"],
    whyConnection: "Heat is the given; the question is what moderates it. Altitude on Etna and Vulture → cool nights, high acid and fine tannin from grapes that would be jammy on the plain. Sea breezes and bush vines protect Puglia's Primitivo and Negroamaro from sunburn. Volcanic soils drain freely and are poor → low yields, concentration and a smoky edge. Aglianico's very late ripening only works because southern autumns are long and dry.",
    color: "#D2691E"
  }
};
