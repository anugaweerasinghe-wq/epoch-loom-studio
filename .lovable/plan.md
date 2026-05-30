
# Phase 2 + Phase 3 + Visual Upgrade

Three things in one build. Home and Characters pages are NOT touched (already strong).

---

## Phase 2 — Live `/chat` agent

**Backend**
- Ensure `LOVABLE_API_KEY` via `ai_gateway--create`.
- Add `bun add ai @ai-sdk/openai-compatible` (AI SDK + OpenAI-compatible adapter).
- Create `src/lib/lovable-gateway.server.ts` with the canonical gateway helper (provider + run-id forwarding).
- Create server route `src/routes/api/chat.ts` (TanStack server route, POST):
  - Reads `SITE_CONTENT` from `src/config/content.ts` and serializes it into the system prompt → auto-learns every time content is edited.
  - Hard guardrail: only answers questions about VOIDBORN; politely deflects unrelated queries.
  - Model: `google/gemini-3-flash-preview`, `streamText` → `toUIMessageStreamResponse` wrapped with `withLovableAiGatewayRunIdHeader`.

**Frontend (`src/routes/chat.tsx`)**
- Install AI Elements via `bunx ai-elements@latest add conversation message prompt-input shimmer`.
- Replace placeholder with full chat surface:
  - `Conversation` / `ConversationContent` / `ConversationScrollButton`
  - `Message` + `MessageContent` + `MessageResponse` (markdown streaming)
  - `PromptInput` + `PromptInputTextarea` + `PromptInputFooter` + `PromptInputSubmit` (icon-sm)
  - `Shimmer` text "Consulting the Archive…" while streaming
- One conversation per browser, localStorage-persisted `UIMessage[]` (matches Phase 1 plan; no thread sidebar).
- Custom empty state with a VOIDBORN sigil mark (not Sparkles) + 3 suggested-prompt chips ("What is the Thirteenth?", "Explain the Shattered Epoch", "Who built this game?").
- Subtle cyan pulse dot already wired in navbar — no nav changes needed.

---

## Phase 3 — Global ambient soundtrack

- Create `src/contexts/AudioContext.tsx` with a single `<audio>` element mounted in `__root.tsx`.
- Per-route track map in `src/config/content.ts → soundtrack.tracks` (Pixabay CDN MP3 URLs for `/`, `/gameplay`, `/lore`, `/background`, `/world`, `/chat`; reuses for the rest).
- Behavior:
  - Mounts muted on first load (browser autoplay policy safe).
  - First user gesture anywhere → reveals a one-time "🎵 Enable Ambient Audio" toast (bottom-right, cyan border).
  - Fixed bottom-right collapsible mini-player: play/pause, volume slider, track name. Glass styling.
  - Route change → 600ms crossfade (two `<audio>` elements ping-pong, fade via `gain`-style volume tween, not Web Audio).
  - `preload="none"` for non-active tracks; lazy-loads on activation.

---

## Visual upgrade pass (NOT Home, NOT Characters)

Goal: cinematic depth without perf regression. Reuse existing scene components and motion primitives — no new heavy deps.

**Shared additions**
- New `src/components/visuals/ParallaxBackdrop.tsx`: layered SVG starfield + slow drifting nebula gradient, `useSectionParallax` driven, `will-change: transform`, `translateZ(0)`. Single instance per page, opacity ≤ 0.35.
- New `src/components/visuals/GlassPanel.tsx`: shared border-glow + cyan-edge variant of `.glass` for hero/feature cards.
- New `src/components/visuals/FloatingShards.tsx`: 6–10 rotating SVG shards, GPU-only, scoped per section.
- New `src/components/visuals/SectionDivider.tsx`: animated cyan hairline that scales in on scroll.

**Per-page**

| Page | Additions |
|---|---|
| `/background` | Page-wide `ParallaxBackdrop`. Each chapter card gets a era-themed scene preview (reuse `VoidBreach`, `TheSingularity`, `GoldenTemple`, `NeoCitadel` from `media/scenes`) at 240px height, glass overlay caption. Vertical timeline rail with pulsing cyan nodes between chapters. |
| `/gameplay` | Hero strip with `NeoCitadel` scene as backdrop + glass HUD overlay. Feature blocks alternate left/right with mouse-parallax tilt (≤ 6°) on `lg+`. Animated stat counters with cyan underline reveal. |
| `/lore` | `ParallaxBackdrop` (purple-tinted). Chapter cards on a vertical glowing rift line. `FloatingShards` drifting behind text. |
| `/world` | Each location card uses one of the scene components as cover image with `SceneHUD` always-on. Grid uses `bento-grid` density (2-2-1-1-2). Hover = scale 1.02 + cyan border. |
| `/updates` | Add a left-side timeline rail (vertical cyan line + node per entry). Background `ParallaxBackdrop`. Each card gets a top-right scene thumbnail (32px circular) for visual rhythm. |
| `/soundtrack` | Equalizer-bar SVG animation pulsing per track. Cover-art generated via radial gradients per track. Now-playing glass card centered, ambient blur halo. |
| `/about` | Team grid: avatar tiles get cyan ring on hover, role badge in mono-ui. Background = subtle `ParallaxBackdrop`. Add a "The Collective" hero strip with `FloatingShards`. |
| `/media` | Already has scenes; add page-wide `ParallaxBackdrop` + scene-to-scene transition fade via `AnimatePresence`. |
| `/chat` | Ambient `ParallaxBackdrop` (low opacity 0.15). Glass chat surface with cyan edge glow on focus. |

**Perf budget**
- Max 1 `ParallaxBackdrop` per page.
- Max 2 `backdrop-filter` layers stacked anywhere.
- All loops `transform`/`opacity` only, GPU composited.
- `prefers-reduced-motion` disables parallax + drift loops (already honored by `useSectionParallax`).

---

## Technical details

- Stack: TanStack Start + TanStack Router, AI SDK via Lovable Gateway, framer-motion (already installed).
- New deps: `ai`, `@ai-sdk/openai-compatible`. AI Elements installed via CLI (no manual dep).
- Files created: ~15 (1 server route, 1 gateway helper, 1 audio context, 4 visual components, AI Elements components, plus per-page visual integrations).
- Files edited: `__root.tsx` (audio mount), `chat.tsx`, `content.ts` (soundtrack map + per-page scene refs), 7 route files for visual integration.
- NOT touched: `routes/index.tsx`, `routes/characters.tsx`, `components/sections/Hero.tsx`, `components/sections/WorldPillars.tsx`, `components/media/scenes/*`.

## Out of scope
- Backend persistence of chat history (localStorage only).
- Real licensed music (Pixabay URLs; user swaps later).
- New scene components (reuse the 5 existing ones).
- 3D / WebGL.

Reply **"go"** to execute all three in one build.
