import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageTitle } from "@/components/PageTitle";
import { SITE_CONTENT } from "@/config/content";
import { EXPO_OUT } from "@/lib/motion";

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
      <section
        className="relative flex items-center justify-center px-6 pt-[180px] pb-[40px]"
        style={{ background: "var(--void-black)" }}
      >
        <PageTitle title={SITE_CONTENT.pages.about} />
      </section>

      <section className="px-6 pb-[140px]" style={{ background: "var(--void-black)" }}>
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
              whileHover={{ y: -4 }}
              className="glass relative flex flex-col items-center rounded-2xl p-8 text-center"
            >
              <div
                className="flex h-20 w-20 items-center justify-center rounded-full"
                style={{
                  background: "rgba(79,195,247,0.06)",
                  border: "1px solid rgba(79,195,247,0.25)",
                  color: "var(--plasma-cyan)",
                }}
              >
                <span
                  className="font-display text-[22px] font-bold tracking-[0.1em]"
                >
                  {m.initials}
                </span>
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
