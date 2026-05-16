import { useEffect, useState } from "react";
import { event, heroStats, speakers, publications, photos, affiliations } from "../data/content";
import { openEventEndedModal } from "./EventEndedModal";

const FEATURED = new Set(["Prof. Naoyuki Yoshino", "Prof. Hung-Yi Chen", "Prof. Nafis Alam"]);

function buildAllContributors() {
  const seen = new Set();
  const out = [];
  const push = (name, role) => {
    if (!name || seen.has(name)) return;
    seen.add(name);
    out.push({ name, role });
  };
  speakers.forEach((s) => push(s.name, "Speaker"));
  publications.forEach((p) => {
    (p.forewords || []).forEach((n) => push(n, "Foreword"));
    p.chapters.forEach((c) => c.authors.forEach((n) => push(n, "Author")));
  });
  return out;
}

const ALL_CONTRIBUTORS = buildAllContributors();
const OTHER_CONTRIBUTORS = ALL_CONTRIBUTORS.filter((c) => !FEATURED.has(c.name));

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

        {/* Contributors wall — full lineup across speakers + book series */}
        <div
          className="mt-10 md:mt-12 reveal"
          style={{ animationDelay: "450ms" }}
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-10 bg-orange/40" />
            <p className="text-[10px] tracking-[0.28em] uppercase text-orange">
              & {OTHER_CONTRIBUTORS.length} contributors across the series
            </p>
            <span className="h-px w-10 bg-orange/40" />
          </div>
          <div className="grid grid-cols-9 sm:grid-cols-9 md:grid-cols-9 gap-1 md:gap-1.5 max-w-2xl mx-auto">
            {OTHER_CONTRIBUTORS.map((c, i) => {
              const src = photos[c.name];
              const aff = affiliations[c.name];
              return (
                <a
                  key={c.name}
                  href="#publications"
                  title={`${c.name}${aff ? " — " + aff : ""}`}
                  className="group relative aspect-square overflow-hidden rounded-md border border-white/10 bg-white/[0.04] hover:border-orange/50 hover:z-10 transition-all"
                  style={{ animationDelay: `${i * 25}ms` }}
                >
                  {src ? (
                    <img
                      src={src}
                      alt={c.name}
                      loading="lazy"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-[10px] text-muted">
                      {c.name.split(" ").map((p) => p[0]).join("").slice(0, 2)}
                    </div>
                  )}
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/20 pointer-events-none" />
                </a>
              );
            })}
          </div>
          <p className="text-center text-[10px] tracking-[0.18em] uppercase text-muted mt-5">
            Editors · Foreword Writers · Chapter Authors · Across 5 Continents
          </p>
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
