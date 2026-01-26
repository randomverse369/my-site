"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const cursorDotRef = useRef<HTMLDivElement>(null);
    const cursorArrowRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();

    useEffect(() => {
        const cursor = cursorRef.current;
        const cursorDot = cursorDotRef.current;
        const cursorArrow = cursorArrowRef.current;

        if (!cursor || !cursorDot) return;

        // Reset state on route change
        const resetState = () => {
            gsap.to(cursor, {
                scale: 1,
                backgroundColor: "transparent",
                borderColor: "#ffffff",
                mixBlendMode: "difference",
                duration: 0.3
            });
            gsap.to(cursorDot, { opacity: 1, duration: 0.2 });
            if (cursorArrow) gsap.to(cursorArrow, { opacity: 0, scale: 0, duration: 0.2 });
        };

        resetState();

        // Initial set
        gsap.set(cursor, { xPercent: -50, yPercent: -50, opacity: 0 });
        gsap.set(cursorDot, { xPercent: -50, yPercent: -50, opacity: 0 });
        if (cursorArrow) gsap.set(cursorArrow, { xPercent: -50, yPercent: -50, opacity: 0, scale: 0 });

        let isViewMode = false;

        const onMouseMove = (e: MouseEvent) => {
            // Make cursor visible on first move
            gsap.to([cursor, cursorDot], { opacity: 1, duration: 0.3 });

            // Safety check: specific to "View Mode" (arrow cursor)
            // If we are in view mode, but NOT hovering a trigger element, force reset.
            if (isViewMode) {
                const target = e.target as HTMLElement;
                const isHoveringTrigger = target.closest('[data-cursor-view]');
                if (!isHoveringTrigger) {
                    window.dispatchEvent(new CustomEvent('cursor-view-state', { detail: { active: false } }));
                }
            }

            // Smooth follow for the main circle
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.6,
                ease: "power2.out"
            });

            // Fast follow for the dot
            gsap.to(cursorDot, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: "power2.out"
            });

            // Follow for arrow
            if (cursorArrow) {
                gsap.to(cursorArrow, {
                    x: e.clientX,
                    y: e.clientY,
                    duration: 0.1,
                    ease: "power2.out"
                });
            }
        };

        const onHover = () => {
            if (!isViewMode) {
                gsap.to(cursor, { scale: 1.5, duration: 0.3 });
            }
        };

        const onLeave = () => {
            if (!isViewMode) {
                gsap.to(cursor, { scale: 1, duration: 0.3 });
            }
        };

        const onViewStateChange = (e: Event) => {
            const customEvent = e as CustomEvent;
            const active = customEvent.detail?.active;
            isViewMode = active;

            if (active) {
                // Enter View Mode: Solid White Circle + Arrow
                gsap.to(cursor, {
                    scale: 4,
                    backgroundColor: "#ffffff",
                    borderColor: "#ffffff",
                    mixBlendMode: "normal",
                    duration: 0.3
                });
                gsap.to(cursorDot, { opacity: 0, duration: 0.2 }); // Hide dot
                if (cursorArrow) gsap.to(cursorArrow, { opacity: 1, scale: 1, duration: 0.3, delay: 0.1 });
            } else {
                // Exit View Mode: Revert to default
                gsap.to(cursor, {
                    scale: 1,
                    backgroundColor: "transparent",
                    borderColor: "#ffffff",
                    mixBlendMode: "difference",
                    duration: 0.3
                });
                gsap.to(cursorDot, { opacity: 1, duration: 0.2 });
                if (cursorArrow) gsap.to(cursorArrow, { opacity: 0, scale: 0, duration: 0.2 });
            }
        };

        // Add event listeners for hover effects on interactive elements
        const interactiveElements = document.querySelectorAll("a, button, input, textarea, [data-hover]");
        interactiveElements.forEach((el) => {
            el.addEventListener("mouseenter", onHover);
            el.addEventListener("mouseleave", onLeave);
        });

        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("cursor-view-state", onViewStateChange);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("cursor-view-state", onViewStateChange);
            interactiveElements.forEach((el) => {
                el.removeEventListener("mouseenter", onHover);
                el.removeEventListener("mouseleave", onLeave);
            });
        };
    }, [pathname]);

    // Only render on desktop ideally, but for now we render always and hide via CSS on touch if needed
    return (
        <>
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-8 h-8 border border-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
            />
            <div
                ref={cursorDotRef}
                className="fixed top-0 left-0 w-1 h-1 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
            />
            <div
                ref={cursorArrowRef}
                className="fixed top-0 left-0 z-[10000] pointer-events-none flex items-center justify-center text-black"
                style={{ opacity: 0, transform: 'translate(-50%, -50%)' }}
            >
                <ArrowUpRight className="w-6 h-6" />
            </div>
        </>
    );
}

