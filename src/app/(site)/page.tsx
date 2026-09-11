import Link from "next/link";
import { projects } from "@/lib/projects";
import ProcessTrack from "@/components/home/ProcessTrack";
import ExperienceRows from "@/components/home/ExperienceRows";
import VelocityMarquee from "@/components/home/VelocityMarquee";
import Hero from "@/components/signal/Hero";
import ScrambleText from "@/components/signal/ScrambleText";
import SplitReveal from "@/components/signal/SplitReveal";
import WordFill from "@/components/signal/WordFill";
import NoiseCover from "@/components/signal/NoiseCover";
import WorkStack, { type WorkPanel } from "@/components/signal/WorkStack";

function project(id: string) {
  const found = projects.find((p) => p.id === id);
  if (!found) throw new Error(`Unknown project: ${id}`);
  return found;
}

const shoonya = project("shoonya");
const sensai = project("sensai");
const amorphic = project("amorphic-idp");

// Summaries are lifted from each case study's own approved copy. Shoonya's
// status stays "In development": the redesign has not shipped.
const panels: WorkPanel[] = [
  {
    id: shoonya.id,
    title: shoonya.title,
    href: shoonya.href,
    category: shoonya.category,
    meta: "Finvasia · In development",
    summary:
      "A redesign of Finvasia’s retail trading platform, web and mobile, designed so a trader reads their position before they scroll.",
    image: { src: "/work-shoonya.png", alt: shoonya.imageLabel },
  },
  {
    id: sensai.id,
    title: sensai.title,
    href: sensai.href,
    category: sensai.category,
    meta: "Finvasia · 0 to 1 AI product",
    summary:
      "Two agents behind one interface: a screener that takes plain English, and a chat assistant that answers questions about a stock while you are looking at it.",
    image: { src: "/work-sensai.png", alt: sensai.imageLabel },
  },
  {
    id: amorphic.id,
    title: amorphic.title,
    href: amorphic.href,
    category: amorphic.category,
    meta: "DigiMantra · Cloudwick",
    summary: amorphic.summary,
    glyph: "03",
    ground: "#10151f",
  },
];

/*
 * One tone change per page (MASTER.md §2): dark from the hero through the
 * work, and the footer is the light turn on the way out.
 */
export default function Home() {
  return (
    <>
      <Hero />

      <section data-tone="dark" aria-labelledby="approach-heading" className="relative py-[20vh]">
        <div className="sn-gutter grid grid-cols-12 gap-x-6 gap-y-12">
          <h2 id="approach-heading" className="col-span-12 lg:col-span-3">
            <ScrambleText onScroll className="sn-mono sn-muted" text="(01) Approach" />
          </h2>

          <div className="col-span-12 lg:col-span-9">
            <WordFill className="sn-statement max-w-[22ch]">
              I take <em className="sn-serif">unclear</em> requirements and turn them into products
              people actually use.
            </WordFill>

            <div className="mt-16 grid grid-cols-12 items-start gap-6 md:mt-24">
              <p className="sn-lead sn-muted col-span-12 max-w-[34ch] md:col-span-6">
                Seven years across fintech, SaaS and AI products, at Finvasia, DigiMantra, Tier5
                and Tutelage.
              </p>

              {/* Reserved for a portrait. Sachin asked for the space, not a photo.
                  One step above the ink ground, with a rule, so it reads as a
                  frame on a dark section. */}
              <figure className="col-span-8 col-start-5 md:col-span-4 md:col-start-9">
                <NoiseCover
                  seed="portrait"
                  ground="#15161a"
                  className="aspect-[4/5] rounded-[1rem] border sn-rule"
                >
                  <p className="sn-mono absolute left-4 top-4 text-bone/70">Portrait</p>
                </NoiseCover>
                <figcaption className="sn-mono sn-muted mt-3">Slot reserved</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section id="work" data-tone="dark" aria-labelledby="work-heading" className="relative pt-[18vh]">
        <div className="sn-gutter mb-[8vh] flex flex-wrap items-end justify-between gap-x-10 gap-y-6">
          <SplitReveal as="h2" id="work-heading" className="sn-display">
            Selected <em className="sn-serif">work</em>
          </SplitReveal>
          <ScrambleText onScroll className="sn-mono sn-muted" text="(02) Three of five case studies" />
        </div>

        <WorkStack panels={panels} />

        <div className="sn-gutter flex flex-wrap items-center justify-between gap-6 border-t sn-rule py-8">
          <p className="sn-mono sn-muted">The index has all eight projects, drafts included</p>
          <Link href="/works" data-cursor="Index" className="sn-pill sn-mono">
            All work <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <ProcessTrack />

      <section data-tone="dark" aria-labelledby="experience-heading" className="relative py-[18vh]">
        <div className="sn-gutter">
          <div className="mb-[8vh] flex flex-wrap items-end justify-between gap-x-10 gap-y-6">
            <SplitReveal as="h2" id="experience-heading" className="sn-display">
              Designing since <em className="sn-serif">2019</em>
            </SplitReveal>
            <ScrambleText onScroll className="sn-mono sn-muted" text="(04) Experience" />
          </div>

          <ExperienceRows />

          <div className="mt-10 flex justify-end">
            <Link href="/experience" className="sn-mono sn-link">
              The full record <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <VelocityMarquee />
    </>
  );
}
