import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shoonya",
  description:
    "A redesign of Finvasia's retail trading platform across web and mobile, designed so a trader reads their position before they scroll. In development.",
};

export default function ShoonyaCaseStudy() {
  return (
    <div className="container-page mb-32">

      {/* Back Navigation */}
      <div className="pt-8 mb-16">
        <Link
          href="/works"
          className="text-label font-mono uppercase tracking-wider text-metadata interactive hover:text-accent flex items-center gap-2"
        >
          <span className="text-accent">←</span> Back to Works
        </Link>
      </div>

      {/* Case Study Header */}
      <div className="grid grid-cols-12 gap-6 mb-32">
        <div className="col-span-12 md:col-span-10 lg:col-span-9">
          <p className="text-label uppercase tracking-wider font-mono text-metadata mb-8">
            PRODUCT REDESIGN · FINTECH
          </p>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tight leading-[0.9] text-foreground mb-12">
            Shoonya
          </h1>
          <p className="text-2xl md:text-3xl text-foreground font-light tracking-tight leading-snug mb-16">
            A redesign of Finvasia&apos;s retail trading platform, web and mobile, designed so a
            trader reads their position before they scroll.
          </p>

          {/* Metadata Bar */}
          <div className="flex flex-col md:flex-row md:flex-wrap gap-8 md:gap-16 border-t border-metadata/20 pt-8">
            <div className="flex flex-col gap-2">
              <span className="text-label font-mono uppercase tracking-wider text-metadata">Role</span>
              <span className="text-foreground font-light">Senior Product Designer</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-label font-mono uppercase tracking-wider text-metadata">Company</span>
              <span className="text-foreground font-light">Finvasia</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-label font-mono uppercase tracking-wider text-metadata">Dates</span>
              <span className="text-foreground font-light">May 2025 — Present</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-label font-mono uppercase tracking-wider text-metadata">Status</span>
              <span className="text-foreground font-light">In development</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-label font-mono uppercase tracking-wider text-metadata">Surface</span>
              <span className="text-foreground font-light">Desktop web and phone, iOS and Android</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-label font-mono uppercase tracking-wider text-metadata">Scope</span>
              <span className="text-foreground font-light">Navigation, dashboard, watchlist, portfolio</span>
            </div>
          </div>
        </div>
      </div>

      {/* The Product */}
      <div className="grid grid-cols-12 gap-6 border-t border-metadata/20 pt-24 mb-32">
        <div className="col-span-12 md:col-span-4 mb-12 md:mb-0">
          <h2 className="text-label font-mono uppercase tracking-wider text-metadata sticky top-32">
            The Product
          </h2>
        </div>
        <div className="col-span-12 md:col-span-8 lg:col-span-7 border-l-0 md:border-l border-metadata/20 pl-0 md:pl-8">
          <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8">
            Shoonya is Finvasia&apos;s retail trading platform. A trader funds one account and works
            stocks and derivatives on NSE and BSE from it, applies to IPOs, holds mutual funds, and
            tracks all of it from the same balance. The web build runs at trade.shoonya.com. The
            phone apps carry the same account.
          </p>
          <p className="text-lg text-metadata leading-relaxed">
            Shoonya charges a flat ₹5 an order, where most Indian brokers take ₹20. At that price
            Finvasia earns on volume and on traders who keep coming back, which puts the interface
            on the hook for both.
          </p>
        </div>
      </div>

      {/* The Problem */}
      <div className="grid grid-cols-12 gap-6 border-t border-metadata/20 pt-24 mb-32">
        <div className="col-span-12 md:col-span-4 mb-12 md:mb-0">
          <h2 className="text-label font-mono uppercase tracking-wider text-metadata sticky top-32">
            The Problem
          </h2>
        </div>
        <div className="col-span-12 md:col-span-8 lg:col-span-7 border-l-0 md:border-l border-metadata/20 pl-0 md:pl-8">
          <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8">
            A trader could do anything on Shoonya, once they knew where it was.
          </p>
          <p className="text-lg text-metadata leading-relaxed mb-8">
            Years of additions had flattened the hierarchy. Panels landed on the screen in the order
            teams shipped them, each one drawn at the same weight, so nothing told a trader where to
            look first. Navigation rewarded memory. Routine actions sat four taps down.
          </p>
          <p className="text-lg text-metadata leading-relaxed mb-8">
            One question ran underneath all of it: how is my money doing right now. Answering it
            meant reading three separate parts of the screen and doing the arithmetic in your head.
          </p>
          <p className="text-lg text-metadata leading-relaxed">
            The product team moved through the old interface without friction, which is part of how
            it got that way.
          </p>
        </div>
      </div>

      {/* How I Know */}
      <div className="grid grid-cols-12 gap-6 border-t border-metadata/20 pt-24 mb-32">
        <div className="col-span-12 md:col-span-4 mb-12 md:mb-0">
          <h2 className="text-label font-mono uppercase tracking-wider text-metadata sticky top-32">
            How I Know
          </h2>
        </div>
        <div className="col-span-12 md:col-span-8 lg:col-span-7 border-l-0 md:border-l border-metadata/20 pl-0 md:pl-8">
          <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8">
            Finvasia had no research function, so I went to customer support and asked them to line
            up the traders already calling in. Nine of them, spread across cities, account sizes, and
            trading styles, from someone placing a few trades a month to someone working the market
            all day.
          </p>
          <p className="text-lg text-metadata leading-relaxed mb-8">
            I wrote the questionnaire around what they did on an ordinary morning rather than what
            they thought of the product. The same split came back from almost every one of them. The
            trading API was fast, and they volunteered that before I asked. The interface around it
            cost them time.
          </p>
          <p className="text-lg text-metadata leading-relaxed mb-8">
            The professional traders were specific about where. More than one asked for several
            things on screen at once, because their work is holding two positions in view rather
            than reading one. They counted the steps to actions they take fifty times a day. They
            described moving around by memory, which is what people say about a layout they have
            given up on reading.
          </p>
          <p className="text-lg text-metadata leading-relaxed">
            Those interviews became the personas, and the personas became the brief. Against it I
            ran a teardown of five competitors, Dhan, 5paisa, Groww, Zerodha, and Angel One, to find
            where the category had already settled a question and where it had left one open. Then I
            built the design system. Finvasia had a new brand guideline and a starter UI kit, which
            is not enough to draw a trading platform on. I built it alone in three weeks, and every
            screen below came out of it.
          </p>
        </div>
      </div>

      {/* Full-bleed Image — web dashboard */}
      <figure className="grid grid-cols-12 gap-6 my-32">
        <div className="col-span-12">
          <Image
            src="/s1.svg"
            alt="Shoonya web dashboard: left navigation rail, watchlist column, portfolio summary and market analytics"
            width={1920}
            height={1080}
            className="w-full h-auto"
            priority
          />
          <figcaption className="text-label font-mono uppercase tracking-wider text-metadata mt-6">
            Web dashboard. Watchlist holds its own column; the portfolio summary opens the reading order.
          </figcaption>
        </div>
      </figure>

      {/* Oversized Pull Quote */}
      <div className="grid grid-cols-12 gap-6 my-48">
        <div className="col-span-12 md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3">
          <blockquote className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] text-foreground border-l-4 border-accent pl-8 md:pl-12">
            &quot;A trader opens the app at 9:15 with one question about money. I had to answer it
            before they scroll.&quot;
          </blockquote>
        </div>
      </div>

      {/* What I Designed */}
      <div className="grid grid-cols-12 gap-6 border-t border-metadata/20 pt-24 mb-32">
        <div className="col-span-12 md:col-span-4 mb-12 md:mb-0">
          <h2 className="text-label font-mono uppercase tracking-wider text-metadata sticky top-32">
            What I Designed
          </h2>
        </div>
        <div className="col-span-12 md:col-span-8 lg:col-span-7 border-l-0 md:border-l border-metadata/20 pl-0 md:pl-8">

          {/* Six decisions. Decision first, reason second — the reason is the
              part a reader can argue with. */}
          <ol className="flex flex-col gap-20">

            <li>
              <span className="text-label font-mono uppercase tracking-wider text-accent mb-4 block">
                01
              </span>
              <h3 className="text-3xl md:text-4xl font-light tracking-tight text-foreground mb-6">
                The portfolio summary opens the dashboard.
              </h3>
              <p className="text-lg text-metadata leading-relaxed mb-6">
                One card, four figures: Current Amount, Invested Amount, Total P&amp;L, and Day&apos;s
                P&amp;L, each carrying its move beside it in green or red.
              </p>
              <p className="text-lg text-metadata leading-relaxed">
                A trader&apos;s first question at open is whether the position moved and by how much.
                Total and Day sit side by side because a portfolio up 5.3% overall can be down 0.8%
                today, and reading one without the other gives a trader half the picture to act on.
              </p>
            </li>

            <li>
              <span className="text-label font-mono uppercase tracking-wider text-accent mb-4 block">
                02
              </span>
              <h3 className="text-3xl md:text-4xl font-light tracking-tight text-foreground mb-6">
                Funds sit next to the portfolio, with the actions inside the card.
              </h3>
              <p className="text-lg text-metadata leading-relaxed mb-6">
                The Funds card holds Available Funds, Available Margin, and Utilised Margin, and
                carries <span className="text-foreground">Withdraw</span> and{" "}
                <span className="text-foreground">Add Funds</span> as buttons on its own face.
              </p>
              <p className="text-lg text-metadata leading-relaxed">
                The second question is what a trader can do next, and margin answers it. Keeping
                funds a screen away meant leaving the dashboard to find out whether a trade was
                affordable, then coming back to place it. Both buttons end that errand where it
                starts.
              </p>
            </li>

            <li>
              <span className="text-label font-mono uppercase tracking-wider text-accent mb-4 block">
                03
              </span>
              <h3 className="text-3xl md:text-4xl font-light tracking-tight text-foreground mb-6">
                The trader picks which dashboard opens.
              </h3>
              <p className="text-lg text-metadata leading-relaxed mb-6">
                A <span className="text-foreground">Select Default Dashboard</span> control sits at
                the top right, above the summary cards.
              </p>
              <p className="text-lg text-metadata leading-relaxed">
                An intraday F&amp;O trader and someone holding mutual funds for a decade want
                different first screens, and I could not win that argument by picking one of them.
                The control also leaves traders who built a habit on the old layout a way to keep
                it, which took the heat out of the review on the rest of the redesign.
              </p>
            </li>

            <li>
              <span className="text-label font-mono uppercase tracking-wider text-accent mb-4 block">
                04
              </span>
              <h3 className="text-3xl md:text-4xl font-light tracking-tight text-foreground mb-6">
                The watchlist keeps its own column.
              </h3>
              <p className="text-lg text-metadata leading-relaxed mb-6">
                Left of the dashboard: search, numbered lists, named groups that collapse, drag
                handles for reordering, and a view switch for list, grid, or chart. Group 1 shows
                six stocks open while Group 2 stays closed at three.
              </p>
              <p className="text-lg text-metadata leading-relaxed">
                A watchlist is a working surface. Traders build groups the way they think about the
                market, and someone watching IRFC while reading their P&amp;L should not have to
                choose between the two. As a column it stays in view; as a tab it would have cost a
                switch every time.
              </p>
            </li>

            <li>
              <span className="text-label font-mono uppercase tracking-wider text-accent mb-4 block">
                05
              </span>
              <h3 className="text-3xl md:text-4xl font-light tracking-tight text-foreground mb-6">
                Web carries seven destinations. The phone carries four.
              </h3>
              <p className="text-lg text-metadata leading-relaxed mb-6">
                On web, a left rail holds Home, Market, MF, IPO, IKF, Portfolio, and Sens AI, with a
                top row for Dashboard, Order, Position, Holdings, Screener, and Alert. Both mark
                where you are. On the phone, the bottom bar holds Market, Watchlist, Mutual Funds,
                and Portfolio, and Stocks, FnO, and IPO become tabs inside Market.
              </p>
              <p className="text-lg text-metadata leading-relaxed">
                I designed the phone first because it forces the ranking. Two things cannot both be
                first on a phone screen, so the cuts happen while the argument is still cheap. Web
                inherited that ranking and spent its extra room on depth rather than on more
                entries.
              </p>
            </li>

            <li>
              <span className="text-label font-mono uppercase tracking-wider text-accent mb-4 block">
                06
              </span>
              <h3 className="text-3xl md:text-4xl font-light tracking-tight text-foreground mb-6">
                Market data sits behind filters instead of stacking.
              </h3>
              <p className="text-lg text-metadata leading-relaxed mb-6">
                Market Analytics is a single block with a row of chips: Top Gainers, Top Losers,
                Volume Shockers, 52 Week High, 52 Week Low. Below it, Today&apos;s Top Nifty Stocks
                tags each row Positive, Negative, or Neutral.
              </p>
              <p className="text-lg text-metadata leading-relaxed">
                Each of those lists wanted a section of its own, and five sections would have pushed
                the portfolio off the first screen. The trader picks the list, and the block stays
                one block deep. Sentiment rides as a tag on the row so the list survives a scan.
              </p>
            </li>

          </ol>
        </div>
      </div>

      {/* Image — dashboard cards */}
      <figure className="grid grid-cols-12 gap-6 my-32">
        <div className="col-span-12">
          <Image
            src="/work2.svg"
            alt="Shoonya dashboard detail: portfolio summary card beside the funds card, with market analytics filters below"
            width={1920}
            height={1080}
            className="w-full h-auto"
          />
          <figcaption className="text-label font-mono uppercase tracking-wider text-metadata mt-6">
            Portfolio and Funds, side by side. Total P&amp;L and Day&apos;s P&amp;L read together.
          </figcaption>
        </div>
      </figure>

      {/* Image — mobile */}
      <figure className="grid grid-cols-12 gap-6 my-32">
        <div className="col-span-12">
          <Image
            src="/s2.svg"
            alt="Shoonya phone app in dark and light themes: market tabs, collections, sector grid and stock events"
            width={1280}
            height={960}
            className="w-full h-auto"
          />
          <figcaption className="text-label font-mono uppercase tracking-wider text-metadata mt-6">
            Phone, dark and light. Four destinations in the bottom bar, everything else earns a tab.
          </figcaption>
        </div>
      </figure>

      {/* Coverage */}
      <div className="grid grid-cols-12 gap-6 border-t border-metadata/20 pt-24 mb-32">
        <div className="col-span-12 md:col-span-4 mb-12 md:mb-0">
          <h2 className="text-label font-mono uppercase tracking-wider text-metadata sticky top-32">
            Coverage
          </h2>
        </div>
        <div className="col-span-12 md:col-span-8 lg:col-span-7 border-l-0 md:border-l border-metadata/20 pl-0 md:pl-8">
          <p className="text-lg text-metadata leading-relaxed mb-12">
            I drew both platforms and the parts underneath them: the index strip, symbol rows, group
            headers, filter chips, sentiment tags, and the summary cards. The phone app is drawn in
            dark and light, since a trader who keeps it open from 9:15 to close wants one and a
            trader reading it at night wants the other.
          </p>

          <p className="text-lg text-metadata leading-relaxed mb-12">
            I drew all of it with realistic market data instead of placeholders. Density is where
            fintech screens fail, and a layout that holds six symbols can come apart at sixty.
            Numbers that behave like real ones put that problem in the review, where the team could
            argue about it, rather than in the build.
          </p>

          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-6 border-t border-metadata/20 pt-8 mb-12">
            {[
              "Dashboard",
              "Watchlist",
              "Portfolio & Holdings",
              "Orders & Positions",
              "Market & Sectors",
              "IPO & Mutual Funds",
            ].map((area) => (
              <li key={area} className="flex flex-col gap-2">
                <span className="text-accent text-2xl font-light" aria-hidden="true">—</span>
                <span className="text-foreground font-light">{area}</span>
              </li>
            ))}
          </ul>

          <p className="text-xl md:text-2xl text-foreground leading-relaxed">
            Sens AI sits in the web rail as a destination of its own. That one grew past a nav item
            and became a separate project,{" "}
            <Link href="/works/sensai" className="text-accent interactive hover:opacity-70">
              written up here
            </Link>
            .
          </p>
        </div>
      </div>

      {/* What Made It Hard */}
      <div className="grid grid-cols-12 gap-6 border-t border-metadata/20 pt-24 mb-32">
        <div className="col-span-12 md:col-span-4 mb-12 md:mb-0">
          <h2 className="text-label font-mono uppercase tracking-wider text-metadata sticky top-32">
            What Made It Hard
          </h2>
        </div>
        <div className="col-span-12 md:col-span-8 lg:col-span-7 border-l-0 md:border-l border-metadata/20 pl-0 md:pl-8">
          <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8">
            For the first stretch I designed things that could not be built, and found out after I
            had drawn them.
          </p>
          <p className="text-lg text-metadata leading-relaxed mb-8">
            The reasons varied. A flow broke a compliance rule I had not been told about. A screen
            needed data no API returned. Something was possible in principle and not inside the
            timeline. None of it reached me until the design was finished, so it landed as rework,
            and handoff turned into an argument about what was actually going to get built.
          </p>
          <p className="text-lg text-metadata leading-relaxed mb-8">
            Nobody was withholding any of it. The constraints lived in the heads of the business
            analysts and the engineers, who had worked in Indian broking long enough that the rules
            had stopped registering as rules. I was new to fintech and did not know what to ask.
          </p>
          <p className="text-lg text-metadata leading-relaxed mb-8">
            So I moved the conversation earlier. Before Figma, I build a rough prototype with AI,
            rough but clickable, and put it in front of the BAs, QA, engineering, and the
            stakeholders at the same time. They wanted to see something early anyway. A prototype
            pulls a compliance objection out of someone in the first ten minutes, where a written
            spec gets agreement in the room and a correction three weeks later.
          </p>
          <p className="text-lg text-metadata leading-relaxed mb-8">
            I also changed the question. Asking whether a feature can be built gets a yes or a no.
            Asking why the team wants it gets the rule sitting behind the answer.
          </p>
          <p className="text-lg text-metadata leading-relaxed">
            The design team opens Figma once the room agrees, and the design system carries it from
            there. The prototype is not the design. It is what makes the design worth drawing. That
            process outgrew this project and is{" "}
            <Link href="/works/ux-process" className="text-accent interactive hover:opacity-70">
              written up separately
            </Link>
            .
          </p>
        </div>
      </div>

      {/* What I Learned */}
      <div className="grid grid-cols-12 gap-6 border-t border-metadata/20 pt-24">
        <div className="col-span-12 md:col-span-4 mb-12 md:mb-0">
          <h2 className="text-label font-mono uppercase tracking-wider text-metadata sticky top-32">
            What I Learned
          </h2>
        </div>
        <div className="col-span-12 md:col-span-8 lg:col-span-7 border-l-0 md:border-l border-metadata/20 pl-0 md:pl-8">
          <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8">
            Redesigns run harder than 0 to 1 work.
          </p>
          <p className="text-lg text-metadata leading-relaxed mb-8">
            On a new product I set the constraints. Here I inherited traders who have learned where
            everything lives and will notice the morning I move it. That inheritance is why the
            default dashboard control exists, and why the watchlist keeps the groups people have
            already built.
          </p>
          <p className="text-lg text-metadata leading-relaxed mb-8">
            I removed more than I added. Every element that survived had to justify sitting in front
            of a trader&apos;s money, and a few of the ones I cut had people in the building attached
            to them.
          </p>
          <p className="text-lg text-metadata leading-relaxed">
            The build is still running. None of this has met a live market yet, so the page carries
            decisions and the reasons behind them and no outcome numbers. I will add those once the
            redesign is out and Finvasia has figures I can source.
          </p>
        </div>
      </div>

    </div>
  );
}
