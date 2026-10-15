// ─── Hungary region polygons (real lat/lon, hand-projected) ─────────────────
import { geoToSvgHungary as geoToSvg, ptHungary as pt } from "../geo.js";

export const HUNGARY_REGION_PATHS = {
  tokaj: {
    // The foothills of the Zemplén mountains, where the Bodrog meets the Tisza
    d: `M${pt(21.15,48.05)} L${pt(21.3,48.28)} L${pt(21.55,48.42)} L${pt(21.75,48.35)} L${pt(21.6,48.15)} L${pt(21.45,48.02)} Z`,
    label: geoToSvg(21.45, 48.2)
  },
  eger: {
    // The southern foothills of the Bükk mountains around Eger
    d: `M${pt(20.15,47.95)} L${pt(20.4,48.05)} L${pt(20.6,47.95)} L${pt(20.55,47.8)} L${pt(20.25,47.8)} Z`,
    label: geoToSvg(20.38, 47.92)
  },
  villany: {
    // The Villány hills, in the far south by the Croatian border
    d: `M${pt(18.2,45.92)} L${pt(18.55,46.0)} L${pt(18.8,45.97)} L${pt(18.72,45.88)} L${pt(18.4,45.86)} Z`,
    label: geoToSvg(18.5, 45.93)
  }
};
