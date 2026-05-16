import { venue } from "../data/content";
import { openEventEndedModal } from "./EventEndedModal";

export default function Venue() {
  return (
    <section id="venue" className="relative py-20 md:py-28 bg-ink border-t border-line">
      <div className="wrap">
        <div className="text-center mb-14">
          <p className="eyebrow mb-4 reveal">Venue</p>
          <h2 className="section-title reveal">
            Tokyo Station, 4th floor.
            <br />
            Two-minute walk from anywhere that matters.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8">
          {/* Info card */}
          <div className="bg-white/[0.04] border border-line rounded-2xl p-8 flex flex-col reveal">
            <h3 className="font-display text-2xl text-cream mb-2">
              {venue.name}
            </h3>
            <p className="text-lg text-cream/80 mb-6">{venue.floor}</p>

            <div className="mb-6">
              <div className="eyebrow mb-2">Address</div>
              <p className="text-cream/85 leading-relaxed">{venue.address}</p>
            </div>

            <div className="mb-6">
              <div className="eyebrow mb-2">Access</div>
              <ul className="space-y-2">
                {venue.access.map((a, i) => (
                  <li key={i} className="flex gap-3 text-cream/85">
                    <span className="text-orange shrink-0">→</span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto flex flex-col sm:flex-row gap-3">
              <a
                href={venue.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-orange"
              >
                Open in Google Maps
              </a>
              <button onClick={openEventEndedModal} className="btn btn-ghost">
                Register to attend
              </button>
            </div>
          </div>

          {/* Embedded map */}
          <div className="rounded-2xl overflow-hidden border border-line reveal aspect-[4/3] md:aspect-auto md:min-h-[420px]">
            <iframe
              src={venue.mapEmbed}
              title="Map of Courtyard by Marriott Tokyo Station"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 420 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[40%] hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>

        {/* Photos */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <figure className="bg-white/[0.04] border border-line rounded-2xl p-3 reveal">
            <div className="aspect-video rounded-lg overflow-hidden">
              <img
                src={venue.img}
                alt={venue.name}
                className="w-full h-full object-cover"
              />
            </div>
            <figcaption className="text-center text-sm text-muted mt-3">
              Courtyard by Marriott Tokyo Station
            </figcaption>
          </figure>
          <figure className="bg-white/[0.04] border border-line rounded-2xl p-3 reveal">
            <div className="aspect-video rounded-lg overflow-hidden">
              <img
                src={venue.img2}
                alt="Studio 3"
                className="w-full h-full object-cover"
              />
            </div>
            <figcaption className="text-center text-sm text-muted mt-3">
              Studio 3 — Conference Room
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
