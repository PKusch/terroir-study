// ─── The vine's year, month by month ─────────────────────────────────────────
// Approximate months for each stage, from Concha y Toro's guide to the vine's
// yearly cycle, with AWRI for Australia (budburst mostly September, flowering
// mostly from November). Real dates vary by region, grape and year.
// Months run 1 (January) to 12 (December); a stage may wrap past December.
export const CALENDAR_SOURCE = { title: "Concha y Toro: the vine's yearly cycle", url: "https://conchaytoro.com/en/?p=53426" };

export const STAGES = [
  { id: "dormancy", label: "Dormancy", colour: "#5A6270", north: [11, 3], south: [5, 9] },
  { id: "budburst", label: "Budburst", colour: "#7BC47B", north: [3, 4], south: [9, 10] },
  { id: "flowering", label: "Flowering and fruit set", colour: "#E8E4D9", north: [5, 7], south: [11, 1] },
  { id: "veraison", label: "Véraison", colour: "#B07AA1", north: [7, 8], south: [1, 2] },
  { id: "harvest", label: "Harvest", colour: "#C4A962", north: [9, 11], south: [3, 5] }
];

export const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// The months (1 to 12) a stage covers, wrapping past December.
export function monthsOf([from, to]) {
  const out = [];
  for (let m = from; ; m = (m % 12) + 1) {
    out.push(m);
    if (m === to) break;
  }
  return out;
}

export const CALENDAR_NOTES = [
  "Fruit set usually ends about two weeks after flowering.",
  "From véraison to harvest usually takes one to two months: shorter in hot regions, longer in cool ones.",
  "Growers often expect harvest about 100 days after flowering, a rule of thumb that varies with the site and the year."
];
