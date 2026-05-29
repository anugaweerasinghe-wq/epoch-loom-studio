import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageTitle } from "@/components/PageTitle";
import { SITE_CONTENT } from "@/config/content";
import { EXPO_OUT } from "@/lib/motion";

export const Route = createFileRoute("/soundtrack")({
  head: () => ({
    meta: [
      { title: `${SITE_CONTENT.pages.soundtrack} — ${SITE_CONTENT.game.title}` },
      { name: "description", content: SITE_CONTENT.soundtrack.intro },
      { property: "og:title", content: `${SITE_CONTENT.pages.soundtrack} — ${SITE_CONTENT.game.title}` },
      { property: "og:description", content: SITE_CONTENT.soundtrack.intro },
    ],
  }),
  component: SoundtrackPage,
});

function SoundtrackPage() {
  const c = SITE_CONTENT.soundtrack;
  return (
    <>
      <section
        className="relative flex items-center justify-center px-6 pt-[180px] pb-[40px]"
        style={{ background: "var(--void-black)" }}
      >
        <PageTitle title={SITE_CONTENT.pages.soundtrack} />
      </section>

      <section className="px-6 pb-[140px]" style={{ background: "var(--void-black)" }}>
        <div className="mx-auto max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, ease: EXPO_OUT }}
            className="font-body text-center text-[16px] leading-[1.9]"
            style={{ color: "var(--text-secondary)", fontWeight: 300 }}
          >
            {c.intro}
          </motion.p>
        </div>

        <div className="mx-auto mt-20 max-w-4xl">
          <div
            className="font-mono-ui mb-4 grid grid-cols-[40px_1fr_1fr_60px] gap-4 px-6 text-[10px] uppercase tracking-[0.25em]"
            style={{ color: "var(--text-muted)" }}
          >
            <span>№</span>
            <span>TRACK</span>
            <span className="hidden md:block">PAGE</span>
            <span className="text-right md:hidden"> </span>
            <span className="text-right">LEN</span>
          </div>
          <div className="flex flex-col gap-px overflow-hidden rounded-2xl glass">
            {c.tracks.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.04, ease: EXPO_OUT }}
                className="grid grid-cols-[40px_1fr_1fr_60px] items-center gap-4 px-6 py-5 transition-colors duration-300"
                style={{ borderTop: i === 0 ? "none" : "1px solid rgba(255,255,255,0.04)" }}
                whileHover={{ background: "rgba(79,195,247,0.04)" }}
              >
                <span
                  className="font-mono-ui text-[11px]"
                  style={{ color: "var(--text-muted)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <div
                    className="font-display text-[16px] font-bold tracking-[0.02em] truncate"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {t.title}
                  </div>
                  <div
                    className="font-body text-[12px] leading-relaxed truncate"
                    style={{ color: "var(--text-muted)", fontWeight: 300 }}
                  >
                    {t.note}
                  </div>
                </div>
                <div
                  className="font-mono-ui hidden text-[10.5px] uppercase tracking-[0.25em] md:block"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {t.page}
                </div>
                <div
                  className="font-mono-ui text-right text-[11px]"
                  style={{ color: "var(--text-muted)" }}
                >
                  {t.duration}
                </div>
              </motion.div>
            ))}
          </div>

          <p
            className="mt-10 text-center font-mono-ui text-[10.5px] uppercase tracking-[0.25em]"
            style={{ color: "var(--text-muted)" }}
          >
            ◆ Audio system mounts in a later release · use the global player when available
          </p>
        </div>
      </section>
    </>
  );
}
