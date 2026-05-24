import { motion } from "framer-motion";
import { Zap, Clock, Shield, Users, Sun, Infinity as InfinityIcon } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SITE_CONTENT } from "@/config/content";

const ICONS: Record<string, LucideIcon> = {
  zap: Zap,
  clock: Clock,
  shield: Shield,
  users: Users,
  sun: Sun,
  infinity: InfinityIcon,
};

export function Features() {
  return (
    <section
      id="universe"
      className="relative overflow-hidden px-6 py-[120px]"
      style={{
        background: "var(--void-deep)",
        backgroundImage:
          "repeating-linear-gradient(45deg, transparent 0 24px, rgba(255,255,255,0.015) 24px 25px)",
      }}
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
            style={{ color: "var(--nova-gold)" }}
          >
            ◆ {SITE_CONTENT.features.sectionLabel} ◆
          </div>
          <h2
            className="font-display mt-4 text-[40px] font-bold leading-tight sm:text-[56px] glow-text-gold"
            style={{ color: "var(--text-primary)" }}
          >
            {SITE_CONTENT.features.sectionTitle}
          </h2>
          <p
            className="font-body mt-4 text-[15px]"
            style={{ color: "var(--text-secondary)" }}
          >
            {SITE_CONTENT.features.sectionSubtitle}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SITE_CONTENT.features.items.map((f) => {
            const Icon = ICONS[f.icon] ?? Zap;
            return (
              <motion.div
                key={f.id}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                whileHover={{ scale: 1.02 }}
                className="glass group relative overflow-hidden rounded-xl p-7 transition-shadow duration-300"
                style={{ borderBottom: `2px solid ${f.color}` }}
              >
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${f.color}22, transparent 70%)`,
                  }}
                />
                <div className="relative">
                  <div
                    className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg"
                    style={{
                      background: `${f.color}1a`,
                      boxShadow: `0 0 24px ${f.color}55`,
                    }}
                  >
                    <Icon size={26} style={{ color: f.color }} />
                  </div>
                  <h3
                    className="font-display text-[20px] font-bold tracking-wide"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {f.title}
                  </h3>
                  <p
                    className="font-body mt-3 text-[14px] leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {f.body}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
