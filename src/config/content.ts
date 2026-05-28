/**
 * CONTENT SWAP PROTOCOL
 * ─────────────────────
 * Single source of truth for all copy. Update values, not components.
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
    tagline: "The universe is dying. You are its last weapon.",
    description:
      "Wield the energy of collapsing stars. Fight across fractured timelines. Stop the heat death of existence.",
    genre: "ACTION RPG · OPEN WORLD · CO-OP",
    rating: "PEGI 18",
    accentColorPrimary: "#4fc3f7",
    accentColorSecondary: "#ffd54f",
    accentColorTertiary: "#ce93d8",
  },

  nav: {
    links: [
      { label: "Story", href: "/story" },
      { label: "Universe", href: "/universe" },
      { label: "Media", href: "/media" },
    ],
    cta: { label: "EXPLORE", href: "/story" },
  },

  hero: {
    primaryCta: "EXPLORE THE WORLD",
    scrollLabel: "SCROLL",
  },

  home: {
    teaserWords: ["WIELD.", "FRACTURE.", "SURVIVE."],
    teaserLink: "Discover the world",
    pillars: [
      {
        id: "epochs",
        label: "WORLD DESIGN",
        title: "144 Dying Worlds",
        body: "Every epoch is a civilization at the exact moment of its collapse. Medieval kingdoms drowning in void energy. Cyberpunk megacities where time runs backward. Ancient empires watching their gods turn to ash. No two epochs share the same laws of physics — gravity, time, light behave differently in each. The Voidborn must adapt or be consumed by entropy.",
        tags: ["PROCEDURAL AUGMENTATION", "DYNAMIC PHYSICS ENGINE", "144 UNIQUE ENVIRONMENTS"],
        scene: "abyssal",
        align: "left" as const,
      },
      {
        id: "void-core",
        label: "CORE MECHANIC",
        title: "Your Power is Their Death",
        body: "Every enemy carries a fragment of dying star energy. The Void Absorption system pulls that energy directly into the Voidborn's core. At 25% capacity: your attacks leave temporal scorch marks that damage enemies who walk through them. At 50%: you can briefly see 3 seconds into the future. At 75%: reality bends visibly around you. At 100%: Nova Collapse. The system never resets between epochs — carry your power across all 144 timelines.",
        tags: ["PERSISTENT PROGRESSION", "REAL-TIME VISUAL FEEDBACK", "CROSS-EPOCH CARRY"],
        scene: "neocitadel",
        align: "right" as const,
      },
      {
        id: "coop",
        label: "MULTIPLAYER",
        title: "The Void Doesn't Care if You're Alone",
        body: "Epoch Bosses — colossal dying god-entities the size of cities — cannot be fought solo. Each requires 4 Voidborn with complementary core energies to form a Fusion Constellation. A Starbreaker's raw force, a Chronoslip's temporal positioning, a Plasmaweave's arcane amplification — and a fourth class not yet revealed. When cores align: abilities merge into attacks that rewrite the boss's timeline entirely.",
        tags: ["4-PLAYER CO-OP", "FUSION CONSTELLATION SYSTEM", "EPOCH BOSS RAIDS"],
        scene: "temple",
        align: "left" as const,
      },
    ],
  },

  pages: {
    story: "THE STORY",
    universe: "THE UNIVERSE",
    media: "MEDIA",
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
        extended:
          "What the scientists didn't understand: Vega Prime didn't simply die. It chose to. After 10 billion years of fusion, it converted its final reserves into consciousness — and split that consciousness into twelve warriors. Each Voidborn carries a shard of a dying god's will.",
        data: [
          ["EVENT DATE", "99,999,999 CE"],
          ["LOCATION", "Vega Prime · Outer Helix Arm"],
          ["SURVIVORS", "12 Voidborn"],
          ["CAUSE", "[CLASSIFIED — VOID PROTOCOL ALPHA]"],
        ],
      },
      {
        id: "beat-2",
        cycle: "CYCLE 1 — TIME BREAKS",
        title: "THE FRACTURE",
        body: "The death of Vega Prime shattered the space-time continuum into 144 fractured timeline shards. Each shard contains a dying echo of civilization — and an enemy that must be erased.",
        extended:
          "Reality did not break uniformly. Some shards exist seconds apart, some span eons. In Epoch 23, neon rain has fallen for 400 years. In Epoch 51, the sun is still setting from the day it stopped moving. Causality itself is a suggestion in the Shattered Epoch.",
        data: [
          ["EPOCH COUNT", "144 / ∞"],
          ["TIMELINE DRIFT", "+0.04% per cycle"],
          ["LARGEST SHARD", "EPOCH 99 · VOID BREACH"],
          ["SMALLEST SHARD", "EPOCH 144 · 6 SECONDS"],
        ],
      },
      {
        id: "beat-3",
        cycle: "CYCLE 2 — THE PROTOCOL",
        title: "YOUR MISSION",
        body: "Armed with Void Cores — crystallized star energy — the Voidborn must traverse each fractured epoch, absorb its dying energy, and weave time back together before entropy wins.",
        extended:
          "The Void Protocol is simple in design and impossible in execution: enter each epoch, find the dying core at its center, absorb it, and leave before the timeline collapses around you. There are no checkpoints. There is no rescue. There is only the next epoch.",
        data: [
          ["DIRECTIVE", "ABSORB · WEAVE · ADVANCE"],
          ["FAILURE STATE", "TOTAL ENTROPY"],
          ["ESTIMATED RUNTIME", "847 HOURS"],
          ["COMPLETION RATE", "0.00%"],
        ],
      },
      {
        id: "beat-4",
        cycle: "CYCLE ? — CLASSIFIED",
        title: "THE THIRTEENTH",
        body: "Twelve Voidborn were confirmed. Void Protocol records show thirteen energy signatures at the moment of Vega Prime's collapse. The thirteenth Voidborn has never been identified. Some fractured timeline echoes suggest they aren't fighting to save the universe. They're the reason it's dying.",
        extended:
          "No name. No archetype. No Class. Sightings persist across multiple epochs, but no two reports agree on what was seen — only that the sky bent inward where they passed. The Voidborn Council does not acknowledge the thirteenth.",
        data: [
          ["STATUS", "UNKNOWN"],
          ["CLASS", "UNCLASSIFIED"],
          ["LAST SIGNATURE", "EPOCH 73"],
          ["THREAT LEVEL", "EXISTENTIAL"],
        ],
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
        abilities: [
          {
            name: "PLASMA GAUNTLETS",
            type: "PASSIVE",
            body: "Each melee strike absorbs 3% Void energy. No cooldown. Stacks indefinitely until released.",
          },
          {
            name: "STELLAR SHIELD",
            type: "ACTIVE · 12s CD",
            body: "Convert 20% Void Core into an impenetrable barrier for 4s. Absorbed damage charges Nova Collapse faster.",
          },
          {
            name: "NOVA COLLAPSE",
            type: "ULTIMATE",
            body: "Compress all absorbed Void energy into a singularity and detonate. 15m AOE devastation.",
          },
        ],
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
        abilities: [
          {
            name: "PHASE STEP",
            type: "PASSIVE",
            body: "Every third dodge briefly desyncs you from the current timeline. 0.3s invulnerability window.",
          },
          {
            name: "TEMPORAL MARK",
            type: "ACTIVE · 8s CD",
            body: "Mark a target across timelines. Your next strike hits them at every moment they existed in the last 3 seconds.",
          },
          {
            name: "EPOCH VANISH",
            type: "ULTIMATE",
            body: "Slip between timeline fractures, becoming invisible AND intangible for 8 seconds. Reappear anywhere within 50m.",
          },
        ],
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
        abilities: [
          {
            name: "SOLAR WEAVE",
            type: "PASSIVE",
            body: "Healing spells leave Plasma threads. Allies who cross them gain +15% damage for 4 seconds.",
          },
          {
            name: "CHRONO WARD",
            type: "ACTIVE · 20s CD",
            body: "Place a 6m ward that rewinds any ally inside it 2 seconds when they take fatal damage.",
          },
          {
            name: "STELLAR REBIRTH",
            type: "ULTIMATE",
            body: "Sacrifice 50% Void Core to resurrect all fallen allies and grant 10s invincibility. True power gives, not takes.",
          },
        ],
        unlockStatus: "UNLOCKED AT LEVEL 25",
      },
    ],
  },

  stats: {
    sectionLabel: "THE SCALE OF THE VOID",
    items: [
      {
        id: "s1",
        value: 144,
        suffix: "",
        label: "FRACTURED EPOCHS",
        sub: "From the fall of Rome to the heat death of Neo Tokyo — every dying world, documented.",
      },
      {
        id: "s2",
        value: 12,
        suffix: "",
        label: "VOIDBORN CLASSES",
        sub: "Each born from a different stellar phenomenon. No two share the same void signature.",
      },
      {
        id: "s3",
        value: 800,
        suffix: "+",
        label: "HOURS OF CONTENT",
        sub: "Completionists have found lore fragments that took 847 hours to fully decode.",
      },
      {
        id: "s4",
        value: null,
        suffix: "∞",
        label: "VOID ASCENSION RUNS",
        sub: "The procedural system seeds from your play history. No two players share the same void.",
      },
    ],
  },

  media: {
    sectionLabel: "MEDIA",
    sectionTitle: "WITNESS THE VOID",
    disclaimer: "GAME FOOTAGE NOT FINAL — CONCEPT ART",
    trailer: {
      label: "CINEMATIC TRAILER",
      sub: "Reveal coming Q2 2026",
    },
    scenes: [
      { id: "singularity", name: "THE SINGULARITY — EPOCH 144", sector: "SINGULARITY", readout: { label: "VOID CORE", value: "MAXIMUM", danger: false } },
      { id: "abyssal", name: "ABYSSAL TRENCH — EPOCH 07", sector: "ABYSSAL SECTOR", readout: { label: "DEPTH", value: "4,200m", danger: false } },
      { id: "neocitadel", name: "NEO CITADEL — EPOCH 23", sector: "NEO CITADEL", readout: { label: "THREAT LEVEL", value: "CRITICAL", danger: true } },
      { id: "temple", name: "ANCIENT TEMPLE — EPOCH 51", sector: "ANCIENT SECTOR", readout: { label: "TIMELINE INTEGRITY", value: "12%", danger: false } },
      { id: "voidbreach", name: "VOID BREACH — EPOCH 99", sector: "VOID SECTOR", readout: { label: "REALITY COHERENCE", value: "3%", danger: true } },
    ],
  },

  footer: {
    madeBy: "Made by Anuga Weerasinghe",
    disclaimer: "A game concept by Anthropic Games · Not a commercial release",
  },
};

export type SiteContent = typeof SITE_CONTENT;
