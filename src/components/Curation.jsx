import { curationPillars } from "../data/content";

export default function Curation() {
  return (
    <section className="relative py-20 md:py-28 bg-ink">
      <div className="wrap">
        <div className="text-center mb-14">
          <p className="eyebrow mb-4 reveal">Curation first</p>
          <h2 className="section-title reveal">We focus on Curation.</h2>
          <p className="section-sub mx-auto mt-5 reveal">
            We turn away more attendees than we accept. Quality of the room is
            the product.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-line">
          {curationPillars.map((p, i) => (
            <div
              key={p.title}
              className="bg-ink p-8 md:p-10 reveal group"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="font-display italic text-orange text-base mb-6">
                0{i + 1}
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-cream leading-tight whitespace-pre-line">
                {p.title}
              </h3>
              <div className="my-6 w-12 h-px bg-orange/60" />
              <p className="text-muted leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
