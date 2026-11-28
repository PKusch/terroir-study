import { PLACES } from "./data.js";
import { Figure, ink, COLD, WARM } from "./Figure.jsx";

// The warmest month's average day high and night low for each place, drawn
// as a bar from night to day: the length of the bar is the diurnal range.
const W = 640, L = 170, R = 30;
const T0 = 10, T1 = 35;
const x = (t) => L + ((t - T0) * (W - L - R)) / (T1 - T0);

export const DayNight = () => (
  <Figure
    title="Day and night: diurnal range"
    idea="The diurnal range is the difference between the day's high and the night's low. Warm days build sugar and ripe flavour; cool nights slow the vine down, which helps the grape keep its acidity and fresh aromas."
    remember="A wide diurnal range is a big help in hot places: the grape gets ripe in the day and stays fresh at night. Of these four, high, dry Mendoza has the widest."
    source={{ note: "Average high and low of each place's warmest month, 1991–2020, from its Wikipedia climate table." }}>
    <svg viewBox={`0 0 ${W} ${PLACES.length * 44 + 36}`} role="img"
      aria-label={PLACES.map((p) => `${p.name}: ${p.night} to ${p.day} degrees, a range of ${(p.day - p.night).toFixed(1)}`).join("; ")}
      style={{ width: "100%", height: "auto", display: "block", background: "#101418", borderRadius: "8px" }}>
      <defs>
        <linearGradient id="dnBar" x1="0" x2="1">
          <stop offset="0" stopColor={COLD} />
          <stop offset="1" stopColor={WARM} />
        </linearGradient>
      </defs>
      {[10, 15, 20, 25, 30, 35].map((t) => (
        <g key={t}>
          <line x1={x(t)} x2={x(t)} y1="10" y2={PLACES.length * 44 + 10} stroke="#2a2a2e" />
          <text x={x(t)} y={PLACES.length * 44 + 28} fontSize="11" fill={ink.faint} textAnchor="middle">{t} °C</text>
        </g>
      ))}
      {PLACES.map((p, i) => {
        const cy = 32 + i * 44;
        return (
          <g key={p.id} fontFamily="'Source Sans 3', sans-serif">
            <text x="10" y={cy - 2} fontSize="13" fill={ink.head}>{p.name}</text>
            <text x="10" y={cy + 13} fontSize="11" fill={ink.faint}>{p.warmest}</text>
            <rect x={x(p.night)} y={cy - 9} width={x(p.day) - x(p.night)} height="18" rx="9" fill="url(#dnBar)" />
            <text x={x(p.night) - 6} y={cy + 4} fontSize="11" fill={COLD} textAnchor="end">night {p.night}°</text>
            <text x={x(p.day) + 6} y={cy + 4} fontSize="11" fill={WARM}>day {p.day}°</text>
            <text x={(x(p.night) + x(p.day)) / 2} y={cy + 4} fontSize="12" fontWeight="700" fill="#1a1a1a" textAnchor="middle">{(p.day - p.night).toFixed(1)}°</text>
          </g>
        );
      })}
    </svg>
  </Figure>
);
