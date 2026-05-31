import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageTitle } from "@/components/PageTitle";
import { SITE_CONTENT } from "@/config/content";
import { EXPO_OUT } from "@/lib/motion";
import { ParallaxBackdrop } from "@/components/visuals/ParallaxBackdrop";
import { Equalizer } from "@/components/visuals/Equalizer";
import { useAudio, TRACK_CATALOG } from "@/contexts/AudioContext";

export const Route = createFileRoute("/soundtrack")({
  head: () => ({
    meta: [
      { title: `${SITE_CONTENT.pages.soundtrack} — ${SITE_CONTENT.game.title}` },
      { name: "description", content: SITE_CONTENT.soundtrack.intro },
      { property: "og:title", content: `${SITE_CONTENT.pages.soundtrack} — ${SITE_CONTENT.game.title}` },
      { property: "og:description", content: SITE_CONTENT.soundtrack.intro },
    ],
  }),
  component: SoundtrackPage,
});

const COVERS: [string, string][] = [
  ["#4fc3f7", "#001018"],
  ["#ffd54f", "#1a1208"],
  ["#ce93d8", "#0d0518"],
  ["#80deea", "#001018"],
  ["#ffab40", "#1a0e08"],
  ["#7c4dff", "#0a0518"],
  ["#ff5252", "#180505"],
  ["#a5d6a7", "#051208"],
  ["#4fc3f7", "#001018"],
  ["#ffd54f", "#1a1208"],
  ["#ce93d8", "#0d0518"],
];

function SoundtrackPage() {
  const c = SITE_CONTENT.soundtrack;
  const audio = useAudio();

  return (
    <>
      <ParallaxBackdrop tint="purple" />

      <section className="relative flex items-center justify-center px-6 pt-[180px] pb-[40px]">
        <PageTitle title={SITE_CONTENT.pages.soundtrack} />
      </section>

      <section className="px-6 pb-[140px]">
        <div className="mx-auto max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, ease: EXPO_OUT }}
            className="font-body text-center text-[16px] leading-[1.9]"
            style={{ color: "var(--text-secondary)", fontWeight: 300 }}
          >
            {c.intro}
          </motion.p>
        </div>

        {/* Now-playing hero */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: EXPO_OUT }}
          className="glass relative mx-auto mt-20 max-w-2xl overflow-hidden rounded-2xl p-10 text-center"
          style={{ borderColor: "rgba(79,195,247,0.18)" }}
        >
          <div
            className="absolute inset-0 opacity-50"
            style={{
              background:
                "radial-gradient(ellipse at 50% 0%, rgba(124,77,255,0.25), transparent 60%)",
            }}
          />
          <div className="relative flex flex-col items-center gap-5">
            <div
              className="font-mono-ui text-[10px] uppercase tracking-[0.3em]"
              style={{ color: "var(--text-muted)" }}
            >
              ▍ NOW PLAYING
            </div>
            <Equalizer active={audio.enabled && !audio.muted} bars={9} />
            <h3
              className="font-display text-[32px] font-bold"
              style={{ color: "var(--text-primary)" }}
            >
              {audio.title}
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {!audio.enabled && (
                <button
                  onClick={audio.enable}
                  className="rounded-md px-5 py-2 font-mono-ui text-[10.5px] uppercase tracking-[0.3em] transition-all hover:scale-[1.03]"
                  style={{
                    background: "transparent",
                    border: "1px solid rgba(79,195,247,0.45)",
                    color: "var(--plasma-cyan)",
                  }}
                >
                  ◆ Open Channel
                </button>
              )}
              {audio.enabled && audio.currentUrl !== TRACK_CATALOG[0].url && (
                <button
                  onClick={audio.resumeAmbient}
                  className="rounded-md px-5 py-2 font-mono-ui text-[10.5px] uppercase tracking-[0.3em] transition-all hover:scale-[1.03]"
                  style={{
                    background: "transparent",
                    border: "1px solid rgba(79,195,247,0.45)",
                    color: "var(--plasma-cyan)",
                  }}
                >
                  ↺ Back To Ambient
                </button>
              )}
            </div>
          </div>
        </motion.div>

        {/* Track grid — click to preview */}
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {TRACK_CATALOG.map((t, i) => {
            const [c1, c2] = COVERS[i % COVERS.length];
            const active = audio.currentUrl === t.url;
            return (
              <motion.button
                key={t.id}
                type="button"
                onClick={() => audio.playTrack(t.url, t.title)}
                initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: i * 0.04, ease: EXPO_OUT }}
                whileHover={{ y: -4 }}
                className="glass group flex items-center gap-4 overflow-hidden rounded-2xl p-4 text-left transition-colors"
                style={{
                  borderColor: active ? "rgba(79,195,247,0.55)" : undefined,
                  boxShadow: active ? "0 0 24px rgba(79,195,247,0.18)" : undefined,
                }}
                aria-label={`Play ${t.title}`}
              >
                <div
                  className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-xl"
                  style={{
                    background: `radial-gradient(circle at 30% 30%, ${c1} 0%, ${c2} 80%)`,
                    boxShadow: `0 0 20px ${c1}33`,
                  }}
                >
                  {active && audio.enabled && !audio.muted ? (
                    <Equalizer active />
                  ) : (
                    <span
                      className="font-mono-ui text-[10px] font-bold uppercase tracking-[0.2em]"
                      style={{ color: "#000", opacity: 0.7 }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <div
                    className="font-display text-[15px] font-bold tracking-[0.02em] truncate"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {t.title}
                  </div>
                  <div
                    className="font-mono-ui mt-0.5 text-[9.5px] uppercase tracking-[0.25em] truncate"
                    style={{ color: active ? "var(--plasma-cyan)" : "var(--text-muted)" }}
                  >
                    {active ? "▶ Now Playing" : "Click To Play"}
                  </div>
                  <div
                    className="mt-1 font-body text-[11.5px] leading-snug line-clamp-2"
                    style={{ color: "var(--text-muted)", fontWeight: 300 }}
                  >
                    {t.note}
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </section>
    </>
  );
}
