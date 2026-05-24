import { motion } from "framer-motion";
import { SITE_CONTENT } from "@/config/content";
import { CosmicPanel } from "@/components/svg/CosmicPanel";

export function Story() {
  return (
    <section
      id="story"
      className="relative px-6 py-[120px]"
      style={{ background: "var(--void-black)" }}
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div
            className="font-mono-ui text-[10px] uppercase tracking-[0.35em]"
            style={{ color: "var(--plasma-cyan)" }}
          >
            ◆ {SITE_CONTENT.story.sectionLabel} ◆
          </div>
          <h2
            className="font-display mt-4 text-[40px] font-bold leading-tight tracking-tight sm:text-[56px] glow-text-blue"
            style={{ color: "var(--text-primary)" }}
          >
            {SITE_CONTENT.story.sectionTitle}
          </h2>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
          {/* Timeline */}
          <div className="relative">
            {/* Dashed vertical line */}
            <div
              className="absolute bottom-3 left-[14px] top-3 w-px"
              style={{
                background:
                  "repeating-linear-gradient(to bottom, var(--plasma-cyan) 0 4px, transparent 4px 10px)",
              }}
            />
            <div className="flex flex-col gap-8">
              {SITE_CONTENT.story.beats.map((b, i) => (
                <motion.div
                  key={b.id}
                  initial={{ opacity: 0, x: -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.7,
                    delay: i * 0.15,
                    ease: "easeOut",
                  }}
                  className="relative flex gap-6 pl-0"
                >
                  {/* Node */}
                  <div className="relative z-10 flex h-[30px] w-[30px] shrink-0 items-center justify-center">
                    <div
                      className="absolute h-[30px] w-[30px] rounded-full opacity-30"
                      style={{ background: "var(--plasma-cyan)", filter: "blur(8px)" }}
                    />
                    <div
                      className="h-[12px] w-[12px] rounded-full"
                      style={{
                        background: "var(--plasma-cyan)",
                        boxShadow: "0 0 16px var(--plasma-cyan)",
                      }}
                    />
                  </div>
                  <div className="glass flex-1 rounded-xl p-6">
                    <div
                      className="font-mono-ui text-[10px] uppercase tracking-[0.25em]"
                      style={{ color: "var(--plasma-cyan)" }}
                    >
                      {b.cycle}
                    </div>
                    <h3
                      className="font-display mt-2 text-[24px] font-bold tracking-wide"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {b.title}
                    </h3>
                    <p
                      className="font-body mt-3 text-[14px] leading-relaxed"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {b.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <CosmicPanel readouts={SITE_CONTENT.story.cosmicPanelReadouts} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
