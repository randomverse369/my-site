import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseHero from "@/components/case-study/CaseHero";
import CaseSection from "@/components/case-study/CaseSection";
import { Decisions, Media, NextProject, PullQuote } from "@/components/case-study/blocks";

// The "first … in the Indian trading space" line is a checkable market claim
// Sachin has been asked about and has not yet decided on. It stays until he
// does; see the portfolio-unsourced-numbers memory.
export const metadata: Metadata = {
  title: "sensAI",
  description: "First AI multi-agent trading intelligence platform in the Indian trading space.",
  robots: { index: false },
};

export default function SensAICaseStudy() {
  // Hidden for now: the project is marked `hidden` in src/lib/projects.ts.
  // Remove this line along with that flag to publish the page again.
  notFound();

  return (
    <>
      <CaseHero
        id="sensai"
        kicker="AI Product · Fintech"
        title="sensAI"
        standfirst="First AI multi-agent trading intelligence platform in the Indian trading space."
        meta={[
          { label: "Role", value: "Senior Product Designer" },
          { label: "Timeline", value: "3 Months" },
          { label: "Company", value: "Finvasia · Shoonya" },
        ]}
      />

      <CaseSection index={1} label="Overview">
        <p className="cs-lead">
          sensAI is the AI layer inside Shoonya, Finvasia&apos;s trading app. Two agents sit behind one
          input: one screens stocks from a plain English description, the other answers market
          questions.
        </p>
      </CaseSection>

      <CaseSection index={2} label="The Problem">
        <p className="cs-lead">
          Open a trading platform and the exchange feed arrives at full speed. Prices, volumes, ratios,
          order depth, live and unranked. You want one answer out of that. Should I act on this.
        </p>
        <p className="cs-body">
          The brief said: add an AI feature to help users make better trading decisions. Which
          decision, and better than what, were left to me.
        </p>
      </CaseSection>

      <Media
        src="/work-sensai-overview.webp"
        alt="sensAI — AI multi-agent trading intelligence platform"
        width={1920}
        height={1080}
      />

      <CaseSection index={3} label="Users">
        {/* TODO(sachin): anything more specific about who uses sensAI: beginners, active
            traders, F&O traders? Only what you know, not what the brief hoped for. */}
        <p className="cs-body">
          Shoonya&apos;s traders, using it with their own money on the line. The one I designed for
          first was the trader who cannot build a technical filter and knows what they are after
          anyway.
        </p>
      </CaseSection>

      <CaseSection index={4} label="My Role">
        <p className="cs-body">
          I owned the design from framing the problem to the interface that shipped. I sat with the
          AI/ML team for the whole build, drawing against what the models actually returned. I went to
          the model reviews, and when confidence scores came back low I reworked the screens that
          leaned on them. The AI team built the agents.
        </p>
      </CaseSection>

      <CaseSection index={5} label="Scope & Constraints">
        <ul className="cs-list cs-body">
          <li>Three months, from an open brief to a shipped interface.</li>
          <li>
            The brief named a feature, not a problem. Which decision, and better than what, had to be
            settled before anything was drawn.
          </li>
          <li>
            The screens depended on model output that was still changing. Confidence came back low in
            places, and the design had to hold when it did.
          </li>
        </ul>
      </CaseSection>

      <PullQuote>
        &ldquo;A multi-agent system has a seam in it. The trader hits that seam mid-question, and if I
        get it wrong they start the question over.&rdquo;
      </PullQuote>

      <CaseSection index={6} label="Process">
        <Decisions
          items={[
            {
              num: "01",
              title: "I answered the brief before I drew anything.",
              body: (
                <p className="cs-body">
                  I spent the first weeks of the project working out which decision the feature was
                  for, and better than what. That settled what the agents had to do.
                </p>
              ),
            },
            {
              num: "02",
              title: "I split it into two agents and gave them one surface.",
              body: (
                <>
                  <p className="cs-body">The two do different jobs:</p>
                  <ul className="cs-list">
                    <li>
                      <span className="cs-em">1. Stock Screening Agent:</span>{" "}
                      <span className="cs-body">
                        A trader types what they want in plain English, and skips building a technical
                        filter.
                      </span>
                    </li>
                    <li>
                      <span className="cs-em">2. Financial Chat Agent:</span>{" "}
                      <span className="cs-body">Answers market questions as they come.</span>
                    </li>
                  </ul>
                  <p className="cs-body">
                    The AI team built the agents. I had the seam between them, which is the place a
                    trader would notice they were using two things instead of one.
                  </p>
                </>
              ),
            },
            {
              num: "03",
              title: "Both agents sit behind one input.",
              body: (
                <p className="cs-body">
                  The routing happens underneath it, so a trader asks a follow-up without learning
                  which agent handled the first question.
                </p>
              ),
            },
            {
              num: "04",
              title: "I designed the failure states with the AI/ML team.",
              body: (
                <p className="cs-body">
                  One input put the failure states on me: what the screen says when the model is unsure
                  of an answer, and what it offers a trader when it has nothing to give them. They went
                  out with the rest of it rather than after.
                </p>
              ),
            },
          ]}
        />
      </CaseSection>

      <Media src="/work-sensai-agents.webp" alt="sensAI — Agent interface design" width={1440} height={1080} />

      <Media src="/work-sensai-entry.webp" alt="sensAI — Single entry point interface" width={1440} height={1080} />

      <CaseSection index={7} label="Outcomes & Lessons">
        <p className="cs-lead">
          sensAI runs inside Shoonya, where traders use it with their own money on the line.
        </p>
        <p className="cs-body">
          A trader who cannot build a technical filter describes what they are after and gets a list
          back. The chat agent picks up the follow-up. Both sit behind the one input.
        </p>
        <p className="cs-body">
          Finvasia has not published usage figures for sensAI. When there are numbers I can source,
          they go here.
        </p>
        <h3 className="cs-decision-title">What I learned</h3>
        <p className="cs-body">
          I judged this one on whether a trader stopped noticing the AI was there. A trader who had
          never built a screener typed what they were after and got the list back. Afterwards they
          talked about the stock and not about the model, which is what the routing underneath the
          input was for.
        </p>
        {/* TODO(sachin): what you would do differently with another three months. */}
      </CaseSection>

      <NextProject id="sensai" />
    </>
  );
}
