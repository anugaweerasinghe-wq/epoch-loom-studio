import { motion } from "framer-motion";
import { SITE_CONTENT } from "@/config/content";
import { useCountUp } from "@/hooks/useCountUp";
import { premiumReveal, PREMIUM_EASE } from "@/lib/motion";

function StatCard({
  value,
  suffix,
  label,
  delay,
}: {
  value: number | null;
  suffix: string;
  label: string;
  delay: number;
}) {
  const { ref, value: count } = useCountUp(value, 2000);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.9, delay, ease: PREMIUM_EASE }}
      className="glass rounded-2xl p-10 text-center"
    >
      <div
        className="font-display font-bold leading-none"
        style={{
          color: "var(--text-primary)",
          fontSize: "clamp(48px, 6vw, 72px)",
        }}
      >
        {value == null ? suffix : `${count.toLocaleString()}${suffix}`}
      </div>
      <div
        className="font-mono-ui mt-4 text-[10px] uppercase"
        style={{
          color: "var(--text-secondary)",
          opacity: 0.6,
          letterSpacing: "0.2em",
        }}
      >
        {label}
      </div>
    </motion.div>
  );
}

export function Stats() {
  return (
    <section
      className="relative overflow-hidden px-6 py-[140px]"
      style={{ background: "var(--void-deep)" }}
    >
      <div className="relative mx-auto max-w-7xl">
        <motion.div {...premiumReveal} className="mb-16 text-center">
          <div
            className="font-mono-ui text-[10px] uppercase"
            style={{ color: "var(--text-secondary)", opacity: 0.6, letterSpacing: "0.2em" }}
          >
            {SITE_CONTENT.stats.sectionLabel}
          </div>
        </motion.div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SITE_CONTENT.stats.items.map((s, i) => (
            <StatCard
              key={s.id}
              value={s.value}
              suffix={s.suffix}
              label={s.label}
              delay={i * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
