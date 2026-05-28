import { motion } from "framer-motion";
import { SITE_CONTENT } from "@/config/content";
import { useCountUp } from "@/hooks/useCountUp";
import { textReveal, EXPO_OUT } from "@/lib/motion";

function StatCard({
  value,
  suffix,
  label,
  sub,
  delay,
}: {
  value: number | null;
  suffix: string;
  label: string;
  sub: string;
  delay: number;
}) {
  const { ref, value: count } = useCountUp(value, 2000);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay, ease: EXPO_OUT }}
      className="glass flex flex-col items-center rounded-2xl p-10 text-center"
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
          opacity: 0.7,
          letterSpacing: "0.2em",
        }}
      >
        {label}
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: delay + 0.3, ease: "easeOut" }}
        className="font-body mt-4 max-w-[200px] text-[12px]"
        style={{ color: "var(--text-muted)", fontWeight: 300, lineHeight: 1.7 }}
      >
        {sub}
      </motion.p>
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
        <motion.div {...textReveal} className="mb-16 text-center">
          <div
            className="font-mono-ui text-[10px] uppercase"
            style={{ color: "var(--text-secondary)", opacity: 0.6, letterSpacing: "0.25em" }}
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
              sub={s.sub}
              delay={i * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
