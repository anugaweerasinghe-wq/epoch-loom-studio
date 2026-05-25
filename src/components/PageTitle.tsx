import { motion } from "framer-motion";
import { PREMIUM_EASE } from "@/lib/motion";

export function PageTitle({ title }: { title: string }) {
  return (
    <div className="flex flex-col items-center text-center">
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: PREMIUM_EASE }}
        className="font-display font-bold leading-[0.95] tracking-[0.02em]"
        style={{
          color: "var(--text-primary)",
          fontSize: "clamp(40px, 7vw, 64px)",
        }}
      >
        {title}
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ delay: 0.8, duration: 0.9, ease: PREMIUM_EASE }}
        className="mt-6 h-px w-20"
        style={{ background: "rgba(255,255,255,0.2)" }}
      />
    </div>
  );
}
