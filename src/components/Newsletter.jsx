import { openEventEndedModal } from "./EventEndedModal";

export default function Newsletter() {
  return (
    <section id="newsletter" className="relative py-20 md:py-28 bg-ink border-t border-line">
      <div className="wrap text-center max-w-3xl">
        <p className="eyebrow mb-4 reveal">Stay in the loop</p>
        <h2 className="section-title reveal">
          The conversations don't stop
          <br />
          when the doors close.
        </h2>
        <p className="section-sub mx-auto mt-5 reveal">
          Think Global 2025 is over — but the Global Perspectives series
          continues. The 2nd Annual Conference happens in Bangkok in 2026.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-3 items-center justify-center reveal">
          <button onClick={openEventEndedModal} className="btn btn-orange">
            What's next →
          </button>
          <a
            href="https://thinkglobal2026.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            thinkglobal2026.com
          </a>
        </div>
      </div>
    </section>
  );
}
