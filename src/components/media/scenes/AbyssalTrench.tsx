import { useMemo } from "react";
import { SceneShell } from "./SceneShell";

function rand(seed: number) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

export function AbyssalTrench() {
  const lights = useMemo(() => {
    const r = rand(11);
    const colors = ["#00e5ff", "#4fc3f7", "#80deea"];
    return Array.from({ length: 18 }, (_, i) => ({
      id: i,
      x: r() * 100,
      y: 40 + r() * 55,
      size: 3 + r() * 6,
      color: colors[Math.floor(r() * colors.length)],
      dur: 2 + r() * 3,
      delay: r() * 3,
    }));
  }, []);

  const particles = useMemo(() => {
    const r = rand(22);
    return Array.from({ length: 10 }, (_, i) => ({
      id: i,
      x: r() * 100,
      y: 30 + r() * 60,
      dur: 4 + r() * 4,
      delay: r() * 5,
    }));
  }, []);

  return (
    <SceneShell background="radial-gradient(ellipse 100% 80% at 50% 100%, #001428 0%, #000509 50%, #050010 100%)">
      {/* Distant architecture */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 400 300"
        preserveAspectRatio="none"
      >
        <g fill="#001a33" opacity="0.85">
          <polygon points="40,300 60,160 80,300" />
          <polygon points="110,300 130,120 150,300" />
          <polygon points="170,300 185,180 200,140 215,180 230,300" />
          <polygon points="260,300 280,150 300,300" />
          <polygon points="330,300 350,170 370,300" />
        </g>
        <g stroke="#003355" strokeWidth="0.5" opacity="0.4">
          <line x1="130" y1="120" x2="130" y2="300" />
          <line x1="200" y1="140" x2="200" y2="300" />
          <line x1="280" y1="150" x2="280" y2="300" />
        </g>
      </svg>

      {/* Vertical light shafts */}
      {[20, 55, 80].map((x, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: `${x}%`,
            top: 0,
            width: 2,
            height: "60%",
            background:
              "linear-gradient(180deg, rgba(0,229,255,0.08), transparent)",
            transform: `rotate(${i % 2 === 0 ? 2 : -2}deg)`,
          }}
        />
      ))}

      {/* Bioluminescence */}
      {lights.map((l) => (
        <div
          key={l.id}
          className="absolute rounded-full"
          style={{
            left: `${l.x}%`,
            top: `${l.y}%`,
            width: l.size,
            height: l.size,
            background: l.color,
            filter: "blur(2px)",
            boxShadow: `0 0 ${l.size * 2}px ${l.color}`,
            animation: `bio-pulse ${l.dur}s ease-in-out ${l.delay}s infinite`,
          }}
        />
      ))}

      {/* Foreground crystals */}
      <svg
        className="absolute inset-x-0 bottom-0 h-1/3 w-full"
        viewBox="0 0 400 100"
        preserveAspectRatio="none"
      >
        <g fill="#7c4dff" opacity="0.55">
          <polygon points="20,100 30,40 40,100" />
          <polygon points="80,100 95,20 110,100" />
          <polygon points="190,100 205,30 220,100" />
          <polygon points="290,100 305,45 320,100" />
          <polygon points="350,100 365,60 380,100" />
        </g>
      </svg>

      {/* Floating particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute h-[2px] w-[2px] rounded-full bg-cyan-300"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            opacity: 0.6,
            animation: `particle-drift ${p.dur}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
    </SceneShell>
  );
}
