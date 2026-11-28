// ─── Styles, in pictures ─────────────────────────────────────────────────────
import { Methods TraditionalSteps Dosage } from "./Methods TraditionalSteps Dosage.jsx";
import { SpiritTiming PortTree Solera Ladders } from "./SpiritTiming PortTree Solera Ladders.jsx";
import { ServeTemp Glasses } from "./ServeTemp Glasses.jsx";
const BY_FAMILY = {
  sparkling: [Methods, TraditionalSteps, Dosage],
  fortified: [SpiritTiming, PortTree, Solera, Ladders],
  service: [ServeTemp, Glasses],
  food: []
};
export const StylesVisuals = ({ family }) => {
  const list = BY_FAMILY[family] ?? [];
  if (!list.length) return null;
  return (
    <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr)", gap: "14px", marginBottom: "18px" }}>
      {list.map((C, i) => <C key={i} />)}
    </div>
  );
};
