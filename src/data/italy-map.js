// ─── Italy region polygons (real lat/lon, hand-projected) ───────────────────
import { geoToSvgItaly as geoToSvg, ptItaly as pt } from "../geo.js";

export const ITALY_REGION_PATHS = {
  piedmont: {
    // Langhe, Roero and Monferrato hills south-east of Turin
    d: `M${pt(7.5,45.1)} L${pt(8.2,45.2)} L${pt(8.7,45.1)} L${pt(8.7,44.6)} L${pt(8.2,44.4)} L${pt(7.6,44.5)} Z`,
    label: geoToSvg(8.1, 44.85)
  },
  tuscany: {
    // Chianti hills, Montalcino, Montepulciano and the Bolgheri coast
    d: `M${pt(10.2,43.9)} L${pt(11.4,43.9)} L${pt(11.8,43.4)} L${pt(11.6,42.7)} L${pt(10.9,42.6)} L${pt(10.3,43.0)} Z`,
    label: geoToSvg(11.0, 43.3)
  },
  veneto: {
    // Lake Garda and Valpolicella in the west, Soave, then the Prosecco hills up to Treviso
    d: `M${pt(10.6,45.7)} L${pt(11.6,45.9)} L${pt(12.4,45.9)} L${pt(12.4,45.5)} L${pt(11.4,45.3)} L${pt(10.7,45.4)} Z`,
    label: geoToSvg(11.5, 45.6)
  },
  southernItaly: {
    // Two closed sub-paths: Campania/Basilicata/Puglia on the mainland, then Sicily
    d: `M${pt(14.0,41.3)} L${pt(15.5,41.5)} L${pt(16.8,41.2)} L${pt(18.3,40.4)} L${pt(18.0,40.0)} L${pt(16.9,40.3)} L${pt(15.8,40.0)} L${pt(14.6,40.4)} L${pt(14.0,40.8)} Z ` +
       `M${pt(12.6,38.0)} L${pt(13.5,38.15)} L${pt(15.1,38.2)} L${pt(15.5,38.0)} L${pt(15.2,37.2)} L${pt(14.3,37.1)} L${pt(12.7,37.7)} Z`,
    label: geoToSvg(16.0, 40.75)
  },
  abruzzo: {
    // Abruzzo: the Adriatic hills and Apennine valleys east of Rome
    d: `M${pt(13.5,42.9)} L${pt(14.3,42.7)} L${pt(14.8,42.0)} L${pt(14.4,41.8)} L${pt(13.7,42.0)} L${pt(13.4,42.5)} Z`,
    label: geoToSvg(14.0, 42.35)
  },
  marche: {
    // Marche: the Esino valley around Jesi and the Matelica valley inland
    d: `M${pt(12.95,43.6)} L${pt(13.3,43.55)} L${pt(13.25,43.15)} L${pt(12.95,43.2)} Z`,
    label: geoToSvg(13.12, 43.4)
  },
  umbria: {
    // Umbria: Orvieto in the west, Torgiano and Montefalco in the east
    d: `M${pt(12.0,43.1)} L${pt(12.8,43.1)} L${pt(12.75,42.65)} L${pt(12.0,42.6)} Z`,
    label: geoToSvg(12.4, 42.85)
  },
  lazio: {
    // Lazio: the Alban Hills south-east of Rome, where Frascati is grown
    d: `M${pt(12.4,42.0)} L${pt(12.9,42.0)} L${pt(12.9,41.65)} L${pt(12.4,41.65)} Z`,
    label: geoToSvg(12.65, 41.85)
  },
  friuli: {
    // Friuli: Collio and Colli Orientali on the Slovenian border, with the Grave plain to the west
    d: `M${pt(12.6,46.15)} L${pt(13.5,46.2)} L${pt(13.65,45.9)} L${pt(13.4,45.7)} L${pt(12.6,45.85)} Z`,
    label: geoToSvg(13.1, 46.0)
  },
  trentinoAltoAdige: {
    // Trentino-Alto Adige: the Adige valley from Bolzano south to Trento
    d: `M${pt(10.95,46.75)} L${pt(11.7,46.8)} L${pt(11.75,46.05)} L${pt(11.2,45.95)} L${pt(10.95,46.1)} Z`,
    label: geoToSvg(11.35, 46.4)
  }
};
