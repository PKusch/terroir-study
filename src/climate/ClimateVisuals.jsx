// ─── Climate, in pictures ────────────────────────────────────────────────────
// One diagram per idea, in the order a student meets them.
import { LatitudeBands } from "./LatitudeBands.jsx";
import { GrowingSeason } from "./GrowingSeason.jsx";
import { Ripeness } from "./Ripeness.jsx";
import { Continentality } from "./Continentality.jsx";
import { DayNight } from "./DayNight.jsx";
import { Currents } from "./Currents.jsx";
import { Altitude } from "./Altitude.jsx";
import { SlopeAspect } from "./SlopeAspect.jsx";
export const ClimateVisuals = () => (
  <div style={{ display: "grid", gap: "14px", marginBottom: "14px" }}>
    <LatitudeBands />
    <GrowingSeason />
    <Ripeness />
    <Continentality />
    <DayNight />
    <Currents />
    <Altitude />
    <SlopeAspect />
  </div>
);
