/**
 * CONTENT SWAP PROTOCOL
 * ─────────────────────
 * To replace ALL content on this site with a new game/product:
 * 1. Send ONE prompt to Lovable: "Replace the SITE_CONTENT object in
 *    src/config/content.ts with the following: [paste new object]"
 * 2. Do NOT touch any component files. Only content.ts changes.
 * 3. The UI system, animations, glassmorphism, layout, and design
 *    foundation are permanent and will auto-apply to new content.
 * 4. If new sections are needed, add them to SITE_CONTENT first,
 *    then prompt: "Add a new section using SITE_CONTENT.newSection"
 */

export const SITE_CONTENT = {
  meta: {
    madeBy: "Anuga Weerasinghe",
    studioName: "Anthropic Games",
    studioFounded: "2019",
    copyright: "2026",
  },

  game: {
    title: "VOIDBORN",
    subtitle: "SHATTERED EPOCH",
    tagline: "THE UNIVERSE IS DYING. YOU ARE ITS LAST WEAPON.",
    description:
      "Wield the energy of collapsing stars. Fight across fractured timelines. Stop the heat death of existence.",
    genre: "ACTION RPG · OPEN WORLD · CO-OP",
    rating: "PEGI 18",
    releaseYear: "2026",
    platforms: ["PC", "PS6", "Xbox Series X", "Cloud"],
    accentColorPrimary: "#4fc3f7",
    accentColorSecondary: "#ffd54f",
    accentColorTertiary: "#ce93d8",
  },

  nav: {
    links: ["Story", "Universe", "Classes", "Media", "Pre-Order"],
    cta: "PRE-ORDER NOW",
  },

  hero: {
    preTitle: "ANTHROPIC GAMES PRESENTS",
    primaryCta: "ENTER THE VOID",
    secondaryCta: "WATCH TRAILER ▶",
    scrollLabel: "SCROLL TO EXPLORE",
    availabilityLine: "AVAILABLE 2026 · PC · PS6 · XBOX SERIES X",
  },

  story: {
    sectionLabel: "THE STORY",
    sectionTitle: "FORGED FROM DYING STARS",
    beats: [
      {
        id: "beat-1",
        cycle: "CYCLE 0 — THE LAST STAR DIES",
        title: "THE COLLAPSE",
        body: "In the year 99,999,999 CE, Vega Prime — the last star in existence — began its final collapse. From its dying core, twelve warriors were born from pure stellar plasma. They are the Voidborn.",
      },
      {
        id: "beat-2",
        cycle: "CYCLE 1 — TIME BREAKS",
        title: "THE FRACTURE",
        body: "The death of Vega Prime shattered the space-time continuum into 144 fractured timeline shards. Each shard contains a dying echo of civilization — and an enemy that must be erased.",
      },
      {
        id: "beat-3",
        cycle: "CYCLE 2 — THE PROTOCOL",
        title: "YOUR MISSION",
        body: "Armed with Void Cores — crystallized star energy — the Voidborn must traverse each fractured epoch, absorb its dying energy, and weave time back together before entropy wins.",
      },
    ],
    cosmicPanelReadouts: [
      { label: "COORDINATES", value: "∅ 99.9M CE / TIMELINE-ALPHA" },
      { label: "VOID ENERGY", value: "██████████ 94.7%" },
      { label: "EPOCHS REMAINING", value: "144 / 144" },
      { label: "STATUS", value: "PROTOCOL ACTIVE" },
    ],
  },

  features: {
    sectionLabel: "WHAT AWAITS",
    sectionTitle: "FORGE YOUR LEGEND",
    sectionSubtitle: "Every choice echoes across time.",
    items: [
      {
        id: "feat-1",
        icon: "zap",
        color: "#4fc3f7",
        title: "VOID ABSORPTION",
        body: "Absorb the energy of every enemy you defeat. Each kill makes you cosmically more powerful. Cap your Void Core and trigger a universe-shattering Nova Burst.",
      },
      {
        id: "feat-2",
        icon: "clock",
        color: "#ffd54f",
        title: "144 FRACTURED EPOCHS",
        body: "Each timeline is a procedurally augmented world — medieval, cyberpunk, ancient, post-apocalyptic — all dying. Fight through corrupted history.",
      },
      {
        id: "feat-3",
        icon: "shield",
        color: "#ce93d8",
        title: "12 VOIDBORN CLASSES",
        body: "From Starbreaker to Chronoslip to Plasmaweave. Each class has 80 unique abilities. Mix and match across the Class Fusion system.",
      },
      {
        id: "feat-4",
        icon: "users",
        color: "#4fc3f7",
        title: "CO-OP VOID RAIDS",
        body: "4-player online co-op. Combine Void Cores to create Fusion Abilities only possible in multiplayer. Raid Epoch Bosses — colossal dying god-entities.",
      },
      {
        id: "feat-5",
        icon: "sun",
        color: "#ffab40",
        title: "DYNAMIC TIMELINE WEATHER",
        body: "Each epoch has a dying sun. As time erodes, the sky changes — sunsets last forever, gravity weakens, physics bends. It affects gameplay in real time.",
      },
      {
        id: "feat-6",
        icon: "infinity",
        color: "#ff5252",
        title: "ENDLESS ENDGAME",
        body: "After the story: Void Ascension mode — infinite procedural epochs with rogue-lite progression. New Game+ multiplies enemy intelligence and unlocks lore dimensions.",
      },
    ],
  },

  classes: {
    sectionLabel: "THE VOIDBORN",
    sectionTitle: "CHOOSE YOUR FORM",
    items: [
      {
        id: "starbreaker",
        classNumber: "01",
        name: "STARBREAKER",
        archetype: "⚔ TITAN — OFFENSE / DEFENSE",
        colorAccent: "#4fc3f7",
        lore: "Born from the heart of Vega Prime's final supernova, Starbreakers carry its explosive fury in crystallized plasma gauntlets. They don't fight wars — they end them.",
        stats: { STR: 80, VIT: 90, AGI: 40, ARCANE: 20, VOID: 80 },
        ability: {
          name: "NOVA COLLAPSE",
          color: "#ff5252",
          description:
            "Compress all absorbed Void energy into a singularity and detonate. 15m AOE devastation.",
        },
        unlockStatus: "UNLOCKED FROM START",
      },
      {
        id: "chronoslip",
        classNumber: "02",
        name: "CHRONOSLIP",
        archetype: "🗡 ASSASSIN — STEALTH / TIME",
        colorAccent: "#ce93d8",
        lore: "Chronoslips exist in the spaces between moments. They slip through timeline fractures like ghosts, striking before reality remembers they were there.",
        stats: { STR: 40, VIT: 30, AGI: 95, ARCANE: 60, VOID: 80 },
        ability: {
          name: "EPOCH VANISH",
          color: "#ce93d8",
          description:
            "Slip between timeline fractures, becoming invisible AND intangible for 8 seconds. Reappear anywhere within 50m.",
        },
        unlockStatus: "UNLOCKED AT LEVEL 10",
      },
      {
        id: "plasmaweave",
        classNumber: "03",
        name: "PLASMAWEAVE",
        archetype: "✦ ARCANE — MAGE / SUPPORT",
        colorAccent: "#ffd54f",
        lore: "Plasmaweave wielders channel raw stellar plasma into cosmic spells and temporal wards. The most powerful die giving, not taking.",
        stats: { STR: 20, VIT: 50, AGI: 50, ARCANE: 95, VOID: 85 },
        ability: {
          name: "STELLAR REBIRTH",
          color: "#ffd54f",
          description:
            "Sacrifice 50% Void Core to resurrect all fallen allies and grant 10s invincibility. True power gives, not takes.",
        },
        unlockStatus: "UNLOCKED AT LEVEL 25",
      },
    ],
  },

  stats: {
    sectionLabel: "THE SCALE OF THE VOID",
    items: [
      { id: "s1", value: 144, suffix: "", label: "FRACTURED EPOCHS" },
      { id: "s2", value: 12, suffix: "", label: "VOIDBORN CLASSES" },
      { id: "s3", value: 800, suffix: "+", label: "HOURS OF CONTENT" },
      { id: "s4", value: null, suffix: "∞", label: "VOID ASCENSION RUNS" },
    ],
  },

  media: {
    sectionLabel: "MEDIA",
    sectionTitle: "WITNESS THE VOID",
    screenshots: [
      {
        id: "ss1",
        name: "ABYSSAL TRENCH — EPOCH 07",
        gradient:
          "radial-gradient(ellipse at 30% 60%, #001a33 0%, #000509 60%, #0a001a 100%)",
      },
      {
        id: "ss2",
        name: "NEO CITADEL — EPOCH 23",
        gradient:
          "radial-gradient(ellipse at 70% 40%, #1a0500 0%, #050005 50%, #001505 100%)",
      },
      {
        id: "ss3",
        name: "GOLDEN TEMPLE — EPOCH 51",
        gradient:
          "radial-gradient(ellipse at 50% 80%, #1a0e00 0%, #080500 60%, #050008 100%)",
      },
      {
        id: "ss4",
        name: "VOID BREACH — EPOCH 99",
        gradient:
          "radial-gradient(ellipse at 20% 20%, #0d001a 0%, #050508 50%, #00101a 100%)",
      },
      {
        id: "ss5",
        name: "THE SINGULARITY — EPOCH 144",
        gradient:
          "radial-gradient(ellipse at 50% 50%, #0a0014 0%, #050508 40%, #00050a 100%)",
      },
    ],
    trailer: {
      label: "OFFICIAL GAMEPLAY REVEAL",
      duration: "14:32",
    },
  },

  editions: {
    sectionLabel: "SECURE YOUR VOID CORE",
    sectionSubtitle: "Launch Day 2026 — Pre-order Bonuses Expire Soon",
    items: [
      {
        id: "standard",
        name: "STANDARD EDITION",
        price: "$59.99",
        accentColor: "#4fc3f7",
        featured: false,
        ribbon: null as string | null,
        features: [
          "Full Base Game",
          "Day-1 Void Core Armor Set",
          "Digital Soundtrack",
        ],
        cta: "PRE-ORDER NOW",
      },
      {
        id: "legend",
        name: "VOID LEGEND EDITION",
        price: "$89.99",
        accentColor: "#ffd54f",
        featured: true,
        ribbon: "BEST VALUE" as string | null,
        features: [
          "Everything in Standard",
          "Chronoslip Class — 2 Weeks Early Access",
          "3 Exclusive Epoch Weapons",
          "Avatar Frame: Void Sovereign",
          "Season Pass Year 1",
          "Digital Art Book (280 pages)",
          "Composer's Commentary",
        ],
        cta: "PRE-ORDER NOW",
      },
      {
        id: "ultimate",
        name: "VOIDBORN ULTIMATE",
        price: "$129.99",
        accentColor: "#ce93d8",
        featured: false,
        ribbon: null as string | null,
        features: [
          "Everything in Void Legend",
          "Physical Collector's Box",
          "Void Core Resin Replica",
          "Printed Timeline Map",
          'Starbreaker Figurine (12")',
          "Founder's Badge (permanent in-game)",
          "Lifetime Season Pass",
          "Name in Game Credits",
        ],
        cta: "PRE-ORDER NOW",
      },
    ],
    platformBadges: ["PC", "PlayStation 6", "Xbox Series X", "Cloud"],
    finePrint:
      "Pre-order bonuses delivered at launch. Physical editions ship within 2 weeks of release date.",
  },

  community: {
    sectionTitle: "JOIN THE VOIDBORN ORDER",
    sectionSubtitle:
      "Be first to receive lore drops, class reveals, and exclusive beta access keys.",
    inputPlaceholder: "your.email@domain.com",
    ctaLabel: "ENTER THE VOID",
    successMessage: "✓ YOU ARE VOIDBORN. CHECK YOUR INBOX.",
    enlistedCount: 147293,
    enlistedLabel: "VOIDBORN HAVE ENLISTED",
    socialLinks: ["twitter", "discord", "youtube", "tiktok", "reddit"],
  },

  footer: {
    tagline: "The last epic. The final war. The void calls.",
    legalLinks: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
    platformLinks: ["PC System Requirements", "Console Specs", "Accessibility"],
    madeBy: "Made by Anuga Weerasinghe",
  },
};

export type SiteContent = typeof SITE_CONTENT;
