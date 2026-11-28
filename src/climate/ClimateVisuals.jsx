import { LatitudeBands } from "./LatitudeBands.jsx";
import { GrowingSeason } from "./GrowingSeason.jsx";
import { Ripeness } from "./Ripeness.jsx";
import { Continentality } from "./Continentality.jsx";
import { DayNight } from "./DayNight.jsx";
import { Currents } from "./Currents.jsx";
import { Altitude } from "./Altitude.jsx";
import { SlopeAspect } from "./SlopeAspect.jsx";
import { Soil } from "./Soil.jsx";

// ─── Climate, in pictures ────────────────────────────────────────────────────
// One diagram per idea, in the order a student meets them: where vines grow,
// how warm a climate is and what that does to the grape, the climate types,
// what shapes a region, then what shapes a single site.
export const ClimateVisuals = ({ onQuiz }) => (
  <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr)", gap: "14px", marginBottom: "14px" }}>
    <LatitudeBands />
    <GrowingSeason />
    <Ripeness />
    <Continentality />
    <DayNight />
    <Currents />
    <Altitude />
    <SlopeAspect />
    <Soil />
    {onQuiz && (
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px", flexWrap: "wrap", background: "#1f1c18", border: "1px solid #C4A96255", borderRadius: "8px", padding: "12px 16px" }}>
        <span style={{ fontSize: "14px", color: "#D5D0C4" }}>Test yourself: the Vineyard quiz asks about every diagram on this page.</span>
        <button onClick={onQuiz} style={{ background: "#C4A962", color: "#1a1a1a", border: "none", borderRadius: "6px", padding: "8px 16px", fontSize: "13px", fontWeight: 600, cursor: "pointer" }}>Start the Vineyard quiz →</button>
      </div>
    )}
  </div>
);
