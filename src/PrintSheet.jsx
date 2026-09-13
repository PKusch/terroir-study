import { REGIONS } from "./data/regions.js";
import { summaryFor } from "./summary.js";

// ─── The printable page ──────────────────────────────────────────────────────
// Hidden on screen and shown only when printing (see index.css), so the Print
// button gives one clean revision sheet for the region on screen instead of a
// printout of the dark app.
export const PrintSheet = ({ regionKey }) => {
  const s = summaryFor(regionKey, REGIONS);
  if (!s) return null;
  return (
    <div className="print-sheet">
      <div className="print-kicker">Terroir Study · WSET Level 3 · {s.country}</div>
      <h1>{s.title}</h1>
      <div className="print-subtitle">{s.subtitle}</div>
      {s.sections.map(([label, text]) => (
        <section key={label}>
          <h2>{label}</h2>
          <p>{text}</p>
        </section>
      ))}
    </div>
  );
};
