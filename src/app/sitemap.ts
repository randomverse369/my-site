import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";
import { siteUrl } from "@/lib/site";

/**
 * Case study URLs come from projects.ts rather than a second hand-kept list,
 * so adding a project cannot leave it out of the sitemap.
 *
 * lastModified is the build time: the site is fully static, so every page is
 * as fresh as the deploy that produced it and nothing finer is honest.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const pages = [
    { path: "/", priority: 1 },
    { path: "/works", priority: 0.9 },
    { path: "/about", priority: 0.8 },
    { path: "/experience", priority: 0.7 },
    ...projects.map((project) => ({
      path: project.href,
      // A written case study is worth more than a placeholder page.
      priority: project.caseStudy === "published" ? 0.8 : 0.4,
    })),
  ];

  return pages.map(({ path, priority }) => ({
    url: new URL(path, siteUrl).href,
    lastModified,
    changeFrequency: "monthly" as const,
    priority,
  }));
}
