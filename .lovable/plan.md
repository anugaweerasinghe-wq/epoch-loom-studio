# VOIDBORN — Premium Overhaul (Phased)

Accent locked: **Plasma Cyan #4fc3f7**. Chatbot lives on `/chat` with a subtle nav entry + tiny pulse dot. Audio uses Pixabay CDN URLs with safe fallbacks. Delivered in three phases so each one can be QA'd before the next lands.

---

## Phase 1 — Architecture, Navigation, Content, About

**Routing (TanStack file-based; project already uses TanStack, not React Router DOM — I'll keep the existing router and add files):**

```
src/routes/
  index.tsx          (Home — keep current hero + pillars, light polish)
  background.tsx     (NEW — origin of the Voidborn, pre-collapse history)
  gameplay.tsx       (NEW — core loops, Void Absorption, Nova Collapse)
  lore.tsx           (rename/repoint from /story — keep timeline beats)
  characters.tsx     (expand /universe Classes to all 12 Voidborn)
  world.tsx          (NEW — locations: Abyssal Trench, Neo Citadel, Golden Temple, Void Breach, Singularity, +others)
  updates.tsx        (NEW — simple changelog/news feed, 4–5 entries)
  soundtrack.tsx     (NEW — track list + lore per track, ties to global player)
  about.tsx          (NEW — 4-person team grid)
  chat.tsx           (NEW — placeholder shell in Phase 1, wired in Phase 2)
  media.tsx          (KEEP)
```

- `/story` redirects to `/lore`, `/universe` redirects to `/characters` (zero broken links).
- Sticky `Navbar.tsx` rebuilt: logo · Home · Background · Gameplay · Lore · Characters · World · Soundtrack · Updates · About · **Chat (• pulse dot)**. Collapses to hamburger sheet < lg. Existing reactive blur/opacity preserved.
- All existing parallax, scroll-reveals, blur-in text, page-transition `AnimatePresence` — untouched.

**Content expansion (cinematic placeholders, no Lorem):**
- Extend `src/config/content.ts` with `background`, `gameplay`, `world`, `updates`, `soundtrack`, `about`, `characters12` keys.
- 12 Voidborn classes fleshed out (Starbreaker, Chronoslip, Plasmaweave, Ashbinder, Hollowblade, Lightweaver, Gravewarden, Nullsong, Emberkin, Tidecaller, Voidwright, **The Thirteenth — [REDACTED]**).
- 6–8 World locations with sector readouts in the same tone as existing Media scenes.

**About page:** 4 glass cards (Sasindu, Yuthil, Risheli, Anuga) with role, one-line bio, monogram avatar (CSS), hover lift. Replaces every "made by" string. Footer becomes: `"Not a commercial release · About the team →"`.

**Visual polish (no regressions):**
- Confirm single accent = `--plasma-cyan` (logo, active nav, pulse dot, one hover state per surface).
- Button hover: scale 1.02 + subtle cyan ring glow (400ms, GPU-only).
- Card tilt: mouse-parallax 3D tilt ≤ 6° on `lg+` only, via existing `useMouseParallax` hook, opt-in per card.
- Tighten spacing to `py-32` rhythm, audit blur layers to ≤ 2 stacked.

## Phase 2 — AI Chatbot (`/chat`)

- Full-page chat UI built with **AI Elements** (`conversation`, `message`, `prompt-input`, `shimmer`) — assistant messages no background, user bubble cyan-on-near-black, textarea auto-focused.
- Server route: `src/routes/api/chat.ts` using `streamText` + Lovable AI Gateway, model `google/gemini-3-flash-preview`.
- **Auto-learning context**: on each request, server reads `src/config/content.ts` (the single source of truth) and serializes the whole `SITE_CONTENT` object into the system prompt. When you edit lore tomorrow, the bot updates automatically — no reindex, no embeddings.
- System prompt enforces:
  - Persona: "charismatic in-universe Void guide".
  - 1–3 sentences max, bullets/emojis sparingly.
  - **Hard guardrail**: only answers about VOIDBORN: SHATTERED EPOCH; off-topic → polite refusal in-character.
- localStorage transcript only (no DB, matches "free + built-in"). New-chat button clears it.
- Subtle pulse-dot nav entry as picked.

## Phase 3 — Global Soundtrack

- `AudioProvider` (React context) mounted in `__root.tsx`, owns single `<audio>` element, survives page transitions.
- Per-route track map keyed by pathname, defined in `content.ts`. Phase-3 ships with Pixabay CDN URLs for Home + Gameplay + Lore + Chat + a generic fallback for the rest; remaining pages use the fallback until you swap URLs.
- Fixed-bottom-right collapsible player: play/pause, track title, volume slider, mute. Glass surface, cyan accent on active.
- Autoplay rules: muted on first load; first user interaction anywhere unlocks a "🎵 Enable Music" prompt that fades in once. On route change: crossfade 600ms (volume ramp, no new audio element churn).
- Lazy: `preload="none"`, load on first play; abort previous fetch on fast nav.

---

## Technical Notes (for the dev, not the user)

- Stack is **TanStack Start + TanStack Router**, not React Router DOM. The user's request says "React Router" — I'll honor the intent (client-side `<Link>` nav, no full reloads) using the existing TanStack `<Link>`. No router swap.
- No new heavy deps. Adds: `ai-elements` primitives (Phase 2 only). Audio = native `HTMLAudioElement`.
- Lovable AI Gateway key (`LOVABLE_API_KEY`) — will provision in Phase 2 if not already present.
- No mock spinners, no third-party logos, no "made by" strings anywhere post-Phase-1.
- Existing motion system in `src/lib/motion.ts`, `useSectionParallax`, `useMouseParallax`, page-transition blur in `__root.tsx` — all preserved verbatim.

**Out of scope:** rewriting the existing Hero/WorldPillars/Media scenes, backend persistence for chat, real audio files (using Pixabay URLs + you swap later), 12 unique class SVGs (reuse existing silhouette with color tint per class).

---

Approve and I'll start Phase 1.