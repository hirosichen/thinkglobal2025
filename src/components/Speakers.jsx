import { speakers, partnerLogos } from "../data/content";

export default function Speakers() {
  return (
    <section id="speakers" className="relative py-20 md:py-28 bg-ink">
      <div className="wrap">
        <div className="text-center mb-14 reveal">
          <p className="eyebrow mb-4">Featured Speakers</p>
          <h2 className="section-title">
            Eight global voices.
            <br />
            One focused afternoon.
          </h2>
          <p className="section-sub mx-auto mt-5">
            Working academics, working lawyers, and working founders — across
            Japan, Malaysia, Taiwan, Thailand, and the multilateral world.
          </p>
        </div>

        {/* Wide group photo from the actual event */}
        <div className="relative overflow-hidden rounded-xl border border-line mb-8 reveal">
          <img
            src="/img/speakers.jpg"
            alt="Think Global 2025 — panel discussion"
            className="w-full aspect-[21/9] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 p-5 md:p-7 flex items-end justify-between">
            <div>
              <div className="text-[10px] tracking-[0.22em] uppercase text-orange mb-1">
                April 20, 2025 · Tokyo
              </div>
              <div className="font-display italic text-xl md:text-2xl text-cream">
                The room.
              </div>
            </div>
            <a
              href="#gallery"
              className="text-xs tracking-[0.18em] uppercase text-cream/85 hover:text-orange transition-colors"
            >
              See gallery →
            </a>
          </div>
        </div>

        {/* Speakers grid - PoT editorial treatment */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-10">
          {speakers.map((s, i) => (
            <figure
              key={s.name}
              className="group relative overflow-hidden rounded-md bg-white/[0.03] border border-line reveal"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={s.img}
                  alt={s.name}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 p-3 md:p-4">
                <div className="font-display text-base md:text-lg text-cream leading-tight">
                  {s.name}
                </div>
                <div className="text-[10px] md:text-xs tracking-[0.14em] uppercase text-orange mt-1">
                  {s.role}
                </div>
                <div className="text-xs text-muted mt-0.5 line-clamp-2">
                  {s.org}
                </div>
                {s.linkedin && (
                  <a
                    href={s.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1 mt-2 text-[10px] tracking-[0.14em] uppercase text-cream/70 hover:text-orange transition-colors"
                  >
                    Profile <span>→</span>
                  </a>
                )}
              </figcaption>
              <div className="absolute top-2 right-2 w-7 h-7 rounded-full bg-ink/70 backdrop-blur border border-line flex items-center justify-center text-[10px] text-muted">
                {String(i + 1).padStart(2, "0")}
              </div>
            </figure>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="grid md:grid-cols-[1fr_auto_1fr] items-center gap-4 md:gap-8 p-5 md:px-7 bg-white/[0.04] border border-white/[0.07] rounded-md rounded-b-3xl">
          <div className="font-medium text-cream">
            8 speakers · <span className="text-muted">3 keynotes + a global panel</span>
          </div>
          <div className="font-display italic text-orange text-center text-lg">
            Curated by Meta Intelligence.
          </div>
          <div className="md:text-right">
            <a href="#programme" className="btn btn-orange">
              See the schedule
            </a>
          </div>
        </div>

        {/* Speakers-from logos */}
        <div className="mt-16">
          <p className="text-center eyebrow mb-8">Speakers from</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {partnerLogos.map((l) => (
              <div
                key={l.alt}
                className="bg-white rounded-md p-3 md:p-4 flex items-center justify-center hover:bg-cream transition-colors"
              >
                <img
                  src={l.src}
                  alt={l.alt}
                  className="h-8 md:h-10 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
