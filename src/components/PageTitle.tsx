import { motion } from "framer-motion";
import { EXPO_OUT } from "@/lib/motion";

export function PageTitle({ title }: { title: string }) {
  return (
    <div className="flex flex-col items-center text-center">
      <motion.h1
        initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1.2, ease: EXPO_OUT }}
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
        transition={{ delay: 0.7, duration: 1.2, ease: EXPO_OUT }}
        className="mt-6 h-px w-20"
        style={{ background: "rgba(255,255,255,0.2)", transformOrigin: "center" }}
      />
    </div>
  );
}
