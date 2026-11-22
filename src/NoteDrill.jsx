import { useState } from "react";
import { GRAPES } from "./data/grapes.js";
import { RULES, buildNote, markNote } from "./notedrill.js";

// ─── Spot the errors ─────────────────────────────────────────────────────────
// A tasting note for a named grape, with two or three lines written the way
// WSET says loses marks. Tap the lines you would fix, then Check.

const serif = "'Cormorant Garamond', Georgia, serif";
const gold = "#C4A962";

const STATUS_STYLE = {
  caught: { bg: "#1a3a2a", border: "1px solid #4a7a4a", tag: "Caught", tagColor: "#7BC47B" },
  missed: { bg: "#3a2f1a", border: "1px solid #8a6a3a", tag: "Missed", tagColor: gold },
  wrongFlag: { bg: "#3a1a1a", border: "1px solid #7a4a4a", tag: "This one was fine", tagColor: "#C47B7B" },
  fine: { bg: "#1E1E1E", border: "1px solid #2a2520", tag: null, tagColor: null }
};

export const NoteDrill = () => {
  const [note, setNote] = useState(() => buildNote(GRAPES));
  const [flagged, setFlagged] = useState([]);
  const [result, setResult] = useState(null);
  const [tally, setTally] = useState({ notes: 0, clean: 0 });

  if (!note) return null;
  const checked = result !== null;

  const toggle = (id) => {
    if (checked) return;
    setFlagged((f) => (f.includes(id) ? f.filter((x) => x !== id) : [...f, id]));
  };

  const check = () => {
    const marked = markNote(note, flagged);
    setResult(marked);
    setTally((t) => ({ notes: t.notes + 1, clean: t.clean + (marked.allRight ? 1 : 0) }));
  };

  const next = () => {
    setNote(buildNote(GRAPES));
    setFlagged([]);
    setResult(null);
  };

  const lines = checked ? result.lines : note.lines.map((l) => ({ ...l, status: null }));
  const sections = [...new Set(lines.map((l) => l.section))];

  return (
    <div>
      <p style={{ color: "#B8B0A0", fontSize: "14px", lineHeight: 1.6, margin: "0 0 12px" }}>
        A student wrote this note on a <strong style={{ color: "#E8E4D9" }}>{note.grape}</strong>. Two or three lines would lose marks
        under WSET's tasting-exam rules. Tap the ones you would fix, then press Check. Only the wording is tested, not whether it fits the wine.
      </p>

      {sections.map((sec) => (
        <section key={sec} style={{ marginBottom: "12px" }}>
          <h3 style={{ fontFamily: serif, fontSize: "18px", color: "#E8E4D9", margin: "0 0 6px", fontWeight: 600 }}>{sec}</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            {lines.filter((l) => l.section === sec).map((l) => {
              const on = flagged.includes(l.id);
              const st = checked ? STATUS_STYLE[l.status] : null;
              return (
                <div key={l.id}>
                  <button
                    onClick={() => toggle(l.id)}
                    aria-pressed={on}
                    disabled={checked}
                    style={{
                      width: "100%", textAlign: "left", padding: "9px 12px", borderRadius: "6px", fontSize: "13px",
                      lineHeight: 1.5, fontFamily: "inherit", cursor: checked ? "default" : "pointer",
                      background: st ? st.bg : on ? "#2a2520" : "#1E1E1E",
                      border: st ? st.border : on ? `1px solid ${gold}` : "1px solid #2a2520",
                      color: "#D5D0C4", display: "flex", justifyContent: "space-between", gap: "10px"
                    }}
                  >
                    <span>
                      <span style={{ color: "#8B7355", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.08em" }}>{l.label}: </span>
                      {l.text ? l.text : <em style={{ color: "#7a7268" }}>(left blank)</em>}
                    </span>
                    {st?.tag ? <span style={{ color: st.tagColor, fontSize: "11px", whiteSpace: "nowrap" }}>{st.tag}</span> : on && !checked ? <span style={{ color: gold, fontSize: "11px" }}>✎ fix</span> : null}
                  </button>
                  {checked && l.error && (
                    <div style={{ fontSize: "12px", color: "#B8B0A0", lineHeight: 1.5, padding: "4px 12px 0" }}>
                      <strong style={{ color: gold }}>{RULES[l.error].title}.</strong> {RULES[l.error].why}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      ))}

      {checked && (
        <div role="status" style={{ fontSize: "13px", color: result.allRight ? "#7BC47B" : "#D5D0C4", margin: "4px 0 12px" }}>
          {result.allRight
            ? `All ${result.errors} found, with no false alarms.`
            : `You found ${result.caught} of ${result.errors}${result.wrongFlags ? `, and flagged ${result.wrongFlags} line${result.wrongFlags > 1 ? "s" : ""} that ${result.wrongFlags > 1 ? "were" : "was"} fine` : ""}.`}
        </div>
      )}

      <div style={{ display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap" }}>
        {!checked ? (
          <button onClick={check} disabled={flagged.length === 0} style={{
            padding: "10px 18px", background: flagged.length ? gold : "#3a3530", color: "#1a1a1a", border: "none",
            borderRadius: "8px", fontSize: "13px", fontWeight: 600, cursor: flagged.length ? "pointer" : "default"
          }}>Check</button>
        ) : (
          <button onClick={next} style={{
            padding: "10px 18px", background: gold, color: "#1a1a1a", border: "none",
            borderRadius: "8px", fontSize: "13px", fontWeight: 600, cursor: "pointer"
          }}>Next note →</button>
        )}
        {tally.notes > 0 && (
          <span style={{ fontSize: "12px", color: "#8B7355" }}>This session: {tally.clean} of {tally.notes} notes spotted perfectly</span>
        )}
      </div>
      <p style={{ fontSize: "11px", color: "#7a7268", marginTop: "14px", lineHeight: 1.5 }}>
        The rules come from WSET's own list of common tasting-exam errors.
      </p>
    </div>
  );
};
