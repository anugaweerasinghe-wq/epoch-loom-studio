import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Hero } from "@/components/sections/Hero";
import { WorldPillars } from "@/components/sections/WorldPillars";
import { VoidMark } from "@/components/VoidMark";
import { SITE_CONTENT } from "@/config/content";
import { EXPO_OUT } from "@/lib/motion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${SITE_CONTENT.game.title} — ${SITE_CONTENT.game.subtitle}` },
      { name: "description", content: SITE_CONTENT.game.description },
      {
        property: "og:title",
        content: `${SITE_CONTENT.game.title} — ${SITE_CONTENT.game.subtitle}`,
      },
      { property: "og:description", content: SITE_CONTENT.game.tagline },
    ],
  }),
  component: Index,
});

function Index() {
  const stats = SITE_CONTENT.stats.items;
  return (
    <>
      <Hero />

      <hr className="section-divider" />

      <section
        className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden px-6 py-[160px] text-center"
        style={{ background: "var(--void-black)" }}
      >
        {/* Watermark mark — colossal, faint, parallax-feel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 0.06, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 2.2, ease: EXPO_OUT }}
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
          style={{ color: "var(--plasma-cyan)" }}
          aria-hidden
        >
          <VoidMark size={520} glow={false} />
        </motion.div>

        {/* Soft radial wash */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70vw 50vw at 50% 50%, rgba(79,195,247,0.05), transparent 70%)",
          }}
        />

        <div className="relative flex flex-col gap-6">
          {SITE_CONTENT.home.teaserWords.map((w, i) => (
            <motion.div
              key={w}
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.1, delay: i * 0.18, ease: EXPO_OUT }}
              className="font-display font-bold"
              style={{
                color: "var(--text-secondary)",
                fontSize: "clamp(32px, 5vw, 48px)",
                letterSpacing: "0.05em",
              }}
            >
              {w}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.1, delay: 0.7, ease: EXPO_OUT }}
          className="relative mt-20"
        >
          <Link
            to="/lore"
            className="font-body inline-flex items-center gap-2 text-[13px]"
            style={{ color: "var(--text-muted)", fontWeight: 300 }}
          >
            <motion.span
              animate={{ y: [0, 3, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              ↓
            </motion.span>
            <span className="transition-colors duration-400 hover:text-[color:var(--text-secondary)]">
              {SITE_CONTENT.home.teaserLink}
            </span>
          </Link>
        </motion.div>
      </section>

      <hr className="section-divider" />

      {/* Glassmorphic scale pillars */}
      <section
        className="relative overflow-hidden px-6 py-[120px]"
        style={{ background: "var(--void-black)" }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60vw 40vw at 20% 30%, rgba(124,77,255,0.06), transparent 70%), radial-gradient(ellipse 60vw 40vw at 80% 70%, rgba(79,195,247,0.05), transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, ease: EXPO_OUT }}
            className="font-mono-ui mb-12 text-center text-[11px] uppercase tracking-[0.35em]"
            style={{ color: "var(--text-muted)" }}
          >
            {SITE_CONTENT.stats.sectionLabel}
          </motion.div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, delay: i * 0.08, ease: EXPO_OUT }}
                whileHover={{ y: -4 }}
                className="glass relative overflow-hidden rounded-2xl p-7"
                style={{
                  borderColor: "rgba(79,195,247,0.18)",
                }}
              >
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(79,195,247,0.22), transparent 70%)",
                    filter: "blur(20px)",
                  }}
                />
                <div
                  className="font-display text-[44px] font-bold leading-none"
                  style={{ color: "var(--plasma-cyan)" }}
                >
                  {s.value !== null ? s.value : ""}
                  {s.suffix}
                </div>
                <div
                  className="font-mono-ui mt-4 text-[10.5px] uppercase tracking-[0.25em]"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {s.label}
                </div>
                <div
                  className="font-body mt-3 text-[12.5px] leading-[1.7]"
                  style={{ color: "var(--text-muted)", fontWeight: 300 }}
                >
                  {s.sub}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      <WorldPillars />
    </>
  );
}
