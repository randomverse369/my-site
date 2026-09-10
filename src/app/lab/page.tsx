import type { Metadata } from "next";
import { signalFonts } from "@/lib/fonts";
import { projects } from "@/lib/projects";
import ToneScope from "@/components/signal/ToneScope";
import Hero from "@/components/signal/Hero";
import ScrambleText from "@/components/signal/ScrambleText";
import SplitReveal from "@/components/signal/SplitReveal";
import WordFill from "@/components/signal/WordFill";
import NoiseCover from "@/components/signal/NoiseCover";
import WorkStack, { type WorkPanel } from "@/components/signal/WorkStack";
import SignalCursor from "@/components/signal/SignalCursor";
import LocalClock from "@/components/signal/LocalClock";
import "./lab.css";

export const metadata: Metadata = {
  title: "Lab: Signal / Noise",
  description: "Direction prototype for the portfolio redesign.",
  robots: { index: false, follow: false },
};

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

export default function Lab() {
  return (
    <ToneScope className={signalFonts}>
      <SignalCursor />
      <Hero />

      {/* One tone change per page, used to mark a turn: dark from the hero
          through the work, light for the way out. Sachin found three
          switches on one page too many. */}
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

              {/* Reserved for a portrait. Sachin asked for the space, not a photo. */}
              <figure className="col-span-8 col-start-5 md:col-span-4 md:col-start-9">
                {/* One step above the ink ground, with a rule, so the slot
                    still reads as a frame on a dark section. */}
                <NoiseCover
                  seed="portrait"
                  ground="#15161a"
                  className="aspect-[4/5] rounded-[1rem] border sn-rule"
                >
                  <p className="sn-mono absolute left-4 top-4 text-[#ece9e2]/70">Portrait</p>
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
      </section>

      <section
        data-tone="light"
        aria-labelledby="contact-heading"
        className="relative flex min-h-[100svh] flex-col pt-[18vh]"
      >
        <div className="sn-gutter flex-1">
          <p>
            <ScrambleText onScroll className="sn-mono sn-muted" text="(03) Contact" />
          </p>
          <SplitReveal as="h2" id="contact-heading" className="sn-title mt-8">
            Let&apos;s <em className="sn-serif">talk</em>
          </SplitReveal>

          <div className="mt-12 grid grid-cols-12 gap-6 md:mt-16">
            <a
              href="mailto:sachin.aiux@gmail.com"
              data-cursor="Write"
              className="sn-statement sn-link col-span-12 justify-self-start [overflow-wrap:anywhere] md:col-span-9"
            >
              sachin.aiux@gmail.com
            </a>
            <ul className="sn-mono col-span-12 flex flex-col gap-3 md:col-span-3 md:items-end md:self-end">
              <li>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="sn-link">
                  Résumé <span aria-hidden="true">↗</span>
                </a>
              </li>
              <li className="sn-muted">
                Local time <LocalClock /> IST
              </li>
            </ul>
          </div>
        </div>

        <footer className="sn-gutter sn-mono sn-muted mt-[14vh] flex flex-wrap justify-between gap-4 border-t sn-rule py-6">
          <span>© 2026 Sachin Barnwal</span>
          <span>Lab: Signal / Noise direction prototype</span>
        </footer>
      </section>
    </ToneScope>
  );
}
