import { Pyramid } from "./Pyramid.jsx";
import { Bottle } from "./Bottle.jsx";
import { Blend } from "./Blend.jsx";
import { Nested } from "./Nested.jsx";
import { Label } from "./Label.jsx";
import { Timeline } from "./Timeline.jsx";

// ─── Wine law, in pictures ───────────────────────────────────────────────────
// The levels, what a label's words promise, places inside places, a label
// read part by part, and how the systems grew.
export const LawVisuals = () => (
  <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr)", gap: "14px", marginBottom: "14px" }}>
    <Pyramid />
    <Bottle />
    <Blend />
    <Nested />
    <Label />
    <Timeline />
  </div>
);
