// ─── Winemaking, in pictures ─────────────────────────────────────────────────
import { Process } from "./Process.jsx";
import { Fermentation } from "./Fermentation.jsx";
import { Cap } from "./Cap.jsx";
export const WinemakingVisuals = () => (
  <div style={{ display: "grid", gap: "14px", marginBottom: "14px" }}>
    <Process />
    <Fermentation />
    <Cap />
  </div>
);
