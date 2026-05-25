import { Link } from "@tanstack/react-router";
import { SITE_CONTENT } from "@/config/content";

export function Footer() {
  return (
    <footer
      className="relative px-6 py-10"
      style={{
        background: "var(--void-black)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-3">
          <div
            className="font-display text-[16px] font-bold tracking-[0.15em] sm:text-left text-center"
            style={{ color: "var(--text-muted)" }}
          >
            {SITE_CONTENT.game.title}
          </div>

          <div className="flex justify-center gap-5">
            {SITE_CONTENT.nav.links.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                className="font-mono-ui text-[11px] uppercase tracking-[0.2em] transition-colors duration-400 hover:text-[color:var(--text-secondary)]"
                style={{ color: "var(--text-muted)" }}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div
            className="font-mono-ui text-[11px] uppercase tracking-[0.2em] sm:text-right text-center"
            style={{ color: "var(--text-muted)" }}
          >
            {SITE_CONTENT.footer.madeBy}
          </div>
        </div>

        <div
          className="mt-8 border-t pt-5 text-center"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}
        >
          <div
            className="font-mono-ui text-[10px] uppercase tracking-[0.2em]"
            style={{ color: "var(--text-muted)" }}
          >
            {SITE_CONTENT.footer.disclaimer}
          </div>
        </div>
      </div>
    </footer>
  );
}
