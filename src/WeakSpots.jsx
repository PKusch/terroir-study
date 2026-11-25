import { BANDS, UNSEEN } from "./heat.js";

const gold = "#C4A962";

// The switch and colour key for the weak-spot view on the Explore map. When it
// is on, the map shades every region by how often its quiz questions were
// answered right in this browser.
export const WeakSpots = ({ on, onToggle, counts, regionName, regionBand, onQuizRegion }) => (
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", padding: "10px 20px 0" }}>
    <button onClick={onToggle} aria-pressed={on} style={{
      background: on ? gold : "none", color: on ? "#1a1a1a" : "#B8B0A0", border: on ? "none" : "1px solid #3a3530",
      padding: "5px 14px", borderRadius: "4px", fontSize: "11px", cursor: "pointer", letterSpacing: "0.05em", fontWeight: on ? 600 : 400
    }}>
      {on ? "Hide my weak spots" : "Show my weak spots"}
    </button>
    {on && (
      <>
        <div role="list" aria-label="Colour key" style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center", fontSize: "11px", color: "#B8B0A0" }}>
          {[...BANDS, UNSEEN].map((b) => (
            <span role="listitem" key={b.id} style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}>
              <span aria-hidden="true" style={{ width: "10px", height: "10px", borderRadius: "2px", background: b.colour }} />
              {b.label} ({counts[b.id]})
            </span>
          ))}
        </div>
        <div style={{ fontSize: "11px", color: "#7a7268", textAlign: "center", maxWidth: "460px", lineHeight: 1.5 }}>
          From your quiz answers in this browser, across all nine countries. A region needs two answers before it is shaded.
        </div>
        {regionName && (
          <button onClick={onQuizRegion} style={{ background: "none", border: `1px solid ${regionBand.colour}`, color: regionBand.colour,
            padding: "4px 12px", borderRadius: "4px", fontSize: "11px", cursor: "pointer" }}>
            Quiz {regionName} only →
          </button>
        )}
      </>
    )}
  </div>
);
