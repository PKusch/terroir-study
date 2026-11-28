import { COUNTRIES, REGIONS } from "./data/regions.js";
import { QUIZ_QUESTIONS } from "./data/quiz.js";
import { GRAPES } from "./data/grapes.js";
import { PLACES } from "./data/places.js";
import { SYLLABUS, SPEC_SOURCE, SAT_SOURCE, EXAM_FACTS } from "./data/syllabus.js";
import { WorldMap, WINE_COUNTRIES, regionsOf } from "./WorldMap.jsx";

// ─── Home page ───────────────────────────────────────────────────────────────
// What the app is, a world map to start from, every country and region one
// click away, and the WSET Level 3 syllabus with where to study each part.

const serif = "'Cormorant Garamond', Georgia, serif";
const gold = "#C4A962";
const card = { background: "#1f1c18", border: "1px solid #2a2520", borderRadius: "10px", padding: "16px 18px" };
const h2 = { fontFamily: serif, fontSize: "26px", fontWeight: 600, color: "#E8E4D9", margin: "0 0 6px" };
const lead = { fontSize: "14px", color: "#B8B0A0", lineHeight: 1.6, margin: "0 0 14px" };
const chip = {
  background: "none", border: "1px solid #3a3530", color: "#D5D0C4", padding: "3px 10px",
  borderRadius: "4px", fontSize: "12px", cursor: "pointer", fontFamily: "inherit"
};

// One card per country; the New World is split into its seven countries.
const COUNTRY_CARDS = [
  ...Object.keys(COUNTRIES).filter((c) => c !== "New World").map((c) => ({ name: c, country: c, regions: COUNTRIES[c] })),
  ...Object.values(WINE_COUNTRIES).filter((w) => w.region).map((w) => ({ name: w.label, country: "New World", regions: regionsOf(w) }))
];

const placeCount = Object.values(PLACES).reduce((n, p) => n + Object.keys(p ?? {}).length, 0);
const STATS = [
  [COUNTRY_CARDS.length, "countries"],
  [Object.keys(REGIONS).length, "regions"],
  [placeCount, "places on the map"],
  [QUIZ_QUESTIONS.length.toLocaleString("en-GB"), "quiz questions"],
  [Object.keys(GRAPES).length, "grapes"]
];

const STATUS = {
  covered: { label: "Covered", colour: "#7BC47B" },
  partial: { label: "Partly covered", colour: gold }
};

