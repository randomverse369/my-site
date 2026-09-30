import type { Metadata } from "next";
import CaseHero from "@/components/case-study/CaseHero";
import CaseSection from "@/components/case-study/CaseSection";
import {
  Callout,
  Cards,
  Decisions,
  NextProject,
  Note,
  Placeholder,
  PullQuote,
  TableScroll,
} from "@/components/case-study/blocks";

export const metadata: Metadata = {
  title: "Shoonya",
  description:
    "Splitting one overloaded landing screen in two: Home for the user's own money, Market for what the market is doing. A mobile information architecture redesign for Finvasia's Shoonya.",
};

/**
 * Source: Sachin's own case study deck for the mobile dashboard redesign.
 *
 * This redesign had no internal behavioural data behind it, and the deck says
 * so. Keep it that way: the evidence here is a competitor benchmark, public
 * discussion, and UX principles, and none of it is allowed to harden into a
 * claim about what Shoonya's users do. No outcome numbers until the work ships
 * and Finvasia publishes figures.
 *
 * Every <Placeholder> is a screen Sachin is uploading. To fill one, drop the
 * export in /public and swap the block for <Media> with the same caption.
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
            A mobile dashboard redesign that split one overloaded landing screen in two: Home for
            the user&apos;s own money, Market for what the market is doing.
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

      <CaseSection index={1} label="The Starting Point">
        <p className="cs-lead">
          The requirement was to refresh Shoonya&apos;s existing mobile dashboard so it could take on
          newly introduced trading features while improving information hierarchy.
        </p>
        <p className="cs-body">
          The existing landing experience had grown into a broad market and discovery surface. At the
          same time Shoonya&apos;s product ecosystem kept expanding with more trading and investment
          capabilities, and all of it arrived on the same screen.
        </p>
      </CaseSection>

      <CaseSection index={2} label="The Challenge">
        <p className="cs-lead">
          Redesign the existing dashboard without losing access to Shoonya&apos;s growing set of
          trading and investment capabilities.
        </p>
        <p className="cs-body">
          The task initially appeared to be a dashboard redesign. While analysing the existing
          experience, I started questioning something underneath it.
        </p>
      </CaseSection>

      <PullQuote>
        Was the problem really the arrangement of content, or was the entry-point architecture itself
        becoming overloaded?
      </PullQuote>

      <CaseSection index={3} label="The Existing Experience">
        <p className="cs-lead">The existing landing screen was performing multiple jobs at once.</p>
        <Cards
          items={[
            {
              title: "Market Discovery",
              body: <p>Indices, Collections, Volume Gainers, Invest by Sectors.</p>,
            },
            {
              title: "Account Utility",
              body: <p>Total Funds and Add Funds, sitting between two discovery modules.</p>,
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
            The screen wasn&apos;t serving one clear user intent. It was trying to be Market,
            Discover, Tools and Account Utility at the same time.
          </p>
        </Callout>
      </CaseSection>

      <Placeholder
        label="Existing landing screen, annotated"
        ratio="1016 / 900"
        caption="The current dashboard end to end, with each module tagged by the job it was doing: Market Discovery, Account Utility, Product Discovery, Market Intelligence."
      />

      <CaseSection index={4} label="My Thought Process">
        <Decisions
          items={[
            {
              num: "01",
              label: "I noticed",
              title: "The existing dashboard was doing too many jobs at once.",
              body: (
                <p className="cs-body">
                  Market and product discovery, account utility and market intelligence, stacked into
                  a single scroll with nothing ranking them.
                </p>
              ),
            },
            {
              num: "02",
              label: "I questioned",
              title: "Should all these experiences really live under one landing screen?",
              body: (
                <p className="cs-body">
                  Can one home experience effectively serve a beginner, an investor, an active trader
                  and an advanced trader at the same time?
                </p>
              ),
            },
            {
              num: "03",
              label: "I explored",
              title: "A separation of user-centric and market-centric experiences.",
              body: (
                <p className="cs-body">
                  Instead of treating the existing dashboard as a collection of sections to
                  rearrange, I explored whether Shoonya needed the two kinds of experience pulled
                  apart.
                </p>
              ),
            },
          ]}
        />
      </CaseSection>

      <CaseSection index={5} label="The Hypothesis">
        <Callout tone="signal">
          <p>
            What if Home was designed around the user&apos;s world in Shoonya, while Market was
            designed around what is happening in the market?
          </p>
        </Callout>
        <Cards
          items={[
            {
              title: "Home should help users answer",
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
              title: "Market should help users answer",
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
            This separation reduces the need for one screen to communicate every possible Shoonya
            capability.
          </p>
        </Note>
      </CaseSection>

      <CaseSection index={6} label="Who Uses Shoonya">
        <p className="cs-lead">
          Shoonya is not used by one homogeneous user group. The same product can be entered with
          very different levels of knowledge and intent.
        </p>
        <Cards
          items={[
            {
              title: "Beginner",
              body: (
                <>
                  <p className="cs-em">&ldquo;I don&apos;t know where to start.&rdquo;</p>
                  <ul className="cs-list mt-4">
                    <li>Learning</li>
                    <li>Simple product discovery</li>
                    <li>Contextual guidance</li>
                    <li>Easy first actions</li>
                  </ul>
                </>
              ),
            },
            {
              title: "Investor",
              body: (
                <>
                  <p className="cs-em">&ldquo;I want to manage and grow my investments.&rdquo;</p>
                  <ul className="cs-list mt-4">
                    <li>Portfolio</li>
                    <li>Mutual Funds and SIP</li>
                    <li>IPOs</li>
                    <li>Investment opportunities</li>
                    <li>Relevant discovery</li>
                  </ul>
                </>
              ),
            },
            {
              title: "Active Trader",
              body: (
                <>
                  <p className="cs-em">&ldquo;I know what I want to trade.&rdquo;</p>
                  <ul className="cs-list mt-4">
                    <li>Positions</li>
                    <li>Orders</li>
                    <li>Watchlist</li>
                    <li>Trading tools</li>
                    <li>Market snapshot</li>
                  </ul>
                </>
              ),
            },
            {
              title: "Advanced Trader",
              body: (
                <>
                  <p className="cs-em">
                    &ldquo;I need efficient access to powerful trading workflows.&rdquo;
                  </p>
                  <ul className="cs-list mt-4">
                    <li>F&amp;O Edge</li>
                    <li>Advanced Charting</li>
                    <li>Scalping</li>
                    <li>Option Chain</li>
                    <li>Other advanced tools</li>
                  </ul>
                </>
              ),
            },
          ]}
        />
        <Note>
          <p>
            Shoonya needs to provide a common starting point, while letting relevance emerge from the
            user&apos;s intent and maturity.
          </p>
        </Note>
      </CaseSection>

      <CaseSection index={7} label="Research Approach">
        <p className="cs-lead">
          Shoonya had no internal behavioural data for this redesign, so I avoided unsupported claims
          like &ldquo;users prefer X.&rdquo; I drew on three evidence sources instead: a competitor
          benchmark, public user conversations, and established UX principles.
        </p>
        <p className="cs-body">
          The benchmark went looking for patterns in how leading platforms balance trading, personal
          finance, discovery and complexity.
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
                <td data-label="Competitor">Zerodha</td>
                <td data-label="Key Pattern">Strong focus on Marketwatch, trading and account workflows.</td>
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
                <td data-label="Competitor">Upstox</td>
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
                <td data-label="Competitor">Angel One</td>
                <td data-label="Key Pattern">Portfolio and market context are surfaced within the primary experience.</td>
                <td data-label="Shoonya Implication">
                  Provide lightweight market context on Home while keeping deeper intelligence inside
                  Market.
                </td>
                <td data-label="Design Area">Market Snapshot</td>
              </tr>
              <tr>
                <td data-label="Competitor">Pocketful</td>
                <td data-label="Key Pattern">Differentiated product and trading discovery.</td>
                <td data-label="Shoonya Implication">
                  Use Home to make differentiated Shoonya capabilities discoverable without creating a
                  feature catalogue.
                </td>
                <td data-label="Design Area">Product Discovery</td>
              </tr>
              <tr>
                <td data-label="Competitor">Lemonn</td>
                <td data-label="Key Pattern">Strong positioning around trading tools and signals.</td>
                <td data-label="Shoonya Implication">Trading tools should have clear purpose rather than becoming a generic feature grid.</td>
                <td data-label="Design Area">Trading Tools</td>
              </tr>
            </tbody>
          </table>
        </TableScroll>
        <p className="cs-body">
          The benchmark reinforced a direction: Home should be user-centric and discovery-friendly,
          while Market should remain the destination for deeper market intelligence.
        </p>
      </CaseSection>

      <Placeholder
        label="Public discussions and store reviews"
        ratio="1016 / 700"
        caption="Threads from r/IndianStockMarket on Groww and Lemonn, a comment chain comparing Zerodha and Dhan, and three Play Store reviews asking for a more focused interface."
      />

      <CaseSection index={8} label="Public Conversations">
        <p className="cs-lead">
          I read publicly available discussions and app feedback to find recurring directional themes.
        </p>
        <p className="cs-body">
          The same complaint kept surfacing across competitors, and it was never about capability. It
          was about structure. One thread argued a basic app was better precisely because it had
          fewer features. Another asked its platform to restructure into core modes rather than keep
          adding to the same navigation. Reviews asked for a more focused interface and a more
          self-explanatory dashboard.
        </p>
        <Callout label="Important">
          <p>
            Public reviews and community discussions are directional signals, not representative user
            research. I used them to identify hypotheses, not to validate them.
          </p>
        </Callout>
      </CaseSection>

      <CaseSection index={9} label="UX Principles">
        <p className="cs-body">The third source was established principle rather than observation.</p>
        <ul className="cs-list cs-body">
          <li>Nielsen&apos;s heuristic evaluation.</li>
          <li>Discoverability, signifiers and mental models.</li>
          <li>Clarity, and reducing unnecessary cognitive effort.</li>
        </ul>
      </CaseSection>

      <CaseSection index={10} label="Key Insights">
        <Cards
          items={[
            {
              title: "Feature richness needs hierarchy",
              body: (
                <>
                  <p>
                    Shoonya can offer many capabilities, but every capability does not need equal
                    prominence.
                  </p>
                  <Note>
                    <p>
                      Feature richness is valuable only when users can understand where things belong.
                    </p>
                  </Note>
                </>
              ),
            },
            {
              title: "Different intents need different spaces",
              body: (
                <>
                  <p>Portfolio management and market discovery are fundamentally different jobs.</p>
                  <Note>
                    <p>
                      Trying to make one screen equally good at both increases cognitive load.
                    </p>
                  </Note>
                </>
              ),
            },
            {
              title: "Home should not become another feature catalogue",
              body: (
                <>
                  <p>
                    Moving every existing module into a new Home would simply recreate the original
                    problem.
                  </p>
                  <Note>
                    <p>
                      Home needs a strong hierarchy: My Money, then Actions, then Discovery, then
                      Learning.
                    </p>
                  </Note>
                </>
              ),
            },
            {
              title: "Learning is part of product discoverability",
              body: (
                <>
                  <p>
                    For beginners, education is not merely an external content section. It can help
                    users understand what a product is, why it may be relevant, and what action they
                    can take next.
                  </p>
                  <Note>
                    <p>This makes learning a bridge between understanding and action.</p>
                  </Note>
                </>
              ),
            },
            {
              wide: true,
              title: "Discoverability should support different user maturity levels",
              body: (
                <>
                  <p>
                    A beginner may need to discover what an SIP is. An active trader may need to find
                    the Option Chain. An investor may need to know which investment opportunities are
                    available.
                  </p>
                  <Note>
                    <p>Discoverability should not mean showing everything to everyone.</p>
                  </Note>
                </>
              ),
            },
          ]}
        />
      </CaseSection>

      <CaseSection index={11} label="Reframing the Dashboard">
        <p className="cs-lead">
          Rather than defining Home purely as a portfolio dashboard, I structured it around four
          user-centric jobs.
        </p>
        <Cards
          items={[
            {
              num: "01",
              title: "My Money",
              body: (
                <>
                  <ul className="cs-list">
                    <li>Portfolio Value</li>
                    <li>Today&apos;s P&amp;L</li>
                    <li>Overall P&amp;L</li>
                    <li>Holdings</li>
                    <li>Positions</li>
                    <li>Orders</li>
                  </ul>
                  <p className="mt-4">And any other my-money action.</p>
                </>
              ),
            },
            {
              num: "02",
              title: "My Actions",
              body: (
                <>
                  <ul className="cs-list">
                    <li>Watchlist</li>
                    <li>Buy and Sell</li>
                    <li>Trading Tools</li>
                    <li>Add Funds</li>
                  </ul>
                  <p className="mt-4">And any other relevant account action.</p>
                </>
              ),
            },
            {
              num: "03",
              title: "Product & Opportunities",
              body: (
                <>
                  <ul className="cs-list">
                    <li>Mutual Funds and SIP</li>
                    <li>IPO</li>
                    <li>NFO</li>
                    <li>Bonds</li>
                    <li>MTF</li>
                  </ul>
                  <p className="mt-4">And any other relevant investment opportunity.</p>
                </>
              ),
            },
            {
              num: "04",
              title: "Learn & Explore",
              body: (
                <>
                  <ul className="cs-list">
                    <li>Educational Content</li>
                    <li>Product Explainers</li>
                    <li>Market Concepts</li>
                    <li>Contextual Learning</li>
                  </ul>
                  <p className="mt-4">And any other learn-and-explore option.</p>
                </>
              ),
            },
          ]}
        />
      </CaseSection>

      <Placeholder
        label="Home, low-fidelity wireframe"
        ratio="1016 / 820"
        caption="Home: My Money, Actions and Tools for every investor and trader, annotated section by section."
      />

      <CaseSection index={12} label="Updated IA · Home">
        <p className="cs-lead">
          Home answers what is happening with the user&apos;s money, and what they can do about it
          next.
        </p>
        <Cards
          items={[
            {
              num: "01",
              title: "Utility Header",
              body: <p>Persistent access to Search, Notifications, Profile and Add Funds.</p>,
            },
            {
              num: "02",
              title: "My Money",
              body: (
                <p>
                  The primary account snapshot, with key metrics and quick access to Holdings,
                  Positions and Orders.
                </p>
              ),
            },
            {
              num: "03",
              title: "My Watchlist",
              body: (
                <p>
                  Quick access to personally relevant instruments with LTP, change, and Buy/Sell
                  actions.
                </p>
              ),
            },
            {
              num: "04",
              title: "Trading Tools",
              body: <p>A focused set of high-value trading tools.</p>,
            },
            {
              num: "05",
              title: "SensAI FAB",
              body: <p>Global access to SensAI across the app.</p>,
            },
          ]}
        />
      </CaseSection>

      <Placeholder
        label="Market, low-fidelity wireframe"
        ratio="1016 / 820"
        caption="Market: a dedicated destination for market intelligence, insights and opportunities, annotated section by section."
      />

      <CaseSection index={13} label="Updated IA · Market">
        <p className="cs-lead">
          Market answers what is happening out there, and stays the destination for anything deeper
          than a glance.
        </p>
        <Cards
          items={[
            {
              num: "01",
              title: "Page Header",
              body: <p>Clear page identity with search, notifications and profile.</p>,
            },
            {
              num: "02",
              title: "Key Indices",
              body: <p>A quick view of major indices with real-time movement. Tap to view details.</p>,
            },
            {
              num: "03",
              title: "Market Movers",
              body: <p>Top gainers, losers and volume shockers, with tabs for easy switching.</p>,
            },
            {
              num: "04",
              title: "Top Sectors",
              body: <p>Sector-wise performance with percentage change and mini charts.</p>,
            },
            {
              num: "05",
              title: "FII / DII Activity",
              body: <p>Daily net buying and selling data with trend visualisation.</p>,
            },
            {
              num: "06",
              title: "Market Events",
              body: <p>Upcoming corporate actions, results calendar and IPO listings.</p>,
            },
            {
              num: "07",
              title: "News & Research",
              body: <p>Latest market news, insights and research updates.</p>,
            },
            {
              num: "08",
              title: "Bottom Navigation",
              body: <p>Consistent navigation across the app, with Market as the active state.</p>,
            },
          ]}
        />
      </CaseSection>

      <CaseSection index={14} label="Hi-Fi Prototype">
        <p className="cs-lead">
          The wireframes are settled. The high-fidelity screens are still in progress, and they go
          here once they are done.
        </p>
      </CaseSection>

      <Placeholder
        label="Hi-fi screens, in progress"
        ratio="1016 / 640"
        caption="Home and Market at full fidelity, drawn from the Shoonya design system."
      />

      <NextProject id="shoonya" />
    </>
  );
}
