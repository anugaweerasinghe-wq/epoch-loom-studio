import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Equalizer } from "@/components/visuals/Equalizer";

// Kevin MacLeod — incompetech.com — CC BY 4.0. NOTE: incompetech does NOT send
// CORS headers, so <audio> must NOT use crossOrigin="anonymous".
const BASE = "https://incompetech.com/music/royalty-free/mp3-royaltyfree/";

// One consistent ambient track for the entire site.
const AMBIENT_URL = BASE + "Dark%20Star.mp3";
const AMBIENT_TITLE = "Dark Star";

// Catalog of additional tracks the Soundtrack page can preview.
export const TRACK_CATALOG: { id: string; title: string; url: string; note: string }[] = [
  { id: "dark-star",        title: "Dark Star",            url: AMBIENT_URL,                              note: "The site's ambient signal — the opening hum of a star choosing to die." },
  { id: "echoes-of-time",   title: "Echoes Of Time",       url: BASE + "Echoes%20of%20Time%20v2.mp3",     note: "The golden silence. One second before the collapse." },
  { id: "devastation",      title: "Devastation & Revenge",url: BASE + "Devastation%20and%20Revenge.mp3", note: "Built around the heartbeat of a saturated Void Core." },
  { id: "dark-fog",         title: "Dark Fog",             url: BASE + "Dark%20Fog.mp3",                  note: "Twelve voices. One frequency. No words." },
  { id: "five-armies",      title: "Five Armies",          url: BASE + "Five%20Armies.mp3",               note: "Each Voidborn has a tone. Played together once." },
  { id: "frozen-star",      title: "Frozen Star",          url: BASE + "Frozen%20Star.mp3",               note: "Field recordings from six dying epochs, layered." },
  { id: "darkness-coming",  title: "Darkness Is Coming",   url: BASE + "Darkness%20is%20Coming.mp3",      note: "Telemetry, parsed as music." },
  { id: "deep-haze",        title: "Deep Haze",            url: BASE + "Deep%20Haze.mp3",                 note: "The Score's quiet chamber. For long thoughts." },
  { id: "dreamy-flashback", title: "Dreamy Flashback",     url: BASE + "Dreamy%20Flashback.mp3",          note: "Four contributors, one signal." },
  { id: "hitman",           title: "Hitman",               url: BASE + "Hitman.mp3",                      note: "For the moment you finally ask the Void a question." },
  { id: "epic-unease",      title: "Epic Unease",          url: BASE + "Epic%20Unease.mp3",               note: "Cinematic dread. Pressure under the surface." },
];

type AudioCtx = {
  enabled: boolean;
  enable: () => void;
  muted: boolean;
  setMuted: (v: boolean) => void;
  volume: number;
  setVolume: (v: number) => void;
  title: string;
  // Soundtrack-page preview controls
  currentUrl: string;
  playTrack: (url: string, title: string) => void;
  resumeAmbient: () => void;
};

const Ctx = createContext<AudioCtx | null>(null);
export const useAudio = () => {
  const c = useContext(Ctx);
  if (!c) throw new Error("useAudio outside AudioProvider");
  return c;
};

