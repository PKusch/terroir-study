import { useState } from "react";
import { COUNTRIES, REGIONS } from "./data/regions.js";
import { COMMAND_WORDS, randomWritten, selfScore } from "./written.js";

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

// Practice for the written part of the theory paper: write an answer, then
// tick the points from the region's notes that it covers. Nothing is saved.
export const WrittenPractice = ({ onStudyRegion }) => {
  const [country, setCountry] = useState("All");
  const keysFor = (c) => (c === "All" ? Object.keys(REGIONS) : COUNTRIES[c] ?? []);
  const [q, setQ] = useState(() => randomWritten(keysFor("All")));
  const [answer, setAnswer] = useState("");
  const [shown, setShown] = useState(false);
  const [ticked, setTicked] = useState(new Set());

  const next = (c = country) => {
    setQ((prev) => randomWritten(keysFor(c), Math.random, prev));
    setAnswer("");
    setShown(false);
    setTicked(new Set());
  };
  const choose = (c) => { setCountry(c); next(c); };
  const toggle = (i) => setTicked((t) => { const n = new Set(t); n.has(i) ? n.delete(i) : n.add(i); return n; });

  if (!q) return null;
  const score = selfScore(q.points, ticked);

  return (
    <div>
      <div style={{ display: "flex", gap: "4px", flexWrap: "wrap", marginBottom: "12px" }}>
        {["All", ...Object.keys(COUNTRIES)].map((c) => (
          <button key={c} aria-pressed={country === c} onClick={() => choose(c)} style={pill(country === c)}>{c}</button>
        ))}
      </div>

      <div style={card}>
        <p style={{ fontSize: "13px", color: "#B8B0A0", lineHeight: 1.6, margin: 0 }}>
          The WSET Level 3 theory paper ends with four written questions of 25 marks each, and that part needs
          55% on its own. Write your answer, then check it against the points in this app's notes and tick the
          ones you made. This is a self-check, not WSET's mark scheme, and nothing here is saved.
        </p>
      </div>

      <div style={card}>
        <div style={{ fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#8B7355" }}>
          {REGIONS[q.regionKey].country} · {REGIONS[q.regionKey].name}
        </div>
        <h3 style={{ fontFamily: serif, fontSize: "21px", color: "#E8E4D9", margin: "6px 0 8px", fontWeight: 600 }}>{q.question}</h3>
        <p style={{ fontSize: "12px", color: "#8B7355", margin: "0 0 10px" }}>
          <b style={{ color: gold }}>{q.command}</b>: {COMMAND_WORDS[q.command]}
        </p>
        <label htmlFor="written-answer" style={{ position: "absolute", left: "-9999px" }}>Your answer</label>
        <textarea
          id="written-answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          rows={8}
          placeholder="Write your answer here, in full sentences."
          style={{
            width: "100%", boxSizing: "border-box", background: "#141210", color: "#E8E4D9",
            border: "1px solid #3a3530", borderRadius: "6px", padding: "10px", fontSize: "14px",
            lineHeight: 1.6, fontFamily: "inherit", resize: "vertical"
          }}
        />
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "10px" }}>
          {!shown && <button onClick={() => setShown(true)} style={{ ...button, borderColor: gold, color: gold }}>Show the points</button>}
          <button onClick={() => next()} style={button}>Another question</button>
          <button onClick={() => onStudyRegion(q.regionKey)} style={button}>Study {REGIONS[q.regionKey].name} →</button>
        </div>
      </div>

      {shown && (
        <div style={card}>
          <div style={{ fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#8B7355", marginBottom: "8px" }}>
            Points from the notes: tick the ones your answer makes
          </div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {q.points.map((p, i) => (
              <li key={i} style={{ marginBottom: "8px" }}>
                <label style={{ display: "flex", gap: "10px", alignItems: "flex-start", cursor: "pointer", fontSize: "13px", lineHeight: 1.5, color: "#D5D0C4" }}>
                  <input type="checkbox" checked={ticked.has(i)} onChange={() => toggle(i)} style={{ marginTop: "3px" }} />
                  <span>{p}</span>
                </label>
              </li>
            ))}
          </ul>
          <p role="status" style={{ fontSize: "14px", color: gold, margin: "10px 0 0" }}>
            You made {score.got} of {score.n} points ({score.percent}%).
          </p>
        </div>
      )}
    </div>
  );
};
