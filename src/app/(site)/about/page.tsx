import type { Metadata } from "next";
import Link from "next/link";
import ScrambleText from "@/components/signal/ScrambleText";
import SplitReveal from "@/components/signal/SplitReveal";
import WordFill from "@/components/signal/WordFill";
import { experiences } from "@/lib/experience";
import { contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Seven years of taking the hardest problem in the room. How a graphic designer at an edtech startup ended up designing AI products for traders.",
};

/*
 * The arc, one line per company, newest last: this page reads forwards because
 * it is a story, where /experience reads backwards because it is a record.
 * The dates come from lib/experience.ts so the two pages cannot drift; only
 * the reflective line lives here.
 */
const arc: { id: string; line: string }[] = [
  {
    id: "tutelage",
    line: "The only designer in the building. I learned to ask what a screen was supposed to sell before I designed it.",
  },
  {
    id: "tier5",
    line: "I built Friender's design system from scratch. Most of what mattered happened before anyone opened Figma.",
  },
  {
    id: "digimantra",
    line: "Enterprise platforms, where briefs arrived half-written. I spent the first week of a project working out what the client was asking for.",
  },
  {
    id: "finvasia",
    line: "First designer in the building, again. This time on AI products for traders moving their own money, in a domain where half the constraints are regulatory and nobody thinks to tell you.",
  },
];

const byId = new Map(experiences.map((role) => [role.id, role]));

const beliefs = [
  {
    title: "AI is a thinking partner",
    body: "I use it to argue with my first idea. It gives me the three alternatives I would have skipped.",
  },
  {
    title: "Clarity is the job",
    body: "I don't open a design tool until I can state the problem in a sentence. The work I've thrown away was work I started too early.",
  },
  {
    title: "Build to learn",
    body: "I built UXMantra to find out how an AI product behaves when I own every decision inside it.",
  },
];

const currently = [
  {
    label: "Working at",
    value: "Finvasia — Senior Product Designer. Building sensAI and Jumpp.",
  },
  { label: "Building", value: "UXMantra. AI-powered UX research assistant. In development." },
  {
    label: "Interested in",
    value: "AI behaviour design, system prompt design, conversation design, AI red teaming.",
  },
  { label: "Open to", value: "Senior design roles at AI-focused companies and labs." },
];

/*
 * One tone change per page (MASTER.md §2): dark all the way down, and the
 * footer is the light turn on the way out.
 */
export default function About() {
  return (
    <>
      <header data-tone="dark" className="sn-gutter pb-[10vh]">
        <p className="sn-mono sn-muted">
          <ScrambleText text="About" delay={0.2} />
        </p>
        <SplitReveal as="h1" onScroll={false} waitForIntro className="sn-title mt-8 max-w-[15ch]">
          I kept taking the hardest problem in the <em className="sn-serif">room</em>.
        </SplitReveal>
        <div className="mt-12 grid grid-cols-12 gap-x-6 gap-y-8 md:mt-16">
          <p className="cs-standfirst col-span-12 lg:col-span-7">
            Seven years of that led me to design and AI.
          </p>
          <div className="cs-flow col-span-12 lg:col-span-5 lg:self-end">
            <p className="cs-body">
              I started as a graphic designer at a small edtech startup. Me, a CEO who thought in
              revenue, and a queue of things that had to look good and work. I moved into UX chasing
              the second half of that.
            </p>
            <p className="cs-body">
              In UX I started using AI to push my own thinking rather than skip it. Seven years in, I
              design products that reason with the person using them.
            </p>
          </div>
        </div>
      </header>

      <section data-tone="dark" aria-labelledby="arc-heading" className="sn-gutter border-t sn-rule py-[14vh]">
        <div className="grid grid-cols-12 gap-x-6 gap-y-10">
          <h2 id="arc-heading" className="col-span-12 lg:col-span-3">
            <ScrambleText onScroll className="sn-mono sn-muted" text="(01) How I got here" />
          </h2>

          <ol className="col-span-12 lg:col-span-9">
            {arc.map(({ id, line }) => {
              const role = byId.get(id);
              return (
                <li
                  key={id}
                  className="grid grid-cols-12 gap-x-6 gap-y-3 border-t sn-rule py-8 first:border-t-0 first:pt-0 md:py-10"
                >
                  <p className="sn-mono sn-muted col-span-12 md:col-span-3">{role?.year}</p>
                  <div className="col-span-12 md:col-span-9">
                    <h3 className="sn-mono">{role?.company}</h3>
                    <p className="sn-lead sn-muted mt-3 max-w-[52ch]">{line}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section data-tone="dark" aria-labelledby="believe-heading" className="sn-gutter border-t sn-rule py-[14vh]">
        <div className="grid grid-cols-12 gap-x-6 gap-y-12">
          <h2 id="believe-heading" className="col-span-12 lg:col-span-3">
            <ScrambleText onScroll className="sn-mono sn-muted" text="(02) What I believe" />
          </h2>

          <div className="col-span-12 lg:col-span-9">
            <WordFill className="sn-statement max-w-[20ch]">
              The work I threw away was work I started too <em className="sn-serif">early</em>.
            </WordFill>

            <ul className="mt-16 grid grid-cols-12 gap-x-6 gap-y-10 md:mt-20">
              {beliefs.map((belief) => (
                <li key={belief.title} className="col-span-12 flex flex-col gap-4 md:col-span-4">
                  <span aria-hidden="true" className="block h-[2px] w-6 bg-signal" />
                  <h3 className="sn-lead">{belief.title}</h3>
                  <p className="cs-body">{belief.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section data-tone="dark" aria-labelledby="currently-heading" className="sn-gutter border-t sn-rule py-[14vh]">
        <div className="grid grid-cols-12 gap-x-6 gap-y-10">
          <h2 id="currently-heading" className="col-span-12 lg:col-span-3">
            <ScrambleText onScroll className="sn-mono sn-muted" text="(03) Currently" />
          </h2>

          <dl className="col-span-12 lg:col-span-9">
            {currently.map((item) => (
              <div
                key={item.label}
                className="grid grid-cols-12 gap-x-6 gap-y-2 border-t sn-rule py-6 first:border-t-0 first:pt-0"
              >
                <dt className="sn-mono sn-muted col-span-12 md:col-span-3">{item.label}</dt>
                <dd className="sn-lead col-span-12 md:col-span-9">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section data-tone="dark" aria-labelledby="beyond-heading" className="sn-gutter border-t sn-rule py-[14vh]">
        <div className="grid grid-cols-12 gap-x-6 gap-y-10">
          <h2 id="beyond-heading" className="col-span-12 lg:col-span-3">
            <ScrambleText onScroll className="sn-mono sn-muted" text="(04) Beyond the work" />
          </h2>

          <div className="cs-flow col-span-12 max-w-[60ch] lg:col-span-9">
            <p className="cs-lead">
              I spend as much time on how an AI should behave as on how it looks.
            </p>
            <p className="cs-body">
              That took me into behaviour design, system prompt design, and the problem of what a
              good AI interaction feels like to sit through.
            </p>
            <p className="cs-body">
              I write about it on{" "}
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="cs-link"
              >
                LinkedIn
              </a>{" "}
              and build experiments on weekends. I also use Claude to pressure-test the same ideas
              I&apos;m designing around, which I&apos;ve stopped finding strange.
            </p>

            <div className="flex flex-wrap gap-3 pt-6">
              <Link href="/experience" data-cursor="Record" className="sn-pill sn-mono">
                The full record <span aria-hidden="true">→</span>
              </Link>
              <Link href="/works" data-cursor="Index" className="sn-pill sn-mono">
                All work <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
