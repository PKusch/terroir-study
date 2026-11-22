import { useState, useEffect, useRef } from "react";
import { QUIZ_QUESTIONS } from "./data/quiz.js";
import { COMMAND_WORDS, wordCount } from "./written.js";
import { scoreFull, TOTAL } from "./fullwritten.js";
import { scoreExam, shownOptions, formatClock } from "./mockexam.js";
import { buildFullPaper, judgePaper, PAPER_SECONDS, WRITTEN_TOTAL } from "./fullpaper.js";
import { useTwoStep } from "./useTwoStep.js";

const serif = "'Cormorant Garamond', Georgia, serif";
const gold = "#C4A962";
const card = { background: "#1f1c18", border: "1px solid #2a2520", borderRadius: "8px", padding: "14px 16px", marginBottom: "12px" };
const button = {
  background: "none", border: "1px solid #3a3530", color: "#D5D0C4", padding: "8px 14px",
  borderRadius: "6px", fontSize: "13px", cursor: "pointer"
};
const primary = { ...button, background: gold, color: "#1a1a1a", border: "none", fontWeight: 600 };
const byId = new Map(QUIZ_QUESTIONS.map((q) => [q.id, q]));

// ─── Full theory paper ───────────────────────────────────────────────────────
// Two hours: 50 multiple-choice questions, then four 25-mark written
// questions. At the end the multiple choice is marked for you, and you mark
// the written answers against the model points. Each part needs 55%.
// Nothing is saved, and quiz progress is not touched.
export const FullPaper = () => {
  const [phase, setPhase] = useState("setup"); // setup | mcq | written | marking
  const [paper, setPaper] = useState(null);
  const [mcqAnswers, setMcqAnswers] = useState([]);
  const [writtenAnswers, setWrittenAnswers] = useState({});
  const [ticked, setTicked] = useState({});
  const [remaining, setRemaining] = useState(PAPER_SECONDS);
  const [usedSeconds, setUsedSeconds] = useState(0);
  const deadline = useRef(0);
  const started = useRef(0);

  const start = () => {
    const p = buildFullPaper(QUIZ_QUESTIONS);
    setPaper(p);
    setMcqAnswers([]);
    setWrittenAnswers({});
    setTicked({});
    started.current = Date.now();
    deadline.current = started.current + p.seconds * 1000;
    setRemaining(p.seconds);
    setPhase("mcq");
    window.scrollTo?.(0, 0);
  };

  const handIn = () => {
    setUsedSeconds(Math.min(PAPER_SECONDS, Math.round((Date.now() - started.current) / 1000)));
    setPhase("marking");
    window.scrollTo?.(0, 0);
  };
  const [handInArmed, clickHandIn] = useTwoStep(handIn);

  // One clock for the whole paper; when it runs out the paper is handed in.
  useEffect(() => {
    if (phase !== "mcq" && phase !== "written") return undefined;
    const tick = () => {
      const left = Math.max(0, Math.round((deadline.current - Date.now()) / 1000));
      setRemaining(left);
      if (left <= 0) handIn();
    };
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [phase]);

  if (phase === "setup") {
    return (
      <div style={card}>
        <h3 style={{ fontFamily: serif, fontSize: "22px", color: "#E8E4D9", margin: "0 0 8px", fontWeight: 600 }}>Full theory paper</h3>
        <p style={{ fontSize: "13px", color: "#B8B0A0", lineHeight: 1.6, margin: "0 0 8px" }}>
          The whole WSET Level 3 theory paper in one sitting: two hours for 50 multiple-choice questions, then four
          written questions of 25 marks each. Questions 1 to 3 are on still wines; question 4 is on a sparkling or
          fortified wine. Every written question ends with service or food, as in WSET's sample paper.
        </p>
        <p style={{ fontSize: "13px", color: "#B8B0A0", lineHeight: 1.6, margin: "0 0 12px" }}>
          Each part needs 55% on its own: 28 of 50, and 55 of 100. Study guides suggest about 25 minutes for the
          multiple choice and 25 minutes for each written question. At the end the multiple choice is marked for you
          and you mark your written answers against the model points. The questions are this app's own, not WSET's,
          and nothing is saved.
        </p>
        <button onClick={start} style={primary}>Start the two-hour paper</button>
      </div>
    );
  }

  const mcqResult = scoreExam(paper.mcq, mcqAnswers, QUIZ_QUESTIONS);
  const writtenScores = paper.written.map((q, n) => scoreFull(q, q.parts.map((_, j) => ticked[`${n}-${j}`] ?? new Set())));
  const writtenGot = writtenScores.reduce((a, s) => a + s.got, 0);
  const verdict = judgePaper({ mcqCorrect: mcqResult.correct, mcqTotal: mcqResult.total, writtenGot });
  const answered = mcqAnswers.filter((a) => Number.isInteger(a)).length;

  const clock = (
    <div style={{ position: "sticky", top: 0, zIndex: 2, background: "#141210", borderBottom: "1px solid #2a2520", padding: "8px 0", marginBottom: "12px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
      <span style={{ fontSize: "12px", color: "#8B7355" }}>
        {phase === "mcq" ? `Part 1: multiple choice · ${answered} of ${paper.mcq.entries.length} answered` : "Part 2: written questions"}
      </span>
      <span role="timer" aria-label="Time left" style={{ fontSize: "16px", fontWeight: 600, fontVariantNumeric: "tabular-nums", color: remaining < 600 ? "#C47B7B" : gold }}>
        {formatClock(remaining)}
      </span>
    </div>
  );

  if (phase === "mcq") {
    return (
      <div>
        {clock}
        {paper.mcq.entries.map((entry, i) => {
          const q = byId.get(entry.id);
          return (
            <div key={entry.id} style={card}>
              <p style={{ fontSize: "14px", color: "#E8E4D9", lineHeight: 1.5, margin: "0 0 8px" }}>
                <b style={{ color: gold }}>{i + 1}.</b> {q.question}
              </p>
              <div role="radiogroup" aria-label={`Question ${i + 1}`} style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                {shownOptions(entry, q).map((opt, k) => {
                  const on = mcqAnswers[i] === k;
                  return (
                    <button key={k} role="radio" aria-checked={on} onClick={() => setMcqAnswers((a) => { const c = [...a]; c[i] = k; return c; })} style={{
                      textAlign: "left", padding: "8px 12px", borderRadius: "6px", fontSize: "13px", lineHeight: 1.5, cursor: "pointer",
                      background: on ? "#2a2520" : "#1E1E1E", border: on ? `1px solid ${gold}` : "1px solid #2a2520", color: "#D5D0C4", fontFamily: "inherit"
                    }}>{opt}</button>
                  );
                })}
              </div>
            </div>
          );
        })}
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          <button onClick={() => { setPhase("written"); window.scrollTo?.(0, 0); }} style={primary}>On to the written questions →</button>
        </div>
      </div>
    );
  }

  if (phase === "written") {
    return (
      <div>
        {clock}
        {paper.written.map((wq, n) => (
          <div key={wq.regionKey} style={{ marginBottom: "20px" }}>
            <h3 style={{ fontFamily: serif, fontSize: "22px", color: "#E8E4D9", margin: "0 0 8px", fontWeight: 600 }}>
              Question {n + 1}: {wq.name} <span style={{ fontSize: "13px", color: gold, fontFamily: "inherit" }}>({TOTAL} marks)</span>
            </h3>
            {wq.parts.map((p) => {
              const key = `${n}-${p.letter}`;
              return (
                <div key={key} style={card}>
                  <div style={{ display: "flex", justifyContent: "space-between", gap: "10px", alignItems: "baseline" }}>
                    <p style={{ fontSize: "14px", color: "#E8E4D9", lineHeight: 1.5, margin: 0 }}><b style={{ color: gold }}>{p.letter}.</b> {p.question}</p>
                    <span style={{ fontSize: "12px", color: gold, whiteSpace: "nowrap" }}>{p.marks} marks</span>
                  </div>
                  <p style={{ fontSize: "12px", color: "#8B7355", margin: "4px 0 8px" }}><b style={{ color: gold }}>{p.command}</b>: {COMMAND_WORDS[p.command]}</p>
                  <label htmlFor={`paper-${key}`} className="visually-hidden">Your answer to question {n + 1}, part {p.letter}</label>
                  <textarea id={`paper-${key}`} rows={3} value={writtenAnswers[key] ?? ""}
                    onChange={(e) => setWrittenAnswers((a) => ({ ...a, [key]: e.target.value }))}
                    placeholder={`Aim for ${p.marks} clear points.`}
                    style={{ width: "100%", boxSizing: "border-box", background: "#141210", color: "#E8E4D9", border: "1px solid #3a3530", borderRadius: "6px", padding: "10px", fontSize: "14px", lineHeight: 1.6, fontFamily: "inherit", resize: "vertical" }} />
                  <div style={{ fontSize: "11px", color: "#8B7355", marginTop: "4px" }}>{wordCount(writtenAnswers[key])} words</div>
                </div>
              );
            })}
          </div>
        ))}
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          <button onClick={() => { setPhase("mcq"); window.scrollTo?.(0, 0); }} style={button}>← Back to the multiple choice</button>
          <button onClick={clickHandIn} style={primary}>{handInArmed ? "Sure? Press again to hand in" : "Hand in the paper"}</button>
        </div>
      </div>
    );
  }

  // Marking
  const toggle = (n, j, i) => setTicked((t) => {
    const key = `${n}-${j}`;
    const s = new Set(t[key] ?? []);
    s.has(i) ? s.delete(i) : s.add(i);
    return { ...t, [key]: s };
  });
  const line = (label, part) => (
    <div style={{ fontSize: "14px", color: part.pass ? "#7BC47B" : "#C47B7B", marginBottom: "4px" }}>
      {label}: {part.got} of {part.total} ({Math.round((part.got / part.total) * 100)}%), needs {part.need}. {part.pass ? "Pass." : "Not yet a pass."}
    </div>
  );

  return (
    <div>
      <div style={card}>
        <h3 style={{ fontFamily: serif, fontSize: "22px", color: "#E8E4D9", margin: "0 0 8px", fontWeight: 600 }}>Your paper</h3>
        <div role="status">
          {line("Multiple choice", verdict.mcq)}
          {line("Written", verdict.written)}
          <div style={{ fontSize: "15px", color: verdict.passed ? "#7BC47B" : gold, marginTop: "6px" }}>
            {verdict.passed ? "Both parts passed." : "Each part has to reach 55% on its own."}
          </div>
        </div>
        <div style={{ fontSize: "12px", color: "#8B7355", marginTop: "6px" }}>
          Time used: {formatClock(usedSeconds)} of {formatClock(PAPER_SECONDS)}. The written score rises as you tick the points below.
        </div>
      </div>

      <h3 style={{ fontFamily: serif, fontSize: "20px", color: "#E8E4D9", margin: "16px 0 8px", fontWeight: 600 }}>Mark your written answers</h3>
      {paper.written.map((wq, n) => (
        <div key={wq.regionKey} style={{ marginBottom: "16px" }}>
          <h4 style={{ fontSize: "15px", color: gold, margin: "0 0 6px" }}>Question {n + 1}: {wq.name} · {writtenScores[n].got} of {TOTAL}</h4>
          {wq.parts.map((p, j) => (
            <div key={p.letter} style={card}>
              <p style={{ fontSize: "14px", color: "#E8E4D9", lineHeight: 1.5, margin: "0 0 6px" }}><b style={{ color: gold }}>{p.letter}.</b> {p.question} <span style={{ color: gold, fontSize: "12px" }}>({p.marks} marks)</span></p>
              <div style={{ fontSize: "13px", color: "#B8B0A0", lineHeight: 1.5, whiteSpace: "pre-wrap", borderLeft: "2px solid #3a3530", paddingLeft: "10px", margin: "0 0 8px" }}>
                {writtenAnswers[`${n}-${p.letter}`]?.trim() || <em style={{ color: "#7a7268" }}>No answer written.</em>}
              </div>
              <div style={{ fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#8B7355", marginBottom: "6px" }}>Model answer: any {p.marks} of these points</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {p.points.map((pt, i) => (
                  <li key={i} style={{ marginBottom: "6px" }}>
                    <label style={{ display: "flex", gap: "10px", alignItems: "flex-start", cursor: "pointer", fontSize: "13px", lineHeight: 1.5, color: "#D5D0C4" }}>
                      <input type="checkbox" checked={ticked[`${n}-${j}`]?.has(i) ?? false} onChange={() => toggle(n, j, i)} style={{ marginTop: "3px" }} />
                      <span>{pt}</span>
                    </label>
                  </li>
                ))}
              </ul>
              <div style={{ fontSize: "12px", color: gold }}>Part {p.letter}: {writtenScores[n].parts[j].got} of {p.marks}</div>
            </div>
          ))}
        </div>
      ))}

      {mcqResult.missed.length > 0 && (
        <>
          <h3 style={{ fontFamily: serif, fontSize: "20px", color: "#E8E4D9", margin: "16px 0 8px", fontWeight: 600 }}>Multiple-choice questions to review ({mcqResult.missed.length})</h3>
          {mcqResult.missed.map((m) => (
            <div key={m.id} style={card}>
              <p style={{ fontSize: "14px", color: "#E8E4D9", margin: "0 0 6px", lineHeight: 1.5 }}>{m.question}</p>
              <div style={{ fontSize: "13px", color: "#C47B7B" }}>Your answer: {m.yourAnswer ?? "none"}</div>
              <div style={{ fontSize: "13px", color: "#7BC47B", marginBottom: "6px" }}>Right answer: {m.correctAnswer}</div>
              <div style={{ fontSize: "13px", color: "#B8B0A0", lineHeight: 1.5 }}>{m.explanation}</div>
            </div>
          ))}
        </>
      )}

      <button onClick={() => setPhase("setup")} style={button}>Start another paper</button>
      <p style={{ fontSize: "11px", color: "#7a7268", marginTop: "10px" }}>Out of {50 + WRITTEN_TOTAL} marks in all, but WSET judges each part separately.</p>
    </div>
  );
};
