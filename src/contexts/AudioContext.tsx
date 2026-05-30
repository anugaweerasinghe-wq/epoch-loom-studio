import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { useRouterState } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { SITE_CONTENT } from "@/config/content";
import { Equalizer } from "@/components/visuals/Equalizer";

// Pixabay CDN ambient tracks (replaceable). All royalty-free.
const TRACK_URLS: Record<string, string> = {
  "/":
    "https://cdn.pixabay.com/audio/2022/03/15/audio_c8c8a73467.mp3",
  "/background":
    "https://cdn.pixabay.com/audio/2022/10/30/audio_347a2c1d62.mp3",
  "/gameplay":
    "https://cdn.pixabay.com/audio/2022/03/10/audio_2fa9e8b7a4.mp3",
  "/lore":
    "https://cdn.pixabay.com/audio/2022/10/25/audio_29bf2ed5e3.mp3",
  "/characters":
    "https://cdn.pixabay.com/audio/2022/05/27/audio_1808fbf07a.mp3",
  "/world":
    "https://cdn.pixabay.com/audio/2023/06/14/audio_46e9c4d7b1.mp3",
  "/updates":
    "https://cdn.pixabay.com/audio/2022/03/15/audio_c8c8a73467.mp3",
  "/soundtrack":
    "https://cdn.pixabay.com/audio/2022/10/30/audio_347a2c1d62.mp3",
  "/about":
    "https://cdn.pixabay.com/audio/2022/10/25/audio_29bf2ed5e3.mp3",
  "/chat":
    "https://cdn.pixabay.com/audio/2022/05/27/audio_1808fbf07a.mp3",
  "/media":
    "https://cdn.pixabay.com/audio/2023/06/14/audio_46e9c4d7b1.mp3",
};

function trackForPath(path: string) {
  return TRACK_URLS[path] ?? TRACK_URLS["/"];
}
function titleForPath(path: string) {
  const t = SITE_CONTENT.soundtrack.tracks.find((x) => x.page === path);
  return t?.title ?? "Vega Drift";
}

type AudioCtx = {
  enabled: boolean;
  enable: () => void;
  muted: boolean;
  setMuted: (v: boolean) => void;
  volume: number;
  setVolume: (v: number) => void;
};

const Ctx = createContext<AudioCtx | null>(null);
export const useAudio = () => {
  const c = useContext(Ctx);
  if (!c) throw new Error("useAudio outside AudioProvider");
  return c;
};

export function AudioProvider({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const aRef = useRef<HTMLAudioElement | null>(null);
  const bRef = useRef<HTMLAudioElement | null>(null);
  const activeRef = useRef<"a" | "b">("a");
  const [enabled, setEnabled] = useState(false);
  const [muted, setMuted] = useState(true);
  const [volume, setVolume] = useState(0.35);
  const [showInvite, setShowInvite] = useState(false);

  // Initial mount: silent until user enables (autoplay policy).
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (enabled) return;
    const t = window.setTimeout(() => setShowInvite(true), 2200);
    return () => window.clearTimeout(t);
  }, [enabled]);

  const enable = useCallback(() => {
    setEnabled(true);
    setMuted(false);
    setShowInvite(false);
    const el = activeRef.current === "a" ? aRef.current : bRef.current;
    el?.play().catch(() => {});
  }, []);

  // React to route change → crossfade
  useEffect(() => {
    if (!enabled) return;
    const url = trackForPath(pathname);
    const incoming = activeRef.current === "a" ? bRef.current : aRef.current;
    const outgoing = activeRef.current === "a" ? aRef.current : bRef.current;
    if (!incoming || !outgoing) return;
    if (incoming.src !== url) incoming.src = url;
    incoming.volume = 0;
    incoming.loop = true;
    incoming
      .play()
      .then(() => {
        const start = performance.now();
        const dur = 600;
        const target = muted ? 0 : volume;
        const startOut = outgoing.volume;
        const step = (now: number) => {
          const t = Math.min(1, (now - start) / dur);
          incoming.volume = target * t;
          outgoing.volume = startOut * (1 - t);
          if (t < 1) requestAnimationFrame(step);
          else {
            outgoing.pause();
            activeRef.current = activeRef.current === "a" ? "b" : "a";
          }
        };
        requestAnimationFrame(step);
      })
      .catch(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, enabled]);

  // Sync mute/volume on active element
  useEffect(() => {
    const el = activeRef.current === "a" ? aRef.current : bRef.current;
    if (!el) return;
    el.volume = muted ? 0 : volume;
  }, [muted, volume]);

  const title = titleForPath(pathname);

  return (
    <Ctx.Provider value={{ enabled, enable, muted, setMuted, volume, setVolume }}>
      {children}
      <audio ref={aRef} preload="none" crossOrigin="anonymous" />
      <audio ref={bRef} preload="none" crossOrigin="anonymous" />

      {/* First-touch invite toast */}
      <AnimatePresence>
        {showInvite && !enabled && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            onClick={enable}
            className="glass fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full px-5 py-3 transition-all hover:scale-[1.02]"
            style={{
              borderColor: "rgba(79,195,247,0.45)",
              boxShadow: "0 0 24px rgba(79,195,247,0.18)",
            }}
            aria-label="Enable ambient audio"
          >
            <Equalizer active />
            <span
              className="font-mono-ui text-[10.5px] uppercase tracking-[0.28em]"
              style={{ color: "var(--text-primary)" }}
            >
              Enable Ambient Audio
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Mini-player */}
      <AnimatePresence>
        {enabled && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="glass fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full px-4 py-2"
            style={{ borderColor: "rgba(79,195,247,0.25)" }}
          >
            <button
              onClick={() => setMuted(!muted)}
              className="flex h-7 w-7 items-center justify-center rounded-full transition-colors"
              style={{
                background: muted ? "transparent" : "rgba(79,195,247,0.12)",
                color: "var(--text-primary)",
              }}
              aria-label={muted ? "Unmute" : "Mute"}
            >
              {muted ? (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 5L6 9H2v6h4l5 4V5z"/><line x1="22" y1="9" x2="16" y2="15"/><line x1="16" y1="9" x2="22" y2="15"/></svg>
              ) : (
                <Equalizer active />
              )}
            </button>
            <div className="flex min-w-0 flex-col">
              <span
                className="font-display text-[12px] leading-none font-bold tracking-wide truncate"
                style={{ color: "var(--text-primary)", maxWidth: 130 }}
              >
                {title}
              </span>
              <span
                className="font-mono-ui mt-0.5 text-[8.5px] uppercase tracking-[0.25em]"
                style={{ color: "var(--text-muted)" }}
              >
                Ambient Channel
              </span>
            </div>
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="w-16 accent-cyan-400"
              aria-label="Volume"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Ctx.Provider>
  );
}
