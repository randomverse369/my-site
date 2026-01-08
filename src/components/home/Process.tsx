"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

const processes = [
    {
        id: "01",
        title: "Problem Framing",
        description: "I start by understanding the problem through conversations, audits, data, and secondary research. Before jumping into solutions, I focus on clarifying goals, constraints, and assumptions.",
        tags: ["Research", "Audits", "Data Analysis"]
    },
    {
        id: "02",
        title: "Collaboration",
        description: "I work closely with product managers, developers, BAs, SMEs, and stakeholders to align on priorities and decisions. I communicate design rationale clearly and early to reduce rework.",
        tags: ["Workshops", "Syncs", "Jira"]
    },
    {
        id: "03",
        title: "Execution & Delivery",
        description: "I balance speed and quality based on product priorities and timelines. I design with development feasibility in mind, maintain consistency through systems, and adapt quickly.",
        tags: ["Figma", "Prototyping", "Handoff"]
    },
    {
        id: "04",
        title: "Remote Readiness",
        description: "I’m comfortable working in remote, async environments with global teams. I take ownership of problems, communicate proactively, and ensure progress continues.",
        tags: ["Async", "Documentation", "Loom"]
    }
];

export default function Process() {
    const [activeId, setActiveId] = useState<string | null>("01");

    return (
        <section className="relative py-32 px-6 md:px-12 max-w-7xl mx-auto">
            <div className="mb-24">
                <h2 className="text-sm font-mono uppercase tracking-widest text-gray-500 mb-4">How I Work</h2>
                <p className="text-3xl md:text-5xl font-bold leading-tight max-w-3xl">
                    My approach to designing products in remote, cross-functional teams.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4">
                    {processes.map((process) => (
                        <div
                            key={process.id}
                            className="border-b border-white/10 pb-4"
                            onMouseEnter={() => setActiveId(process.id)}
                        >
                            <div
                                className={cn(
                                    "flex items-center gap-6 py-4 cursor-pointer transition-colors duration-300",
                                    activeId === process.id ? "text-white" : "text-gray-600"
                                )}
                            >
                                <span className="font-mono text-sm opacity-50">{process.id}</span>
                                <h3 className="text-2xl md:text-3xl font-medium">{process.title}</h3>
                            </div>

                            <motion.div
                                initial={false}
                                animate={{
                                    height: activeId === process.id ? "auto" : 0,
                                    opacity: activeId === process.id ? 1 : 0
                                }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className="overflow-hidden"
                            >
                                <p className="pl-12 text-gray-400 text-lg leading-relaxed pb-4 max-w-md">
                                    {process.description}
                                </p>
                                <div className="pl-12 flex gap-3 pb-4">
                                    {process.tags.map(tag => (
                                        <span key={tag} className="text-xs px-2 py-1 rounded-full bg-white/5 text-gray-400 border border-white/5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>

                {/* Visual Decoration / Sticky graphic for the process */}
                <div className="hidden md:block relative h-[60vh] sticky top-32 bg-white/5 rounded-2xl overflow-hidden border border-white/10">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />

                    {/* Abstract visualization changing based on active Step */}
                    <motion.div
                        key={activeId}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 flex items-center justify-center"
                    >
                        <div className="w-1/2 h-1/2 bg-gradient-to-tr from-white/10 to-transparent rounded-full blur-3xl animate-pulse" />
                        <h1 className="text-9xl font-bold opacity-10 select-none">{activeId}</h1>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
