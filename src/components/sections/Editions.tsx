import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { SITE_CONTENT } from "@/config/content";

export function Editions() {
  return (
    <section
      id="pre-order"
      className="relative overflow-hidden px-6 py-[120px]"
      style={{
        background:
          "radial-gradient(ellipse at 50% 30%, rgba(124,77,255,0.18), transparent 70%), var(--void-black)",
      }}
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <div
            className="font-mono-ui text-[10px] uppercase tracking-[0.35em]"
            style={{ color: "var(--nova-gold)" }}
          >
            ◆ {SITE_CONTENT.editions.sectionLabel} ◆
          </div>
          <h2
            className="font-display mt-4 text-[40px] font-bold leading-tight sm:text-[56px] glow-text-gold"
            style={{ color: "var(--text-primary)" }}
          >
            CHOOSE YOUR EDITION
          </h2>
          <p
            className="font-mono-ui mt-4 text-[11px] uppercase tracking-[0.25em]"
            style={{ color: "var(--text-secondary)" }}
          >
            {SITE_CONTENT.editions.sectionSubtitle}
          </p>
        </motion.div>

        <div className="grid items-stretch gap-6 lg:grid-cols-3">
          {SITE_CONTENT.editions.items.map((e, i) => (
            <motion.div
              key={e.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: e.featured ? -12 : 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className={`relative flex flex-col rounded-2xl p-8 ${e.featured ? "glass-strong" : "glass"}`}
              style={{
                borderColor: e.featured ? e.accentColor : undefined,
                boxShadow: e.featured
                  ? `0 0 0 1px ${e.accentColor}66, 0 30px 80px ${e.accentColor}33`
                  : undefined,
              }}
            >
              {e.ribbon && (
                <div
                  className="font-mono-ui absolute -top-3 right-6 rounded-full px-4 py-1 text-[10px] uppercase tracking-[0.2em]"
                  style={{
                    background: e.accentColor,
                    color: "#050508",
                    boxShadow: `0 0 24px ${e.accentColor}88`,
                  }}
                >
                  ★ {e.ribbon}
                </div>
              )}

              <h3
                className="font-display text-[22px] font-bold uppercase tracking-wide"
                style={{ color: "var(--text-primary)" }}
              >
                {e.name}
              </h3>
              <div
                className="font-display mt-3 text-[44px] font-bold leading-none"
                style={{ color: e.accentColor }}
              >
                {e.price}
              </div>

              <ul className="mt-7 flex-1 space-y-3">
                {e.features.map((f) => (
                  <li
                    key={f}
                    className="font-body flex items-start gap-3 text-[14px]"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <Check
                      size={16}
                      style={{
                        color: e.accentColor,
                        flexShrink: 0,
                        marginTop: 3,
                      }}
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <button
                className="font-display mt-8 rounded-md px-6 py-4 text-[13px] font-bold uppercase tracking-[0.25em] transition-transform hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: e.featured
                    ? `linear-gradient(135deg, ${e.accentColor}, #ffffff)`
                    : "transparent",
                  border: `1px solid ${e.accentColor}`,
                  color: e.featured ? "#050508" : e.accentColor,
                  boxShadow: e.featured
                    ? `0 0 30px ${e.accentColor}66`
                    : `0 0 0 1px ${e.accentColor}33`,
                }}
              >
                {e.cta}
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {SITE_CONTENT.editions.platformBadges.map((p) => (
            <span
              key={p}
              className="glass font-mono-ui rounded-md px-4 py-2 text-[10px] uppercase tracking-[0.25em]"
              style={{ color: "var(--text-secondary)" }}
            >
              {p}
            </span>
          ))}
        </div>
        <p
          className="font-mono-ui mt-6 text-center text-[10px] uppercase tracking-[0.2em]"
          style={{ color: "var(--text-muted)" }}
        >
          {SITE_CONTENT.editions.finePrint}
        </p>
      </div>
    </section>
  );
}
