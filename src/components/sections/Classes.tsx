import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE_CONTENT } from "@/config/content";
import { ClassSilhouette } from "@/components/svg/ClassSilhouette";
import { premiumReveal, PREMIUM_EASE } from "@/lib/motion";

export function Classes() {
  const items = SITE_CONTENT.classes.items;
  const [activeId, setActiveId] = useState(items[0].id);
  const active = items.find((c) => c.id === activeId)!;

  return (
    <section
      className="relative px-6 py-[140px]"
      style={{ background: "var(--void-black)" }}
    >
      <div className="mx-auto max-w-7xl">
        <motion.div {...premiumReveal} className="mb-16 text-center">
          <div
            className="font-mono-ui text-[10px] uppercase"
            style={{ color: "var(--text-secondary)", opacity: 0.6, letterSpacing: "0.2em" }}
          >
            {SITE_CONTENT.classes.sectionLabel}
          </div>
          <h2
            className="font-display mt-5 font-bold leading-tight"
            style={{
              color: "var(--text-primary)",
              fontSize: "clamp(36px, 5.5vw, 56px)",
            }}
          >
            {SITE_CONTENT.classes.sectionTitle}
          </h2>
        </motion.div>

        <div className="mb-12 flex justify-center">
          <div className="glass inline-flex overflow-x-auto rounded-full p-1.5">
            {items.map((c) => {
              const isActive = c.id === activeId;
              return (
                <button
                  key={c.id}
                  onClick={() => setActiveId(c.id)}
                  className="font-mono-ui relative whitespace-nowrap rounded-full px-6 py-2.5 text-[11px] uppercase tracking-[0.2em] transition-colors duration-400"
                  style={{
                    color: isActive ? "var(--text-primary)" : "var(--text-secondary)",
                  }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="class-pill"
                      className="absolute inset-0 rounded-full"
                      style={{ background: "rgba(255,255,255,0.08)" }}
                      transition={{ duration: 0.5, ease: PREMIUM_EASE }}
                    />
                  )}
                  <span className="relative">{c.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.6, ease: PREMIUM_EASE }}
            className="grid items-center gap-12 lg:grid-cols-[1fr_1.2fr]"
          >
            <div className="relative mx-auto h-[460px] w-full max-w-[460px]">
              <ClassSilhouette
                variant={active.id as "starbreaker" | "chronoslip" | "plasmaweave"}
                color={active.colorAccent}
              />
            </div>

            <div className="glass-strong rounded-2xl p-10">
              <div className="flex items-baseline gap-4">
                <div
                  className="font-display text-[56px] font-bold leading-none"
                  style={{ color: "var(--text-muted)", opacity: 0.5 }}
                >
                  {active.classNumber}
                </div>
                <div>
                  <h3
                    className="font-display text-[36px] font-bold leading-none tracking-wide sm:text-[44px]"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {active.name}
                  </h3>
                  <div
                    className="font-mono-ui mt-3 text-[11px] uppercase"
                    style={{
                      color: "var(--text-secondary)",
                      opacity: 0.6,
                      letterSpacing: "0.2em",
                    }}
                  >
                    {active.archetype}
                  </div>
                </div>
              </div>

              <p
                className="font-body mt-7 text-[15px]"
                style={{ color: "var(--text-secondary)", lineHeight: 1.9 }}
              >
                {active.lore}
              </p>

              <div className="mt-8 grid gap-3">
                {Object.entries(active.stats).map(([k, v]) => (
                  <div key={k} className="grid grid-cols-[60px_1fr_30px] items-center gap-3">
                    <span
                      className="font-mono-ui text-[10px] uppercase tracking-[0.2em]"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {k}
                    </span>
                    <div className="h-px overflow-hidden bg-white/8">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${v}%` }}
                        transition={{ duration: 1.1, ease: PREMIUM_EASE }}
                        className="h-full"
                        style={{ background: "rgba(255,255,255,0.5)" }}
                      />
                    </div>
                    <span
                      className="font-mono-ui text-right text-[10px]"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {v}
                    </span>
                  </div>
                ))}
              </div>

              <div
                className="mt-8 rounded-2xl border p-6"
                style={{
                  borderColor: "rgba(255,255,255,0.08)",
                  background: "rgba(255,255,255,0.02)",
                }}
              >
                <div
                  className="font-mono-ui text-[9px] uppercase"
                  style={{
                    color: "var(--text-muted)",
                    letterSpacing: "0.2em",
                  }}
                >
                  SIGNATURE ABILITY
                </div>
                <div
                  className="font-display mt-2 text-[20px] font-bold tracking-wide"
                  style={{ color: "var(--text-primary)" }}
                >
                  {active.ability.name}
                </div>
                <p
                  className="font-body mt-2 text-[13px]"
                  style={{ color: "var(--text-secondary)", lineHeight: 1.9 }}
                >
                  {active.ability.description}
                </p>
              </div>

              <div
                className="font-mono-ui mt-6 text-[10px] uppercase tracking-[0.2em]"
                style={{ color: "var(--text-muted)" }}
              >
                {active.unlockStatus}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
