import { useState, useEffect } from "react";
import { REGIONS } from "./data/france.js";
import { QUIZ_QUESTIONS } from "./data/quiz.js";

export const QuizMode = ({ mapClick, clearMapClick }) => {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [mapAnswer, setMapAnswer] = useState(null);

  const q = QUIZ_QUESTIONS[currentQ];
  const isMapQ = q.type === "map";

  // Handle map clicks from parent
  useEffect(() => {
    if (mapClick && isMapQ && !showAnswer) {
      setMapAnswer(mapClick);
      const correct = mapClick === q.answer;
      setShowAnswer(true);
      setScore(s => ({ correct: s.correct + (correct ? 1 : 0), total: s.total + 1 }));
      clearMapClick();
    } else if (mapClick) {
      clearMapClick();
    }
  }, [mapClick]);

  const handleOptionSelect = (idx) => {
    if (showAnswer) return;
    setSelected(idx);
    const correct = idx === q.answer;
    setShowAnswer(true);
    setScore(s => ({ correct: s.correct + (correct ? 1 : 0), total: s.total + 1 }));
  };

  const nextQuestion = () => {
    setSelected(null);
    setShowAnswer(false);
    setMapAnswer(null);
    setCurrentQ((currentQ + 1) % QUIZ_QUESTIONS.length);
  };

  const resetQuiz = () => {
    setCurrentQ(0);
    setSelected(null);
    setShowAnswer(false);
    setMapAnswer(null);
    setScore({ correct: 0, total: 0 });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {/* Score bar */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 16px",
        background: "#1E1E1E",
        borderRadius: "10px",
        marginBottom: "16px"
      }}>
        <span style={{ fontSize: "12px", color: "#B8B0A0" }}>
          Question {currentQ + 1} / {QUIZ_QUESTIONS.length}
        </span>
        <span style={{ fontSize: "12px", color: "#C4A962" }}>
          {score.correct} / {score.total} correct
        </span>
        <button onClick={resetQuiz} style={{
          background: "none", border: "1px solid #3a3530", color: "#B8B0A0",
          padding: "4px 10px", borderRadius: "4px", fontSize: "11px", cursor: "pointer",
          transition: "all 0.15s"
        }}>Reset</button>
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

      {/* Explanation */}
      {showAnswer && (
        <div style={{
          background: "linear-gradient(135deg, #1a1a1a 0%, #2a1f1f 100%)",
          borderRadius: "10px",
          padding: "14px 16px",
          marginBottom: "16px",
          border: "1px solid #3a2f2f"
        }}>
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
    </div>
  );
};
