/**
 * Single source of truth for case studies.
 *
 * The home page and /works previously hardcoded two separate lists, which had
 * already drifted: home showed four projects, /works showed a different four,
 * and /works/uxmantra was reachable from neither.
 */

export type Project = {
  id: string;
  title: string;
  href: string;
  /** Kicker above the title, e.g. "AI Product · Fintech". */
  category: string;
  /** One line, used on the home page card. */
  summary: string;
  /**
   * Body paragraphs, used on /works. Keep these to the two sentences a reader
   * needs to decide whether to open the case study; the argument itself lives
   * on the case study page.
   */
  body: string[];
  tags: string[];
  /**
   * /works prints the first two values as a single mono line, so order them
   * with the two a reader scans for first.
   */
  meta: { label: string; value: string }[];
  image?: string;
  imageLabel: string;
  /** Ground of the generated cover shown until real screens exist. */
  ground?: string;
  /** Whether the case study itself is written — not whether the product ships. */
  caseStudy: "published" | "coming-soon";
  /** Appears in the home page's Selected Works. */
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: "shoonya",
    title: "Shoonya",
    href: "/works/shoonya",
    category: "Product Redesign · Fintech",
    summary: "One overloaded landing screen, split into Home and Market",
    body: [
      "Shoonya's mobile dashboard had become a market, discovery, tools and account-utility screen all at once. I split the entry point in two: Home for the user's own money and what they can do next, Market for what the market is doing.",
    ],
    tags: ["Mobile", "Fintech", "Information Architecture"],
    meta: [
      { label: "Role", value: "Senior Product Designer" },
      { label: "Company", value: "Finvasia" },
      { label: "Type", value: "Mobile IA Redesign" },
    ],
    image: "/work-shoonya.png",
    imageLabel: "Shoonya — Mobile Dashboard Redesign",
    caseStudy: "published",
    featured: true,
  },
  {
    id: "sensai",
    title: "SensAI",
    href: "/works/sensai",
    category: "AI Product · Fintech",
    summary:
      "Multi-Agent Intelligence system - First of its kind, built for trading clarity",
    body: [
      "Indian traders get more market data than they can read. I designed two agents behind one interface: a screener that takes plain English, and a chat assistant that answers questions about a stock while you are looking at it.",
    ],
    tags: ["Mobile", "Web", "Fintech", "AI"],
    meta: [
      { label: "Role", value: "Senior Product Designer" },
      { label: "Company", value: "Finvasia · Shoonya" },
      { label: "Type", value: "0 to 1 AI Product" },
    ],
    image: "/work-sensai.png",
    imageLabel: "SensAI — Multi-Agent Intelligence",
    caseStudy: "published",
    featured: true,
  },
  {
    id: "amorphic-idp",
    title: "Amorphic IDP",
    href: "/works/amorphic-idp",
    category: "AI Product · Enterprise",
    summary:
      "A review layer for generative AI extraction, built for people who don't know what a prompt is.",
    body: [
      "Cloudwick's engineers measured 98% extraction accuracy, which leaves two wrong values in every hundred documents and no marker on which two. I designed the screen where a reviewer with no technical background decides whether to trust a value on a page.",
    ],
    tags: ["B2B", "Enterprise", "AI", "Document Processing"],
    meta: [
      { label: "Role", value: "Product Designer" },
      { label: "Company", value: "DigiMantra · Cloudwick" },
      { label: "Type", value: "Enterprise AI Platform" },
    ],
    imageLabel: "Amorphic IDP — Extraction Review",
    ground: "#10151f",
    caseStudy: "published",
    featured: false,
  },
  {
    id: "jai-research",
    title: "jAI Research Sprint",
    href: "/works/jai-research",
    category: "UX Research · Fintech",
    summary: "Designing a clearer path to trusted financial insights.",
    body: [
      "I ran a one-week research sprint on Jumpp's AI assistant. Users read its landing screen as a spending tracker while the product introduced itself as AI.",
    ],
    tags: ["UX Research", "Fintech", "AI"],
    meta: [
      { label: "Role", value: "Product Designer" },
      { label: "Timeline", value: "1 Week Sprint" },
      { label: "Product", value: "jAI (within Jumpp)" },
    ],
    imageLabel: "jAI — UX Research",
    ground: "#17120f",
    caseStudy: "published",
    featured: false,
  },
  {
    id: "ux-process",
    title: "UX Process Reboot",
    href: "/works/ux-process",
    category: "Process · AI",
    summary:
      "A six-stage AI-assisted workflow that turns a requirement into a walkable prototype in a day.",
    body: [
      "I kept drawing flows that could not be built, and found out after handoff. Now BAs, QA and engineering walk a clickable prototype before I open Figma.",
    ],
    tags: ["Process", "AI", "Product Design"],
    meta: [
      { label: "Role", value: "Senior Product Designer" },
      { label: "Company", value: "Finvasia" },
      { label: "Type", value: "Design Process" },
    ],
    imageLabel: "UX Process — AI Workflow",
    ground: "#0f1712",
    caseStudy: "published",
    featured: false,
  },
  {
    id: "jumpp",
    title: "Jumpp",
    href: "/works/jumpp",
    category: "AI Product · Neobanking",
    summary: "AI-powered neobanking app. Complex financial flows made approachable.",
    body: [
      "I designed Finvasia's AI neobanking app from zero, starting with onboarding and account setup.",
    ],
    tags: ["Fintech", "Neobanking", "AI"],
    meta: [
      { label: "Role", value: "Senior Product Designer" },
      { label: "Company", value: "Finvasia" },
      { label: "Type", value: "AI-Powered Mobile App · 0 to 1" },
    ],
    imageLabel: "Jumpp — App Design",
    ground: "#15101a",
    caseStudy: "coming-soon",
    featured: false,
  },
  {
    id: "friender",
    title: "Friender",
    href: "/works/friender",
    category: "SaaS Product · Lead Generation",
    summary: "SaaS platform turning Facebook connections into a lead generation pipeline.",
    body: [
      "At Tier5 I designed Friender, a SaaS platform that works a small business's Facebook connections as a lead list, and built its design system from scratch.",
    ],
    tags: ["SaaS", "Lead Generation", "Design System"],
    meta: [
      { label: "Role", value: "Product Designer" },
      { label: "Company", value: "Tier5" },
      { label: "Type", value: "SaaS Platform · Design System" },
    ],
    imageLabel: "Friender — Platform Design",
    ground: "#0f1418",
    caseStudy: "coming-soon",
    featured: false,
  },
  {
    id: "uxmantra",
    title: "UXMantra",
    href: "/works/uxmantra",
    category: "Personal Project · AI Tool",
    summary: "An AI agent that pulls the research while you are still making the decision.",
    body: [
      "I built UXMantra alone on the Gemini API, prototyped it in Google AI Studio and put it on Vercel. It holds UX research within reach while you are still making the call.",
    ],
    tags: ["Personal", "AI", "UX Research"],
    meta: [
      { label: "Role", value: "Solo Builder" },
      { label: "Built with", value: "Gemini API · Vercel" },
      { label: "Type", value: "AI Product" },
    ],
    imageLabel: "UXMantra — In Development",
    ground: "#18140c",
    caseStudy: "coming-soon",
    featured: false,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProject(id: string) {
  const found = projects.find((project) => project.id === id);
  if (!found) throw new Error(`Unknown project: ${id}`);
  return found;
}

/** Two-digit position in the one list: the number on covers, rows and heroes. */
export function projectNumber(id: string) {
  return String(projects.findIndex((project) => project.id === id) + 1).padStart(2, "0");
}

/** The next written case study after this one, wrapping round the list. */
export function nextCaseStudy(id: string) {
  const from = projects.findIndex((project) => project.id === id);
  for (let step = 1; step <= projects.length; step++) {
    const candidate = projects[(from + step) % projects.length];
    if (candidate.caseStudy === "published" && candidate.id !== id) return candidate;
  }
  return projects[0];
}

/**
 * Counts the copy quotes. The home page and /works both print sentences like
 * "Eight projects. Five written up." Spelling those by hand meant every change
 * to the list above silently made three sentences wrong, so they are derived.
 */
export const projectCounts = {
  total: projects.length,
  published: projects.filter((project) => project.caseStudy === "published").length,
  draft: projects.filter((project) => project.caseStudy === "coming-soon").length,
};

const WORDS = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
];

/** Small numbers as words, for sentences. Anything larger stays a numeral. */
export function spell(n: number, capitalise = false) {
  const word = WORDS[n] ?? String(n);
  return capitalise ? word.charAt(0).toUpperCase() + word.slice(1) : word;
}
