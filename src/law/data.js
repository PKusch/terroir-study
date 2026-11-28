// ─── Numbers and words behind the wine law diagrams ──────────────────────────
// Each block names its sources; every point was read on the page cited.

export const LEVELS = {
  source: { links: [
    { title: "EU Regulation 1308/2013, Article 93", url: "https://www.legislation.gov.uk/eur/2013/1308/article/93/adopted" },
    { title: "Wikipedia: French wine", url: "https://en.wikipedia.org/wiki/French_wine" },
    { title: "Federdoc: the Italian wine pyramid", url: "https://www.federdoc.com/la-piramide-dei-vini-italiani/" },
    { title: "Wikipedia: Denominación de origen", url: "https://en.wikipedia.org/wiki/Denominaci%C3%B3n_de_origen" },
    { title: "Wines of Germany: wine law", url: "https://www.winesofgermany.com/wine-industry/wine-law-and-regulations" },
    { title: "Wikipedia: Austrian wine", url: "https://en.wikipedia.org/wiki/Austrian_wine" },
    { title: "Wines of Portugal: certified wines", url: "https://winesofportugal.com/en/portuguese-wines/certified-wines/" }] },
  countries: [
    { name: "France", pdo: ["AOP / AOC"], pgi: ["IGP (Vin de Pays)"], none: ["Vin de France"], note: "AOP replaced AOC, IGP replaced Vin de Pays and Vin de France replaced Vin de Table, but the older words are still seen. The old VDQS level ended in 2011." },
    { name: "Italy", pdo: ["DOCG", "DOC"], pgi: ["IGT (IGP)"], none: ["Vino (formerly Vino da Tavola)"], note: "Italy may keep using DOCG, DOC and IGT on labels for the EU's PDO and PGI. DOCG is the stricter of the two PDO levels." },
    { name: "Spain", pdo: ["Vino de Pago", "DOCa", "DO"], pgi: ["Vino de la Tierra"], none: ["Wine without a GI"], note: "All of Spain's PDO categories sit on the top level: Vino de Pago, DOCa and DO, among others. Rioja became the first DOCa in 1991." },
    { name: "Germany", pdo: ["Prädikatswein", "Qualitätswein"], pgi: ["Landwein"], none: ["Deutscher Wein"], note: "Prädikatswein is graded by the ripeness of the grapes at harvest. New German rules apply from the 2026 vintage." },
    { name: "Austria", pdo: ["DAC", "Qualitätswein", "Prädikatswein"], pgi: ["Landwein"], none: ["Wein"], note: "DAC is Austria's regional, style-based PDO; Prädikatswein is graded by ripeness, as in Germany." },
    { name: "Portugal", pdo: ["DOC"], pgi: ["Vinho Regional"], none: ["Vinho"], note: "Vinho Regional, the PGI, needs at least 85% of its grapes from the region." }
  ]
};

export const RULES = {
  source: { links: [
    { title: "EU Regulation 2019/33, Articles 49, 50 and 55", url: "https://www.legislation.gov.uk/eur/2019/33/article/49/adopted" },
    { title: "US Code of Federal Regulations, title 27 part 4", url: "https://www.ecfr.gov/current/title-27/part-4" },
    { title: "Wine Australia: the blending rules", url: "https://www.wineaustralia.com/getmedia/fb571392-5d0c-4f9e-95fd-b7501076280a/REG_BlendingRules_v2.pdf" },
    { title: "SAWIS: Wine of Origin booklet", url: "https://www.sawis.co.za/cert/download/wineoforiginbooklet201604.pdf" }] },
  markets: [
    { id: "eu", label: "EU", rules: [
      { claim: "A vintage", pct: 85, say: "At least 85% of the grapes picked in that year.", other: "year" },
      { claim: "One variety", pct: 85, say: "At least 85% of the named grape.", other: "grape" },
      { claim: "A PDO", pct: 100, say: "All the grapes from the named area.", other: "area" },
      { claim: "A PGI", pct: 85, say: "At least 85% of the grapes from the named area.", other: "area" },
      { claim: "A smaller place in a PDO", pct: 85, say: "At least 85% from a smaller place named inside the PDO, such as a named vineyard. (A village with its own AOC is a PDO in its own right: 100%.)", other: "part of the larger area" }] },
    { id: "us", label: "USA", rules: [
      { claim: "One variety", pct: 75, say: "At least 75% of the named grape (51% for labrusca grapes such as Concord).", other: "grape" },
      { claim: "An AVA", pct: 85, say: "At least 85% from the American Viticultural Area named.", other: "area" },
      { claim: "A state or county", pct: 75, say: "At least 75% from the state or county named.", other: "area" },
      { claim: "A vintage, with an AVA", pct: 95, say: "At least 95% from the year, when the label names an AVA.", other: "year" },
      { claim: "A vintage, without an AVA", pct: 85, say: "At least 85% from the year, with a state, county or country.", other: "year" }] },
    { id: "au", label: "Australia", rules: [
      { claim: "A vintage", pct: 85, say: "At least 85% from the year named.", other: "year" },
      { claim: "One variety", pct: 85, say: "At least 85% of the named grape.", other: "grape" },
      { claim: "A region (GI)", pct: 85, say: "At least 85% from the geographical indication named.", other: "area" }] },
    { id: "za", label: "South Africa", rules: [
      { claim: "A Wine of Origin area", pct: 100, say: "All the grapes from the area named after 'W.O.'.", other: "area" },
      { claim: "A vintage", pct: 85, say: "At least 85% from the year named.", other: "year" },
      { claim: "One variety", pct: 85, say: "At least 85% of the named grape.", other: "grape" }] }
  ]
};

