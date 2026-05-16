import { publications, cfp, affiliations, photos } from "../data/content";
import Monogram from "./Monogram";

function Avatar({ name, size = 40, square = false }) {
  const src = photos[name];
  if (src) {
    return (
      <img
        src={src}
        alt={name}
        loading="lazy"
        className={`object-cover shrink-0 border border-white/10 grayscale-[12%] hover:grayscale-0 transition-all duration-500 ${
          square ? "rounded-md" : "rounded-full"
        }`}
        style={{ width: size, height: size }}
      />
    );
  }
  return <Monogram name={name} size={size} />;
}

const roman = (n) =>
  ["I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII","XIII","XIV","XV"][n] || String(n + 1);

export default function Publications() {
  return (
    <section
      id="publications"
      className="relative py-20 md:py-28 bg-gradient-to-b from-ink via-[#120e07] to-ink overflow-hidden"
    >
      <div className="absolute inset-0 grain opacity-30" />
      <div className="wrap relative">
        <div className="max-w-3xl mx-auto text-center">
          <p className="eyebrow mb-4 reveal">Our Publications</p>
          <h2 className="section-title reveal">
            The <span className="italic text-orange">Global Perspectives</span>{" "}
            book series.
          </h2>
          <p className="section-sub mx-auto mt-6 reveal">
            An ongoing publishing programme with{" "}
            <span className="text-cream">Palgrave Macmillan</span>. Two volumes
            published to date, with contributors across academia, central
            banking, finance, and law.
          </p>
        </div>

        <div className="mt-16 md:mt-20 space-y-20 md:space-y-28">
          {publications.map((p, idx) => (
            <Volume key={p.title} p={p} idx={idx} />
          ))}
        </div>

        {/* Call for Chapters */}
        <div id="cfp" className="mt-24 md:mt-32 max-w-4xl mx-auto scroll-mt-20">
          <div className="text-center mb-10">
            <p className="eyebrow mb-4 reveal">Call for Book Chapters</p>
            <h3 className="section-title reveal">
              Contribute to <em className="text-orange">{cfp.title}</em>.
            </h3>
          </div>

          <div className="bg-white/[0.04] border border-line rounded-2xl p-7 md:p-10 reveal">
            <p className="text-cream/85 leading-relaxed mb-8">
              We are pleased to announce a call for book chapters for the
              upcoming volume{" "}
              <span className="text-orange italic">{cfp.title}</span>,
              continuing the Global Perspectives series.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="eyebrow mb-3">Key Information</div>
                <ul className="space-y-2 text-cream/85">
                  <li className="flex gap-2"><span className="text-orange">•</span>Targeted Publisher: <span className="text-cream">{cfp.publisher}</span></li>
                  <li className="flex gap-2"><span className="text-orange">•</span>Expected Publication: <span className="text-cream">{cfp.expected}</span></li>
                  <li className="flex gap-2"><span className="text-orange">•</span>Chapter Length: <span className="text-cream">{cfp.chapterLength}</span></li>
                </ul>

                <div className="eyebrow mb-3 mt-8">Important Dates</div>
                <ul className="space-y-2 text-cream/85">
                  {cfp.dates.map((d) => (
                    <li key={d.label} className="flex gap-2"><span className="text-orange">•</span>{d.label}: <span className="text-cream">{d.value}</span></li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="eyebrow mb-3">Topics of Interest</div>
                <ul className="space-y-2 text-cream/85">
                  {cfp.topics.map((t) => (
                    <li key={t} className="flex gap-2"><span className="text-orange">•</span>{t}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-line">
              <div className="eyebrow mb-3">How to Submit</div>
              <p className="text-cream/85">
                Submit your abstract (300–500 words) and author information to{" "}
                <a
                  href={`mailto:${cfp.submissionEmail}`}
                  className="text-orange hover:text-cream transition-colors underline underline-offset-4"
                >
                  {cfp.submissionEmail}
                </a>.
              </p>
            </div>

            <div className="mt-6 p-5 rounded-xl bg-orange/10 border border-orange/30">
              <p className="text-cream">
                <span className="text-orange font-semibold">Bonus —</span>{" "}
                {cfp.nextEdition}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Volume({ p, idx }) {
  // Unique chapter contributors (anyone whose name appears as a chapter author)
  const contribSet = new Set();
  p.chapters.forEach((c) => c.authors.forEach((a) => contribSet.add(a)));
  // Distinct "outside" contributors: chapter authors who aren't series editors
  const outside = Array.from(contribSet).filter((n) => !p.editors.includes(n));

  return (
    <article
      className="reveal"
      style={{ animationDelay: `${idx * 100}ms` }}
    >
      {/* Header: cover + masthead */}
      <header className="grid md:grid-cols-[260px_1fr] gap-8 md:gap-12 items-end pb-10 border-b border-white/10">
        <a
          href={p.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group block rounded-md overflow-hidden border border-white/10 bg-white/[0.03] hover:border-orange/40 transition-colors"
        >
          <div className="aspect-[3/4] overflow-hidden bg-ink">
            <img
              src={p.img}
              alt={p.title}
              className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
            />
          </div>
        </a>

        <div>
          <div className="font-display italic text-orange text-base mb-3">
            Volume {roman(idx)}
            {p.year ? <span className="text-muted not-italic"> · {p.year}</span> : null}
          </div>
          <h3 className="font-display text-3xl md:text-5xl text-cream leading-[1.05] tracking-tight">
            {p.title}
          </h3>
          <p className="text-muted text-base md:text-lg mt-3 italic">
            {p.subtitle}
          </p>
          <p className="text-cream/70 text-sm mt-5">
            Published by{" "}
            <span className="text-cream">{p.publisher}</span> · {p.chapters.length}{" "}
            chapters · {1 + (p.forewords?.length || 0) + outside.length + p.editors.length}{" "}
            contributors
          </p>
          <a
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-5 text-xs tracking-[0.18em] uppercase text-orange hover:text-cream transition-colors"
          >
            View on Springer
            <span aria-hidden>→</span>
          </a>
        </div>
      </header>

      {/* Editors row */}
      <PeopleRow
        label="Edited by"
        sub="The three editors who shaped the volume."
        people={p.editors}
        size="lg"
      />

      {/* Forewords row */}
      {p.forewords && p.forewords.length > 0 && (
        <PeopleRow
          label={`Forewords by ${p.forewords.length}`}
          sub="Distinguished scholars and practitioners who frame the volume."
          people={p.forewords}
          size="md"
          accent
        />
      )}

      {/* Contributing authors photo wall */}
      {outside.length > 0 && (
        <section className="mt-14 md:mt-16">
          <SectionLabel
            label={`Contributing authors · ${outside.length}`}
            sub="Across academia, central banking, finance, and law."
          />
          <div className="mt-7 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 md:gap-4">
            {outside.map((name) => (
              <FacePlate key={name} name={name} />
            ))}
          </div>
        </section>
      )}

      {/* Chapter list — editorial table of contents */}
      <section className="mt-14 md:mt-16">
        <SectionLabel label="Table of contents" sub={`${p.chapters.length} chapters`} />
        <ol className="mt-7 divide-y divide-white/10">
          {p.chapters.map((c, i) => (
            <ChapterRow key={i} c={c} i={i} />
          ))}
        </ol>
      </section>
    </article>
  );
}

function SectionLabel({ label, sub }) {
  return (
    <div className="flex items-baseline gap-5">
      <span className="font-display italic text-orange text-sm tracking-wide">
        §
      </span>
      <div>
        <div className="text-[11px] tracking-[0.28em] uppercase text-cream">{label}</div>
        {sub && <div className="text-xs text-muted mt-1">{sub}</div>}
      </div>
    </div>
  );
}

function PeopleRow({ label, sub, people, size = "md", accent = false }) {
  const sizeMap = {
    lg: { avatar: 128, nameClass: "text-xl md:text-2xl", padding: "py-7" },
    md: { avatar: 96, nameClass: "text-lg md:text-xl", padding: "py-6" },
  };
  const cfg = sizeMap[size];
  const cols = people.length === 3 ? "md:grid-cols-3" : people.length === 2 ? "md:grid-cols-2" : "md:grid-cols-4";

  return (
    <section className={`mt-14 md:mt-16`}>
      <SectionLabel label={label} sub={sub} />
      <div className={`mt-8 grid grid-cols-1 ${cols} gap-x-6 gap-y-10`}>
        {people.map((name) => (
          <PersonBlock
            key={name}
            name={name}
            size={cfg.avatar}
            nameClass={cfg.nameClass}
            accent={accent}
          />
        ))}
      </div>
    </section>
  );
}

function PersonBlock({ name, size, nameClass, accent }) {
  const aff = affiliations[name];
  return (
    <div className="flex flex-col">
      <div className="relative inline-block">
        <Avatar name={name} size={size} square />
        {accent && (
          <span className="absolute -top-2 -left-2 px-2 py-0.5 rounded-sm bg-orange text-ink text-[9px] tracking-[0.2em] uppercase font-semibold">
            Foreword
          </span>
        )}
      </div>
      <div className={`mt-4 font-display ${nameClass} text-cream leading-tight`}>
        {name}
      </div>
      {aff && (
        <div className="text-[12px] text-muted mt-2 leading-snug max-w-[34ch]">
          {aff}
        </div>
      )}
    </div>
  );
}

function FacePlate({ name }) {
  const src = photos[name];
  const aff = affiliations[name];
  return (
    <figure className="group relative">
      <div className="relative aspect-square overflow-hidden rounded-md border border-white/10 bg-white/[0.03]">
        {src ? (
          <img
            src={src}
            alt={name}
            loading="lazy"
            className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-[1.05] transition-all duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Monogram name={name} size={56} />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/0 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
        <div className="absolute inset-x-0 bottom-0 p-2">
          <div className="font-display text-[13px] md:text-sm text-cream leading-tight">
            {name}
          </div>
          {aff && (
            <div className="text-[10px] text-muted/90 mt-0.5 leading-snug line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity">
              {aff}
            </div>
          )}
        </div>
      </div>
    </figure>
  );
}

function ChapterRow({ c, i }) {
  const isIntro = i === 0;
  return (
    <li className="grid grid-cols-[40px_1fr_auto] md:grid-cols-[56px_1fr_auto] items-center gap-4 md:gap-6 py-6 md:py-7 group hover:bg-white/[0.015] -mx-3 px-3 rounded-md transition-colors">
      <span className="font-display italic text-orange text-xl md:text-2xl tabular-nums leading-none">
        {String(i + 1).padStart(2, "0")}
      </span>
      <div className="min-w-0">
        <div className={`font-display ${isIntro ? "text-lg md:text-xl" : "text-base md:text-lg"} text-cream leading-snug`}>
          {c.title}
        </div>
        <div className="mt-2 flex items-center gap-3">
          <div className="flex -space-x-2.5">
            {c.authors.map((a) => (
              <span key={a} className="ring-2 ring-ink rounded-full" title={a}>
                <Avatar name={a} size={26} />
              </span>
            ))}
          </div>
          <div className="text-[12px] text-muted leading-tight">
            {c.authors.join(" · ")}
          </div>
        </div>
      </div>
      <span className="font-display italic text-muted text-xs md:text-sm whitespace-nowrap tabular-nums">
        pp. {c.pages}
      </span>
    </li>
  );
}
