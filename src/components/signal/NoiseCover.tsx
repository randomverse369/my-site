"use client";

import Image from "next/image";
import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Props = {
  /** Same seed, same field: a project's cover never changes between visits. */
  seed: string;
  /** With an image, the noise dissolves off it as the cover scrolls in. */
  image?: { src: string; alt: string };
  /** Without one, this glyph resolves out of the noise instead. */
  glyph?: string;
  ground?: string;
  className?: string;
  sizes?: string;
  /** Selector for the element whose scroll position drives the reveal. */
  trigger?: string;
  start?: string;
  end?: string;
  children?: ReactNode;
};

type Cell = {
  x: number;
  y: number;
  angle: number;
  len: number;
  tone: number;
  /** When this cell resolves, 0 to 1 along the reveal. */
  t: number;
  glyph: boolean;
};

const NOISE = ["rgba(236, 233, 226, 0.14)", "rgba(236, 233, 226, 0.26)", "rgba(236, 233, 226, 0.42)"];
const SIGNAL = "#d4ff3f";

function hashString(value: string) {
  let h = 2166136261;
  for (let i = 0; i < value.length; i++) {
    h ^= value.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function mulberry32(seed: number) {
  let a = seed;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * A project cover in the Signal / Noise language, drawn with Canvas 2D so a
 * page of them costs no WebGL contexts. It redraws only while its reveal is
 * scrubbing, never on an idle frame.
 */
export default function NoiseCover({
  seed,
  image,
  glyph,
  ground = "#0b0c0e",
  className = "",
  sizes = "100vw",
  trigger,
  start = "top 85%",
  end = "top 30%",
  children,
}: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useGSAP(
    () => {
      const root = rootRef.current;
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      if (!root || !canvas || !ctx) return;

      const state = { p: 0 };
      let cells: Cell[] = [];
      let size = 0;
      let dpr = 1;
      let generation = 0;

      const dash = (path: Path2D, x: number, y: number, angle: number, len: number) => {
        const dx = Math.cos(angle) * len;
        const dy = Math.sin(angle) * len;
        path.moveTo(x - dx, y - dy);
        path.lineTo(x + dx, y + dy);
      };

      const draw = () => {
        const p = state.p;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (!image) {
          ctx.fillStyle = ground;
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        }

        const cover = new Path2D();
        const noise = NOISE.map(() => new Path2D());
        const signal = new Path2D();
        const half = size / 2;

        for (const c of cells) {
          if (image) {
            if (c.t < p) continue; // Resolved: the screen shows through.
            cover.rect(c.x - half, c.y - half, size + 1, size + 1);
            // The cells about to clear form a bright front.
            dash(c.t < p + 0.05 ? signal : noise[c.tone], c.x, c.y, c.angle, c.len);
          } else if (c.glyph) {
            const k = Math.min(1, Math.max(0, (p - c.t * 0.6) / 0.4));
            const len = c.len + (size * 0.42 - c.len) * k;
            dash(k >= 1 ? signal : noise[2], c.x, c.y, c.angle * (1 - k), len);
          } else {
            dash(noise[c.tone], c.x, c.y, c.angle, c.len);
          }
        }

        if (image) {
          ctx.fillStyle = ground;
          ctx.fill(cover);
        }
        ctx.lineWidth = 1.2 * dpr;
        noise.forEach((path, i) => {
          ctx.strokeStyle = NOISE[i];
          ctx.stroke(path);
        });
        ctx.lineWidth = 1.6 * dpr;
        ctx.strokeStyle = SIGNAL;
        ctx.stroke(signal);
      };

      const rebuild = async () => {
        const id = ++generation;
        const rect = root.getBoundingClientRect();
        if (!rect.width || !rect.height) return;

        dpr = Math.min(window.devicePixelRatio || 1, 2);
        const w = Math.round(rect.width * dpr);
        const h = Math.round(rect.height * dpr);
        const cellSize = 13 * dpr;

        // Rasterise the glyph once and read which cells fall inside it.
        let mask: Uint8ClampedArray | null = null;
        if (glyph && !image) {
          const family =
            getComputedStyle(root).getPropertyValue("--font-instrument-sans").trim() || "sans-serif";
          try {
            await document.fonts.load(`600 100px ${family}`, glyph);
          } catch {
            // Fall through to whatever face the canvas resolves.
          }
          if (id !== generation) return;

          const off = document.createElement("canvas");
          off.width = w;
          off.height = h;
          const octx = off.getContext("2d");
          if (octx) {
            let px = h * 0.9;
            octx.font = `600 ${px}px ${family}`;
            const wide = octx.measureText(glyph).width;
            if (wide > w * 0.82) {
              px *= (w * 0.82) / wide;
              octx.font = `600 ${px}px ${family}`;
            }
            const m = octx.measureText(glyph);
            octx.fillStyle = "#fff";
            octx.textAlign = "center";
            octx.fillText(glyph, w / 2, h / 2 + (m.actualBoundingBoxAscent - m.actualBoundingBoxDescent) / 2);
            mask = octx.getImageData(0, 0, w, h).data;
          }
        }
        if (id !== generation) return;

        canvas.width = w;
        canvas.height = h;
        size = cellSize;

        const rand = mulberry32(hashString(seed));
        const cols = Math.ceil(w / cellSize);
        const rows = Math.ceil(h / cellSize);
        const next: Cell[] = [];
        for (let row = 0; row < rows; row++) {
          for (let col = 0; col < cols; col++) {
            const x = (col + 0.5) * cellSize;
            const y = (row + 0.5) * cellSize;
            const ix = Math.min(w - 1, Math.floor(x));
            const iy = Math.min(h - 1, Math.floor(y));
            next.push({
              x,
              y,
              angle: (rand() - 0.5) * Math.PI,
              len: cellSize * (0.1 + 0.18 * rand()),
              tone: Math.floor(rand() * 3),
              // A screen clears top to bottom behind a ragged front, like a
              // scan; pure random order read as a QR code. A glyph resolves
              // in any order.
              t: image ? Math.min(1, (y / h) * 0.6 + rand() * 0.4) : rand(),
              glyph: mask ? mask[(iy * w + ix) * 4 + 3] > 127 : false,
            });
          }
        }
        cells = next;
        draw();
      };

      const ro = new ResizeObserver(() => void rebuild());
      ro.observe(root);

      gsap.matchMedia().add(
        { motion: "(prefers-reduced-motion: no-preference)", still: "(prefers-reduced-motion: reduce)" },
        (context) => {
          if (context.conditions?.still) {
            state.p = 1;
            draw();
            return;
          }
          gsap.to(state, {
            p: 1,
            ease: "none",
            onUpdate: draw,
            scrollTrigger: {
              trigger: (trigger && document.querySelector(trigger)) || root,
              start,
              end,
              scrub: 0.6,
            },
          });
        },
      );

      return () => {
        generation++;
        ro.disconnect();
      };
    },
    { scope: rootRef },
  );

  return (
    <div
      ref={rootRef}
      className={`relative overflow-hidden ${className}`}
      style={image ? undefined : { backgroundColor: ground }}
    >
      {image && <Image src={image.src} alt={image.alt} fill sizes={sizes} className="object-cover" />}
      <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 size-full" />
      {children}
    </div>
  );
}
