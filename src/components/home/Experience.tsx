const experience = [
    {
        company: "Finvasia",
        role: "Senior UX UI Designer",
        description: "Building shoonya.com and jumpp.finance. User Experience Design (UED) & Stakeholder Management.",
        period: "May 2025 - Present"
    },
    {
        company: "DigiMantra",
        role: "Senior User Experience Designer",
        description: "Senior design role focused on user experience strategies and execution.",
        period: "Oct 2024 - Apr 2025"
    },
    {
        company: "TechEnhance",
        role: "UI/UX Designer",
        description: "Remote design work focused on interface and experience improvements.",
        period: "Sep 2024 - Sep 2024"
    },
    {
        company: "Tier5",
        role: "User Experience Designer",
        description: "Built the organization’s first design system, improving consistency and team productivity for SaaS products.",
        period: "Sep 2022 - Sep 2024"
    },
    {
        company: "Tutelage",
        role: "Graphic and UI/UX Designer",
        description: "Designed the EdTech platform end-to-end and collaborated closely with founders and developers.",
        period: "Sep 2019 - Aug 2022"
    }
];

export default function Experience() {
    return (
        <section id="experience" className="py-32 px-6 md:px-12 max-w-5xl mx-auto">
            <h2 className="text-sm font-mono uppercase tracking-widest text-gray-500 mb-20 text-center section-header">Experience</h2>

            <div className="space-y-24">
                {experience.map((job, index) => (
                    <div
                        key={index}
                        className="group grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16 border-t border-white/10 pt-12 reveal-anim"
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
                    </div>
                ))}
            </div>
        </section>
    );
}
