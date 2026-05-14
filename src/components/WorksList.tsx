"use client";

import Link from "next/link";
import Image from "next/image";

type Project = {
  id: string;
  title: string;
  imageLabel: string;
  image?: string;
  description: string;
  tags: string[];
  aspectRatioClass: string;
  href?: string;
};

const projects: Project[] = [
  {
    id: "sensai",
    title: "sensAI",
    imageLabel: "sensAI — Product Overview",
    image: "/work1.svg",
    description: "First AI multi-agent trading intelligence in the Indian trading space.",
    tags: ["AI Product", "Fintech"],
    aspectRatioClass: "aspect-[16/9]",
    href: "/works/sensai",
  },
  {
    id: "shoonya",
    title: "Shoonya",
    imageLabel: "Shoonya — Dashboard Redesign",
    image: "/work2.svg",
    description: "Complete redesign of a B2C trading platform. Complexity made navigable.",
    tags: ["Product Redesign", "Fintech"],
    aspectRatioClass: "aspect-[4/3]",
    href: "/works/shoonya",
  },
  {
    id: "jumpp",
    title: "Jumpp",
    imageLabel: "Jumpp — App Design",
    description: "AI-powered neobanking app. Complex flows made simple.",
    tags: ["AI Product", "Neobanking"],
    aspectRatioClass: "aspect-[4/3]",
    href: "/works/jumpp",
  },
  {
    id: "friender",
    title: "Friender",
    imageLabel: "Friender — Platform Design",
    image: "/work4.svg",
    description: "SaaS platform turning Facebook connections into a lead generation pipeline.",
    tags: ["SaaS", "Lead Generation"],
    aspectRatioClass: "aspect-[16/9]",
    href: "/works/friender",
  },
  {
    id: "uxmantra",
    title: "UXMantra",
    imageLabel: "UXMantra — Coming Soon",
    description: "An AI agent that thinks alongside designers.",
    tags: ["Personal Project", "AI Tool"],
    aspectRatioClass: "aspect-[16/9]",
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  const isComingSoon = project.id === "uxmantra";

  const cardContent = (
    <>
      {/* Image Area */}
      <div
        className={`w-full rounded-[8px] bg-metadata/10 flex items-center justify-center overflow-hidden relative ${
          project.aspectRatioClass
        } ${isComingSoon ? "opacity-70" : ""}`}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={project.imageLabel}
            fill
            className="object-cover"
          />
        ) : (
          <span className="text-[0.75rem] font-mono uppercase tracking-wider text-metadata text-center px-4">
            {project.imageLabel}
          </span>
        )}
        {isComingSoon && (
          <div className="absolute top-4 right-4 bg-background px-3 py-1 rounded-full text-[0.65rem] font-mono uppercase tracking-wider text-metadata shadow-sm">
            Coming Soon
          </div>
        )}
      </div>

      {/* Text Area */}
      <div className="pt-6 relative">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-metadata/10 text-[0.7rem] font-mono uppercase tracking-wider text-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-2xl md:text-3xl font-light tracking-tight text-foreground mb-2 pr-8">
          {project.title}
        </h3>
        <p className="text-metadata text-base md:text-lg font-light truncate pr-8">
          {project.description}
        </p>

        {/* Hover Arrow */}
        {!isComingSoon && (
          <div className="absolute bottom-2 right-2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-accent text-xl">
            &rarr;
          </div>
        )}
      </div>
    </>
  );

  if (isComingSoon) {
    return (
      <div className="group block w-full transition-transform duration-500 ease-out hover:scale-[1.01] relative">
        {cardContent}
      </div>
    );
  }

  return (
    <Link
      href={project.href as string}
      className="group block w-full transition-transform duration-500 ease-out hover:scale-[1.01] cursor-pointer relative"
    >
      {cardContent}
    </Link>
  );
};

export default function WorksList() {
  const leftColumnProjects = [projects[0], projects[2], projects[4]]; // sensAI, Jumpp, UXMantra
  const rightColumnProjects = [projects[1], projects[3]]; // Shoonya, Friender

  return (
    <div className="w-full relative mt-32 mb-48">
      {/* Section Container */}
      <div className="px-4 sm:px-8 md:px-16 lg:px-32 max-w-7xl mx-auto w-full">
        
        {/* Editorial Header */}
        <div className="mb-16">
          <p className="text-[0.75rem] font-mono uppercase tracking-wider text-metadata mb-4">
            CASE STUDIES
          </p>
          <div className="flex items-end justify-between">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-foreground">
              Selected Work
            </h2>
            <Link
              href="/works"
              className="group flex items-center gap-2 text-accent font-light hover:underline underline-offset-4 pb-1"
            >
              See all work{" "}
              <span className="transition-transform group-hover:translate-x-1">
                &rarr;
              </span>
            </Link>
          </div>
        </div>

        {/* Desktop Grid Layout (Asymmetric Two-Column Masonry) */}
        <div className="hidden md:flex gap-8 lg:gap-16">
          {/* Left Column */}
          <div className="flex-1 min-w-0 flex flex-col gap-24 lg:gap-32">
            {leftColumnProjects.map((project) => (
              <ProjectCard key={`desktop-${project.id}`} project={project} />
            ))}
          </div>
          {/* Right Column */}
          <div className="flex-1 min-w-0 flex flex-col gap-24 lg:gap-32 mt-24 lg:mt-32">
            {rightColumnProjects.map((project) => (
              <ProjectCard key={`desktop-${project.id}`} project={project} />
            ))}
          </div>
        </div>

        {/* Mobile Layout (Single Column) */}
        <div className="flex md:hidden flex-col gap-20">
          {projects.map((project) => (
            <ProjectCard key={`mobile-${project.id}`} project={project} />
          ))}
        </div>

      </div>
    </div>
  );
}
