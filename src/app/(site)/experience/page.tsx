import type { Metadata } from "next";
import Link from "next/link";
import ScrambleText from "@/components/signal/ScrambleText";
import SplitReveal from "@/components/signal/SplitReveal";
import { experiences, nowMonths, type Experience } from "@/lib/experience";
import RoleDuration from "@/components/experience/RoleDuration";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Seven years of design across fintech, enterprise SaaS and edtech. Four roles, newest first.",
};

const awards = [
  { title: "Dream Team Award", where: "Tier5" },
  { title: "Best Employee Performer", where: "Tutelage, 2020 and 2021" },
];

const skills = [
  {
    group: "Design",
    items: [
      "Product design",
      "UX research",
      "Interaction design",
      "Design systems",
      "Usability testing",
      "Prototyping",
    ],
  },
  {
    group: "AI and process",
    items: [
      "AI-assisted prototyping",
      "Problem framing",
      "AI behaviour design",
      "Prompt engineering",
      "Design to development handoff",
    ],
  },
  {
    group: "Tools",
    items: [
      "Figma, Figma Make",
      "Lovable, Antigravity",
      "ChatGPT, Claude",
      "Gemini API, Google AI Studio",
      "Vercel",
    ],
  },
];

/**
 * One role. The label column holds its place while the achievements scroll
 * past it, the way a case study section does.
 */
function RoleEntry({
  role,
  index,
  buildMonth,
}: {
  role: Experience;
  index: number;
  buildMonth: number;
}) {
  const headingId = `role-${role.id}`;

  return (
    <article
      aria-labelledby={headingId}
      className="grid grid-cols-12 gap-x-6 gap-y-8 border-t sn-rule py-[10vh]"
    >
      <div className="col-span-12 md:col-span-4">
        <div className="md:sticky md:top-[calc(var(--nav-height)+1.5rem)]">
          <p className="sn-mono sn-muted">
            {String(index + 1).padStart(2, "0")} · {role.year}
          </p>
          <h3 id={headingId} className="sn-row-company mt-3">
            {role.company}
          </h3>
          <p className="sn-lead sn-muted mt-4">{role.role}</p>

          <RoleDuration role={role} buildMonth={buildMonth} />
        </div>
      </div>

      <div className="cs-flow col-span-12 md:col-span-8 lg:col-span-7">
        {/* A sentence, not a label: .sn-mono would set two lines of uppercase
            mono, which is the wrong job for it and hard to read at length. */}
        <p className="cs-body sn-muted">{role.context}</p>
        <p className="cs-lead">{role.summary}</p>

        <ul className="cs-list">
          {role.achievements.map((achievement) => (
            <li key={achievement} className="cs-body">
              {achievement}
            </li>
          ))}
        </ul>

        {role.projects && (
          <p className="sn-mono sn-muted">
            <span className="text-fg">Key projects</span> {role.projects}
          </p>
        )}
      </div>
    </article>
  );
}

/*
 * The record, newest first. /about carries the same arc as a story; this page
 * is the part a hiring manager reads. One tone change per page (MASTER.md §2):
 * dark all the way down, and the footer is the light turn on the way out.
 */
export default function Experience() {
  const current = experiences[0];
  // Read on the server, so RoleDuration can reproduce this exact HTML while it
  // hydrates before switching to the reader's own clock.
  const buildMonth = nowMonths();
  const facts = [
    { label: "Span", value: "2019 to present" },
    { label: "Companies", value: String(experiences.length) },
    { label: "Now", value: `${current.role}, ${current.company}` },
  ];

  return (
    <>
      <header data-tone="dark" className="sn-gutter pb-[10vh]">
        <p className="sn-mono sn-muted">
          <ScrambleText text="Experience" delay={0.2} />
        </p>
        <SplitReveal as="h1" onScroll={false} waitForIntro className="sn-title mt-8 max-w-[14ch]">
          Seven years, four <em className="sn-serif">companies</em>.
        </SplitReveal>
        <p className="cs-standfirst mt-10 max-w-3xl">
          I started as the only designer at a small edtech company and now design AI products at
          Finvasia, where I was again the first designer hired. Newest role first.
        </p>

        <dl className="mt-12 grid grid-cols-12 gap-x-6 gap-y-6 border-t sn-rule pt-8 md:mt-16">
          {facts.map((fact) => (
            <div key={fact.label} className="col-span-6 md:col-span-4 lg:col-span-3">
              <dt className="sn-mono sn-muted">{fact.label}</dt>
              <dd className="cs-meta mt-2">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </header>

      <section data-tone="dark" aria-labelledby="roles-heading" className="sn-gutter">
        <h2 id="roles-heading" className="sr-only">
          Roles
        </h2>
        {experiences.map((role, index) => (
          <RoleEntry key={role.id} role={role} index={index} buildMonth={buildMonth} />
        ))}
      </section>

      <section data-tone="dark" aria-labelledby="awards-heading" className="sn-gutter border-t sn-rule py-[12vh]">
        <div className="grid grid-cols-12 gap-x-6 gap-y-8">
          <h2 id="awards-heading" className="col-span-12 lg:col-span-3">
            <ScrambleText onScroll className="sn-mono sn-muted" text="Awards" />
          </h2>
          <ul className="col-span-12 lg:col-span-9">
            {awards.map((award) => (
              <li
                key={award.title}
                className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-t sn-rule py-5 first:border-t-0 first:pt-0"
              >
                <span className="sn-lead">{award.title}</span>
                <span className="sn-mono sn-muted">{award.where}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section data-tone="dark" aria-labelledby="skills-heading" className="sn-gutter border-t sn-rule py-[12vh]">
        <div className="grid grid-cols-12 gap-x-6 gap-y-8">
          <h2 id="skills-heading" className="col-span-12 lg:col-span-3">
            <ScrambleText onScroll className="sn-mono sn-muted" text="Skills and tools" />
          </h2>

          <div className="col-span-12 grid grid-cols-12 gap-x-6 gap-y-10 lg:col-span-9">
            {skills.map((column) => (
              <div key={column.group} className="col-span-12 md:col-span-4">
                <h3 className="sn-mono border-b sn-rule pb-4">{column.group}</h3>
                <ul className="mt-6 flex flex-col gap-3">
                  {column.items.map((item) => (
                    <li key={item} className="cs-body">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section data-tone="dark" className="sn-gutter border-t sn-rule py-[12vh]">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <p className="sn-mono sn-muted">The work these roles produced</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/works" data-cursor="Index" className="sn-pill sn-mono">
              All work <span aria-hidden="true">→</span>
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="sn-pill sn-mono"
            >
              Résumé <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
