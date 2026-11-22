import { useState } from "react";
import { COUNTRIES, REGIONS } from "./data/regions.js";
import { countryOf } from "./data/projections.js";
import { COMMAND_WORDS, wordCount } from "./written.js";
import { TOTAL, fullRegions, randomFull, scoreFull } from "./fullwritten.js";

const serif = "'Cormorant Garamond', Georgia, serif";
const gold = "#C4A962";
const card = { background: "#1f1c18", border: "1px solid #2a2520", borderRadius: "8px", padding: "14px 16px", marginBottom: "12px" };
const pill = (on) => ({
  padding: "4px 10px", borderRadius: "4px", fontSize: "10px", letterSpacing: "0.08em",
  textTransform: "uppercase", cursor: "pointer",
  background: on ? gold : "transparent", color: on ? "#1a1a1a" : "#8B7355",
  border: on ? "none" : "1px solid #2a2520", fontWeight: on ? "600" : "400"
});
const button = {
  background: "none", border: "1px solid #3a3530", color: "#D5D0C4", padding: "8px 14px",
  borderRadius: "6px", fontSize: "13px", cursor: "pointer"
};

const READY = new Set(fullRegions());
const keysFor = (c) => (c === "All" ? Object.keys(REGIONS) : COUNTRIES[c] ?? []).filter((k) => READY.has(k));

// A full 25-mark question in the shape of WSET's sample paper: several parts,
// each with its marks, ending in a service or food part. Write each part, then
// tick the points your answer made; each part earns one mark per point, up to
// its marks. Nothing is saved.
export const FullWritten = ({ onStudyRegion }) => {
  const [country, setCountry] = useState("All");
  const [q, setQ] = useState(() => randomFull(keysFor("All")));
  const [answers, setAnswers] = useState({});
  const [shown, setShown] = useState(false);
  const [ticked, setTicked] = useState([]);

  const next = (c = country) => {
    setQ((prev) => randomFull(keysFor(c), Math.random, prev?.regionKey ?? null));
    setAnswers({});
    setShown(false);
    setTicked([]);
  };
  const choose = (c) => { setCountry(c); next(c); };
  const toggle = (part, i) => setTicked((t) => {
    const copy = q.parts.map((_, j) => new Set(t[j] ?? []));
    copy[part].has(i) ? copy[part].delete(i) : copy[part].add(i);
    return copy;
  });

  if (!q) return null;
  const score = scoreFull(q, q.parts.map((_, j) => ticked[j] ?? new Set()));
  const countries = ["All", ...Object.keys(COUNTRIES).filter((c) => keysFor(c).length > 0)];

  return (
    <div>
      <div role="group" aria-label="Country" style={{ display: "flex", gap: "4px", flexWrap: "wrap", marginBottom: "12px" }}>
        {countries.map((c) => (
          <button key={c} aria-pressed={country === c} onClick={() => choose(c)} style={pill(country === c)}>{c}</button>
        ))}
      </div>

      <div style={card}>
        <p style={{ fontSize: "13px", color: "#B8B0A0", lineHeight: 1.6, margin: 0 }}>
          A whole 25-mark question, split into parts as in WSET's sample paper, ending with service or food.
          Study guides suggest about 25 minutes, and one clear, accurate point for each mark. After you write,
          the points from this app's notes are shown as a model answer: tick the ones you made. This is a
          self-check, not WSET's mark scheme, which WSET does not publish.
        </p>
      </div>

      <div style={card}>
        <div style={{ fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#8B7355" }}>
          {countryOf(q.regionKey)} · Question ({TOTAL} marks)
        </div>
        <h3 style={{ fontFamily: serif, fontSize: "22px", color: "#E8E4D9", margin: "6px 0 4px", fontWeight: 600 }}>{q.name}</h3>
      </div>

      {q.parts.map((p, j) => (
        <div key={p.letter} style={card}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "10px", alignItems: "baseline" }}>
            <p style={{ fontSize: "15px", color: "#E8E4D9", lineHeight: 1.5, margin: 0 }}>
              <b style={{ color: gold }}>{p.letter}.</b> {p.question}
            </p>
            <span style={{ fontSize: "12px", color: gold, whiteSpace: "nowrap" }}>{p.marks} marks</span>
          </div>
          <p style={{ fontSize: "12px", color: "#8B7355", margin: "4px 0 8px" }}>
            <b style={{ color: gold }}>{p.command}</b>: {COMMAND_WORDS[p.command]}
          </p>
          <label htmlFor={`full-${p.letter}`} className="visually-hidden">Your answer to part {p.letter}</label>
          <textarea
            id={`full-${p.letter}`}
            value={answers[p.letter] ?? ""}
            onChange={(e) => setAnswers((a) => ({ ...a, [p.letter]: e.target.value }))}
            rows={4}
            placeholder={`Aim for ${p.marks} clear points, in full sentences.`}
            style={{
              width: "100%", boxSizing: "border-box", background: "#141210", color: "#E8E4D9",
              border: "1px solid #3a3530", borderRadius: "6px", padding: "10px", fontSize: "14px",
              lineHeight: 1.6, fontFamily: "inherit", resize: "vertical"
            }}
          />
          <div style={{ fontSize: "11px", color: "#8B7355", marginTop: "4px" }}>{wordCount(answers[p.letter])} words</div>

          {shown && (
            <div style={{ marginTop: "10px", borderTop: "1px solid #2a2520", paddingTop: "10px" }}>
              <div style={{ fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#8B7355", marginBottom: "8px" }}>
                Model answer: any {p.marks} of these points
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {p.points.map((pt, i) => (
                  <li key={i} style={{ marginBottom: "6px" }}>
                    <label style={{ display: "flex", gap: "10px", alignItems: "flex-start", cursor: "pointer", fontSize: "13px", lineHeight: 1.5, color: "#D5D0C4" }}>
                      <input type="checkbox" checked={ticked[j]?.has(i) ?? false} onChange={() => toggle(j, i)} style={{ marginTop: "3px" }} />
                      <span>{pt}</span>
                    </label>
                  </li>
                ))}
              </ul>
              <div style={{ fontSize: "12px", color: gold }}>Part {p.letter}: {score.parts[j].got} of {p.marks} marks</div>
            </div>
          )}
        </div>
      ))}

      {shown && (
        <p role="status" style={{ fontSize: "15px", color: score.percent >= 55 ? "#7BC47B" : gold, margin: "0 0 12px" }}>
          {score.got} of {TOTAL} marks ({score.percent}%). The written paper needs 55% overall to pass.
        </p>
      )}

      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
        {!shown && <button onClick={() => setShown(true)} style={{ ...button, borderColor: gold, color: gold }}>Show the model answer</button>}
        <button onClick={() => next()} style={button}>Another question</button>
        <button onClick={() => onStudyRegion(q.regionKey)} style={button}>Study {q.name} →</button>
      </div>
    </div>
  );
};
