export function WarriorSilhouette() {
  return (
    <svg
      viewBox="0 0 200 400"
      className="h-full w-auto"
      style={{
        filter:
          "drop-shadow(0 0 30px rgba(124,77,255,0.5)) drop-shadow(0 0 60px rgba(79,195,247,0.3))",
      }}
    >
      <defs>
        <linearGradient id="warriorBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7c4dff" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#1a0d3a" stopOpacity="0.95" />
        </linearGradient>
        <linearGradient id="warriorEdge" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#4fc3f7" />
          <stop offset="100%" stopColor="#00e5ff" />
        </linearGradient>
      </defs>

      {/* Head */}
      <polygon
        points="100,20 115,50 100,80 85,50"
        fill="url(#warriorBody)"
        stroke="url(#warriorEdge)"
        strokeWidth="1.2"
      />
      {/* Shoulders */}
      <polygon
        points="40,110 75,90 100,110 125,90 160,110 150,140 100,125 50,140"
        fill="url(#warriorBody)"
        stroke="url(#warriorEdge)"
        strokeWidth="1.2"
      />
      {/* Diamond torso */}
      <polygon
        points="100,100 145,170 100,260 55,170"
        fill="url(#warriorBody)"
        stroke="url(#warriorEdge)"
        strokeWidth="1.5"
      />
      {/* Core gem */}
      <polygon
        points="100,160 115,180 100,200 85,180"
        fill="#00e5ff"
        opacity="0.9"
      >
        <animate
          attributeName="opacity"
          values="0.5;1;0.5"
          dur="2s"
          repeatCount="indefinite"
        />
      </polygon>
      {/* Blade arms */}
      <polygon
        points="35,115 50,140 45,250 25,260"
        fill="url(#warriorBody)"
        stroke="url(#warriorEdge)"
        strokeWidth="1"
      />
      <polygon
        points="165,115 175,260 155,250 150,140"
        fill="url(#warriorBody)"
        stroke="url(#warriorEdge)"
        strokeWidth="1"
      />
      {/* Legs */}
      <polygon
        points="70,260 95,260 90,380 70,380"
        fill="url(#warriorBody)"
        stroke="url(#warriorEdge)"
        strokeWidth="1"
      />
      <polygon
        points="105,260 130,260 130,380 110,380"
        fill="url(#warriorBody)"
        stroke="url(#warriorEdge)"
        strokeWidth="1"
      />
      {/* Cape lines */}
      <path
        d="M 55 170 Q 30 280 50 380"
        stroke="rgba(124,77,255,0.5)"
        strokeWidth="1"
        fill="none"
      />
      <path
        d="M 145 170 Q 170 280 150 380"
        stroke="rgba(124,77,255,0.5)"
        strokeWidth="1"
        fill="none"
      />
    </svg>
  );
}
