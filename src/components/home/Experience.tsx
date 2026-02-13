"use client";

import { motion } from "framer-motion";

interface ExperienceType {
    company: string;
    role: string;
    period: string;
    description: string;
}

const experience: ExperienceType[] = [
    {
        company: "Finvasia",
        role: "Senior UX UI Designer",
        period: "May 2025 - Present",
        description: "Building shoonya.com and jumpp.finance.",
    },
    {
        company: "Digimantra",
        role: "Senior UX Designer",
        period: "Oct 2024 - Apr 2025",
        description: "Building Heavy Data Platform AWS Based for one of their key client and maintaining and building design system (Confidential).",
    },
    {
        company: "TechEnhance",
        role: "UI/UX Designer",
        period: "Sep 2024",
        description: "Designing Journeys for MSME Loan, Savings Account Opening, Auto Loan and Personal Loan along with UI Kit.",
    },
    {
        company: "Tier5",
        role: "UX Designer",
        period: "Sept 2022 - Sept 2024",
        description: "Building Organization first design system, improving consistency and team productivity for SAAS products.",
    },
    {
        company: "Tutelage",
        role: "Graphic and UI/UX Designer",
        period: "Sep 2019 - Aug 2022",
        description: "Took full ownership of every design and built ed-tech platform.",
    },
];

export default function Experience() {
    return (
        <section id="experience" className="relative z-10 py-32 px-4 md:px-8 bg-background">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center md:text-left"
                >
                    <h2 className="text-[clamp(3rem,6vw,6rem)] font-bold leading-none tracking-tight mb-6 text-foreground">
                        Experience
                    </h2>
                </motion.div>

                <div className="relative border-l border-border ml-4 md:ml-0 space-y-12 md:space-y-16">
                    {experience.map((item, index) => (
                        <ExperienceItem key={index} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ExperienceItem({ item, index }: { item: ExperienceType, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="relative pl-8 md:pl-16 group"
        >
            {/* Timeline Dot */}
            <div className="absolute -left-[5px] top-2.5 w-2.5 h-2.5 rounded-full bg-border group-hover:bg-black transition-all duration-300" />

            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-1 mb-2">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-black transition-colors duration-300">
                    {item.company}
                </h3>
                <span className="text-text-secondary font-mono text-sm tracking-wider">
                    {item.period}
                </span>
            </div>

            <p className="text-lg md:text-xl text-foreground/90 font-medium mb-3">{item.role}</p>
            <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-2xl">
                {item.description}
            </p>
        </motion.div>
    );
}
