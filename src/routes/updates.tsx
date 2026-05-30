import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageTitle } from "@/components/PageTitle";
import { SITE_CONTENT } from "@/config/content";
import { EXPO_OUT } from "@/lib/motion";
import { ParallaxBackdrop } from "@/components/visuals/ParallaxBackdrop";
import { TimelineRail } from "@/components/visuals/TimelineRail";

export const Route = createFileRoute("/updates")({
  head: () => ({
    meta: [
      { title: `${SITE_CONTENT.pages.updates} — ${SITE_CONTENT.game.title}` },
      { name: "description", content: SITE_CONTENT.updates.intro },
      { property: "og:title", content: `${SITE_CONTENT.pages.updates} — ${SITE_CONTENT.game.title}` },
      { property: "og:description", content: SITE_CONTENT.updates.intro },
    ],
  }),
  component: UpdatesPage,
});

function UpdatesPage() {
  const c = SITE_CONTENT.updates;
  return (
    <>
      <ParallaxBackdrop tint="cyan" />

      <section className="relative flex items-center justify-center px-6 pt-[180px] pb-[40px]">
        <PageTitle title={SITE_CONTENT.pages.updates} />
      </section>

      <section className="px-6 pb-[140px]">
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

          <div className="relative mt-20 pl-0 md:pl-12">
            <TimelineRail nodes={c.entries.length} />
            <div className="flex flex-col gap-5">
              {c.entries.map((e, i) => (
                <motion.article
                  key={e.id}
                  initial={{ opacity: 0, x: -20, filter: "blur(6px)" }}
                  whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.9, delay: i * 0.06, ease: EXPO_OUT }}
                  whileHover={{ x: 4 }}
                  className="glass group relative rounded-2xl p-8"
                >
                  <div className="flex items-center justify-between">
                    <div
                      className="font-mono-ui text-[10.5px] uppercase tracking-[0.3em]"
                      style={{ color: "var(--plasma-cyan)", opacity: 0.85 }}
                    >
                      {e.tag}
                    </div>
                    <div
                      className="font-mono-ui text-[10.5px] uppercase tracking-[0.25em]"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {e.date}
                    </div>
                  </div>
                  <h3
                    className="mt-4 font-display text-[24px] font-bold leading-tight"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {e.title}
                  </h3>
                  <p
                    className="mt-3 font-body text-[14.5px] leading-[1.9]"
                    style={{ color: "var(--text-muted)", fontWeight: 300 }}
                  >
                    {e.body}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
