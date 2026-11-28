// ─── Summary cards: an icon for each section, and the diagrams that show it ──
// Keys are section titles in principles.js; `see` lists diagram titles on the
// same page (each diagram's id comes from its title).
export const SECTION_VISUALS = {
  climate: {
    "What a vine needs": { icon: "☀️", see: ["The wine bands", "How warm is warm? Climate bands"] },
    "Climate bands and types": { icon: "🌡️", see: ["How warm is warm? Climate bands", "Maritime or continental?"] },
    "What shapes a region's climate": { icon: "🗺️", see: ["Altitude", "Oceans and currents", "Day and night: diurnal range"] },
    "What shapes a single site": { icon: "⛰️", see: ["Slope and aspect", "Soil: heat and water"] },
    "Water": { icon: "💧", see: ["Soil: heat and water"] }
  },
  viticulture: {
    "The vine itself": { icon: "🧬", see: ["Species, variety, clone, crossing, hybrid"] },
    "Parts of the vine": { icon: "🌿", see: ["Parts of the vine"] },
    "Inside the grape": { icon: "🍇", see: ["Inside the grape", "Berry size and skin"] },
    "The vine's year": { icon: "📅", see: ["The vine's year", "The grower's year", "Poor fruit set: coulure and millerandage"] },
    "What ripening changes": { icon: "📈", see: ["What ripening changes"] },
    "Managing the vine": { icon: "✂️", see: ["Planting density", "Training and pruning", "Canopy management"] },
    "Hazards and responses": { icon: "❄️", see: ["Hazards through the year", "Spring frost: which defence works?", "Irrigation"] },
    "Pests and diseases": { icon: "🍄", see: ["Weather and disease", "Grafting: the answer to phylloxera"] },
    "Concentrating sugar, and ways of farming": { icon: "🌾", see: ["Weather and disease", "Ways of farming", "Harvest: by hand or by machine"] }
  },
  law: {
    "The EU's two levels": { icon: "🏛️", see: ["The EU quality pyramid", "What a label promises: the percentage rules"] },
    "The 85% rules in the EU": { icon: "🍾", see: ["What a label promises: the percentage rules", "Naming the grapes: build a blend"] },
    "National words for the EU levels": { icon: "🇪🇺", see: ["The EU quality pyramid"] },
    "Outside Europe": { icon: "🌏", see: ["What a label promises: the percentage rules", "Places inside places"] },
    "What an EU label must show": { icon: "🏷️", see: ["Reading an EU wine label", "How the rules grew"] }
  },
  winemaking: {
    "Fermentation": { icon: "🫧", see: ["Fermentation: sugar into alcohol"] },
    "White, red and rosé": { icon: "🍷", see: ["White, red and rosé, step by step", "Red wine: managing the cap", "Carbonic maceration"] },
    "Adjusting the must": { icon: "⚖️", see: [] },
    "Malolactic conversion, lees and oak": { icon: "🛢️", see: ["Malolactic conversion", "Lees: resting on the yeast", "Oak: size, age and toast"] },
    "Blending, clarifying and protecting the wine": { icon: "🔍", see: ["Making the wine clear and stable"] },
    "Sweet wines": { icon: "🍯", see: ["Three ways to a sweet wine", "Fermentation: sugar into alcohol"] }
  }
};
