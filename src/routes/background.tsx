import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageTitle } from "@/components/PageTitle";
import { SITE_CONTENT } from "@/config/content";
import { EXPO_OUT } from "@/lib/motion";
import { ParallaxBackdrop } from "@/components/visuals/ParallaxBackdrop";
import { SCENE_MAP } from "@/components/media/sceneMap";
import { TimelineRail } from "@/components/visuals/TimelineRail";

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

const CHAPTER_SCENES = ["temple", "voidbreach", "singularity", "neocitadel"] as const;

function BackgroundPage() {
  const c = SITE_CONTENT.background;
  return (
    <>
      <ParallaxBackdrop tint="amber" />

      <section className="relative flex items-center justify-center px-6 pt-[180px] pb-[40px]">
        <div className="relative">
          <PageTitle title={SITE_CONTENT.pages.background} />
        </div>
      </section>

      <section className="px-6 pb-[120px]">
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

          <div className="relative mt-24 pl-0 md:pl-12">
            <TimelineRail nodes={c.chapters.length} />
            <div className="flex flex-col gap-16">
              {c.chapters.map((ch, i) => {
                const Scene = SCENE_MAP[CHAPTER_SCENES[i % CHAPTER_SCENES.length]];
                return (
                  <motion.article
                    key={ch.id}
                    initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 1, delay: i * 0.05, ease: EXPO_OUT }}
                    className="glass group overflow-hidden rounded-2xl"
                  >
                    {/* Scene cover */}
                    <div className="relative h-[200px] w-full overflow-hidden">
                      {Scene && <Scene />}
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            "linear-gradient(180deg, transparent 30%, rgba(5,5,8,0.92) 100%)",
                        }}
                      />
                      <div className="absolute bottom-3 left-5 right-5 flex items-center justify-between">
                        <div
                          className="font-mono-ui text-[10px] uppercase tracking-[0.3em]"
                          style={{ color: "var(--plasma-cyan)", opacity: 0.85 }}
                        >
                          {ch.era}
                        </div>
                        <div
                          className="font-mono-ui text-[9px] uppercase tracking-[0.25em]"
                          style={{ color: "var(--text-muted)" }}
                        >
                          CHAPTER {String(i + 1).padStart(2, "0")}
                        </div>
                      </div>
                    </div>

                    <div className="p-8 md:p-10">
                      <h3
                        className="font-display text-[28px] font-bold leading-tight md:text-[34px]"
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
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
