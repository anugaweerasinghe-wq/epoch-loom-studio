/**
 * Lightweight CSS-animated equalizer bars.
 * Pass `active` to enable the animation; otherwise bars sit static.
 */
export function Equalizer({ active = false, bars = 5 }: { active?: boolean; bars?: number }) {
  return (
    <div className="flex items-end gap-[3px]" aria-hidden style={{ height: 18 }}>
      {Array.from({ length: bars }).map((_, i) => (
        <span
          key={i}
          className="block w-[3px] rounded-sm"
          style={{
            background: "var(--plasma-cyan)",
            height: active ? `${30 + ((i * 17) % 70)}%` : "30%",
            animation: active
              ? `eq-bounce ${0.7 + (i % 3) * 0.2}s ease-in-out ${i * 0.08}s infinite alternate`
              : "none",
            opacity: 0.85,
          }}
        />
      ))}
    </div>
  );
}
