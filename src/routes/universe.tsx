import { createFileRoute } from "@tanstack/react-router";
import { Features } from "@/components/sections/Features";
import { Classes } from "@/components/sections/Classes";
import { Stats } from "@/components/sections/Stats";
import { PageTitle } from "@/components/PageTitle";
import { SITE_CONTENT } from "@/config/content";

export const Route = createFileRoute("/universe")({
  head: () => ({
    meta: [
      { title: `${SITE_CONTENT.pages.universe} — ${SITE_CONTENT.game.title}` },
      {
        name: "description",
        content:
          "144 fractured epochs, 12 Voidborn classes, and the systems that bind them.",
      },
      {
        property: "og:title",
        content: `${SITE_CONTENT.pages.universe} — ${SITE_CONTENT.game.title}`,
      },
      { property: "og:description", content: SITE_CONTENT.features.sectionTitle },
    ],
  }),
  component: UniversePage,
});

function UniversePage() {
  return (
    <>
      <section
        className="relative flex items-center justify-center px-6 pt-[180px] pb-[40px]"
        style={{ background: "var(--void-black)" }}
      >
        <PageTitle title={SITE_CONTENT.pages.universe} />
      </section>
      <Features />
      <Classes />
      <Stats />
    </>
  );
}
