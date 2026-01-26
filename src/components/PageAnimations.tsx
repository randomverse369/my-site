'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function PageAnimations() {
    useEffect(() => {
        // Register ScrollTrigger
        if (typeof window !== "undefined") {
            gsap.registerPlugin(ScrollTrigger);
        }

        // 2. Hero Fade Out (Removed Parallax to fix overlap)
        const heroSection = document.querySelector('#hero-section');
        if (heroSection) {
            gsap.to(heroSection, {
                opacity: 0,
                ease: "none",
                scrollTrigger: {
                    trigger: heroSection,
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            });
        }

        // 2a. Hero Reveal Animation
        const heroReveals = document.querySelectorAll('.hero-reveal');
        if (heroReveals.length > 0) {
            gsap.fromTo(heroReveals,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.1,
                    ease: "power3.out",
                    delay: 0.2
                }
            );
        }

        // 3. Section Headers (Staggered Line Reveal)
        const sectionHeaders = document.querySelectorAll('.section-header');
        sectionHeaders.forEach(header => {
            gsap.fromTo(header,
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: header,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });

        // 4. Reveal Animations (Generic)
        const revealElements = document.querySelectorAll('.reveal-anim');
        revealElements.forEach(element => {
            gsap.fromTo(element,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: element,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });

        // Refresh ScrollTrigger to ensure positions are correct
        ScrollTrigger.refresh();

        // Cleanup
        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return null;
}
