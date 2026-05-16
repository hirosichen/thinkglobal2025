export default function Value() {
  return (
    <section className="relative py-20 md:py-28 bg-ink">
      <div className="wrap text-center">
        <p className="eyebrow mb-4 reveal">Why come</p>
        <h2 className="section-title reveal mx-auto">
          <em className="not-italic text-orange">4 hours</em> that replace
          <br />
          <em className="not-italic text-orange">a year</em> of AI panels.
        </h2>
        <p className="section-sub mx-auto mt-5 reveal">
          One floor at Tokyo Station. Eight global voices across academia,
          finance, law, and policy — distilled into a single focused afternoon
          on what generative AI is actually doing.
        </p>

        <div className="grid md:grid-cols-3 gap-5 mt-14 text-left">
          {[
            {
              k: "01",
              t: "Cross-jurisdiction depth",
              b: "Japan, Malaysia, Taiwan, Thailand, and the multilateral world — one stage, one conversation.",
            },
            {
              k: "02",
              t: "Working professionals",
              b: "Active deans, partners at top law firms, and a working founder — not retired pundits.",
            },
            {
              k: "03",
              t: "Single-room format",
              b: "Three keynotes, one panel, one lunch. Everything happens on the 4th floor. No side rooms, no parallel tracks.",
            },
          ].map((c, i) => (
            <div
              key={c.k}
              className="border border-line bg-card rounded-xl p-7 reveal"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className="font-display italic text-orange text-2xl mb-4">
                {c.k}
              </div>
              <h3 className="font-display text-2xl font-semibold text-cream mb-3">
                {c.t}
              </h3>
              <p className="text-muted leading-relaxed">{c.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
