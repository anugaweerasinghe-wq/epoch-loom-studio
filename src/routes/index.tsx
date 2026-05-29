import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Hero } from "@/components/sections/Hero";
import { WorldPillars } from "@/components/sections/WorldPillars";
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
  return (
    <>
      <Hero />

      <hr className="section-divider" />

      <section
        className="relative flex min-h-[80vh] flex-col items-center justify-center px-6 py-[160px] text-center"
        style={{ background: "var(--void-black)" }}
      >
        <div className="flex flex-col gap-6">
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
          className="mt-20"
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

      <WorldPillars />
    </>
  );
}
