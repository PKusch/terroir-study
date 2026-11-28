// ─── Viticulture, in pictures ────────────────────────────────────────────────
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
export const ViticultureVisuals = () => (
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
  </div>
);
