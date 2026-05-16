import { bigStats } from "../data/content";

export default function Stats() {
  return (
    <section className="relative py-20 md:py-28 bg-ink border-t border-line">
      <div className="wrap">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-line border border-line">
          {bigStats.map((s, i) => (
            <div
              key={s.label}
              className="bg-ink p-8 md:p-10 text-center reveal"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="font-display text-5xl md:text-6xl font-bold text-cream leading-none">
                {s.value}
              </div>
              <div className="mt-3 text-xs md:text-sm tracking-[0.2em] uppercase text-muted">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
