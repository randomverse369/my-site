"use client";

import { motion } from "framer-motion";

const experience = [
    {
        company: "Finvasia",
        role: "Product Designer",
        description: "Trading & Neo-banking platforms. Led redesign efforts, design systems, and delivery under active sprint timelines.",
        period: "Present"
    },
    {
        company: "Tier5",
        role: "UX Designer",
        description: "Built the organization’s first design system, improving consistency and team productivity for SaaS products.",
        period: "Prev"
    },
    {
        company: "Tutelage",
        role: "Product Designer",
        description: "Designed the EdTech platform end-to-end and collaborated closely with founders and developers.",
        period: "Prev"
    }
];

export default function Experience() {
    return (
        <section className="py-32 px-6 md:px-12 max-w-5xl mx-auto">
            <h2 className="text-sm font-mono uppercase tracking-widest text-gray-500 mb-20 text-center">Experience</h2>

            <div className="space-y-24">
                {experience.map((job, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="group grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16 border-t border-white/10 pt-12"
                    >
                        <div>
                            <h3 className="text-3xl font-bold text-white mb-2">{job.company}</h3>
                            <p className="text-gray-500 font-mono text-sm">{job.period}</p>
                        </div>

                        <div>
                            <h4 className="text-xl text-white mb-4 font-medium">{job.role}</h4>
                            <p className="text-gray-400 text-lg leading-relaxed max-w-xl group-hover:text-gray-300 transition-colors">
                                {job.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
