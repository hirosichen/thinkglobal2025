import { event } from "../data/content";
import { openEventEndedModal } from "./EventEndedModal";

export default function RegisterBanner() {
  return (
    <section id="register" className="relative py-16 md:py-24 bg-orange overflow-hidden">
      <div className="absolute inset-0 grain opacity-20" />
      <div className="wrap relative text-center">
        <p className="text-[11px] tracking-[0.32em] uppercase text-ink/70 mb-4">
          Registration is now open
        </p>
        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-ink leading-[1.05]">
          <span className="inline-block mr-2 md:mr-3">→</span>
          RESERVE YOUR{" "}
          <span className="italic">SEAT</span>
          <br className="md:hidden" /> FOR{" "}
          <span className="italic">{event.edition}</span>
          <span className="inline-block ml-2 md:ml-3">←</span>
        </h2>
        <p className="text-ink/80 mt-5 max-w-xl mx-auto">
          {event.dates} · {event.time} JST · {event.city}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 items-center justify-center">
          <button
            onClick={openEventEndedModal}
            className="inline-flex items-center justify-center gap-2 px-9 py-5 text-sm font-medium tracking-[0.18em] uppercase rounded-md bg-ink text-cream hover:bg-black transition-colors"
          >
            Register now
          </button>
          <a
            href="#programme"
            className="inline-flex items-center justify-center gap-2 px-9 py-5 text-sm font-medium tracking-[0.18em] uppercase rounded-md bg-transparent text-ink border border-ink/40 hover:bg-ink/5 transition-colors"
          >
            View schedule
          </a>
        </div>
      </div>
    </section>
  );
}
