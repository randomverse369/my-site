import { Search, Users, Zap, Microscope, Globe } from "lucide-react";

const steps = [
    {
        title: "Problem Framing",
        description: "I start by understanding the problem through conversations, audits, data, and secondary research. I focus on clarifying goals before jumping into solutions.",
        icon: Search,
    },
    {
        title: "Collaboration",
        description: "I work closely with product managers, developers, and stakeholders. I communicate design rationale clearly and early to reduce rework and keep teams aligned.",
        icon: Users,
    },
    {
        title: "Execution & Delivery",
        description: "I balance speed and quality based on priorities. I design with feasibility in mind, maintain consistency through systems, and adapt quickly when requirements change.",
        icon: Zap,
    },
    {
        title: "Research (Practical)",
        description: "When I have full ownership, I conduct user interviews. When scope is limited, I rely on audits and competitive context to avoid assumption-driven design.",
        icon: Microscope,
    },
    {
        title: "Remote Readiness",
        description: "I’m comfortable working in remote, async environments. I take ownership of problems and ensure progress continues even when direction is evolving.",
        icon: Globe,
    }
];

export default function HowIWork() {
    return (
        <section id="how-i-work" className="py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="mb-16 reveal-anim section-header">
                <h2 className="text-sm font-mono uppercase tracking-widest text-gray-500 mb-4">How I Work</h2>
                <h3 className="text-3xl md:text-5xl font-bold text-white max-w-2xl">
                    My approach to designing products in remote teams.
                </h3>
            </div>

            {/* Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className="group p-10 rounded-[2rem] bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300 reveal-anim"
                    >
                        <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-8 text-[#007AFF] group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300 border border-white/5">
                            <step.icon className="w-6 h-6" />
                        </div>

                        <h4 className="text-xl font-bold text-white mb-4">{step.title}</h4>
                        <p className="text-gray-400 leading-relaxed text-base">
                            {step.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
