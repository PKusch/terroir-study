import { Methods } from "./Methods.jsx";
import { TraditionalSteps } from "./TraditionalSteps.jsx";
import { Dosage } from "./Dosage.jsx";
import { SpiritTiming } from "./SpiritTiming.jsx";
import { PortTree } from "./PortTree.jsx";
import { Solera } from "./Solera.jsx";
import { Ladders } from "./Ladders.jsx";
import { ServeTemp } from "./ServeTemp.jsx";
import { Glasses } from "./Glasses.jsx";
import { FoodGrid } from "./FoodGrid.jsx";

// ─── Styles, in pictures ─────────────────────────────────────────────────────
// The diagrams shown above each family's comparison cards.
const BY_FAMILY = {
  sparkling: [Methods, TraditionalSteps, Dosage],
  fortified: [SpiritTiming, PortTree, Solera, Ladders],
  service: [ServeTemp, Glasses],
  food: [FoodGrid]
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
