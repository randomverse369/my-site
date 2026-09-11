import Link from "next/link";
import type { ReactNode } from "react";
import ScrambleText from "@/components/signal/ScrambleText";
import SplitReveal from "@/components/signal/SplitReveal";
import NoiseCover from "@/components/signal/NoiseCover";
import { getProject, projectNumber } from "@/lib/projects";

type Props = {
  id: string;
  kicker: string;
  title: ReactNode;
  /** A project name sets huge; a sentence title (jAI, UX Process) sets at display size. */
  titleStyle?: "name" | "sentence";
  standfirst: ReactNode;
  meta: { label: string; value: ReactNode }[];
};

/**
 * The opening of every case study. The cover carries the same transition name
 * as the project's panel on the home page, so arriving from there morphs one
 * into the other.
 */
export default function CaseHero({ id, kicker, title, titleStyle = "name", standfirst, meta }: Props) {
  const project = getProject(id);
  const number = projectNumber(id);

  return (
    <header data-tone="dark" className="sn-gutter pb-[10vh]">
      <Link href="/works" className="sn-mono sn-link">
        <span aria-hidden="true">←</span> Back to works
      </Link>

      <p className="sn-mono sn-muted mt-[8vh]">
        <ScrambleText text={`${number} · ${kicker}`} delay={0.2} />
      </p>
      <SplitReveal
        as="h1"
        onScroll={false}
        waitForIntro
        className={`mt-6 ${titleStyle === "name" ? "sn-title" : "sn-display max-w-[18ch]"}`}
      >
        {title}
      </SplitReveal>

      <div className="mt-10 grid grid-cols-12 gap-x-6 gap-y-10 md:mt-14">
        <p className="cs-standfirst col-span-12 lg:col-span-8">{standfirst}</p>
        <dl className="col-span-12 grid grid-cols-2 gap-x-6 gap-y-6 border-t sn-rule pt-6 md:grid-cols-3 xl:grid-cols-4">
          {meta.map((item) => (
            <div key={item.label}>
              <dt className="sn-mono sn-muted">{item.label}</dt>
              <dd className="cs-meta mt-2">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <NoiseCover
        seed={project.id}
        image={project.image ? { src: project.image, alt: project.imageLabel } : undefined}
        glyph={project.image ? undefined : number}
        ground={project.ground}
        reveal="static"
        transitionName={`cover-${project.id}`}
        preload={Boolean(project.image)}
        sizes="(min-width: 768px) 94vw, 100vw"
        className="mt-12 aspect-[1016/480] rounded-[1.25rem] md:mt-16"
      >
        {!project.image && (
          <p className="sn-mono absolute bottom-4 left-4 text-bone/70">Generated cover. Screens to come.</p>
        )}
      </NoiseCover>
    </header>
  );
}
