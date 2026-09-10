import { Metadata } from "next";
import { experiences, type Experience } from "@/lib/experience";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Seven years of design across fintech, enterprise SaaS and edtech. Four roles, newest first.",
};

const awards = [
  { title: "Dream Team Award", where: "Tier5" },
  { title: "Best Employee Performer", where: "Tutelage, 2020 and 2021" },
];

const skills = [
  {
    group: "Design",
    items: [
      "Product design",
      "UX research",
      "Interaction design",
      "Design systems",
      "Usability testing",
      "Prototyping",
    ],
  },
  {
    group: "AI and process",
    items: [
      "AI-assisted prototyping",
      "Problem framing",
      "AI behaviour design",
      "Prompt engineering",
      "Design to development handoff",
    ],
  },
  {
    group: "Tools",
    items: [
      "Figma, Figma Make",
      "Lovable, Antigravity",
      "ChatGPT, Claude",
      "Gemini API, Google AI Studio",
      "Vercel",
    ],
  },
];

/* The timeline maths. Months since year zero is enough resolution for a bar
   that is only ever read as "this role was longer than that one".

   `now` is resolved when the page is generated, so a current role's length is
   correct as of the last deploy rather than the last page view. */
const toMonths = (yearMonth: string) => {
  const [year, month] = yearMonth.split("-").map(Number);
  return year * 12 + (month - 1);
};

const today = new Date();
const now = today.getFullYear() * 12 + today.getMonth();

const startOf = (role: Experience) => toMonths(role.start);
const endOf = (role: Experience) => (role.end ? toMonths(role.end) : now);

const firstMonth = Math.min(...experiences.map(startOf));
const lastMonth = Math.max(...experiences.map(endOf));
const totalSpan = lastMonth - firstMonth;

/** "3 yrs", "1 yr 4 mo", "6 mo". */
function readableLength(role: Experience) {
  const months = endOf(role) - startOf(role);
  const years = Math.floor(months / 12);
  const rest = months % 12;
  const parts = [];
  if (years > 0) parts.push(`${years} ${years === 1 ? "yr" : "yrs"}`);
  if (rest > 0) parts.push(`${rest} mo`);
  return parts.join(" ") || "under a month";
}

function RoleEntry({ role }: { role: Experience }) {
  const offset = ((startOf(role) - firstMonth) / totalSpan) * 100;
  const width = ((endOf(role) - startOf(role)) / totalSpan) * 100;

  return (
    <article className="grid grid-cols-12 gap-x-6 gap-y-8 border-t border-rule py-12 md:py-16">
      <div className="col-span-12 md:col-span-4">
        <div className="md:sticky md:top-32">
          <p className="label text-metadata">{role.year}</p>
          <h3 className="display mt-2 text-title font-bold text-foreground">
            {role.company}
          </h3>
          <p className="mt-2 text-body-lg text-steel">{role.role}</p>

          <p className="label mt-8 text-metadata">{readableLength(role)}</p>
          {/* The bar says the same thing as the line above it, so it carries no
              information of its own and stays out of the accessibility tree. */}
          <div aria-hidden="true" className="mt-3 h-1 w-full rounded-full bg-chip">
            <div
              className="h-1 rounded-full bg-foreground"
              style={{ marginInlineStart: `${offset}%`, width: `${width}%` }}
            />
          </div>
        </div>
      </div>

      <div className="col-span-12 md:col-span-8 lg:col-span-7 md:border-l md:border-rule md:pl-8 lg:pl-10">
        <p className="label text-metadata">{role.context}</p>
        <p className="mt-6 text-lead text-foreground">{role.summary}</p>

        <ul className="mt-10 flex flex-col divide-y divide-rule border-y border-rule">
          {role.achievements.map((achievement) => (
            <li key={achievement} className="py-4 text-body-lg text-steel">
              {achievement}
            </li>
          ))}
        </ul>

        {role.projects && (
          <p className="label mt-8 text-metadata">
            <span className="text-foreground">Key projects</span> {role.projects}
          </p>
        )}
      </div>
    </article>
  );
}

export default function Experience() {
  const current = experiences[0];

  return (
    <div className="container-page mb-32 md:mb-40">
      <header className="grid grid-cols-12 gap-6 pt-4 md:pt-12">
        <div className="col-span-12 lg:col-span-10">
          <p className="label text-metadata">Experience</p>
          <h1 className="display mt-6 text-d2 text-foreground">
            Seven years, four companies.
          </h1>
          <p className="mt-10 max-w-3xl text-lead text-steel">
            I started as the only designer at a small edtech company and now design AI
            products at Finvasia, where I was again the first designer hired. Newest role
            first.
          </p>

          <dl className="mt-16 flex flex-wrap gap-x-16 gap-y-8 border-t border-rule pt-8">
            <div>
              <dt className="label text-metadata">Span</dt>
              <dd className="mt-2 text-body-lg text-foreground">2019 to present</dd>
            </div>
            <div>
              <dt className="label text-metadata">Companies</dt>
              <dd className="mt-2 text-body-lg text-foreground">{experiences.length}</dd>
            </div>
            <div>
              <dt className="label text-metadata">Now</dt>
              <dd className="mt-2 text-body-lg text-foreground">
                {current.role}, {current.company}
              </dd>
            </div>
          </dl>
        </div>
      </header>

      <section className="mt-24 md:mt-32" aria-labelledby="roles">
        <h2 id="roles" className="label text-metadata">
          Roles
        </h2>

        <div className="mt-10">
          {experiences.map((role) => (
            <RoleEntry key={role.id} role={role} />
          ))}
        </div>
      </section>

      <section
        className="mt-32 grid grid-cols-12 gap-x-6 gap-y-12 border-t border-rule pt-16 md:mt-40"
        aria-labelledby="awards"
      >
        <div className="col-span-12 md:col-span-4">
          <h2 id="awards" className="label text-metadata">
            Awards
          </h2>
        </div>
        <div className="col-span-12 md:col-span-8 lg:col-span-7">
          <ul className="flex flex-col divide-y divide-rule border-y border-rule">
            {awards.map((award) => (
              <li key={award.title} className="flex flex-wrap justify-between gap-4 py-5">
                <span className="text-body-lg text-foreground">{award.title}</span>
                <span className="label text-metadata">{award.where}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="mt-24 grid grid-cols-12 gap-x-6 gap-y-12 md:mt-32"
        aria-labelledby="skills"
      >
        <div className="col-span-12 md:col-span-4">
          <h2 id="skills" className="label text-metadata">
            Skills and tools
          </h2>
        </div>

        <div className="col-span-12 md:col-span-8">
          <div className="grid gap-px overflow-hidden rounded-lg bg-rule sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((column) => (
              <div key={column.group} className="bg-surface p-6 md:p-8">
                <h3 className="label text-metadata">{column.group}</h3>
                <ul className="mt-6 flex flex-col gap-3">
                  {column.items.map((item) => (
                    <li key={item} className="text-steel">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
