"use client";

import { useState } from "react";

type Experience = {
  id: string;
  year: string;
  company: string;
  role: string;
  context: string;
  achievements: string[];
  projects?: string;
};

const experiences: Experience[] = [
  {
    id: "finvasia",
    year: "2025—Present",
    company: "Finvasia",
    role: "Senior Product Designer",
    context: "500–1000 person fintech company — Shoonya (B2C trading platform) and Jumpp (AI-powered neobanking app).",
    achievements: [
      "First product designer in the organization — built design culture, process, and systems from scratch.",
      "Used Lovable, Antigravity, and Figma Make to convert vague requirements into functional prototypes during brainstorming.",
      "Used ChatGPT and Claude to pressure-test problem definitions — surfacing edge cases before design work started.",
      "Cut feature development time in half through structured handoff guides and iterative review cycles.",
      "Implemented UX analytics tooling inside both products.",
      "Mentored team members on UX thinking."
    ],
    projects: "sensAI, Jumpp, Shoonya."
  },
  {
    id: "digimantra",
    year: "2024—2025",
    company: "DigiMantra",
    role: "Senior Product Designer",
    context: "Service-based agency — embedded in enterprise client product teams.",
    achievements: [
      "Onboarded a key client independently within first few weeks.",
      "Designed complex, data-heavy enterprise interfaces.",
      "Built and maintained design system ensuring consistency across a large-scale product.",
      "Turned incomplete, ambiguous briefs into clear buildable problem statements.",
      "Achieved 85% usability score through structured usability testing."
    ]
  },
  {
    id: "tier5",
    year: "2022—2024",
    company: "Tier5",
    role: "Junior/Mid-Level Product Designer",
    context: "100–150 person SaaS company — Friender, a lead generation platform built on Facebook connections.",
    achievements: [
      "Worked directly with CEO and MD — translating ambiguous business goals into clear design decisions.",
      "Built Friender's design system from scratch — eliminated design-engineering friction and improved feature shipping speed by 3x.",
      "Conducted product teardowns and brainstorming sessions."
    ]
  },
  {
    id: "tutelage",
    year: "2019—2022",
    company: "Tutelage",
    role: "Graphic & UI Designer",
    context: "10–20 person edtech startup — career counselling platform and 1stcollege.com.",
    achievements: [
      "Only designer in the organization — owned every visual output across digital and print.",
      "Produced 1000+ creatives across social media, web, and print channels.",
      "Revamped sdmedu.in and contributed to 1stcollege.com."
    ]
  }
];

export default function ExperienceAccordion() {
  const [openId, setOpenId] = useState<string>("finvasia"); // Default open

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? "" : id);
  };

  return (
    <div className="flex flex-col border-t border-metadata/20">
      {experiences.map((exp) => (
        <div key={exp.id} className="border-b border-metadata/20">
          <button
            onClick={() => toggleAccordion(exp.id)}
            className="w-full py-8 md:py-12 flex flex-col md:flex-row md:items-start text-left group interactive"
          >
            {/* Left Column: Year & Company */}
            <div className="w-full md:w-1/3 flex flex-row md:flex-col justify-between md:justify-start items-baseline mb-4 md:mb-0 pr-8">
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-metadata">
                {exp.year}
              </span>
              <span className="text-xl md:text-2xl font-bold text-foreground mt-0 md:mt-2 transition-colors duration-400 group-hover:text-accent">
                {exp.company}
              </span>
            </div>

            {/* Right Column Header: Role */}
            <div className="w-full md:w-2/3 flex justify-between items-center">
              <span className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                {exp.role}
              </span>
              <span className={`text-accent font-mono text-xl transition-transform duration-500 ${openId === exp.id ? 'rotate-45' : 'rotate-0'}`}>
                +
              </span>
            </div>
          </button>

          {/* Accordion Content */}
          <div 
            className={`grid grid-cols-1 md:grid-cols-12 gap-6 overflow-hidden transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) ${
              openId === exp.id ? "max-h-[1000px] opacity-100 mb-12" : "max-h-0 opacity-0"
            }`}
          >
            <div className="md:col-start-5 md:col-span-8">
              <div className="pl-0 md:pl-4 border-l-0 md:border-l border-metadata/20">
                <p className="text-metadata text-lg italic mb-6">
                  {exp.context}
                </p>
                <ul className="space-y-4 mb-6">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-foreground text-lg leading-relaxed flex items-start gap-4">
                      <span className="text-accent mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-accent"></span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
                {exp.projects && (
                  <p className="text-[0.75rem] font-mono uppercase tracking-wider text-metadata mt-8">
                    <span className="text-foreground mr-2">Key Projects:</span>
                    {exp.projects}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
