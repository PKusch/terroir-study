// ─── The WSET Level 3 syllabus, and where to study each part here ────────────
// The outline follows WSET's Level 3 Award in Wines Specification (Issue 2,
// 2022, the current issue): two units and six learning outcomes. Titles are
// shortened in this app's own words; the marks are from the specification's
// examination guidance (multiple choice by learning outcome, and written marks).
// Each part points at the screens that cover it, and says plainly when the app
// covers it only in part.
export const SPEC_SOURCE = {
  title: "WSET Level 3 Award in Wines Specification, Issue 2 (2022)",
  url: "https://www.wsetglobal.com/media/11731/wset_l3wines_specification_en_highres_may2022_issue2.pdf"
};
export const SAT_SOURCE = {
  title: "WSET Level 3 Systematic Approach to Tasting Wine (Issue 2, 2022)",
  url: "https://www.wsetglobal.com/media/11766/wset_l3wines_sat_en_may2022_issue2.pdf"
};

// links: [label, tab, mode inside the tab (optional)]
export const SYLLABUS = [
  {
    id: "lo1",
    unit: "Unit 1 · Learning outcome 1",
    title: "Making wine: vineyard and winery",
    covers: "Natural factors in the vineyard (the vine, its growth cycle, climate, weather, soil), human factors in the vineyard (managing the vine, hazards, pests and diseases), and the winery (common elements, white, red, rosé and sweet winemaking, maturation, blending, clarification, stabilisation, packaging and closures).",
    marks: "8 of the 50 multiple-choice marks, and part of every written question",
    links: [["Principles", "principles"], ["Connect", "connect"]],
    status: "covered"
  },
  {
    id: "lo2",
    unit: "Unit 1 · Learning outcome 2",
    title: "The still wines of the world",
    covers: "The principal regions of France, Germany, Austria, Hungary (Tokaj), Greece, Italy, Spain, Portugal, the USA, Canada, Chile, Argentina, South Africa, Australia and New Zealand, and the grapes, natural and human factors, law and commerce behind their style, quality and price.",
    marks: "28 of the 50 multiple-choice marks, and 70 of the 100 written marks",
    links: [["Explore", "explore"], ["Quiz", "quiz"], ["Map drill", "drill"], ["Written", "written"], ["Wine law and price", "principles"]],
    status: "covered"
  },
  {
    id: "lo3",
    unit: "Unit 1 · Learning outcome 3",
    title: "Sparkling wines",
    covers: "The principal sparkling wines, and the traditional, transfer, ancestral, tank and Asti methods, and carbonation.",
    marks: "5 multiple-choice marks; sparkling and fortified share 20 written marks",
    links: [["Styles › Sparkling", "styles"], ["Quiz › Sparkling", "quiz"]],
    status: "covered"
  },
  {
    id: "lo4",
    unit: "Unit 1 · Learning outcome 4",
    title: "Fortified wines",
    covers: "Port, Sherry and the fortified Muscats, and how they are made, aged and labelled.",
    marks: "5 multiple-choice marks; shares the 20 written marks with sparkling",
    links: [["Styles › Fortified", "styles"], ["Quiz › Fortified", "quiz"]],
    status: "covered"
  },
  {
    id: "lo5",
    unit: "Unit 1 · Learning outcome 5",
    title: "Advising customers: storage, service, faults, food",
    covers: "Recommending wines, storage and service, common faults, and the principles of food and wine pairing. Social and health issues are also in the syllabus.",
    marks: "4 multiple-choice marks, and 10 written marks",
    links: [["Styles › Service", "styles"], ["Styles › Food", "styles"], ["Quiz › Service", "quiz"]],
    status: "partial",
    gap: "Social and health issues (alcohol and health, sensible drinking) are not in the app yet."
  },
  {
    id: "unit2",
    unit: "Unit 2",
    title: "Tasting: the Systematic Approach to Tasting",
    covers: "Describing two still wines blind with WSET's tasting grid (appearance, nose, palate, conclusions on quality and readiness for drinking) in 30 minutes.",
    marks: "A separate tasting exam, 55% to pass",
    links: [["Taste", "taste"], ["Principles › Tasting", "principles"]],
    status: "partial",
    gap: "Nothing replaces tasting real wine. The app practises the structure, the aromas and the wording, and links to WSET's own grid, which it does not copy."
  }
];

export const EXAM_FACTS = [
  "Theory: 50 multiple-choice questions and four written questions of 25 marks, in two hours.",
  "Tasting: two still wines, blind, in 30 minutes.",
  "Each part needs 55% on its own."
];
