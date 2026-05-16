import { event } from "../data/content";

export default function Footer() {
  return (
    <footer className="relative py-16 md:py-24 bg-black border-t border-line">
      <div className="wrap">
        <div className="grid md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10">
          <div>
            <div className="font-display italic text-2xl md:text-3xl bg-gradient-to-r from-cream via-orange to-cream bg-clip-text text-transparent">
              Think Global <span className="not-italic">{event.edition}</span>
            </div>
            <div className="text-xs tracking-[0.18em] uppercase text-muted mt-1">
              by {event.organizer}
            </div>
            <p className="text-muted mt-5 max-w-sm">
              A curated annual gathering connecting global voices across
              academia, finance, law, and policy — to think honestly about
              where technology is taking us next.
            </p>
            <div className="flex gap-3 mt-6">
              {[
                { l: "in", href: "https://www.linkedin.com/in/chenhungyi/" },
                { l: "X", href: "#" },
                { l: "✉", href: "#" },
              ].map((s) => (
                <a
                  key={s.l}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-line flex items-center justify-center text-muted hover:text-cream hover:border-orange transition-colors text-xs"
                >
                  {s.l}
                </a>
              ))}
            </div>
          </div>

          <Col
            title="Event"
            links={[
              { label: "Schedule", href: "#programme" },
              { label: "Speakers", href: "#speakers" },
              { label: "Venue", href: "#venue" },
              { label: "Register", href: "#register" },
            ]}
          />
          <Col
            title="Series"
            links={[
              { label: "Publications", href: "#publications" },
              { label: "Call for Papers", href: "#cfp" },
              { label: "Archive", href: "#archive" },
              { label: "Newsletter", href: "#newsletter" },
            ]}
          />
          <Col
            title="Contact"
            links={[
              { label: "Press", href: "#" },
              { label: "Partnership", href: "#" },
              { label: "Privacy", href: "#" },
              { label: "Terms", href: "#" },
            ]}
          />
        </div>

        <div className="mt-14 pt-6 border-t border-line flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted">
          <div>
            © {new Date().getFullYear()} Meta Intelligence 超智諮詢 · All rights reserved.
          </div>
          <div className="flex gap-5">
            <span>{event.dates}</span>
            <span>·</span>
            <span>{event.venue}, {event.city}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Col({ title, links }) {
  return (
    <div>
      <div className="eyebrow mb-4">{title}</div>
      <ul className="space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="text-cream/80 hover:text-orange transition-colors"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
