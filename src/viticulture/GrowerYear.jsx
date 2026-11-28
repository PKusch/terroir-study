import { YearChart } from "./YearChart.jsx";

// A grower's year, from a Napa Valley cost study (northern months).
export const TASKS = [
  { label: "Winter pruning", months: [1, 3], what: "In dormancy: by machine in January, finished by hand by early March." },
  { label: "Frost watch", months: [3, 5], what: "Wind machines ready from March to May, after budburst." },
  { label: "Spraying", months: [3, 8], what: "Against powdery mildew, from mid-March and about monthly to August." },
  { label: "Shoot thinning", months: [4, 5], what: "Removing extra shoots and suckers so the rest grow well." },
  { label: "Shoot positioning", months: [4, 6], what: "Tucking shoots into the wires to shape the canopy." },
  { label: "Leaf removal", months: [6, 7], what: "After fruit set, around the bunches, for light and air." },
  { label: "Hedging", months: [7, 7], what: "Trimming the tops and sides of the canopy." },
  { label: "Crop and colour thinning", months: [7, 8], what: "Cutting off some bunches (green harvest), then lagging ones at véraison." },
  { label: "Harvest", months: [9, 10], what: "Picking, by hand or machine." }
];

export const GrowerYear = () => (
  <YearChart
    title="The grower's year"
    idea="What a grower does, month by month, in one worked example: a model Cabernet Sauvignon vineyard in Napa, from a university cost study. The faint rows on top are the vine's stages, so you can see which job goes with which stage."
    remember="Prune in dormancy; watch for frost after budburst; spray and manage the canopy (thin, position, pull leaves, hedge) through spring and summer; thin the crop around véraison; then harvest."
    source={{ links: [
      { title: "UC Davis: Napa wine grape cost study (2020)", url: "https://coststudyfiles.ucdavis.edu/uploads/cs_public/fe/24/fe24e27a-5c29-4cc3-a83c-63a31cd0c767/2020napawinegrape.pdf" },
      { title: "Wikipedia: the vine's annual cycle (harvest months)", url: "https://en.wikipedia.org/wiki/Annual_growth_cycle_of_grapevines" }] }}
    rows={TASKS}
    rowColour="#C4A962"
    note="One vineyard's plan; other regions and styles differ. Harvest months are typical for the northern hemisphere." />
);
