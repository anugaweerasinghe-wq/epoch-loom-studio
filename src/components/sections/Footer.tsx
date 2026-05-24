import { SITE_CONTENT } from "@/config/content";

export function Footer() {
  return (
    <footer
      className="relative px-6 pb-2 pt-16"
      style={{
        background: "var(--void-black)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div
              className="font-display text-[24px] font-bold tracking-wider"
              style={{ color: "var(--plasma-cyan)" }}
            >
              {SITE_CONTENT.game.title}
            </div>
            <div
              className="font-display mt-1 text-[12px] tracking-[0.3em]"
              style={{ color: "var(--nova-gold)" }}
            >
              {SITE_CONTENT.game.subtitle}
            </div>
            <p
              className="font-body mt-5 max-w-sm text-[14px] leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              {SITE_CONTENT.footer.tagline}
            </p>
            <div
              className="font-mono-ui mt-6 text-[10px] uppercase tracking-[0.25em]"
              style={{ color: "var(--text-muted)" }}
            >
              {SITE_CONTENT.meta.studioName} · EST. {SITE_CONTENT.meta.studioFounded}
            </div>
          </div>

          <div>
            <div
              className="font-mono-ui mb-4 text-[10px] uppercase tracking-[0.3em]"
              style={{ color: "var(--text-muted)" }}
            >
              LEGAL
            </div>
            <ul className="space-y-2">
              {SITE_CONTENT.footer.legalLinks.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="font-body text-[13px] transition-colors hover:text-[color:var(--plasma-cyan)]"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div
              className="font-mono-ui mb-4 text-[10px] uppercase tracking-[0.3em]"
              style={{ color: "var(--text-muted)" }}
            >
              SUPPORT
            </div>
            <ul className="space-y-2">
              {SITE_CONTENT.footer.platformLinks.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="font-body text-[13px] transition-colors hover:text-[color:var(--plasma-cyan)]"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="mt-12 flex flex-col items-start justify-between gap-3 border-t pt-6 sm:flex-row sm:items-center"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}
        >
          <div
            className="font-mono-ui text-[10px] uppercase tracking-[0.25em]"
            style={{ color: "var(--text-muted)" }}
          >
            © {SITE_CONTENT.meta.copyright} {SITE_CONTENT.meta.studioName}. ALL RIGHTS RESERVED.
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {SITE_CONTENT.game.platforms.map((p) => (
              <span
                key={p}
                className="font-mono-ui text-[9px] uppercase tracking-[0.3em]"
                style={{ color: "var(--text-muted)" }}
              >
                {p}
              </span>
            ))}
          </div>
          <div
            className="font-mono-ui text-[10px] uppercase tracking-[0.25em]"
            style={{ color: "var(--plasma-cyan)" }}
          >
            {SITE_CONTENT.footer.madeBy}
          </div>
        </div>
      </div>

      <div className="footer-sweep mt-6 h-px w-full" />
    </footer>
  );
}
