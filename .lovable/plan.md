# VOIDBORN: Shattered Epoch — Cinematic Marketing Site

A single-page, AAA-quality marketing site driven entirely by a swappable `SITE_CONTENT` config. The visual system, animations, and layout are permanent; content lives in one file.

## Architecture

- **Single source of truth:** `src/config/content.ts` exports `SITE_CONTENT`. Every string, number, color, and list in JSX reads from it.
- **Routing:** Single page at `/` (TanStack Start). All sections in `src/routes/index.tsx`, composed from section components in `src/components/sections/`.
- **Stack:** React + TypeScript + Tailwind v4 + Framer Motion + lucide-react. Fonts (Rajdhani, Space Mono, Inter) loaded via Google Fonts link in `__root.tsx` head.

## Files to create

```
src/config/content.ts                  — SITE_CONTENT object + swap protocol comment
src/styles.css                         — add color tokens, .glass/.glow utilities, scrollbar, smooth-scroll
src/hooks/useCountUp.ts                — viewport-triggered counter
src/hooks/useMouseParallax.ts          — RAF-lerped mouse position
src/components/CustomCursor.tsx        — 8px dot + 32px lag ring (desktop only)
src/components/Navbar.tsx
src/components/sections/Hero.tsx       — layered star field, orbs, grid floor, SVG warrior, animated title
src/components/sections/Story.tsx      — timeline beats + cosmic SVG panel
src/components/sections/Features.tsx   — 6-card grid with lucide icons
src/components/sections/Classes.tsx    — tabbed class viewer + animated stat bars
src/components/sections/Stats.tsx      — 4 count-up cards
src/components/sections/Media.tsx      — screenshot masonry + trailer card
src/components/sections/Editions.tsx   — 3 pricing tiers, featured raised
src/components/sections/Community.tsx  — email signup + live enlisted counter
src/components/sections/Footer.tsx
src/components/svg/WarriorSilhouette.tsx
src/components/svg/CosmicPanel.tsx
src/components/svg/ClassSilhouette.tsx
src/routes/index.tsx                   — composes all sections, mounts CustomCursor
src/routes/__root.tsx                  — add Google Fonts links in head()
```

## Design system (permanent)

Color tokens added to `src/styles.css` `:root` per spec (`--void-black`, `--plasma-blue`, `--nova-gold`, `--stellar-purple`, etc.). Utility classes `.glass`, `.glass-strong`, `.glow-text-blue/gold`, `.glow-border-blue/gold`. Custom scrollbar. `html { scroll-behavior: smooth }`. Typography scale per spec (Rajdhani headings, Space Mono labels, Inter body).

## Section build order

1. Navbar (fixed, glass, scroll-reactive blur, pulsing CTA, mobile slide-down)
2. Hero (6 stacked z-layers: black base → 2000-dot 3-layer parallax star field → central radial purple glow → diagonal SVG light beams → 5 blurred drifting orbs → perspective grid floor → SVG warrior with counter-rotating conic rings; centered text with letter-stagger title, shimmer sweep, glow)
3. Story (left dashed timeline + 3 glass beat cards, right cosmic SVG panel with readouts)
4. Features (3×2 glass grid, lucide icons colored per item)
5. Classes (3 tabs, AnimatePresence content, SVG silhouette + stats bars animating width on tab change)
6. Stats (4 count-up cards, null value renders suffix `∞` directly)
7. Media (CSS masonry of 5 gradient screenshots + 16:9 trailer card)
8. Editions (3 tiers, featured tier raised + ribbon)
9. Community (email pill form, success state, live-incrementing enlisted counter)
10. Footer (3 columns, animated cyan sweep line at bottom)

## Animation system

- `whileInView` with `{ once: true, amount: 0.15 }`, default `y:60→0, opacity:0→1, 0.7s easeOut`, `staggerChildren: 0.08`.
- Page-load sequence on hero (navbar drop → pre-title → letter stagger → subtitle → tagline → desc → CTAs).
- Mouse parallax via `useMouseParallax` hook (RAF lerp, layers at 0.02x/0.05x/-0.01x).
- Custom cursor disabled on touch/mobile via `matchMedia`.

## Responsive

- `<640px`: single column, 56px title, CSS-only 300-dot static star field, no parallax, no cursor, tabs horizontal-scroll, editions stack.
- `640–1024px`: 2-col grids, reduced star count.
- `>1024px`: full spec.

## Constraints honored

No external images, no Three.js, no hardcoded copy in JSX, no fonts beyond the three specified, every card uses backdrop-filter, dark theme locked. All accent colors read from `SITE_CONTENT.game.accentColor*` and per-item `color`/`accentColor` fields so a content swap also recolors the site.

## Technical notes

- Framer Motion: install via `bun add framer-motion` (lucide-react already in template).
- Tailwind v4: color tokens defined in `src/styles.css` via `@theme inline` mapping to CSS vars; spec's `--plasma-blue` etc. added to `:root` and exposed as Tailwind classes where useful (utility classes also work via raw CSS).
- Star field: generated once in `useMemo` with seeded random positions; rendered as absolutely-positioned divs across 3 layer containers.
- Count-up: `useInView` + `requestAnimationFrame` easeOut over 2s.
- No backend, no Cloud — purely frontend marketing page. Email form is client-only (shows success state).

Ready to build on approval.