export const HomePage = ({ onCountry, onRegion, onMode }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: "28px", paddingBottom: "12px" }}>
    {/* Hero */}
    <section style={{ textAlign: "center", padding: "12px 0 0" }}>
      <h2 style={{ ...h2, fontSize: "34px", lineHeight: 1.15 }}>
        Learn where wine comes from, <span style={{ color: gold }}>and why</span>
      </h2>
      <p style={{ ...lead, maxWidth: "620px", margin: "8px auto 16px", fontSize: "15px" }}>
        A free, map-first study tool for the WSET Level 3 Award in Wines. Explore every region on the map, see how
        climate and soil shape the glass, and practise with quizzes, drills, tasting exercises and full mock papers.
        Nothing to install, and your progress stays in your browser.
      </p>
      <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap" }}>
        <button onClick={() => onMode("explore")} style={{
          padding: "12px 22px", background: gold, color: "#1a1a1a", border: "none", borderRadius: "8px",
          fontSize: "14px", fontWeight: 600, cursor: "pointer", letterSpacing: "0.03em"
        }}>Try it live: start exploring →</button>
        <button onClick={() => onMode("quiz")} style={{
          padding: "12px 22px", background: "none", color: gold, border: `1px solid ${gold}`, borderRadius: "8px",
          fontSize: "14px", cursor: "pointer"
        }}>Take a quiz</button>
      </div>
      <div style={{ display: "flex", gap: "18px", justifyContent: "center", flexWrap: "wrap", marginTop: "18px" }}>
        {STATS.map(([n, label]) => (
          <div key={label} style={{ textAlign: "center" }}>
            <div style={{ fontFamily: serif, fontSize: "24px", color: gold, fontWeight: 600 }}>{n}</div>
            <div style={{ fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#8B7355" }}>{label}</div>
          </div>
        ))}
      </div>
    </section>

    {/* World map */}
    <section>
      <h2 style={h2}>The wine world of WSET Level 3</h2>
      <p style={lead}>The fifteen countries in the syllabus are in gold. Click one to open its map, then any region to study it.</p>
      <WorldMap onCountry={onCountry} onRegion={onRegion} />
    </section>

    {/* Countries and regions */}
    <section>
      <h2 style={h2}>Every country and region</h2>
      <p style={lead}>Jump straight to a region's climate, soils, grapes, winemaking and style.</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "12px" }}>
        {COUNTRY_CARDS.map((c) => (
          <div key={c.name} style={card}>
            <button onClick={() => (c.country === "New World" ? onRegion(c.regions[0]) : onCountry(c.country))} style={{
              background: "none", border: "none", padding: 0, cursor: "pointer", fontFamily: serif, fontSize: "20px",
              fontWeight: 600, color: "#E8E4D9", marginBottom: "8px"
            }}>{c.name} <span style={{ color: gold, fontSize: "14px" }}>→</span></button>
            <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
              {c.regions.map((k) => (
                <button key={k} onClick={() => onRegion(k)} style={chip}>{REGIONS[k]?.name ?? k}</button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Syllabus overview */}
    <section>
      <h2 style={h2}>The syllabus, and where to study it</h2>
      <p style={lead}>
        Laid out the way WSET's own Level 3 specification is: two units and six learning outcomes, with the marks each
        carries. The titles here are this app's short versions; the specification has the full wording.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "12px" }}>
        {SYLLABUS.map((s) => (
          <div key={s.id} style={card}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "8px", alignItems: "baseline" }}>
              <div style={{ fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#8B7355" }}>{s.unit}</div>
              <div style={{ fontSize: "11px", color: STATUS[s.status].colour, whiteSpace: "nowrap" }}>{STATUS[s.status].label}</div>
            </div>
            <h3 style={{ fontFamily: serif, fontSize: "20px", color: "#E8E4D9", margin: "4px 0 6px", fontWeight: 600 }}>{s.title}</h3>
            <p style={{ fontSize: "13px", color: "#B8B0A0", lineHeight: 1.55, margin: "0 0 6px" }}>{s.covers}</p>
            <p style={{ fontSize: "12px", color: gold, margin: "0 0 8px" }}>{s.marks}</p>
            {s.gap && <p style={{ fontSize: "12px", color: "#8B7355", lineHeight: 1.5, margin: "0 0 8px" }}>Not yet: {s.gap}</p>}
            <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
              {s.links.map(([label, tab, sub]) => (
                <button key={label} onClick={() => onMode(tab, sub)} style={{ ...chip, color: gold }}>{label} →</button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div style={{ ...card, marginTop: "12px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#8B7355", marginBottom: "6px" }}>The exam</div>
        <ul style={{ margin: 0, paddingLeft: "18px", fontSize: "13px", color: "#D5D0C4", lineHeight: 1.7 }}>
          {EXAM_FACTS.map((f) => <li key={f}>{f}</li>)}
        </ul>
        <p style={{ fontSize: "12px", color: "#8B7355", margin: "8px 0 0", lineHeight: 1.5 }}>
          Sources: <a href={SPEC_SOURCE.url} target="_blank" rel="noreferrer" style={{ color: gold }}>{SPEC_SOURCE.title}</a> and{" "}
          <a href={SAT_SOURCE.url} target="_blank" rel="noreferrer" style={{ color: gold }}>{SAT_SOURCE.title}</a>.
          This app is independent and not endorsed by WSET.
        </p>
      </div>
    </section>
  </div>
);
