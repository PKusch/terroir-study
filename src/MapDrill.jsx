import { useState, useEffect, useRef } from "react";
import { REGIONS, COUNTRIES } from "./data/regions.js";
import { MAPS } from "./maps.jsx";
import { countryOf, pathFor } from "./data/projections.js";
import { quizShortcut } from "./shortcuts.js";
import {
  DRILLS,
  ROUND_LENGTH,
  regionKeys,
  placeTargets,
  buildFindRound,
  buildNameRound,
  buildPlaceRound,
  placeView,
  targetPoint,
  judgePlacement,
  summariseRound
} from "./mapdrill.js";

const serif = "'Cormorant Garamond', Georgia, serif";
const gold = "#C4A962";
const green = "#7BC47B";
const red = "#C47B7B";

const card = { background: "#1E1E1E", border: "1px solid #3a3530", borderRadius: "10px", padding: "14px 16px" };
const label = { fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.12em", color: gold, marginBottom: "8px" };
const primaryButton = {
  padding: "12px", background: gold, color: "#1a1a1a", border: "none", borderRadius: "8px",
  fontSize: "13px", fontWeight: "600", cursor: "pointer", letterSpacing: "0.05em"
};
const choiceButton = (on) => ({
  textAlign: "left", padding: "10px 14px", borderRadius: "8px", fontSize: "13px", lineHeight: "1.5",
  cursor: "pointer", fontFamily: "inherit",
  background: on ? "#2a2520" : "#1E1E1E",
  border: on ? `1px solid ${gold}` : "1px solid #3a3530",
  color: on ? "#E8E4D9" : "#D5D0C4"
});

// How many questions a drill can offer for a country.
const poolSize = (drill, country) => (drill === "place" ? placeTargets(country).length : regionKeys(country).length);

const newRound = (drill, country) =>
  drill === "find" ? buildFindRound(country) : drill === "name" ? buildNameRound(country) : buildPlaceRound(country);

export const MapDrill = ({ onStudyRegion }) => {
  const [phase, setPhase] = useState("setup"); // setup | running | done
  const [drill, setDrill] = useState("find");
  const [country, setCountry] = useState("All");
  const [round, setRound] = useState([]);
  const [index, setIndex] = useState(0);
  const [results, setResults] = useState([]);
  // What happened on the question on screen, or null before an answer:
  //   find: { clicked }   name: { picked }   place: { click, result, distance }
  const [answer, setAnswer] = useState(null);

  const available = poolSize(drill, country);
  const length = Math.min(ROUND_LENGTH, available);

  const start = () => {
    const next = newRound(drill, country);
    if (next.length === 0) return;
    setRound(next);
    setIndex(0);
    setResults([]);
    setAnswer(null);
    setPhase("running");
  };

  // The question on screen, in one shape for all three drills.
  const item = phase === "running" ? round[index] : null;
  const regionKey = item ? (drill === "name" ? item.key : drill === "place" ? item.region : item) : null;

  const record = (correct, labelText, key) => setResults((r) => [...r, { key, label: labelText, correct }]);

  // find: a click on a region of the map
  const onRegionClick = (clicked) => {
    if (drill !== "find" || answer) return;
    setAnswer({ clicked });
    record(clicked === item, REGIONS[item].name, item);
  };

  // name: one of the four options
  const pick = (i) => {
    if (drill !== "name" || answer) return;
    setAnswer({ picked: i });
    record(i === item.answer, REGIONS[item.key].name, item.key);
  };

  // place: a click anywhere on the zoomed map, turned into the map's own units
  const mapBox = useRef(null);
  const onPlaceClick = (e) => {
    if (drill !== "place" || answer || !mapBox.current) return;
    const svg = mapBox.current.querySelector("svg");
    const m = svg?.getScreenCTM();
    if (!m) return;
    const p = svg.createSVGPoint();
    p.x = e.clientX;
    p.y = e.clientY;
    const at = p.matrixTransform(m.inverse());
    const { view } = placeView(item.region);
    const judged = judgePlacement([at.x, at.y], targetPoint(item), view.w);
    setAnswer({ click: [at.x, at.y], ...judged });
    record(judged.result === "hit", `${item.name} (${REGIONS[item.region].name})`, item.region);
  };

  const next = () => {
    if (index + 1 >= round.length) {
      setPhase("done");
    } else {
      setIndex(index + 1);
      setAnswer(null);
    }
  };

  // After an answer, focus moves to Next so Enter carries on.
  const nextButton = useRef(null);
  useEffect(() => {
    if (answer) nextButton.current?.focus();
  }, [answer]);

  // Keys: 1 to 4 answer a "name it" question; Enter or N moves on.
  useEffect(() => {
    if (phase !== "running") return undefined;
    const onKey = (e) => {
      const action = quizShortcut(
        { key: e.key, ctrlKey: e.ctrlKey, metaKey: e.metaKey, altKey: e.altKey,
          targetTag: e.target?.tagName, targetRole: e.target?.getAttribute?.("role") },
        { optionCount: drill === "name" && item ? item.options.length : 0, showAnswer: Boolean(answer), isMapQ: drill !== "name" }
      );
      if (!action) return;
      e.preventDefault();
      if (action.type === "option") pick(action.index);
      else next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  // ── Set up ────────────────────────────────────────────────────────────────
  if (phase === "setup") {
    return (
      <div>
        <div style={{ ...card, marginBottom: "16px" }}>
          <div style={label}>Map drill</div>
          <p style={{ fontSize: "13px", color: "#D5D0C4", lineHeight: "1.6" }}>
            Learn where things are. Each round is {ROUND_LENGTH} questions, and at the end you see what you missed,
            with a link to study it. Nothing here changes your quiz progress.
          </p>
        </div>

        <div style={label}>Drill</div>
        <div style={{ display: "flex", gap: "8px", marginBottom: "16px", flexWrap: "wrap" }}>
          {DRILLS.map((d) => (
            <button key={d.id} aria-pressed={drill === d.id} onClick={() => setDrill(d.id)} style={{
              ...choiceButton(drill === d.id), flex: "1 1 150px", textAlign: "center"
            }}>
              <div style={{ fontWeight: "600" }}>{d.label}</div>
              <div style={{ fontSize: "11px", color: "#8B7355" }}>{d.note}</div>
            </button>
          ))}
        </div>

        <div style={label}>Country</div>
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
            ? "There is nothing to drill for this country yet."
            : length < ROUND_LENGTH
              ? `This country only has ${available}, so the round will have ${length}.`
              : `${ROUND_LENGTH} questions drawn at random from ${available}.`}
          {drill === "place" ? " This drill is answered by clicking or tapping the map." : ""}
        </div>

        <button onClick={start} disabled={available === 0} style={{ ...primaryButton, width: "100%", opacity: available === 0 ? 0.4 : 1 }}>
          Start a round
        </button>
      </div>
    );
  }

  // ── Results ───────────────────────────────────────────────────────────────
  if (phase === "done") {
    const s = summariseRound(results);
    return (
      <div>
        <div style={{ ...card, marginBottom: "16px", textAlign: "center" }}>
          <div role="status" style={{ fontFamily: serif, fontSize: "26px", fontWeight: "600", color: s.correct === s.total ? green : gold }}>
            {s.correct} of {s.total}
          </div>
          <div style={{ fontSize: "12px", color: "#B8B0A0", marginTop: "4px" }}>
            {s.percent}% · {DRILLS.find((d) => d.id === drill).label}{country === "All" ? "" : ` · ${country}`}
          </div>
        </div>

        {s.missed.length > 0 && (
          <div style={{ ...card, marginBottom: "16px" }}>
            <div style={label}>To go over</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
              {s.missed.map((m, i) => (
                <button key={i} onClick={() => onStudyRegion && onStudyRegion(m.key)} title="Open this region in Explore" style={{
                  display: "flex", justifyContent: "space-between", width: "100%", fontSize: "12px", lineHeight: "1.5",
                  background: "none", border: "none", padding: "2px 0", cursor: onStudyRegion ? "pointer" : "default",
                  color: "#D5D0C4", textAlign: "left", fontFamily: "inherit"
                }}>
                  <span>{m.label}</span>
                  <span style={{ color: "#8B7355", fontSize: "10px" }}>study →</span>
                </button>
              ))}
            </div>
          </div>
        )}

        <div style={{ display: "flex", gap: "8px" }}>
          <button onClick={start} style={{ ...primaryButton, flex: 1 }}>Another round</button>
          <button onClick={() => setPhase("setup")} style={{ ...primaryButton, flex: 1, background: "transparent", color: gold, border: `1px solid ${gold}` }}>
            Change drill
          </button>
        </div>
      </div>
    );
  }

  // ── Running ───────────────────────────────────────────────────────────────
  const rightSoFar = results.filter((r) => r.correct).length;
  const CountryMap = MAPS[countryOf(regionKey)];
  const region = REGIONS[regionKey];
  const last = results[results.length - 1];

  // What to draw on top of the map once an answer is in.
  let overlay = null;
  let activeRegion = null;
  let viewBox;
  if (drill === "find") {
    activeRegion = answer ? item : null;
    if (answer && answer.clicked !== item && pathFor(answer.clicked)) {
      overlay = <path d={pathFor(answer.clicked).d} fill="none" stroke={red} strokeWidth="2.5" strokeLinejoin="round" style={{ pointerEvents: "none" }} />;
    }
  } else if (drill === "name") {
    activeRegion = item.key;
  } else {
    const { view } = placeView(item.region);
    viewBox = view.box;
    activeRegion = item.region;
    if (answer) {
      const [tx, ty] = targetPoint(item);
      const r = view.w / 90;
      const colour = answer.result === "hit" ? green : answer.result === "close" ? gold : red;
      overlay = (
        <g style={{ pointerEvents: "none" }}>
          <line x1={answer.click[0]} y1={answer.click[1]} x2={tx} y2={ty} stroke={colour} strokeWidth={r * 0.5} strokeDasharray={`${r},${r}`} />
          <circle cx={answer.click[0]} cy={answer.click[1]} r={r * 0.8} fill={colour} />
          <circle cx={tx} cy={ty} r={r} fill="#1a1a1a" stroke={green} strokeWidth={r * 0.6} />
          <text x={tx + r * 1.8} y={ty + view.w / 90} fontSize={view.w / 30} fill="#1a1a1a" fontFamily={serif} fontWeight="600"
            style={{ paintOrder: "stroke", stroke: "#E8E4D9", strokeWidth: view.w / 120, strokeLinejoin: "round" }}>
            {item.name}
          </text>
        </g>
      );
    }
  }

  const prompt =
    drill === "find" ? (<>Click <strong style={{ color: region.color }}>{region.name}</strong> on the map</>)
    : drill === "name" ? "Which region is lit up?"
    : (<>Click where <strong style={{ color: region.color }}>{item.name}</strong> is, in {region.name}</>);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#B8B0A0", marginBottom: "10px" }}>
        <span>{DRILLS.find((d) => d.id === drill).label} · question {index + 1} of {round.length}</span>
        <span>{rightSoFar} right</span>
      </div>

      <div style={{ fontFamily: serif, fontSize: "17px", fontWeight: "600", color: "#E8E4D9", lineHeight: "1.5", marginBottom: "4px" }}>
        {prompt}
      </div>
      <div style={{ fontSize: "10px", color: "#8B7355", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "10px" }}>
        {drill === "place" ? "Zoomed map" : countryOf(regionKey)}
      </div>

      <div ref={mapBox} onClick={drill === "place" ? onPlaceClick : undefined} style={{
        maxWidth: "400px", margin: "0 auto 12px", cursor: drill === "place" && !answer ? "crosshair" : "default"
      }}>
        <CountryMap activeRegion={activeRegion} onRegionClick={onRegionClick} quizMode viewBox={viewBox}>
          {overlay}
        </CountryMap>
      </div>

      {drill === "name" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "12px" }}>
          {item.options.map((key, i) => {
            const chosen = answer && answer.picked === i;
            const right = answer && i === item.answer;
            return (
              <button key={key} onClick={() => pick(i)} style={{
                ...choiceButton(false),
                ...(answer && right ? { background: "#1a3a2a", border: "1px solid #4a7a4a", color: green } : {}),
                ...(answer && chosen && !right ? { background: "#3a1a1a", border: "1px solid #7a4a4a", color: red } : {}),
                cursor: answer ? "default" : "pointer"
              }}>
                <span style={{ color: "#8B7355", marginRight: "8px" }}>{i + 1}</span>
                {REGIONS[key].name} <span style={{ color: "#8B7355", fontSize: "11px" }}>· {countryOf(key)}</span>
              </button>
            );
          })}
        </div>
      )}

      {answer && (
        <div role="status" style={{ ...card, marginBottom: "12px", fontSize: "13px", lineHeight: "1.6",
          color: last.correct ? green : drill === "place" && answer.result === "close" ? gold : red }}>
          {drill === "find" && (last.correct ? `Correct, that is ${region.name}.` : `That was ${REGIONS[answer.clicked]?.name ?? "somewhere else"}. ${region.name} is lit up.`)}
          {drill === "name" && (last.correct ? `Correct, it is ${region.name}.` : `Not quite. It is ${region.name}.`)}
          {drill === "place" && (answer.result === "hit" ? `Right on it: ${item.name}.`
            : answer.result === "close" ? `Close, but not quite. ${item.name} is where the black dot is.`
            : `Missed. ${item.name} is where the black dot is.`)}
        </div>
      )}

      {answer && (
        <button ref={nextButton} onClick={next} style={{ ...primaryButton, width: "100%" }}>
          {index + 1 >= round.length ? "See the result" : "Next →"}
        </button>
      )}
      {!answer && drill === "name" && (
        <div style={{ fontSize: "11px", color: "#7a7268" }}>Keys: 1 to {item.options.length} to answer, then Enter for the next one.</div>
      )}
    </div>
  );
};
