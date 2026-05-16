import { useEffect, useState } from "react";

export const EVENT_ENDED_EVENT = "tg2025:event-ended-modal";

export function openEventEndedModal() {
  window.dispatchEvent(new CustomEvent(EVENT_ENDED_EVENT));
}

export default function EventEndedModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener(EVENT_ENDED_EVENT, onOpen);
    return () => window.removeEventListener(EVENT_ENDED_EVENT, onOpen);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  const close = () => setOpen(false);
  const scrollTo = (anchor) => {
    close();
    setTimeout(() => {
      const el = document.querySelector(anchor);
      el?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div
      className="fixed inset-0 z-[200] bg-ink/85 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
      onClick={close}
    >
      <div
        className="relative max-w-xl w-full bg-ink border border-line rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute inset-0 grain opacity-30 pointer-events-none" />
        <button
          aria-label="Close"
          onClick={close}
          className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-line flex items-center justify-center text-cream text-xl transition-colors"
        >
          ×
        </button>

        <div className="relative p-8 md:p-10">
          <p className="text-[11px] tracking-[0.28em] uppercase text-orange">
            Registration closed
          </p>
          <h3 className="mt-3 font-display text-3xl md:text-4xl text-cream leading-[1.1]">
            <span className="italic">Think Global 2025</span> has concluded.
          </h3>
          <p className="mt-4 text-cream/85 leading-relaxed">
            Thank you to the 8 speakers and everyone who joined us on
            April 20, 2025 in Tokyo. The 1st Annual Conference of the
            Global Perspectives Series is complete.
          </p>

          <div className="mt-7 space-y-3">
            <button
              onClick={() => scrollTo("#gallery")}
              className="group flex items-center justify-between w-full p-4 rounded-xl bg-white/[0.04] border border-line hover:border-orange/40 hover:bg-white/[0.06] transition-colors text-left"
            >
              <div>
                <div className="font-display text-base text-cream">
                  Look back at the event
                </div>
                <div className="text-xs text-muted mt-1">
                  Browse the gallery — 24 photos from the day
                </div>
              </div>
              <span className="text-orange text-xl group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>

            <button
              onClick={() => scrollTo("#publications")}
              className="group flex items-center justify-between w-full p-4 rounded-xl bg-white/[0.04] border border-line hover:border-orange/40 hover:bg-white/[0.06] transition-colors text-left"
            >
              <div>
                <div className="font-display text-base text-cream">
                  Read our publications
                </div>
                <div className="text-xs text-muted mt-1">
                  Two volumes published with Palgrave Macmillan
                </div>
              </div>
              <span className="text-orange text-xl group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>

            <a
              href="https://thinkglobal2026.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between w-full p-4 rounded-xl bg-orange/10 border border-orange/40 hover:bg-orange/15 transition-colors text-left"
              onClick={close}
            >
              <div>
                <div className="font-display text-base text-cream">
                  Join us at <em className="text-orange">Think Global 2026</em>
                </div>
                <div className="text-xs text-cream/80 mt-1">
                  thinkglobal2026.com · 2nd Annual Conference, Bangkok
                </div>
              </div>
              <span className="text-orange text-xl group-hover:translate-x-1 transition-transform">
                ↗
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
