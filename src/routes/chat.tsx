import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageTitle } from "@/components/PageTitle";
import { SITE_CONTENT } from "@/config/content";
import { EXPO_OUT } from "@/lib/motion";

export const Route = createFileRoute("/chat")({
  head: () => ({
    meta: [
      { title: `${SITE_CONTENT.pages.chat} — ${SITE_CONTENT.game.title}` },
      { name: "description", content: SITE_CONTENT.chat.intro },
      { property: "og:title", content: `${SITE_CONTENT.pages.chat} — ${SITE_CONTENT.game.title}` },
      { property: "og:description", content: SITE_CONTENT.chat.intro },
    ],
  }),
  component: ChatPage,
});

function ChatPage() {
  const c = SITE_CONTENT.chat;
  return (
    <>
      <section
        className="relative flex items-center justify-center px-6 pt-[180px] pb-[40px]"
        style={{ background: "var(--void-black)" }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80vw 60vh at 50% 30%, rgba(79,195,247,0.08), transparent 70%)",
            animation: "ambient-drift 24s ease-in-out infinite",
          }}
        />
        <div className="relative">
          <PageTitle title={SITE_CONTENT.pages.chat} />
        </div>
      </section>

      <section className="px-6 pb-[140px]" style={{ background: "var(--void-black)" }}>
        <div className="mx-auto max-w-2xl">
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

          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1, delay: 0.15, ease: EXPO_OUT }}
            className="glass relative mt-16 flex min-h-[420px] flex-col rounded-2xl p-8 md:p-10"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="relative inline-flex h-2 w-2">
                  <span
                    className="absolute inset-0 animate-ping rounded-full"
                    style={{ background: "var(--plasma-cyan)", opacity: 0.7 }}
                  />
                  <span
                    className="relative inline-flex h-2 w-2 rounded-full"
                    style={{ background: "var(--plasma-cyan)" }}
                  />
                </span>
                <div
                  className="font-mono-ui text-[10.5px] uppercase tracking-[0.3em]"
                  style={{ color: "var(--text-secondary)" }}
                >
                  CHANNEL · STANDBY
                </div>
              </div>
              <div
                className="font-mono-ui text-[10px] uppercase tracking-[0.25em]"
                style={{ color: "var(--text-muted)" }}
              >
                VOID GUIDE v0.1
              </div>
            </div>

            <div className="flex flex-1 flex-col items-center justify-center text-center py-16">
              <div
                className="font-display text-[26px] font-bold leading-tight"
                style={{ color: "var(--text-primary)" }}
              >
                The channel opens soon.
              </div>
              <p
                className="mt-4 max-w-md font-body text-[14px] leading-[1.9]"
                style={{ color: "var(--text-muted)", fontWeight: 300 }}
              >
                The Void Guide is calibrating its frequency. When the channel opens,
                it will know everything published on this site — and only that.
              </p>
              <div
                className="mt-10 grid w-full max-w-md grid-cols-1 gap-2 sm:grid-cols-2"
              >
                {c.suggestions.map((s) => (
                  <div
                    key={s}
                    className="rounded-xl px-4 py-3 text-left font-body text-[12.5px]"
                    style={{
                      background: "rgba(255,255,255,0.025)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      color: "var(--text-secondary)",
                    }}
                  >
                    {s}
                  </div>
                ))}
              </div>
            </div>

            <div
              className="mt-6 flex items-center gap-3 rounded-xl px-4 py-3"
              style={{
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div
                className="flex-1 font-body text-[14px]"
                style={{ color: "var(--text-muted)", fontWeight: 300 }}
              >
                {c.placeholder}
              </div>
              <div
                className="font-mono-ui text-[10px] uppercase tracking-[0.25em]"
                style={{ color: "var(--text-muted)" }}
              >
                ⌘ + ↵
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
