/**
 * CONTENT SWAP PROTOCOL
 * ─────────────────────
 * Single source of truth for all copy. Update values, not components.
 * The /chat AI agent serializes this entire object into its system prompt
 * on every request — edit lore here and the assistant updates instantly.
 */

export const SITE_CONTENT = {
  meta: {
    studioName: "VOIDBORN COLLECTIVE",
    studioFounded: "2026",
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
      { label: "Home", href: "/" },
      { label: "Background", href: "/background" },
      { label: "Gameplay", href: "/gameplay" },
      { label: "Lore", href: "/lore" },
      { label: "Characters", href: "/characters" },
      { label: "World", href: "/world" },
      { label: "Soundtrack", href: "/soundtrack" },
      { label: "Updates", href: "/updates" },
      { label: "About", href: "/about" },
    ],
    cta: { label: "CHAT", href: "/chat" },
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
        body: "Every enemy carries a fragment of dying star energy. The Void Absorption system pulls that energy directly into the Voidborn's core. At 25% capacity: your attacks leave temporal scorch marks. At 50%: you can briefly see 3 seconds into the future. At 75%: reality bends visibly around you. At 100%: Nova Collapse. The system never resets between epochs — carry your power across all 144 timelines.",
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
    lore: "THE LORE",
    universe: "THE UNIVERSE",
    media: "MEDIA",
    background: "THE BACKGROUND",
    gameplay: "THE GAMEPLAY",
    characters: "THE VOIDBORN",
    world: "THE WORLD",
    updates: "TRANSMISSIONS",
    soundtrack: "THE SCORE",
    about: "THE COLLECTIVE",
    chat: "VOID GUIDE",
  },

  background: {
    sectionLabel: "BEFORE THE COLLAPSE",
    sectionTitle: "A Universe Worth Saving",
    intro:
      "Ten billion years of light, song, and civilization. Then, in a single recorded second, the last star chose to die. What came before mattered. What comes next is up to you.",
    chapters: [
      {
        id: "bg-1",
        era: "PRE-COLLAPSE · 99,999,998 CE",
        title: "THE GOLDEN SILENCE",
        body: "Faster-than-light travel had been solved for two million years. Hunger was a museum exhibit. Death was optional in seventy-three civilizations. And yet, every species capable of measurement reported the same anomaly: the stars were going quiet, one constellation at a time.",
      },
      {
        id: "bg-2",
        era: "PRE-COLLAPSE · 99,999,999 CE",
        title: "THE LAST SIGNAL",
        body: "Vega Prime — the final stable star — transmitted a 4-second burst across every frequency known to sentient instrumentation. No one decoded it before the collapse. Some Voidborn claim to hear it inside their cores. None will say what it says.",
      },
      {
        id: "bg-3",
        era: "COLLAPSE · YEAR 0",
        title: "WHAT THE STAR CHOSE",
        body: "Vega Prime did not simply die. After 10 billion years of fusion it converted its final reserves into pure consciousness — and split that consciousness into twelve warriors. The Voidborn are not survivors. They are the will of a god, distributed.",
      },
      {
        id: "bg-4",
        era: "POST-COLLAPSE · YEAR 0.04",
        title: "THE FRACTURE",
        body: "Reality did not break uniformly. 144 timeline shards were left behind, each frozen mid-decay. Some shards span eons; one shard is six seconds long and has been replayed eleven million times. Causality is now a suggestion.",
      },
    ],
  },

  gameplay: {
    sectionLabel: "THE LOOP",
    sectionTitle: "Absorb. Weave. Advance.",
    intro:
      "Every system in VOIDBORN feeds one truth: the more dying energy you take in, the more reality bends around you. Push too far and you become the thing you were sent to stop.",
    pillars: [
      {
        id: "gp-1",
        index: "01",
        title: "VOID ABSORPTION",
        body: "Every kill, every fragment, every dying ember pulls into your Void Core. The Core never empties between epochs — your power is carried across all 144 timelines, irreversibly.",
        metrics: [
          ["CORE BANDWIDTH", "9 STRATA"],
          ["DECAY", "NONE"],
          ["TRANSFER RATE", "REAL-TIME"],
        ],
      },
      {
        id: "gp-2",
        index: "02",
        title: "NOVA COLLAPSE",
        body: "At 100% Core saturation: detonate. A 15-meter singularity rewrites every enemy's timeline within the blast. Costs everything you've gathered. Some players never trigger it. Some trigger it twice.",
        metrics: [
          ["RADIUS", "15 m"],
          ["WINDUP", "1.4 s"],
          ["COOLDOWN", "PER EPOCH"],
        ],
      },
      {
        id: "gp-3",
        index: "03",
        title: "EPOCH TRAVERSAL",
        body: "No checkpoints, no rescue. Enter the shard, find its dying core, absorb it, leave before the timeline folds in on you. The shard remembers everyone who failed it.",
        metrics: [
          ["EPOCHS", "144"],
          ["AVG. RUN", "12–47 m"],
          ["SAVE STATE", "NONE"],
        ],
      },
      {
        id: "gp-4",
        index: "04",
        title: "FUSION CONSTELLATIONS",
        body: "Four Voidborn. Four cores. When their signatures align mid-fight, abilities merge into compound attacks no single class can produce. The system rewards trust over reflex.",
        metrics: [
          ["PARTY SIZE", "4"],
          ["FUSIONS", "27 KNOWN"],
          ["ATTUNEMENT", "VOICE / GESTURE"],
        ],
      },
      {
        id: "gp-5",
        index: "05",
        title: "TIMELINE WEATHER",
        body: "Each epoch's dying sun warps physics in real time. Gravity slips. Light bends. The sky in Epoch 51 has been setting for 400 years, and combat happens in that orange. You learn to feel it.",
        metrics: [
          ["VARIANTS", "144"],
          ["EFFECT", "PHYSICS-LEVEL"],
          ["PREDICTABILITY", "LOW"],
        ],
      },
      {
        id: "gp-6",
        index: "06",
        title: "VOID ASCENSION",
        body: "After the story: infinite procedural epochs with rogue-lite progression. Enemy AI rewrites itself between runs. The longer you play, the more your void learns to hunt you.",
        metrics: [
          ["MODE", "ENDLESS"],
          ["DIFFICULTY", "ADAPTIVE"],
          ["UNLOCKS", "LORE DIMENSIONS"],
        ],
      },
    ],
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
          { name: "PLASMA GAUNTLETS", type: "PASSIVE", body: "Each melee strike absorbs 3% Void energy. No cooldown. Stacks indefinitely until released." },
          { name: "STELLAR SHIELD", type: "ACTIVE · 12s CD", body: "Convert 20% Void Core into an impenetrable barrier for 4s. Absorbed damage charges Nova Collapse faster." },
          { name: "NOVA COLLAPSE", type: "ULTIMATE", body: "Compress all absorbed Void energy into a singularity and detonate. 15m AOE devastation." },
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
          { name: "PHASE STEP", type: "PASSIVE", body: "Every third dodge briefly desyncs you from the current timeline. 0.3s invulnerability window." },
          { name: "TEMPORAL MARK", type: "ACTIVE · 8s CD", body: "Mark a target across timelines. Your next strike hits them at every moment they existed in the last 3 seconds." },
          { name: "EPOCH VANISH", type: "ULTIMATE", body: "Slip between timeline fractures, becoming invisible AND intangible for 8 seconds. Reappear anywhere within 50m." },
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
          { name: "SOLAR WEAVE", type: "PASSIVE", body: "Healing spells leave Plasma threads. Allies who cross them gain +15% damage for 4 seconds." },
          { name: "CHRONO WARD", type: "ACTIVE · 20s CD", body: "Place a 6m ward that rewinds any ally inside it 2 seconds when they take fatal damage." },
          { name: "STELLAR REBIRTH", type: "ULTIMATE", body: "Sacrifice 50% Void Core to resurrect all fallen allies and grant 10s invincibility. True power gives, not takes." },
        ],
        unlockStatus: "UNLOCKED AT LEVEL 25",
      },
    ],
  },

  // The full Voidborn roster surfaced on /characters
  voidborn: [
    { id: "01", name: "STARBREAKER", role: "TITAN", color: "#4fc3f7", line: "Crystallized supernova in twin gauntlets. Ends wars by closing them." },
    { id: "02", name: "CHRONOSLIP", role: "ASSASSIN", color: "#ce93d8", line: "Lives in the seam between two seconds. You only see the after-image." },
    { id: "03", name: "PLASMAWEAVE", role: "ARCANE", color: "#ffd54f", line: "Threads dying starlight into wards. The strongest die giving." },
    { id: "04", name: "ASHBINDER", role: "BERSERKER", color: "#ff5252", line: "Forged from a cinder that refused to cool. Every wound feeds the fire." },
    { id: "05", name: "HOLLOWBLADE", role: "DUELIST", color: "#b0bec5", line: "A sword that remembers every kill made with it across every timeline." },
    { id: "06", name: "LIGHTWEAVER", role: "HEALER", color: "#80deea", line: "Pulls photons from collapsed stars and stitches living tissue with them." },
    { id: "07", name: "GRAVEWARDEN", role: "TANK", color: "#7c4dff", line: "Anchors the Void with their own gravity. Cannot be moved. Will not move." },
    { id: "08", name: "NULLSONG", role: "BARD", color: "#ffab40", line: "Hums frequencies that unmake reality politely. Enemies forget they exist." },
    { id: "09", name: "EMBERKIN", role: "PYROMANCER", color: "#ff8a65", line: "A child of the last solar flare. Walks slower as the world burns faster." },
    { id: "10", name: "TIDECALLER", role: "ELEMENTALIST", color: "#4fc3f7", line: "Commands oceans that have not existed for two million years." },
    { id: "11", name: "VOIDWRIGHT", role: "ENGINEER", color: "#cfd8dc", line: "Builds weapons from broken physics. Refuses to write down the schematics." },
    { id: "12", name: "[REDACTED]", role: "THE THIRTEENTH", color: "#0d0d0d", line: "Twelve signatures were authorized. Thirteen were recorded. The Council does not acknowledge this." },
  ],

  stats: {
    sectionLabel: "THE SCALE OF THE VOID",
    items: [
      { id: "s1", value: 144, suffix: "", label: "FRACTURED EPOCHS", sub: "From the fall of Rome to the heat death of Neo Tokyo — every dying world, documented." },
      { id: "s2", value: 12, suffix: "", label: "VOIDBORN CLASSES", sub: "Each born from a different stellar phenomenon. No two share the same void signature." },
      { id: "s3", value: 800, suffix: "+", label: "HOURS OF CONTENT", sub: "Completionists have found lore fragments that took 847 hours to fully decode." },
      { id: "s4", value: null, suffix: "∞", label: "VOID ASCENSION RUNS", sub: "The procedural system seeds from your play history. No two players share the same void." },
    ],
  },

  media: {
    sectionLabel: "MEDIA",
    sectionTitle: "WITNESS THE VOID",
    disclaimer: "GAME FOOTAGE NOT FINAL — CONCEPT ART",
    trailer: { label: "CINEMATIC TRAILER", sub: "Reveal coming Q2 2026" },
    scenes: [
      { id: "singularity", name: "THE SINGULARITY — EPOCH 144", sector: "SINGULARITY", readout: { label: "VOID CORE", value: "MAXIMUM", danger: false } },
      { id: "abyssal", name: "ABYSSAL TRENCH — EPOCH 07", sector: "ABYSSAL SECTOR", readout: { label: "DEPTH", value: "4,200m", danger: false } },
      { id: "neocitadel", name: "NEO CITADEL — EPOCH 23", sector: "NEO CITADEL", readout: { label: "THREAT LEVEL", value: "CRITICAL", danger: true } },
      { id: "temple", name: "ANCIENT TEMPLE — EPOCH 51", sector: "ANCIENT SECTOR", readout: { label: "TIMELINE INTEGRITY", value: "12%", danger: false } },
      { id: "voidbreach", name: "VOID BREACH — EPOCH 99", sector: "VOID SECTOR", readout: { label: "REALITY COHERENCE", value: "3%", danger: true } },
    ],
  },

  world: {
    sectionLabel: "FRACTURED GEOGRAPHY",
    sectionTitle: "Where Time Is Still Dying",
    intro:
      "Six confirmed locations. One hundred and thirty-eight rumored. Each location is a moment of collapse held in amber, with weather, light, and physics frozen at the exact second the timeline broke.",
    locations: [
      { id: "abyssal", epoch: "EPOCH 07", name: "ABYSSAL TRENCH", climate: "BIOLUMINESCENT · 4°C", danger: "MODERATE", body: "An ocean that learned to breathe after its sun went out. Things still live down here. They have not forgiven the surface." },
      { id: "neocitadel", epoch: "EPOCH 23", name: "NEO CITADEL", climate: "NEON RAIN · 400 YR LOOP", danger: "CRITICAL", body: "A megacity caught in the second its grid went dark. Rain falls upward in three districts. The advertising still works." },
      { id: "temple", epoch: "EPOCH 51", name: "GOLDEN TEMPLE", climate: "ETERNAL SUNSET", danger: "LOW", body: "The sun has been setting for four hundred years. Worshippers still pray inside. They have stopped asking what for." },
      { id: "voidbreach", epoch: "EPOCH 99", name: "VOID BREACH", climate: "PHYSICS UNSTABLE", danger: "EXTREME", body: "Where the fracture is widest. Gravity changes direction every nineteen seconds. Most Voidborn refuse to be deployed here twice." },
      { id: "singularity", epoch: "EPOCH 144", name: "THE SINGULARITY", climate: "NONE", danger: "TERMINAL", body: "Six seconds long. Replayed eleven million times. The center of the Shattered Epoch. The Void Council has classified what is found here." },
      { id: "ember-march", epoch: "EPOCH 88", name: "EMBER MARCH", climate: "ASH FALL · CONSTANT", danger: "HIGH", body: "An empire that burned its own history to stay warm one more night. The fires never went out. Neither did the marching." },
    ],
  },

  updates: {
    sectionLabel: "TRANSMISSIONS",
    sectionTitle: "Signals From The Collective",
    intro: "Field notes from the Voidborn Collective. Updated when the universe permits.",
    entries: [
      { id: "u-001", tag: "DEVLOG · 001", date: "2026 · CYCLE 12", title: "First Light", body: "We pressed play on Vega Prime's death scene for the first time. The room went quiet. The score by [REDACTED] does what scores aren't supposed to do." },
      { id: "u-002", tag: "WORLD · 002", date: "2026 · CYCLE 14", title: "Epoch 23 Goes Online", body: "Neo Citadel's neon-rain shader passed certification. Performance held at 60fps with seven Voidborn on screen and Nova Collapse mid-detonation." },
      { id: "u-003", tag: "DESIGN · 003", date: "2026 · CYCLE 17", title: "Fusion Constellations", body: "Internal playtest produced a fusion no one designed. We are still arguing about whether to patch it out or canonize it." },
      { id: "u-004", tag: "CLASSIFIED · ???", date: "2026 · CYCLE ??", title: "[REDACTED]", body: "[ENCRYPTED PAYLOAD — DECRYPTION KEY HELD BY THE THIRTEENTH]" },
    ],
  },

  soundtrack: {
    sectionLabel: "THE SCORE",
    sectionTitle: "Sound, Recovered From Dead Stars",
    intro:
      "Each epoch carries its own frequency. The score is not background — it's an artifact recovered from the silence after the collapse.",
    tracks: [
      { id: "t-home", page: "/", title: "Vega Drift", composer: "VOIDBORN COLLECTIVE", duration: "—", note: "Plays on landing. The opening hum of a star choosing to die." },
      { id: "t-bg", page: "/background", title: "Before The Quiet", composer: "VOIDBORN COLLECTIVE", duration: "—", note: "The golden silence. Recorded one second before the collapse." },
      { id: "t-gp", page: "/gameplay", title: "Core Pull", composer: "VOIDBORN COLLECTIVE", duration: "—", note: "Built around the heartbeat of a saturated Void Core." },
      { id: "t-lore", page: "/lore", title: "Cycle Zero", composer: "VOIDBORN COLLECTIVE", duration: "—", note: "Twelve voices. One frequency. No words." },
      { id: "t-char", page: "/characters", title: "Twelve Signatures", composer: "VOIDBORN COLLECTIVE", duration: "—", note: "Each Voidborn has a tone. Played together once. Never again." },
      { id: "t-world", page: "/world", title: "Frozen Geography", composer: "VOIDBORN COLLECTIVE", duration: "—", note: "Field recordings from six dying epochs, layered." },
      { id: "t-updates", page: "/updates", title: "Static Order", composer: "VOIDBORN COLLECTIVE", duration: "—", note: "Telemetry, parsed as music." },
      { id: "t-about", page: "/about", title: "The Collective", composer: "VOIDBORN COLLECTIVE", duration: "—", note: "Four contributors, one signal." },
      { id: "t-chat", page: "/chat", title: "Open Channel", composer: "VOIDBORN COLLECTIVE", duration: "—", note: "For the moment you finally ask the Void a question." },
    ],
  },

  about: {
    sectionLabel: "THE COLLECTIVE",
    sectionTitle: "Four Voices, One Signal",
    intro:
      "VOIDBORN is built by a small collective of designers, writers, and engineers. We share one rule: every pixel and every line must feel inevitable.",
    team: [
      { id: "sasindu", initials: "SA", name: "Sasindu", role: "Lead Designer · Vision Keeper", bio: "Holds the shape of the project. Decides what gets cut, and why it had to." },
      { id: "yuthil", initials: "YU", name: "Yuthil", role: "Creative Director · Narrative Lead", bio: "Writes the universe. Knows what the thirteenth Voidborn is. Will not say." },
      { id: "risheli", initials: "RI", name: "Risheli", role: "Art Director · World Builder", bio: "Designs the way light dies in each epoch. Paints the silences." },
      { id: "anuga", initials: "AN", name: "Anuga", role: "Lead Developer · Void Engineer", bio: "Builds the systems that hold the universe together when no one is looking." },
    ],
  },

  chat: {
    intro: "Ask the Void anything about VOIDBORN: SHATTERED EPOCH.",
    placeholder: "What do you want to know?",
    suggestions: [
      "What is a Void Core?",
      "Who is the Thirteenth?",
      "How does co-op work?",
      "Tell me about Neo Citadel.",
    ],
  },

  footer: {
    line: "Not a commercial release",
    aboutLink: "About the team",
  },
};

export type SiteContent = typeof SITE_CONTENT;
