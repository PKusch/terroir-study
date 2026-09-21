import { useState, useEffect, useRef } from "react";
import { quizShortcut } from "./shortcuts.js";
import { useTwoStep } from "./useTwoStep.js";
import { REGIONS, COUNTRIES } from "./data/regions.js";
import { QUIZ_QUESTIONS } from "./data/quiz.js";
import {
  loadProgress,
  saveProgress,
  resetProgress,
  recordAnswer,
  pickNext,
  progressSummary,
  weakAreas,
  poolFor,
  studyPool
} from "./progress.js";

const byId = (id) => QUIZ_QUESTIONS.find((q) => q.id === id) ?? QUIZ_QUESTIONS[0];

export const QuizMode = ({ mapClick, clearMapClick, onQuestionCountry, onStudyRegion }) => {
  // Progress across sessions lives in localStorage (see progress.js). The
  // question order comes from it: unseen first, then the ones you got wrong.
  const [progress, setProgress] = useState(() => loadProgress());
  // Study everything, or one country at a time.
  const [filter, setFilter] = useState("All");
  const [dueOnly, setDueOnly] = useState(false);
  const { pool, fellBack } = studyPool(QUIZ_QUESTIONS, progress, filter, dueOnly);
  const [currentId, setCurrentId] = useState(() => pickNext(QUIZ_QUESTIONS, loadProgress(), null).id);
  const [selected, setSelected] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [mapAnswer, setMapAnswer] = useState(null);

  const q = byId(currentId);
  const isMapQ = q.type === "map";

  // Tell the app which country's map to show for this question.
  useEffect(() => {
    if (onQuestionCountry) onQuestionCountry(q.country ?? "France");
  }, [q.id]);

  const summary = progressSummary(pool, progress);
  const weak = weakAreas(pool, progress, REGIONS).slice(0, 4);

  const chooseFilter = (c) => {
    if (c === filter) return;
    setFilter(c);
    clearQuestion();
    setCurrentId(pickNext(studyPool(QUIZ_QUESTIONS, progress, c, dueOnly).pool, progress, null).id);
  };

  const toggleDue = () => {
    const next = !dueOnly;
    setDueOnly(next);
    clearQuestion();
    setCurrentId(pickNext(studyPool(QUIZ_QUESTIONS, progress, filter, next).pool, progress, null).id);
  };

  const recordResult = (correct) => {
    setShowAnswer(true);
    setScore(s => ({ correct: s.correct + (correct ? 1 : 0), total: s.total + 1 }));
    const next = recordAnswer(progress, q.id, correct);
    setProgress(next);
    saveProgress(next);
  };

  // Handle map clicks from parent
  useEffect(() => {
    if (mapClick && isMapQ && !showAnswer) {
      setMapAnswer(mapClick);
      recordResult(mapClick === q.answer);
      clearMapClick();
    } else if (mapClick) {
      clearMapClick();
    }
  }, [mapClick]);

  const handleOptionSelect = (idx) => {
    if (showAnswer) return;
    setSelected(idx);
    recordResult(idx === q.answer);
  };

  const clearQuestion = () => {
    setSelected(null);
    setShowAnswer(false);
    setMapAnswer(null);
  };

  const nextQuestion = () => {
    clearQuestion();
    setCurrentId(pickNext(pool, progress, currentId).id);
  };

  // After an answer, focus goes to Next, so Enter or Space moves on and a screen
  // reader lands on the button. (The "Correct" line is a live region, so it is
  // still announced.)
  const nextButton = useRef(null);
  useEffect(() => {
    if (showAnswer) nextButton.current?.focus();
  }, [showAnswer]);

  // Keys: 1 to 4 answer, Enter or N moves on. Registered afresh each render so it
  // always acts on the question that is on screen.
  useEffect(() => {
    const onKey = (e) => {
      const action = quizShortcut(
        { key: e.key, ctrlKey: e.ctrlKey, metaKey: e.metaKey, altKey: e.altKey,
          targetTag: e.target?.tagName, targetRole: e.target?.getAttribute?.("role") },
        { optionCount: isMapQ ? 0 : q.options.length, showAnswer, isMapQ }
      );
      if (!action) return;
      e.preventDefault();
      if (action.type === "option") handleOptionSelect(action.index);
      else nextQuestion();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  // "Reset" starts a fresh session score; what you have learned is kept.
  const resetQuiz = () => {
    clearQuestion();
    setScore({ correct: 0, total: 0 });
    setCurrentId(pickNext(pool, progress, currentId).id);
  };

  // "Clear progress" forgets everything ever answered, as well as the session.
  const clearProgress = () => {
    const empty = resetProgress();
    setProgress(empty);
    clearQuestion();
    setScore({ correct: 0, total: 0 });
    setCurrentId(pickNext(pool, empty, currentId).id);
  };

  const [clearArmed, clickClear] = useTwoStep(clearProgress);

  const quietButton = {
    background: "none", border: "1px solid #3a3530", color: "#B8B0A0",
    padding: "4px 10px", borderRadius: "4px", fontSize: "11px", cursor: "pointer",
    transition: "all 0.15s"
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {/* Country filter: everything, or one country at a time */}
      <div style={{ display: "flex", gap: "4px", flexWrap: "wrap", marginBottom: "10px" }}>
        {["All", ...Object.keys(COUNTRIES)].map((c) => (
          <button
            key={c}
            onClick={() => chooseFilter(c)}
            aria-pressed={filter === c}
            style={{
              padding: "4px 10px", borderRadius: "4px", fontSize: "10px", letterSpacing: "0.08em",
              textTransform: "uppercase", cursor: "pointer", transition: "all 0.15s",
              background: filter === c ? "#C4A962" : "transparent",
              color: filter === c ? "#1a1a1a" : "#8B7355",
              border: filter === c ? "none" : "1px solid #2a2520",
              fontWeight: filter === c ? "600" : "400"
            }}
          >
            {c}
          </button>
        ))}
        <button
          onClick={toggleDue}
          aria-pressed={dueOnly}
          title="Only the questions you got wrong recently or that are due to come round again"
          style={{
            marginLeft: "auto", padding: "4px 10px", borderRadius: "4px", fontSize: "10px", letterSpacing: "0.08em",
            textTransform: "uppercase", cursor: "pointer", transition: "all 0.15s",
            background: dueOnly ? "#7BC47B" : "transparent",
            color: dueOnly ? "#1a1a1a" : "#8B7355",
            border: dueOnly ? "none" : "1px solid #2a2520",
            fontWeight: dueOnly ? "600" : "400"
          }}
        >
          {dueOnly ? "✓ Due only" : "Due only"}
        </button>
      </div>
      {dueOnly && fellBack && (
        <div style={{ fontSize: "11px", color: "#8B7355", marginBottom: "8px" }}>
          Nothing is due for review in this set yet, so every question is in play.
        </div>
      )}

      {/* Score bar */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "8px",
        flexWrap: "wrap",
        padding: "12px 16px",
        background: "#1E1E1E",
        borderRadius: "10px",
        marginBottom: "16px"
      }}>
        <span style={{ fontSize: "12px", color: "#B8B0A0" }}>
          Answered {summary.answered} · {summary.unseen} not seen · {summary.due} due for review
        </span>
        <span style={{ fontSize: "12px", color: "#C4A962" }}>
          {score.correct} / {score.total} correct
        </span>
        <span style={{ display: "flex", gap: "6px" }}>
          <button onClick={resetQuiz} style={quietButton}>Reset</button>
          <button onClick={clickClear} title="Forget every answer you have given so far. Save a progress file first if you may want them back."
            style={clearArmed ? { ...quietButton, color: "#C47B7B", borderColor: "#7a4a4a" } : { ...quietButton, color: "#7a7268", borderColor: "#2a2620" }}>
            {clearArmed ? "Click again to clear" : "Clear progress"}
          </button>
        </span>
      </div>

      {/* Question type badge */}
      <div style={{
        display: "inline-flex",
        alignSelf: "flex-start",
        padding: "3px 10px",
        borderRadius: "4px",
        fontSize: "10px",
        textTransform: "uppercase",
        letterSpacing: "0.1em",
        marginBottom: "10px",
        background: q.type === "map" ? "#1a3a2a" : q.type === "scenario" ? "#3a2a1a" : "#2a1a3a",
        color: q.type === "map" ? "#7BC47B" : q.type === "scenario" ? "#C4A962" : "#A47BC4"
      }}>
        {q.type === "map" ? "📍 Map" : q.type === "scenario" ? "🎯 Scenario" : "🔗 Connection"}
      </div>

      {/* Question */}
      <div style={{
        fontSize: "15px",
        color: "#E8E4D9",
        lineHeight: "1.6",
        marginBottom: "16px",
        fontFamily: "'Cormorant Garamond', Georgia, serif",
        fontWeight: "600"
      }}>
        {q.question}
      </div>

      {/* Map question or multiple choice */}
      {isMapQ ? (
        <div style={{ marginBottom: "16px" }}>
          <div style={{
            fontSize: "13px",
            padding: "12px 16px",
            borderRadius: "8px",
            background: showAnswer
              ? (mapAnswer === q.answer ? "#1a3a2a" : "#3a1a1a")
              : "#1E1E1E",
            border: showAnswer
              ? (mapAnswer === q.answer ? "1px solid #4a7a4a" : "1px solid #7a4a4a")
              : "1px solid #3a3530",
            color: showAnswer
              ? (mapAnswer === q.answer ? "#7BC47B" : "#C47B7B")
              : "#B8B0A0"
          }}>
            {showAnswer
              ? (mapAnswer === q.answer
                ? `✓ Correct! ${REGIONS[q.answer].name}`
                : `✗ You clicked ${REGIONS[mapAnswer]?.name || "unknown"}. The answer is ${REGIONS[q.answer].name}`)
              : "👆 Click a region on the map above"
            }
          </div>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "16px" }}>
          {q.options.map((opt, i) => {
            let bg = "#1E1E1E";
            let border = "1px solid #3a3530";
            let color = "#D5D0C4";
            if (showAnswer) {
              if (i === q.answer) { bg = "#1a3a2a"; border = "1px solid #4a7a4a"; color = "#7BC47B"; }
              else if (i === selected) { bg = "#3a1a1a"; border = "1px solid #7a4a4a"; color = "#C47B7B"; }
            } else if (i === selected) {
              bg = "#2a2520"; border = "1px solid #C4A962";
            }
            return (
              <button
                key={i}
                onClick={() => handleOptionSelect(i)}
                style={{
                  textAlign: "left", padding: "12px 14px", background: bg,
                  border, borderRadius: "8px", color, fontSize: "13px",
                  lineHeight: "1.5", cursor: showAnswer ? "default" : "pointer",
                  transition: "all 0.2s"
                }}
              >
                {opt}
              </button>
            );
          })}
        </div>
      )}

      {!isMapQ && !showAnswer && (
        <div style={{ fontSize: "11px", color: "#7a7268", marginTop: "-6px", marginBottom: "12px" }}>
          Keys: 1 to {q.options.length} to answer, then Enter for the next question.
        </div>
      )}

      {/* Explanation */}
      {showAnswer && (
        <div style={{
          background: "linear-gradient(135deg, #1a1a1a 0%, #2a1f1f 100%)",
          borderRadius: "10px",
          padding: "14px 16px",
          marginBottom: "16px",
          border: "1px solid #3a2f2f"
        }}>
          <div role="status" style={{ fontSize: "13px", fontWeight: "600", marginBottom: "8px", color: selected === q.answer ? "#7BC47B" : "#C47B7B" }}>
            {selected === q.answer ? "Correct." : `Not quite. The answer is: ${q.options[q.answer]}`}
          </div>
          <div style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.12em", color: "#C4A962", marginBottom: "6px" }}>
            Why
          </div>
          <div style={{ fontSize: "13px", color: "#D5D0C4", lineHeight: "1.6" }}>
            {q.explanation}
          </div>
        </div>
      )}

      {showAnswer && (
        <button
          ref={nextButton}
          onClick={nextQuestion}
          style={{
            padding: "12px",
            background: "#C4A962",
            color: "#1a1a1a",
            border: "none",
            borderRadius: "8px",
            fontSize: "13px",
            fontWeight: "600",
            cursor: "pointer",
            letterSpacing: "0.05em"
          }}
        >
          Next Question →
        </button>
      )}

      {/* Weak areas: regions you have answered at least twice, weakest first */}
      {weak.length > 0 && (
        <div style={{
          background: "#1E1E1E",
          borderRadius: "10px",
          padding: "12px 16px",
          marginTop: "16px",
          border: "1px solid #3a3530"
        }}>
          <div style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.12em", color: "#C4A962", marginBottom: "8px" }}>
            Weak areas
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            {weak.map((w) => (
              <button
                key={w.key}
                onClick={() => onStudyRegion && onStudyRegion(w.key)}
                title={`Open ${w.name} in Explore`}
                style={{
                  display: "flex", justifyContent: "space-between", width: "100%", fontSize: "12px", lineHeight: "1.5",
                  background: "none", border: "none", padding: "2px 0", cursor: onStudyRegion ? "pointer" : "default",
                  color: "#D5D0C4", textAlign: "left", fontFamily: "inherit"
                }}
              >
                <span>{w.name} <span style={{ color: "#8B7355", fontSize: "10px" }}>· study →</span></span>
                <span style={{ color: w.accuracy < 0.5 ? "#C47B7B" : "#B8B0A0" }}>
                  {w.correct} of {w.attempts} correct
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
