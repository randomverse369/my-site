import type { Metadata } from "next";
import CaseHero from "@/components/case-study/CaseHero";
import { DraftBody, NextProject } from "@/components/case-study/blocks";

export const metadata: Metadata = {
  title: "Friender",
  description: "SaaS platform turning Facebook connections into a lead generation pipeline.",
};

export default function FrienderCaseStudy() {
  return (
    <>
      <CaseHero
        id="friender"
        kicker="SaaS Product · Lead Generation"
        title="Friender"
        standfirst="SaaS platform turning Facebook connections into a lead generation pipeline."
        meta={[
          { label: "Role", value: "Product Designer" },
          { label: "Industry", value: "SaaS · Lead Generation" },
          { label: "Status", value: "Live" },
        ]}
      />
      <DraftBody product="Friender" href="https://start.friender.io/" />
      <NextProject id="friender" />
    </>
  );
}
