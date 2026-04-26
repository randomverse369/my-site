"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type Work = {
  id: string;
  category: string;
  title: string;
  description: string;
  href: string;
};

const works: Work[] = [
  {
    id: "sensai",
    category: "AI PRODUCT · FINTECH",
    title: "sensAI",
    description: "First AI multi-agent trading intelligence platform in the Indian trading space. Two agents, one seamless experience.",
    href: "/works/sensai",
  },
  {
    id: "shoonya",
    category: "PRODUCT REDESIGN · FINTECH",
    title: "Shoonya",
    description: "Full redesign of a B2C trading platform across web and mobile. Complexity made navigable.",
    href: "/works/shoonya",
  },
  {
    id: "uxmantra",
    category: "PERSONAL PROJECT · COMING SOON",
    title: "UXMantra",
    description: "An AI agent that thinks alongside designers — grounding decisions in research, not instinct.",
    href: "/works/uxmantra",
  },
];

export default function WorksList() {
  const [hoveredWork, setHoveredWork] = useState<string | null>(null);

  return (
    <div className="relative mt-32 mb-48">
      {/* Editorial Header */}
      <div className="grid grid-cols-12 gap-6 mb-16">
        <div className="col-span-12 md:col-span-4 md:col-start-1">
          <h2 className="text-[0.75rem] font-mono uppercase tracking-wider text-metadata">
            Selected Works (2022—2026)
          </h2>
        </div>
      </div>

      {/* Uninterrupted Editorial Layout List */}
      <div className="flex flex-col border-t border-metadata/20">
        {works.map((work) => (
          <div
            key={work.id}
            className="group border-b border-metadata/20 transition-colors duration-500 hover:border-foreground"
            onMouseEnter={() => setHoveredWork(work.id)}
            onMouseLeave={() => setHoveredWork(null)}
          >
            <Link href={work.href} className="block py-12 md:py-16">
              <div 
                className={`grid grid-cols-12 gap-6 transition-opacity duration-500 ${
                  hoveredWork && hoveredWork !== work.id ? "opacity-30" : "opacity-100"
                }`}
              >
                {/* Meta / Category */}
                <div className="col-span-12 md:col-span-4 flex flex-col justify-start">
                  <p className="text-[0.75rem] font-mono uppercase tracking-wider text-metadata mb-4 md:mb-0 group-hover:text-accent transition-colors duration-400">
                    {work.category}
                  </p>
                </div>
                
                {/* Title & Description */}
                <div className="col-span-12 md:col-span-8">
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground mb-6 group-hover:translate-x-2 transition-transform duration-500 ease-out">
                    {work.title}
                  </h3>
                  <p className="text-lg md:text-xl text-metadata max-w-2xl leading-relaxed">
                    {work.description}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Floating Center Image (Placeholder) */}
      {/* Note: The design requires a high-contrast grayscale to color transition with drifting motion */}
      <div 
        className={`pointer-events-none fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] md:w-[40vw] h-[40vh] md:h-[50vh] z-40 transition-all duration-700 ease-out ${
          hoveredWork ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <div className="w-full h-full relative overflow-hidden bg-background border border-metadata/20 shadow-2xl rounded-[8px]">
           {/* Drifting Image Container */}
           <div className={`absolute inset-[-10%] w-[120%] h-[120%] transition-transform duration-[10s] ease-linear ${hoveredWork ? "translate-y-[-5%] translate-x-[-2%]" : "translate-y-[0%] translate-x-[0%]"}`}>
              <div 
                className={`w-full h-full bg-metadata/30 bg-cover bg-center transition-all duration-1000 ease-in-out ${
                  hoveredWork ? "grayscale-0" : "grayscale"
                }`}
                style={{ 
                  backgroundImage: hoveredWork ? `url('/placeholder-${hoveredWork}.jpg')` : 'none',
                  // Simulating high contrast grayscale filter using CSS
                  filter: hoveredWork ? 'grayscale(0%) contrast(100%)' : 'grayscale(100%) contrast(120%)'
                }}
              >
                {/* Fallback pattern if no image */}
                <div className="w-full h-full flex items-center justify-center text-metadata font-mono text-[0.75rem] uppercase opacity-50">
                  Image: {hoveredWork}
                </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
