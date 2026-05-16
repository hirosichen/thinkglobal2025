import { useEffect, useState } from "react";
import { event, heroStats, speakers, publications, photos, affiliations } from "../data/content";
import { openEventEndedModal } from "./EventEndedModal";

const FEATURED = new Set(["Prof. Naoyuki Yoshino", "Prof. Hung-Yi Chen", "Prof. Nafis Alam"]);

// Build role-segmented contributor lists, deduplicated per role priority:
// editor > foreword > chapter author > event-only speaker
function buildRoleGroups() {
  const editorsSet = new Set();
  const forewordsSet = new Set();
  const authorsSet = new Set();
  publications.forEach((p) => {
    (p.editors || []).forEach((n) => editorsSet.add(n));
    (p.forewords || []).forEach((n) => forewordsSet.add(n));
    p.chapters.forEach((c) => c.authors.forEach((n) => authorsSet.add(n)));
  });
  // Match name strings: book "Hung-Yi Chen" vs speakers "Prof. Hung-Yi Chen"
  const matchSpeaker = (n) =>
    speakers.find((s) => s.name === n || s.name.endsWith(" " + n) || n.endsWith(s.name.replace(/^Prof\.\s+|^Dr\.\s+/, ""))) || null;

  const editors = Array.from(editorsSet).map((n) => {
    const sp = matchSpeaker(n);
    return { name: sp ? sp.name : n };
  });

  const forewords = Array.from(forewordsSet)
    .filter((n) => !editorsSet.has(n))
    .map((n) => {
      const sp = matchSpeaker(n);
      return { name: sp ? sp.name : n };
    });

  const editorAndForewordNames = new Set([
    ...Array.from(editorsSet),
    ...Array.from(forewordsSet),
  ]);
  const chapters = Array.from(authorsSet)
    .filter((n) => !editorAndForewordNames.has(n))
    .map((n) => ({ name: n }));

  // Event-only speakers (not in any book role)
  const allBookNames = new Set([
    ...editors.map((e) => e.name),
    ...forewords.map((f) => f.name),
    ...chapters.map((c) => c.name),
  ]);
  const eventOnly = speakers
    .filter((s) => !allBookNames.has(s.name) && !FEATURED.has(s.name))
    .map((s) => ({ name: s.name }));

  return { editors, forewords, chapters, eventOnly };
}

const ROLES = buildRoleGroups();

function useCountdown(target) {
  const [diff, setDiff] = useState(() => target - Date.now());
  useEffect(() => {
    const t = setInterval(() => setDiff(target - Date.now()), 1000);
    return () => clearInterval(t);
  }, [target]);
  const s = Math.max(0, Math.floor(diff / 1000));
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    mins: Math.floor((s % 3600) / 60),
    secs: s % 60,
  };
}

