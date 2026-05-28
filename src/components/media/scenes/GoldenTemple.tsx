import { useMemo } from "react";
import { SceneShell } from "./SceneShell";

function rand(seed: number) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

export function GoldenTemple() {
  const debris = useMemo(() => {
    const r = rand(55);
    return Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: r() * 100,
      y: 20 + r() * 50,
      size: 3 + r() * 6,
      rot: r() * 360,
      dur: 6 + r() * 6,
      delay: r() * 5,
    }));
  }, []);

  return (
    <SceneShell background="linear-gradient(180deg, #0d0800 0%, #1a0e00 30%, #0d0500 60%, #050005 100%)">
      {/* Sun */}
      <div
        className="absolute left-1/2 -translate-x-1/2"
        style={{
          top: "18%",
          width: 110,
          height: 110,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, #ffd54f 0%, #ff6d00 60%, transparent 100%)",
          filter: "drop-shadow(0 0 40px rgba(255,213,79,0.5))",
          animation: "sun-pulse 8s ease-in-out infinite",
        }}
      />

      {/* Light rays */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 400 300"
        preserveAspectRatio="none"
      >
        <g stroke="rgba(255,213,79,0.1)" strokeWidth="1">
          {Array.from({ length: 8 }).map((_, i) => {
            const angle = (i / 8) * Math.PI * 2;
            const x2 = 200 + Math.cos(angle) * 400;
            const y2 = 90 + Math.sin(angle) * 400;
            return <line key={i} x1={200} y1={90} x2={x2} y2={y2} />;
          })}
        </g>
      </svg>

      {/* Temple silhouette */}
      <svg
        className="absolute inset-x-0 bottom-0 h-1/2 w-full"
        viewBox="0 0 400 200"
        preserveAspectRatio="none"
      >
        <path
          fill="#0a0600"
          d="M0,200 L0,170 L60,170 L60,140 L100,140 L100,110 L130,110 L130,80 L170,80 L170,50 L200,30 L230,50 L230,80 L270,80 L270,110 L300,110 L300,140 L340,140 L340,170 L400,170 L400,200 Z"
        />
        <g stroke="#ffd54f" strokeWidth="0.5" opacity="0.35">
          <line x1="170" y1="50" x2="170" y2="170" />
          <line x1="230" y1="50" x2="230" y2="170" />
          <line x1="100" y1="110" x2="100" y2="170" />
          <line x1="300" y1="110" x2="300" y2="170" />
          <line x1="180" y1="100" x2="220" y2="100" />
          <line x1="180" y1="130" x2="220" y2="130" />
        </g>
      </svg>

      {/* Floating debris */}
      {debris.map((d) => (
        <div
          key={d.id}
          className="absolute"
          style={{
            left: `${d.x}%`,
            top: `${d.y}%`,
            width: d.size,
            height: d.size,
            background: "#3a2810",
            transform: `rotate(${d.rot}deg)`,
            animation: `debris-drift ${d.dur}s ease-in-out ${d.delay}s infinite`,
          }}
        />
      ))}
    </SceneShell>
  );
}
