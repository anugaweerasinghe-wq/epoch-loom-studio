import { motion } from "framer-motion";
import { SITE_CONTENT } from "@/config/content";
import { useCountUp } from "@/hooks/useCountUp";

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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className="glass rounded-2xl p-8 text-center"
    >
      <div
        className="font-display text-[64px] font-bold leading-none sm:text-[80px] glow-text-blue"
        style={{ color: "var(--plasma-blue)" }}
      >
        {value == null ? (
          <motion.span
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: delay + 0.2, type: "spring" }}
            style={{ display: "inline-block" }}
          >
            {suffix}
          </motion.span>
        ) : (
          <>
            {count.toLocaleString()}
            {suffix}
          </>
        )}
      </div>
      <div
        className="font-mono-ui mt-3 text-[10px] uppercase tracking-[0.3em]"
        style={{ color: "var(--text-secondary)" }}
      >
        {label}
      </div>
    </motion.div>
  );
}

export function Stats() {
  return (
    <section
      className="relative overflow-hidden px-6 py-[120px]"
      style={{ background: "var(--void-deep)" }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80vw 50vw at 50% 50%, rgba(124,77,255,0.18), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <div
            className="font-mono-ui text-[10px] uppercase tracking-[0.35em]"
            style={{ color: "var(--plasma-cyan)" }}
          >
            ◆ {SITE_CONTENT.stats.sectionLabel} ◆
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
