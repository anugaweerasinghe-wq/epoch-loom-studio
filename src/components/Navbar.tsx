import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { SITE_CONTENT } from "@/config/content";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 80);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50"
      style={{
        backdropFilter: scrolled ? "blur(28px) saturate(180%)" : "blur(16px)",
        WebkitBackdropFilter: scrolled
          ? "blur(28px) saturate(180%)"
          : "blur(16px)",
        background: scrolled
          ? "rgba(5,5,8,0.7)"
          : "rgba(255,255,255,0.03)",
        borderBottom: scrolled
          ? "1px solid rgba(79,195,247,0.15)"
          : "1px solid transparent",
        transition: "background 0.3s, border-color 0.3s",
      }}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a
          href="#top"
          className="font-display text-[22px] font-bold tracking-wider"
          style={{ color: "var(--plasma-cyan)" }}
        >
          {SITE_CONTENT.game.title}
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {SITE_CONTENT.nav.links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(/\s+/g, "-")}`}
              className="font-mono-ui group relative text-[12px] uppercase tracking-[0.2em]"
              style={{ color: "var(--text-secondary)" }}
            >
              <span className="transition-colors group-hover:text-[color:var(--plasma-cyan)]">
                {l}
              </span>
              <span
                className="absolute -bottom-1 left-0 h-px w-0 transition-all duration-300 group-hover:w-full"
                style={{ background: "var(--plasma-cyan)" }}
              />
            </a>
          ))}
        </div>

        <button
          className="glass-strong pulse-glow hidden rounded-md px-5 py-2.5 font-mono-ui text-[11px] uppercase tracking-[0.2em] lg:block"
          style={{
            color: "var(--plasma-cyan)",
            borderColor: "rgba(79,195,247,0.4)",
          }}
        >
          {SITE_CONTENT.nav.cta}
        </button>

        <button
          className="lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="menu"
          style={{ color: "var(--text-primary)" }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="glass overflow-hidden lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {SITE_CONTENT.nav.links.map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={() => setOpen(false)}
                  className="font-mono-ui py-2 text-[12px] uppercase tracking-[0.2em]"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {l}
                </a>
              ))}
              <button
                className="glass-strong mt-2 rounded-md py-3 font-mono-ui text-[11px] uppercase tracking-[0.2em]"
                style={{ color: "var(--plasma-cyan)" }}
              >
                {SITE_CONTENT.nav.cta}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
