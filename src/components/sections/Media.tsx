import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { SITE_CONTENT } from "@/config/content";
import { premiumReveal, staggerParent, staggerChild } from "@/lib/motion";

export function Media() {
  const shots = SITE_CONTENT.media.screenshots;
  return (
    <section className="relative px-6 py-[60px]" style={{ background: "var(--void-black)" }}>
      <div className="mx-auto max-w-7xl">
        <motion.div
          {...staggerParent}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {shots.map((s, i) => {
            const sizes = [
              "lg:row-span-2 lg:col-span-1 min-h-[400px]",
              "min-h-[260px]",
              "min-h-[260px]",
              "min-h-[260px] lg:col-span-2",
              "min-h-[260px]",
            ];
            return (
              <motion.div
                key={s.id}
                variants={staggerChild}
                className={`group relative overflow-hidden rounded-2xl ${sizes[i] ?? ""}`}
                style={{
                  background: s.gradient,
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
                <div className="absolute inset-x-0 bottom-0 translate-y-full bg-black/60 p-5 backdrop-blur-md transition-transform duration-500 group-hover:translate-y-0">
                  <div
                    className="font-mono-ui text-[11px] uppercase"
                    style={{
                      color: "var(--text-secondary)",
                      letterSpacing: "0.2em",
                    }}
                  >
                    {s.name}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          {...premiumReveal}
          className="relative mt-8 aspect-video w-full overflow-hidden rounded-2xl"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, #0d0a1a 0%, #050508 100%)",
            border: "1px solid rgba(255,255,255,0.06)",
            transition: "border-color 400ms ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
          }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
            <div
              className="flex h-20 w-20 items-center justify-center rounded-full transition-transform duration-400 hover:scale-105"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              <Play size={28} style={{ color: "var(--text-primary)" }} fill="currentColor" />
            </div>
            <div
              className="font-mono-ui text-[11px] uppercase"
              style={{ color: "var(--text-primary)", letterSpacing: "0.2em" }}
            >
              {SITE_CONTENT.media.trailer.label}
            </div>
            <div
              className="font-mono-ui text-[10px]"
              style={{ color: "var(--text-muted)", letterSpacing: "0.2em" }}
            >
              {SITE_CONTENT.media.trailer.duration}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
