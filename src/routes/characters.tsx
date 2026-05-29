import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageTitle } from "@/components/PageTitle";
import { Classes } from "@/components/sections/Classes";
import { SITE_CONTENT } from "@/config/content";
import { EXPO_OUT } from "@/lib/motion";

export const Route = createFileRoute("/characters")({
  head: () => ({
    meta: [
      { title: `${SITE_CONTENT.pages.characters} — ${SITE_CONTENT.game.title}` },
      { name: "description", content: "Twelve warriors born from the death of the last star. One of them is not accounted for." },
      { property: "og:title", content: `${SITE_CONTENT.pages.characters} — ${SITE_CONTENT.game.title}` },
      { property: "og:description", content: "Twelve Voidborn classes. One [REDACTED]." },
    ],
  }),
  component: CharactersPage,
});

function CharactersPage() {
  return (
    <>
      <section
        className="relative flex items-center justify-center px-6 pt-[180px] pb-[40px]"
        style={{ background: "var(--void-black)" }}
      >
        <PageTitle title={SITE_CONTENT.pages.characters} />
      </section>

      <section className="px-6 py-[80px]" style={{ background: "var(--void-black)" }}>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SITE_CONTENT.voidborn.map((v, i) => {
            const redacted = v.name === "[REDACTED]";
            return (
              <motion.div
                key={v.id}
                initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: (i % 6) * 0.06, ease: EXPO_OUT }}
                whileHover={{ y: -3 }}
                className="glass relative flex flex-col rounded-2xl p-7 overflow-hidden"
                style={{
                  background: redacted ? "rgba(0,0,0,0.5)" : undefined,
                }}
              >
                <div
                  className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full"
                  style={{
                    background: `radial-gradient(circle, ${v.color}22, transparent 70%)`,
                    filter: "blur(20px)",
                  }}
                />
                <div className="relative flex items-center justify-between">
                  <div
                    className="font-mono-ui text-[11px] uppercase tracking-[0.3em]"
                    style={{ color: "var(--text-muted)" }}
                  >
                    № {v.id}
                  </div>
                  <div
                    className="font-mono-ui text-[10px] uppercase tracking-[0.25em]"
                    style={{ color: v.color, opacity: 0.85 }}
                  >
                    {v.role}
                  </div>
                </div>
                <h3
                  className="relative mt-6 font-display text-[26px] font-bold leading-tight"
                  style={{
                    color: redacted ? "var(--text-muted)" : "var(--text-primary)",
                    letterSpacing: "0.02em",
                  }}
                >
                  {v.name}
                </h3>
                <p
                  className="relative mt-3 font-body text-[14px] leading-[1.8]"
                  style={{ color: "var(--text-muted)", fontWeight: 300 }}
                >
                  {v.line}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <hr className="section-divider" />
      <Classes />
    </>
  );
}