export function AudioProvider({ children }: { children: ReactNode }) {
  const aRef = useRef<HTMLAudioElement | null>(null);
  const bRef = useRef<HTMLAudioElement | null>(null);
  const activeRef = useRef<"a" | "b">("a");
  const currentUrlRef = useRef<string>("");

  const [enabled, setEnabled] = useState(false);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(0.35);
  const [showInvite, setShowInvite] = useState(false);
  const [currentUrl, setCurrentUrl] = useState<string>(AMBIENT_URL);
  const [currentTitle, setCurrentTitle] = useState<string>(AMBIENT_TITLE);

  useEffect(() => {
    if (typeof window === "undefined" || enabled) return;
    const t = window.setTimeout(() => setShowInvite(true), 2000);
    return () => window.clearTimeout(t);
  }, [enabled]);

  const startPlayback = useCallback(
    (url: string) => {
      const el = aRef.current;
      if (!el) return;
      el.src = url;
      el.loop = true;
      el.volume = muted ? 0 : volume;
      el.play().catch((err) => console.warn("[audio] play failed", err));
      activeRef.current = "a";
      currentUrlRef.current = url;
    },
    [muted, volume],
  );

  const crossfadeTo = useCallback(
    (url: string) => {
      if (currentUrlRef.current === url) return;
      const outgoing = activeRef.current === "a" ? aRef.current : bRef.current;
      const incoming = activeRef.current === "a" ? bRef.current : aRef.current;
      if (!incoming || !outgoing) return;

      incoming.src = url;
      incoming.loop = true;
      incoming.volume = 0;
      currentUrlRef.current = url;

      const target = muted ? 0 : volume;
      const startOut = outgoing.volume;
      const startTime = performance.now();
      const dur = 700;

      const step = (now: number) => {
        const t = Math.min(1, (now - startTime) / dur);
        incoming.volume = target * t;
        outgoing.volume = startOut * (1 - t);
        if (t < 1) requestAnimationFrame(step);
        else {
          try { outgoing.pause(); } catch { /* noop */ }
          outgoing.removeAttribute("src");
          outgoing.load();
          activeRef.current = activeRef.current === "a" ? "b" : "a";
        }
      };

      incoming
        .play()
        .then(() => requestAnimationFrame(step))
        .catch((err) => console.warn("[audio] crossfade failed", err));
    },
    [muted, volume],
  );

  const enable = useCallback(() => {
    setEnabled(true);
    setMuted(false);
    setShowInvite(false);
    startPlayback(AMBIENT_URL);
    setCurrentUrl(AMBIENT_URL);
    setCurrentTitle(AMBIENT_TITLE);
  }, [startPlayback]);

  const playTrack = useCallback(
    (url: string, title: string) => {
      if (!enabled) {
        // First gesture: enable directly with that track
        setEnabled(true);
        setMuted(false);
        setShowInvite(false);
        startPlayback(url);
      } else {
        crossfadeTo(url);
      }
      setCurrentUrl(url);
      setCurrentTitle(title);
    },
    [enabled, startPlayback, crossfadeTo],
  );

  const resumeAmbient = useCallback(() => {
    if (!enabled) return enable();
    crossfadeTo(AMBIENT_URL);
    setCurrentUrl(AMBIENT_URL);
    setCurrentTitle(AMBIENT_TITLE);
  }, [enabled, enable, crossfadeTo]);

  // Sync mute/volume to active element
  useEffect(() => {
    const el = activeRef.current === "a" ? aRef.current : bRef.current;
    if (!el) return;
    el.volume = muted ? 0 : volume;
  }, [muted, volume]);

  return (
    <Ctx.Provider
      value={{
        enabled,
        enable,
        muted,
        setMuted,
        volume,
        setVolume,
        title: currentTitle,
        currentUrl,
        playTrack,
        resumeAmbient,
      }}
    >
      {children}
      <audio ref={aRef} preload="none" />
      <audio ref={bRef} preload="none" />

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
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M11 5L6 9H2v6h4l5 4V5z" />
                  <line x1="22" y1="9" x2="16" y2="15" />
                  <line x1="16" y1="9" x2="22" y2="15" />
                </svg>
              ) : (
                <Equalizer active />
              )}
            </button>
            <div className="flex min-w-0 flex-col">
              <span
                className="font-display text-[12px] leading-none font-bold tracking-wide truncate"
                style={{ color: "var(--text-primary)", maxWidth: 150 }}
              >
                {currentTitle}
              </span>
              <span
                className="font-mono-ui mt-0.5 text-[8.5px] uppercase tracking-[0.25em]"
                style={{ color: "var(--text-muted)" }}
              >
                {currentUrl === AMBIENT_URL ? "Ambient Channel" : "Preview"}
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
