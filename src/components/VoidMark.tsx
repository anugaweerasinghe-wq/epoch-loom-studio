/**
 * VOIDBORN brand mark — a collapsing star.
 * Outer ring = the dying corona. Inner offset disc = the void core
 * eclipsing the light. Single shape, single color, instantly memorable.
 */
export function VoidMark({
  size = 22,
  className,
  glow = true,
}: {
  size?: number;
  className?: string;
  glow?: boolean;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      className={className}
      style={{
        filter: glow ? "drop-shadow(0 0 6px rgba(79,195,247,0.55))" : undefined,
      }}
      aria-hidden="true"
    >
      {/* corona */}
      <circle
        cx="16"
        cy="16"
        r="13"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.9"
      />
      {/* void core, offset to suggest eclipse */}
      <circle cx="19.5" cy="14" r="7.5" fill="currentColor" />
      {/* light cut — restores ring's emptiness on the eclipsed side */}
      <circle cx="19.5" cy="14" r="7.5" fill="var(--void-black,#050508)" opacity="1" />
      <circle
        cx="19.5"
        cy="14"
        r="7.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}
