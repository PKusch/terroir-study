// ─── Wine law, in pictures ───────────────────────────────────────────────────
import { Pyramid } from "./Pyramid.jsx";
import { Bottle } from "./Bottle.jsx";
import { Blend } from "./Blend.jsx";
import { Nested } from "./Nested.jsx";
export const LawVisuals = () => (
  <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr)", gap: "14px", marginBottom: "14px" }}>
    <Pyramid />
    <Bottle />
    <Blend />
    <Nested />
  </div>
);
