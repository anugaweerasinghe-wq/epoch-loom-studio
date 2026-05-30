import { motion } from "framer-motion";

const SHARDS = [
  { x: 8, y: 18, s: 28, r: 12, d: 14 },
  { x: 86, y: 22, s: 18, r: -22, d: 17 },
  { x: 22, y: 72, s: 36, r: 30, d: 19 },
  { x: 78, y: 78, s: 22, r: -15, d: 13 },
  { x: 50, y: 8, s: 14, r: 45, d: 21 },
  { x: 14, y: 50, s: 12, r: -8, d: 16 },
  { x: 92, y: 54, s: 26, r: 18, d: 15 },
  { x: 60, y: 90, s: 16, r: -32, d: 18 },
];

export function FloatingShards({ tint = "var(--plasma-cyan)" }: { tint?: string }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{ transform: "translateZ(0)" }}
    >
      {SHARDS.map((sh, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${sh.x}%`,
            top: `${sh.y}%`,
            width: sh.s,
            height: sh.s,
            willChange: "transform",
          }}
          animate={{
            y: [0, -14, 0],
            rotate: [sh.r, sh.r + 18, sh.r],
          }}
          transition={{
            duration: sh.d,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4,
          }}
        >
          <svg viewBox="0 0 40 40" className="h-full w-full" style={{ opacity: 0.35 }}>
            <polygon
              points="20,2 38,20 20,38 2,20"
              fill="none"
              stroke={tint}
              strokeWidth="0.8"
              strokeLinejoin="miter"
            />
            <polygon points="20,8 32,20 20,32 8,20" fill={tint} opacity="0.08" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
