import { useMemo } from "react";
import { SceneShell } from "./SceneShell";

function rand(seed: number) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

export function VoidBreach() {
  const stars = useMemo(() => {
    const r = rand(77);
    return Array.from({ length: 180 }, (_, i) => ({
      id: i,
      x: r() * 100,
      y: r() * 100,
      glitch: r() > 0.9,
      delay: r() * 4,
    }));
  }, []);

  const shards = useMemo(() => {
    const r = rand(88);
    return Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: r() * 100,
      y: r() * 100,
      size: 6 + r() * 12,
      color: r() > 0.5 ? "#7c4dff" : "#00e5ff",
      dur: 12 + r() * 12,
    }));
  }, []);

  return (
    <SceneShell background="radial-gradient(ellipse at 30% 40%, #0d0014 0%, #050508 50%, #000a14 100%)">
      {/* Stars */}
      {stars.map((s) => (
        <div
          key={s.id}
          className="absolute h-[1px] w-[1px] rounded-full bg-white"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            opacity: 0.5,
            animation: s.glitch
              ? `star-glitch 0.15s steps(2) ${s.delay}s infinite`
              : undefined,
          }}
        />
      ))}

      {/* Rift */}
      <svg
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        width="60%"
        height="55%"
        viewBox="0 0 200 180"
        style={{
          filter: "drop-shadow(0 0 30px rgba(124,77,255,0.6))",
          animation: "rift-pulse 3s ease-in-out infinite",
        }}
      >
        <polygon
          points="100,10 140,50 170,90 150,140 100,170 50,140 30,90 60,50"
          fill="rgba(124,77,255,0.08)"
          stroke="#7c4dff"
          strokeWidth="2"
        />
        <polygon
          points="100,30 125,55 145,90 130,125 100,145 70,125 55,90 75,55"
          fill="rgba(0,229,255,0.05)"
          stroke="#00e5ff"
          strokeWidth="1"
          opacity="0.6"
        />
      </svg>

      {/* Tendrils */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 400 300"
        preserveAspectRatio="none"
      >
        <g
          stroke="#7c4dff"
          strokeWidth="1"
          fill="none"
          opacity="0.5"
          strokeDasharray="4 6"
        >
          <path d="M200,150 Q260,80 340,30" style={{ animation: "dash-flow 4s linear infinite" }} />
          <path d="M200,150 Q140,80 60,30" style={{ animation: "dash-flow 5s linear infinite" }} />
          <path d="M200,150 Q260,220 340,270" style={{ animation: "dash-flow 6s linear infinite" }} />
          <path d="M200,150 Q140,220 60,270" style={{ animation: "dash-flow 4.5s linear infinite" }} />
          <path d="M200,150 Q300,150 380,140" style={{ animation: "dash-flow 5.5s linear infinite" }} />
          <path d="M200,150 Q100,150 20,140" style={{ animation: "dash-flow 5s linear infinite" }} />
        </g>
      </svg>

      {/* Shards */}
      {shards.map((s) => (
        <svg
          key={s.id}
          className="absolute"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            animation: `shard-spin ${s.dur}s linear infinite`,
          }}
          viewBox="0 0 10 10"
        >
          <polygon
            points="5,0 9,4 7,10 3,10 1,4"
            fill={s.color}
            opacity="0.5"
          />
        </svg>
      ))}
    </SceneShell>
  );
}
