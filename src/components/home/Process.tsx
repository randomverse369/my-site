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
        description: "I'm comfortable working in remote, async environments with global teams. I take ownership of problems, communicate proactively, and ensure progress continues.",
        tags: ["Async", "Documentation", "Loom"]
    }
];

export default function Process() {
    return (
        <section id="process-section" className="relative py-32 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="mb-24 section-header">
                    <h2 className="text-sm font-mono uppercase tracking-widest text-gray-500 mb-4">How I Work</h2>
                    <p className="text-3xl md:text-5xl font-bold leading-tight max-w-3xl">
                        My approach to designing products in remote, cross-functional teams.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {processes.map((process, index) => (
                        <div
                            key={process.id}
                            className={cn(
                                "group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 reveal-anim",
                            )}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <span className="font-mono text-sm text-[#007AFF] bg-[#007AFF]/10 px-3 py-1 rounded-full border border-[#007AFF]/20">
                                    {process.id}
                                </span>
                                <h3 className="text-2xl font-bold text-white group-hover:text-[#007AFF]/80 transition-colors">
                                    {process.title}
                                </h3>
                            </div>

                            <p className="text-gray-400 text-lg leading-relaxed mb-8 group-hover:text-gray-300 transition-colors">
                                {process.description}
                            </p>

                            <div className="flex gap-2 flex-wrap">
                                {process.tags.map(tag => (
                                    <span key={tag} className="text-xs px-3 py-1.5 rounded-full bg-black/20 text-gray-500 border border-white/5 group-hover:border-white/20 group-hover:text-gray-400 transition-all">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
