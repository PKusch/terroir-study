// ─── Zooming into a region ───────────────────────────────────────────────────
// A region's polygon is already in the map's own units, so zooming in is a
// smaller view box around it, padded, and stretched to the map's aspect ratio
// so nothing is squashed. Pure functions; tested without a browser.

export const MAP_W = 500;
export const MAP_H = 420;

/** Bounding box of an SVG path made of M/L points (as all the region polygons are). */
export function bboxOfPath(d) {
  const nums = d.match(/-?\d+(?:\.\d+)?/g).map(Number);
  const xs = nums.filter((_, i) => i % 2 === 0);
  const ys = nums.filter((_, i) => i % 2 === 1);
  return { x: Math.min(...xs), y: Math.min(...ys), w: Math.max(...xs) - Math.min(...xs), h: Math.max(...ys) - Math.min(...ys) };
}

/** A view box string around the polygon: padded by `pad` × its size, at least
 *  `minW` units wide, and in the map's aspect ratio. */
export function zoomViewBox(d, pad = 0.6, minW = 80, extraPoints = []) {
  const b = bboxOfPath(d);
  // Markers that lie outside the shape (a country's far-flung districts)
  // widen the box so they are on screen too.
  for (const [x, y] of extraPoints) {
    const x1 = Math.max(b.x + b.w, x); const y1 = Math.max(b.y + b.h, y);
    b.x = Math.min(b.x, x); b.y = Math.min(b.y, y);
    b.w = x1 - b.x; b.h = y1 - b.y;
  }
  let w = Math.max(b.w * (1 + 2 * pad), minW);
  let h = Math.max(b.h * (1 + 2 * pad), minW * MAP_H / MAP_W);
  if (w / h > MAP_W / MAP_H) h = w * MAP_H / MAP_W; else w = h * MAP_W / MAP_H;
  const cx = b.x + b.w / 2;
  const cy = b.y + b.h / 2;
  return { x: cx - w / 2, y: cy - h / 2, w, h, box: `${r(cx - w / 2)} ${r(cy - h / 2)} ${r(w)} ${r(h)}` };
}

/** Is a projected point inside the polygon's box, allowing `slack` × its size outside? */
export function nearPath(d, [x, y], slack = 0.5) {
  const b = bboxOfPath(d);
  const sx = Math.max(b.w, 6) * slack;
  const sy = Math.max(b.h, 6) * slack;
  return x >= b.x - sx && x <= b.x + b.w + sx && y >= b.y - sy && y <= b.y + b.h + sy;
}

const r = (v) => Math.round(v * 10) / 10;
