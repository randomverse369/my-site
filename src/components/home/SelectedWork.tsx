"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        id: 1,
        title: "Shoonya",
        category: "Fintech • Web & Mobile",
        description: "Stabilizing a Trading Platform Redesign",
        gradient: "from-blue-900 to-slate-900",
        link: "/work/shoonya"
    },
    {
        id: 2,
        title: "Tier5",
        category: "SaaS • Design System",
        description: "Scaling Design Consistency Across a Product",
        gradient: "from-purple-900 to-slate-900",
        link: "#"
    },
    {
        id: 3,
        title: "Tutelage",
        category: "EdTech • Platform",
        description: "End-to-end Product Design for Education",
        gradient: "from-orange-900 to-red-900",
        link: "#"
    }
];

export default function SelectedWork() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-[#0a0a0a]">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">

                {/* Section Header (Fixed/Absolute) */}
                <div className="absolute top-12 left-6 md:left-12 z-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-sm md:text-base font-mono uppercase tracking-widest text-gray-500 mb-2"
                    >
                        Selected Work
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-xl md:text-2xl font-light text-gray-300 max-w-md"
                    >
                        A few projects that reflect how I think, work, and collaborate.
                    </motion.p>
                </div>

                <motion.div style={{ x }} className="flex gap-16 pl-[15vw] pt-24 md:pt-32">
                    {projects.map((project) => (
                        <Link href={project.link} key={project.id} className="group relative h-[60vh] w-[80vw] md:w-[60vw] flex-shrink-0 cursor-none block">
                            <div className={cn(
                                "absolute inset-0 rounded-3xl bg-gradient-to-br opacity-20 transition-opacity duration-500 group-hover:opacity-40",
                                project.gradient
                            )} />

                            <div className="absolute inset-0 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm transition-colors duration-500 group-hover:border-white/20" />

                            <div className="relative h-full flex flex-col justify-between p-8 md:p-12">
                                <div className="flex justify-between items-start">
                                    <div className="px-3 py-1 rounded-full border border-white/10 bg-black/20 text-xs font-mono uppercase tracking-wider text-gray-400">
                                        {project.category}
                                    </div>
                                    <div className="bg-white text-black rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                                        <ArrowUpRight size={24} />
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-4xl md:text-6xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
                                        {project.title}
                                    </h3>
                                    <p className="text-xl md:text-2xl text-gray-400 font-light">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                    {/* Padding div to ensure last item is fully visible */}
                    <div className="w-[10vw]" />
                </motion.div>
            </div>
        </section>
    );
}