export default function Hero() {
  const target = new Date(event.startsAt).getTime();
  const cd = useCountdown(target);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ink"
    >
      <div className="absolute inset-0">
        <img
          src="/img/hero.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-55"
          onError={(e) => (e.currentTarget.style.display = "none")}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/55 to-ink" />
        <div className="absolute inset-0 grain" />
      </div>

      <div className="relative z-10 wrap text-center pt-28 pb-24">
        <div className="inline-flex items-center gap-2 px-5 py-2 mb-7 rounded-full border border-orange/40 bg-orange/10 reveal">
          <span className="w-2 h-2 rounded-full bg-orange animate-pulse" />
          <span className="text-xs md:text-sm tracking-[0.18em] uppercase text-cream">
            {event.dates} · {event.city}
          </span>
        </div>

        <h1 className="font-display text-[40px] sm:text-[56px] md:text-[80px] lg:text-[104px] leading-[1.02] font-bold tracking-[-0.03em] text-cream reveal whitespace-nowrap">
          Think <span className="gold-text">Global</span> 2025
        </h1>

        <p
          className="mt-7 md:mt-9 text-base md:text-xl text-cream/80 max-w-2xl mx-auto reveal"
          style={{ animationDelay: "150ms" }}
        >
          Exploring the Future of{" "}
          <span className="px-2 py-0.5 rounded-md bg-orange/15 text-orange border border-orange/30">
            Generative AI
          </span>{" "}
          — eight global voices, one focused afternoon in Tokyo.
        </p>

        {/* Featured headliners */}
        <div
          className="mt-14 md:mt-16 reveal"
          style={{ animationDelay: "350ms" }}
        >
          <p className="text-[11px] tracking-[0.28em] uppercase text-orange mb-5">
            Featuring
          </p>
          <div className="grid sm:grid-cols-3 gap-4 md:gap-5 max-w-5xl mx-auto items-stretch">
            <FeaturedCard
              img="/img/speakers/nyoshino.jpg"
              name="Prof. Naoyuki Yoshino"
              title="Former Dean,"
              titleLine2="Asian Development Bank Institute"
              org="Professor Emeritus, Keio University"
            />
            <FeaturedCard
              img="/img/speakers/hychen.jpg"
              name="Prof. Hung-Yi Chen"
              title="Founder,"
              titleLine2="Meta Intelligence"
              org="Former MBA Director & Professor, Zhejiang University"
            />
            <FeaturedCard
              img="/img/speakers/nalam.jpg"
              name="Prof. Nafis Alam"
              title="Head of School of Business,"
              titleLine2="Monash University Malaysia"
            />
          </div>
        </div>

        {/* Contributors — segmented by role */}
        <div
          className="mt-12 md:mt-16 reveal space-y-8 md:space-y-10"
          style={{ animationDelay: "450ms" }}
        >
          <ContributorRow label="Editors" count={ROLES.editors.length} items={ROLES.editors} variant="static" size={88} />
          <ContributorRow label="Foreword Writers" count={ROLES.forewords.length} items={ROLES.forewords} variant="static" size={72} />
          <ContributorRow label="Chapter Authors" count={ROLES.chapters.length} items={ROLES.chapters} variant="marquee" size={64} />
          {ROLES.eventOnly.length > 0 && (
            <ContributorRow label="Also on Stage" count={ROLES.eventOnly.length} items={ROLES.eventOnly} variant="static" size={64} />
          )}
        </div>

        {/* Stats row */}
        <div
          className="mt-12 md:mt-14 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 reveal"
          style={{ animationDelay: "500ms" }}
        >
          {heroStats.map((s) => (
            <div key={s.label} className="flex items-baseline gap-3">
              <span className="font-display text-4xl md:text-5xl font-bold text-cream">
                {s.value}
              </span>
              <span className="text-base md:text-lg text-cream/85">{s.label}</span>
            </div>
          ))}
          <div className="flex items-baseline gap-3">
            <span className="font-display text-4xl md:text-5xl font-bold text-cream">
              {event.time.split("–")[0].trim()}
            </span>
            <span className="text-base md:text-lg text-cream/85">JST start</span>
          </div>
        </div>

        <div
          className="mt-10 md:mt-12 flex flex-col md:flex-row items-center justify-center gap-4 reveal"
          style={{ animationDelay: "550ms" }}
        >
          <CountdownPill cd={cd} />
          <button onClick={openEventEndedModal} className="btn btn-orange">
            Register
          </button>
          <a href="#programme" className="btn btn-ghost">
            View schedule
          </a>
        </div>
      </div>

      <div
        className="absolute bottom-0 inset-x-0 z-10 pb-7 reveal"
        style={{ animationDelay: "600ms" }}
      >
        <div className="wrap">
          <div className="divider mb-4" />
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-8 text-sm md:text-lg font-medium tracking-wide">
            <span>{event.dates}</span>
            <span className="hidden md:inline opacity-30">·</span>
            <span>{event.time} JST</span>
            <span className="hidden md:inline opacity-30">·</span>
            <span className="italic text-orange">{event.venue}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function CountdownPill({ cd }) {
  return (
    <button
      onClick={openEventEndedModal}
      className="inline-flex items-center gap-3 px-5 py-3 rounded-md bg-white/5 border border-white/15 hover:bg-white/10 transition-colors"
    >
      <CdNum n={cd.days} label="days" />
      <span className="opacity-30">:</span>
      <CdNum n={cd.hours} label="hrs" />
      <span className="opacity-30">:</span>
      <CdNum n={cd.mins} label="min" />
      <span className="opacity-30">:</span>
      <CdNum n={cd.secs} label="sec" />
    </button>
  );
}

function ContributorRow({ label, count, items, variant = "static", size = 64 }) {
  const cards = items.map((c, i) => <ContribCard key={`${c.name}-${i}`} c={c} size={size} />);

  return (
    <section>
      <div className="flex items-center justify-center gap-3 mb-5">
        <span className="h-px w-8 bg-orange/40" />
        <p className="text-[10px] tracking-[0.28em] uppercase text-orange">
          {label} <span className="text-muted/70 ml-1">· {count}</span>
        </p>
        <span className="h-px w-8 bg-orange/40" />
      </div>

      {variant === "marquee" ? (
        <div className="relative overflow-hidden -mx-6 md:-mx-10 [mask-image:linear-gradient(90deg,transparent_0,#000_6%,#000_94%,transparent_100%)]">
          <div className="flex gap-3 md:gap-4 animate-marquee hover:[animation-play-state:paused] w-max px-4">
            {[...cards, ...cards].map((card, i) => (
              <div key={i}>{card}</div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
          {cards}
        </div>
      )}
    </section>
  );
}

function ContribCard({ c, size }) {
  const src = photos[c.name];
  const aff = affiliations[c.name];
  const cleanName = c.name.replace(/^Prof\.\s+|^Dr\.\s+/, "");
  return (
    <a
      href="#publications"
      title={aff || c.name}
      className="group shrink-0 block"
      style={{ width: size + 16 }}
    >
      <div
        className="relative overflow-hidden rounded-lg border border-white/15 group-hover:border-orange/60 transition-colors bg-white/[0.04]"
        style={{ width: size, height: size }}
      >
        {src ? (
          <img
            src={src}
            alt={c.name}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-xs text-muted">
            {c.name.split(" ").map((p) => p[0]).join("").slice(0, 2)}
          </div>
        )}
      </div>
      <div className="mt-2 text-center">
        <div
          className="font-display text-cream leading-tight"
          style={{ fontSize: Math.max(11, size * 0.16) }}
        >
          {cleanName}
        </div>
      </div>
    </a>
  );
}

function FeaturedCard({ img, name, title, titleLine2, org, center = false }) {
  return (
    <a
      href="#speakers"
      className={`group flex items-center gap-4 md:gap-5 p-3 md:p-4 rounded-2xl border transition-all backdrop-blur ${
        center
          ? "bg-orange/10 border-orange/40 hover:bg-orange/15 sm:scale-[1.05] sm:-translate-y-1 shadow-lg shadow-orange/10"
          : "bg-white/[0.05] border-line hover:border-orange/40 hover:bg-white/[0.08]"
      }`}
    >
      <div className="relative shrink-0">
        <div
          className={`rounded-xl overflow-hidden border ${
            center
              ? "w-24 h-24 md:w-28 md:h-28 border-orange/50"
              : "w-20 h-20 md:w-24 md:h-24 border-line"
          }`}
        >
          <img
            src={img}
            alt={name}
            className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-500"
          />
        </div>
        <div className="absolute -bottom-1.5 -right-1.5 w-6 h-6 rounded-full bg-orange text-ink flex items-center justify-center text-[10px] font-bold border-2 border-ink">
          ★
        </div>
      </div>
      <div className="text-left min-w-0">
        <div className="font-display text-base md:text-lg text-cream leading-tight">
          {name}
        </div>
        <div className="text-[11px] md:text-xs tracking-[0.06em] text-cream/80 mt-1.5 leading-snug">
          {title}
          {titleLine2 && (
            <>
              <br />
              <span className="text-orange">{titleLine2}</span>
            </>
          )}
        </div>
        {org && (
          <div className="text-[10px] md:text-[11px] text-muted mt-1 leading-snug">
            {org}
          </div>
        )}
      </div>
    </a>
  );
}

function CdNum({ n, label }) {
  return (
    <span className="flex flex-col items-center leading-none">
      <span className="font-display text-xl md:text-2xl font-semibold text-cream">
        {String(Math.max(0, n)).padStart(2, "0")}
      </span>
      <span className="text-[9px] tracking-[0.2em] uppercase text-muted mt-1">
        {label}
      </span>
    </span>
  );
}
