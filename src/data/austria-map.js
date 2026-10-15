// ─── Austria region polygons (real lat/lon, hand-projected) ─────────────────
import { geoToSvgAustria as geoToSvg, ptAustria as pt } from "../geo.js";

export const AUSTRIA_REGION_PATHS = {
  niederosterreich: {
    // The Danube and its northern wine districts: Wachau, Kremstal, Kamptal, Wagram and the Weinviertel
    d: `M${pt(15.3,48.15)} L${pt(15.45,48.4)} L${pt(15.6,48.6)} L${pt(16.0,48.75)} L${pt(16.5,48.78)} L${pt(16.95,48.62)} L${pt(16.9,48.35)} L${pt(16.4,48.3)} L${pt(15.9,48.3)} L${pt(15.6,48.3)} Z`,
    label: geoToSvg(15.9, 48.52)
  },
  burgenland: {
    // The strip east of the Leithaberg, down both sides of the Neusiedler See to the southern hills
    d: `M${pt(16.4,47.95)} L${pt(16.95,48.0)} L${pt(17.1,47.72)} L${pt(16.65,47.45)} L${pt(16.45,47.2)} L${pt(16.2,46.98)} L${pt(16.05,47.1)} L${pt(16.15,47.4)} L${pt(16.3,47.7)} Z`,
    label: geoToSvg(16.6, 47.55)
  },
  steiermark: {
    // The hills in the far south, along the Slovenian border
    d: `M${pt(14.9,46.7)} L${pt(15.6,46.65)} L${pt(16.0,46.7)} L${pt(16.1,46.95)} L${pt(15.7,47.0)} L${pt(15.2,46.9)} Z`,
    label: geoToSvg(15.5, 46.82)
  }
};
