# Design System — Sachin Barnwal Portfolio

**Direction:** Signal / Noise · **Accent:** signal lime, marks only
**Status:** settled 2026-09-11, approved by Sachin against the `/lab` prototype.

This replaces the Swiss / product-editorial system (cool paper, white cards, Space
Grotesk, the Figma file `Ms2OgTXngvHyyQ7rDlrvHb`) wholesale. Sachin found it too
minimal. Anything in git history describing that system, or the warm limestone
one before it, is superseded.

**The idea.** Sachin designs trading platforms and AI products: work about pulling
signal out of noisy data. Every surface says so. Things arrive as noise, short ticks
at random angles, and resolve into order: ticks lie flat, lengthen and light up. If a
new effect does not read as noise becoming signal, it does not belong here.

---

## 1. Colour

| Token | Value | Use |
|---|---|---|
| `--ink` | `#0B0C0E` | The dark ground. |
| `--ink-raised` | `#15161A` | One step above ink: portrait slot, raised planes. |
| `--bone` | `#ECE9E2` | The light ground, and text on ink. |
| `--signal` | `#D4FF3F` | The accent. Resolved ticks, the status dot, the cursor bubble, selection. |
| `--on-signal` | `#0B0C0E` | Text on a signal ground. |

### Tone tokens

Components never name ink or bone for text and lines. They ask for the tone.

| Token | Dark tone | Light tone |
|---|---|---|
| `--ground` | `#0B0C0E` | `#ECE9E2` |
| `--raised` | `#15161A` | `#E0DCD2` |
| `--fg` | `#ECE9E2` | `#0B0C0E` |
| `--fg-muted` | `#8E8B85` | `#5E5B55` |
| `--line` | bone at 16% | ink at 16% |
| `--line-strong` | bone at 42% | ink at 42% |

Tailwind exposes all of them: `bg-ground`, `text-fg`, `text-fg-muted`, `border-line`,
`bg-signal`, and so on. The classes `.sn-muted` and `.sn-rule` do the same job.

### Contrast (WCAG, against the ground each sits on)

| Pair | Ratio |
|---|---|
| bone on ink | 16.2:1 |
| `#8E8B85` muted on ink | 5.8:1 |
| ink on bone | 16.2:1 |
| `#5E5B55` muted on bone | 5.6:1 |
| signal on ink | 16.9:1 |
| ink on signal | 16.9:1 |
| signal on bone | **1.05:1, never** |

### Hard rules

- **Signal never carries text on bone.** On a light section it is a ground with ink on it.
- **No raw hex in components.** Exceptions are named: shaders, Canvas 2D covers and
  the OG image cannot read CSS, so they repeat the values with a pointer here.
- **Focus rings are `--fg`,** 2px, offset 4px. They hold contrast in both tones.
- **Control borders use `--line-strong`.** `--line` is decorative only.

## 2. Tone: light and dark with no toggle

There is no theme switch. Sections declare `data-tone="dark"` or `"light"`, and
`ToneController` tweens the tone tokens on `<html>` whenever a different section
crosses the middle of the viewport. The header, footer and every token-driven colour
follow. With no tone section at the midline, the page is dark.

**Switch sparingly: one change per page, used to mark a turn.** Sachin reviewed a home
page that went dark, light, dark, light and said "not so often". Pages run dark, and
`SiteFooter` is the light turn on the way out. A page that needs a light passage in
the middle has to give something up for it.

Surfaces that stay dark whatever the page is doing (the menu, the preloader) carry
`.sn-tone-dark`, which re-points the tone tokens locally.

**Transitional aliases.** The pre-redesign token names (`--foreground`, `--metadata`,
`--surface`, `--accent` and the rest) are aliased onto the tone tokens in
`globals.css`, so the pages not yet rebuilt already sit on the new palette. Delete each
alias once nothing asks for it; the same goes for the old `text-d1` to `text-tag` scale
and `.container-page`.

## 3. Type

Three free Google families through `next/font` (`src/lib/fonts.ts`):

- **Instrument Sans** carries everything, with the width axis for condensed display.
- **Instrument Serif italic** takes one emphasis word per headline, never more:
  "Selected *work*", "Let's *talk*".
- **Geist Mono** sets labels, metadata and data readouts, uppercase.

| Class | Size | Use |
|---|---|---|
| `.sn-mega` | fitted to the column by JS; 13vw without it | The hero name, edge to edge |
| `.sn-title` | `clamp(3.25rem, 8.5vw, 8.5rem)`, 600, wdth 80 | Project titles, "Let's talk" |
| `.sn-display` | `clamp(2.75rem, 7vw, 8rem)`, 500, wdth 88 | Section headings |
| `.sn-statement` | `clamp(2rem, 4.4vw, 4.75rem)`, 500 | Statements, the email link |
| `.sn-lead` | `clamp(1.125rem, 1.5vw, 1.5rem)` | Standfirsts and summaries |
| `.sn-mono` | 0.75rem, uppercase, 0.04em | Labels, facts, nav |
| `.sn-serif` | inherits size, +6% inside display type | The emphasis word |

