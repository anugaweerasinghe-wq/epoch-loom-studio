import { motion } from "framer-motion";
import { SITE_CONTENT } from "@/config/content";
import { CosmicPanel } from "@/components/svg/CosmicPanel";
import { premiumReveal, staggerParent, staggerChild } from "@/lib/motion";

export function Story() {
  return (
    <section
      className="relative px-6 py-[140px]"
      style={{ background: "var(--void-black)" }}
    >
      <div className="mx-auto max-w-7xl">
        <motion.div {...premiumReveal} className="mb-20 text-center">
          <div
            className="font-mono-ui text-[10px] uppercase"
            style={{ color: "var(--text-secondary)", opacity: 0.6, letterSpacing: "0.2em" }}
          >
            {SITE_CONTENT.story.sectionLabel}
          </div>
          <h2
            className="font-display mt-5 font-bold leading-tight tracking-tight"
            style={{
              color: "var(--text-primary)",
              fontSize: "clamp(36px, 5.5vw, 56px)",
            }}
          >
            {SITE_CONTENT.story.sectionTitle}
          </h2>
        </motion.div>

        <div className="grid items-center gap-16 lg:grid-cols-[1fr_1fr]">
          {/* Timeline */}
          <div className="relative">
            <div
              className="absolute bottom-3 left-[14px] top-3 w-px"
              style={{
                background:
                  "repeating-linear-gradient(to bottom, rgba(255,255,255,0.15) 0 4px, transparent 4px 10px)",
              }}
            />
            <motion.div {...staggerParent} className="flex flex-col gap-12">
              {SITE_CONTENT.story.beats.map((b) => (
                <motion.div
                  key={b.id}
                  variants={staggerChild}
                  className="relative flex gap-6"
                >
                  <div className="relative z-10 flex h-[30px] w-[30px] shrink-0 items-center justify-center">
                    <div
                      className="h-[10px] w-[10px] rounded-full"
                      style={{ background: "rgba(255,255,255,0.4)" }}
                    />
                  </div>
                  <div className="glass flex-1 rounded-2xl p-8">
                    <div
                      className="font-mono-ui text-[10px] uppercase"
                      style={{
                        color: "var(--text-secondary)",
                        opacity: 0.6,
                        letterSpacing: "0.2em",
                      }}
                    >
                      {b.cycle}
                    </div>
                    <h3
                      className="font-display mt-3 text-[22px] font-bold tracking-wide"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {b.title}
                    </h3>
                    <p
                      className="font-body mt-3 text-[14px]"
                      style={{ color: "var(--text-secondary)", lineHeight: 1.9 }}
                    >
                      {b.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Panel */}
          <motion.div {...premiumReveal}>
            <CosmicPanel readouts={SITE_CONTENT.story.cosmicPanelReadouts} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
