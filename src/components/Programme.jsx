import { programmeBlocks } from "../data/content";

export default function Programme() {
  return (
    <section id="programme" className="relative py-20 md:py-28 bg-ink">
      <div className="wrap">
        <div className="text-center mb-14">
          <p className="eyebrow mb-4 reveal">Programme</p>
          <h2 className="section-title reveal">
            One afternoon.
            <br className="md:hidden" /> One room.
            <br className="md:hidden" /> One conversation.
          </h2>
          <p className="section-sub mx-auto mt-5 reveal">
            Three keynotes, a moderated panel, and an invitation-only farewell
            lunch — all on the 4th floor of the Courtyard, Tokyo Station.
          </p>
        </div>

        <div className="border border-line rounded-xl overflow-hidden divide-y divide-line">
          {programmeBlocks.map((b, i) => (
            <div
              key={i}
              className="grid md:grid-cols-[180px_1fr_auto] gap-4 md:gap-8 items-center p-6 md:p-7 hover:bg-white/[0.02] transition-colors reveal"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="font-display italic text-orange text-sm md:text-base">
                {b.time}
              </div>
              <div>
                <div className="font-display text-xl md:text-2xl text-cream">
                  {b.title}
                </div>
                <div className="text-sm text-muted mt-1">{b.speaker}</div>
              </div>
              <div className="hidden md:block text-muted/70 group-hover:text-orange">
                →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
