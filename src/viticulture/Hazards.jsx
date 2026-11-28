import { YearChart } from "./YearChart.jsx";

// When each hazard strikes in the vine's year (northern months).
export const HAZARDS = [
  { label: "Winter freeze", months: [12, 2], colour: "#6FA8DC", what: "Very hard frost in dormancy can kill wood and buds. Growers heap soil over the graft union to protect it." },
  { label: "Spring frost", months: [3, 5], colour: "#9fc8e8", what: "After budburst, a frost kills the young shoots. Defences: slopes, wind machines, heaters, sprinklers, late pruning." },
  { label: "Poor fruit set", months: [5, 6], colour: "#E8E4D9", what: "Cold, cloudy or rainy weather at flowering: coulure (berries fail to set and drop) and millerandage (berries of mixed sizes)." },
  { label: "Hail", months: [3, 8], colour: "#cfd8dc", what: "Can strike from budburst on; damage around flowering or later does more harm than early damage. Hail cannons have no evidence that they work." },
  { label: "Fungal disease", months: [3, 8], colour: "#7BC47B", what: "Through the growing season. Downy mildew and rot thrive in long spells of rain and cloud; powdery mildew can strike even in dry regions. Spraying and an open canopy keep them down." },
  { label: "Rain at harvest", months: [9, 10], colour: "#E07A5F", what: "Wet weather near picking raises the risk of rot. Growers watch the forecast and choose their picking dates." }
];

export const Hazards = () => (
  <YearChart
    title="Hazards through the year"
    idea="Each hazard has its season. The faint rows on top are the vine's stages; the rows below show when each hazard strikes. Switch hemisphere to see the same year six months later."
    remember="Winter: freeze. Spring: frost after budburst. Flowering: coulure and millerandage. Spring and summer: hail and fungal disease. Harvest: rain and rot."
    source={{ links: [
      { title: "AWRI frost fact sheet", url: "https://www.awri.com.au/files/attachment/frost-fact-sheet" },
      { title: "New Mexico State University, grape growing guide H-338 (winter freeze)", url: "https://pubs.nmsu.edu/_h/H338.pdf" },
      { title: "Penn State Extension: fungal diseases", url: "https://extension.psu.edu/fundamental-considerations-for-managing-fungal-diseases-of-grapevines" },
      { title: "AWRI: hail damage", url: "https://awri.com.au/files/attachment/fact-sheet-hail-damage" },
      { title: "Wikipedia: coulure", url: "https://en.wikipedia.org/wiki/Coulure" },
      { title: "Wikipedia: millerandage", url: "https://en.wikipedia.org/wiki/Millerandage" },
      { title: "Wikipedia: hail cannon", url: "https://en.wikipedia.org/wiki/Hail_cannon" }] }}
    rows={HAZARDS}
    note="Months are typical, not fixed: they move with the region and the year." />
);
