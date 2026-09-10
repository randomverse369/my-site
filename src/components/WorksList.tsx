"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { featuredProjects, type Project } from "@/lib/projects";

gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({ project }: { project: Project }) => {
  const cardRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
      // toggleActions used to end in "reverse", which faded a card back out the
      // moment it left the trigger zone. Reveal once, then leave it alone.
      gsap.fromTo(
        cardRef.current,
        { y: 64, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );
    });
  }, []);

  return (
    <article
      ref={cardRef}
      className="group rounded-lg bg-surface px-5 py-4 sm:px-8 sm:py-6"
    >
      <div className="relative overflow-hidden rounded-md bg-forest aspect-[16/10] lg:aspect-[1016/480]">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.imageLabel}
            fill
            sizes="(min-width: 1440px) 1016px, 90vw"
            className="object-cover"
          />
        ) : (
          <span className="absolute inset-0 flex items-center justify-center px-4 text-center label text-on-forest/60">
            {project.imageLabel}
          </span>
        )}
      </div>

      <div className="mt-6 flex items-start justify-between gap-6 sm:mt-8">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <h3 className="display text-title font-bold text-foreground">
              {project.title}
            </h3>
            <ul className="flex flex-wrap items-center gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full bg-chip px-3 py-1 font-mono text-tag uppercase tracking-[0.05em] text-foreground"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-3 text-body-lg text-steel">{project.summary}</p>
        </div>

        {/* Decorative: the whole card is the link, so this must not be a second
            tab stop announcing the same destination. */}
        <span
          aria-hidden="true"
          className="hidden shrink-0 items-center justify-center rounded-full border border-accent-blue bg-surface text-accent-blue transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 sm:flex sm:size-16 lg:size-[88px]"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-6 lg:size-10"
          >
            <path d="M7 17 17 7" />
            <path d="M8 7h9v9" />
          </svg>
        </span>
      </div>
    </article>
  );
};

export default function WorksList() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ".works-header",
          { y: 32, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: ".works-header", start: "top 85%" },
          },
        );
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="w-full relative"
      id="works"
      aria-labelledby="works-heading"
    >
      <div className="container-page w-full">
        <h2
          id="works-heading"
          className="works-header display text-d3 font-medium text-foreground mb-10"
        >
          What I&apos;ve worked on
        </h2>

        <div className="flex flex-col gap-10 lg:gap-20">
          {featuredProjects.map((project) => (
            <Link
              href={project.href}
              key={project.id}
              className="block interactive rounded-lg"
            >
              <ProjectCard project={project} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
