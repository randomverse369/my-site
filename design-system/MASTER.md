# Design System — Sachin Barnwal Portfolio

**Direction:** Swiss / product-editorial · **Accents:** blue (case studies), clay (outbound)
**Status:** re-settled 2026-09-07 against the Figma home page
([file `Ms2OgTXngvHyyQ7rDlrvHb`, node `11:6`](https://www.figma.com/design/Ms2OgTXngvHyyQ7rDlrvHb/Friday?node-id=11-6)).
The Figma is the source of truth for the home page; this file records how its
values land in code. Raw hex in JSX is a bug.

The previous direction here — warm limestone `#F7F5F2`, clay display type, Inter
Light headings — was replaced wholesale by that Figma, not amended. Anything in
git history describing the warm palette is superseded.

---

## 1. Colour

Ratios computed against `--surface` `#FFFFFF`, which is the ground under every
piece of text in the system (cards and footer are white; the page ground is one
step off it and never carries small type on its own).

| Token | Tailwind | Value | On white | Use |
|---|---|---|---|---|
| `--background` | `bg-background` | `#F5F7FA` | — | Page ground. Cool paper. |
| `--surface` | `bg-surface` | `#FFFFFF` | — | Raised planes: nav pill, project cards, footer. |
| `--forest` | `bg-forest` | `#082F25` | — | The ground inside a project card's image well. |
| `--foreground` | `text-foreground` | `#1A1C1E` | 15.24:1 | Display type, card titles, primary UI. |
| `--metadata` | `text-metadata` | `#5A6066` | 6.41:1 | Nav, standfirsts, dates, micro-labels. |
| `--steel` | `text-steel` | `#424242` | 9.73:1 | Card and section descriptions. |
| `--subtle` | `text-subtle` | `#5A6066` | 6.41:1 | Alias of `--metadata`, kept for ~38 inner-page call sites. |
| `--rule` | `border-rule` | `rgba(90,96,102,.2)` | 1.4:1 | Hairlines and dividers — **decorative only**. |
| `--rule-strong` | `border-rule-strong` | `rgba(90,96,102,.3)` | — | Control borders (the two Download Resume buttons). |
| `--chip` | `bg-chip` | `rgba(90,96,102,.1)` | — | Tag pill ground on a project card. |
| `--accent` | `text-accent` | `#B8422E` | 5.44:1 | Focus rings, footer ↗ arrows. Clay. |
| `--accent-blue` | `text-accent-blue` | `#0088FF` | 3.20:1 | The card's open-case-study mark **and its ring only**. |

### Hard rules

- **Three text colours, no more.** `--foreground`, `--steel`, `--metadata`. Every one clears
  4.5:1 on white, so none of them can be misused at small sizes.
- **`--accent-blue` never carries text.** At 3.20:1 it clears the 3:1 for a non-text mark
  (WCAG 1.4.11) and nothing else. In the design it appears exactly twice: the arrow glyph and
  the ring around it.
- **`--rule` may never delimit an interactive control** — it is 1.4:1. Control borders use
  `--rule-strong`, which is what the Figma draws on both Download Resume buttons.
- **Focus rings use `--accent`**, 2px, offset 2px. Never removed.

### 1a. Dark theme

Added 2026-09-08. Not a filter over the light palette — the same eight roles
re-measured against a dark ground, so the ratios above have counterparts here
rather than exceptions. Ratios are against `--surface` `#15191D`, which is the
ground under every piece of text in the dark theme exactly as `#FFFFFF` is in
the light one.

| Token | Light | Dark | On dark surface |
|---|---|---|---|
| `--background` | `#F5F7FA` | `#0D1013` | — |
| `--surface` | `#FFFFFF` | `#15191D` | — |
| `--forest` | `#082F25` | `#0A2C22` | — |
| `--foreground` | `#1A1C1E` | `#F2F4F7` | 16.03:1 |
| `--steel` | `#424242` | `#CBD1D8` | 11.48:1 |
| `--metadata` / `--subtle` | `#5A6066` | `#9AA2AB` | 6.84:1 |
| `--rule` | `rgba(90,96,102,.2)` | `rgba(154,162,171,.22)` | — |
| `--rule-strong` | `rgba(90,96,102,.3)` | `rgba(154,162,171,.36)` | — |
| `--chip` | `rgba(90,96,102,.1)` | `rgba(154,162,171,.14)` | — |
| `--accent` | `#B8422E` | `#E8836B` | 6.64:1 |
| `--accent-blue` | `#0088FF` | `#4DA6FF` | 6.91:1 |
| `--on-accent` | `#FFFFFF` | `#241009` | 6.84:1 on `--accent` |
| `--on-foreground` | `#FFFFFF` | `#0D1013` | 16.03:1 on `--foreground` |
| `--glass` / `--glass-border` | `rgba(255,255,255,.1)` / `.4` | `rgba(21,25,29,.55)` / `rgba(154,162,171,.18)` | nav pill |

### Dark-theme rules

- **The light accents cannot be reused.** `#B8422E` and `#0088FF` measure 1.9:1
  and 2.7:1 on `#15191D`. The dark pair is lightened until each clears 4.5:1,
  with the hue held: clay stays clay, blue stays blue.
- **`--accent-blue` carries text in neither theme.** It clears 3:1 for a
  non-text mark and that is all it is for.
- **Surface stays one step above the ground**, 1.08:1 — the same separation the
  light theme puts between `#FFFFFF` and `#F5F7FA` (1.06:1). Raised planes are
  lighter than the ground in dark and in light alike.
- **Hairline alphas are nudged up** (.2/.3/.1 → .22/.36/.14). A light line on a
  dark ground reads thinner than a dark line on a light one at equal alpha.
- **Never pair a page-ground grey with an inverted panel.** `--metadata` /
  `--subtle` are mixed for `--background` and `--surface`; inside a
  `bg-foreground` panel they land on the opposite ground and fail. Use
  `text-on-foreground/70` for a muted label there.

### How it is applied

`data-theme="dark"` on `<html>`, plus a `prefers-color-scheme` branch guarded by
`:root:not([data-theme="light"])` so the OS setting is honoured before any
choice is made — and with JavaScript disabled. `src/lib/theme.ts` holds the
blocking `<head>` script that sets the attribute before first paint;
`ThemeToggle` writes the choice and subscribes to it as an external store.
Storage absent means "follow the OS", which is why the toggle is two-state.

Two things do not survive a straight token swap and are handled in
`globals.css`:

- **The hero plate.** `mix-blend-mode: color` takes luminosity from the
  backdrop, so it composites to nothing on the dark ground. Dark uses `screen`
  with `blur(40px)` (to dissolve the chrome silhouette), `saturate(10)` (to put
  back the chroma the blur averages out) and **opacity 0.22, which is a
  contrast budget** — `screen` lifts the ground under the hero copy, and 0.22
  is the last stop where the headline, standfirst and Download Resume all still
  clear 4.5:1. See the comment on the rule before changing it.
- **The grain.** 2.5% → 4%. The same noise sits nearer the page colour on a
  dark ground and needs slightly more of itself to stay perceptible.

---

## 2. Type

Two families, already wired through `next/font` in `layout.tsx`.

- **Display:** Space Grotesk (`--font-space-grotesk`), via the `.display` utility.
  Hero and section headings are 500; the card title is 700; the 0-to-1 headline is 400.
- **Body:** Inter (`--font-inter`). Standfirsts and descriptions 400, footer headline 300.
- **Labels:** Space Grotesk uppercase, through the `.label` utility.

| Token | Design value | Fluid value | Use |
|---|---|---|---|
| `--text-d1` | 60 / 66 / −1.5px | `clamp(2.375rem, 4.2vw, 3.75rem)` | Hero headline; footer headline |
| `--text-d2` | 96 / −1.5px | `clamp(3rem, 6.7vw, 6rem)` | "Building products from 0 to 1" |
| `--text-d3` | 48 / −1.2px | `clamp(2rem, 3.4vw, 3rem)` | Section headings |
| `--text-title` | 36 | `clamp(1.75rem, 2.5vw, 2.25rem)` | Project card title |
| `--text-lead` | 30 / 42 | `clamp(1.375rem, 2.1vw, 1.875rem)` | Hero standfirst |
| `--text-body-lg` | 24 / 36 | `clamp(1.0625rem, 1.7vw, 1.5rem)` | Descriptions, experience rows, capabilities |
| `--text-label` | 12 / 18 / 0.6px | `0.75rem` / `0.05em` | Mono uppercase labels — **the only micro size** |
| `--text-tag` | 11.2 / 16.8 / 0.56px | `0.7rem` / `0.05em` | Tag pills on a project card |

Each clamp's upper bound is the Figma value, so at ≥1440px the page measures 1:1
against the frame. Tracking is converted from px to em at the design size, so it
holds as the type scales.

---

## 3. Space, rule, radius

Spacious density (dial 3/10).

No custom spacing tokens: Tailwind's default 4px scale already expresses the
whole set — `2`=8 · `4`=16 · `6`=24 · `10`=40 · `16`=64 · `24`=96 · `40`=160.

Section rhythm: `mt-40` (160px) between major sections, `py-24` (96px) inside them.

**Radius:** `--radius-sm` 4px (buttons) · `--radius-md` 12px (a card's image well) ·
`--radius-lg` 24px (the card itself). `rounded-full` is allowed on exactly three
marks, all of which the Figma draws that way: the nav pill, the tag pills, and
the card's arrow ring.

**Rules:** 1px, `--rule`. Borders carry the structure; shadows do not exist in this system.
`shadow-[0_8px_30px_...]` on cards and nav is retired.

**Grid:** 12 columns, `--space-3` gutter. Already the inner-page convention; the home page adopts it.

**Container:** the `.container-page` utility in `globals.css`. Replaced the
`px-4 sm:px-8 md:px-16 lg:px-32 max-w-7xl mx-auto` string that was copy-pasted
across 15 files. A CSS utility rather than a `<Container>` component: same
single definition, no structural edits, and it works on any element. Its top
step is a 180px gutter on a 1440px frame, which reproduces the Figma's 1080px
content column exactly.

**Labels:** the `.label` utility carries font, size, tracking and casing
together — a label is a role, not just a size.

---

## 4. Motion

- Micro-interactions: 200ms `ease-out`, on **named properties only**.
  `transition: all 0.4s ease-in` on every `a`/`button` is retired — `all` transitions layout
  properties, and `ease-in` reads sluggish because it starts slow.
- Reveals: 700ms `cubic-bezier(0.16, 1, 0.3, 1)`, 60ms stagger, translate + opacity only.
- Every animation sits behind `prefers-reduced-motion: reduce`, which renders the final state
  immediately. Currently only the cursor checks this — and the cursor is being removed.
- One animation system. The `.reveal-up` / `.in-view` CSS path is dead (both classes are applied
  statically in JSX on 40+ elements) and gets deleted; GSAP owns motion.

---

## 5. Chrome

Settled and applied.

- **Kept:** the grain overlay at 2.5% opacity — the only full-viewport layer left.
- **Removed:** `HUD.tsx`. The SYS.TIME / POS / VSN readout collided with the nav
  pill, read as debug output, and belonged to the retired "Weightless Gravitas"
  concept.
- **Removed:** `SpacetimeCursor.tsx`, and with it the `three` dependency and the
  global `* { cursor: none !important }`. It also ran on touch devices, where it
  left a stuck blob in the corner.
- **Removed:** `QuoteBlock.tsx` — dead file, referenced nowhere.
- **Restored, with the right asset:** the hero's iridescent plate, now
  `public/hero-iridescence.png` exported from the Figma. It blends in `color`,
  which takes hue and saturation from the artwork and **luminosity from the
  backdrop** — so it needs a light, opaque, off-white ground. That is why the
  hero band keeps `--background` instead of going white: over `#FFFFFF` the
  blend composites to nothing, which is what killed the earlier attempt with
  `Background.png` (a near-greyscale asset, still unused in `public/`).
  It also has to sit in the same stacking context as that ground; inside a
  `z-10` wrapper it has only transparency to blend with and renders as the raw
  chrome image.

## 6. Pre-delivery checklist

- [ ] No raw hex in JSX — tokens only, and **no Tailwind default palette**
      (`bg-white`, `text-blue-500`): those cannot follow the theme
- [ ] Contrast ≥ 4.5:1 for all text; ≥ 3:1 for control borders and focus rings
- [ ] **Checked in both themes**, not just the one you were working in
- [ ] `:focus-visible` on every interactive element
- [ ] `prefers-reduced-motion` honoured
- [ ] Renders at 375 / 768 / 1024 / 1440, no horizontal scroll
- [ ] SVG icons only, no emoji
- [ ] Hover transitions 150–300ms on named properties
