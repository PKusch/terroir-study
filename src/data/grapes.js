// ─── Grape variety profiles ──────────────────────────────────────────────────
// One profile per grape, keyed by a plain lowercase slug. The region files name
// grapes the way the labels do ("Malbec (Côt)", "Moscato Bianco", "Rolle
// (Vermentino)"), so each profile lists the other names it goes by and
// grapeFor() turns any of those spellings into the profile.
//
// Fields: name, aliases, colour ("red" | "white"), body / acidity / tannin
// ("low" | "medium" | "high"; tannin only for reds), aromas (WSET words),
// notes (what the grape needs from a site, and what age or oak does to it).

export const GRAPES = {
  // ── Reds ──────────────────────────────────────────────────────────────────
  cabernetSauvignon: {
    name: "Cabernet Sauvignon",
    aliases: [],
    colour: "red",
    body: "high",
    acidity: "high",
    tannin: "high",
    aromas: ["blackcurrant", "black cherry", "green bell pepper", "mint", "cedar"],
    notes: "Ripens late, so it needs a warm site with well-drained soil such as gravel; in a cool year it tastes green and leafy. Takes new oak well and gains cedar, tobacco and leather with age."
  },
  merlot: {
    name: "Merlot",
    aliases: [],
    colour: "red",
    body: "medium",
    acidity: "medium",
    tannin: "medium",
    aromas: ["plum", "blackberry", "black cherry", "chocolate", "fruitcake"],
    notes: "Ripens earlier than Cabernet Sauvignon, so it copes with cooler, water-holding clay soils. Its softer tannins make it approachable young; oak adds vanilla and chocolate, and age brings dried fruit and fruitcake."
  },
  cabernetFranc: {
    name: "Cabernet Franc",
    aliases: [],
    colour: "red",
    body: "medium",
    acidity: "high",
    tannin: "medium",
    aromas: ["raspberry", "redcurrant", "green bell pepper", "pencil shavings", "violet"],
    notes: "Buds and ripens earlier than Cabernet Sauvignon, which is why it can ripen in the cool Loire; unripe fruit shows a leafy, green pepper edge. Usually lightly oaked or unoaked, and drunk young for its fresh red fruit."
  },
  pinotNoir: {
    name: "Pinot Noir",
    aliases: ["Spätburgunder", "Pinot Nero", "Blauburgunder"],
    colour: "red",
    body: "low",
    acidity: "high",
    tannin: "low",
    aromas: ["red cherry", "raspberry", "strawberry", "mushroom", "forest floor"],
    notes: "Thin-skinned and early ripening: it needs a cool climate to keep its acidity and rots easily in wet weather. Gentle extraction and light oak suit it; with age the red fruit turns to mushroom, forest floor and game."
  },
  syrah: {
    name: "Syrah",
    aliases: ["Shiraz"],
    colour: "red",
    body: "high",
    acidity: "medium",
    tannin: "high",
    aromas: ["black pepper", "blackberry", "violet", "smoked meat", "liquorice"],
    notes: "Needs enough warmth to ripen its tannins, but too much heat loses the pepper and floral notes; steep, sunny granite slopes suit it. Handles oak and whole-bunch fermentation well, and ages into leather, meat and earth."
  },
  grenache: {
    name: "Grenache",
    aliases: ["Garnacha", "Garnacha Tinta", "Cannonau", "Grenache Noir"],
    colour: "red",
    body: "high",
    acidity: "low",
    tannin: "low",
    aromas: ["strawberry", "raspberry", "white pepper", "dried herbs", "liquorice"],
    notes: "Late ripening and drought-tolerant, so it wants a hot, dry site; bush vines shade the fruit. It gives high alcohol and oxidises easily, so large old oak is preferred to new barrels; with age it turns to dried fruit, leather and toffee."
  },
  mourvedre: {
    name: "Mourvèdre",
    aliases: ["Monastrell", "Mataro"],
    colour: "red",
    body: "high",
    acidity: "medium",
    tannin: "high",
    aromas: ["blackberry", "black plum", "black pepper", "meaty", "gamey"],
    notes: "Ripens very late and needs more heat than Grenache: warm, sheltered sites near the sea. Firm and savoury when young, it softens over long ageing in large oak and develops leather and game."
  },
  pinotMeunier: {
    name: "Pinot Meunier",
    aliases: ["Meunier"],
    colour: "red",
    body: "low",
    acidity: "high",
    tannin: "low",
    aromas: ["red apple", "strawberry", "raspberry", "red cherry", "brioche"],
    notes: "Buds later than Pinot Noir, so it is safer in frost-prone valley sites. Gives fruity, early-drinking body to non-vintage sparkling blends rather than long ageing."
  },
  carignan: {
    name: "Carignan",
    aliases: ["Cariñena", "Mazuelo", "Carignano", "Carignane"],
    colour: "red",
    body: "medium",
    acidity: "high",
    tannin: "high",
    aromas: ["black plum", "blackberry", "dried cranberry", "dried herbs", "earthy"],
    notes: "Ripens late and needs heat, and is prone to rot and mildew. High-yielding on young vines and rustic, but old bush vines give concentrated, savoury fruit; carbonic maceration softens its tannin."
  },
  cinsault: {
    name: "Cinsault",
    aliases: ["Cinsaut"],
    colour: "red",
    body: "low",
    acidity: "medium",
    tannin: "low",
    aromas: ["red cherry", "raspberry", "strawberry", "floral", "spice"],
    notes: "Copes well with heat and drought and yields generously. Its pale colour and soft, fresh fruit make it a rosé and blending grape rather than one for ageing."
  },
  malvasia: {
    name: "Malvasía",
    aliases: ["Malvasia"],
    colour: "white",
    body: "high",
    acidity: "low",
    aromas: ["apricot", "peach", "honey", "orange peel", "nuts"],
    notes: "A blending grape in white Rioja, where it adds body and perfume to the more neutral Viura. Low acidity means it is picked early to keep freshness; in the traditional oak-aged style it turns golden and nutty."
  },
  malbec: {
    name: "Malbec",
    aliases: ["Côt"],
    colour: "red",
    body: "high",
    acidity: "medium",
    tannin: "high",
    aromas: ["black plum", "blackberry", "damson", "violet", "cocoa"],
    notes: "Needs warmth and sun; on the limestone plateaux of Cahors it gives deep colour and firm structure. Oak adds spice and cocoa, and with age the firm tannins soften and leather and tobacco appear."
  },
  tannat: {
    name: "Tannat",
    aliases: [],
    colour: "red",
    body: "high",
    acidity: "high",
    tannin: "high",
    aromas: ["blackberry", "black plum", "raspberry", "liquorice", "smoke"],
    notes: "Thick-skinned and extremely tannic: it needs a warm site to ripen and careful handling in the winery. Micro-oxygenation and oak ageing soften it; it ages for years."
  },
  negrette: {
    name: "Négrette",
    aliases: [],
    colour: "red",
    body: "medium",
    acidity: "low",
    tannin: "medium",
    aromas: ["violet", "red cherry", "raspberry", "blackcurrant", "liquorice"],
    notes: "A Fronton grape that likes warm, well-drained sites but is prone to rot. Its low acidity and perfumed fruit suit early drinking, often blended with Syrah or Cabernet for structure."
  },
  gamay: {
    name: "Gamay",
    aliases: ["Gamay Noir"],
    colour: "red",
    body: "low",
    acidity: "high",
    tannin: "low",
    aromas: ["red cherry", "raspberry", "cranberry", "banana", "violet"],
    notes: "Thin-skinned and early ripening; granite soils give it structure it lacks on clay. Carbonic maceration brings out banana and bubblegum for drinking young, while Cru wines made traditionally gain earthy complexity with age."
  },
  nebbiolo: {
    name: "Nebbiolo",
    aliases: ["Spanna", "Chiavennasca"],
    colour: "red",
    body: "medium",
    acidity: "high",
    tannin: "high",
    aromas: ["sour red cherry", "rose", "tar", "dried herbs", "liquorice"],
    notes: "Buds early and ripens very late, so only the warmest south-facing slopes ripen its tannins. Pale in colour but fierce in tannin and acid when young; long ageing in bottle brings leather, truffle and dried flowers."
  },
  barbera: {
    name: "Barbera",
    aliases: [],
    colour: "red",
    body: "medium",
    acidity: "high",
    tannin: "low",
    aromas: ["red cherry", "red plum", "blackberry", "dried herbs", "black pepper"],
    notes: "Vigorous and reliable, ripening after Dolcetto and before Nebbiolo, so it takes the middle slopes. Deep colour with high acid and soft tannin; new oak adds spice and the tannin the grape lacks."
  },
  dolcetto: {
    name: "Dolcetto",
    aliases: [],
    colour: "red",
    body: "medium",
    acidity: "low",
    tannin: "medium",
    aromas: ["black cherry", "black plum", "violet", "almond", "dried herbs"],
    notes: "Ripens earliest of the Piedmont reds, so it gets the cooler sites Nebbiolo cannot use. Soft, dark-fruited and slightly bitter; made without oak and drunk young."
  },
  sangiovese: {
    name: "Sangiovese",
    aliases: ["Brunello", "Prugnolo Gentile", "Morellino"],
    colour: "red",
    body: "medium",
    acidity: "high",
    tannin: "high",
    aromas: ["sour cherry", "red plum", "dried herbs", "tomato leaf", "tea leaves"],
    notes: "Thin-skinned and late ripening: it needs warm, sunny hillsides to ripen its tannins, but loses acidity in real heat. Traditionally aged in large old oak; with age it turns savoury, with leather, dried fruit and meat."
  },
  corvina: {
    name: "Corvina",
    aliases: ["Corvina Veronese"],
    colour: "red",
    body: "low",
    acidity: "high",
    tannin: "low",
    aromas: ["sour red cherry", "red plum", "almond", "dried cherry", "dried fig"],
    notes: "Thick skins let its bunches dry for months without rotting, which is why Valpolicella built appassimento around it. On its own it makes light, sour-cherry wine; dried it gives the dried fruit and bitter finish of Amarone."
  },
  corvinone: {
    name: "Corvinone",
    aliases: [],
    colour: "red",
    body: "medium",
    acidity: "high",
    tannin: "medium",
    aromas: ["black cherry", "dried cherry", "plum", "spice", "dried herbs"],
    notes: "A larger-berried relative of Corvina that dries well and adds colour and tannin to Valpolicella blends. Rarely made on its own."
  },
  rondinella: {
    name: "Rondinella",
    aliases: [],
    colour: "red",
    body: "low",
    acidity: "medium",
    tannin: "low",
    aromas: ["red cherry", "dried herbs", "floral", "light spice", "neutral"],
    notes: "Hardy and disease-resistant, and it dries reliably for appassimento. Fairly neutral, so it supports Corvina in the blend rather than leading it."
  },
  aglianico: {
    name: "Aglianico",
    aliases: [],
    colour: "red",
    body: "high",
    acidity: "high",
    tannin: "high",
    aromas: ["blackberry", "black cherry", "smoke", "earth", "dried herbs"],
    notes: "Buds early and ripens very late, so it needs the long, dry southern autumn and volcanic hillside sites. Fierce tannin when young; extended ageing in oak and bottle softens it and brings leather and tar."
  },
  primitivo: {
    name: "Primitivo",
    aliases: ["Zinfandel"],
    colour: "red",
    body: "high",
    acidity: "medium",
    tannin: "medium",
    aromas: ["blackberry", "black plum", "dried fig", "jammy fruit", "sweet spice"],
    notes: "Ripens early and unevenly in the heat of Puglia, so alcohol runs high and fruit tastes jammy; bush vines protect it from sunburn. Soft tannin means it is mostly drunk young."
  },
  negroamaro: {
    name: "Negroamaro",
    aliases: [],
    colour: "red",
    body: "high",
    acidity: "medium",
    tannin: "medium",
    aromas: ["black plum", "blackberry", "dried cherry", "liquorice", "bitter finish"],
    notes: "Suited to hot, dry Puglia on bush vines; its name hints at the dark colour and bitter edge. Ripe and warm, usually drunk within a few years."
  },
  neroDAvola: {
    name: "Nero d'Avola",
    aliases: ["Calabrese"],
    colour: "red",
    body: "medium",
    acidity: "medium",
    tannin: "medium",
    aromas: ["black plum", "black cherry", "dried herbs", "sweet spice", "liquorice"],
    notes: "Sicily's main red: drought-tolerant and happy in heat, though altitude keeps it fresher. Takes oak well and can age, but most is made for early drinking."
  },
  nerelloMascalese: {
    name: "Nerello Mascalese",
    aliases: [],
    colour: "red",
    body: "medium",
    acidity: "high",
    tannin: "medium",
    aromas: ["red cherry", "cranberry", "dried herbs", "smoke", "dried flowers"],
    notes: "Grown on the high volcanic terraces of Etna, where it ripens late in the cool of the altitude. Pale, high in acid and fine in tannin, it is often compared to Pinot Noir and ages gracefully."
  },
  tempranillo: {
    name: "Tempranillo",
    aliases: ["Tinto Fino", "Tinta del País", "Tinta Roriz", "Cencibel", "Ull de Llebre"],
    colour: "red",
    body: "medium",
    acidity: "medium",
    tannin: "medium",
    aromas: ["strawberry", "red plum", "black plum", "tobacco", "leather"],
    notes: "Ripens early, so it needs altitude or cool nights to keep its acidity. Long ageing in American oak gives vanilla, dill and coconut; with bottle age it turns to dried fruit, leather and tobacco."
  },
  graciano: {
    name: "Graciano",
    aliases: [],
    colour: "red",
    body: "medium",
    acidity: "high",
    tannin: "high",
    aromas: ["blackcurrant", "black cherry", "violet", "spice", "dried herbs"],
    notes: "Low-yielding and late ripening, so it is grown in small amounts. In Rioja blends it adds acidity, colour and perfume that help the wine age."
  },
  dornfelder: {
    name: "Dornfelder",
    aliases: [],
    colour: "red",
    body: "medium",
    acidity: "medium",
    tannin: "medium",
    aromas: ["blackberry", "black cherry", "plum", "sour cherry", "floral"],
    notes: "A German crossing bred to ripen reliably in a cool climate and give deep colour. Fruity and soft, mostly drunk young, though some see oak."
  },

  // ── Whites ────────────────────────────────────────────────────────────────
  sauvignonBlanc: {
    name: "Sauvignon Blanc",
    aliases: ["Fumé Blanc"],
    colour: "white",
    body: "medium",
    acidity: "high",
    aromas: ["gooseberry", "grass", "green bell pepper", "passion fruit", "elderflower", "wet stone"],
    notes: "A cool site keeps its acidity and green, herbaceous aromas; too much heat makes it tropical and flat. Usually unoaked and drunk young, though in Bordeaux it is blended and barrel-aged."
  },
  semillon: {
    name: "Sémillon",
    aliases: ["Semillon"],
    colour: "white",
    body: "medium",
    acidity: "medium",
    aromas: ["lemon", "honey", "wax", "toast", "apricot"],
    notes: "Thin skins make it prone to noble rot, which is why it leads the sweet wines of Sauternes. Dry or sweet, it gains honey, toast and wax with age and adds body to Sauvignon Blanc."
  },
  chardonnay: {
    name: "Chardonnay",
    aliases: [],
    colour: "white",
    body: "medium",
    acidity: "medium",
    aromas: ["green apple", "citrus", "stone fruit", "melon", "butter", "toast"],
    notes: "Early ripening and fairly neutral, so it reflects the site: steely and mineral in a cool climate, rich and stone-fruited in warmth. Barrel fermentation, lees stirring and malolactic conversion add butter, toast and nuts."
  },
  viognier: {
    name: "Viognier",
    aliases: [],
    colour: "white",
    body: "high",
    acidity: "low",
    aromas: ["apricot", "peach", "honeysuckle", "blossom", "ginger"],
    notes: "Needs a warm site to develop its perfume, but loses it and its acidity if picked overripe. Best drunk young; some producers use oak and lees for extra weight."
  },
  marsanne: {
    name: "Marsanne",
    aliases: [],
    colour: "white",
    body: "high",
    acidity: "low",
    aromas: ["honeysuckle", "pear", "quince", "almond", "honey"],
    notes: "Ripens easily on warm sites and gives a weighty, low-acid wine, usually blended with Roussanne. Oxidises readily, but the best age into honey and nuts."
  },
  roussanne: {
    name: "Roussanne",
    aliases: [],
    colour: "white",
    body: "medium",
    acidity: "medium",
    aromas: ["pear", "apricot", "herbal tea", "honey", "blossom"],
    notes: "Hard to grow: it rots easily and suffers in wind, so it is usually a blending partner for Marsanne. Adds aroma and acidity to the blend and ages well."
  },
  grenacheBlanc: {
    name: "Grenache Blanc",
    aliases: ["Garnacha Blanca"],
    colour: "white",
    body: "high",
    acidity: "low",
    aromas: ["green apple", "pear", "fennel", "herbs", "honey"],
    notes: "A white form of Grenache, at home in the hot, dry south, where it gives weight and alcohol to blends. Oxidises easily and is mostly drunk young."
  },
  clairette: {
    name: "Clairette",
    aliases: ["Clairette Blanche"],
    colour: "white",
    body: "medium",
    acidity: "low",
    aromas: ["white flowers", "apple", "peach", "fennel", "herbs"],
    notes: "Thrives in Mediterranean heat but can oxidise and turn flabby, so it is picked early and blended, or used in rosé. Drunk young."
  },
  cheninBlanc: {
    name: "Chenin Blanc",
    aliases: ["Steen", "Pineau de la Loire"],
    colour: "white",
    body: "medium",
    acidity: "high",
    aromas: ["green apple", "quince", "honey", "wet wool", "chamomile"],
    notes: "A cool site keeps the high acidity that lets one grape make dry, sweet and sparkling wine; warm autumns bring noble rot for the sweet styles. Ages for decades, turning to honey, toast and beeswax."
  },
  melonDeBourgogne: {
    name: "Melon de Bourgogne",
    aliases: ["Muscadet", "Melon"],
    colour: "white",
    body: "low",
    acidity: "high",
    aromas: ["green apple", "lemon", "saline", "bready", "wet stone"],
    notes: "Frost-hardy and neutral, suited to the cool Atlantic end of the Loire. Ageing on its lees (sur lie) adds texture and a bready note; drunk young with shellfish."
  },
  riesling: {
    name: "Riesling",
    aliases: [],
    colour: "white",
    body: "low",
    acidity: "high",
    aromas: ["lime", "green apple", "peach", "blossom", "honey", "petrol"],
    notes: "Late ripening and frost-hardy: it wants a cool, dry site with a long autumn to ripen while keeping its acid. Never oaked, made dry to sweet, and among the longest-lived whites, developing honey and petrol with age."
  },
  gewurztraminer: {
    name: "Gewurztraminer",
    aliases: ["Gewürztraminer", "Traminer"],
    colour: "white",
    body: "high",
    acidity: "low",
    aromas: ["lychee", "rose", "ginger", "sweet spice", "honey"],
    notes: "Early ripening and easily overripe, so it needs a cool, dry site to hold on to its acidity. Full-bodied and often off-dry; drunk young while the perfume is fresh."
  },
  pinotGris: {
    name: "Pinot Gris",
    aliases: ["Pinot Grigio", "Grauburgunder", "Ruländer"],
    colour: "white",
    body: "medium",
    acidity: "medium",
    aromas: ["pear", "ripe apple", "honey", "smoke", "ginger"],
    notes: "Picked early in a cool site it gives the light, neutral, crisp style called Pinot Grigio; left to ripen in Alsace it becomes rich, smoky and honeyed. Rarely oaked."
  },
  muscat: {
    name: "Muscat",
    aliases: ["Moscato Bianco", "Moscato", "Muscat Blanc à Petits Grains", "Moscatel"],
    colour: "white",
    body: "low",
    acidity: "low",
    aromas: ["grape", "orange blossom", "rose", "peach", "honey"],
    notes: "The one grape whose wine smells of grapes. Made dry in Alsace, lightly sparkling and sweet in Asti, and fortified in the south; drunk young while the aroma lasts."
  },
  picpoul: {
    name: "Picpoul",
    aliases: ["Piquepoul", "Picpoul Blanc"],
    colour: "white",
    body: "low",
    acidity: "high",
    aromas: ["lemon", "green apple", "saline", "white flowers", "wet stone"],
    notes: "Keeps sharp acidity even in Mediterranean heat, which earned it the name 'lip-stinger'. Unoaked, drunk young, and made for shellfish."
  },
  vermentino: {
    name: "Vermentino",
    aliases: ["Rolle", "Favorita"],
    colour: "white",
    body: "medium",
    acidity: "medium",
    aromas: ["citrus", "green apple", "white flowers", "herbs", "saline", "bitter almond"],
    notes: "Suited to warm, coastal sites where sea breezes keep it fresh. Unoaked and drunk young, with a slightly bitter almond finish."
  },
  grosManseng: {
    name: "Gros Manseng",
    aliases: [],
    colour: "white",
    body: "medium",
    acidity: "high",
    aromas: ["grapefruit", "citrus", "apricot", "quince", "herbs"],
    notes: "Ripens earlier and yields more than Petit Manseng, so it makes the dry wines of Jurançon. High acidity keeps it fresh; drunk young."
  },
  petitManseng: {
    name: "Petit Manseng",
    aliases: [],
    colour: "white",
    body: "high",
    acidity: "high",
    aromas: ["apricot", "pineapple", "honey", "quince", "cinnamon"],
    notes: "Small, thick-skinned berries resist rot and can shrivel on the vine, concentrating sugar for late-harvest sweet wines. High acidity balances the sweetness and lets the wines age."
  },
  cortese: {
    name: "Cortese",
    aliases: [],
    colour: "white",
    body: "low",
    acidity: "high",
    aromas: ["lemon", "green apple", "white flowers", "almond", "wet stone"],
    notes: "The grape of Gavi: it ripens easily but keeps its acidity in the hills. Unoaked, crisp and drunk young."
  },
  vernaccia: {
    name: "Vernaccia",
    aliases: ["Vernaccia di San Gimignano"],
    colour: "white",
    body: "medium",
    acidity: "high",
    aromas: ["citrus", "green apple", "almond", "saline", "white flowers"],
    notes: "Tuscany's main white, grown on the hills around San Gimignano. Crisp with a bitter almond finish; mostly unoaked and drunk young."
  },
  trebbianoToscano: {
    name: "Trebbiano Toscano",
    aliases: ["Ugni Blanc", "Trebbiano"],
    colour: "white",
    body: "low",
    acidity: "high",
    aromas: ["lemon", "green apple", "neutral", "floral", "herbs"],
    notes: "High-yielding and neutral, giving light, crisp wine wherever it is planted. Its acidity makes it a base for brandy and, dried, part of the Vin Santo blend."
  },
  garganega: {
    name: "Garganega",
    aliases: [],
    colour: "white",
    body: "medium",
    acidity: "medium",
    aromas: ["pear", "green apple", "almond", "white flowers", "honey"],
    notes: "Late ripening and vigorous, so pergola training and the volcanic Classico hills hold its yields down. Mostly unoaked; the best gain honey and nuts with age, and dried grapes make sweet Recioto di Soave."
  },
  glera: {
    name: "Glera",
    aliases: ["Prosecco"],
    colour: "white",
    body: "low",
    acidity: "medium",
    aromas: ["green apple", "pear", "white flowers", "melon", "honeysuckle"],
    notes: "Vigorous and high-yielding, the base of Prosecco. The tank method keeps its fresh fruit and floral notes; drunk young with no lees character."
  },
  fiano: {
    name: "Fiano",
    aliases: [],
    colour: "white",
    body: "medium",
    acidity: "medium",
    aromas: ["peach", "apricot", "honey", "hazelnut", "wax", "herbs"],
    notes: "Thick-skinned and suited to the volcanic hills of Campania, where cool nights keep it fresh. Waxy and textured; it ages well, gaining honey and nuts."
  },
  greco: {
    name: "Greco",
    aliases: ["Greco di Tufo", "Greco Bianco"],
    colour: "white",
    body: "medium",
    acidity: "high",
    aromas: ["stone fruit", "citrus", "green apple", "herbs", "wet stone"],
    notes: "Late ripening, grown on the tufa and volcanic soils around Tufo. Crisp and mineral; unoaked or lightly oaked, drunk young to a few years old."
  },
  grillo: {
    name: "Grillo",
    aliases: [],
    colour: "white",
    body: "medium",
    acidity: "medium",
    aromas: ["citrus", "grapefruit", "white peach", "herbs", "saline"],
    notes: "Tolerates Sicilian heat and drought while keeping some freshness. Once the base of Marsala, now mostly made as a fresh, dry white for early drinking."
  },
  catarratto: {
    name: "Catarratto",
    aliases: [],
    colour: "white",
    body: "medium",
    acidity: "medium",
    aromas: ["lemon", "green apple", "herbs", "almond", "white flowers"],
    notes: "Sicily's most planted white: high-yielding and fairly neutral. Used for Marsala and simple dry whites; drunk young."
  },
  viura: {
    name: "Viura",
    aliases: ["Macabeo", "Macabeu"],
    colour: "white",
    body: "medium",
    acidity: "medium",
    aromas: ["green apple", "lemon", "white flowers", "honey", "nuts"],
    notes: "Ripens late and keeps acidity in the cooler parts of Rioja; neutral when young. Traditional long oak ageing turns it nutty and honeyed, and it is also a base for Cava."
  },
  palomino: {
    name: "Palomino",
    aliases: ["Palomino Fino", "Listán Blanco"],
    colour: "white",
    body: "low",
    acidity: "low",
    aromas: ["apple", "bread dough", "almond", "saline", "neutral"],
    notes: "Neutral and low in acid, at home on the chalky albariza soils of Jerez that store winter rain. Its blandness suits sherry, where ageing under flor or in contact with air gives the character."
  },
  pedroXimenez: {
    name: "Pedro Ximénez",
    aliases: ["PX", "Pedro Ximenez"],
    colour: "white",
    body: "high",
    acidity: "low",
    aromas: ["raisin", "fig", "dried fruit", "coffee", "liquorice"],
    notes: "Thin-skinned and sun-dried after picking to concentrate its sugar for lusciously sweet fortified wine. Long oxidative ageing brings coffee and molasses."
  },
  mullerThurgau: {
    name: "Müller-Thurgau",
    aliases: ["Muller-Thurgau", "Rivaner"],
    colour: "white",
    body: "low",
    acidity: "medium",
    aromas: ["peach", "green apple", "floral", "grapey", "elderflower"],
    notes: "A crossing bred to ripen early and yield well in cool sites where Riesling struggles. Soft and simple, drunk young."
  },
  silvaner: {
    name: "Silvaner",
    aliases: ["Sylvaner"],
    colour: "white",
    body: "medium",
    acidity: "medium",
    aromas: ["green apple", "pear", "herbs", "wet stone", "earthy"],
    notes: "Ripens earlier than Riesling and suits limestone soils. Fairly neutral, dry and food-friendly; usually unoaked and drunk young."
  },
  pinotBlanc: {
    name: "Pinot Blanc",
    aliases: ["Weissburgunder", "Weißburgunder", "Pinot Bianco"],
    colour: "white",
    body: "medium",
    acidity: "medium",
    aromas: ["apple", "pear", "white flowers", "almond", "citrus"],
    notes: "Early ripening and easy to grow, with a neutral character like unoaked Chardonnay. Made dry for early drinking and as a base for sparkling wine."
  }
};

