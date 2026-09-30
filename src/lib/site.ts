/** How to reach Sachin. One place, so the header menu and the footer cannot drift. */
export const contact = {
  email: "sachin.aiux@gmail.com",
  linkedin: "https://www.linkedin.com/in/sachinbarnwal/",
  resume: "/resume.pdf",
} as const;

/**
 * The canonical origin. Every absolute URL the site emits — Open Graph images,
 * canonicals, the sitemap — is built from this, so it has to be the real
 * domain and never localhost: a share card that points at localhost is
 * invisible until somebody posts the link.
 *
 * NEXT_PUBLIC_SITE_URL overrides it for a staging origin, and a Vercel preview
 * deployment uses its own URL so preview cards do not claim to be production.
 */
const PRODUCTION_URL = "https://sachinbarnwal.com";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_ENV === "preview" && process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : PRODUCTION_URL);
