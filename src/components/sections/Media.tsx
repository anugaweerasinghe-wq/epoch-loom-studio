import { motion } from "framer-motion";
import { Maximize2, Play } from "lucide-react";
import { SITE_CONTENT } from "@/config/content";

export function Media() {
  const shots = SITE_CONTENT.media.screenshots;
  return (
    <section
      id="media"
      className="relative px-6 py-[120px]"
      style={{ background: "var(--void-black)" }}
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div
            className="font-mono-ui text-[10px] uppercase tracking-[0.35em]"
            style={{ color: "var(--plasma-cyan)" }}
          >
            ◆ {SITE_CONTENT.media.sectionLabel} ◆
          </div>
          <h2
            className="font-display mt-4 text-[40px] font-bold leading-tight sm:text-[56px] glow-text-blue"
            style={{ color: "var(--text-primary)" }}
          >
            {SITE_CONTENT.media.sectionTitle}
          </h2>
        </motion.div>

        {/* Masonry */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {shots.map((s, i) => {
            const sizes = [
              "lg:row-span-2 lg:col-span-1 min-h-[400px]",
              "min-h-[260px]",
              "min-h-[260px]",
              "min-h-[260px] lg:col-span-2",
              "min-h-[260px]",
            ];
            return (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className={`group relative overflow-hidden rounded-2xl ${sizes[i] ?? ""}`}
                style={{
                  background: s.gradient,
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {/* Decorative noise/grid */}
                <div
                  className="absolute inset-0 opacity-30 mix-blend-overlay"
                  style={{
                    background:
                      "repeating-linear-gradient(45deg, transparent 0 2px, rgba(255,255,255,0.04) 2px 3px)",
                  }}
                />
                {/* Hover label */}
                <div className="absolute inset-x-0 bottom-0 translate-y-full bg-black/60 p-5 backdrop-blur-md transition-transform duration-500 group-hover:translate-y-0">
                  <div className="flex items-center justify-between">
                    <div
                      className="font-mono-ui text-[11px] uppercase tracking-[0.25em]"
                      style={{ color: "var(--plasma-cyan)" }}
                    >
                      {s.name}
                    </div>
                    <Maximize2 size={16} style={{ color: "var(--text-secondary)" }} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Trailer */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          whileHover={{ scale: 1.01 }}
          className="glass group relative mt-8 aspect-video w-full overflow-hidden rounded-2xl transition-shadow duration-500 hover:[box-shadow:0_0_0_1px_rgba(79,195,247,0.3),0_0_60px_rgba(79,195,247,0.2)]"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, #0d0a1a 0%, #050508 100%)",
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "repeating-linear-gradient(0deg, transparent 0 2px, rgba(255,255,255,0.02) 2px 3px)",
            }}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
            <div
              className="flex h-20 w-20 items-center justify-center rounded-full transition-transform group-hover:scale-110"
              style={{
                background: "rgba(79,195,247,0.15)",
                border: "1px solid rgba(79,195,247,0.6)",
                boxShadow: "0 0 40px rgba(79,195,247,0.5)",
              }}
            >
              <Play size={32} style={{ color: "var(--plasma-cyan)" }} fill="currentColor" />
            </div>
            <div
              className="font-mono-ui text-[11px] uppercase tracking-[0.3em]"
              style={{ color: "var(--text-primary)" }}
            >
              {SITE_CONTENT.media.trailer.label}
            </div>
            <div
              className="font-mono-ui text-[10px] tracking-[0.2em]"
              style={{ color: "var(--text-muted)" }}
            >
              {SITE_CONTENT.media.trailer.duration}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
