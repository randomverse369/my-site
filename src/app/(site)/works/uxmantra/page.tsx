import type { Metadata } from "next";
import CaseHero from "@/components/case-study/CaseHero";
import { DraftBody, NextProject } from "@/components/case-study/blocks";

export const metadata: Metadata = {
  title: "UXMantra",
  description: "An AI agent that thinks alongside designers.",
};

// "Status: Live" is as Sachin's page had it. An earlier session's note says
// UXMantra has never shipped; he has been asked which is true.
export default function UXMantraCaseStudy() {
  return (
    <>
      <CaseHero
        id="uxmantra"
        kicker="Personal Project · AI Tool"
        title="UXMantra"
        standfirst="An AI agent that thinks alongside designers."
        meta={[
          { label: "Role", value: "Creator & Designer" },
          { label: "Type", value: "Personal Project · AI Tool" },
          { label: "Status", value: "Live" },
        ]}
      />
      <DraftBody product="UXMantra" href="https://uxmantra.ai/" />
      <NextProject id="uxmantra" />
    </>
  );
}
