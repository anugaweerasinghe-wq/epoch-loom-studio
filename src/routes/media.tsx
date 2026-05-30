import { createFileRoute } from "@tanstack/react-router";
import { Media } from "@/components/sections/Media";
import { PageTitle } from "@/components/PageTitle";
import { SITE_CONTENT } from "@/config/content";
import { ParallaxBackdrop } from "@/components/visuals/ParallaxBackdrop";

export const Route = createFileRoute("/media")({
  head: () => ({
    meta: [
      { title: `${SITE_CONTENT.pages.media} — ${SITE_CONTENT.game.title}` },
      {
        name: "description",
        content: "Screenshots and gameplay reveal from VOIDBORN: SHATTERED EPOCH.",
      },
      {
        property: "og:title",
        content: `${SITE_CONTENT.pages.media} — ${SITE_CONTENT.game.title}`,
      },
      { property: "og:description", content: SITE_CONTENT.media.sectionTitle },
    ],
  }),
  component: MediaPage,
});

function MediaPage() {
  return (
    <>
      <ParallaxBackdrop tint="cyan" />
      <section className="relative flex items-center justify-center px-6 pt-[180px] pb-[60px]">
        <PageTitle title={SITE_CONTENT.pages.media} />
      </section>
      <Media />
    </>
  );
}
