// ─── Principles: the general topics behind every region ──────────────────────
// WSET Level 3 asks for these across all regions (Learning outcome 1 of its
// specification, plus law and commerce in outcome 2, and the tasting unit).
// Every point here comes from a named source; points the research could not
// confirm were left out. The topic lists follow the specification's own
// "range" headings (Issue 2, 2022).
//
// Each topic: { id, label, intro, sections: [{ title, points }], sources }.

const SPEC = { title: "WSET Level 3 Specification, Issue 2 (2022)", url: "https://www.wsetglobal.com/media/11731/wset_l3wines_specification_en_highres_may2022_issue2.pdf" };
const L2 = { title: "WSET Level 2 Session Plans (2023)", url: "https://www.wsetglobal.com/media/13022/wset_l2wines_sessionplans_en_may2023_issue2.pdf" };
const SAT = { title: "WSET Level 3 Systematic Approach to Tasting (Issue 2, 2022)", url: "https://www.wsetglobal.com/media/11766/wset_l3wines_sat_en_may2022_issue2.pdf" };

export const PRINCIPLES = [
  {
    id: "tasting",
    label: "Tasting",
    intro: "The tasting exam uses WSET's Systematic Approach to Tasting (the SAT): a fixed grid of headings, each with its own set of words. This is a guide to how it works; WSET's grid itself is the one to learn from, and the app does not copy it.",
    sections: [
      {
        title: "How the grid works",
        points: [
          "Four parts: appearance, nose, palate and conclusions.",
          "Where the grid gives a scale, choose one word and only one: a range such as 'medium(+) to high' earns nothing.",
          "Some lines have five steps (for example acidity, tannin, body and finish, from low or light to high, full or long, with medium(-) and medium(+) between); alcohol and colour intensity have only three.",
          "Aromas and flavours are listed as primary (from the grape), secondary (from winemaking, such as oak or malolactic conversion) and tertiary (from ageing)."
        ]
      },
      {
        title: "Appearance and nose",
        points: [
          "Appearance: clarity, intensity of colour, and the colour itself, with separate words for whites, rosés and reds.",
          "Nose: condition (clean, or faulty), intensity, the aroma characteristics, and development (from youthful to tired)."
        ]
      },
      {
        title: "Palate",
        points: [
          "Sweetness, acidity, tannin, alcohol and body: the structure of the wine.",
          "Flavour intensity and flavour characteristics, then the length of the finish.",
          "For sparkling wine, the mousse."
        ]
      },
      {
        title: "Conclusions",
        points: [
          "Quality level, from faulty to outstanding.",
          "Readiness for drinking: whether the wine is too young, can be drunk now but will age, should be drunk now, or is too old.",
          "The grid itself prints only these two conclusions. Courses commonly teach the reasons for a quality judgement as balance, length, intensity and complexity (BLIC); that is teaching, not part of the printed grid."
        ]
      }
    ],
    practise: [["Taste › Describe a wine", "taste"], ["Taste › Spot the errors", "taste"]],
    sources: [SAT, SPEC]
  },
  {
    id: "climate",
    label: "Climate",
    tool: "climate",
    intro: "Why one region grows Riesling and another Grenache. Each idea below has a picture: work through them in order, from where vines grow to a single slope. The short notes at the bottom sum it up.",
    sections: [
      {
        title: "What a vine needs",
        points: [
          "Warmth, sunlight, water, nutrients and carbon dioxide (the specification's list).",
          "Growth starts when the mean daily temperature in spring reaches about 10 °C.",
          "Most wine grapes need about 155 to 200 frost-free days to ripen.",
          "Quality wine grows where the growing-season average is roughly 13 to 21 °C."
        ]
      },
      {
        title: "Climate bands and types",
        points: [
          "Bands, by warmth: cool, moderate, warm and hot.",
          "Types: maritime, Mediterranean and continental. Bordeaux is a classic maritime example.",
          "Continentality is the difference between the average temperature of the warmest and the coldest month: the bigger it is, the more continental the climate.",
          "Weather is what happens in a given year, and it is why vintages vary; climate is the long-run pattern."
        ]
      },
      {
        title: "What shapes a region's climate",
        points: [
          "Latitude: the best conditions are usually between about 30° and 50° north or south.",
          "Altitude: temperature falls by about 0.6 °C for every 100 m of height. Mendoza's vineyards, well over 1,000 m, are an example.",
          "Oceans and large lakes moderate temperature; a cold ocean current cools the coast. The cold Benguela current off South Africa runs about 4 °C below the average for its latitude.",
          "Diurnal range, the difference between day and night: cool-climate varieties do better with a wider range during ripening."
        ]
      },
      {
        title: "What shapes a single site",
        points: [
          "Aspect: slopes facing the equator are warmer and sunnier.",
          "Slopes drain cold air down to the valley floor, so they are less prone to frost.",
          "Morning fog cools and shades the vines.",
          "Soil matters for heat and drainage, and for water supply and nutrients (the specification's headings)."
        ]
      },
      {
        title: "Water",
        points: [
          "Some hot regions with less than about 500 mm of rain a year can only grow vines with irrigation."
        ]
      }
    ],
    practise: [["Quiz › Vineyard", "quiz", "Vineyard"], ["Connect", "connect"], ["Explore", "explore"]],
    sources: [
      SPEC,
      { title: "WSET blog: how does geography affect a wine's style? (2021)", url: "https://wsetglobal.com/knowledge-centre/blog/2021/august/24/how-does-geography-affect-a-wine-s-style" },
      { title: "Gregory Jones, Climate, grapes and wine (GuildSomm)", url: "https://www.guildsomm.com/stay_current/features/b/gregory_jones/posts/climate-grapes-and-wine" },
      { title: "New Mexico State University, Grape growing guide H-338", url: "https://pubs.nmsu.edu/_h/H338.pdf" },
      { title: "UCAR MetEd, upwelling and coastal fog", url: "https://www.meted.ucar.edu/fogstrat/ic31/ic313/upwell.htm" },
      { title: "Jones, Duff and Hall, climate-viticulture structure (climate bands)", url: "https://www.climateofwine.com/_files/ugd/07f66e_ec9cd9ce134940e6b7e31dd0f9730bc1.pdf" },
      { title: "Monthly temperatures, 1991–2020: Bordeaux, Dijon, Montpellier and Mendoza (Wikipedia climate tables)", url: "https://en.wikipedia.org/wiki/Bordeaux" },
      { title: "Wine Spectator: clay or gravel? Pomerol and the Médoc", url: "https://www.winespectator.com/articles/the-2013-bordeaux-barrels-diary-clay-or-gravel-depends-who-you-ask-49762" },
      { title: "UC Cooperative Extension: fog and breezes in Napa and Sonoma", url: "https://ccfruitandnuts.ucanr.edu/sites/default/files/2021-07/153431.pdf" }
    ]
  },
  {
    id: "viticulture",
    label: "Viticulture",
    tool: "calendar",
    intro: "How growers manage the vine through the year, and the hazards they face. The specification groups this as managing the vine, managing hazards, managing pests and diseases, concentrating sugars, and approaches to vineyard management.",
    sections: [
      {
        title: "The vine itself",
        points: [
          "Wine grapes are varieties of one European species, Vitis vinifera, and each variety has its own character (WSET Level 2). A vine can live 60 years or more.",
          "A clone is a vine propagated from a cutting or bud of a chosen 'mother' vine, so it is genetically identical; growers pick clones for traits such as disease resistance, bunch size or early ripening. Pinot Noir 777 is one.",
          "A crossing has two vinifera parents: Pinotage is Pinot Noir × Cinsault; Müller-Thurgau, DNA tests show, is Riesling × Madeleine Royale.",
          "A hybrid crosses vinifera with another species, which can bring resistance to mildew and phylloxera. Vidal, used for icewine, is one.",
          "American species such as Vitis riparia, rupestris and berlandieri are used as rootstocks: almost all commercial wine grapes are grafted onto phylloxera-resistant roots (UC Davis)."
        ]
      },
      {
        title: "Parts of the vine",
        points: [
          "Green parts: this year's shoots, leaves and bunches. Leaves use sunlight to turn carbon dioxide and water into sugar (photosynthesis).",
          "One-year-old wood: last year's shoots, which turn brown and woody (canes). Their buds give this year's fruiting shoots, which is why pruning chooses which to keep.",
          "Permanent wood: the trunk and the arms (cordons), which with the roots store the reserves that fuel growth in early spring.",
          "Vines pollinate themselves and do not need insects."
        ]
      },
      {
        title: "Inside the grape",
        points: [
          "Pulp: mostly water and sugar, with acids and some flavour. The pulp of black and white grapes alike is pale, which is why a white wine can be made from black grapes.",
          "Skin: colour, tannin and flavour.",
          "Seeds and stems: high in tannin, which can make wine taste very bitter if handled badly, so seeds are not crushed.",
          "Tartaric and malic acid make up most of the acidity. As grapes ripen, acidity falls and sugar rises, and tannins in black skins must ripen or they taste bitter.",
          "Teinturier grapes, such as Alicante Bouschet, are the exception: their flesh is red too."
        ]
      },
      {
        title: "The vine's year",
        points: [
          "Dormancy, budburst, flowering, fruit set, véraison and ripening (the specification's list).",
          "In the northern hemisphere the vine grows from about March or April to October or November.",
          "At véraison the grapes soften, change colour and begin to show their varietal flavours."
        ]
      },
      {
        title: "What ripening changes",
        points: [
          "Berries swell and gather sugar; malic acid is broken down, and most flavours develop.",
          "Hot nights use up even more malic acid, which is why cool nights help keep acidity.",
          "Green-pepper notes (methoxypyrazines) fade as grapes ripen, while floral and citrus notes build.",
          "Skin tannins in red grapes are already fairly high at véraison and change little afterwards."
        ]
      },
      {
        title: "Managing the vine",
        points: [
          "Training: head or cordon, trellised or untrellised; pruning: spur or replacement cane.",
          "Spur pruning leaves short spurs of two to four buds along a permanent arm (cordon); cane pruning keeps longer canes that are renewed each year.",
          "Canopy management lets air move through the leaves, which limits humidity and disease, and lets sunlight reach the leaves and grapes.",
          "A traditional European density is about 10,000 vines a hectare. Lower yields are often linked with quality, but many growers argue that a balanced vine matters more than the number."
        ]
      },
      {
        title: "Hazards and responses",
        points: [
          "Frost: site selection, heaters, wind machines and sprinklers. Wind machines need a layer of warmer air above the vines; sprinklers are the only proven defence against an incoming mass of cold air. Late pruning can delay budburst past the frosts.",
          "Winter freeze: earthing (hilling) soil up over the graft union.",
          "Rain at harvest: picking dates; hail: nets and vineyards on several sites.",
          "Water stress: irrigation (drip, sprinkler or flood); holding back water between fruit set and véraison gives smaller berries with more skin to juice.",
          "Sunburn: canopy management; poor nutrients: fertiliser."
        ]
      },
      {
        title: "Pests and diseases",
        points: [
          "Phylloxera: grafting the European vine onto American rootstock.",
          "Downy mildew and botrytis bunch rot thrive in long spells of rain and cloud; powdery mildew can be a problem even in dry regions. Fungicides alone are not enough: canopy management helps.",
          "Viruses: replacing the vine and sanitising the land."
        ]
      },
      {
        title: "Concentrating sugar, and ways of farming",
        points: [
          "Noble rot needs misty, humid mornings and warm, sunny afternoons; if the weather stays wet it becomes grey rot instead. It shrivels grapes while keeping their sugar.",
          "Other ways: drying grapes on the vine, and freezing them on the vine.",
          "Approaches: conventional, sustainable, organic and biodynamic. Organic rules are set by governments, biodynamic certification by private bodies such as Demeter, and 'sustainable' has no single fixed meaning.",
          "Harvest: by hand or by machine. Only hand picking keeps whole bunches and lets pickers choose the fruit; machines are faster, can work at night and cost much less, but break the grapes. Champagne allows only hand picking."
        ]
      }
    ],
    practise: [["Quiz › Vineyard", "quiz", "Vineyard"], ["Connect", "connect"]],
    sources: [
      SPEC,
      { title: "AWRI Viti-Note: phenology, berry development and ripening", url: "https://www.awri.com.au/wp-content/uploads/5_phenology_berry_development_ripening_3.pdf" },
      { title: "WSET Level 2 Session Plans (2023): the vine and the grape", url: "https://www.wsetglobal.com/media/13022/wset_l2wines_sessionplans_en_may2023_issue2.pdf" },
      { title: "UC Davis: grape rootstocks", url: "https://labs.plb.ucdavis.edu/rost/virtual%20grape%20dreamweaver/Rootstocks%20Page.htm" },
      { title: "Wine Spectator: what is a clone of a grape?", url: "https://www.winespectator.com/articles/what-is-a-clone-of-a-grape-47531" },
      { title: "GuildSomm: hybrid grapes", url: "https://guildsomm.com/public_content/features/articles/b/andrew-triska/posts/hybrid-grapes-where-they-came-from-and-where-they-re-going" },
      { title: "Vitis journal: the parentage of Müller-Thurgau", url: "https://ojs.openagrar.de/index.php/VITIS/article/view/4106" },
      { title: "Concha y Toro: the vine's yearly cycle", url: "https://conchaytoro.com/en/?p=53426" },
      { title: "AWRI frost fact sheet", url: "https://www.awri.com.au/files/attachment/frost-fact-sheet" },
      { title: "Penn State Extension: managing fungal diseases of grapevines", url: "https://extension.psu.edu/fundamental-considerations-for-managing-fungal-diseases-of-grapevines" },
      { title: "Penn State Extension: cane and spur pruning", url: "https://extension.psu.edu/grapevine-cane-and-spur-pruning-fundamentals" },
      { title: "New Mexico State University, Grape growing guide H-338", url: "https://pubs.nmsu.edu/_h/H338.pdf" },
      { title: "Wine Folly: noble rot", url: "https://winefolly.com/deep-dive/they-call-it-noble-rot-botrytis/" },
      { title: "Wine Folly: beyond organic", url: "https://winefolly.com/tutorial/beyond-organic-certified-sustainable-wine/" }
    ]
  },
  {
    id: "winemaking",
    label: "Winemaking",
    tool: "winemaking",
    intro: "The steps every winery shares, and the choices that change style. The specification lists common elements, must adjustments, white, red, rosé and sweet winemaking, maturation, blending, clarification, stabilisation, packaging and closures.",
    sections: [
      {
        title: "Fermentation",
        points: [
          "Yeast turns sugar into alcohol and carbon dioxide; fermentation stops naturally when the yeast have used all the sugar. Most dry wines end at 11.5 to 16% alcohol.",
          "Whites ferment cool, at about 12 to 22 °C; the cooler end keeps more fruity aromas.",
          "Reds ferment warmer, which extracts more colour and tannin. Sources give figures from about 20 °C to the low 30s, so learn the principle rather than one number."
        ]
      },
      {
        title: "White, red and rosé",
        points: [
          "White: the grapes are crushed and pressed before fermentation, so the juice ferments without its skins. Black grapes can make white wine if pressed very gently.",
          "Red: the juice ferments on its skins to take colour and tannin from them. The skins float up into a cap, so winemakers pump juice over it or punch it down; studies find little difference between the two in how much they extract. Délestage drains the juice off, holds it for some hours, then pumps it back over the cap.",
          "Rosé: a short maceration, a few hours on the skins before the juice is drained off; or direct pressing; or, where allowed, blending red with white, which many parts of Europe forbid.",
          "Carbonic maceration: whole, uncrushed grapes in a sealed vat filled with carbon dioxide give low tannin and juicy fruit, as in Beaujolais."
        ]
      },
      {
        title: "Adjusting the must",
        points: [
          "In the EU, enrichment (adding sugar or concentrated grape must to raise the alcohol) is allowed only where the climate makes it necessary: by up to 3% alcohol in the coolest zone A, 2% in zone B and 1.5% in zone C.",
          "Acidification is allowed mainly in the warmest zones; de-acidification mainly in the cooler ones. The same wine may not be both enriched and acidified."
        ]
      },
      {
        title: "Malolactic conversion, lees and oak",
        points: [
          "Malolactic conversion: bacteria turn sharp malic acid into softer lactic acid after the alcoholic fermentation. It lowers acidity, can add a buttery note, and happens in almost all reds. Producers block it to keep a wine's acidity, as with most Riesling.",
          "Lees: leaving the wine on its dead yeast, or stirring it, adds body and biscuit or bread flavours.",
          "Steel and concrete are inert: they add no flavour and keep the fruit fresh. Oak adds flavours such as vanilla, cinnamon, clove and coconut, and a little oxygen that softens tannin; the effect depends on the toast, the barrel's age and its size. A traditional barrique holds 225 litres, and larger barrels give less oak flavour.",
          "Oak chips and staves give oak flavour more cheaply, for volume wines."
        ]
      },
      {
        title: "Blending, clarifying and protecting the wine",
        points: [
          "Blending is for balance, consistency and style.",
          "Clarification: letting the solids settle, fining, and filtration.",
          "Stabilisation: cold stabilisation stops harmless tartrate crystals forming in the bottle; bentonite removes proteins that would cause a haze.",
          "Sulfur dioxide protects the wine against oxygen and microbes.",
          "Closures: natural cork, technical cork, synthetic cork and screw cap. In an AWRI closure trial (2001), screw caps kept the most sulfur dioxide, browned the slowest and had no cork taint."
        ]
      },
      {
        title: "Sweet wines",
        points: [
          "Stop the fermentation early by removing the yeast, which leaves sugar and lower alcohol; or fortify to about 15 to 20%, which kills the yeast.",
          "Add a sweet component, such as unfermented grape juice (Süssreserve in Germany).",
          "Concentrate the sugar in the grape: noble rot, drying the grapes, or freezing them on the vine for icewine, which is picked and pressed while frozen."
        ]
      }
    ],
    practise: [["Styles › Sparkling", "styles"], ["Styles › Fortified", "styles"]],
    sources: [
      SPEC,
      L2,
      { title: "EU Regulation 1308/2013, Annex VIII (as adopted)", url: "https://www.legislation.gov.uk/eur/2013/1308/annex/VIII/adopted" },
      { title: "AWRI: malolactic fermentation", url: "https://www.awri.com.au/wp-content/uploads/2011/06/Malolactic-fermentation.pdf" },
      { title: "AWRI: cold stabilisation", url: "https://www.awri.com.au/industry_support/winemaking_resources/storage-and-packaging/pre-packaging-preparation/cold-stabilisation/" },
      { title: "AWRI: sulfur dioxide", url: "https://www.awri.com.au/industry_support/winemaking_resources/fining-stabilities/microbiological/avoidance/sulfur_dioxide/" },
      { title: "AWRI: first results of the bottle closure trial (2001)", url: "https://www.awri.com.au/information_services/media-releases/2001/07/12/first-results-of-the-awri-wine-bottle-closure-trial-published-12-july-2001/" },
      { title: "WSET blog: why is oak used in winemaking? (2021)", url: "https://wsetglobal.com/knowledge-centre/blog/2021/july/27/why-is-oak-used-in-winemaking" },
      { title: "Wine Folly: how red wine is made", url: "https://winefolly.com/deep-dive/how-is-red-wine-made/" },
      { title: "Wine Folly: carbonic maceration", url: "https://winefolly.com/wine-glossary/carbonic-maceration/" }
    ]
  },
  {
    id: "law",
    label: "Wine law",
    intro: "What a label may promise. Each region's own quality levels are in its notes; these are the rules that run across them.",
    sections: [
      {
        title: "The EU's two levels",
        points: [
          "PDO (protected designation of origin): all the grapes come from the named area. PDOs are usually small areas with tight rules. PDO wine was long limited to Vitis vinifera; since a 2021 change (Regulation 2021/2117), member states may also allow crosses of vinifera with other vine species if the PDO's own rules approve them.",
          "PGI (protected geographical indication): at least 85% of the grapes come from the area, and crosses are allowed. PGIs cover wider areas with looser rules.",
          "Wine without a geographical indication may still show a vintage, but only if it is certified."
        ]
      },
      {
        title: "The 85% rules in the EU",
        points: [
          "A vintage on the label: at least 85% of the grapes from that year.",
          "One grape variety named: at least 85% of that grape. Two or more named: 100% of those grapes, listed in order of quantity.",
          "A smaller area named within a PDO or PGI: at least 85% from that smaller area."
        ]
      },
      {
        title: "National words for the EU levels",
        points: [
          "France: AOC (PDO), IGP or Vin de Pays (PGI), Vin de France.",
          "Italy: DOCG and DOC (PDO), IGT (PGI). Spain: DOCa, DO and Vino de Pago (PDO), VdlT (PGI).",
          "Germany: Prädikatswein and Qualitätswein (PDO). Austria: DAC, Qualitätswein and Prädikatswein."
        ]
      },
      {
        title: "Outside Europe",
        points: [
          "USA: a variety named needs at least 75% of it; an AVA needs at least 85% from it; a vintage needs 95% with an AVA, or 85% with a county, state or country.",
          "Australia: a vintage, variety or region named needs at least 85%, with no tolerances.",
          "Other systems in the syllabus: South Africa's Wine of Origin, and Australia's zones, regions and sub-regions."
        ]
      },
      {
        title: "What an EU label must show",
        points: [
          "The category, the PDO or PGI name, the actual alcohol, the provenance and the bottler, plus the importer where relevant and the sweetness term for sparkling wine.",
          "Since December 2023, ingredients and a nutrition declaration too, which may be given through an e-label."
        ]
      }
    ],
    practise: [["Explore: each region's quality levels", "explore"], ["Written › quality levels", "written"]],
    sources: [
      SPEC,
      L2,
      { title: "EU Regulation 1308/2013, Article 93 (PDO and PGI, as adopted)", url: "https://www.legislation.gov.uk/eur/2013/1308/article/93/adopted" },
      { title: "EU Regulation 2021/2117 (amending 1308/2013)", url: "https://eur-lex.europa.eu/eli/reg/2021/2117/oj" },
      { title: "Decanter: EU lets member states use resistant hybrids in appellation wines", url: "https://www.decanter.com/wine-news/eu-grants-member-states-the-right-to-use-resistant-hybrid-varieties-in-appellation-wines-470864/" },
      { title: "EU Regulation 2019/33, Articles 49, 50 and 55 (as adopted)", url: "https://www.legislation.gov.uk/eur/2019/33/article/49/adopted" },
      { title: "EU Regulation 1308/2013, Article 119 (as adopted)", url: "https://www.legislation.gov.uk/eur/2013/1308/article/119/adopted" },
      { title: "US Code of Federal Regulations, title 27 part 4", url: "https://www.ecfr.gov/current/title-27/part-4" },
      { title: "Wine Australia: the blending rules", url: "https://www.wineaustralia.com/news/articles/the-blending-rules" }
    ]
  },
  {
    id: "price",
    label: "Price",
    intro: "Every learning outcome asks how factors shape 'style, quality and price'. The specification's commerce heading names the cost of grapes, the cost of production, the cost of transport, margin and market forces.",
    sections: [
      {
        title: "In the vineyard",
        points: [
          "Hand picking costs far more than machine picking, and steep slopes leave no choice. WSET says neither method is better in itself.",
          "Low yields cost more per bottle; too high a yield dilutes flavour.",
          "Sweet wines from noble rot are dear: the weather does not deliver every year, picking is slow and the yields are very small."
        ]
      },
      {
        title: "In the winery",
        points: [
          "New oak barrels are expensive, so the best wines get them and volume wines use chips or staves.",
          "Maturation is one of the winery costs the Diploma specification lists.",
          "Packaging and closures add cost too."
        ]
      },
      {
        title: "After the winery",
        points: [
          "Transport, taxes and duties, and the margins of importers, distributors and retailers all add to the shelf price.",
          "Market forces: famous names in small supply command high prices, even for a region's basic wines; a short harvest after poor weather pushes prices up."
        ]
      }
    ],
    practise: [["Explore", "explore"]],
    sources: [
      SPEC,
      L2,
      { title: "WSET Level 4 Diploma Specification (2025), factors affecting supply, demand and cost", url: "https://www.wsetglobal.com/media/17609/wset_l4wines_specification_en_august-2025.pdf" }
    ]
  },
  {
    id: "health",
    label: "Health",
    intro: "WSET's specification asks you to 'state the social and health issues resulting from the excess consumption of wine'. These points come from health authorities: WSET's own pages do not give units or guideline figures.",
    tool: "units",
    sections: [
      {
        title: "Units",
        points: [
          "One UK unit is 10 ml, or 8 g, of pure alcohol (NHS).",
          "Units = strength (ABV) × volume in ml ÷ 1,000. A 750 ml bottle at 13.5% holds about 10 units.",
          "A US standard drink is 14 g of pure alcohol, about 5 fl oz (150 ml) of 12% wine (CDC)."
        ]
      },
      {
        title: "Guidelines differ by country",
        points: [
          "UK Chief Medical Officers (2016): it is safest not to drink more than 14 units a week on a regular basis, for men and women alike, spread over three or more days, with several drink-free days.",
          "USA: the Dietary Guidelines for 2025 to 2030 (published January 2026) say only 'consume less alcohol for better overall health'. The older figures of two drinks a day for men and one for women are no longer in them.",
          "The World Health Organization says no form of alcohol consumption is risk-free."
        ]
      },
      {
        title: "Long-term health harms",
        points: [
          "Liver disease, heart disease and stroke (WHO, NHS).",
          "Several cancers, including breast, liver, head and neck, oesophageal and bowel cancer (WHO).",
          "Dependence, and mental-health problems such as depression and anxiety (WHO).",
          "The WHO puts alcohol-caused deaths at about 2.6 million worldwide in 2019."
        ]
      },
      {
        title: "Short-term risks",
        points: [
          "Accidents and injuries, misjudging risky situations, losing self-control, and violence (UK Chief Medical Officers, NHS).",
          "Drink-driving: the WHO links about 298,000 road deaths in 2019 to alcohol, more than half of them caused by someone else's drinking."
        ]
      },
      {
        title: "Social harms",
        points: [
          "Alcohol harms people other than the drinker: family problems, trouble at work, money problems and unemployment (WHO).",
          "Violence, including sexual assault and violence against partners (WHO)."
        ]
      },
      {
        title: "Pregnancy, and serving responsibly",
        points: [
          "Pregnancy: the UK Chief Medical Officers say the safest approach is not to drink at all; the US guidelines say pregnant women should avoid alcohol completely.",
          "In the UK it is an offence knowingly to sell alcohol to a person who is drunk (Licensing Act 2003, section 141)."
        ]
      }
    ],
    practise: [["Styles › Service", "styles"]],
    sources: [
      SPEC,
      { title: "World Health Organization: alcohol fact sheet (June 2024)", url: "https://www.who.int/news-room/fact-sheets/detail/alcohol" },
      { title: "UK Chief Medical Officers' low risk drinking guidelines (2016)", url: "https://assets.publishing.service.gov.uk/media/5a80b7ed40f0b623026951db/UK_CMOs__report.pdf" },
      { title: "NHS: calculating alcohol units", url: "https://www.nhs.uk/live-well/alcohol-advice/calculating-alcohol-units/" },
      { title: "NHS: the risks of drinking too much", url: "https://www.nhs.uk/live-well/alcohol-advice/the-risks-of-drinking-too-much/" },
      { title: "CDC: standard drink sizes", url: "https://www.cdc.gov/alcohol/standard-drink-sizes/index.html" },
      { title: "Dietary Guidelines for Americans 2025-2030", url: "https://www.realfood.gov/documents/DGA.pdf" },
      { title: "Licensing Act 2003, section 141", url: "https://www.legislation.gov.uk/ukpga/2003/17/section/141" }
    ]
  }
];
