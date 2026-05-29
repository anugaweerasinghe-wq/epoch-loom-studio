import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageTitle } from "@/components/PageTitle";
import { SITE_CONTENT } from "@/config/content";
import { EXPO_OUT } from "@/lib/motion";

export const Route = createFileRoute("/world")({
  head: () => ({
    meta: [
      { title: `${SITE_CONTENT.pages.world} — ${SITE_CONTENT.game.title}` },
      { name: "description", content: SITE_CONTENT.world.intro },
      { property: "og:title", content: `${SITE_CONTENT.pages.world} — ${SITE_CONTENT.game.title}` },
      { property: "og:description", content: SITE_CONTENT.world.intro },
    ],
  }),
  component: WorldPage,
});

const dangerColor = (d: string) =>
  d === "TERMINAL" || d === "EXTREME" || d === "CRITICAL"
    ? "var(--danger-red)"
    : d === "HIGH"
      ? "var(--nova-amber)"
      : "var(--plasma-cyan)";

function WorldPage() {
  const c = SITE_CONTENT.world;
  return (
    <>
      <section
        className="relative flex items-center justify-center px-6 pt-[180px] pb-[40px]"
        style={{ background: "var(--void-black)" }}
      >
        <PageTitle title={SITE_CONTENT.pages.world} />
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

        <div className="mx-auto mt-24 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
          {c.locations.map((loc, i) => (
            <motion.div
              key={loc.id}
              initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, delay: i * 0.08, ease: EXPO_OUT }}
              whileHover={{ y: -3 }}
              className="glass rounded-2xl p-8 md:p-10"
            >
              <div className="flex items-baseline justify-between">
                <div
                  className="font-mono-ui text-[11px] uppercase tracking-[0.3em]"
                  style={{ color: "var(--plasma-cyan)", opacity: 0.7 }}
                >
                  {loc.epoch}
                </div>
                <div
                  className="font-mono-ui text-[10px] uppercase tracking-[0.25em]"
                  style={{ color: dangerColor(loc.danger) }}
                >
                  ◆ {loc.danger}
                </div>
              </div>
              <h3
                className="mt-4 font-display text-[28px] font-bold leading-tight"
                style={{ color: "var(--text-primary)" }}
              >
                {loc.name}
              </h3>
              <div
                className="mt-2 font-mono-ui text-[10.5px] uppercase tracking-[0.25em]"
                style={{ color: "var(--text-muted)" }}
              >
                {loc.climate}
              </div>
              <p
                className="mt-5 font-body text-[14.5px] leading-[1.9]"
                style={{ color: "var(--text-muted)", fontWeight: 300 }}
              >
                {loc.body}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
