// Letter-monogram avatar used for chapter authors.
// We don't have photo permissions for every contributor, so we render
// a consistent stylised initial badge instead of fabricating headshots.

const PALETTE = [
  ["#D35400", "#7a2d00"],
  ["#8a4b2f", "#3d1d10"],
  ["#5a3d2a", "#1e140d"],
  ["#7a5036", "#2a1810"],
  ["#c47a4a", "#5a3520"],
  ["#a96b3a", "#4a2a15"],
];

function hashName(name) {
  let h = 0;
  for (let i = 0; i < name.length; i++) {
    h = (h * 31 + name.charCodeAt(i)) >>> 0;
  }
  return h;
}

function initialsOf(name) {
  const parts = name
    .replace(/Prof\.|Dr\./g, "")
    .trim()
    .split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export default function Monogram({ name, size = 40, className = "" }) {
  const [a, b] = PALETTE[hashName(name) % PALETTE.length];
  const init = initialsOf(name);
  return (
    <span
      className={`inline-flex items-center justify-center rounded-full font-display font-semibold text-cream shrink-0 ${className}`}
      style={{
        width: size,
        height: size,
        fontSize: size * 0.38,
        background: `linear-gradient(135deg, ${a} 0%, ${b} 100%)`,
        border: "1px solid rgba(255,255,255,0.08)",
      }}
      title={name}
      aria-label={name}
    >
      {init}
    </span>
  );
}
