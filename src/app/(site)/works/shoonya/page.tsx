import type { Metadata } from "next";
import CaseHero from "@/components/case-study/CaseHero";
import CaseSection from "@/components/case-study/CaseSection";
import {
  BeforeAfter,
  Callout,
  Cards,
  Decisions,
  Figures,
  Media,
  NextProject,
  Note,
  PullQuote,
  TableScroll,
} from "@/components/case-study/blocks";

export const metadata: Metadata = {
  title: "Shoonya",
  description:
    "Splitting one overloaded landing screen in two: Home for the user's own money, Market for what the market is doing. A mobile information architecture redesign for Finvasia's Shoonya.",
};

/**
 * Source: Sachin's own case study deck for the mobile dashboard redesign,
 * second version (Dashboard.pdf, Oct 2026, 15 slides). Its images are cropped
 * into /public as shoonya-*.webp. The deck's hi-fi slide is only a link to an
 * internal Jira ticket, which stays off the site.
 * Shape, from Oct 2026: figures and a before/after pair up top, the way Josie
 * Ng's Afterpay page opens, then the argument on the house spine.
 *
 * This redesign had no internal behavioural data behind it, and the deck says
 * so. Keep it that way: the evidence here is a competitor benchmark, public
 * discussion, and UX principles, and none of it is allowed to harden into a
 * claim about what Shoonya's users do. The figures band counts scope, never
 * outcomes. No outcome numbers until the work ships and Finvasia publishes
 * figures.
 *
 * The <BeforeAfter> After pair is the low-fidelity wireframes. When hi-fi
 * exports land, swap their `src` and the caption.
 *
 * TODO(sachin): three facts only you have, each worth a paragraph.
 *   1. What you owned: the only designer on it? Who you worked with.
 *   2. Who had to agree to splitting the landing screen, and what pushback came.
 *   3. What you would measure once it ships.
 */
