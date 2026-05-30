/**
 * Vertical animated cyan timeline rail with pulsing nodes.
 * Render as a sibling positioned-absolute element inside a `relative` container.
 */
export function TimelineRail({ nodes }: { nodes: number }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute left-3 top-0 hidden h-full md:block"
      style={{ width: 2 }}
    >
      <div
        className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2"
        style={{
          background:
            "linear-gradient(180deg, transparent, rgba(79,195,247,0.35) 10%, rgba(79,195,247,0.35) 90%, transparent)",
        }}
      />
      {Array.from({ length: nodes }).map((_, i) => (
        <div
          key={i}
          className="absolute left-1/2 -translate-x-1/2"
          style={{
            top: `${(i / Math.max(1, nodes - 1)) * 100}%`,
          }}
        >
          <span className="relative inline-flex h-2.5 w-2.5">
            <span
              className="absolute inset-0 animate-ping rounded-full"
              style={{ background: "var(--plasma-cyan)", opacity: 0.5 }}
            />
            <span
              className="relative inline-flex h-2.5 w-2.5 rounded-full"
              style={{
                background: "var(--plasma-cyan)",
                boxShadow: "0 0 10px rgba(79,195,247,0.6)",
              }}
            />
          </span>
        </div>
      ))}
    </div>
  );
}
