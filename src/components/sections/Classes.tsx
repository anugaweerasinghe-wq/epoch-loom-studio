import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE_CONTENT } from "@/config/content";
import { ClassSilhouette } from "@/components/svg/ClassSilhouette";

export function Classes() {
  const items = SITE_CONTENT.classes.items;
  const [activeId, setActiveId] = useState(items[0].id);
  const active = items.find((c) => c.id === activeId)!;

  return (
    <section
      id="classes"
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
            style={{ color: "var(--stellar-purple)" }}
          >
            ◆ {SITE_CONTENT.classes.sectionLabel} ◆
          </div>
          <h2
            className="font-display mt-4 text-[40px] font-bold leading-tight sm:text-[56px] glow-text-purple"
            style={{ color: "var(--text-primary)" }}
          >
            {SITE_CONTENT.classes.sectionTitle}
          </h2>
        </motion.div>

        {/* Tab pill */}
        <div className="mb-10 flex justify-center">
          <div className="glass inline-flex overflow-x-auto rounded-full p-1.5">
            {items.map((c) => {
              const isActive = c.id === activeId;
              return (
                <button
                  key={c.id}
                  onClick={() => setActiveId(c.id)}
                  className="font-mono-ui relative whitespace-nowrap rounded-full px-5 py-2.5 text-[11px] uppercase tracking-[0.2em] transition-colors"
                  style={{
                    color: isActive ? "#050508" : "var(--text-secondary)",
                  }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="class-pill"
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: `linear-gradient(135deg, ${c.colorAccent}, #ffffff)`,
                        boxShadow: `0 0 24px ${c.colorAccent}88`,
                      }}
                      transition={{ type: "spring", duration: 0.5 }}
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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="grid items-center gap-12 lg:grid-cols-[1fr_1.2fr]"
          >
            {/* Silhouette */}
            <div className="relative mx-auto h-[460px] w-full max-w-[460px]">
              <ClassSilhouette
                variant={active.id as "starbreaker" | "chronoslip" | "plasmaweave"}
                color={active.colorAccent}
              />
            </div>

            {/* Info panel */}
            <div className="glass-strong rounded-2xl p-8 sm:p-10">
              <div className="flex items-baseline gap-4">
                <div
                  className="font-display text-[64px] font-bold leading-none"
                  style={{ color: active.colorAccent, opacity: 0.4 }}
                >
                  {active.classNumber}
                </div>
                <div>
                  <h3
                    className="font-display text-[40px] font-bold leading-none tracking-wide sm:text-[48px]"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {active.name}
                  </h3>
                  <div
                    className="font-mono-ui mt-2 text-[11px] uppercase tracking-[0.25em]"
                    style={{ color: active.colorAccent }}
                  >
                    {active.archetype}
                  </div>
                </div>
              </div>

              <p
                className="font-body mt-6 text-[15px] leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                {active.lore}
              </p>

              {/* Stats */}
              <div className="mt-7 grid gap-3">
                {Object.entries(active.stats).map(([k, v]) => (
                  <div key={k} className="grid grid-cols-[60px_1fr_30px] items-center gap-3">
                    <span
                      className="font-mono-ui text-[10px] uppercase tracking-[0.2em]"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {k}
                    </span>
                    <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${v}%` }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="h-full"
                        style={{
                          background: `linear-gradient(90deg, ${active.colorAccent}, #ffffff)`,
                          boxShadow: `0 0 10px ${active.colorAccent}`,
                        }}
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

              {/* Ability */}
              <div
                className="mt-7 rounded-xl border p-5"
                style={{
                  borderColor: `${active.ability.color}55`,
                  background: `${active.ability.color}0d`,
                }}
              >
                <div
                  className="font-mono-ui text-[9px] uppercase tracking-[0.3em]"
                  style={{ color: "var(--text-muted)" }}
                >
                  SIGNATURE ABILITY
                </div>
                <div
                  className="font-display mt-1 text-[22px] font-bold tracking-wide"
                  style={{ color: active.ability.color }}
                >
                  {active.ability.name}
                </div>
                <p
                  className="font-body mt-2 text-[13px] leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {active.ability.description}
                </p>
              </div>

              <div
                className="font-mono-ui mt-5 text-[10px] uppercase tracking-[0.25em]"
                style={{ color: "var(--text-muted)" }}
              >
                ◉ {active.unlockStatus}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
