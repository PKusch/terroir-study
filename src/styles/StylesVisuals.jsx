// ─── Styles, in pictures ─────────────────────────────────────────────────────
import { Methods TraditionalSteps } from "./Methods TraditionalSteps.jsx";
const BY_FAMILY = {
  sparkling: [Methods, TraditionalSteps],
  fortified: [],
  service: [],
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
