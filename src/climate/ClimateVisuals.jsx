// ─── Climate, in pictures ────────────────────────────────────────────────────
// One diagram per idea, in the order a student meets them.
import { LatitudeBands } from "./LatitudeBands.jsx";
import { GrowingSeason } from "./GrowingSeason.jsx";
import { Ripeness } from "./Ripeness.jsx";
export const ClimateVisuals = () => (
  <div style={{ display: "grid", gap: "14px", marginBottom: "14px" }}>
    <LatitudeBands />
    <GrowingSeason />
    <Ripeness />
  </div>
);
