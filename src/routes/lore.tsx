import { createFileRoute } from "@tanstack/react-router";
import { Story } from "@/components/sections/Story";
import { PageTitle } from "@/components/PageTitle";
import { SITE_CONTENT } from "@/config/content";
import { ParallaxBackdrop } from "@/components/visuals/ParallaxBackdrop";
import { FloatingShards } from "@/components/visuals/FloatingShards";

export const Route = createFileRoute("/lore")({
  head: () => ({
    meta: [
      { title: `${SITE_CONTENT.pages.lore} — ${SITE_CONTENT.game.title}` },
      { name: "description", content: "The collapse of Vega Prime, the fracture of time, and the protocol of the Voidborn." },
      { property: "og:title", content: `${SITE_CONTENT.pages.lore} — ${SITE_CONTENT.game.title}` },
      { property: "og:description", content: SITE_CONTENT.story.sectionTitle },
    ],
  }),
  component: LorePage,
});

function LorePage() {
  return (
    <>
      <ParallaxBackdrop tint="purple" />

      <section className="relative flex items-center justify-center overflow-hidden px-6 pt-[180px] pb-[40px]">
        <FloatingShards tint="var(--stellar-purple)" />
        <div className="relative">
          <PageTitle title={SITE_CONTENT.pages.lore} />
        </div>
      </section>
      <Story />
    </>
  );
}
