import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
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
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed inset-x-0 top-0 z-50"
      style={{
        backdropFilter: scrolled ? "blur(28px) saturate(180%)" : "blur(12px)",
        WebkitBackdropFilter: scrolled ? "blur(28px) saturate(180%)" : "blur(12px)",
        background: scrolled ? "rgba(5,5,8,0.7)" : "rgba(255,255,255,0.02)",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.08)"
          : "1px solid transparent",
        transition: "background 400ms, border-color 400ms",
      }}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          to="/"
          className="font-display text-[18px] font-bold tracking-[0.15em]"
          style={{ color: "var(--plasma-cyan)" }}
        >
          {SITE_CONTENT.game.title}
        </Link>

        <div className="hidden items-center gap-10 lg:flex">
          {SITE_CONTENT.nav.links.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className="font-mono-ui group relative text-[11px] uppercase tracking-[0.2em]"
              style={{ color: "var(--text-secondary)" }}
              activeProps={{
                style: { color: "var(--plasma-cyan)" },
              }}
            >
              {({ isActive }) => (
                <>
                  <span
                    className="transition-colors duration-300 group-hover:text-[color:var(--plasma-cyan)]"
                  >
                    {l.label}
                  </span>
                  <span
                    className="absolute -bottom-1 left-0 h-px transition-all duration-400 group-hover:w-full"
                    style={{
                      background: "var(--plasma-cyan)",
                      width: isActive ? "100%" : 0,
                    }}
                  />
                </>
              )}
            </Link>
          ))}
        </div>

        <Link
          to={SITE_CONTENT.nav.cta.href}
          className="font-mono-ui hidden h-9 items-center px-5 text-[11px] uppercase tracking-[0.2em] lg:inline-flex"
          style={{
            border: "1px solid rgba(255,255,255,0.2)",
            color: "var(--text-primary)",
            transition: "background 400ms, border-color 400ms",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.06)";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
          }}
        >
          {SITE_CONTENT.nav.cta.label}
        </Link>

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
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden lg:hidden"
            style={{ background: "rgba(5,5,8,0.92)" }}
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {SITE_CONTENT.nav.links.map((l) => (
                <Link
                  key={l.href}
                  to={l.href}
                  onClick={() => setOpen(false)}
                  className="font-mono-ui py-2 text-[12px] uppercase tracking-[0.2em]"
                  style={{ color: "var(--text-secondary)" }}
                  activeProps={{ style: { color: "var(--plasma-cyan)" } }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
