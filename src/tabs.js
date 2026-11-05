// ─── Tabs and links to them ──────────────────────────────────────────────────
// Each tab has an id that can go after # in the address, so a link such as
// .../terroir-study/#written opens that tab straight away.
export const TAB_IDS = ["explore", "connect", "quiz", "taste", "exam", "drill", "styles", "written"];

// The tab a link asks for, or "explore" when it names none we know.
export function tabFromHash(hash) {
  const id = String(hash ?? "").replace(/^#/, "").toLowerCase();
  return TAB_IDS.includes(id) ? id : "explore";
}
