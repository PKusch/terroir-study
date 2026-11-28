// ─── Viticulture, in pictures ────────────────────────────────────────────────
import { VineFamily } from "./VineFamily.jsx";
import { GrowthCalendar } from "../GrowthCalendar.jsx";
export const ViticultureVisuals = () => (
  <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr)", gap: "14px", marginBottom: "14px" }}>
    <VineFamily />
    <GrowthCalendar />
  </div>
);
