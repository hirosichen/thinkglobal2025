import { useEffect, useState } from "react";
import { event, navLinks } from "../data/content";
import { openEventEndedModal } from "./EventEndedModal";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b ${
          scrolled
            ? "bg-ink/90 backdrop-blur-xl border-line"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="wrap flex items-center justify-between h-[68px] gap-6">
          <a href="#" className="flex items-center gap-3 shrink-0">
            <Logo />
          </a>

          <ul className="hidden md:flex gap-7 mx-auto list-none">
            {navLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-[12px] tracking-[0.18em] uppercase text-white/85 hover:text-orange transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-3 shrink-0">
            <button onClick={openEventEndedModal} className="btn btn-ghost">
              Apply
            </button>
            <button onClick={openEventEndedModal} className="btn btn-orange">
              Register
            </button>
          </div>

          <button
            aria-label="Menu"
            className="md:hidden flex flex-col gap-[5px] p-2"
            onClick={() => setOpen((o) => !o)}
          >
            <span className={`block w-6 h-px bg-white transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`} />
            <span className={`block w-6 h-px bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-px bg-white transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-ink/97 backdrop-blur-2xl transition-all duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="wrap pt-28 flex flex-col gap-6">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display text-3xl text-cream border-b border-line pb-4"
            >
              {l.label}
            </a>
          ))}
          <div className="flex flex-col gap-3 mt-6">
            <button
              onClick={() => {
                setOpen(false);
                openEventEndedModal();
              }}
              className="btn btn-ghost w-full"
            >
              Apply
            </button>
            <button
              onClick={() => {
                setOpen(false);
                openEventEndedModal();
              }}
              className="btn btn-orange w-full"
            >
              Register
            </button>
          </div>
          <div className="mt-8 text-sm text-muted">
            <div>{event.dates}</div>
            <div>{event.venue}, {event.city}</div>
          </div>
        </div>
      </div>
    </>
  );
}

function Logo() {
  return (
    <span className="flex flex-col leading-tight">
      <span className="font-display italic text-[20px] md:text-[22px] tracking-tight bg-gradient-to-r from-cream via-orange to-cream bg-clip-text text-transparent">
        Think Global <span className="not-italic">2025</span>
      </span>
      <span className="text-[10px] tracking-[0.18em] uppercase text-muted">
        by Meta Intelligence
      </span>
    </span>
  );
}
