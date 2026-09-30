import type { Metadata } from "next";
import { projectCounts, projects, spell } from "@/lib/projects";
import ScrambleText from "@/components/signal/ScrambleText";
import SplitReveal from "@/components/signal/SplitReveal";
import WorksIndex, { type WorksItem } from "@/components/works/WorksIndex";

export const metadata: Metadata = {
  title: "Works",
  description: `${spell(projectCounts.total, true)} product design projects from Finvasia, DigiMantra and Tier5. ${spell(
    projectCounts.published,
    true,
  )} carry a written case study.`,
};

// The number is the position in the one source list, so the index, the covers
// and the case study heroes all count the same way.
const items: WorksItem[] = projects.map((project, index) => ({
  id: project.id,
  number: String(index + 1).padStart(2, "0"),
  title: project.title,
  href: project.href,
  category: project.category,
  body: project.body.join(" "),
  // The two values a reader scans for. The rest belongs on the case study.
  meta: project.meta
    .slice(0, 2)
    .map((item) => item.value)
    .join(" · "),
  draft: project.caseStudy === "coming-soon",
  tags: project.tags,
  image: project.image ? { src: project.image, alt: project.imageLabel } : undefined,
  ground: project.ground,
}));

export default function Works() {
  return (
    <>
      <header data-tone="dark" className="sn-gutter pb-[8vh]">
        <p className="sn-mono sn-muted">
          <ScrambleText text="Works" delay={0.2} />
        </p>
        {/* Counted from the list itself, so it cannot fall out of step with
            the rows below. */}
        <SplitReveal as="h1" onScroll={false} waitForIntro className="sn-title mt-8 max-w-[14ch]">
          {spell(projectCounts.total, true)} projects. {spell(projectCounts.published, true)}{" "}
          <em className="sn-serif">written</em> up.
        </SplitReveal>
        <p className="cs-standfirst mt-10 max-w-3xl">
          I did this work at Finvasia, DigiMantra and Tier5, most of it on trading platforms and the
          AI layered onto them. {spell(projectCounts.draft, true)} of the case studies are still in draft,
          and each one says so.
        </p>
      </header>

      <section data-tone="dark" aria-label="Projects" className="sn-gutter pb-[14vh]">
        <WorksIndex items={items} />
      </section>
    </>
  );
}
