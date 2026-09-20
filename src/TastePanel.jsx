import { useState, useEffect } from "react";
import { REGIONS } from "./data/regions.js";
import { GRAPES } from "./data/grapes.js";
import {
  LEVELS,
  buildExercise,
  markExercise,
  explain,
  structureFields,
  loadTasteResults,
  saveTasteResults,
  resetTasteResults
} from "./taste.js";

// ─── Taste mode ──────────────────────────────────────────────────────────────
// The app names a wine from a region it knows. The learner sets body, acidity
// and (for reds) tannin, ticks the aromas they expect, and presses Check. The
// answer is marked against the grape profile and explained.

const FIELD_LABEL = { body: "Body", acidity: "Acidity", tannin: "Tannin" };
const LEVEL_LABEL = { low: "Low", medium: "Medium", high: "High" };

const emptyGiven = () => ({ body: null, acidity: null, tannin: null, aromas: [] });

export const TastePanel = ({ region }) => {
  // A new wine is drawn from the selected region each time it changes, and
  // from a random region after "Next wine".
  const [exercise, setExercise] = useState(() => buildExercise(REGIONS, GRAPES, Math.random, region));
  const [given, setGiven] = useState(emptyGiven);
  const [result, setResult] = useState(null);
  const [session, setSession] = useState({ wines: 0, fullyRight: 0 });
  const [allTime, setAllTime] = useState(() => loadTasteResults());

  const startWine = (preferred) => {
    setExercise(buildExercise(REGIONS, GRAPES, Math.random, preferred));
    setGiven(emptyGiven());
    setResult(null);
  };

  // Clicking a region on the map draws a wine from that region.
  useEffect(() => {
    if (region && exercise && region !== exercise.regionKey) startWine(region);
  }, [region]);

  if (!exercise) {
    return <div style={{ color: "#B8B0A0", fontSize: "13px" }}>No grape profiles to taste yet.</div>;
  }

  const fields = structureFields(exercise);
  const checked = result !== null;
  const canCheck = fields.every((f) => given[f]) && given.aromas.length > 0;
  const correctAromas = new Set(exercise.profile.aromas);

  const setLevel = (field, level) => {
    if (checked) return;
    setGiven((g) => ({ ...g, [field]: level }));
  };

  const toggleAroma = (word) => {
    if (checked) return;
    setGiven((g) => ({
      ...g,
      aromas: g.aromas.includes(word) ? g.aromas.filter((a) => a !== word) : [...g.aromas, word]
    }));
  };

  const check = () => {
    if (checked || !canCheck) return;
    const marked = markExercise(exercise, given);
    setResult(marked);
    setSession((s) => ({ wines: s.wines + 1, fullyRight: s.fullyRight + (marked.allRight ? 1 : 0) }));
    const next = { wines: allTime.wines + 1, fullyRight: allTime.fullyRight + (marked.allRight ? 1 : 0) };
    setAllTime(next);
    saveTasteResults(next);
  };

  const nextWine = () => startWine(null);

  const clearAllTime = () => {
    setAllTime(resetTasteResults());
    setSession({ wines: 0, fullyRight: 0 });
  };

  const quietButton = {
    background: "none", border: "1px solid #3a3530", color: "#B8B0A0",
    padding: "4px 10px", borderRadius: "4px", fontSize: "11px", cursor: "pointer",
    transition: "all 0.15s"
  };

  const levelStyle = (field, level) => {
    let bg = "#1E1E1E";
    let border = "1px solid #3a3530";
    let color = "#D5D0C4";
    if (checked) {
      const f = result.fields[field];
      if (level === f.expected) { bg = "#1a3a2a"; border = "1px solid #4a7a4a"; color = "#7BC47B"; }
      else if (level === f.given) { bg = "#3a1a1a"; border = "1px solid #7a4a4a"; color = "#C47B7B"; }
    } else if (given[field] === level) {
      bg = "#2a2520"; border = "1px solid #C4A962"; color = "#E8E4D9";
    }
    return {
      flex: 1, padding: "10px 8px", background: bg, border, borderRadius: "8px", color,
      fontSize: "13px", cursor: checked ? "default" : "pointer", transition: "all 0.2s"
    };
  };

  const aromaStyle = (word) => {
    const picked = given.aromas.includes(word);
    let bg = "#1E1E1E";
    let border = "1px solid #3a3530";
    let color = "#D5D0C4";
    if (checked) {
      const right = correctAromas.has(word);
      if (picked && right) { bg = "#1a3a2a"; border = "1px solid #4a7a4a"; color = "#7BC47B"; }
      else if (picked && !right) { bg = "#3a1a1a"; border = "1px solid #7a4a4a"; color = "#C47B7B"; }
      else if (!picked && right) { bg = "#1E1E1E"; border = "1px solid #C4A962"; color = "#C4A962"; }
      else { color = "#7a7268"; }
    } else if (picked) {
      bg = "#2a2520"; border = "1px solid #C4A962"; color = "#E8E4D9";
    }
    return {
      padding: "10px 8px", background: bg, border, borderRadius: "8px", color,
      fontSize: "13px", cursor: checked ? "default" : "pointer", transition: "all 0.2s", textAlign: "center"
    };
  };

  const rowVerdict = (field) => {
    if (!checked) return null;
    const f = result.fields[field];
    return (
      <span style={{ fontSize: "12px", color: f.right ? "#7BC47B" : "#C47B7B" }}>
        {f.right ? "✓ Right" : `✗ It is ${LEVEL_LABEL[f.expected].toLowerCase()}`}
      </span>
    );
  };

  const aromaVerdict = () => {
    if (!checked) return null;
    const a = result.aromas;
    const parts = [`${a.correctPicked} of ${exercise.profile.aromas.length} right`];
    if (a.wrongPicked > 0) parts.push(`${a.wrongPicked} wrong`);
    if (a.missed > 0) parts.push(`${a.missed} missed`);
    return (
      <span style={{ fontSize: "12px", color: a.right ? "#7BC47B" : "#C47B7B" }}>
        {a.right ? "✓ " : "✗ "}{parts.join(" · ")}
      </span>
    );
  };

  const sectionLabel = {
    fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.12em", color: "#C4A962"
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
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
          All time: {allTime.fullyRight} of {allTime.wines} wines fully right
        </span>
        <span style={{ fontSize: "12px", color: "#C4A962" }}>
          {session.fullyRight} of {session.wines} wines fully right
        </span>
        <button onClick={clearAllTime} title="Forget every wine you have tasted so far"
          style={{ ...quietButton, color: "#7a7268", borderColor: "#2a2620" }}>Clear results</button>
      </div>

      {/* Badge */}
      <div style={{
        display: "inline-flex",
        alignSelf: "flex-start",
        padding: "3px 10px",
        borderRadius: "4px",
        fontSize: "10px",
        textTransform: "uppercase",
        letterSpacing: "0.1em",
        marginBottom: "10px",
        background: exercise.colour === "red" ? "#3a1a2a" : "#3a3a1a",
        color: exercise.colour === "red" ? "#C47B9B" : "#C4C47B"
      }}>
        {exercise.colour === "red" ? "🍷 Red wine" : "🥂 White wine"}
      </div>

      {/* The wine */}
      <div style={{
        fontSize: "18px",
        color: "#E8E4D9",
        lineHeight: "1.5",
        marginBottom: "4px",
        fontFamily: "'Cormorant Garamond', Georgia, serif",
        fontWeight: "600"
      }}>
        You are tasting: <span style={{ color: "#C4A962" }}>{exercise.grapeName}</span> from {exercise.regionName}
      </div>
      <div style={{ fontSize: "11px", color: "#7a7268", marginBottom: "16px", lineHeight: "1.5" }}>
        Set the structure and tick the aromas you expect, then press Check. This is the exam's Systematic Approach to Tasting (SAT), cut down to what this app knows.
      </div>

      {/* Structure rows */}
      <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "16px" }}>
        {fields.map((field) => (
          <div key={field}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "6px" }}>
              <span style={sectionLabel}>{FIELD_LABEL[field]}</span>
              {rowVerdict(field)}
            </div>
            <div style={{ display: "flex", gap: "8px" }}>
              {LEVELS.map((level) => (
                <button key={level} onClick={() => setLevel(field, level)} aria-pressed={given[field] === level} style={levelStyle(field, level)}>
                  {LEVEL_LABEL[level]}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Aromas */}
      <div style={{ marginBottom: "16px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "6px" }}>
          <span style={sectionLabel}>Aromas · pick the ones you expect</span>
          {aromaVerdict()}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: "8px" }}>
          {exercise.aromaChoices.map((word) => (
            <button key={word} onClick={() => toggleAroma(word)} aria-pressed={given.aromas.includes(word)} style={aromaStyle(word)}>
              {word}
            </button>
          ))}
        </div>
        {checked && (
          <div style={{ fontSize: "11px", color: "#7a7268", marginTop: "8px", lineHeight: "1.5" }}>
            Green: right. Red: not this grape. Gold outline: one you missed.
          </div>
        )}
      </div>

      {/* Check */}
      {!checked && (
        <button
          onClick={check}
          disabled={!canCheck}
          style={{
            padding: "12px",
            background: canCheck ? "#C4A962" : "#2a2520",
            color: canCheck ? "#1a1a1a" : "#7a7268",
            border: "none",
            borderRadius: "8px",
            fontSize: "13px",
            fontWeight: "600",
            cursor: canCheck ? "pointer" : "default",
            letterSpacing: "0.05em"
          }}
        >
          {canCheck ? "Check" : "Set every row and pick at least one aroma"}
        </button>
      )}

      {/* Result and explanation */}
      {checked && (
        <>
          <div style={{
            fontSize: "13px",
            padding: "12px 16px",
            borderRadius: "8px",
            marginBottom: "16px",
            background: result.allRight ? "#1a3a2a" : "#1E1E1E",
            border: result.allRight ? "1px solid #4a7a4a" : "1px solid #3a3530",
            color: result.allRight ? "#7BC47B" : "#B8B0A0"
          }}>
            {result.allRight ? "✓ Fully right. " : ""}
            {result.score} of {result.outOf} right
            {result.allRight ? "" : " — the aromas count as one point when you pick at least half of them and no more than one wrong word."}
          </div>

          <div style={{
            background: "linear-gradient(135deg, #1a1a1a 0%, #2a1f1f 100%)",
            borderRadius: "10px",
            padding: "14px 16px",
            marginBottom: "16px",
            border: "1px solid #3a2f2f"
          }}>
            <div style={{ ...sectionLabel, marginBottom: "6px" }}>Why</div>
            <div style={{ fontSize: "13px", color: "#D5D0C4", lineHeight: "1.6" }}>
              {explain(exercise)}
            </div>
          </div>

          <button
            onClick={nextWine}
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
            Next wine →
          </button>
        </>
      )}
    </div>
  );
};
