import { useState } from "react";
import { dailyTarget, daysUntil, lastWeek, loadExamDate, saveExamDate, streak } from "./studyplan.js";

const gold = "#C4A962";

// The study-plan card on the Quiz tab: a streak of days with at least one
// quiz answer, and, once an exam date is set, a countdown and a daily target
// for new questions that leaves the last week for mock papers and revision.
// Everything stays in this browser.
export const StudyPlan = ({ days, unseen, now = Date.now() }) => {
  const [exam, setExam] = useState(() => loadExamDate());
  const s = streak(days, now);
  const week = lastWeek(days, now);
  const left = daysUntil(exam, now);
  const target = dailyTarget(unseen, left);

  const choose = (value) => {
    saveExamDate(value);
    setExam(value || null);
  };

  const plan = {
    none: exam ? "That date has passed. Set your next exam date." : "Set your exam date to get a daily target.",
    today: "Your exam is today. Good luck, and trust yourself.",
    revise: `${left} day${left === 1 ? "" : "s"} to go: time for mock papers and the questions you got wrong (Due only).`,
    allSeen: `${left} days to go, and you have met every question once. Keep the Due only questions down, and sit mock papers.`,
    learn: `${left} days to go. About ${target.perDay} new question${target.perDay === 1 ? "" : "s"} a day meets the other ${unseen} once in the next ${target.studyDays} days, and leaves the last week for mock papers.`
  }[target.phase];

  return (
    <div style={{ background: "#1E1E1E", borderRadius: "10px", padding: "12px 16px", marginTop: "16px", border: "1px solid #3a3530" }}>
      <div style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.12em", color: gold, marginBottom: "8px" }}>Study plan</div>
      <div style={{ fontSize: "13px", color: "#D5D0C4", lineHeight: 1.6 }}>
        {s.days > 0
          ? <>{s.days} day{s.days === 1 ? "" : "s"} in a row{s.today ? "" : " (answer a question today to keep it going)"}.</>
          : "No study streak yet: answer a question to start one."}
        {" "}Studied on {week} of the last 7 days.
      </div>
      <div style={{ fontSize: "13px", color: "#B8B0A0", lineHeight: 1.6, marginTop: "6px" }}>{plan}</div>
      <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap", marginTop: "8px" }}>
        <label htmlFor="exam-date" style={{ fontSize: "12px", color: "#8B7355" }}>Exam date</label>
        <input id="exam-date" type="date" value={exam ?? ""} onChange={(e) => choose(e.target.value)}
          style={{ background: "#141210", color: "#E8E4D9", border: "1px solid #3a3530", borderRadius: "6px", padding: "5px 8px", fontSize: "13px", fontFamily: "inherit", colorScheme: "dark" }} />
        {exam && (
          <button onClick={() => choose("")} style={{ background: "none", border: "1px solid #3a3530", color: "#B8B0A0", padding: "4px 10px", borderRadius: "4px", fontSize: "11px", cursor: "pointer" }}>Clear</button>
        )}
      </div>
    </div>
  );
};
