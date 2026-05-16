import { useEffect, useState, useCallback } from "react";
import { gallery } from "../data/content";

export default function Gallery() {
  const [open, setOpen] = useState(null); // index of active photo

  const close = useCallback(() => setOpen(null), []);
  const prev = useCallback(
    () => setOpen((i) => (i === null ? null : (i - 1 + gallery.length) % gallery.length)),
    []
  );
  const next = useCallback(
    () => setOpen((i) => (i === null ? null : (i + 1) % gallery.length)),
    []
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, prev, next]);

  return (
    <section id="gallery" className="relative py-20 md:py-28 bg-ink border-t border-line">
      <div className="wrap">
        <div className="text-center mb-12">
          <p className="eyebrow mb-4 reveal">Gallery</p>
          <h2 className="section-title reveal">
            A look back at
            <br />
            <span className="italic text-orange">April 20, 2025</span>.
          </h2>
          <p className="section-sub mx-auto mt-5 reveal">
            Twenty-four moments from the 1st Annual Conference — keynotes,
            panel, and the farewell lunch on the 4th floor of the Courtyard.
          </p>
        </div>

        {/* Masonry-ish grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1.5 md:gap-2">
          {gallery.map((g, i) => (
            <button
              key={g.src}
              onClick={() => setOpen(i)}
              className="group relative overflow-hidden rounded-md bg-card border border-line reveal aspect-square focus:outline-none focus:ring-2 focus:ring-orange"
              style={{ animationDelay: `${(i % 12) * 50}ms` }}
            >
              <img
                src={g.src}
                alt={g.cap}
                loading="lazy"
                className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 group-hover:scale-[1.04] transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-2 text-[10px] md:text-xs text-cream text-left translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all">
                {g.cap}
              </div>
              <div className="absolute top-2 left-2 w-6 h-6 rounded-full bg-ink/70 backdrop-blur border border-line text-[10px] text-muted flex items-center justify-center">
                {String(i + 1).padStart(2, "0")}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {open !== null && (
        <div
          className="fixed inset-0 z-[100] bg-ink/96 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
          onClick={close}
        >
          <button
            aria-label="Close"
            onClick={close}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-cream text-xl z-10"
          >
            ×
          </button>
          <button
            aria-label="Previous"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-cream text-2xl"
          >
            ‹
          </button>
          <button
            aria-label="Next"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-cream text-2xl"
          >
            ›
          </button>
          <figure
            className="max-w-6xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={gallery[open].src}
              alt={gallery[open].cap}
              className="w-full max-h-[80vh] object-contain rounded-md"
            />
            <figcaption className="mt-4 text-center text-sm text-muted">
              <span className="text-orange font-display italic mr-3">
                {String(open + 1).padStart(2, "0")} / {gallery.length}
              </span>
              {gallery[open].cap}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
