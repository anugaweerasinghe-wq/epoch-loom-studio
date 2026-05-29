import { motion } from "framer-motion";
import { EXPO_OUT } from "@/lib/motion";

export function SectionTitle({
  label,
  title,
  subtitle,
}: {
  label?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="flex flex-col items-center text-center">
      {label && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 0.6, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease: EXPO_OUT }}
          className="font-mono-ui text-[11px] uppercase tracking-[0.3em]"
          style={{ color: "var(--text-secondary)" }}
        >
          {label}
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1, delay: 0.1, ease: EXPO_OUT }}
        className="mt-5 font-display font-bold leading-[1.05]"
        style={{
          color: "var(--text-primary)",
          fontSize: "clamp(32px, 4.5vw, 56px)",
          letterSpacing: "-0.005em",
        }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, delay: 0.25, ease: EXPO_OUT }}
          className="mt-5 max-w-[640px] font-body text-[15px] leading-[1.9]"
          style={{ color: "var(--text-muted)", fontWeight: 300 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
