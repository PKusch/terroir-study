import { useState } from "react";
import { GRAPES } from "./data/grapes.js";
import { buildPairQuestion, compare } from "./lookalike.js";

// ─── Tell them apart ─────────────────────────────────────────────────────────
// Two grapes that are easy to confuse. A description of one of them is shown;
// pick which it is, then see the two side by side.

const serif = "'Cormorant Garamond', Georgia, serif";
const gold = "#C4A962";
const green = "#7BC47B";
const red = "#C47B7B";
const card = { background: "#1f1c18", border: "1px solid #2a2520", borderRadius: "8px", padding: "14px 16px", marginBottom: "12px" };
// Body is light, medium or full in WSET's words; the others are low to high.
const level = (l) => ({ low: "low", medium: "medium", high: "high" }[l] ?? l);
const bodyWord = (l) => ({ low: "light", medium: "medium", high: "full" }[l] ?? l);

export const TellApart = () => {
  const [q, setQ] = useState(() => buildPairQuestion());
  const [picked, setPicked] = useState(null);
  const [tally, setTally] = useState({ done: 0, right: 0 });
  const answered = picked !== null;
  const [a, b] = q.options;
  const c = answered ? compare(a, b) : null;

  const choose = (i) => {
    if (answered) return;
    setPicked(i);
    setTally((t) => ({ done: t.done + 1, right: t.right + (i === q.answer ? 1 : 0) }));
  };
  const next = () => {
    setQ((prev) => buildPairQuestion(Math.random, prev.first));
    setPicked(null);
  };

  const cl = q.clue;
  return (
    <div>
      <p style={{ color: "#B8B0A0", fontSize: "14px", lineHeight: 1.6, margin: "0 0 12px" }}>
        Two {cl.colour} grapes that are easy to mix up. Which one fits this description? The pairs come from this app's own
        grape profiles: the same colour, nearly the same structure, and some aromas in common.
      </p>

      <div style={card}>
        <div style={{ fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#8B7355", marginBottom: "6px" }}>A {cl.colour} wine</div>
        <div style={{ fontSize: "14px", color: "#E8E4D9", lineHeight: 1.7 }}>
          Body {bodyWord(cl.body)} · acidity {level(cl.acidity)}{cl.tannin ? ` · tannin ${level(cl.tannin)}` : ""}
        </div>
        <div style={{ fontSize: "14px", color: "#E8E4D9", lineHeight: 1.7 }}>Aromas: {cl.aromas.join(", ")}</div>
      </div>

      <div role="group" aria-label="Which grape?" style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "12px" }}>
        {q.options.map((slug, i) => {
          const right = answered && i === q.answer;
          const wrong = answered && i === picked && i !== q.answer;
          return (
            <button key={slug} onClick={() => choose(i)} disabled={answered} style={{
              flex: "1 1 160px", padding: "12px", borderRadius: "8px", fontSize: "16px", fontFamily: serif, fontWeight: 600,
              cursor: answered ? "default" : "pointer",
              background: right ? "#1a3a2a" : wrong ? "#3a1a1a" : "#1E1E1E",
              border: right ? "1px solid #4a7a4a" : wrong ? "1px solid #7a4a4a" : "1px solid #3a3530",
              color: right ? green : wrong ? red : "#E8E4D9"
            }}>{GRAPES[slug].name}</button>
          );
        })}
      </div>

      {answered && (
        <>
          <div role="status" style={{ fontSize: "14px", color: picked === q.answer ? green : red, marginBottom: "10px" }}>
            {picked === q.answer ? `Right: ${GRAPES[q.mystery].name}.` : `Not this time: it was ${GRAPES[q.mystery].name}.`}
          </div>
          <div style={card}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px", color: "#D5D0C4" }}>
              <thead>
                <tr>
                  <th scope="col" style={{ textAlign: "left", padding: "4px 6px", color: "#8B7355", fontWeight: 400 }}></th>
                  <th scope="col" style={{ textAlign: "left", padding: "4px 6px", color: gold }}>{GRAPES[a].name}</th>
                  <th scope="col" style={{ textAlign: "left", padding: "4px 6px", color: gold }}>{GRAPES[b].name}</th>
                </tr>
              </thead>
              <tbody>
                {c.rows.map((r) => (
                  <tr key={r.label} style={{ borderTop: "1px solid #2a2520" }}>
                    <th scope="row" style={{ textAlign: "left", padding: "6px", color: "#8B7355", fontWeight: 400 }}>{r.label}</th>
                    <td style={{ padding: "6px", color: r.same ? "#D5D0C4" : gold }}>{r.label === "Body" ? bodyWord(r.a) : r.a}</td>
                    <td style={{ padding: "6px", color: r.same ? "#D5D0C4" : gold }}>{r.label === "Body" ? bodyWord(r.b) : r.b}</td>
                  </tr>
                ))}
                <tr style={{ borderTop: "1px solid #2a2520" }}>
                  <th scope="row" style={{ textAlign: "left", padding: "6px", color: "#8B7355", fontWeight: 400 }}>Only this one</th>
                  <td style={{ padding: "6px", color: gold }}>{c.onlyA.join(", ")}</td>
                  <td style={{ padding: "6px", color: gold }}>{c.onlyB.join(", ")}</td>
                </tr>
                <tr style={{ borderTop: "1px solid #2a2520" }}>
                  <th scope="row" style={{ textAlign: "left", padding: "6px", color: "#8B7355", fontWeight: 400 }}>Both</th>
                  <td style={{ padding: "6px" }}>{c.shared.join(", ")}</td>
                  <td style={{ padding: "6px" }}>{c.sharedB.join(", ")}</td>
                </tr>
              </tbody>
            </table>
          </div>
          {[a, b].map((s) => GRAPES[s].notes && (
            <p key={s} style={{ fontSize: "13px", color: "#B8B0A0", lineHeight: 1.6, margin: "0 0 8px" }}>
              <strong style={{ color: "#E8E4D9" }}>{GRAPES[s].name}:</strong> {GRAPES[s].notes}
            </p>
          ))}
        </>
      )}

      <div style={{ display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap", marginTop: "8px" }}>
        {answered && (
          <button onClick={next} style={{ padding: "10px 18px", background: gold, color: "#1a1a1a", border: "none", borderRadius: "8px", fontSize: "13px", fontWeight: 600, cursor: "pointer" }}>
            Next pair →
          </button>
        )}
        {tally.done > 0 && <span style={{ fontSize: "12px", color: "#8B7355" }}>This session: {tally.right} of {tally.done} right</span>}
      </div>
    </div>
  );
};
