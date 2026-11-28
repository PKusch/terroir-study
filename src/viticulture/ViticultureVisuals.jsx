import { VineFamily } from "./VineFamily.jsx";
import { VineParts } from "./VineParts.jsx";
import { GrapeInside } from "./GrapeInside.jsx";
import { GrowthCalendar } from "../GrowthCalendar.jsx";
import { Ripening } from "./Ripening.jsx";
import { Pruning } from "./Pruning.jsx";
import { Canopy } from "./Canopy.jsx";
import { Frost } from "./Frost.jsx";
import { Weather } from "./Weather.jsx";
import { Farming } from "./Farming.jsx";
import { Harvest } from "./Harvest.jsx";

// ─── Viticulture, in pictures ────────────────────────────────────────────────
// From the plant itself, through its year, to what the grower does and the
// hazards they face.
export const ViticultureVisuals = ({ onQuiz }) => (
  <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr)", gap: "14px", marginBottom: "14px" }}>
    <VineFamily />
    <VineParts />
    <GrapeInside />
    <GrowthCalendar />
    <Ripening />
    <Pruning />
    <Canopy />
    <Frost />
    <Weather />
    <Farming />
    <Harvest />
    {onQuiz && (
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px", flexWrap: "wrap", background: "#1f1c18", border: "1px solid #C4A96255", borderRadius: "8px", padding: "12px 16px" }}>
        <span style={{ fontSize: "14px", color: "#D5D0C4" }}>Test yourself: the Vineyard quiz covers the vine, its year and the grower's work.</span>
        <button onClick={onQuiz} style={{ background: "#C4A962", color: "#1a1a1a", border: "none", borderRadius: "6px", padding: "8px 16px", fontSize: "13px", fontWeight: 600, cursor: "pointer" }}>Start the Vineyard quiz →</button>
      </div>
    )}
  </div>
);
