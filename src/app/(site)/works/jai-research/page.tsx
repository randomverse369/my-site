import type { Metadata } from "next";
import CaseHero from "@/components/case-study/CaseHero";
import CaseSection from "@/components/case-study/CaseSection";
import { Callout, Cards, Decisions, NextProject } from "@/components/case-study/blocks";

export const metadata: Metadata = {
  title: "jAI Research Sprint",
  description: "UX Research case study on introducing AI to financial insights.",
};

export default function JAIResearchPage() {
  return (
    <>
      <CaseHero
        id="jai-research"
        kicker="jAI Research Sprint · UX Research · Fintech"
        title="Designing a clearer path to trusted financial insights."
        titleStyle="sentence"
        standfirst="A one-week sprint that found users treating the screen as a spending tracker while the product led with AI."
        meta={[
          { label: "Role", value: "Product Designer" },
          { label: "Timeline", value: "1 Week Sprint" },
          { label: "Product", value: "jAI (within Jumpp)" },
          { label: "Focus", value: "UX Research, Strategy, Interaction Design" },
        ]}
      />

      <CaseSection index={1} label="Overview">
        <p className="cs-body">
          jAI is an AI-powered financial assistant within the Jumpp app. The landing screen was
          intended to introduce users to personalized financial insights and encourage them to connect
          their bank account.
        </p>
        <p className="cs-body">
          I got the opportunity to conduct UX research with real users, but we had a limited window and
          no dedicated research setup. Instead of waiting for the “perfect” study, we used the resources
          available to us: the existing screen, lightweight Google Forms, and a shared findings sheet.
        </p>
        <Callout>
          <p>
            &ldquo;We wanted a fast, honest signal on what users noticed, what they understood, and what
            made them hesitate. Statistical significance was out of reach in a week.&rdquo;
          </p>
        </Callout>
      </CaseSection>

      <CaseSection index={2} label="The Challenge">
        <p className="cs-body">
          The landing screen had to introduce a new AI interaction without undermining the familiar
          financial tools users already trusted, such as Spends and Budget.
        </p>
        <Callout tone="signal">
          <p>
            How might we make the route to personalized insight obvious and compelling while giving
            users enough transparency and control to make an informed account-linking decision?
          </p>
        </Callout>
      </CaseSection>

      <CaseSection index={3} label="Working within constraints">
        <p className="cs-body">
          We had a short window to learn from real users while the product was still moving, and no
          research program to run it through.
        </p>
        <Cards
          items={[
            {
              title: "Constraints",
              body: (
                <ul className="cs-list">
                  <li>Limited time to recruit, test, and synthesize.</li>
                  <li>No dedicated usability-research platform.</li>
                  <li>A small, available participant pool (25 users).</li>
                  <li>No time to build a fully instrumented prototype.</li>
                </ul>
              ),
            },
            {
              title: "What we did instead",
              body: (
                <p>
                  We used the existing jAI screen, created lightweight forms, asked first-impression
                  questions, and consolidated the responses into a shared report. We treated the output
                  as signals and hypotheses to validate later, not a verdict.
                </p>
              ),
            },
          ]}
        />
      </CaseSection>

      <CaseSection index={4} label="What we learned">
        <Decisions
          items={[
            {
              num: "01",
              label: "Finding 01",
              title: "Users approached the screen as a tracker first.",
              body: (
                <p className="cs-body">
                  Spends and Budget were the dominant first actions (76%). Only a small number of
                  participants said they would interact directly with jAI.
                </p>
              ),
              noteLabel: "Design Implication",
              note: (
                <p>
                  jAI should complement the tracker mental model instead of competing with it. The
                  experience needs to explain when jAI is useful after or alongside Spends, Budget, and
                  Goals.
                </p>
              ),
            },
            {
              num: "02",
              label: "Finding 02",
              title: "The screen caught attention without orienting anyone.",
              body: (
                <p className="cs-body">
                  The jAI animation and &quot;Explore&quot; were the most visible elements. Motion
                  attracts the eye without explaining what jAI can do or what the user gets from it.
                </p>
              ),
              noteLabel: "Design Implication",
              note: (
                <p>
                  Retain motion only as a supporting brand or feedback element. Pair it with a concise
                  value statement, example prompt, or visible insight outcome.
                </p>
              ),
            },
            {
              num: "03",
              label: "Finding 03",
              title: "The path to personalized insight was ambiguous.",
              body: (
                <p className="cs-body">
                  Users saw the CTA. They had no mental model of the sequence behind it: discover jAI,
                  understand what it can reveal, preview the type of insight, and connect data to
                  personalize that insight.
                </p>
              ),
              noteLabel: "Design Implication",
              note: (
                <p>
                  The interface needs a visible value path alongside the AI presence. A user should be
                  able to say what they will get before we ask them to link data.
                </p>
              ),
            },
            {
              num: "04",
              label: "Finding 04",
              title: "Linking comprehension was stronger than linking confidence.",
              body: (
                <p className="cs-body">
                  Participants understood the likely outcome (account linking), but comfort stayed
                  moderate. Understanding the outcome did not make them confident about it.
                </p>
              ),
              noteLabel: "Design Implication",
              note: (
                <p>
                  Improving the explanation of the linking outcome is necessary but insufficient. The
                  flow must communicate data boundaries, user control, and the practical benefit of
                  linking.
                </p>
              ),
            },
            {
              num: "05",
              label: "Finding 05 & 06",
              title: <>Trust signals matter, and digital comfort doesn&apos;t remove the need for oversight.</>,
              body: (
                <p className="cs-body">
                  Security, privacy, data misuse, and trust in AI were recurring concerns. Trust signals
                  were most useful when they answered a specific concern about data access or control
                  right at the decision point. Even digitally confident users required visibility and
                  explanation.
                </p>
              ),
            },
          ]}
        />
      </CaseSection>

      <CaseSection index={5} label="Synthesis & Opportunities">
        <div className="overflow-x-auto">
          <table className="cs-table">
            <thead>
              <tr>
                <th scope="col">User Expectation</th>
                <th scope="col">Product Tension</th>
                <th scope="col">Opportunity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>&quot;Let me inspect my money.&quot;</td>
                <td>jAI competes with familiar tracker actions.</td>
                <td>Position jAI as the interpretation layer on top of tracking.</td>
              </tr>
              <tr>
                <td>&quot;Show me what I&apos;ll get.&quot;</td>
                <td>The personalized-insight path is unclear.</td>
                <td>Add a concrete preview and explicit next step.</td>
              </tr>
              <tr>
                <td>&quot;Keep my data under my control.&quot;</td>
                <td>Linking is understood but emotionally risky.</td>
                <td>Explain access, boundaries, account scope, and control at the decision point.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <Callout label="Resulting Design Principle">
          <p>Make the value visible before making the data request.</p>
        </Callout>
      </CaseSection>

      <CaseSection index={6} label="Proposed Design Response">
        <Cards
          items={[
            {
              num: "1",
              title: "Create three clear entry points",
              body: (
                <p>
                  Support the mental models already present on the screen: Track (Spends/Budget), Plan
                  (Goals), and Understand (jAI insights).
                </p>
              ),
            },
            {
              num: "2",
              title: "Concrete value path for CTA",
              body: (
                <p>
                  Communicate the outcome (&quot;Get personalized insights&quot;), answering what kind
                  of insight, why data is needed, and what happens next.
                </p>
              ),
            },
            {
              num: "3",
              title: "No-commitment sample insight",
              body: (
                <p>
                  Use Sample Data View or an example insight to demonstrate value before requesting
                  access. Distinguish it from standard trackers.
                </p>
              ),
            },
            {
              num: "4",
              title: "Design linking around control",
              body: (
                <p>
                  Explain only accurate capabilities at the decision moment. Clarify why linking is
                  needed, what is accessed, and how to revoke it.
                </p>
              ),
            },
            {
              num: "5",
              title: "Animation as support, not explanation",
              wide: true,
              body: (
                <p>
                  Keep animation if it contributes to personality, but provide stronger orientation cues
                  through copy and clear hierarchy.
                </p>
              ),
            },
          ]}
        />
      </CaseSection>

      <CaseSection index={7} label="What the research changed">
        <p className="cs-body">
          Going in, I would have made jAI more prominent and called it solved. Participants showed me
          they already had a way to start, and that jAI had to earn both its usefulness and their trust
          before they would link an account.
        </p>
        <Callout label="Focused Design Hypothesis" tone="signal">
          <p>
            &ldquo;Do not force an AI-first behavior. Make jAI the clearest next step when users want
            interpretation, and make the value visible before asking for financial data.&rdquo;
          </p>
        </Callout>
        <h3 className="cs-decision-title">Reflection &amp; Limitations</h3>
        <p className="cs-body">
          The study moved the problem from discoverability to trust and mental models. It has clear
          limits:
        </p>
        <ul className="cs-list cs-body">
          <li>We need to observe participants complete real tasks rather than only reporting intent.</li>
          <li>The complete linking flow must be tested with a safe prototype.</li>
          <li>
            Future rounds should standardize question wording, preserve respondent-level data, and test
            the same instrument across all variants.
          </li>
        </ul>
      </CaseSection>

      <NextProject id="jai-research" />
    </>
  );
}
