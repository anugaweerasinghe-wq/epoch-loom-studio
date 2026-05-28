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
        className={`mx-auto grid max-w-7xl items-center gap-10 px-6 lg:gap-16 ${isRight ? "lg:grid-cols-[1.2fr_1fr]" : "lg:grid-cols-[1fr_1.2fr]"}`}
      >
        {/* Scene */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.1, ease: EXPO_OUT }}
          className={`relative h-[300px] w-full overflow-hidden rounded-2xl ${isRight ? "lg:order-2" : "lg:order-1"}`}
          style={{ border: "1px solid rgba(255,255,255,0.06)" }}
        >
          <motion.div className="absolute inset-[-10%] h-[120%] w-[120%]" style={{ y }}>
            <Scene />
          </motion.div>
        </motion.div>

        {/* Text */}
        <div className={isRight ? "lg:order-1" : "lg:order-2"}>
          <motion.div
            {...textReveal}
            className="font-mono-ui text-[10px] uppercase"
            style={{ color: "var(--text-secondary)", opacity: 0.6, letterSpacing: "0.25em" }}
          >
            {pillar.label}
          </motion.div>
          <motion.h3
            {...textReveal}
            transition={{ ...textReveal.transition, delay: 0.1 }}
            className="font-display mt-4 font-bold tracking-tight"
            style={{
              color: "var(--text-primary)",
              fontSize: "clamp(28px, 4vw, 40px)",
              lineHeight: 1.15,
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
                  border: "1px solid rgba(255,255,255,0.08)",
                  background: "rgba(255,255,255,0.02)",
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
