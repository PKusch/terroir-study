// ─── Winemaking, in pictures ─────────────────────────────────────────────────
import { Process } from "./Process.jsx";
import { Fermentation } from "./Fermentation.jsx";
export const WinemakingVisuals = () => (
  <div style={{ display: "grid", gap: "14px", marginBottom: "14px" }}>
    <Process />
    <Fermentation />
  </div>
);
