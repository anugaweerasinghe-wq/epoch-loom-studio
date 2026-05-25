# VOIDBORN — Premium Refinement Pass

Transform the existing site from "loud game HUD" into a restrained, cinematic, multi-page concept showcase. Surgical edits only — sections not listed below are left untouched.

## 1. Content config rewrite (`src/config/content.ts`)

- Delete `SITE_CONTENT.editions` and `SITE_CONTENT.community`.
- Remove platform badges, release-year copy, "PRE-ORDER" / "AVAILABLE 2026" strings everywhere they appear.
- Rewrite `nav.links` to objects: `{ label, href }` for `/story`, `/universe`, `/media`. New `nav.cta = { label: "EXPLORE", href: "/story" }`.
- Update `hero`: drop `preTitle`, `secondaryCta`, `availabilityLine`; rename primary CTA to `EXPLORE THE WORLD`; add minimal home-teaser copy (`WIELD.`, `FRACTURE.`, `SURVIVE.`, and "Discover the world" line).
- Add page-title strings: `THE UNIVERSE`, `MEDIA`, `THE STORY`.
- Rewrite `footer` to: `tagline` removed, new fields `madeBy`, `disclaimer` ("A game concept by Anthropic Games · Not a commercial release"). Drop `legalLinks`, `platformLinks`.

## 2. Motion system overhaul

Create `src/lib/motion.ts` exporting one canonical preset:

```ts
export const premiumReveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1] },
};
export const staggerContainer = {
  whileInView: "animate",
  viewport: { once: true, amount: 0.2 },
  transition: { staggerChildren: 0.12, delayChildren: 0.1 },
};
```

Replace every existing entrance animation across all section components with this preset. Remove:
- letter-by-letter title splits
- shimmer / sweep keyframes on text
- rotating conic gradient borders
- infinite pulsing glows
- any `x: ±60` slide-ins (only `y: 24 → 0` allowed)

Allowed loops: warrior idle float (`±5px / 6s ease-in-out`) and one slow ambient background gradient drift.

## 3. Multi-page routing

New TanStack route files (each with own `head()` meta, no og:image at root):

```
src/routes/
  index.tsx       → Home  (Hero + minimal teaser)
  story.tsx       → Story (existing Story section, expanded spacing)
  universe.tsx    → Features + Classes
  media.tsx       → Media masonry + trailer card
```

Add `<Outlet />` already in `__root.tsx`. Wrap outlet content with `AnimatePresence mode="wait"` + per-page fade (0.4s). Navbar uses `<Link>` with `activeProps` → cyan + underline. Delete `Editions.tsx` and `Community.tsx`.

Home teaser block: full-width dark section, three words on three lines (Rajdhani 700, 48px, `--text-secondary`), each fading up on scroll; below them `↓ Discover the world` linking to `/story`.

## 4. Hero redesign (`src/components/sections/Hero.tsx`)

Strip:
- perspective grid floor
- diagonal light beam SVGs
- pre-title bar
- secondary CTA
- genre / rating badges
- counter-rotating conic rings on warrior

Star field → 800 dots max, color `#8892b0`, opacity 0.3–0.5. Ambient orbs → opacity × 0.4. Central radial purple glow → halve opacity, expand to ~100vw.

Layout: vertically + horizontally centered single column.
- `VOIDBORN` → Rajdhani 700, 96/48px, `--text-primary`, no glow utility.
- 1px × 80px divider line `rgba(255,255,255,0.2)` (fades in after title).
- `SHATTERED EPOCH` → Rajdhani 500, 18px, `--text-secondary`, tracking 0.4em.
- Tagline → Inter 300, 15px, `--text-muted`, max-w 420px, line-height 1.8.
- Single CTA `EXPLORE THE WORLD`: transparent bg, 1px `rgba(255,255,255,0.2)` border, Rajdhani 500 13px tracking 0.2em uppercase, 44px height, `px-8`; hover bg `rgba(255,255,255,0.06)` + border `rgba(255,255,255,0.4)`, 400ms.
- Scroll indicator: 1px × 40px vertical line, opacity 0.3 → 0.7 → 0.3 over 2.5s, no text/chevron.

Warrior: max-height 280px; remove conic rings; keep one 60s-rotating SVG ring, 1px stroke, opacity 0.15; float `±5px / 6s`; static `drop-shadow(0 0 20px rgba(79,195,247,0.25))`.

## 5. Global tone shift

`src/styles.css`:
- `.glass` background → `rgba(255,255,255,0.03)`.
- Remove `.glow-border-blue` hover styles; replace with border → `rgba(255,255,255,0.15)` on hover, 400ms.
- Remove custom scrollbar rules.
- Remove `.glow-text` usage from hero title (keep utility for other places that still need it — but stop applying it to titles per spec).

Across all section components:
- Overline labels: `tracking-[0.2em]`, opacity 60%.
- Section titles: 56px desktop (was 64).
- Body copy: `leading-[1.9]`.
- Cards: `rounded-2xl`; remove `scale-[1.02]` hovers; replace with `-translate-y-[3px]`, 400ms.
- Feature icons: default color `--text-secondary`, color-on-hover (400ms).
- Stats numbers: switch from `--plasma-cyan` to `--text-primary`.
- `--plasma-cyan` reserved for logo + active nav link only.

Delete `src/components/CustomCursor.tsx` and its usage in `routes/index.tsx`.

## 6. Footer (`src/components/sections/Footer.tsx`)

Rewrite to three-column row:
- Left: `VOIDBORN` (Rajdhani 700, 16px, `--text-muted`).
- Center: `Story · Universe · Media` (Space Mono 11px, `--text-muted`).
- Right: `Made by Anuga Weerasinghe` (Space Mono 11px, `--text-muted`).

Thin divider, then centered: `A game concept by Anthropic Games · Not a commercial release` (Space Mono 10px, `--text-muted`). Remove animated cyan sweep line and legal/platform columns.

## Out of scope (do not touch)

Stats section logic, ClassSilhouette / CosmicPanel / WarriorSilhouette internals (other than the ring removal noted), Story beat content structure, Media masonry markup beyond moving it to its page, any backend/data work.

## Acceptance check

- Build passes, 4 routes resolve, deleted components fully removed (no dangling imports).
- No infinite glow/shimmer/conic animations remain except the two allowed loops.
- Hero contains exactly one CTA and no badges/pre-title.
- Footer contains no commercial copy.
