import type { Metadata } from "next";
import Link from "next/link";
import CaseHero from "@/components/case-study/CaseHero";
import CaseSection from "@/components/case-study/CaseSection";
import { Decisions, FactGrid, Media, NextProject, PullQuote } from "@/components/case-study/blocks";

export const metadata: Metadata = {
  title: "Shoonya",
  description:
    "A redesign of Finvasia's retail trading platform across web and mobile, designed so a trader reads their position before they scroll. In development.",
};

// Every specific here was read off the design exports in /public. The
// redesign has not shipped: keep the present tense and add no outcome numbers
// until Finvasia has figures Sachin can source.
export default function ShoonyaCaseStudy() {
  return (
    <>
      <CaseHero
        id="shoonya"
        kicker="Product Redesign · Fintech"
        title="Shoonya"
        standfirst={
          <>
            A redesign of Finvasia&apos;s retail trading platform, web and mobile, designed so a trader
            reads their position before they scroll.
          </>
        }
        meta={[
          { label: "Role", value: "Senior Product Designer" },
          { label: "Company", value: "Finvasia" },
          { label: "Dates", value: "May 2025 — Present" },
          { label: "Status", value: "In development" },
          { label: "Surface", value: "Desktop web and phone, iOS and Android" },
          { label: "Scope", value: "Navigation, dashboard, watchlist, portfolio" },
        ]}
      />

      <CaseSection index={1} label="The Product">
        <p className="cs-lead">
          Shoonya is Finvasia&apos;s retail trading platform. A trader funds one account and works
          stocks and derivatives on NSE and BSE from it, applies to IPOs, holds mutual funds, and
          tracks all of it from the same balance. The web build runs at trade.shoonya.com. The phone
          apps carry the same account.
        </p>
        <p className="cs-body">
          Shoonya charges a flat ₹5 an order, where most Indian brokers take ₹20. At that price
          Finvasia earns on volume and on traders who keep coming back, which puts the interface on the
          hook for both.
        </p>
      </CaseSection>

      <CaseSection index={2} label="The Problem">
        <p className="cs-lead">A trader could do anything on Shoonya, once they knew where it was.</p>
        <p className="cs-body">
          Years of additions had flattened the hierarchy. Panels landed on the screen in the order
          teams shipped them, each one drawn at the same weight, so nothing told a trader where to look
          first. Navigation rewarded memory. Routine actions sat four taps down.
        </p>
        <p className="cs-body">
          One question ran underneath all of it: how is my money doing right now. Answering it meant
          reading three separate parts of the screen and doing the arithmetic in your head.
        </p>
        <p className="cs-body">
          The product team moved through the old interface without friction, which is part of how it
          got that way.
        </p>
      </CaseSection>

      <CaseSection index={3} label="How I Know">
        <p className="cs-lead">
          Finvasia had no research function, so I went to customer support and asked them to line up
          the traders already calling in. Nine of them, spread across cities, account sizes, and
          trading styles, from someone placing a few trades a month to someone working the market all
          day.
        </p>
        <p className="cs-body">
          I wrote the questionnaire around what they did on an ordinary morning rather than what they
          thought of the product. The same split came back from almost every one of them. The trading
          API was fast, and they volunteered that before I asked. The interface around it cost them
          time.
        </p>
        <p className="cs-body">
          The professional traders were specific about where. More than one asked for several things
          on screen at once, because their work is holding two positions in view rather than reading
          one. They counted the steps to actions they take fifty times a day. They described moving
          around by memory, which is what people say about a layout they have given up on reading.
        </p>
        <p className="cs-body">
          Those interviews became the personas, and the personas became the brief. Against it I ran a
          teardown of five competitors, Dhan, 5paisa, Groww, Zerodha, and Angel One, to find where the
          category had already settled a question and where it had left one open. Then I built the
          design system. Finvasia had a new brand guideline and a starter UI kit, which is not enough
          to draw a trading platform on. I built it alone in three weeks, and every screen below came
          out of it.
        </p>
      </CaseSection>

      <Media
        src="/s1.svg"
        alt="Shoonya web dashboard: left navigation rail, watchlist column, portfolio summary and market analytics"
        width={1920}
        height={1080}
        caption="Web dashboard. Watchlist holds its own column; the portfolio summary opens the reading order."
      />

      <PullQuote>
        &ldquo;A trader opens the app at 9:15 with one question about money. I had to answer it before
        they scroll.&rdquo;
      </PullQuote>

      <CaseSection index={4} label="What I Designed">
        <Decisions
          items={[
            {
              num: "01",
              title: "The portfolio summary opens the dashboard.",
              body: (
                <>
                  <p className="cs-body">
                    One card, four figures: Current Amount, Invested Amount, Total P&amp;L, and
                    Day&apos;s P&amp;L, each carrying its move beside it in green or red.
                  </p>
                  <p className="cs-body">
                    A trader&apos;s first question at open is whether the position moved and by how
                    much. Total and Day sit side by side because a portfolio up 5.3% overall can be down
                    0.8% today, and reading one without the other gives a trader half the picture to
                    act on.
                  </p>
                </>
              ),
            },
            {
              num: "02",
              title: "Funds sit next to the portfolio, with the actions inside the card.",
              body: (
                <>
                  <p className="cs-body">
                    The Funds card holds Available Funds, Available Margin, and Utilised Margin, and
                    carries <span className="cs-em">Withdraw</span> and{" "}
                    <span className="cs-em">Add Funds</span> as buttons on its own face.
                  </p>
                  <p className="cs-body">
                    The second question is what a trader can do next, and margin answers it. Keeping
                    funds a screen away meant leaving the dashboard to find out whether a trade was
                    affordable, then coming back to place it. Both buttons end that errand where it
                    starts.
                  </p>
                </>
              ),
            },
            {
              num: "03",
              title: "The trader picks which dashboard opens.",
              body: (
                <>
                  <p className="cs-body">
                    A <span className="cs-em">Select Default Dashboard</span> control sits at the top
                    right, above the summary cards.
                  </p>
                  <p className="cs-body">
                    An intraday F&amp;O trader and someone holding mutual funds for a decade want
                    different first screens, and I could not win that argument by picking one of them.
                    The control also leaves traders who built a habit on the old layout a way to keep
                    it, which took the heat out of the review on the rest of the redesign.
                  </p>
                </>
              ),
            },
            {
              num: "04",
              title: "The watchlist keeps its own column.",
              body: (
                <>
                  <p className="cs-body">
                    Left of the dashboard: search, numbered lists, named groups that collapse, drag
                    handles for reordering, and a view switch for list, grid, or chart. Group 1 shows
                    six stocks open while Group 2 stays closed at three.
                  </p>
                  <p className="cs-body">
                    A watchlist is a working surface. Traders build groups the way they think about the
                    market, and someone watching IRFC while reading their P&amp;L should not have to
                    choose between the two. As a column it stays in view; as a tab it would have cost a
                    switch every time.
                  </p>
                </>
              ),
            },
            {
              num: "05",
              title: "Web carries seven destinations. The phone carries four.",
              body: (
                <>
                  <p className="cs-body">
                    On web, a left rail holds Home, Market, MF, IPO, IKF, Portfolio, and Sens AI, with a
                    top row for Dashboard, Order, Position, Holdings, Screener, and Alert. Both mark
                    where you are. On the phone, the bottom bar holds Market, Watchlist, Mutual Funds,
                    and Portfolio, and Stocks, FnO, and IPO become tabs inside Market.
                  </p>
                  <p className="cs-body">
                    I designed the phone first because it forces the ranking. Two things cannot both be
                    first on a phone screen, so the cuts happen while the argument is still cheap. Web
                    inherited that ranking and spent its extra room on depth rather than on more
                    entries.
                  </p>
                </>
              ),
            },
            {
              num: "06",
              title: "Market data sits behind filters instead of stacking.",
              body: (
                <>
                  <p className="cs-body">
                    Market Analytics is a single block with a row of chips: Top Gainers, Top Losers,
                    Volume Shockers, 52 Week High, 52 Week Low. Below it, Today&apos;s Top Nifty Stocks
                    tags each row Positive, Negative, or Neutral.
                  </p>
                  <p className="cs-body">
                    Each of those lists wanted a section of its own, and five sections would have pushed
                    the portfolio off the first screen. The trader picks the list, and the block stays
                    one block deep. Sentiment rides as a tag on the row so the list survives a scan.
                  </p>
                </>
              ),
            },
          ]}
        />
      </CaseSection>

      <Media
        src="/work2.svg"
        alt="Shoonya dashboard detail: portfolio summary card beside the funds card, with market analytics filters below"
        width={480}
        height={360}
        caption={<>Portfolio and Funds, side by side. Total P&amp;L and Day&apos;s P&amp;L read together.</>}
      />
      <Media
        src="/s2.svg"
        alt="Shoonya phone app in dark and light themes: market tabs, collections, sector grid and stock events"
        width={1440}
        height={1080}
        caption="Phone, dark and light. Four destinations in the bottom bar, everything else earns a tab."
      />

      <CaseSection index={5} label="Coverage">
        <p className="cs-body">
          I drew both platforms and the parts underneath them: the index strip, symbol rows, group
          headers, filter chips, sentiment tags, and the summary cards. The phone app is drawn in dark
          and light, since a trader who keeps it open from 9:15 to close wants one and a trader reading
          it at night wants the other.
        </p>
        <p className="cs-body">
          I drew all of it with realistic market data instead of placeholders. Density is where
          fintech screens fail, and a layout that holds six symbols can come apart at sixty. Numbers
          that behave like real ones put that problem in the review, where the team could argue about
          it, rather than in the build.
        </p>
        <FactGrid
          items={[
            "Dashboard",
            "Watchlist",
            "Portfolio & Holdings",
            "Orders & Positions",
            "Market & Sectors",
            "IPO & Mutual Funds",
          ]}
        />
        <p className="cs-lead">
          Sens AI sits in the web rail as a destination of its own. That one grew past a nav item and
          became a separate project,{" "}
          <Link href="/works/sensai" className="cs-link">
            written up here
          </Link>
          .
        </p>
      </CaseSection>

      <CaseSection index={6} label="What Made It Hard">
        <p className="cs-lead">
          For the first stretch I designed things that could not be built, and found out after I had
          drawn them.
        </p>
        <p className="cs-body">
          The reasons varied. A flow broke a compliance rule I had not been told about. A screen needed
          data no API returned. Something was possible in principle and not inside the timeline. None
          of it reached me until the design was finished, so it landed as rework, and handoff turned
          into an argument about what was actually going to get built.
        </p>
        <p className="cs-body">
          Nobody was withholding any of it. The constraints lived in the heads of the business analysts
          and the engineers, who had worked in Indian broking long enough that the rules had stopped
          registering as rules. I was new to fintech and did not know what to ask.
        </p>
        <p className="cs-body">
          So I moved the conversation earlier. Before Figma, I build a rough prototype with AI, rough
          but clickable, and put it in front of the BAs, QA, engineering, and the stakeholders at the
          same time. They wanted to see something early anyway. A prototype pulls a compliance
          objection out of someone in the first ten minutes, where a written spec gets agreement in the
          room and a correction three weeks later.
        </p>
        <p className="cs-body">
          I also changed the question. Asking whether a feature can be built gets a yes or a no. Asking
          why the team wants it gets the rule sitting behind the answer.
        </p>
        <p className="cs-body">
          The design team opens Figma once the room agrees, and the design system carries it from
          there. The prototype is not the design. It is what makes the design worth drawing. That
          process outgrew this project and is{" "}
          <Link href="/works/ux-process" className="cs-link">
            written up separately
          </Link>
          .
        </p>
      </CaseSection>

      <CaseSection index={7} label="What I Learned">
        <p className="cs-lead">Redesigns run harder than 0 to 1 work.</p>
        <p className="cs-body">
          On a new product I set the constraints. Here I inherited traders who have learned where
          everything lives and will notice the morning I move it. That inheritance is why the default
          dashboard control exists, and why the watchlist keeps the groups people have already built.
        </p>
        <p className="cs-body">
          I removed more than I added. Every element that survived had to justify sitting in front of a
          trader&apos;s money, and a few of the ones I cut had people in the building attached to them.
        </p>
        <p className="cs-body">
          The build is still running. None of this has met a live market yet, so the page carries
          decisions and the reasons behind them and no outcome numbers. I will add those once the
          redesign is out and Finvasia has figures I can source.
        </p>
      </CaseSection>

      <NextProject id="shoonya" />
    </>
  );
}
