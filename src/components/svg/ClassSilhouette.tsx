import type { ReactElement } from "react";

export function ClassSilhouette({
  variant,
  color,
}: {
  variant: "starbreaker" | "chronoslip" | "plasmaweave";
  color: string;
}) {
  // Each class gets a distinct angular silhouette
  const paths: Record<string, ReactElement> = {
    starbreaker: (
      <g>
        {/* Heavy titan */}
        <polygon points="100,30 120,55 100,80 80,55" />
        <polygon points="35,110 80,90 100,110 120,90 165,110 155,160 100,140 45,160" />
        <polygon points="100,110 150,200 100,290 50,200" />
        <polygon points="30,125 45,155 50,260 25,275" />
        <polygon points="170,125 175,275 155,260 155,155" />
        <polygon points="65,290 95,290 90,380 65,380" />
        <polygon points="105,290 135,290 135,380 110,380" />
      </g>
    ),
    chronoslip: (
      <g>
        {/* Slender assassin */}
        <polygon points="100,25 112,55 100,80 88,55" />
        <polygon points="65,95 100,110 135,95 130,135 100,125 70,135" />
        <polygon points="100,110 130,200 100,280 70,200" />
        {/* Daggers */}
        <polygon points="55,120 65,135 35,260 30,250" />
        <polygon points="145,120 170,250 165,260 135,135" />
        <polygon points="75,280 95,280 90,380 75,380" />
        <polygon points="105,280 125,280 125,380 110,380" />
        {/* Hood spike */}
        <polygon points="100,25 105,5 100,0 95,5" opacity="0.5" />
      </g>
    ),
    plasmaweave: (
      <g>
        {/* Mage with staff */}
        <polygon points="100,30 115,55 100,80 85,55" />
        <polygon points="60,100 100,90 140,100 135,130 100,120 65,130" />
        {/* Robe expanding */}
        <polygon points="65,130 100,120 135,130 160,300 100,310 40,300" />
        {/* Staff */}
        <line x1="155" y1="60" x2="180" y2="370" strokeWidth="3" stroke={color} opacity="0.8" />
        <circle cx="155" cy="60" r="10" fill={color} opacity="0.9" />
        <circle cx="155" cy="60" r="16" fill="none" stroke={color} opacity="0.4" />
        {/* Legs hint */}
        <polygon points="70,300 95,295 90,380 70,380" opacity="0.7" />
        <polygon points="105,295 130,300 130,380 110,380" opacity="0.7" />
      </g>
    ),
  };

  return (
    <div
      className="relative h-full w-full"
      style={{ animation: "float-y 4s ease-in-out infinite", willChange: "transform" }}
    >
      {/* Orbiting rings */}
      <svg
        viewBox="-100 -50 400 500"
        className="absolute inset-0 h-full w-full"
        aria-hidden
      >
        <g
          style={{
            transformOrigin: "100px 200px",
            animation: "spin-slow 20s linear infinite",
          }}
        >
          <ellipse
            cx="100"
            cy="200"
            rx="170"
            ry="60"
            fill="none"
            stroke={color}
            strokeOpacity="0.35"
            strokeWidth="1"
            strokeDasharray="4 8"
          />
        </g>
        <g
          style={{
            transformOrigin: "100px 200px",
            animation: "spin-slower 35s linear infinite",
          }}
        >
          <ellipse
            cx="100"
            cy="200"
            rx="180"
            ry="180"
            fill="none"
            stroke={color}
            strokeOpacity="0.15"
            strokeWidth="0.8"
          />
        </g>
      </svg>

      <svg
        viewBox="0 0 200 400"
        className="relative h-full w-full"
        style={{
          filter: `drop-shadow(0 0 30px ${color}aa) drop-shadow(0 0 60px ${color}55)`,
        }}
      >
        <defs>
          <linearGradient id={`grad-${variant}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.95" />
            <stop offset="100%" stopColor="#0a0a18" stopOpacity="0.9" />
          </linearGradient>
        </defs>
        <g
          fill={`url(#grad-${variant})`}
          stroke={color}
          strokeWidth="1.2"
          strokeOpacity="0.9"
        >
          {paths[variant]}
        </g>
        {/* Core */}
        <circle cx="100" cy="180" r="6" fill="#fff" opacity="0.9">
          <animate
            attributeName="opacity"
            values="0.4;1;0.4"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  );
}