export const NESTS = {
  remember: "France: a village AOC can sit inside a district and a regional AOC; each is its own PDO, so all its grapes must come from it. A smaller place named inside one PDO, such as a named vineyard, needs at least 85%. USA: AVAs can sit inside AVAs. Australia: zone, region, sub-region. South Africa: region, district, ward.",
  source: { links: [
    { title: "Wikipedia: Pauillac AOC", url: "https://en.wikipedia.org/wiki/Pauillac_AOC" },
    { title: "Wikipedia: Oakville AVA", url: "https://en.wikipedia.org/wiki/Oakville_AVA" },
    { title: "Wine Australia: register of geographical indications", url: "https://www.wineaustralia.com/labelling/register-of-protected-gis-and-other-terms/geographical-indications" },
    { title: "SAWIS: Wine of Origin booklet", url: "https://www.sawis.co.za/cert/download/wineoforiginbooklet201604.pdf" }] },
  examples: [
    { id: "fr", label: "France", levels: [{ name: "France", kind: "country" }, { name: "Bordeaux", kind: "regional AOC" }, { name: "Haut-Médoc", kind: "district AOC" }, { name: "Pauillac", kind: "village AOC" }], note: "Pauillac lies within the Haut-Médoc, in Bordeaux. Each is its own AOC with its own rules." },
    { id: "us", label: "USA", levels: [{ name: "USA", kind: "country" }, { name: "California", kind: "state" }, { name: "Napa Valley", kind: "AVA (1981)" }, { name: "Oakville", kind: "AVA within Napa Valley (1993)" }], note: "An AVA is only a place: unlike a European PDO, it sets no rules on grapes or yields." },
    { id: "au", label: "Australia", levels: [{ name: "Australia", kind: "country" }, { name: "Barossa", kind: "zone" }, { name: "Eden Valley", kind: "region" }, { name: "High Eden", kind: "sub-region" }], note: "Australia's geographical indications run zone, region, sub-region." },
    { id: "za", label: "South Africa", levels: [{ name: "South Africa", kind: "country" }, { name: "Coastal Region", kind: "region" }, { name: "Paarl", kind: "district" }, { name: "Voor-Paardeberg", kind: "ward" }], note: "Wards usually sit inside a district, but not always: Cederberg is in none. Single vineyards and estates sit below the ward." }
  ]
};

