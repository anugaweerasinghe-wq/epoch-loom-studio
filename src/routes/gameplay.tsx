import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageTitle } from "@/components/PageTitle";
import { SITE_CONTENT } from "@/config/content";
import { EXPO_OUT } from "@/lib/motion";
import { ParallaxBackdrop } from "@/components/visuals/ParallaxBackdrop";
import { SCENE_MAP } from "@/components/media/sceneMap";
import { FloatingShards } from "@/components/visuals/FloatingShards";

export const Route = createFileRoute("/gameplay")({
  head: () => ({
    meta: [
      { title: `${SITE_CONTENT.pages.gameplay} — ${SITE_CONTENT.game.title}` },
      { name: "description", content: SITE_CONTENT.gameplay.intro },
      { property: "og:title", content: `${SITE_CONTENT.pages.gameplay} — ${SITE_CONTENT.game.title}` },
      { property: "og:description", content: SITE_CONTENT.gameplay.intro },
    ],
  }),
  component: GameplayPage,
});

function GameplayPage() {
  const c = SITE_CONTENT.gameplay;
  const Hero = SCENE_MAP.neocitadel;

  return (
    <>
      <ParallaxBackdrop tint="cyan" />

      <section className="relative flex items-center justify-center px-6 pt-[180px] pb-[40px]">
        <PageTitle title={SITE_CONTENT.pages.gameplay} />
      </section>

      {/* Cinematic hero strip */}
      <section className="px-6">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.1, ease: EXPO_OUT }}
          className="glass relative mx-auto max-w-6xl overflow-hidden rounded-2xl"
          style={{ borderColor: "rgba(79,195,247,0.18)" }}
        >
          <div className="relative h-[280px] md:h-[360px]">
            {Hero && <Hero />}
            <FloatingShards />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(5,5,8,0.3) 0%, rgba(5,5,8,0.85) 90%)",
              }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-end px-6 pb-8 text-center">
              <div
                className="font-mono-ui text-[10.5px] uppercase tracking-[0.35em]"
                style={{ color: "var(--plasma-cyan)" }}
              >
                {c.sectionLabel}
              </div>
              <h2
                className="mt-3 font-display text-[34px] font-bold leading-tight md:text-[44px]"
                style={{ color: "var(--text-primary)" }}
              >
                {c.sectionTitle}
              </h2>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="px-6 pt-20 pb-[140px]">
        <div className="mx-auto max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, ease: EXPO_OUT }}
            className="font-body text-center text-[17px] leading-[1.9]"
            style={{ color: "var(--text-secondary)", fontWeight: 300 }}
          >
            {c.intro}
          </motion.p>
        </div>

        <div className="mx-auto mt-24 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {c.pillars.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, delay: i * 0.06, ease: EXPO_OUT }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className="glass group relative flex flex-col overflow-hidden rounded-2xl p-8"
              style={{ transition: "border-color 400ms ease, box-shadow 400ms ease" }}
            >
              <div
                className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background: "radial-gradient(circle, rgba(79,195,247,0.18), transparent 70%)",
                }}
              />
              <div
                className="font-mono-ui text-[44px] font-bold leading-none"
                style={{ color: "var(--plasma-cyan)", opacity: 0.18 }}
              >
                {p.index}
              </div>
              <h3
                className="mt-2 font-display text-[24px] font-bold"
                style={{ color: "var(--text-primary)" }}
              >
                {p.title}
              </h3>
              <p
                className="mt-4 font-body text-[14px] leading-[1.9]"
                style={{ color: "var(--text-muted)", fontWeight: 300 }}
              >
                {p.body}
              </p>
              <div
                className="mt-6 flex flex-col gap-2 border-t pt-5"
                style={{ borderColor: "rgba(255,255,255,0.06)" }}
              >
                {p.metrics.map(([k, v]) => (
                  <div
                    key={k}
                    className="font-mono-ui flex items-center justify-between text-[10.5px] uppercase tracking-[0.2em]"
                  >
                    <span style={{ color: "var(--text-muted)" }}>{k}</span>
                    <span style={{ color: "var(--plasma-cyan)" }}>{v}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
