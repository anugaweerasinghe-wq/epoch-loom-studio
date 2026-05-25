import { createFileRoute } from "@tanstack/react-router";
import { Story } from "@/components/sections/Story";
import { PageTitle } from "@/components/PageTitle";
import { SITE_CONTENT } from "@/config/content";

export const Route = createFileRoute("/story")({
  head: () => ({
    meta: [
      { title: `${SITE_CONTENT.pages.story} — ${SITE_CONTENT.game.title}` },
      {
        name: "description",
        content:
          "The collapse of Vega Prime, the fracture of time, and the protocol of the Voidborn.",
      },
      {
        property: "og:title",
        content: `${SITE_CONTENT.pages.story} — ${SITE_CONTENT.game.title}`,
      },
      { property: "og:description", content: SITE_CONTENT.story.sectionTitle },
    ],
  }),
  component: StoryPage,
});

function StoryPage() {
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
              "radial-gradient(ellipse 80vw 60vh at 50% 30%, rgba(124,77,255,0.08), transparent 70%)",
            animation: "ambient-drift 24s ease-in-out infinite",
          }}
        />
        <div className="relative">
          <PageTitle title={SITE_CONTENT.pages.story} />
        </div>
      </section>
      <Story />
    </>
  );
}
