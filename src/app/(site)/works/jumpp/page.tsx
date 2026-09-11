import type { Metadata } from "next";
import CaseHero from "@/components/case-study/CaseHero";
import { DraftBody, NextProject } from "@/components/case-study/blocks";

export const metadata: Metadata = {
  title: "Jumpp",
  description: "AI-powered neobanking app. Complex financial flows made approachable.",
};

export default function JumppCaseStudy() {
  return (
    <>
      <CaseHero
        id="jumpp"
        kicker="AI Product · Neobanking"
        title="Jumpp"
        standfirst="AI-powered neobanking app. Complex financial flows made approachable."
        meta={[
          { label: "Role", value: "Senior Product Designer" },
          { label: "Industry", value: "Fintech · Neobanking" },
          { label: "Status", value: "Live" },
        ]}
      />
      <DraftBody product="Jumpp" href="https://jumpp.finance/" />
      <NextProject id="jumpp" />
    </>
  );
}
