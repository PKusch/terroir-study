// ─── Numbers behind the climate diagrams ─────────────────────────────────────
// Every number here was read from the source named next to it.

// Monthly daily-mean temperatures, °C, January to December, 1991–2020
// normals, as given in each place's Wikipedia climate table (which names its
// own source). `day` and `night` are the warmest month's average high and low.
export const PLACES = [
  { id: "bordeaux", name: "Bordeaux", type: "Maritime", south: false, colour: "#6FA8DC",
    months: [7.1, 7.8, 10.7, 13.0, 16.6, 19.8, 21.7, 21.9, 18.8, 15.2, 10.4, 7.7],
    warmest: "August", day: 27.6, night: 16.3, url: "https://en.wikipedia.org/wiki/Bordeaux", station: "Mérignac, 47 m" },
  { id: "dijon", name: "Dijon (Burgundy)", type: "Continental", south: false, colour: "#E07A5F",
    months: [2.7, 3.8, 7.5, 10.7, 14.6, 18.5, 20.8, 20.4, 16.4, 11.8, 6.5, 3.4],
    warmest: "July", day: 26.7, night: 14.9, url: "https://en.wikipedia.org/wiki/Dijon", station: "Longvic, 219 m" },
  { id: "montpellier", name: "Montpellier (Languedoc)", type: "Mediterranean", south: false, colour: "#C4A962",
    months: [7.6, 8.3, 11.4, 13.9, 17.8, 21.8, 24.4, 24.1, 20.2, 16.4, 11.6, 8.3],
    warmest: "July", day: 29.5, night: 19.3, url: "https://en.wikipedia.org/wiki/Montpellier", station: "airport, 1 m" },
  { id: "mendoza", name: "Mendoza", type: "Continental, high and dry", south: true, colour: "#9B7EDE",
    months: [25.9, 24.1, 21.5, 16.5, 12.1, 8.7, 7.9, 10.8, 14.5, 18.7, 22.3, 25.1],
    warmest: "January", day: 32.8, night: 19.3, url: "https://en.wikipedia.org/wiki/Mendoza,_Argentina", station: "airport" }
];

// The vine's year from midwinter: southern places shift by six months so the
// seasons line up.
export const seasonal = (p) => (p.south ? [...p.months.slice(6), ...p.months.slice(0, 6)] : p.months);

// Gregory Jones's growing-season average temperature bands (April–October in
// the north, October–April in the south).
export const GST_BANDS = [
  { label: "Too cool", from: 11, to: 13 }, { label: "Cool", from: 13, to: 15 },
  { label: "Intermediate", from: 15, to: 17 }, { label: "Warm", from: 17, to: 19 },
  { label: "Hot", from: 19, to: 21 }, { label: "Very hot", from: 21, to: 24 }, { label: "Too hot", from: 24, to: 25 }
];
export const GST_GRAPES = [
  { name: "Pinot Noir", from: 14, to: 16 },
  { name: "Chardonnay", from: 14, to: 18 },
  { name: "Cabernet Sauvignon", from: 16, to: 20 }
];
export const GST_SOURCE = { title: "Jones, Duff and Hall, climate-viticulture structure, Table 1", url: "https://www.climateofwine.com/_files/ugd/07f66e_ec9cd9ce134940e6b7e31dd0f9730bc1.pdf" };
export const GST_GRAPE_SOURCE = { title: "Gregory Jones, Climate, grapes and wine (GuildSomm)", url: "https://www.guildsomm.com/stay_current/features/b/gregory_jones/posts/climate-grapes-and-wine" };

// Ocean currents, as rough paths of [longitude, latitude].
export const CURRENTS = [
  { name: "California Current", cold: true, path: [[-129, 48], [-127, 41], [-123, 34], [-117, 26]], label: [-150, 36], url: "https://en.wikipedia.org/wiki/California_Current" },
  { name: "Humboldt Current", cold: true, path: [[-77, -46], [-76, -36], [-74, -26], [-77, -16], [-82, -6]], label: [-110, -30], url: "https://en.wikipedia.org/wiki/Humboldt_Current" },
  { name: "Benguela Current", cold: true, path: [[17, -36], [13, -29], [11, -21], [9, -13]], label: [-12, -36], url: "https://en.wikipedia.org/wiki/Benguela_Current" },
  { name: "Gulf Stream and North Atlantic Drift", cold: false, path: [[-80, 26], [-75, 35], [-62, 40], [-42, 45], [-24, 50], [-10, 55]], label: [-42, 33], url: "https://en.wikipedia.org/wiki/Gulf_Stream" }
];
