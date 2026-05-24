export function CosmicPanel({
  readouts,
}: {
  readouts: { label: string; value: string }[];
}) {
  return (
    <div
      className="glass relative aspect-square w-full overflow-hidden rounded-2xl p-8"
      style={{ borderColor: "rgba(79,195,247,0.2)" }}
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(124,77,255,0.25) 0%, transparent 65%)",
        }}
      />

      {/* Rings */}
      <svg
        viewBox="0 0 400 400"
        className="absolute inset-0 h-full w-full"
        aria-hidden
      >
        <defs>
          <linearGradient id="ringA" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#4fc3f7" stopOpacity="0.8" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <linearGradient id="ringB" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffd54f" stopOpacity="0.7" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <g
          style={{
            transformOrigin: "200px 200px",
            animation: "spin-slow 40s linear infinite",
          }}
        >
          <circle
            cx="200"
            cy="200"
            r="170"
            fill="none"
            stroke="url(#ringA)"
            strokeWidth="1"
            strokeDasharray="4 8"
          />
          <circle
            cx="200"
            cy="200"
            r="140"
            fill="none"
            stroke="rgba(79,195,247,0.3)"
            strokeWidth="1"
          />
        </g>
        <g
          style={{
            transformOrigin: "200px 200px",
            animation: "spin-slower 25s linear infinite",
          }}
        >
          <circle
            cx="200"
            cy="200"
            r="110"
            fill="none"
            stroke="url(#ringB)"
            strokeWidth="1"
            strokeDasharray="2 6"
          />
          <circle
            cx="200"
            cy="200"
            r="85"
            fill="none"
            stroke="rgba(255,213,79,0.3)"
            strokeWidth="0.5"
          />
        </g>
        {/* Starburst */}
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i * Math.PI * 2) / 12;
          const x1 = 200 + Math.cos(a) * 30;
          const y1 = 200 + Math.sin(a) * 30;
          const x2 = 200 + Math.cos(a) * 70;
          const y2 = 200 + Math.sin(a) * 70;
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#00e5ff"
              strokeWidth="1.5"
              opacity="0.7"
            />
          );
        })}
        <circle cx="200" cy="200" r="18" fill="#00e5ff" opacity="0.9">
          <animate
            attributeName="r"
            values="14;22;14"
            dur="2.5s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="200" cy="200" r="6" fill="#ffffff" />
      </svg>

      {/* Readouts */}
      <div className="relative z-10 flex h-full flex-col justify-between">
        <div className="flex justify-between">
          <div
            className="font-mono-ui text-[10px] uppercase tracking-[0.25em]"
            style={{ color: "var(--plasma-cyan)" }}
          >
            ◉ VOID-LINK ACTIVE
          </div>
          <div
            className="font-mono-ui text-[10px] tracking-[0.2em]"
            style={{ color: "var(--text-muted)" }}
          >
            v 14.4.4
          </div>
        </div>
        <div className="grid gap-2">
          {readouts.map((r) => (
            <div
              key={r.label}
              className="flex items-center justify-between border-t pt-2"
              style={{ borderColor: "rgba(255,255,255,0.06)" }}
            >
              <span
                className="font-mono-ui text-[9px] uppercase tracking-[0.2em]"
                style={{ color: "var(--text-muted)" }}
              >
                {r.label}
              </span>
              <span
                className="font-mono-ui text-[10px] tracking-[0.15em]"
                style={{ color: "var(--plasma-blue)" }}
              >
                {r.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
