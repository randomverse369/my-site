"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import {
    Layout,
    Code2,
    Smartphone,
    Zap,
    Globe,
    Cpu,
    Palette,
    Terminal,
    Box
} from "lucide-react";

// Expertise Data
const expertise = [
    {
        title: "Product Design",
        description: "Crafting intuitive user experiences with a focus on usability and aesthetics.",
        icon: Palette,
        gradient: "from-purple-500/20 to-blue-500/20"
    },
    {
        title: "Frontend Engineering",
        description: "Building scalable, performant web applications using modern tech stacks.",
        icon: Code2,
        gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
        title: "Design Systems",
        description: "Creating cohesive design tokens and component libraries for consistency.",
        icon: Layout,
        gradient: "from-emerald-500/20 to-teal-500/20"
    },
    {
        title: "Motion & Interaction",
        description: "Adding life to interfaces with smooth animations and micro-interactions.",
        icon: Zap,
        gradient: "from-orange-500/20 to-red-500/20"
    }
];

// Tools Data
const tools = [
    "Figma", "React", "Next.js", "TypeScript", "Tailwind CSS",
    "Framer Motion", "GSAP", "Node.js", "Three.js", "Git",
    "Prisma", "PostgreSQL", "Storybook", "Vercel"
];

export default function Skills() {
    const sectionRef = useRef<HTMLElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (!sectionRef.current || !gridRef.current) return;

        // Animate Grid Items Entrance
        const cards = gridRef.current.querySelectorAll('.expertise-card');

        gsap.fromTo(cards,
            {
                y: 50,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: gridRef.current,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            }
        );

    }, []);

    // Update mouse position for spotlight effect
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = gridRef.current?.getBoundingClientRect();
        if (rect) {
            setMousePos({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            });
        }
    };

    return (
        <section
            ref={sectionRef}
            id="skills"
            className="py-32 relative w-full overflow-hidden"
        >
            <div className="container mx-auto px-6 md:px-12">

                {/* Section Header */}
                <div className="mb-20">
                    <h2 className="text-sm font-secondary font-medium uppercase tracking-widest text-neutral-500 mb-4 reveal-anim block">
                        Capabilities
                    </h2>
                    <p className="text-4xl md:text-5xl font-primary font-bold text-neutral-100 reveal-anim block max-w-2xl">
                        Bridging the gap between design and engineering.
                    </p>
                </div>

                {/* Spotlight Grid */}
                <div
                    ref={gridRef}
                    onMouseMove={handleMouseMove}
                    className="group relative grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-32"
                >
                    {/* Spotlight Overlay */}
                    <div
                        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
                        style={{
                            background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.06), transparent 40%)`
                        }}
                    />

                    {expertise.map((item, index) => (
                        <div
                            key={index}
                            className="expertise-card relative flex flex-col justify-between p-8 md:p-10 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm overflow-hidden group/card hover:bg-white/10 transition-colors duration-500"
                        >
                            {/* Inner Highlight */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 bg-gradient-to-br transition-all"
                                style={{
                                    background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.03), transparent 40%)`
                                }}
                            />

                            <div className="relative z-10">
                                <item.icon className="w-10 h-10 text-white mb-6 stroke-[1.5]" />
                                <h3 className="text-2xl font-bold text-white mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-neutral-400 leading-relaxed group-hover/card:text-neutral-300 transition-colors">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Tools Marquee */}
                <div className="relative w-full overflow-hidden mask-gradient-x">
                    <div className="flex gap-12 md:gap-24 items-center opacity-70 hover:opacity-100 transition-opacity duration-500">
                        {/* First Loop */}
                        <motion.div
                            initial={{ x: 0 }}
                            animate={{ x: "-100%" }}
                            transition={{
                                duration: 30,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            className="flex gap-12 md:gap-24 shrink-0"
                        >
                            {[...tools, ...tools].map((tool, i) => (
                                <span key={`${tool}-${i}`} className="text-3xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-700 uppercase tracking-tight whitespace-nowrap hover:text-white transition-colors cursor-default">
                                    {tool}
                                </span>
                            ))}
                        </motion.div>

                        {/* Second Loop for Seamless Effect */}
                        <motion.div
                            initial={{ x: 0 }}
                            animate={{ x: "-100%" }}
                            transition={{
                                duration: 30,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            className="flex gap-12 md:gap-24 shrink-0"
                        >
                            {[...tools, ...tools].map((tool, i) => (
                                <span key={`${tool}-${i}-dbl`} className="text-3xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-700 uppercase tracking-tight whitespace-nowrap hover:text-white transition-colors cursor-default">
                                    {tool}
                                </span>
                            ))}
                        </motion.div>
                    </div>
                </div>

            </div>
        </section>
    );
}
