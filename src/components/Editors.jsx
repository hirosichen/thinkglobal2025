const committee = [
  {
    name: "Prof. Hung-Yi Chen",
    role: "Conference Chair",
    area: "Founder & CEO, Meta Intelligence",
    img: "/img/speakers/hychen.jpg",
  },
  {
    name: "Prof. Nafis Alam",
    role: "Programme Co-chair",
    area: "Head of School of Business, Monash University Malaysia",
    img: "/img/speakers/nalam.jpg",
  },
  {
    name: "Pawee Jenweeranon",
    role: "Programme Co-chair",
    area: "Data Governance & Regulation Expert, The World Bank Group",
    img: "/img/speakers/paweejen.jpg",
  },
];

export default function Committee() {
  return (
    <section className="relative py-20 md:py-28 bg-ink">
      <div className="wrap">
        <div className="text-center mb-14">
          <p className="eyebrow mb-4 reveal">Organizing Committee</p>
          <h2 className="section-title reveal">
            The team curating
            <br /> Think Global 2025.
          </h2>
          <p className="section-sub mx-auto mt-5 reveal">
            A small editorial team across academia, practice, and industry
            shapes every session.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-line border border-line max-w-4xl mx-auto">
          {committee.map((e, i) => (
            <div
              key={e.name}
              className="bg-ink p-6 md:p-8 text-center reveal"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="aspect-square rounded-full mx-auto w-24 md:w-32 mb-5 border border-line overflow-hidden">
                <img
                  src={e.img}
                  alt={e.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="font-display text-lg md:text-xl text-cream">
                {e.name}
              </div>
              <div className="text-[10px] md:text-xs tracking-[0.15em] uppercase text-orange mt-1">
                {e.role}
              </div>
              <div className="text-xs md:text-sm text-muted mt-2">{e.area}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
