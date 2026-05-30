import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageTitle } from "@/components/PageTitle";
import { SITE_CONTENT } from "@/config/content";
import { EXPO_OUT } from "@/lib/motion";
import { ParallaxBackdrop } from "@/components/visuals/ParallaxBackdrop";
import { FloatingShards } from "@/components/visuals/FloatingShards";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `${SITE_CONTENT.pages.about} — ${SITE_CONTENT.game.title}` },
      { name: "description", content: SITE_CONTENT.about.intro },
      { property: "og:title", content: `${SITE_CONTENT.pages.about} — ${SITE_CONTENT.game.title}` },
      { property: "og:description", content: SITE_CONTENT.about.intro },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const c = SITE_CONTENT.about;
  return (
    <>
      <ParallaxBackdrop tint="cyan" />

      <section className="relative flex items-center justify-center overflow-hidden px-6 pt-[180px] pb-[40px]">
        <FloatingShards />
        <div className="relative">
          <PageTitle title={SITE_CONTENT.pages.about} />
        </div>
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

        <div className="mx-auto mt-24 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {c.team.map((m, i) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, delay: i * 0.08, ease: EXPO_OUT }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="glass group relative flex flex-col items-center overflow-hidden rounded-2xl p-8 text-center"
              style={{ transition: "border-color 400ms ease" }}
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle at 50% 0%, rgba(79,195,247,0.12), transparent 60%)",
                }}
              />
              <div className="relative">
                <div
                  className="absolute -inset-2 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: "radial-gradient(circle, rgba(79,195,247,0.25), transparent 70%)",
                  }}
                />
                <div
                  className="relative flex h-20 w-20 items-center justify-center rounded-full"
                  style={{
                    background: "rgba(79,195,247,0.06)",
                    border: "1px solid rgba(79,195,247,0.35)",
                    color: "var(--plasma-cyan)",
                  }}
                >
                  <span className="font-display text-[22px] font-bold tracking-[0.1em]">
                    {m.initials}
                  </span>
                </div>
              </div>
              <h3
                className="mt-6 font-display text-[22px] font-bold"
                style={{ color: "var(--text-primary)" }}
              >
                {m.name}
              </h3>
              <div
                className="mt-1 font-mono-ui text-[10.5px] uppercase tracking-[0.25em]"
                style={{ color: "var(--plasma-cyan)", opacity: 0.85 }}
              >
                {m.role}
              </div>
              <p
                className="mt-5 font-body text-[13.5px] leading-[1.85]"
                style={{ color: "var(--text-muted)", fontWeight: 300 }}
              >
                {m.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
