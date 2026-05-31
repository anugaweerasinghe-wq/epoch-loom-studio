import { useRef } from "react";
import { motion } from "framer-motion";
import { SITE_CONTENT } from "@/config/content";
import { SCENE_MAP } from "@/components/media/sceneMap";
import { textReveal, EXPO_OUT } from "@/lib/motion";
import { useSectionParallax } from "@/hooks/useSectionParallax";

function PillarBand({ pillar, index }: { pillar: typeof SITE_CONTENT.home.pillars[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const y = useSectionParallax(ref, 0.2);
  const Scene = SCENE_MAP[pillar.scene];
  const isRight = pillar.align === "right";

  return (
    <div ref={ref} className="relative">
      <div
        className={`mx-auto grid max-w-7xl items-center gap-12 px-6 lg:gap-20 ${isRight ? "lg:grid-cols-[1.15fr_1fr]" : "lg:grid-cols-[1fr_1.15fr]"}`}
      >
        {/* Scene — cinematic framed plate */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 60 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2, ease: EXPO_OUT }}
          className={`group relative h-[380px] w-full overflow-hidden rounded-[28px] ${isRight ? "lg:order-2" : "lg:order-1"}`}
          style={{
            border: "1px solid rgba(79,195,247,0.18)",
            boxShadow:
              "0 30px 80px -30px rgba(0,0,0,0.8), 0 0 60px -20px rgba(79,195,247,0.25), inset 0 1px 0 rgba(255,255,255,0.06)",
          }}
        >
          {/* Parallax scene art */}
          <motion.div className="absolute inset-[-10%] h-[120%] w-[120%]" style={{ y }}>
            <Scene />
          </motion.div>

          {/* Glass top sheen */}
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-1/2"
            style={{
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0.06), transparent)",
            }}
          />

          {/* Bottom vignette + index plate */}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5"
            style={{
              background:
                "linear-gradient(to top, rgba(5,5,15,0.85), transparent)",
            }}
          />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between px-6 pb-5">
            <span
              className="font-mono-ui text-[10px] uppercase tracking-[0.3em]"
              style={{ color: "var(--text-secondary)", opacity: 0.85 }}
            >
              {String(index + 1).padStart(2, "0")} / {String(SITE_CONTENT.home.pillars.length).padStart(2, "0")}
            </span>
            <span
              className="font-mono-ui text-[10px] uppercase tracking-[0.3em]"
              style={{ color: "var(--plasma-cyan)" }}
            >
              ◆ {pillar.label}
            </span>
          </div>

          {/* Hover cyan rim */}
          <div
            className="pointer-events-none absolute inset-0 rounded-[28px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              boxShadow: "inset 0 0 0 1px rgba(79,195,247,0.45)",
            }}
          />
        </motion.div>

        {/* Text */}
        <div className={isRight ? "lg:order-1" : "lg:order-2"}>
          <motion.div
            {...textReveal}
            className="font-mono-ui flex items-center gap-3 text-[10px] uppercase"
            style={{ color: "var(--text-secondary)", opacity: 0.7, letterSpacing: "0.28em" }}
          >
            <span
              className="inline-block h-px w-8"
              style={{ background: "var(--plasma-cyan)", opacity: 0.6 }}
            />
            {pillar.label}
          </motion.div>
          <motion.h3
            {...textReveal}
            transition={{ ...textReveal.transition, delay: 0.1 }}
            className="font-display mt-5 font-bold tracking-tight"
            style={{
              color: "var(--text-primary)",
              fontSize: "clamp(28px, 4vw, 44px)",
              lineHeight: 1.12,
            }}
          >
            {pillar.title}
          </motion.h3>
          <motion.p
            {...textReveal}
            transition={{ ...textReveal.transition, delay: 0.2 }}
            className="font-body mt-6 text-[15px]"
            style={{ color: "var(--text-secondary)", lineHeight: 1.9 }}
          >
            {pillar.body}
          </motion.p>
          <motion.div
            {...textReveal}
            transition={{ ...textReveal.transition, delay: 0.3 }}
            className="mt-7 flex flex-wrap gap-2"
          >
            {pillar.tags.map((t) => (
              <span
                key={t}
                className="font-mono-ui rounded-full px-3 py-1.5 text-[9px] uppercase"
                style={{
                  color: "var(--text-muted)",
                  border: "1px solid rgba(79,195,247,0.18)",
                  background: "rgba(79,195,247,0.04)",
                  letterSpacing: "0.2em",
                }}
              >
                {t}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
      {index < SITE_CONTENT.home.pillars.length - 1 && (
        <hr className="section-divider mx-auto mt-[120px] max-w-7xl" />
      )}
    </div>
  );
}


export function WorldPillars() {
  return (
    <section
      className="relative py-[120px]"
      style={{ background: "var(--void-black)" }}
    >
      <div className="flex flex-col gap-[120px]">
        {SITE_CONTENT.home.pillars.map((p, i) => (
          <PillarBand key={p.id} pillar={p} index={i} />
        ))}
      </div>
    </section>
  );
}
