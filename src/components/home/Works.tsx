"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectType {
    title: string;
    description: string;
    tags: string[];
    image: string;
    color: string;
    url?: string;
    className?: string;
}

const projects: ProjectType[] = [
    {
        title: "Shoonya",
        description: "Web Trading Platform",
        tags: ["Fintech", "Web"],
        image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?q=80&w=2560&auto=format&fit=crop",
        color: "bg-blue-50",
        url: "/work/shoonya",
        className: "md:col-span-3"
    },
    {
        title: "Jai",
        description: "AI Financial Insights",
        tags: ["AI", "Mobile"],
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2560&auto=format&fit=crop",
        color: "bg-indigo-50",
        url: "/work/jai",
        className: "md:col-span-3"
    },
    {
        title: "IDP",
        description: "Govt. Document AI",
        tags: ["Data", "AI"],
        image: "https://images.unsplash.com/photo-1555421689-d68471e189f2?q=80&w=2560&auto=format&fit=crop",
        color: "bg-red-50",
        className: "md:col-span-2"
    },
    {
        title: "Tier5",
        description: "Design System",
        tags: ["SaaS", "System"],
        image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2560&auto=format&fit=crop",
        color: "bg-amber-50",
        url: "/work/tier-5",
        className: "md:col-span-2"
    },
    {
        title: "Tutelage",
        description: "Classroom Management",
        tags: ["EdTech", "Design"],
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2560&auto=format&fit=crop",
        color: "bg-emerald-50",
        url: "/work/tutelage",
        className: "md:col-span-2"
    }
];

export default function Works() {
    return (
        <section id="works" className="relative z-10 py-24 bg-background">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* Header - Left Aligned & Clean */}
                <div className="text-left mb-20">
                    <h2 className="text-[clamp(3rem,6vw,6rem)] font-bold tracking-tight leading-none text-foreground mb-6">
                        Selected works
                    </h2>
                    <p className="text-text-secondary max-w-lg text-lg">
                        Crafting seamless and intuitive user journeys to enhance engagement and satisfaction.
                    </p>
                </div>

                {/* Grid - Bento Layout: 6 column grid for flexible 2/3 and 3/3 splits */}
                <div className="grid grid-cols-1 md:grid-cols-6 gap-6 md:gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>

            </div>
        </section>
    );
}

function ProjectCard({ project, index }: { project: ProjectType, index: number }) {
    const isLarge = project.className?.includes("col-span-2");

    const CardContent = (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`group relative p-8 rounded-[2.5rem] ${project.color} hover:shadow-xl transition-all duration-300 border border-transparent hover:border-black/5 h-full min-h-[400px] flex flex-col justify-between overflow-hidden cursor-pointer ${project.className || ""}`}
        >
            {/* Top Content */}
            <div className="relative z-10 flex justify-between items-start">
                <div>
                    <div className="flex gap-2 mb-4">
                        {project.tags.map((tag: string, i: number) => (
                            <span key={i} className="px-3 py-1 bg-white/60 backdrop-blur-sm rounded-full text-[10px] uppercase font-bold tracking-wider text-black/70">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h3 className="text-3xl font-bold text-black mb-2 leading-tight">{project.title}</h3>
                    <p className="text-black/60 font-medium">{project.description}</p>
                </div>

                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-y-2 group-hover:translate-y-0">
                    <ArrowUpRight strokeWidth={2} size={18} />
                </div>
            </div>

            {/* Image - Peeking from bottom */}
            {/* Adjust image container height/width based on card size for variations */}
            <div className="relative w-full aspect-[16/9] mt-8 rounded-2xl overflow-hidden shadow-sm group-hover:shadow-md transition-all duration-500 group-hover:scale-[1.02]">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                />
            </div>

        </motion.div>
    );

    if (project.url) {
        return (
            <Link href={project.url} className={`block ${project.className || ""}`}>
                {CardContent}
            </Link>
        );
    }

    return CardContent;
}
