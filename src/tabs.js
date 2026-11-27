// ─── Tabs and links to them ──────────────────────────────────────────────────
// Each tab has an id that can go after # in the address, so a link such as
// .../terroir-study/#written opens that tab straight away.
export const TAB_IDS = ["home", "explore", "connect", "quiz", "taste", "exam", "drill", "styles", "principles", "written"];

// The tab a link asks for, or the home page when it names none we know.
export function tabFromHash(hash) {
  const id = String(hash ?? "").replace(/^#/, "").toLowerCase();
  return TAB_IDS.includes(id) ? id : "home";
}

// What the browser tab and a bookmark say on each tab.
const TAB_NAMES = {
  home: "Home", explore: "Explore", connect: "Connect", quiz: "Quiz", taste: "Taste",
  exam: "Mock exam", drill: "Map drill", styles: "Styles", principles: "Principles", written: "Written answers"
};
export function tabTitle(id) {
  const name = TAB_NAMES[id];
  return name && id !== "home" ? `${name} · Terroir Study | WSET Level 3` : "Terroir Study | WSET Level 3";
}
