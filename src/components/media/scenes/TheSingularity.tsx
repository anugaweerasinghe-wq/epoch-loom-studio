import { SceneShell } from "./SceneShell";

export function TheSingularity() {
  return (
    <SceneShell background="radial-gradient(ellipse 60% 60% at 50% 50%, #0a0014 0%, #050508 40%, #000000 100%)">
      {/* Shockwave rings */}
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="absolute left-1/2 top-1/2 rounded-full"
          style={{
            width: 80,
            height: 80,
            marginLeft: -40,
            marginTop: -40,
            border: "1px solid rgba(79,195,247,0.5)",
            animation: `shockwave 3s ease-out ${i * 1}s infinite`,
          }}
        />
      ))}

      {/* Accretion ring */}
      <svg
        className="absolute left-1/2 top-1/2"
        width="260"
        height="80"
        viewBox="0 0 260 80"
        style={{
          marginLeft: -130,
          marginTop: -40,
          animation: "ring-spin 20s linear infinite",
        }}
      >
        <ellipse
          cx="130"
          cy="40"
          rx="125"
          ry="30"
          fill="none"
          stroke="rgba(79,195,247,0.45)"
          strokeWidth="1"
        />
        <ellipse
          cx="130"
          cy="40"
          rx="100"
          ry="22"
          fill="none"
          stroke="rgba(206,147,216,0.25)"
          strokeWidth="0.5"
        />
      </svg>

      {/* Spiral particles */}
      {Array.from({ length: 20 }).map((_, i) => {
        const angle = (i / 20) * Math.PI * 2;
        const radius = 60 + (i % 4) * 12;
        const x = 50 + (Math.cos(angle) * radius) / 8;
        const y = 50 + (Math.sin(angle) * radius) / 16;
        return (
          <div
            key={i}
            className="absolute h-[2px] w-[2px] rounded-full bg-cyan-200"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              opacity: 0.7,
              animation: `singularity-pull ${3 + (i % 5)}s ease-in ${i * 0.1}s infinite`,
            }}
          />
        );
      })}

      {/* Dying star */}
      <div
        className="absolute left-1/2 top-1/2 rounded-full"
        style={{
          width: 80,
          height: 80,
          marginLeft: -40,
          marginTop: -40,
          background:
            "radial-gradient(circle, #ffffff 0%, #4fc3f7 50%, transparent 100%)",
          boxShadow:
            "0 0 60px rgba(79,195,247,0.9), 0 0 120px rgba(124,77,255,0.6), 0 0 180px rgba(255,255,255,0.3)",
          animation: "star-collapse 6s ease-in-out infinite",
        }}
      />

      {/* Hot core */}
      <div
        className="absolute left-1/2 top-1/2 rounded-full bg-white"
        style={{
          width: 12,
          height: 12,
          marginLeft: -6,
          marginTop: -6,
          boxShadow: "0 0 30px white",
          animation: "star-collapse 6s ease-in-out infinite",
        }}
      />
    </SceneShell>
  );
}
