import { useEffect, useMemo, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { SITE_CONTENT } from "@/config/content";
import { WarriorSilhouette } from "@/components/svg/WarriorSilhouette";
import { EXPO_OUT } from "@/lib/motion";

function generateStars(count: number, seed = 1) {
  let s = seed;
  const rand = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: rand() * 100,
    y: rand() * 100,
    size: rand() < 0.9 ? 1 : 2,
    opacity: 0.3 + rand() * 0.2,
    delay: rand() * 4,
  }));
}

function StarField({ count }: { count: number }) {
  const stars = useMemo(() => generateStars(count, 1), [count]);
  return (
    <div className="absolute inset-0">
      {stars.map((s) => (
        <div
          key={s.id}
          className="absolute rounded-full"
          style={
            {
              left: `${s.x}%`,
              top: `${s.y}%`,
              width: s.size,
              height: s.size,
              background: "#8892b0",
              opacity: s.opacity,
              "--star-op": s.opacity,
              animation: `twinkle ${4 + s.delay}s ease-in-out ${s.delay}s infinite`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}

export function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.matchMedia("(max-width: 640px)").matches);
    }
  }, []);

  const starCount = isMobile ? 200 : 800;

  // Parallax — multi-layer depth
  const { scrollY } = useScroll();
  const starFieldY = useTransform(scrollY, [0, 800], [0, -120]);
  const orbsY = useTransform(scrollY, [0, 800], [0, -200]);
  const warriorY = useTransform(scrollY, [0, 800], [0, -80]);
  const titleY = useTransform(scrollY, [0, 800], [0, -60]);
  const subtitleY = useTransform(scrollY, [0, 800], [0, -40]);
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);

  const smoothWarriorY = useSpring(warriorY, { stiffness: 80, damping: 20 });
  const smoothTitleY = useSpring(titleY, { stiffness: 100, damping: 25 });
  const smoothSubtitleY = useSpring(subtitleY, { stiffness: 100, damping: 25 });
  const smoothStarY = useSpring(starFieldY, { stiffness: 60, damping: 20 });
  const smoothOrbsY = useSpring(orbsY, { stiffness: 60, damping: 20 });

  return (
    <motion.section
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden"
      style={{ background: "var(--void-black)", opacity: heroOpacity }}
    >
      {/* Star field */}
      <motion.div className="absolute inset-0" style={{ y: smoothStarY }}>
        <StarField count={starCount} />
      </motion.div>

      {/* Soft central glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 100vw 80vw at 50% 60%, rgba(124,77,255,0.10), transparent 70%)",
          animation: "ambient-drift 24s ease-in-out infinite",
        }}
      />

      {/* Whisper orbs */}
      {!isMobile && (
        <motion.div className="absolute inset-0" style={{ y: smoothOrbsY }}>
          {[
            { l: "12%", t: "22%", s: 220, c: "#7c4dff" },
            { l: "82%", t: "30%", s: 180, c: "#4fc3f7" },
            { l: "50%", t: "75%", s: 200, c: "#ce93d8" },
          ].map((o, i) => (
            <div
              key={i}
              className="pointer-events-none absolute rounded-full"
              style={{
                left: o.l,
                top: o.t,
                width: o.s,
                height: o.s,
                background: o.c,
                opacity: 0.07,
                filter: "blur(100px)",
              }}
            />
          ))}
        </motion.div>
      )}

      {/* Warrior */}
      {!isMobile && (
        <motion.div
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ height: 280, y: smoothWarriorY }}
        >
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              width: 360,
              height: 360,
              border: "1px solid rgba(255,255,255,0.15)",
              animation: "ring-spin 60s linear infinite",
            }}
          />
          <div
            style={{
              animation: "float-y 6s ease-in-out infinite",
              willChange: "transform",
              height: "100%",
              filter: "drop-shadow(0 0 20px rgba(79,195,247,0.25))",
            }}
          >
            <WarriorSilhouette />
          </div>
        </motion.div>
      )}

      {/* Bottom fade */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40"
        style={{
          background: "linear-gradient(to bottom, transparent, var(--void-black))",
        }}
      />

      {/* Text layer */}
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: EXPO_OUT }}
          style={{
            color: "var(--text-primary)",
            fontSize: "clamp(48px, 10vw, 96px)",
            y: smoothTitleY,
          }}
          className="font-display font-bold leading-[0.95] tracking-[0.02em]"
        >
          {SITE_CONTENT.game.title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 1.0, duration: 1.2, ease: EXPO_OUT }}
          className="mt-7 h-px w-20"
          style={{ background: "rgba(255,255,255,0.2)", transformOrigin: "center" }}
        />

        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 1.3, duration: 1.1, ease: EXPO_OUT }}
          className="font-display mt-7 text-[18px] uppercase"
          style={{
            color: "var(--text-secondary)",
            fontWeight: 500,
            letterSpacing: "0.4em",
            y: smoothSubtitleY,
          }}
        >
          {SITE_CONTENT.game.subtitle}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 1.5, duration: 1.1, ease: EXPO_OUT }}
          className="font-body mt-8 max-w-[420px] text-[15px]"
          style={{
            color: "var(--text-muted)",
            fontWeight: 300,
            lineHeight: 1.8,
          }}
        >
          {SITE_CONTENT.game.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 1.7, duration: 1.1, ease: EXPO_OUT }}
          className="mt-10"
        >
          <Link
            to="/story"
            className="font-display inline-flex h-11 items-center justify-center px-8 uppercase"
            style={{
              border: "1px solid rgba(255,255,255,0.2)",
              color: "var(--text-primary)",
              fontWeight: 500,
              fontSize: 13,
              letterSpacing: "0.2em",
              background: "transparent",
              transition: "background 400ms ease, border-color 400ms ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.06)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
            }}
          >
            {SITE_CONTENT.hero.primaryCta}
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div
        className="pointer-events-none absolute bottom-10 left-1/2 h-10 w-px -translate-x-1/2"
        style={{
          background: "rgba(255,255,255,0.6)",
          animation: "scroll-pulse 2.5s ease-in-out infinite",
        }}
      />
    </motion.section>
  );
}
