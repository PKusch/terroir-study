import { useState, useEffect, useRef } from "react";
import { COUNTRIES } from "./data/regions.js";
import { QUIZ_QUESTIONS } from "./data/quiz.js";
import { useTwoStep } from "./useTwoStep.js";
import {
  PASS_MARK,
  SECONDS_PER_QUESTION,
  EXAM_SIZES,
  examPoolSize,
  buildExam,
  shownOptions,
  scoreExam,
  marksToPass,
  formatClock
} from "./mockexam.js";

const serif = "'Cormorant Garamond', Georgia, serif";
const gold = "#C4A962";
const TYPING = new Set(["INPUT", "TEXTAREA", "SELECT"]);

const SIZE_NAMES = { 10: "Quick", 25: "Half paper", 50: "Full paper" };
const minutesFor = (n) => Math.round((n * SECONDS_PER_QUESTION) / 60);

const card = { background: "#1E1E1E", border: "1px solid #3a3530", borderRadius: "10px", padding: "14px 16px" };
const label = { fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.12em", color: gold, marginBottom: "8px" };
const primaryButton = {
  padding: "12px", background: gold, color: "#1a1a1a", border: "none", borderRadius: "8px",
  fontSize: "13px", fontWeight: "600", cursor: "pointer", letterSpacing: "0.05em"
};
const quietButton = {
  background: "none", border: "1px solid #3a3530", color: "#B8B0A0", padding: "8px 14px",
  borderRadius: "6px", fontSize: "12px", cursor: "pointer", letterSpacing: "0.05em"
};
const choiceButton = (on) => ({
  textAlign: "left", padding: "10px 14px", borderRadius: "8px", fontSize: "13px", lineHeight: "1.5",
  cursor: "pointer", fontFamily: "inherit",
  background: on ? "#2a2520" : "#1E1E1E",
  border: on ? `1px solid ${gold}` : "1px solid #3a3530",
  color: on ? "#E8E4D9" : "#D5D0C4"
});

const byId = new Map(QUIZ_QUESTIONS.map((q) => [q.id, q]));

export const MockExam = ({ active = true }) => {
  const [phase, setPhase] = useState("setup"); // setup | running | done
  const [size, setSize] = useState(EXAM_SIZES[EXAM_SIZES.length - 1]);
  const [country, setCountry] = useState("All");

  const [exam, setExam] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [index, setIndex] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [result, setResult] = useState(null);
  const [usedSeconds, setUsedSeconds] = useState(0);

  // The timer and the keys read the latest of these without being re-created.
  const answersRef = useRef([]);
  const examRef = useRef(null);
  const deadline = useRef(0);
  const started = useRef(0);

  const available = examPoolSize(QUIZ_QUESTIONS, country);
  const length = Math.min(size, available);

  const start = () => {
    const next = buildExam(QUIZ_QUESTIONS, { length: size, country });
    if (next.entries.length === 0) return;
    examRef.current = next;
    answersRef.current = next.entries.map(() => null);
    setExam(next);
    setAnswers(answersRef.current);
    setIndex(0);
    setResult(null);
    started.current = Date.now();
    deadline.current = started.current + next.seconds * 1000;
    setRemaining(next.seconds);
    setPhase("running");
  };

  const finish = () => {
    const e = examRef.current;
    if (!e) return;
    setResult(scoreExam(e, answersRef.current, QUIZ_QUESTIONS));
    setUsedSeconds(Math.min(e.seconds, Math.round((Date.now() - started.current) / 1000)));
    setPhase("done");
  };

  const pick = (i, position) => {
    const next = answersRef.current.slice();
    next[i] = next[i] === position ? null : position; // pressing the chosen one again clears it
    answersRef.current = next;
    setAnswers(next);
  };

  // The clock. It runs from a deadline, not by counting ticks, so a sleeping tab
  // or a hidden panel cannot make it drift; at zero the paper is handed in.
  useEffect(() => {
    if (phase !== "running") return undefined;
    const tick = () => {
      const left = Math.ceil((deadline.current - Date.now()) / 1000);
      if (left <= 0) {
        setRemaining(0);
        finish();
      } else {
        setRemaining(left);
      }
    };
    const id = setInterval(tick, 1000);
    tick();
    return () => clearInterval(id);
  }, [phase]);

  // Keys: 1 to 4 pick an answer, the arrows move between questions. Only while
  // this tab is the one on screen, and never while typing in a box.
  useEffect(() => {
    if (phase !== "running" || !active) return undefined;
    const onKey = (e) => {
      if (e.ctrlKey || e.metaKey || e.altKey || TYPING.has(e.target?.tagName)) return;
      const entry = examRef.current.entries[index];
      const count = entry.order.length;
      if (/^[1-9]$/.test(e.key) && Number(e.key) <= count) {
        e.preventDefault();
        pick(index, Number(e.key) - 1);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        setIndex((i) => Math.min(i + 1, examRef.current.entries.length - 1));
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        setIndex((i) => Math.max(i - 1, 0));
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [phase, active, index]);

  const unanswered = answers.filter((a) => a === null).length;
  const [finishArmed, clickFinish] = useTwoStep(finish);

  // ── Set up ────────────────────────────────────────────────────────────────
  if (phase === "setup") {
    return (
      <div>
        <div style={{ ...card, marginBottom: "16px" }}>
          <div style={label}>Mock exam</div>
          <p style={{ fontSize: "13px", color: "#D5D0C4", lineHeight: "1.6" }}>
            A timed paper of multiple-choice questions, marked at the end. You see no answers until you hand it
            in. It is modelled on the multiple-choice part of the WSET Level 3 exam: 50 questions, closed book, one
            mark each, nothing lost for a wrong answer, and a pass mark of {Math.round(PASS_MARK * 100)}%. WSET sets
            no time for that part on its own (it gives two hours for the whole written paper), so the clock here is
            this app's own: 72 seconds a question. Your quiz progress is not touched.
          </p>
        </div>

        <div style={label}>Length</div>
        <div style={{ display: "flex", gap: "8px", marginBottom: "16px", flexWrap: "wrap" }}>
          {EXAM_SIZES.map((n) => (
            <button key={n} aria-pressed={size === n} onClick={() => setSize(n)} style={{
              ...choiceButton(size === n), flex: "1 1 120px", textAlign: "center"
            }}>
              <div style={{ fontWeight: "600" }}>{SIZE_NAMES[n]}</div>
              <div style={{ fontSize: "11px", color: "#8B7355" }}>{n} questions · {minutesFor(n)} min</div>
            </button>
          ))}
        </div>

        <div style={label}>Questions from</div>
        <div style={{ display: "flex", gap: "6px", marginBottom: "12px", flexWrap: "wrap" }}>
          {["All", ...Object.keys(COUNTRIES)].map((c) => (
            <button key={c} aria-pressed={country === c} onClick={() => setCountry(c)} style={{
              padding: "6px 12px", borderRadius: "6px", fontSize: "10px", letterSpacing: "0.1em",
              textTransform: "uppercase", cursor: "pointer",
              background: country === c ? gold : "transparent",
              color: country === c ? "#1a1a1a" : "#8B7355",
              border: country === c ? "none" : "1px solid #2a2520",
              fontWeight: country === c ? "600" : "400"
            }}>
              {c}
            </button>
          ))}
        </div>

        <div style={{ fontSize: "12px", color: "#B8B0A0", marginBottom: "16px" }}>
          {available === 0
            ? "There are no multiple-choice questions for this country yet."
            : length < size
              ? `There are only ${available} multiple-choice questions for ${country}, so this paper will have ${length}, with ${minutesFor(length)} minutes.`
              : `${length} questions drawn at random from ${available}, ${minutesFor(length)} minutes.`}
        </div>

        <button onClick={start} disabled={available === 0} style={{ ...primaryButton, width: "100%", opacity: available === 0 ? 0.4 : 1 }}>
          Start the exam
        </button>
      </div>
    );
  }

  // ── Results ───────────────────────────────────────────────────────────────
  if (phase === "done" && result) {
    const need = marksToPass(result.total);
    return (
      <div>
        <div style={{
          ...card, marginBottom: "16px", textAlign: "center",
          background: result.passed ? "#1a3a2a" : "#2a1f1f",
          border: result.passed ? "1px solid #4a7a4a" : "1px solid #7a4a4a"
        }}>
          <div role="status" style={{ fontFamily: serif, fontSize: "26px", fontWeight: "600", color: result.passed ? "#7BC47B" : "#C47B7B" }}>
            {result.passed ? "Pass" : "Not yet"}
          </div>
          <div style={{ fontSize: "15px", color: "#E8E4D9", marginTop: "4px" }}>
            {result.correct} of {result.total} correct · {result.percent}%
          </div>
          <div style={{ fontSize: "12px", color: "#B8B0A0", marginTop: "6px", lineHeight: "1.5" }}>
            The pass mark is {Math.round(PASS_MARK * 100)}%, which is {need} of {result.total}.
            {result.passed ? "" : ` You were ${need - result.correct} short.`}
            {result.unanswered > 0 ? ` ${result.unanswered} left unanswered.` : ""}
            {` Time used: ${formatClock(usedSeconds)} of ${formatClock(exam.seconds)}.`}
          </div>
        </div>

        <div style={{ ...card, marginBottom: "16px" }}>
          <div style={label}>By country</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {result.byCountry.map((row) => (
              <div key={row.country}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#D5D0C4" }}>
                  <span>{row.country}</span>
                  <span style={{ color: row.correct / row.total < PASS_MARK ? "#C47B7B" : "#B8B0A0" }}>
                    {row.correct} of {row.total}
                  </span>
                </div>
                <div style={{ height: "4px", background: "#2a2520", borderRadius: "2px", marginTop: "3px" }}>
                  <div style={{ height: "4px", width: `${(row.correct / row.total) * 100}%`, background: row.correct / row.total < PASS_MARK ? "#C47B7B" : "#7BC47B", borderRadius: "2px" }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {result.missed.length > 0 && (
          <div style={{ marginBottom: "16px" }}>
            <div style={label}>Review the {result.missed.length} you missed</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {result.missed.map((m) => (
                <div key={m.id} style={card}>
                  <div style={{ fontFamily: serif, fontSize: "15px", fontWeight: "600", color: "#E8E4D9", lineHeight: "1.5", marginBottom: "8px" }}>
                    {m.question}
                  </div>
                  <div style={{ fontSize: "12px", color: "#C47B7B", marginBottom: "4px" }}>
                    {m.yourAnswer === null ? "You left this blank." : `You answered: ${m.yourAnswer}`}
                  </div>
                  <div style={{ fontSize: "12px", color: "#7BC47B", marginBottom: "8px" }}>
                    Correct: {m.correctAnswer}
                  </div>
                  <div style={{ fontSize: "12px", color: "#D5D0C4", lineHeight: "1.6" }}>{m.explanation}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        <button onClick={() => setPhase("setup")} style={{ ...primaryButton, width: "100%" }}>
          Take another exam
        </button>
      </div>
    );
  }

  // ── Running ───────────────────────────────────────────────────────────────
  const entry = exam.entries[index];
  const q = byId.get(entry.id);
  const options = shownOptions(entry, q);
  const low = remaining <= 300;

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
        <div style={{ fontSize: "12px", color: "#B8B0A0" }}>
          Question {index + 1} of {exam.entries.length} · {exam.entries.length - unanswered} answered
        </div>
        <div role="timer" aria-label="Time left" style={{ fontSize: "16px", fontWeight: "600", fontVariantNumeric: "tabular-nums", color: low ? "#C47B7B" : gold }}>
          {formatClock(remaining)}
        </div>
      </div>

      <div style={{ fontFamily: serif, fontSize: "16px", fontWeight: "600", color: "#E8E4D9", lineHeight: "1.6", marginBottom: "14px" }}>
        {q.question}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "10px" }}>
        {options.map((opt, k) => (
          <button key={k} aria-pressed={answers[index] === k} onClick={() => pick(index, k)} style={choiceButton(answers[index] === k)}>
            <span style={{ color: "#8B7355", marginRight: "8px" }}>{k + 1}</span>{opt}
          </button>
        ))}
      </div>
      <div style={{ fontSize: "11px", color: "#7a7268", marginBottom: "14px" }}>
        Keys: 1 to {options.length} to answer (press again to clear), left and right arrows to move.
      </div>

      <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
        <button onClick={() => setIndex(index - 1)} disabled={index === 0} style={{ ...quietButton, flex: 1, opacity: index === 0 ? 0.4 : 1 }}>
          ← Previous
        </button>
        <button onClick={() => setIndex(index + 1)} disabled={index === exam.entries.length - 1} style={{ ...quietButton, flex: 1, opacity: index === exam.entries.length - 1 ? 0.4 : 1 }}>
          Next →
        </button>
      </div>

      <div style={{ ...card, marginBottom: "16px" }}>
        <div style={label}>Jump to a question</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
          {exam.entries.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Question ${i + 1}${answers[i] === null ? ", not answered" : ", answered"}`}
              aria-current={i === index ? "step" : undefined}
              style={{
                width: "30px", height: "30px", borderRadius: "6px", fontSize: "11px", cursor: "pointer",
                background: i === index ? gold : answers[i] !== null ? "#2a2520" : "transparent",
                color: i === index ? "#1a1a1a" : answers[i] !== null ? "#E8E4D9" : "#8B7355",
                border: i === index ? "none" : answers[i] !== null ? `1px solid ${gold}66` : "1px solid #3a3530",
                fontWeight: i === index ? "600" : "400"
              }}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>

      <button onClick={unanswered === 0 ? finish : clickFinish} style={{ ...primaryButton, width: "100%" }}>
        {finishArmed
          ? `${unanswered} unanswered. Press again to hand in`
          : "Hand in the exam"}
      </button>
    </div>
  );
};
