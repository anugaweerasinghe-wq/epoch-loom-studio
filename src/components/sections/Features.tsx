import { motion } from "framer-motion";
import { Zap, Clock, Shield, Users, Sun, Infinity as InfinityIcon } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SITE_CONTENT } from "@/config/content";
import { premiumReveal, staggerParent, staggerChild } from "@/lib/motion";

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
      className="relative overflow-hidden px-6 py-[140px]"
      style={{ background: "var(--void-deep)" }}
    >
      <div className="mx-auto max-w-7xl">
        <motion.div {...premiumReveal} className="mb-20 text-center">
          <div
            className="font-mono-ui text-[10px] uppercase"
            style={{ color: "var(--text-secondary)", opacity: 0.6, letterSpacing: "0.2em" }}
          >
            {SITE_CONTENT.features.sectionLabel}
          </div>
          <h2
            className="font-display mt-5 font-bold leading-tight"
            style={{
              color: "var(--text-primary)",
              fontSize: "clamp(36px, 5.5vw, 56px)",
            }}
          >
            {SITE_CONTENT.features.sectionTitle}
          </h2>
          <p
            className="font-body mt-5 text-[15px]"
            style={{ color: "var(--text-secondary)", lineHeight: 1.9 }}
          >
            {SITE_CONTENT.features.sectionSubtitle}
          </p>
        </motion.div>

        <motion.div
          {...staggerParent}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SITE_CONTENT.features.items.map((f) => {
            const Icon = ICONS[f.icon] ?? Zap;
            return (
              <motion.div
                key={f.id}
                variants={staggerChild}
                className="glass group relative overflow-hidden rounded-2xl p-8"
                style={{
                  transition:
                    "transform 400ms ease, border-color 400ms ease, background 400ms ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div
                  className="mb-6 flex h-11 w-11 items-center justify-center rounded-lg"
                  style={{ background: "rgba(255,255,255,0.04)" }}
                >
                  <Icon
                    size={22}
                    className="transition-colors duration-400"
                    style={{ color: "var(--text-secondary)" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as SVGElement).style.color = f.color;
                    }}
                  />
                </div>
                <h3
                  className="font-display text-[18px] font-bold tracking-wide"
                  style={{ color: "var(--text-primary)" }}
                >
                  {f.title}
                </h3>
                <p
                  className="font-body mt-3 text-[14px]"
                  style={{ color: "var(--text-secondary)", lineHeight: 1.9 }}
                >
                  {f.body}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
