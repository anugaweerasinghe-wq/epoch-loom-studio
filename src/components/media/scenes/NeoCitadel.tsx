import { useMemo } from "react";
import { SceneShell } from "./SceneShell";

function rand(seed: number) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

export function NeoCitadel() {
  const buildings = useMemo(() => {
    const r = rand(33);
    return Array.from({ length: 24 }, (_, i) => {
      const x = (i / 24) * 100;
      const w = 3 + r() * 4;
      const h = 25 + r() * 55;
      const windows = Array.from({ length: Math.floor(h / 8) }, (_, k) => ({
        k,
        on: r() > 0.55,
        color: r() > 0.5 ? "#ff6d00" : "#ff5252",
      }));
      return { i, x, w, h, windows };
    });
  }, []);

  const rain = useMemo(() => {
    const r = rand(44);
    return Array.from({ length: 35 }, (_, i) => ({
      id: i,
      x: r() * 100,
      delay: r() * 1.2,
      dur: 0.8 + r() * 0.7,
      len: 8 + r() * 8,
    }));
  }, []);

  return (
    <SceneShell background="radial-gradient(ellipse at 50% 0%, #0d0005 0%, #050005 40%, #000d05 100%)">
      {/* Perspective grid */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 400 300"
        preserveAspectRatio="none"
      >
        <g stroke="rgba(255,82,82,0.18)" strokeWidth="0.5">
          {Array.from({ length: 12 }).map((_, i) => (
            <line
              key={i}
              x1={200}
              y1={0}
              x2={i * 40}
              y2={300}
            />
          ))}
          {Array.from({ length: 8 }).map((_, i) => (
            <line
              key={`h${i}`}
              x1={0}
              y1={50 + i * 30}
              x2={400}
              y2={50 + i * 30}
            />
          ))}
        </g>
      </svg>

      {/* Buildings */}
      <svg
        className="absolute inset-x-0 bottom-0 h-2/3 w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {buildings.map((b) => (
          <g key={b.i}>
            <rect
              x={b.x}
              y={100 - b.h}
              width={b.w}
              height={b.h}
              fill="#0a0005"
            />
            {b.windows.map((w) =>
              w.on ? (
                <rect
                  key={w.k}
                  x={b.x + b.w * 0.3}
                  y={100 - b.h + 3 + w.k * 4}
                  width={0.5}
                  height={0.5}
                  fill={w.color}
                  opacity={0.9}
                />
              ) : null,
            )}
          </g>
        ))}
      </svg>

      {/* Neon signs */}
      {[
        { x: "10%", y: "30%", c: "#ff5252", w: 70, h: 8 },
        { x: "70%", y: "25%", c: "#ff1744", w: 50, h: 6 },
        { x: "45%", y: "45%", c: "#ff6d00", w: 40, h: 5 },
        { x: "25%", y: "55%", c: "#ff5252", w: 30, h: 4 },
      ].map((n, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: n.x,
            top: n.y,
            width: n.w,
            height: n.h,
            background: n.c,
            opacity: 0.75,
            boxShadow: `0 0 12px ${n.c}, 0 0 24px ${n.c}`,
            animation: `neon-flicker ${1.5 + i * 0.3}s ${i * 0.2}s infinite`,
          }}
        />
      ))}

      {/* Rain */}
      <div className="absolute inset-0 overflow-hidden">
        {rain.map((d) => (
          <div
            key={d.id}
            className="absolute w-px"
            style={{
              left: `${d.x}%`,
              top: 0,
              height: d.len,
              background: "linear-gradient(180deg, transparent, rgba(180,200,255,0.4))",
              animation: `rain-fall ${d.dur}s linear ${d.delay}s infinite`,
            }}
          />
        ))}
      </div>
    </SceneShell>
  );
}
