import type { Metadata } from "next";
import CaseHero from "@/components/case-study/CaseHero";
import CaseSection from "@/components/case-study/CaseSection";
import { Callout, Decisions, NextProject, PullQuote } from "@/components/case-study/blocks";

export const metadata: Metadata = {
  title: "UX Process Reboot",
  description: "How I rebuilt my UX process to align teams before I draw a single screen.",
};

// The home page's process track condenses the six stages below. Change the
// stages here first, then the track.
export default function UXProcessPage() {
  return (
    <>
      <CaseHero
        id="ux-process"
        kicker="UX Process Reboot · Process · AI"
        title="Validate First, Build Once."
        titleStyle="sentence"
        standfirst="How I rebuilt my UX process to align teams before I draw a single screen."
        meta={[
          { label: "Role", value: "Senior Product Designer" },
          { label: "Problem", value: "Weeks of production before direction testing" },
          { label: "Approach", value: "Six-stage AI-assisted workflow" },
          { label: "Result", value: "Team alignment before design starts" },
        ]}
      />

      <CaseSection index={1} label="The Problem">
        <p className="cs-body">
          Design reviews have a moment when the room goes quiet. Someone points at screen twelve and
          asks a question that should have come up in week one. The flow doesn&apos;t work for their use
          case. The team starts over.
        </p>
        <p className="cs-body">
          I sat through years of that moment. A requirement would land in Confluence, I&apos;d spend two
          weeks turning it into screens, and the first real feedback arrived after the work was done.
          Design reviews are supposed to catch what&apos;s wrong. By the time one happens, the team has
          already paid for finding it.
        </p>
        <p className="cs-body">
          The version that cost the most was Shoonya. I was new to fintech, redesigning a trading
          platform, and I would finish a flow before learning it broke a compliance rule or needed data
          no API returned. The people who knew had worked in Indian broking long enough that those rules
          no longer registered as things worth saying out loud. Nobody was hiding anything. I did not
          know what to ask, and the answer arrived as rework. This process is what I built so that
          stopped happening.
        </p>
        <Callout tone="signal">
          <p>
            Rebuilding cost more time than any other part of the job. I closed that gap. A requirement
            now becomes a walkable prototype within a day, and the team agrees on the product before I
            draw a single screen.
          </p>
        </Callout>
      </CaseSection>

      <CaseSection index={2} label="The Process (6 Stages)">
        <Decisions
          items={[
            {
              num: "01",
              label: "Stage 1",
              title: "Catching gaps before I open a design tool",
              body: (
                <p className="cs-body">
                  Every requirement starts as a Confluence page. Before I open a design tool, I run it
                  through Rovo and ask it to flag missing flows and unstated edge cases.
                </p>
              ),
              note: (
                <p>
                  I used to find these gaps in design reviews, after I&apos;d already built the screens
                  around them. A missing edge case meant redoing finished work. Rovo finds the same gaps
                  before I draw anything. Requirements read complete on paper. Rovo finds where they
                  aren&apos;t.
                </p>
              ),
            },
            {
              num: "02",
              label: "Stage 2",
              title: "Structuring the screens before designing them",
              body: (
                <p className="cs-body">
                  With the gaps closed, I feed the requirement into an AI tool that breaks it into a
                  screen-by-screen structure: what each screen contains, and how it connects to the next
                  one.
                </p>
              ),
              note: (
                <p>
                  That structure serves as the skeleton for the prototype. I don&apos;t make structural
                  decisions and visual decisions in the same sitting.
                </p>
              ),
            },
            {
              num: "03",
              label: "Stage 3",
              title: "A working prototype, same day",
              body: (
                <p className="cs-body">
                  This used to be where I got stuck. Now I take the structure into Figma Make and
                  generate a working prototype fast. It&apos;s rough. It&apos;s clickable enough that a
                  stakeholder can walk the real flow instead of reading a spec.
                </p>
              ),
              note: (
                <p>
                  Then I bring it into one meeting. Product, engineering, and business see the same flow
                  at the same time. We catch misalignment in thirty minutes instead of three weeks later
                  in a design review. Only after the team agrees do I open Figma and build the real
                  screens.
                </p>
              ),
            },
            {
              num: "04",
              label: "Stage 4",
              title: "Copy that sounds like the brand",
              body: (
                <p className="cs-body">
                  I keep a separate AI project loaded with our brand guidelines and product definition
                  docs, tone of voice included. When a screen needs UX copy, I generate it against that
                  project instead of writing from a blank page.
                </p>
              ),
              note: <p>The output already sounds like us. I check it. I don&apos;t rewrite it.</p>,
            },
            {
              num: "05",
              label: "Stage 5 & 6",
              title: "Handing the design system to Codex & Running Research Alongside",
              body: (
                <>
                  <p className="cs-body">
                    I built our design system, colors, typography, components, as structured variables,
                    and handed it to Codex. For most new screens, I point Codex at the system and get a
                    usable screen back. I decide what&apos;s right. I review and adjust the generated
                    screen instead of building it from a blank canvas.
                  </p>
                  <p className="cs-body">
                    I use AI throughout to pull research and stress-test my assumptions against it. I
                    also generate variations on a screen, so I choose between options instead of
                    defending the first idea I had.
                  </p>
                </>
              ),
              note: <p>Both tools get me to the judgment call faster. I still make it.</p>,
            },
          ]}
        />
      </CaseSection>

      <CaseSection index={3} label="The Outcome">
        <Callout>
          <p>
            I used to build for weeks and learn in a review whether I&apos;d built the right thing. Now
            alignment comes first.
          </p>
          <p className="cs-body mt-6">
            A requirement becomes a walkable prototype in a day. Stakeholders react to something real
            instead of a document, and design work starts once the team agrees on what done looks like.
            I know whether a flow works before I spend a week building it, so each screen gets built
            once.
          </p>
        </Callout>
      </CaseSection>

      <CaseSection index={4} label="What the Tools Don't Decide">
        <p className="cs-body">
          A tool cannot tell me whether a flow serves the user or whether a generated screen fits the
          system. I decide both, the same as before. What changed is timing: I decide before I build, so
          a review doesn&apos;t have to tell me I got it wrong.
        </p>
      </CaseSection>

      <PullQuote>
        &ldquo;The tools took over the production time I used to spend before I knew the direction was
        right. The decisions are still mine.&rdquo;
      </PullQuote>

      <NextProject id="ux-process" />
    </>
  );
}
