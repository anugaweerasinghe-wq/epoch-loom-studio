import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Story } from "@/components/sections/Story";
import { Features } from "@/components/sections/Features";
import { Classes } from "@/components/sections/Classes";
import { Stats } from "@/components/sections/Stats";
import { Media } from "@/components/sections/Media";
import { Editions } from "@/components/sections/Editions";
import { Community } from "@/components/sections/Community";
import { Footer } from "@/components/sections/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { SITE_CONTENT } from "@/config/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: `${SITE_CONTENT.game.title}: ${SITE_CONTENT.game.subtitle} — Official Site`,
      },
      { name: "description", content: SITE_CONTENT.game.description },
      {
        property: "og:title",
        content: `${SITE_CONTENT.game.title}: ${SITE_CONTENT.game.subtitle}`,
      },
      { property: "og:description", content: SITE_CONTENT.game.tagline },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <CustomCursor />
      <Navbar />
      <Hero />
      <Story />
      <Features />
      <Classes />
      <Stats />
      <Media />
      <Editions />
      <Community />
      <Footer />
    </main>
  );
}
