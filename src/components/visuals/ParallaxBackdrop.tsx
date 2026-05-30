import { useScroll, useTransform, useSpring, motion } from "framer-motion";

type Tint = "cyan" | "purple" | "amber" | "ember";

const TINTS: Record<Tint, string> = {
  cyan: "rgba(79,195,247,0.10)",
  purple: "rgba(124,77,255,0.12)",
  amber: "rgba(255,213,79,0.08)",
  ember: "rgba(255,82,82,0.08)",
};

const STARS = Array.from({ length: 80 }, (_, i) => {
  const seed = i * 9301 + 49297;
  const x = (seed % 233280) / 233280;
  const y = ((seed * 7) % 233280) / 233280;
  const s = ((seed * 13) % 100) / 100;
  return { x: x * 100, y: y * 100, r: 0.6 + s * 1.2, op: 0.25 + s * 0.6 };
});

/**
 * Page-wide parallax backdrop: starfield + slow drifting nebula gradient.
 * GPU-only transforms. Single instance per page (perf budget).
 */
export function ParallaxBackdrop({ tint = "cyan" }: { tint?: Tint }) {
  const { scrollY } = useScroll();
  const yRaw = useTransform(scrollY, [0, 2000], [0, -180]);
  const y = useSpring(yRaw, { stiffness: 50, damping: 22 });
  const yNebRaw = useTransform(scrollY, [0, 2000], [0, -80]);
  const yNeb = useSpring(yNebRaw, { stiffness: 40, damping: 22 });
  const color = TINTS[tint];

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden
      style={{ background: "var(--void-black)" }}
    >
      {/* Nebula gradient */}
      <motion.div
        style={{
          y: yNeb,
          willChange: "transform",
          transform: "translateZ(0)",
          background: `radial-gradient(ellipse 90vw 70vh at 20% 20%, ${color}, transparent 60%),
                       radial-gradient(ellipse 70vw 50vh at 80% 70%, ${color}, transparent 65%)`,
        }}
        className="absolute inset-0"
      />
      {/* Starfield */}
      <motion.svg
        style={{ y, willChange: "transform", transform: "translateZ(0)" }}
        className="absolute inset-0 h-[140%] w-full"
        viewBox="0 0 100 140"
        preserveAspectRatio="none"
      >
        {STARS.map((s, i) => (
          <circle
            key={i}
            cx={s.x}
            cy={s.y}
            r={s.r * 0.1}
            fill="#ffffff"
            opacity={s.op}
            style={{
              animation: `twinkle ${2 + (i % 5)}s ease-in-out infinite`,
              animationDelay: `${(i % 7) * 0.3}s`,
              ["--star-op" as string]: s.op,
            }}
          />
        ))}
      </motion.svg>
      {/* Top + bottom fade so it never visually fights content */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, var(--void-black) 0%, transparent 25%, transparent 75%, var(--void-black) 100%)",
        }}
      />
    </div>
  );
}
