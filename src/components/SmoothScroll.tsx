"use client";

import { createContext, useContext, useEffect, useMemo, useRef, type ReactNode } from "react";
import Lenis from "lenis";

const SmoothScrollContext = createContext<Lenis | null>(null);

export const useSmoothScroll = () => useContext(SmoothScrollContext);

export default function SmoothScroll({ children }: { children: ReactNode }) {
    const lenisRef = useRef<Lenis | null>(null);
    const animationFrameRef = useRef<number | null>(null);

    // Create Lenis instance once (memoized to avoid recreating on every render)
    const lenis = useMemo(() => {
        // Only create on client side
        if (typeof window === "undefined") return null;

        return new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
        });
    }, []);

    useEffect(() => {
        if (!lenis) return;

        // Capture non-null lenis for the raf closure
        const lenisInstance = lenis;
        lenisRef.current = lenisInstance;

        function raf(time: number) {
            lenisInstance.raf(time);
            animationFrameRef.current = requestAnimationFrame(raf);
        }

        animationFrameRef.current = requestAnimationFrame(raf);

        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
            lenisInstance.destroy();
            lenisRef.current = null;
        };
    }, [lenis]);

    return (
        <SmoothScrollContext.Provider value={lenis}>
            {children}
        </SmoothScrollContext.Provider>
    );
}