export default function ShoonyaCaseStudy() {
  return (
    <>
      <CaseHero
        id="shoonya"
        kicker="Product Redesign · Fintech"
        title="Shoonya"
        standfirst={
          <>
            Shoonya&apos;s mobile landing screen was doing four jobs at once. I split it in two: Home
            for the user&apos;s own money, Market for what the market is doing.
          </>
        }
        meta={[
          { label: "Role", value: "Senior Product Designer" },
          { label: "Company", value: "Finvasia" },
          // TODO(sachin): fill in the dates for this redesign and restore this row.
          // { label: "Dates", value: "" },
          { label: "Status", value: "Wireframes done, hi-fi in progress" },
          { label: "Surface", value: "Phone, iOS and Android" },
          { label: "Scope", value: "Information architecture, Home and Market" },
        ]}
      />

      <Figures
        items={[
          { value: "4 → 2", label: "Jobs on one landing screen, split across Home and Market" },
          { value: "5", label: "Competing apps benchmarked" },
          { value: "3", label: "Evidence sources: benchmark, public threads, UX principles" },
          { value: "0", label: "Internal behavioural data behind the redesign" },
        ]}
        caption="Scope, not results. The redesign has not shipped, so there are no outcome numbers yet."
      />

      <BeforeAfter
        before={[
          {
            label: "Landing screen today",
            src: "/shoonya-before-landing.webp",
            alt: "Shoonya's current mobile landing screen: Stocks, FnO and IPO tabs, an index ticker, and a Collections carousel.",
          },
        ]}
        after={[
          {
            label: "Home",
            src: "/shoonya-after-home.webp",
            alt: "Home wireframe: portfolio value and P&L, shortcuts to holdings, positions and orders, a watchlist with Buy and Sell, and trading tools.",
          },
          {
            label: "Market",
            src: "/shoonya-after-market.webp",
            alt: "Market wireframe: key indices, market movers, top sectors, FII and DII activity, market events, and news.",
          },
        ]}
        caption="One screen doing four jobs, then two screens doing one each. The after screens are wireframes until the hi-fi is done."
      />

      <CaseSection index={1} label="Overview">
        <p className="cs-lead">
          Shoonya is Finvasia&apos;s retail trading platform. The brief was to refresh its mobile
          dashboard so it could take new trading features and read more clearly.
        </p>
        <p className="cs-body">
          At the same time, Shoonya&apos;s product ecosystem was expanding with more trading and
          investment capabilities, and every one of them wanted a place on that screen.
        </p>
      </CaseSection>

      <CaseSection index={2} label="The Problem">
        <p className="cs-body">
          Every capability Shoonya added had landed on the same screen. By the time I opened it, one
          scroll held four jobs, and nothing on it ranked one above another. Total Funds and Add Funds
          sat between two discovery modules.
        </p>
        <Cards
          items={[
            {
              title: "Market Discovery",
              body: <p>Indices, Collections, Volume Gainers, Invest by Sectors.</p>,
            },
            {
              title: "Account Utility",
              body: <p>Total Funds and Add Funds.</p>,
            },
            {
              title: "Product Discovery",
              body: <p>Tools, AI-driven insights, and investment content.</p>,
            },
            {
              title: "Market Intelligence",
              body: <p>FII/DII provisional cash, Stock Events, News.</p>,
            },
          ]}
        />
        <Callout label="Key Observation">
          <p>
            The screen wasn&apos;t serving one clear user intent. It was trying to be Market, Discover,
            Tools and Account Utility at the same time.
          </p>
        </Callout>
        <p className="cs-body">
          A tidier layout would have moved the same modules around and kept all four jobs. I wanted
          one screen for each kind of question.
        </p>
      </CaseSection>

      <Media
        narrow
        src="/shoonya-existing-annotated.webp"
        alt="Shoonya's current landing screen top to bottom, with modules tagged Market Discovery, Account Utility, Product Discovery and Market Intelligence."
        width={1650}
        height={3140}
        caption="The current dashboard end to end, with each module tagged by the job it was doing: Market Discovery, Account Utility, Product Discovery, Market Intelligence."
      />

      <PullQuote>
        Was the problem really the arrangement of content, or was the entry-point architecture itself
        becoming overloaded?
      </PullQuote>

      <CaseSection index={3} label="Users">
        <p className="cs-body">
          One landing screen, four kinds of Shoonya user, each arriving with a different question.
        </p>
        <Cards
          items={[
            {
              title: "Beginner",
              body: (
                <p>
                  &ldquo;I don&apos;t know where to start.&rdquo; Needs learning, simple product
                  discovery, contextual guidance and an easy first action.
                </p>
              ),
            },
            {
              title: "Investor",
              body: (
                <p>
                  &ldquo;I want to manage and grow my investments.&rdquo; Needs the portfolio, mutual
                  funds and SIPs, IPOs, and discovery that fits.
                </p>
              ),
            },
            {
              title: "Active trader",
              body: (
                <p>
                  &ldquo;I know what I want to trade.&rdquo; Needs positions, orders, the watchlist,
                  trading tools and a market snapshot.
                </p>
              ),
            },
            {
              title: "Advanced trader",
              body: (
                <p>
                  &ldquo;I need efficient access to powerful trading workflows.&rdquo; Needs F&amp;O
                  Edge, advanced charting, scalping and the option chain.
                </p>
              ),
            },
          ]}
        />
        <Note>
          <p>
            These are working types, not research personas. No internal behavioural data stood behind
            them. Shoonya needs one common starting point, with relevance following each user&apos;s
            intent and experience.
          </p>
        </Note>
      </CaseSection>

      <CaseSection index={4} label="My Role">
        {/* TODO(sachin): the rest of this section. Were you the only designer on it, who you
            worked with (PM, engineering, research), and who had to agree to the split. */}
        <p className="cs-body">
          Senior Product Designer at Finvasia. I ran the benchmark, framed the hypothesis, and drew the
          Home and Market wireframes.
        </p>
      </CaseSection>

      <CaseSection index={5} label="Scope & Constraints">
        <ul className="cs-list cs-body">
          <li>
            No internal behavioural data. Claims like &ldquo;users prefer X&rdquo; were off the table
            from the start.
          </li>
          <li>Every capability on the old screen had to stay reachable from the new ones.</li>
          <li>Information architecture for two screens, Home and Market.</li>
          <li>Phone only, iOS and Android.</li>
          <li>Wireframes are settled. Hi-fi is in progress.</li>
        </ul>
      </CaseSection>

      <CaseSection index={6} label="Process: How I Got There">
        <Decisions
          items={[
            {
              num: "01",
              label: "I noticed",
              title: "The dashboard was doing too many jobs at once.",
              body: (
                <p className="cs-body">
                  Market discovery, product discovery, account utility and market intelligence,
                  stacked in a single scroll.
                </p>
              ),
            },
            {
              num: "02",
              label: "I questioned",
              title: "Could one landing screen serve every kind of Shoonya user?",
              body: (
                <p className="cs-body">
                  The beginner, the investor, the active trader and the advanced trader each opened the
                  app with a different question. The old screen gave all four the same scroll.
                </p>
              ),
            },
            {
              num: "03",
              label: "I explored",
              title: "Pulling the user's world apart from the market's.",
              body: (
                <p className="cs-body">
                  Rather than rearrange sections, I asked whether Shoonya needed two entry points:
                  one about the user, one about the market.
                </p>
              ),
            },
          ]}
        />
      </CaseSection>

      <CaseSection index={7} label="Process: Hypothesis">
        <Callout tone="signal" label="Hypothesis">
          <p>
            Home is built around the user&apos;s world in Shoonya. Market is built around what is
            happening in the market.
          </p>
        </Callout>
        <Cards
          items={[
            {
              title: "Home answers",
              body: (
                <ul className="cs-list">
                  <li>What is happening with my money?</li>
                  <li>What can I do next?</li>
                  <li>What can I discover?</li>
                  <li>What can I learn?</li>
                </ul>
              ),
            },
            {
              title: "Market answers",
              body: (
                <ul className="cs-list">
                  <li>What is happening in the market?</li>
                  <li>Which sectors are moving?</li>
                  <li>Which stocks are gaining or losing?</li>
                  <li>What are institutions doing?</li>
                  <li>What market events should I know about?</li>
                </ul>
              ),
            },
          ]}
        />
        <Note>
          <p>
            Neither screen has to show every Shoonya capability, and neither has to show everything to
            everyone.
          </p>
        </Note>
      </CaseSection>

      <CaseSection index={8} label="Process: Evidence">
        <p className="cs-lead">With no internal data, I worked from three sources.</p>
        <p className="cs-body">
          A benchmark of five competing apps. Public threads and store reviews. And established principle: Nielsen&apos;s heuristics, discoverability, and
          the mental models people bring from other apps, and cutting effort a screen doesn&apos;t
          need to ask for. The benchmark looked at how each platform
          balances trading, personal finance, discovery and complexity.
        </p>
        <TableScroll label="Competitor benchmark">
          <table className="cs-table cs-table-stack">
            <thead>
              <tr>
                <th scope="col">Competitor</th>
                <th scope="col">Key Pattern</th>
                <th scope="col">Shoonya Implication</th>
                <th scope="col">Design Area</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Competitor">Sahi</td>
                <td data-label="Key Pattern">Strong focus on trading workflows.</td>
                <td data-label="Shoonya Implication">Keep search, watchlist and core trading workflows easy to reach.</td>
                <td data-label="Design Area">Core trading hierarchy</td>
              </tr>
              <tr>
                <td data-label="Competitor">Groww</td>
                <td data-label="Key Pattern">Strong investment and discovery ecosystem alongside core investing workflows.</td>
                <td data-label="Shoonya Implication">Discovery can coexist with trading, but should not overwhelm core tasks.</td>
                <td data-label="Design Area">Discover &amp; Invest</td>
              </tr>
              <tr>
                <td data-label="Competitor">Kotak Neo</td>
                <td data-label="Key Pattern">Portfolio, watchlist and discovery/trading capabilities are prominent.</td>
                <td data-label="Shoonya Implication">Keep account state and instrument discovery accessible.</td>
                <td data-label="Design Area">Portfolio + Watchlist</td>
              </tr>
              <tr>
                <td data-label="Competitor">Dhan</td>
                <td data-label="Key Pattern">Strong emphasis on advanced trading tools and active-trader workflows.</td>
                <td data-label="Shoonya Implication">Expose differentiated trading tools, but group them coherently.</td>
                <td data-label="Design Area">Trading Tools</td>
              </tr>
              <tr>
                <td data-label="Competitor">5paisa</td>
                <td data-label="Key Pattern">Gives every feature equal priority and its own entry point.</td>
                <td data-label="Shoonya Implication">Trading tools should have clear purpose rather than becoming a generic feature grid.</td>
                <td data-label="Design Area">Trading Tools</td>
              </tr>
            </tbody>
          </table>
        </TableScroll>
        <p className="cs-body">
          The benchmark pointed one way: Home should be about the user and open to discovery, and
          Market should hold the deeper market intelligence.
        </p>
        <p className="cs-body">
          The public threads complained about structure, across several competitors. One thread argued a basic app was better because it
          had fewer features. Another asked its platform to split into core modes instead of adding to
          the same navigation. Store reviews asked for a more focused interface and a dashboard that
          explains itself.
        </p>
        <Callout label="Important">
          <p>
            Public reviews and community discussions are directional signals, not representative user
            research. I used them to form hypotheses, not to validate them.
          </p>
        </Callout>
      </CaseSection>

      <Media
        src="/shoonya-public-threads.webp"
        alt="Two r/IndianStockMarket threads, a Reddit comment chain comparing Zerodha and Dhan, and three app store reviews."
        width={1720}
        height={1210}
        caption="Threads from r/IndianStockMarket on Lemonn and Groww, a comment chain comparing Zerodha and Dhan, and three store reviews: one asking for a quicker way to add to a watchlist, two asking for a simpler, more self-explanatory dashboard."
      />

      <CaseSection index={9} label="Process: Home">
        <p className="cs-lead">
          Home answers what is happening with the user&apos;s money, and what they can do next. I
          ranked it in four bands, in this order.
        </p>
        <Cards
          items={[
            {
              num: "01",
              title: "My Money",
              body: (
                <p>
                  Portfolio value, today&apos;s P&amp;L, overall P&amp;L, and quick access to
                  holdings, positions and orders.
                </p>
              ),
            },
            {
              num: "02",
              title: "My Actions",
              body: <p>Watchlist, Buy and Sell, trading tools, Add Funds.</p>,
            },
            {
              num: "03",
              title: "Products & Opportunities",
              body: <p>Mutual funds and SIPs, IPOs, NFOs, bonds, MTF.</p>,
            },
            {
              num: "04",
              title: "Learn & Explore",
              body: (
                <p>
                  Explainers and market concepts, placed next to the products they explain. For a
                  beginner, this is how they find out what an SIP is and whether it fits them.
                </p>
              ),
            },
          ]}
        />
        <Note>
          <p>
            Moving every old module into the new Home would have rebuilt the original problem. The
            ranking is what stops Home turning into a feature catalogue.
          </p>
        </Note>
      </CaseSection>

      <Media
        narrow
        src="/shoonya-home-annotated.webp"
        alt="Annotated Home wireframe: utility header, My Money, My Watchlist, Trading Tools and the SensAI button."
        width={1328}
        height={1986}
        caption="Home, top to bottom: a utility header with search, notifications, profile and Add Funds; My Money; My Watchlist with price, change and Buy/Sell; a short set of trading tools; and a SensAI button that floats over every screen."
      />

      <CaseSection index={10} label="Process: Market">
        <p className="cs-lead">
          Market answers what the market is doing. Home keeps a glance at it, and Market holds
          everything deeper.
        </p>
        <ul className="cs-list cs-body">
          <li>Key indices with live movement. Tap one for detail.</li>
          <li>Market movers: top gainers, losers and volume shockers, one tab each.</li>
          <li>Top sectors with percentage change and a mini chart.</li>
          <li>FII and DII activity: daily net buying and selling, with the trend.</li>
          <li>Market events: corporate actions, the results calendar, IPO listings.</li>
          <li>News and research.</li>
        </ul>
      </CaseSection>

      <Media
        narrow
        src="/shoonya-market-annotated.webp"
        alt="Annotated Market wireframe: page header, key indices, market movers, top sectors, FII and DII activity, market events, news and research, bottom navigation."
        width={1368}
        height={2056}
        caption="Market, annotated section by section, with Market as the active tab in the bottom navigation."
      />

      <CaseSection index={11} label="Outcomes & Lessons">
        <p className="cs-lead">
          The wireframes are settled. The hi-fi screens are in progress, and they replace the
          wireframes at the top of this page when they&apos;re done.
        </p>
        <p className="cs-body">
          The split is still a hypothesis. The benchmark, the public threads and the principles shaped
          it. None of them proves it, and there are no outcome numbers until it ships.
        </p>
        {/* TODO(sachin): what you would measure once it ships, and one thing you learned or
            would do differently. The template asks for both. */}
      </CaseSection>

      <NextProject id="shoonya" />
    </>
  );
}
