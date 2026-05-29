import { useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SITE_CONTENT } from "@/config/content";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const navBg = useTransform(
    scrollY,
    [0, 100],
    ["rgba(5,5,8,0)", "rgba(5,5,8,0.85)"],
  );
  const navBlur = useTransform(scrollY, [0, 100], [0, 24]);
  const navBorder = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255,255,255,0)", "rgba(255,255,255,0.08)"],
  );
  const blurStr = useTransform(navBlur, (b) => `blur(${b}px) saturate(180%)`);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50"
      style={{
        backdropFilter: blurStr,
        WebkitBackdropFilter: blurStr,
        background: navBg,
        borderBottom: "1px solid",
        borderBottomColor: navBorder,
      }}
    >
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6">
        <Link
          to="/"
          className="font-display text-[18px] font-bold tracking-[0.15em]"
          style={{ color: "var(--plasma-cyan)" }}
        >
          {SITE_CONTENT.game.title}
        </Link>

        <div className="hidden items-center gap-7 xl:flex">
          {SITE_CONTENT.nav.links.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className="font-mono-ui group relative text-[10.5px] uppercase tracking-[0.2em]"
              style={{ color: "var(--text-secondary)" }}
              activeProps={{ style: { color: "var(--plasma-cyan)" } }}
              activeOptions={{ exact: l.href === "/" }}
            >
              {({ isActive }) => (
                <>
                  <span className="transition-colors duration-300 group-hover:text-[color:var(--plasma-cyan)]">
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
          className="font-mono-ui relative hidden h-9 items-center gap-2 px-5 text-[11px] uppercase tracking-[0.2em] xl:inline-flex"
          style={{
            border: "1px solid rgba(255,255,255,0.2)",
            color: "var(--text-primary)",
            transition: "background 400ms, border-color 400ms, box-shadow 400ms",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(79,195,247,0.06)";
            e.currentTarget.style.borderColor = "rgba(79,195,247,0.5)";
            e.currentTarget.style.boxShadow = "0 0 24px -8px rgba(79,195,247,0.5)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          {SITE_CONTENT.nav.cta.label}
          <span className="relative inline-flex h-1.5 w-1.5">
            <span
              className="absolute inset-0 animate-ping rounded-full"
              style={{ background: "var(--plasma-cyan)", opacity: 0.7 }}
            />
            <span
              className="relative inline-flex h-1.5 w-1.5 rounded-full"
              style={{ background: "var(--plasma-cyan)" }}
            />
          </span>
        </Link>

        <button
          className="xl:hidden"
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
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden xl:hidden"
            style={{ background: "rgba(5,5,8,0.95)", backdropFilter: "blur(24px)" }}
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
                  activeOptions={{ exact: l.href === "/" }}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to={SITE_CONTENT.nav.cta.href}
                onClick={() => setOpen(false)}
                className="font-mono-ui mt-3 inline-flex items-center gap-2 py-2 text-[12px] uppercase tracking-[0.2em]"
                style={{ color: "var(--plasma-cyan)" }}
              >
                {SITE_CONTENT.nav.cta.label}
                <span
                  className="inline-block h-1.5 w-1.5 rounded-full"
                  style={{ background: "var(--plasma-cyan)" }}
                />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
