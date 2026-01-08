"use client";

import { motion } from "framer-motion";

const skills = [
    "Product Thinking",
    "User Research",
    "Design Systems",
    "Interaction Design",
    "Prototyping",
    "Remote Collaboration",
    "Figma",
    "React/Next.js"
];

const focusAreas = [
    {
        title: "Product Thinking",
        description: "Problem framing, decision-making, & balancing user needs with business goals."
    },
    {
        title: "UX & Interaction",
        description: "Complex workflows, information architecture, & data-heavy interfaces."
    },
    {
        title: "Design Systems",
        description: "Scalable consistency, design-dev alignment, & efficiency."
    }
];

export default function Skills() {
    return (
        <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto bg-[#0a0a0a]">
            <div className="grid md:grid-cols-2 gap-16">
                <div>
                    <h2 className="text-sm font-mono uppercase tracking-widest text-gray-500 mb-12">Focus Areas</h2>
                    <div className="space-y-12">
                        {focusAreas.map((area, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <h3 className="text-2xl font-bold mb-2 text-white">{area.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-lg">{area.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className="text-sm font-mono uppercase tracking-widest text-gray-500 mb-12">Skills</h2>
                    <div className="flex flex-wrap gap-4">
                        {skills.map((skill, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.05 }}
                                className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-gray-300 hover:bg-white/10 hover:border-white/20 transition-colors cursor-default"
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
