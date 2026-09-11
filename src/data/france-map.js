// ─── France region polygons (real lat/lon, hand-projected) ──────────────────
import { geoToSvg, pt } from "../geo.js";

export const FRANCE_REGION_PATHS = {
  champagne: {
    d: `M${pt(3.2,49.8)} L${pt(4.4,49.8)} L${pt(4.5,49.0)} L${pt(4.0,48.5)} L${pt(3.3,48.6)} L${pt(3.0,49.2)} Z`,
    label: geoToSvg(3.7, 49.15)
  },
  alsace: {
    d: `M${pt(7.0,48.9)} L${pt(7.8,48.9)} L${pt(7.8,47.9)} L${pt(7.3,47.5)} L${pt(6.9,47.7)} L${pt(6.9,48.4)} Z`,
    label: geoToSvg(7.35, 48.2)
  },
  burgundy: {
    d: `M${pt(3.2,47.8)} L${pt(4.2,47.8)} L${pt(4.8,47.2)} L${pt(4.8,46.4)} L${pt(4.2,46.0)} L${pt(3.4,46.2)} L${pt(3.0,47.0)} Z`,
    label: geoToSvg(3.9, 46.9)
  },
  loire: {
    d: `M${pt(-1.8,47.6)} L${pt(0.0,47.8)} L${pt(1.5,47.5)} L${pt(2.8,47.3)} L${pt(2.8,47.0)} L${pt(1.5,47.0)} L${pt(0.0,47.2)} L${pt(-1.8,47.2)} Z`,
    label: geoToSvg(0.5, 47.4)
  },
  bordeaux: {
    d: `M${pt(-1.2,45.5)} L${pt(-0.2,45.5)} L${pt(0.0,44.8)} L${pt(-0.2,44.2)} L${pt(-0.8,44.2)} L${pt(-1.3,44.7)} Z`,
    label: geoToSvg(-0.6, 44.85)
  },
  rhoneNorth: {
    d: `M${pt(4.5,45.7)} L${pt(5.0,45.7)} L${pt(5.0,44.9)} L${pt(4.7,44.7)} L${pt(4.4,44.8)} L${pt(4.3,45.3)} Z`,
    label: geoToSvg(4.65, 45.2)
  },
  rhoneSouth: {
    d: `M${pt(4.2,44.6)} L${pt(5.1,44.6)} L${pt(5.2,43.9)} L${pt(4.8,43.6)} L${pt(4.1,43.8)} L${pt(4.0,44.2)} Z`,
    label: geoToSvg(4.6, 44.1)
  },
  languedocRoussillon: {
    d: `M${pt(1.8,43.7)} L${pt(3.2,43.7)} L${pt(3.9,43.4)} L${pt(3.5,42.8)} L${pt(2.5,42.5)} L${pt(1.6,42.8)} L${pt(1.5,43.3)} Z`,
    label: geoToSvg(2.7, 43.2)
  },
  provence: {
    d: `M${pt(5.2,43.9)} L${pt(6.2,43.9)} L${pt(7.0,43.6)} L${pt(6.8,43.2)} L${pt(5.8,43.1)} L${pt(5.0,43.3)} L${pt(4.9,43.6)} Z`,
    label: geoToSvg(5.9, 43.5)
  },
  southWest: {
    d: `M${pt(-0.2,44.2)} L${pt(0.8,44.3)} L${pt(1.5,43.8)} L${pt(1.5,43.2)} L${pt(0.5,42.9)} L${pt(-0.3,43.2)} L${pt(-0.8,43.8)} L${pt(-0.8,44.2)} Z`,
    label: geoToSvg(0.4, 43.6)
  },
  beaujolais: {
    d: `M${pt(4.3,46.3)} L${pt(4.9,46.3)} L${pt(4.9,45.8)} L${pt(4.5,45.7)} L${pt(4.2,45.9)} Z`,
    label: geoToSvg(4.55, 46.05)
  }
};
