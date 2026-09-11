"use client";

import { useEffect, useRef, type RefObject } from "react";
import gsap from "gsap";
import { onIntroDone } from "@/lib/intro";

/*
 * The hero field. A grid of short ticks, each at its own angle and flickering
 * on its own clock: the noise. Two things put them in order: a slow, price-like
 * trace hidden in the field, and a lens that follows the pointer. Inside
 * either, ticks lie flat, lengthen and light up: the signal.
 */

const VERTEX = /* glsl */ `
attribute vec2 uv;
attribute vec2 position;
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const FRAGMENT = /* glsl */ `
precision highp float;

uniform float uTime;
uniform vec2 uRes;
uniform vec2 uMouse;
uniform float uLens;
uniform float uCell;
uniform float uIntro;
uniform float uQuiet;
uniform vec3 uInk;
uniform vec3 uBone;
uniform vec3 uSignal;

varying vec2 vUv;

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float noise1(float x) {
  float i = floor(x);
  float f = fract(x);
  float u = f * f * (3.0 - 2.0 * f);
  return mix(hash(vec2(i, 3.7)), hash(vec2(i + 1.0, 3.7)), u);
}

float fbm(float x) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 4; i++) {
    v += a * noise1(x);
    x *= 2.03;
    a *= 0.5;
  }
  return v;
}

// Distance to a horizontal segment centred on the origin.
float segment(vec2 p, float halfLen) {
  p.x = abs(p.x) - halfLen;
  return length(vec2(max(p.x, 0.0), p.y));
}

