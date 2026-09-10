import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { projects, type Project } from "@/lib/projects";
import WorksIndex, { type WorksIndexItem } from "@/components/WorksIndex";

export const metadata: Metadata = {
  title: "Works",
  description:
    "Eight product design projects from Finvasia, DigiMantra and Tier5. Five carry a written case study.",
};

type NumberedProject = Project & { number: string };

/**
 * The number is the position in the one source list, so the rail, the entries
 * and the anchors all count the same way even as projects are added.
 */
const numbered: NumberedProject[] = projects.map((project, index) => ({
  ...project,
  number: String(index + 1).padStart(2, "0"),
}));

const caseStudies = numbered.filter((project) => project.caseStudy === "published");
const drafts = numbered.filter((project) => project.caseStudy === "coming-soon");

const indexItems: WorksIndexItem[] = numbered.map((project) => ({
  id: project.id,
  number: project.number,
  title: project.title,
  draft: project.caseStudy === "coming-soon",
}));

/** The two values a reader scans for. The rest belongs on the case study. */
const leadMeta = (project: Project) =>
  project.meta
    .slice(0, 2)
    .map((item) => item.value)
    .join(" · ");

/* --accent-blue clears 3:1 as a mark and nothing else, so it draws the arrow
   and its ring while the words next to it stay in --foreground. */
const OpenMark = () => (
  <span
    aria-hidden="true"
    className="flex size-9 shrink-0 items-center justify-center rounded-full border border-accent-blue text-accent-blue transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
  >
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-4"
    >
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  </span>
);

const Kicker = ({ project }: { project: NumberedProject }) => (
  <p className="label flex items-center gap-4 text-metadata">
    <span className="text-foreground">{project.number}</span>
    <span aria-hidden="true" className="h-px w-8 bg-rule-strong" />
    <span>{project.category}</span>
  </p>
);

function CaseStudyEntry({ project }: { project: NumberedProject }) {
  const hasShot = Boolean(project.image);

  return (
    <article
      id={project.id}
      className="group relative scroll-mt-32 border-t border-rule pt-8"
    >
      <Kicker project={project} />

      {/* Two weights of the same entry. A project with screens gets the full
          width well; one without gets a square plate carrying its number, which
          keeps the rhythm without dressing an empty box as a screenshot. */}
      <div className="mt-8 grid grid-cols-12 gap-6 md:gap-10">
        <div className={hasShot ? "col-span-12" : "col-span-6 md:col-span-4"}>
          <div
            className={`relative overflow-hidden rounded-md bg-forest ${
              hasShot ? "aspect-[1016/480]" : "flex aspect-square items-center justify-center"
            }`}
          >
            {project.image ? (
              <Image
                src={project.image}
                alt={project.imageLabel}
                fill
                sizes="(min-width: 1024px) 800px, 92vw"
                className="object-cover"
              />
            ) : (
              <span
                aria-hidden="true"
                className="display text-d2 font-bold leading-none text-on-forest/20"
              >
                {project.number}
              </span>
            )}
          </div>
        </div>

        <div className={hasShot ? "col-span-12 lg:col-span-10" : "col-span-12 md:col-span-8"}>
          <h3 className="display text-title font-bold text-foreground">
            <Link
              href={project.href}
              className="interactive rounded-sm decoration-rule-strong underline-offset-8 after:absolute after:inset-0 group-hover:underline"
            >
              {project.title}
            </Link>
          </h3>

          {project.body.map((paragraph) => (
            <p key={paragraph} className="mt-4 text-body-lg text-steel">
              {paragraph}
            </p>
          ))}

          <ul className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="label rounded-full bg-chip px-3 py-1 font-mono text-metadata"
              >
                {tag}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-x-8 gap-y-4">
            <p className="label text-metadata">{leadMeta(project)}</p>
            <p className="label flex items-center gap-3 text-foreground">
              Read the case study
              <OpenMark />
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

function DraftEntry({ project }: { project: NumberedProject }) {
  return (
    <article
      id={project.id}
      className="group relative flex scroll-mt-32 flex-col gap-4 border-t border-rule py-8 md:flex-row md:items-start md:gap-8"
    >
      <p className="label text-metadata md:w-12 md:shrink-0 md:pt-2">{project.number}</p>

      <div className="min-w-0 flex-1">
        <h3 className="display text-lead font-bold text-foreground">
          {/* The pseudo-element makes the whole row the target while the link
              itself announces only the project name. */}
          <Link
            href={project.href}
            className="interactive rounded-sm decoration-rule-strong underline-offset-8 after:absolute after:inset-0 group-hover:underline"
          >
            {project.title}
          </Link>
        </h3>

        {project.body.map((paragraph) => (
          <p key={paragraph} className="mt-3 text-body-lg text-steel">
            {paragraph}
          </p>
        ))}

        <p className="label mt-4 text-metadata">{leadMeta(project)}</p>
      </div>

      <p className="label shrink-0 rounded-full bg-chip px-3 py-1 text-metadata md:mt-2">
        In draft
      </p>
    </article>
  );
}

export default function Works() {
  return (
    <div className="container-page mb-32 md:mb-40">
      <header className="grid grid-cols-12 gap-6 pt-4 md:pt-12">
        <div className="col-span-12 lg:col-span-10">
          <p className="label text-metadata">Works</p>
          {/* The two counts are the counts below. Change the list in
              src/lib/projects.ts and this line has to move with it. */}
          <h1 className="display mt-6 text-d2 text-foreground">
            Eight projects. Five written up.
          </h1>
          <p className="mt-10 max-w-3xl text-lead text-steel">
            I did this work at Finvasia, DigiMantra and Tier5, most of it on trading
            platforms and the AI layered onto them. Three of the case studies are still in
            draft, and each one says so.
          </p>
        </div>
      </header>

      <div className="mt-20 grid grid-cols-12 gap-x-6 gap-y-16 md:mt-28 lg:gap-x-10">
        {/* The rail takes a wider share at lg: at 1024px three columns leaves
            166px, which wraps half the project names onto a second line. */}
        <div className="col-span-12 lg:col-span-4 xl:col-span-3">
          <WorksIndex items={indexItems} />
        </div>

        <div className="col-span-12 lg:col-span-8 xl:col-span-9">
          <section aria-labelledby="case-studies">
            <div className="flex items-baseline justify-between gap-6">
              <h2 id="case-studies" className="label text-metadata">
                Case studies
              </h2>
              <p className="label text-metadata">{caseStudies.length} written</p>
            </div>

            <ol className="mt-10 flex flex-col gap-24 md:gap-32">
              {caseStudies.map((project) => (
                <li key={project.id}>
                  <CaseStudyEntry project={project} />
                </li>
              ))}
            </ol>
          </section>

          <section className="mt-32 md:mt-40" aria-labelledby="drafts">
            <div className="flex items-baseline justify-between gap-6">
              <h2 id="drafts" className="label text-metadata">
                Still writing
              </h2>
              <p className="label text-metadata">{drafts.length} projects</p>
            </div>

            <p className="mt-6 max-w-2xl text-body-lg text-steel">
              Three projects I have not written up yet. The pages behind them carry the
              summary and little else.
            </p>

            <ol className="mt-10 flex flex-col">
              {drafts.map((project) => (
                <li key={project.id}>
                  <DraftEntry project={project} />
                </li>
              ))}
            </ol>
          </section>
        </div>
      </div>
    </div>
  );
}
