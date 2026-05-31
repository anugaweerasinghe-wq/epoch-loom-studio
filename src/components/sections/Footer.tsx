import { Link } from "@tanstack/react-router";
import { SITE_CONTENT } from "@/config/content";
import { VoidMark } from "@/components/VoidMark";

export function Footer() {
  return (
    <footer
      className="relative px-6 py-12"
      style={{
        background: "var(--void-black)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 text-center">
        <div
          className="flex items-center gap-2.5"
          style={{ color: "var(--plasma-cyan)" }}
        >
          <VoidMark size={20} />
          <span className="font-display text-[14px] font-bold tracking-[0.2em]">
            {SITE_CONTENT.game.title}
          </span>
        </div>
        <div
          className="font-display text-[12px] font-bold tracking-[0.25em]"
          style={{ color: "var(--text-muted)" }}
        >
          {SITE_CONTENT.game.subtitle}
        </div>
        <div
          className="font-mono-ui text-[10px] uppercase tracking-[0.25em]"
          style={{ color: "var(--text-muted)" }}
        >
          {SITE_CONTENT.footer.line}{" "}
          <span style={{ opacity: 0.4 }}>·</span>{" "}
          <Link
            to="/about"
            className="transition-colors duration-300 hover:text-[color:var(--plasma-cyan)]"
            style={{ color: "var(--text-secondary)" }}
          >
            {SITE_CONTENT.footer.aboutLink} →
          </Link>
        </div>
      </div>
    </footer>
  );
}
