import { useEffect, useMemo, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SITE_CONTENT } from "@/config/content";
import { WarriorSilhouette } from "@/components/svg/WarriorSilhouette";
import { useMouseParallax } from "@/hooks/useMouseParallax";

function useIsMobile() {
  const r = useRef(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      r.current = window.matchMedia("(max-width: 640px)").matches;
    }
  }, []);
  return r.current;
}

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
    size: rand() < 0.85 ? 1 : 2,
    opacity: 0.3 + rand() * 0.7,
    blue: rand() < 0.4,
    delay: rand() * 4,
  }));
}

function StarLayer({
  count,
  seed,
  parallaxRate,
  parallax,
}: {
  count: number;
  seed: number;
  parallaxRate: number;
  parallax: React.MutableRefObject<{ x: number; y: number }>;
}) {
  const stars = useMemo(() => generateStars(count, seed), [count, seed]);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const loop = () => {
      if (ref.current) {
        const x = parallax.current.x * parallaxRate * 30;
        const y = parallax.current.y * parallaxRate * 30;
        ref.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [parallax, parallaxRate]);

  return (
    <div
      ref={ref}
      className="absolute inset-0"
      style={{ willChange: "transform" }}
    >
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
              background: s.blue ? "#4fc3f7" : "#ffffff",
              opacity: s.opacity,
              "--star-op": s.opacity,
              animation: `twinkle ${3 + s.delay}s ease-in-out ${s.delay}s infinite`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}

export function Hero() {
  const isMobile = useIsMobile();
  const parallax = useMouseParallax();
  const titleRef = useRef<HTMLHeadingElement>(null);
  const warriorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const loop = () => {
      if (titleRef.current) {
        const x = parallax.current.x * -0.01 * 30;
        const y = parallax.current.y * -0.01 * 30;
        titleRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
      if (warriorRef.current) {
        const x = parallax.current.x * 0.03 * 30;
        const y = parallax.current.y * 0.03 * 30;
        warriorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [parallax]);

  const title = SITE_CONTENT.game.title;
  const titleLetters = title.split("");
  const starCounts = isMobile ? [120, 100, 80] : [900, 700, 400];

  return (
    <section
      id="top"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden"
      style={{ background: "var(--void-black)" }}
    >
      {/* Z1: Star layers */}
      <StarLayer count={starCounts[0]} seed={1} parallaxRate={0.5} parallax={parallax} />
      <StarLayer count={starCounts[1]} seed={2} parallaxRate={1} parallax={parallax} />
      <StarLayer count={starCounts[2]} seed={3} parallaxRate={1.5} parallax={parallax} />

      {/* Z2: Central radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80vw 60vw at 50% 60%, rgba(124,77,255,0.25), transparent 70%)",
        }}
      />

      {/* Z3: Light beams */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
        aria-hidden
      >
        <defs>
          <linearGradient id="beam1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(79,195,247,0)" />
            <stop offset="50%" stopColor="rgba(79,195,247,0.35)" />
            <stop offset="100%" stopColor="rgba(79,195,247,0)" />
          </linearGradient>
        </defs>
        <line
          x1="50"
          y1="60"
          x2="0"
          y2="0"
          stroke="url(#beam1)"
          strokeWidth="0.3"
          style={{
            animation: "beam-shimmer 4s ease-in-out infinite",
          }}
        />
        <line
          x1="50"
          y1="60"
          x2="100"
          y2="0"
          stroke="url(#beam1)"
          strokeWidth="0.3"
          style={{
            animation: "beam-shimmer 4s ease-in-out 2s infinite",
          }}
        />
      </svg>

      {/* Z4: Ambient orbs */}
      {!isMobile && (
        <>
          {[
            { l: "10%", t: "20%", s: 180, c: "#7c4dff", a: "drift-1 18s ease-in-out infinite" },
            { l: "85%", t: "30%", s: 140, c: "#4fc3f7", a: "drift-2 22s ease-in-out infinite" },
            { l: "20%", t: "75%", s: 200, c: "#ff5252", a: "drift-3 26s ease-in-out infinite" },
            { l: "75%", t: "70%", s: 160, c: "#ffd54f", a: "drift-1 24s ease-in-out 4s infinite" },
            { l: "50%", t: "10%", s: 130, c: "#ce93d8", a: "drift-2 28s ease-in-out 2s infinite" },
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
                opacity: 0.18,
                filter: "blur(80px)",
                animation: o.a,
                willChange: "transform",
              }}
            />
          ))}
        </>
      )}

      {/* Z5: Perspective grid floor */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-[60vh] w-[200vw] -translate-x-1/2 opacity-40"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent 0, transparent 59px, rgba(79,195,247,0.3) 60px), repeating-linear-gradient(90deg, transparent 0, transparent 59px, rgba(79,195,247,0.3) 60px)",
          transformOrigin: "center bottom",
          animation: "grid-scroll 3s linear infinite",
          maskImage:
            "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)",
          WebkitMaskImage:
            "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)",
        }}
      />

      {/* Z6: Warrior silhouette */}
      {!isMobile && (
        <div
          ref={warriorRef}
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[40%] opacity-70"
          style={{ height: 500, willChange: "transform" }}
        >
          <div
            style={{
              animation: "float-y 4s ease-in-out infinite",
              willChange: "transform",
              height: "100%",
            }}
          >
            <WarriorSilhouette />
          </div>
        </div>
      )}

      {/* Bottom fade */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40"
        style={{
          background:
            "linear-gradient(to bottom, transparent, var(--void-black))",
        }}
      />

      {/* Text layer */}
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="font-mono-ui text-[10px] uppercase tracking-[0.35em]"
          style={{ color: "var(--plasma-cyan)" }}
        >
          ◆ {SITE_CONTENT.hero.preTitle} ◆
        </motion.div>

        <h1
          ref={titleRef}
          className="font-display mt-5 font-bold leading-[0.9] tracking-[0.02em] glow-text-blue"
          style={{
            fontSize: "clamp(56px, 13vw, 140px)",
            willChange: "transform",
          }}
        >
          <span className="shimmer-title">
            {titleLetters.map((ch, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.4 + i * 0.05,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                style={{ display: "inline-block" }}
              >
                {ch}
              </motion.span>
            ))}
          </span>
        </h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 + titleLetters.length * 0.05, duration: 0.6 }}
          className="font-display mt-1 font-bold tracking-[0.4em] glow-text-gold"
          style={{
            color: "var(--nova-gold)",
            fontSize: "clamp(20px, 4vw, 44px)",
          }}
        >
          {SITE_CONTENT.game.subtitle}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 + titleLetters.length * 0.05, duration: 0.6 }}
          className="font-mono-ui mt-8 text-[11px] uppercase tracking-[0.3em] sm:text-[13px]"
          style={{ color: "var(--text-secondary)" }}
        >
          {SITE_CONTENT.game.tagline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 + titleLetters.length * 0.05, duration: 0.6 }}
          className="font-body mt-4 max-w-[520px] text-[15px] leading-relaxed sm:text-[16px]"
          style={{ color: "var(--text-secondary)" }}
        >
          {SITE_CONTENT.game.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 + titleLetters.length * 0.05, duration: 0.5 }}
          className="mt-6 flex items-center gap-3"
        >
          <span
            className="glass font-mono-ui rounded-sm px-3 py-1 text-[10px] tracking-[0.2em]"
            style={{ color: "var(--nova-gold)", borderColor: "rgba(255,213,79,0.3)" }}
          >
            {SITE_CONTENT.game.rating}
          </span>
          <span
            className="font-mono-ui text-[10px] tracking-[0.2em]"
            style={{ color: "var(--text-muted)" }}
          >
            {SITE_CONTENT.game.genre}
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 + titleLetters.length * 0.05, duration: 0.6 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <button
            className="conic-border font-display rounded-md px-9 py-4 text-[15px] font-bold uppercase tracking-[0.25em] transition-transform hover:scale-[1.03] active:scale-[0.98]"
            style={{
              background:
                "linear-gradient(135deg, var(--stellar-deep), var(--plasma-blue))",
              color: "#fff",
              boxShadow: "0 10px 40px rgba(124,77,255,0.5)",
            }}
          >
            {SITE_CONTENT.hero.primaryCta}
          </button>
          <button
            className="glass font-display rounded-md px-9 py-4 text-[15px] font-bold uppercase tracking-[0.25em] transition-transform hover:scale-[1.03] active:scale-[0.98]"
            style={{
              color: "var(--nova-gold)",
              borderColor: "rgba(255,213,79,0.4)",
              boxShadow: "0 0 30px rgba(255,213,79,0.15)",
            }}
          >
            {SITE_CONTENT.hero.secondaryCta}
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 + titleLetters.length * 0.05, duration: 0.6 }}
          className="font-mono-ui mt-8 text-[10px] uppercase tracking-[0.25em]"
          style={{ color: "var(--text-muted)" }}
        >
          {SITE_CONTENT.hero.availabilityLine}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span
          className="font-mono-ui text-[9px] uppercase tracking-[0.3em]"
          style={{ color: "var(--text-muted)" }}
        >
          {SITE_CONTENT.hero.scrollLabel}
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} style={{ color: "var(--plasma-cyan)" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
