import type { Metadata } from "next";
import CaseHero from "@/components/case-study/CaseHero";
import CaseSection from "@/components/case-study/CaseSection";
import { Media, NextProject, PullQuote } from "@/components/case-study/blocks";

// The "first … in the Indian trading space" line is a checkable market claim
// Sachin has been asked about and has not yet decided on. It stays until he
// does; see the portfolio-unsourced-numbers memory.
export const metadata: Metadata = {
  title: "sensAI",
  description: "First AI multi-agent trading intelligence platform in the Indian trading space.",
};

export default function SensAICaseStudy() {
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

      <CaseSection index={1} label="The Problem">
        <p className="cs-lead">
          Open a trading platform and the exchange feed arrives at full speed. Prices, volumes, ratios,
          order depth, live and unranked. You want one answer out of that. Should I act on this.
        </p>
        <p className="cs-body">
          The brief said: add an AI feature to help users make better trading decisions. Which
          decision, and better than what, were left to me. I spent the first weeks of the project
          answering both before I drew anything.
        </p>
        <h3 className="sn-mono sn-muted">My Role</h3>
        <p className="cs-body">
          I owned the design from framing the problem to the interface that shipped. I sat with the
          AI/ML team for the whole build, drawing against what the models actually returned. I went to
          the model reviews, and when confidence scores came back low I reworked the screens that
          leaned on them.
        </p>
      </CaseSection>

      <Media
        src="/work-sensai-overview.webp"
        alt="sensAI — AI multi-agent trading intelligence platform"
        width={1920}
        height={1080}
      />

      <CaseSection index={2} label="The Reframe">
        <h3 className="cs-decision-title">I split it into two agents and gave them one surface.</h3>
        <p className="cs-body">The two do different jobs:</p>
        <ul className="cs-list">
          <li>
            <span className="cs-em">1. Stock Screening Agent:</span>{" "}
            <span className="cs-body">
              A trader types what they want in plain English, and skips building a technical filter.
            </span>
          </li>
          <li>
            <span className="cs-em">2. Financial Chat Agent:</span>{" "}
            <span className="cs-body">Answers market questions as they come.</span>
          </li>
        </ul>
        <p className="cs-lead">
          The AI team built the agents. I had the seam between them, which is the place a trader would
          notice they were using two things instead of one.
        </p>
      </CaseSection>

      <Media src="/work-sensai-agents.webp" alt="sensAI — Agent interface design" width={1440} height={1080} />

      <PullQuote>
        &ldquo;A multi-agent system has a seam in it. The trader hits that seam mid-question, and if I
        get it wrong they start the question over.&rdquo;
      </PullQuote>

      <CaseSection index={3} label="The Decision That Mattered">
        <p className="cs-body">
          Both agents sit behind one input. The routing happens underneath it, so a trader asks a
          follow-up without learning which agent handled the first question.
        </p>
        <p className="cs-body">
          It also put the failure states on me. I designed those with the AI/ML team: what the screen
          says when the model is unsure of an answer, and what it offers a trader when it has nothing
          to give them.
        </p>
      </CaseSection>

      <Media src="/work-sensai-entry.webp" alt="sensAI — Single entry point interface" width={1440} height={1080} />

      <CaseSection index={4} label="What Shipped">
        <p className="cs-lead">
          sensAI runs inside Shoonya, where traders use it with their own money on the line.
        </p>
        <p className="cs-body">
          A trader who cannot build a technical filter describes what they are after and gets a list
          back. The chat agent picks up the follow-up. Both sit behind the one input, and the
          low-confidence and empty states went out with the rest of it rather than after.
        </p>
        <p className="cs-body">
          Finvasia has not published usage figures for sensAI. When there are numbers I can source,
          they go here.
        </p>
      </CaseSection>

      <CaseSection index={5} label="What I Learned">
        <p className="cs-lead">
          I judged this one on whether a trader stopped noticing the AI was there.
        </p>
        <p className="cs-body">
          A trader who had never built a screener typed what they were after and got the list back.
          Afterwards they talked about the stock and not about the model, which is what the routing
          underneath the input was for.
        </p>
      </CaseSection>

      <NextProject id="sensai" />
    </>
  );
}
