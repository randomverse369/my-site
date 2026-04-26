"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function SpacetimeCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    // eslint-disable-next-line
    setReducedMotion(mediaQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleMotionChange);

    return () => mediaQuery.removeEventListener("change", handleMotionChange);
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      document.documentElement.style.cursor = "auto";
      return;
    }

    // Hide default cursor
    document.documentElement.style.cursor = "none";
    const style = document.createElement("style");
    style.innerHTML = `
      * {
        cursor: none !important;
      }
    `;
    document.head.appendChild(style);

    // Mouse coordinates
    const mouse = new THREE.Vector2(0, 0);
    const targetMouse = new THREE.Vector2(0, 0);
    let clickWaves: { center: THREE.Vector2; time: number }[] = [];

    // Custom Cursor LERP
    const onMouseMove = (e: MouseEvent) => {
      targetMouse.x = e.clientX;
      targetMouse.y = e.clientY;

      // Detect hover
      const target = e.target as HTMLElement;
      const isClickable =
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".interactive") ||
        window.getComputedStyle(target).cursor === "pointer";
        
      setIsHovering(!!isClickable);
    };

    const onClick = () => {
      clickWaves.push({
        center: new THREE.Vector2(
          mouse.x / window.innerWidth,
          1.0 - (mouse.y / window.innerHeight)
        ),
        time: 0,
      });
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("click", onClick);

    // Three.js Setup
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    // Permanently match #F7F5F2 background color
    const bgColor = new THREE.Color("#F7F5F2");

    // Shader Material for Spacetime
    const geometry = new THREE.PlaneGeometry(2, 2);
    
    // Simple custom shader to represent spacetime distortion
    const material = new THREE.ShaderMaterial({
      uniforms: {
        u_time: { value: 0 },
        u_mouse: { value: new THREE.Vector2(0, 0) },
        u_resolution: { value: new THREE.Vector2(window.innerWidth * Math.min(window.devicePixelRatio, 2), window.innerHeight * Math.min(window.devicePixelRatio, 2)) },
        u_bgColor: { value: bgColor },
        u_waveCount: { value: 0 },
        u_waveCenters: { value: new Float32Array(30) }, // Max 15 waves
        u_waveTimes: { value: new Float32Array(15) },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float u_time;
        uniform vec2 u_mouse;
        uniform vec2 u_resolution;
        uniform vec3 u_bgColor;
        
        uniform int u_waveCount;
        uniform vec2 u_waveCenters[15];
        uniform float u_waveTimes[15];

        varying vec2 vUv;

        void main() {
          vec2 st = vUv;
          // Normalize coordinates keeping aspect ratio for distance calculations
          float aspect = u_resolution.x / u_resolution.y;
          vec2 stAspect = vec2(st.x * aspect, st.y);
          vec2 mouseAspect = vec2(u_mouse.x * aspect, u_mouse.y);
          
          float distortion = 0.0;
          
          // Mouse wake
          float distToMouse = distance(stAspect, mouseAspect);
          float wake = exp(-distToMouse * 10.0);
          distortion += wake * 0.02; // very subtle

          // Click gravity waves
          for (int i = 0; i < 15; i++) {
            if (i >= u_waveCount) break;
            
            vec2 center = u_waveCenters[i];
            vec2 centerAspect = vec2(center.x * aspect, center.y);
            float dist = distance(stAspect, centerAspect);
            
            float t = u_waveTimes[i]; // 0.0 to 1.5
            
            // Wave propagation
            float radius = t * 1.5; 
            float width = 0.1 + t * 0.2;
            
            // Envelope decays over time
            float envelope = max(0.0, 1.0 - (t / 1.5));
            
            // Ring effect
            float ring = sin((dist - radius) * 20.0);
            float mask = exp(-pow((dist - radius) * 5.0 / width, 2.0));
            
            distortion += ring * mask * envelope * 0.08;
          }

          // Apply distortion by slightly modifying the brightness/color or doing a pseudo-refraction
          vec3 finalColor = u_bgColor;
          
          // Add subtle visible wave over solid color
          finalColor += vec3(distortion);

          gl_FragColor = vec4(finalColor, 1.0);
        }
      `,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const clock = new THREE.Clock();

    const animate = () => {
      const dt = clock.getDelta();
      const time = clock.getElapsedTime();

      // LERP Mouse
      mouse.lerp(targetMouse, 0.15);

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0)`;
      }

      // Update uniforms
      material.uniforms.u_time.value = time;
      
      // Normalized mouse coordinates (0 to 1) for shader
      material.uniforms.u_mouse.value.set(
        mouse.x / window.innerWidth,
        1.0 - mouse.y / window.innerHeight
      );

      // Update waves
      const activeWaves = clickWaves.filter(w => w.time < 1.5);
      clickWaves = activeWaves;
      
      const waveCenters = new Float32Array(30);
      const waveTimes = new Float32Array(15);
      
      for (let i = 0; i < activeWaves.length && i < 15; i++) {
        activeWaves[i].time += dt;
        waveCenters[i * 2] = activeWaves[i].center.x;
        waveCenters[i * 2 + 1] = activeWaves[i].center.y;
        waveTimes[i] = activeWaves[i].time;
      }

      material.uniforms.u_waveCount.value = activeWaves.length;
      material.uniforms.u_waveCenters.value = waveCenters;
      material.uniforms.u_waveTimes.value = waveTimes;

      renderer.render(scene, camera);

      reqId = requestAnimationFrame(animate);
    };

    let reqId = requestAnimationFrame(animate);

    const onResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      material.uniforms.u_resolution.value.set(
        window.innerWidth * Math.min(window.devicePixelRatio, 2), 
        window.innerHeight * Math.min(window.devicePixelRatio, 2)
      );
    };

    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(reqId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("click", onClick);
      window.removeEventListener("resize", onResize);
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
      document.documentElement.style.cursor = "auto";
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [reducedMotion]);

  if (reducedMotion) return null;

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-screen h-screen z-[-1] pointer-events-none"
      />
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{ mixBlendMode: "exclusion" }}
      >
        <div
          className={`w-4 h-4 -ml-2 -mt-2 rounded-full transition-all duration-300 ${
            isHovering ? "scale-[2] opacity-50" : "scale-100 opacity-100"
          }`}
          style={{ backgroundColor: "var(--accent)" }}
        />
      </div>
    </>
  );
}
