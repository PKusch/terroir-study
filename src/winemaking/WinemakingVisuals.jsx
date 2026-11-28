import { Process } from "./Process.jsx";
import { Fermentation } from "./Fermentation.jsx";
import { Cap } from "./Cap.jsx";
import { Carbonic } from "./Carbonic.jsx";
import { Malolactic } from "./Malolactic.jsx";
import { Lees } from "./Lees.jsx";
import { Oak } from "./Oak.jsx";
import { Clarify } from "./Clarify.jsx";
import { Sweet } from "./Sweet.jsx";

// ─── Winemaking, in pictures ─────────────────────────────────────────────────
// In the order the wine meets them: the route for each colour, fermentation,
// red-wine extraction, then what happens after fermentation, and sweet wines.
export const WinemakingVisuals = ({ onQuiz }) => (
  <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr)", gap: "14px", marginBottom: "14px" }}>
    <Process />
    <Fermentation />
    <Cap />
    <Carbonic />
    <Malolactic />
    <Lees />
    <Oak />
    <Clarify />
    <Sweet />
    {onQuiz && (
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px", flexWrap: "wrap", background: "#1f1c18", border: "1px solid #C4A96255", borderRadius: "8px", padding: "12px 16px" }}>
        <span style={{ fontSize: "14px", color: "#D5D0C4" }}>Test yourself: the Winery quiz asks about every diagram on this page.</span>
        <button onClick={onQuiz} style={{ background: "#C4A962", color: "#1a1a1a", border: "none", borderRadius: "6px", padding: "8px 16px", fontSize: "13px", fontWeight: 600, cursor: "pointer" }}>Start the Winery quiz →</button>
      </div>
    )}
  </div>
);
