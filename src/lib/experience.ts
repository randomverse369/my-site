/**
 * Single source of truth for roles.
 *
 * The home page's "Where I've worked" list and /experience previously kept two
 * separate copies of this, and the dates had already drifted between them.
 *
 * /about carries the reflective version of this arc, one line per company.
 * Keep this file factual: what the job was, what I owned, what I can show.
 */

export type Experience = {
  id: string;
  /** Long form, as shown on the home page. */
  period: string;
  /** Short form, as shown on /experience. */
  year: string;
  /** Year-month, for the duration bars on /experience. */
  start: string;
  /** Year-month, or null while the role is current. */
  end: string | null;
  company: string;
  role: string;
  context: string;
  /** One or two sentences: what the job was and what I owned. */
  summary: string;
  achievements: string[];
  projects?: string;
};

export const experiences: Experience[] = [
  {
    id: "finvasia",
    period: "May 2025–Present",
    year: "2025–Present",
    start: "2025-05",
    end: null,
    company: "Finvasia",
    role: "Senior Product Designer",
    context:
      "500–1000 person fintech company. Shoonya (B2C trading platform) and Jumpp (AI-powered neobanking app).",
    summary:
      "The first product designer Finvasia hired. I set up how design gets done here and draw the trading and banking products it applies to.",
    achievements: [
      "Interviewed nine Shoonya traders recruited through customer support, across geographies, account sizes and trading styles, and wrote the personas the redesign was briefed against.",
      "Ran a five-way competitor teardown of Dhan, 5paisa, Groww, Zerodha and Angel One to set the bar before UI work started.",
      "Built Shoonya's design system alone in three weeks, from a brand guideline and a starter UI kit, and drew both platforms from it.",
      "Turn vague requirements into working prototypes in Lovable, Antigravity and Figma Make, so the room argues with something it can click before anyone commits to a flow.",
      "Pressure-test problem definitions against ChatGPT and Claude and find the edge cases before design starts.",
      "Halved feature development time with structured handoff guides and repeated review cycles.",
      "Put UX analytics tooling inside both products.",
      "Mentor teammates on framing a problem before they draw screens.",
    ],
    projects: "sensAI, Jumpp, Shoonya.",
  },
  {
    id: "digimantra",
    period: "Oct 2024 – Apr 2025",
    year: "2024–2025",
    start: "2024-10",
    end: "2025-04",
    company: "DigiMantra",
    role: "Senior Product Designer",
    context: "Service-based agency. Embedded in enterprise client product teams.",
    summary:
      "DigiMantra placed me inside Cloudwick's product team. I designed the review layer for Amorphic IDP, where somebody with no technical background decides whether to trust a value a model pulled off a page.",
    achievements: [
      "Took over a client account on my own inside the first few weeks.",
      "Designed the extraction review interface for an enterprise document platform running OCR and Claude 3.5 Sonnet through Amazon Bedrock.",
      "Built the design system behind that platform and kept it consistent as the product grew.",
      "Rewrote half-finished briefs into problem statements engineering could build against.",
      "Ran the usability testing that scored the product at 85%.",
    ],
  },
  {
    id: "tier5",
    period: "Sep 2022 – Sep 2024",
    year: "2022–2024",
    start: "2022-09",
    end: "2024-09",
    company: "Tier5",
    role: "Junior/Mid-Level Product Designer",
    context:
      "100–150 person SaaS company. Friender, a lead generation platform built on Facebook connections.",
    summary:
      "Two years on Friender, which works a small business's Facebook connections as a lead list. I reported to the CEO and MD with nobody in between, so the business goal and the screen were mine to reconcile.",
    achievements: [
      "Built Friender's design system from scratch, which cut the back and forth with engineering and, by the company's own measure, tripled how fast features shipped.",
      "Translated goals the CEO and MD gave me in business terms into decisions a developer could act on.",
      "Ran product teardowns to work out what competitors had already solved.",
    ],
  },
  {
    id: "tutelage",
    // The Figma reads "sep 2019 - sep 2024", which overlaps Tier5 above. Kept
    // at 2022 to match /about and /experience; flag if the Figma is right.
    period: "Sep 2019 – Sep 2022",
    year: "2019–2022",
    start: "2019-09",
    end: "2022-09",
    company: "Tutelage",
    role: "Graphic & UI Designer",
    context:
      "10–20 person edtech startup. Career counselling platform and 1stcollege.com.",
    summary:
      "My first job, and the only designer in the company. Every visual Tutelage put out, on screen and in print, came through me.",
    achievements: [
      "Produced over a thousand creatives for social, web and print.",
      "Rebuilt sdmedu.in and worked on 1stcollege.com.",
    ],
  },
];
