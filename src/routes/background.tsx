import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageTitle } from "@/components/PageTitle";
import { SITE_CONTENT } from "@/config/content";
import { EXPO_OUT } from "@/lib/motion";

export const Route = createFileRoute("/background")({
  head: () => ({
    meta: [
      { title: `${SITE_CONTENT.pages.background} — ${SITE_CONTENT.game.title}` },
      { name: "description", content: SITE_CONTENT.background.intro },
      { property: "og:title", content: `${SITE_CONTENT.pages.background} — ${SITE_CONTENT.game.title}` },
      { property: "og:description", content: SITE_CONTENT.background.intro },
    ],
  }),
  component: BackgroundPage,
});

function BackgroundPage() {
  const c = SITE_CONTENT.background;
  return (
    <>
      <section
        className="relative flex items-center justify-center px-6 pt-[180px] pb-[40px]"
        style={{ background: "var(--void-black)" }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80vw 60vh at 50% 30%, rgba(79,195,247,0.06), transparent 70%)",
            animation: "ambient-drift 24s ease-in-out infinite",
          }}
        />
        <div className="relative">
          <PageTitle title={SITE_CONTENT.pages.background} />
        </div>
      </section>

      <section className="px-6 pb-[120px]" style={{ background: "var(--void-black)" }}>
        <div className="mx-auto max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1, ease: EXPO_OUT }}
            className="font-body text-center text-[17px] leading-[1.9]"
            style={{ color: "var(--text-secondary)", fontWeight: 300 }}
          >
            {c.intro}
          </motion.p>

          <div className="mt-24 flex flex-col gap-16">
            {c.chapters.map((ch, i) => (
              <motion.article
                key={ch.id}
                initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, delay: i * 0.08, ease: EXPO_OUT }}
                className="glass rounded-2xl p-8 md:p-10"
              >
                <div
                  className="font-mono-ui text-[11px] uppercase tracking-[0.3em]"
                  style={{ color: "var(--plasma-cyan)", opacity: 0.7 }}
                >
                  {ch.era}
                </div>
                <h3
                  className="mt-4 font-display text-[28px] font-bold leading-tight md:text-[34px]"
                  style={{ color: "var(--text-primary)" }}
                >
                  {ch.title}
                </h3>
                <p
                  className="mt-5 font-body text-[15px] leading-[1.9]"
                  style={{ color: "var(--text-muted)", fontWeight: 300 }}
                >
                  {ch.body}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
