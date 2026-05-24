import { useEffect, useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE_CONTENT } from "@/config/content";

export function Community() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [count, setCount] = useState(SITE_CONTENT.community.enlistedCount);

  useEffect(() => {
    let cancelled = false;
    const tick = () => {
      const delay = 3000 + Math.random() * 5000;
      setTimeout(() => {
        if (cancelled) return;
        setCount((c) => c + 1 + Math.floor(Math.random() * 3));
        tick();
      }, delay);
    };
    tick();
    return () => {
      cancelled = true;
    };
  }, []);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    setSubmitted(true);
  };

  return (
    <section
      className="relative overflow-hidden px-6 py-[120px]"
      style={{ background: "var(--void-deep)" }}
    >
      {/* Particle dots */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(circle 1px at 20% 30%, #4fc3f7 1px, transparent 1px), radial-gradient(circle 1px at 70% 60%, #ffd54f 1px, transparent 1px), radial-gradient(circle 1px at 40% 80%, #ce93d8 1px, transparent 1px), radial-gradient(circle 1px at 85% 20%, #ffffff 1px, transparent 1px)",
          backgroundSize: "120px 120px, 180px 180px, 150px 150px, 200px 200px",
        }}
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="font-display text-[40px] font-bold leading-tight sm:text-[56px] glow-text-blue"
          style={{ color: "var(--text-primary)" }}
        >
          {SITE_CONTENT.community.sectionTitle}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-body mx-auto mt-4 max-w-xl text-[15px] leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          {SITE_CONTENT.community.sectionSubtitle}
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          onSubmit={submit}
          className="glass-strong mx-auto mt-10 flex max-w-xl items-center gap-2 rounded-full p-2"
        >
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex w-full items-center gap-2"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={SITE_CONTENT.community.inputPlaceholder}
                  className="font-mono-ui flex-1 bg-transparent px-5 py-3 text-[13px] tracking-wide outline-none placeholder:text-[color:var(--text-muted)]"
                  style={{ color: "var(--text-primary)" }}
                />
                <button
                  type="submit"
                  className="font-display rounded-full px-6 py-3 text-[12px] font-bold uppercase tracking-[0.25em] transition-transform hover:scale-[1.03]"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--stellar-deep), var(--plasma-blue))",
                    color: "#fff",
                    boxShadow: "0 0 24px rgba(79,195,247,0.5)",
                  }}
                >
                  {SITE_CONTENT.community.ctaLabel}
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="font-mono-ui w-full py-3 text-center text-[12px] uppercase tracking-[0.25em]"
                style={{ color: "var(--plasma-cyan)" }}
              >
                {SITE_CONTENT.community.successMessage}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex items-center justify-center gap-3"
        >
          <div
            className="font-display text-[28px] font-bold tabular-nums glow-text-gold"
            style={{ color: "var(--nova-gold)" }}
          >
            {count.toLocaleString()}
          </div>
          <div
            className="font-mono-ui text-[10px] uppercase tracking-[0.3em]"
            style={{ color: "var(--text-secondary)" }}
          >
            {SITE_CONTENT.community.enlistedLabel}
          </div>
        </motion.div>

        <div className="mt-8 flex justify-center gap-5">
          {SITE_CONTENT.community.socialLinks.map((s) => (
            <a
              key={s}
              href="#"
              className="font-mono-ui text-[11px] uppercase tracking-[0.25em] transition-colors hover:text-[color:var(--plasma-cyan)]"
              style={{ color: "var(--text-muted)" }}
            >
              {s}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
