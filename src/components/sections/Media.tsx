import { motion } from "framer-motion";
import { SITE_CONTENT } from "@/config/content";
import { SCENE_MAP } from "@/components/media/sceneMap";
import { SceneHUD, SceneCaption } from "@/components/media/scenes/SceneShell";
import { cardReveal, textReveal } from "@/lib/motion";

export function Media() {
  const scenes = SITE_CONTENT.media.scenes;
  const featured = scenes[0];
  const grid = scenes.slice(1);
  const FeaturedScene = SCENE_MAP[featured.id];
  const TrailerScene = SCENE_MAP[featured.id];

  return (
    <section
      className="relative px-6 py-[100px]"
      style={{ background: "var(--void-black)" }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Featured scene */}
        <motion.div
          {...cardReveal}
          className="group relative h-[520px] w-full overflow-hidden rounded-2xl"
          style={{ border: "1px solid rgba(255,255,255,0.06)" }}
        >
          <FeaturedScene />
          <SceneHUD
            sector={`EPOCH 144 / ${featured.sector}`}
            label={featured.readout.label}
            value={featured.readout.value}
            danger={featured.readout.danger}
          />
          <SceneCaption name={featured.name} sector={`EPOCH 144 / ${featured.sector}`} />
        </motion.div>

        {/* 2×2 grid */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {grid.map((s, i) => {
            const Scene = SCENE_MAP[s.id];
            const epoch = ["07", "23", "51", "99"][i] ?? "??";
            return (
              <motion.div
                key={s.id}
                {...cardReveal}
                transition={{ ...cardReveal.transition, delay: i * 0.08 }}
                className="group relative h-[320px] overflow-hidden rounded-2xl"
                style={{
                  border: "1px solid rgba(255,255,255,0.06)",
                  transition: "border-color 400ms ease, transform 400ms ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                }}
              >
                <Scene />
                <SceneHUD
                  sector={`EPOCH ${epoch} / ${s.sector}`}
                  label={s.readout.label}
                  value={s.readout.value}
                  danger={s.readout.danger}
                />
                <SceneCaption name={s.name} sector={`EPOCH ${epoch} / ${s.sector}`} />
              </motion.div>
            );
          })}
        </div>

        {/* Disclaimer */}
        <motion.div
          {...textReveal}
          className="font-mono-ui mt-10 text-center text-[10px] uppercase"
          style={{ color: "var(--text-muted)", letterSpacing: "0.25em" }}
        >
          {SITE_CONTENT.media.disclaimer}
        </motion.div>

        {/* Trailer card */}
        <motion.div
          {...cardReveal}
          className="relative mt-16 aspect-video w-full overflow-hidden rounded-2xl"
          style={{ border: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="absolute inset-0">
            <TrailerScene />
          </div>
          <div
            className="absolute inset-0 flex flex-col items-center justify-center backdrop-blur-md"
            style={{ background: "rgba(5,5,8,0.55)" }}
          >
            <div
              className="font-mono-ui text-[10px] uppercase"
              style={{ color: "var(--text-muted)", letterSpacing: "0.3em" }}
            >
              IN PRODUCTION
            </div>
            <div
              className="font-display mt-4 text-center text-[32px] font-bold tracking-wide sm:text-[40px]"
              style={{ color: "var(--text-primary)" }}
            >
              {SITE_CONTENT.media.trailer.label}
            </div>
            <div
              className="font-mono-ui mt-3 text-[12px] uppercase"
              style={{ color: "var(--text-muted)", letterSpacing: "0.2em" }}
            >
              {SITE_CONTENT.media.trailer.sub}
            </div>
            <div
              className="mt-8 h-px w-[280px] overflow-hidden"
              style={{ background: "rgba(255,255,255,0.08)" }}
            >
              <div
                className="h-full"
                style={{
                  width: "30%",
                  background:
                    "linear-gradient(90deg, transparent, rgba(0,229,255,0.6), transparent)",
                  animation: "trailer-progress 8s ease-in-out infinite",
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
