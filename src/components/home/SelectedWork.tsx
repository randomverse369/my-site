"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/types";

const projects: Project[] = [
    {
        id: 1,
        title: "jAI - Jumpp AI",
        description: "Workforce optimization & intelligence platform.",
        image: "/images/projects/jai.png",
        link: "/work/twinby",
        cta: "Explore Case Study",
        role: "Lead Product Designer",
        year: "2024",
        tools: ["Figma", "React", "Python"]
    },
    {
        id: 2,
        title: "Shoonya",
        description: "Zero-commission trading for active traders.",
        image: "/images/projects/shoonya.png",
        link: "/work/shoonya",
        cta: "Explore Case Study",
        role: "UX Researcher",
        year: "2023",
        tools: ["Figma", "ProtoPie"]
    },
    {
        id: 3,
        title: "Tier5",
        description: "Enterprise design system architecture.",
        image: "/images/projects/tier5.png",
        link: "#",
        cta: "Coming Soon",
        role: "Systems Architect",
        year: "2023",
        tools: ["Storybook", "React"]
    },
    {
        id: 4,
        title: "Tutelage",
        description: "Global mentorship & ed-tech platform.",
        image: "/images/projects/tutelage.png",
        link: "#",
        cta: "Coming Soon",
        role: "Full Stack Design",
        year: "2022",
        tools: ["Next.js", "Framer"]
    }
];

export default function SelectedWork() {
    return (
        <section id="selected-work" className="relative py-32 bg-neutral-950 overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-900/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple-900/10 rounded-full blur-[120px]" />
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div>
                        <h2 className="text-sm font-medium text-blue-500 uppercase tracking-widest mb-4">
                            Selected Works
                        </h2>
                        <p className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                            Digital <span className="text-neutral-600">Masterpieces</span>
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-32">
                    {projects.map((project, index) => (
                        <Card3D key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function Card3D({ project, index }: { project: Project; index: number }) {
    const ref = useRef<HTMLDivElement>(null);

    // Mouse position state
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            style={{
                perspective: 1200,
                transformStyle: "preserve-3d" // Critical for 3D effect
            }}
            className="w-full min-h-[600px] flex items-center justify-center group"
        >
            <motion.div
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                className="relative w-full md:w-[85%] lg:w-[75%] h-[500px] md:h-[600px] bg-neutral-900 rounded-3xl border border-white/5"
            >
                {/* 1. Base Layer: Glow */}
                <div
                    className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl -z-10"
                    style={{ transform: "translateZ(-50px)" }}
                />

                {/* 2. Image Layer - Deep Background */}
                <div
                    className="absolute inset-4 md:inset-6 rounded-2xl overflow-hidden bg-black"
                    style={{ transform: "translateZ(0px)" }}
                >
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-90" />
                </div>

                {/* 3. Middle Layer: Floating Info Box */}
                <div
                    className="absolute bottom-10 left-6 md:left-12 right-6 md:right-12"
                    style={{ transform: "translateZ(80px)" }}
                >
                    <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                        <div>
                            {/* Floating Tags */}
                            <div className="flex gap-3 mb-4 flex-wrap">
                                {project.tools?.map((tool) => (
                                    <span
                                        key={tool}
                                        className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-xs text-white/90 shadow-lg"
                                    >
                                        {tool}
                                    </span>
                                ))}
                            </div>

                            <h3 className="text-4xl md:text-6xl font-bold text-white mb-2 tracking-tighter shadow-black/50 drop-shadow-lg">
                                {project.title}
                            </h3>
                            <p className="text-lg text-neutral-300 max-w-lg mb-4 drop-shadow-md">
                                {project.description}
                            </p>

                            <div className="flex items-center gap-6 text-sm">
                                <span className="text-neutral-400">
                                    <strong className="text-white">Role:</strong> {project.role}
                                </span>
                                <span className="text-neutral-400">
                                    <strong className="text-white">Year:</strong> {project.year}
                                </span>
                            </div>
                        </div>

                        {/* CTA Button - Floats highest */}
                        <Link
                            href={project.link}
                            className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-neutral-200 transition-colors shadow-xl"
                        >
                            <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 text-black" />
                        </Link>
                    </div>
                </div>

                {/* 4. Top Layer: Glass Overlay & Decorations */}
                <div
                    className="absolute inset-0 rounded-3xl border border-white/10 pointer-events-none"
                    style={{ transform: "translateZ(40px)" }}
                >
                    {/* Corner Accents */}
                    <div className="absolute top-8 left-8 w-2 h-2 bg-white rounded-full opacity-50" />
                    <div className="absolute top-8 left-8 w-16 h-[1px] bg-gradient-to-r from-white/50 to-transparent" />
                    <div className="absolute top-8 left-8 w-[1px] h-16 bg-gradient-to-b from-white/50 to-transparent" />

                    <div className="absolute top-8 right-8 text-xs font-mono text-white/50 tracking-widest">
                        0{index + 1} / 04
                    </div>

                    {/* Glass Reflection Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

            </motion.div>
        </motion.div>
    );
}
