# sachinbarnwal.com

Sachin Barnwal's portfolio. Next.js 16 (App Router, Turbopack), React 19,
Tailwind v4, GSAP and Lenis. Every page is statically prerendered.

## Running it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build, runs the TypeScript check
npm run start   # serve the production build
npm run lint
```

## Environment

| Variable | Needed | What it does |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | No | Overrides the canonical origin. Set it only for a staging deploy. |

The canonical origin lives in `src/lib/site.ts` and defaults to
`https://sachinbarnwal.com`. Open Graph images, canonicals and the sitemap are
all built from it, so a wrong value is invisible until somebody shares a link.
A Vercel preview deployment uses its own URL automatically.

## How it is laid out

```
src/app/(site)/          the pages; (site) adds the header, footer and chrome
src/app/layout.tsx       fonts, metadata, the preloader's blocking init script
src/app/not-found.tsx    404, which renders the chrome itself
src/app/sitemap.ts       derived from src/lib/projects.ts
src/components/signal/   the Signal / Noise primitives (NoiseField, SplitReveal, …)
src/components/case-study/  the kit every case study is built from
src/components/site/     header, footer, preloader, page transition
src/lib/projects.ts      the one list of projects; counts in the copy derive from it
src/lib/experience.ts    the one list of roles, shared by /about and /experience
design-system/MASTER.md  the design system. Read it before changing anything visual.
```

## Rules worth knowing before you edit

- **Read `design-system/MASTER.md` first.** It holds the palette with its
  measured contrast ratios, the type scale, the motion primitives and the
  review checklist. No raw hex in components.
- **`AGENTS.md`**: this is Next.js 16, which differs from older App Router
  code. Check `node_modules/next/dist/docs/` rather than assuming.
- **Projects and roles have one source each.** Add a project to
  `src/lib/projects.ts` and it appears in the index, the sitemap, the
  numbering and the counts printed in the copy.
- **Images go through `next/image` as raster files.** Next silently refuses to
  optimize SVG, so a Figma SVG export ships at full size with no `srcset`;
  rasterize UI exports to WebP at 2x before adding them.
- **Every effect needs a still state** behind `prefers-reduced-motion: reduce`.
- **Verify scrolled states in headless Chrome over the DevTools Protocol.** The
  desktop app's browser pane runs no animation frames while hidden, so GSAP
  state freezes and scrolled screenshots come back blank (MASTER.md §8).