// ─── Lookup helpers ──────────────────────────────────────────────────────────

// Lowercase, trim, and drop accents so "Cot" finds "Côt" and "Semillon" finds "Sémillon".
const normalise = (s) =>
  String(s).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();

// Every name and alias, normalised, pointing at its slug. Built once.
const INDEX = (() => {
  const idx = new Map();
  for (const [slug, g] of Object.entries(GRAPES)) {
    idx.set(normalise(g.name), slug);
    for (const a of g.aliases) idx.set(normalise(a), slug);
  }
  return idx;
})();

// The slug for a grape name as a region file writes it: the exact name, an
// alias, or the part before or inside a bracket ("Malbec (Côt)", "Rolle
// (Vermentino)"). Case- and accent-insensitive. null if nothing matches.
export function slugFor(nameAsWritten) {
  if (!nameAsWritten) return null;
  const whole = normalise(nameAsWritten);
  if (INDEX.has(whole)) return INDEX.get(whole);
  const m = whole.match(/^([^(]+)\(([^)]+)\)/);
  if (m) {
    const outside = m[1].trim();
    const inside = m[2].trim();
    if (INDEX.has(outside)) return INDEX.get(outside);
    if (INDEX.has(inside)) return INDEX.get(inside);
  }
  return null;
}

// The profile (with its slug attached) for a grape name as written, or null.
export function grapeFor(nameAsWritten) {
  const slug = slugFor(nameAsWritten);
  return slug ? { slug, ...GRAPES[slug] } : null;
}

// Region keys whose keyGrapes mention this grape by any name, reds and whites
// kept separate: { red: [...keys], white: [...keys] }.
export function regionsGrowing(slug, regions) {
  const out = { red: [], white: [] };
  for (const [key, r] of Object.entries(regions)) {
    if (!r.keyGrapes) continue;
    for (const colour of ["red", "white"]) {
      if ((r.keyGrapes[colour] || []).some((g) => slugFor(g) === slug)) out[colour].push(key);
    }
  }
  return out;
}
