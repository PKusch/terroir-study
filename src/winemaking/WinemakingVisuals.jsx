// ─── Winemaking, in pictures ─────────────────────────────────────────────────
import { Process } from "./Process.jsx";
import { Fermentation } from "./Fermentation.jsx";
import { Cap } from "./Cap.jsx";
import { Carbonic } from "./Carbonic.jsx";
import { Malolactic } from "./Malolactic.jsx";
import { Lees } from "./Lees.jsx";
import { Oak } from "./Oak.jsx";
import { Clarify } from "./Clarify.jsx";
export const WinemakingVisuals = () => (
  <div style={{ display: "grid", gap: "14px", marginBottom: "14px" }}>
    <Process />
    <Fermentation />
    <Cap />
    <Carbonic />
    <Malolactic />
    <Lees />
    <Oak />
    <Clarify />
  </div>
);