**Name once per screen.** The hero sets the name full width, so the header carries only
the SB mark until the hero has scrolled away (`data-hero-name` plus `.sn-hero-out`).
Sachin flagged the name appearing in both places at once.

## 4. Space and shape

- Gutter: `--gutter`, `clamp(1.25rem, 3.2vw, 3rem)`, through `.sn-gutter`. Sections run
  full bleed; content sits on a 12-column grid inside the gutter.
- Section rhythm: 18 to 20vh of padding between major sections.
- Radius: 1.75rem on a panel's top corners (work panels, page transitions, the preloader's
  lift), 1.25rem on covers, 1rem on small frames. Pills and the SB mark are round.
- No shadows. Separation comes from tone, rules and the grain.

## 5. Motion

GSAP owns motion, bridged to Lenis in `LenisProvider`. Every effect has a still state
behind `prefers-reduced-motion: reduce`, and every scroll-driven effect scrubs rather
than plays so it can be scrolled back.

| Primitive | What it does |
|---|---|
| `NoiseField` | WebGL (OGL) hero field. A hidden price-like trace, and a lens that follows the pointer or wanders on touch, straighten the ticks around them. Quiet below the hero copy. Pauses off screen and in hidden tabs; DPR capped at 1.5. |
| `NoiseCover` | Canvas 2D cover. A screenshot clears top to bottom behind a ragged signal-lit front; a project without screens gets a generated cover whose glyph resolves out of the noise. Seeded per project. |
| `ScrambleText` | Mono labels scramble into their words. Screen readers get the words at once. |
| `SplitReveal` | Masked line reveal, re-split when fonts land. |
| `WordFill` | Words fill from 14% to full as a statement scrolls through. |
| `WorkStack` | Full-screen panels, CSS sticky, each sliding over the last while it sinks and dims. Triggers measure non-sticky sentinels, never the sticky panels. |
| `ProcessTrack` | The six process stages on a sideways track. On `md`+ the section pins and scroll drives the track while a line of ticks straightens and lights. Stacked list on phones and for reduced motion. |
| `ExperienceRows` | Roles as large rows that rise out of their own clip; hover fills the row into the gutter and turns the arrow signal. |
| `VelocityMarquee` | Capabilities loop that speeds up with scroll velocity, reverses with scroll direction and leans into it, then settles. Alternate words are outlined. |
| Page transition | The new page rises over the old with rounded top corners; the old sinks and dims. React `<ViewTransition>` keyed by path. |

Easing is `expo.out` / `--ease-out-expo` for arrivals and `none` for scrubs. Reveals run
1.1 to 1.4s; hovers 300 to 500ms, on named properties only.

## 6. Chrome

- **Header**: SB mark, desktop links, Résumé; a Menu button opens a full-screen dark menu
  below `md`. Bone with `mix-blend-mode: difference`, so it reads over any tone or
  screenshot. Retracts on scroll down, returns on scroll up.
- **Preloader**: first visit per session. A counter runs while a line of ticks straightens
  and turns signal, then the overlay lifts from the bottom and the hero name rises. A
  blocking head script skips it on return visits and for reduced motion; a CSS fallback
  hides it after 4s if the script never runs.
- **Cursor**: a ring that trails the native pointer and opens into a signal bubble over
  `data-cursor="…"`. Fine pointers only. The native cursor is never hidden.
- **Grain**: fixed SVG noise at 5%.
- **Footer**: "Let's talk", the email, Résumé, local time. The page's light turn.

## 7. Performance

- The hero name is the LCP element, never the canvas. OGL loads after first paint.
- One WebGL context per page. Covers use Canvas 2D and redraw only while scrubbing.
- Screenshots need 2x exports. `work-shoonya.png` and `work-sensai.png` are 1016px wide
  and soften at full width.

## 8. Checking your work

The desktop app's Browser pane runs no animation frames while it is hidden: scrolled
screenshots come back blank and GSAP state freezes, while the DOM reports correct values.
Verify scrolled states with headless Chrome over the DevTools Protocol (scroll, wait in
real time, capture) instead. In development, `window.__ScrollTrigger` exposes ScrollTrigger
so a probe can read every trigger's start, end, active state and animation progress.

Global CSS transitions stay off `transform` and `opacity`. GSAP owns both, and a CSS
transition underneath a `from()` tween hands it a half-finished value as its end state.

- [ ] Tokens only; no Tailwind default palette
- [ ] Contrast from §1 holds for every text colour on its ground
- [ ] At most one tone change on the page
- [ ] Name appears once per screen
- [ ] `prefers-reduced-motion` gives a complete, still page
- [ ] `:focus-visible` on every control; the menu traps focus and closes on Escape
- [ ] 375 / 768 / 1024 / 1440 / 1920, no horizontal scroll
- [ ] Copy follows stop-slop, and no metric appears that Sachin has not sourced