void main() {
  vec2 px = vUv * uRes;
  vec2 cell = floor(px / uCell);
  vec2 local = (fract(px / uCell) - 0.5) * uCell;
  vec2 centre = (cell + 0.5) * uCell;

  float h1 = hash(cell);
  float h2 = hash(cell + 19.19);
  float h3 = hash(cell + 47.71);

  // The hidden trace, kept to the open band above the hero's type.
  float open = 1.0 - uQuiet;
  float trace = uRes.y * (uQuiet + open * (0.5 + 0.55 * (fbm(centre.x / uRes.x * 2.6 + uTime * 0.04) - 0.47)));
  float onTrace = 1.0 - smoothstep(0.0, uCell * 1.2, abs(centre.y - trace));

  float lens = 1.0 - smoothstep(uLens * 0.25, uLens, length(centre - uMouse));
  float order = max(lens, onTrace * 0.8);

  float angle = (h2 - 0.5) * 3.14159 + sin(uTime * (0.4 + h3 * 0.8) + h1 * 6.2831) * 0.7;
  angle = mix(angle, 0.0, order);
  float c = cos(angle);
  float s = sin(angle);
  vec2 q = vec2(c * local.x + s * local.y, -s * local.x + c * local.y);

  float halfLen = uCell * mix(0.1 + 0.16 * h3, 0.44, order);
  float width = mix(0.55, 0.85, order) * (uCell / 16.0);
  float mark = 1.0 - smoothstep(width - 0.75, width + 0.75, segment(q, halfLen));

  float flicker = step(0.35, hash(cell + floor(uTime * (1.5 + h2 * 5.0))));
  vec3 noiseColour = uBone * (0.12 + 0.3 * h1) * mix(0.3, 1.0, flicker);
  vec3 signalColour = mix(uBone * 0.85, uSignal, smoothstep(0.45, 1.0, lens));
  vec3 colour = mix(noiseColour, signalColour, order);

  // Cells arrive in random order on load.
  float arrived = smoothstep(h3, h3 + 0.08, uIntro * 1.08);

  // Keep the field quiet under the type: everything below uQuiet (where the
  // standfirst starts) and the nav band at the top. The lens only half-lights
  // what it passes over, so text it crosses stays readable.
  float quiet = mix(0.22, 1.0, smoothstep(uQuiet - 0.02, uQuiet + 0.12, vUv.y));
  quiet *= 1.0 - 0.55 * smoothstep(0.88, 1.0, vUv.y);
  quiet = mix(quiet, 1.0, lens * 0.35);

  gl_FragColor = vec4(uInk + colour * mark * arrived * quiet, 1.0);
}
`;

const rgb = (hex: string) => [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);

type Props = {
  className?: string;
  /** The field goes quiet below this element's top edge, and the lens stays above it. */
  quietRef?: RefObject<HTMLElement | null>;
};

export default function NoiseField({ className = "", quietRef }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = canvas?.parentElement;
    const quietEl = quietRef?.current ?? null;
    if (!canvas || !host) return;

    let disposed = false;
    let cleanup = () => {};

    // Loaded after first paint: the hero's text is the LCP element, not this.
    void import("ogl").then(({ Renderer, Program, Mesh, Triangle }) => {
      if (disposed) return;

      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const finePointer = window.matchMedia("(pointer: fine)").matches;

      let renderer: InstanceType<typeof Renderer>;
      try {
        renderer = new Renderer({
          canvas,
          dpr: Math.min(window.devicePixelRatio || 1, 1.5),
          antialias: false,
          depth: false,
          powerPreference: "low-power",
        });
      } catch {
        return; // No WebGL: the section's ink ground stands in.
      }
      const gl = renderer.gl;
      const [r, g, b] = rgb("#0b0c0e");
      gl.clearColor(r, g, b, 1);

      const uniforms = {
        uTime: { value: 0 },
        uRes: { value: [1, 1] },
        uMouse: { value: [0, 0] },
        uLens: { value: 200 },
        uCell: { value: 16 },
        uIntro: { value: reduce ? 1 : 0 },
        uQuiet: { value: 0.4 },
        uInk: { value: rgb("#0b0c0e") },
        uBone: { value: rgb("#ece9e2") },
        uSignal: { value: rgb("#d4ff3f") },
      };

      const program = new Program(gl, {
        vertex: VERTEX,
        fragment: FRAGMENT,
        uniforms,
        depthTest: false,
        depthWrite: false,
      });
      const mesh = new Mesh(gl, { geometry: new Triangle(gl), program });

      let width = 1;
      let height = 1;
      let lensRadius = 150; // CSS px
      let quietTop = 0.6; // CSS px from the top where the type begins
      const lens = { x: 0, y: 0, placed: false };
      const pointer = { x: 0, y: 0, inside: false };

      // With no pointer to follow, the lens wanders the open band above the
      // type, so it never parks behind the words on a phone.
      const wander = (t: number) => {
        const top = height * 0.16;
        const bottom = Math.max(top + 1, quietTop - lensRadius * 0.55);
        return {
          x: width * (0.5 + 0.32 * Math.sin(t * 0.21)),
          y: top + (bottom - top) * (0.5 + 0.5 * Math.sin(t * 0.33 + 1.3)),
        };
      };

      const start = performance.now();
      const render = (now = performance.now()) => {
        const t = reduce ? 12 : (now - start) / 1000;
        const target = finePointer && pointer.inside ? pointer : wander(t);
        if (!lens.placed) {
          lens.x = target.x;
          lens.y = target.y;
          lens.placed = true;
        }
        lens.x += (target.x - lens.x) * 0.075;
        lens.y += (target.y - lens.y) * 0.075;

        uniforms.uTime.value = t;
        uniforms.uMouse.value = [lens.x * renderer.dpr, (height - lens.y) * renderer.dpr];
        renderer.render({ scene: mesh });
      };

      const resize = () => {
        const rect = host.getBoundingClientRect();
        width = rect.width;
        height = rect.height;
        renderer.setSize(width, height);
        uniforms.uRes.value = [gl.canvas.width, gl.canvas.height];
        uniforms.uCell.value = (width < 640 ? 13 : 16) * renderer.dpr;
        lensRadius = Math.max(150, Math.min(width, height) * 0.3);
        uniforms.uLens.value = lensRadius * renderer.dpr;

        const block = quietEl?.getBoundingClientRect();
        const quiet = block ? (rect.bottom - block.top) / rect.height : 0.4;
        uniforms.uQuiet.value = Math.min(0.9, Math.max(0.1, quiet));
        quietTop = (1 - uniforms.uQuiet.value) * height;
        render();
      };

      let raf = 0;
      let onScreen = true;
      // Nothing is visible under the preloader, so the loop waits for it to
      // lift. Drawing every frame beneath an opaque overlay only took frames
      // from the preloader's own count.
      let revealed = false;
      const loop = (now: number) => {
        render(now);
        raf = requestAnimationFrame(loop);
      };
      const play = () => {
        if (!raf && !reduce && revealed && onScreen && !document.hidden) {
          raf = requestAnimationFrame(loop);
        }
      };
      const pause = () => {
        cancelAnimationFrame(raf);
        raf = 0;
      };

      const onMove = (event: PointerEvent) => {
        const rect = canvas.getBoundingClientRect();
        pointer.x = event.clientX - rect.left;
        pointer.y = event.clientY - rect.top;
        pointer.inside =
          pointer.x >= 0 && pointer.y >= 0 && pointer.x <= rect.width && pointer.y <= rect.height;
      };
      const onLeave = () => {
        pointer.inside = false;
      };
      const onVisibility = () => (document.hidden ? pause() : play());

      const io = new IntersectionObserver(([entry]) => {
        onScreen = entry.isIntersecting;
        if (onScreen) play();
        else pause();
      });
      const ro = new ResizeObserver(resize);

      window.addEventListener("pointermove", onMove, { passive: true });
      document.documentElement.addEventListener("pointerleave", onLeave);
      document.addEventListener("visibilitychange", onVisibility);
      io.observe(canvas);
      ro.observe(host);
      // The type block moves when the webfonts land and the name is re-fitted.
      if (quietEl) ro.observe(quietEl);
      document.fonts?.ready.then(() => {
        if (!disposed) resize();
      });

      resize();
      canvas.style.opacity = "1";
      // The field starts drawing, and its cells arrive, as the preloader lifts.
      const stopWaiting = onIntroDone(() => {
        revealed = true;
        if (!reduce) {
          gsap.to(uniforms.uIntro, { value: 1, duration: 2.4, ease: "power2.inOut", delay: 0.15 });
        }
        play();
      });

      cleanup = () => {
        stopWaiting();
        pause();
        io.disconnect();
        ro.disconnect();
        window.removeEventListener("pointermove", onMove);
        document.documentElement.removeEventListener("pointerleave", onLeave);
        document.removeEventListener("visibilitychange", onVisibility);
        gsap.killTweensOf(uniforms.uIntro);
        gl.getExtension("WEBGL_lose_context")?.loseContext();
      };
    });

    return () => {
      disposed = true;
      cleanup();
    };
  }, [quietRef]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none opacity-0 transition-opacity duration-1000 ${className}`}
    />
  );
}
