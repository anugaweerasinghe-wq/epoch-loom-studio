import type { ReactNode } from "react";

export function SceneShell({
  children,
  background,
  className = "",
}: {
  children: ReactNode;
  background: string;
  className?: string;
}) {
  return (
    <div
      className={`relative h-full w-full overflow-hidden ${className}`}
      style={{ background, transform: "translateZ(0)", willChange: "transform" }}
    >
      {children}
    </div>
  );
}

export function SceneHUD({
  sector,
  label,
  value,
  danger = false,
  alwaysOn = false,
}: {
  sector: string;
  label: string;
  value: string;
  danger?: boolean;
  alwaysOn?: boolean;
}) {
  return (
    <div
      className={`glass pointer-events-none absolute right-4 top-4 z-20 rounded-md px-3 py-2 transition-opacity duration-300 ${alwaysOn ? "opacity-90" : "opacity-0 group-hover:opacity-100"}`}
    >
      <div
        className="font-mono-ui text-[9px] uppercase"
        style={{ color: "var(--text-muted)", letterSpacing: "0.2em" }}
      >
        {sector}
      </div>
      <div
        className="font-mono-ui mt-1 text-[10px] uppercase"
        style={{
          color: danger ? "var(--danger-red)" : "var(--plasma-cyan)",
          letterSpacing: "0.15em",
        }}
      >
        {label}: {value}
        <span
          className="ml-1 inline-block"
          style={{ animation: "scene-blink 1.1s steps(1) infinite" }}
        >
          ▍
        </span>
      </div>
    </div>
  );
}

export function SceneCaption({
  name,
  sector,
}: {
  name: string;
  sector: string;
}) {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/85 via-black/50 to-transparent p-5">
      <div className="translate-y-2 transition-transform duration-400 group-hover:translate-y-0">
        <div
          className="font-display text-[20px] font-bold tracking-wide"
          style={{ color: "var(--text-primary)" }}
        >
          {name}
        </div>
        <div
          className="font-mono-ui mt-1 text-[10px] uppercase"
          style={{ color: "var(--text-muted)", letterSpacing: "0.2em" }}
        >
          {sector}
        </div>
      </div>
    </div>
  );
}