export const LABEL = {
  remember: "Compulsory: the category, the PDO or PGI name, the alcohol, the provenance, the bottler, the importer for imports, allergens such as sulphites, and (since 8 December 2023) ingredients and nutrition, which may be online except the energy value and allergens, which stay on the label. Optional, but regulated if shown: vintage, variety, traditional terms, and smaller places.",
  source: { links: [
    { title: "EU Regulation 1308/2013, Article 119", url: "https://www.legislation.gov.uk/eur/2013/1308/article/119/adopted" },
    { title: "EU Regulation 2021/2117 (ingredients and nutrition)", url: "https://eur-lex.europa.eu/eli/reg/2021/2117/oj" },
    { title: "EU Regulation 2019/33 (labelling detail)", url: "https://www.legislation.gov.uk/eur/2019/33/article/49/adopted" }] },
  items: [
    { id: "producer", name: "Producer's brand", kind: "may", box: [30, 22, 240, 40], lines: ["Château Exemple"], size: 22, bold: true, say: "A brand or estate name is not one of the EU's compulsory items, though most labels show one. (This château is made up.)" },
    { id: "vintage", name: "Vintage", kind: "may", box: [110, 68, 80, 26], lines: ["2022"], size: 16, say: "Optional. If shown, at least 85% of the grapes must come from that year." },
    { id: "pdo", name: "PDO name and term", kind: "must", box: [30, 100, 240, 50], lines: ["Saint-Exemple", "Appellation d'Origine Protégée"], size: 14, say: "Compulsory for a PDO or PGI wine: the protected name, with the term (here the French AOP). The wine category may then be left off." },
    { id: "variety", name: "Grape variety", kind: "may", box: [70, 156, 160, 24], lines: ["Merlot"], size: 13, say: "Optional. One variety named means at least 85% of it; two or more named means 100% of those, in order of quantity." },
    { id: "alcohol", name: "Actual alcohol", kind: "must", box: [22, 196, 120, 26], lines: ["13.5% vol"], size: 13, sans: true, say: "Compulsory: the actual alcohol strength, in % vol." },
    { id: "volume", name: "Volume", kind: "must", box: [158, 196, 120, 26], lines: ["750 ml"], size: 13, sans: true, say: "The nominal volume must be shown, under the EU's general food labelling rules." },
    { id: "allergens", name: "Allergens", kind: "must", box: [22, 228, 256, 24], lines: ["Contains sulphites"], size: 12, sans: true, say: "Allergens such as sulphites, egg or milk must be on the bottle itself, with set wording, even when the ingredients list is online." },
    { id: "bottler", name: "Bottler and provenance", kind: "must", box: [22, 258, 256, 40], lines: ["Bottled by Château Exemple,", "Saint-Exemple, France"], size: 11, sans: true, say: "Compulsory: who bottled the wine, and its provenance (where it comes from). For imports, the importer is compulsory too." },
    { id: "elabel", name: "E-label: ingredients and nutrition", kind: "must", box: [22, 304, 256, 62], lines: ["E = 85 kcal / 100 ml", "Ingredients and nutrition:", "scan the code"], size: 11, sans: true, say: "Since 8 December 2023, ingredients and a nutrition declaration are compulsory. The label may show only the energy (E); the full list can be online through a code, which may not collect data or show marketing." }
  ]
};

export const TIMELINE = {
  source: { links: [
    { title: "Wikipedia: INAO", url: "https://en.wikipedia.org/wiki/Institut_national_de_l%27origine_et_de_la_qualit%C3%A9" },
    { title: "Wikipedia: Denominazione di origine controllata", url: "https://en.wikipedia.org/wiki/Denominazione_di_origine_controllata" },
    { title: "WOSA: Wine of Origin", url: "https://www.wosa.co.za/The-Industry/Wines-Of-Origin/Introduction" },
    { title: "US Code of Federal Regulations, title 27 part 9 (AVAs)", url: "https://www.ecfr.gov/current/title-27/part-9" },
    { title: "Wikipedia: Denominación de origen", url: "https://en.wikipedia.org/wiki/Denominaci%C3%B3n_de_origen" },
    { title: "EU Regulation 479/2008", url: "https://eur-lex.europa.eu/eli/reg/2008/479/oj" },
    { title: "EU Regulation 2021/2117", url: "https://eur-lex.europa.eu/eli/reg/2021/2117/oj" }] },
  events: [
    { year: 1935, text: "France sets up the body that becomes INAO; the first AOCs follow in 1936." },
    { year: 1963, text: "Italy's DOC system begins." },
    { year: 1973, text: "South Africa's Wine of Origin scheme begins." },
    { year: 1978, text: "US appellation rules; the first AVA, Augusta, follows in 1980." },
    { year: 1991, text: "Rioja becomes Spain's first DOCa." },
    { year: 2009, text: "The EU brings PDO and PGI to wine (from 1 August 2009)." },
    { year: 2011, text: "France's VDQS level ends." },
    { year: 2021, text: "EU allows PDO rules to accept crosses with other vine species." },
    { year: 2023, text: "Ingredients and nutrition on EU wine labels (from 8 December)." }
  ]
};
