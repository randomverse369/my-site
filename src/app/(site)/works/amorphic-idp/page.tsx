import type { Metadata } from "next";
import CaseHero from "@/components/case-study/CaseHero";
import CaseSection from "@/components/case-study/CaseSection";
import { Decisions, FactGrid, NextProject, PullQuote } from "@/components/case-study/blocks";

export const metadata: Metadata = {
  title: "Amorphic IDP",
  description:
    "A review layer for generative AI extraction, designed for people who don't know what a prompt is.",
};

// The reference build for the case study spine: product, problem, the pull
// quote, six decisions (decision first, reason second), coverage, and where
// it went.
export default function AmorphicIDPCaseStudy() {
  return (
    <>
      <CaseHero
        id="amorphic-idp"
        kicker="AI Product · Enterprise Document Processing"
        title="Amorphic IDP"
        standfirst={
          <>
            Designing a review layer for generative AI extraction, for people who don&apos;t know what
            a prompt is.
          </>
        }
        meta={[
          { label: "Role", value: "Product Designer" },
          { label: "Team", value: "DigiMantra, embedded with Cloudwick" },
          { label: "Dates", value: "October 2024 — April 2025" },
          { label: "Surface", value: "Desktop web, 1440px" },
        ]}
      />

      <CaseSection index={1} label="The Product">
        <p className="cs-lead">
          Amorphic IDP turns business documents into structured data. A user uploads invoices,
          contracts, or court complaints. The system runs OCR, passes the text to Claude 3.5 Sonnet
          through Amazon Bedrock, and returns named fields the user can query, chart, and export.
        </p>
        <p className="cs-body">
          Cloudwick&apos;s engineers had the extraction working before I joined. They measured 98%
          accuracy on a reviewed sample. My work started on the other side of that number.
        </p>
      </CaseSection>

      <CaseSection index={2} label="The Problem">
        <p className="cs-lead">
          98% accuracy means two wrong values in every hundred documents, and nobody knows which two.
        </p>
        <p className="cs-body">
          A procurement team pulling shipping addresses can live with that. A research analyst at a
          state judiciary counting drug quantities across criminal complaints cannot, because the
          number she reports becomes a policy recommendation.
        </p>
        <p className="cs-body">
          So the question wasn&apos;t how to display extraction results. It was how to let someone with
          no technical background decide whether to trust a specific value on a specific page, and
          then act on that judgment without breaking the record.
        </p>
      </CaseSection>

      <PullQuote>
        &ldquo;The reviewer never sees the model. She sees a value, a page, and a decision she has to
        be able to defend.&rdquo;
      </PullQuote>

      <CaseSection index={3} label="What I Designed">
        <Decisions
          items={[
            {
              num: "01",
              title: "The source document sits beside the extracted values.",
              body: (
                <>
                  <p className="cs-body">
                    The Output screen splits in two. Extracted fields on the left as key and value
                    pairs. The original document on the right with page navigation.
                  </p>
                  <p className="cs-body">
                    A reviewer checking &quot;Distributor Address&quot; reads the model&apos;s answer
                    and the page it came from without opening a second window or losing her place in a
                    ten page complaint.
                  </p>
                </>
              ),
            },
            {
              num: "02",
              title: "OCR results and model output are separate views.",
              body: (
                <>
                  <p className="cs-body">I put a toggle above the table: OCR Results, Output.</p>
                  <p className="cs-body">
                    Two things break in this pipeline. The scanner misreads a character, or the model
                    structures the text wrong. A user looking only at the final field sees one kind of
                    error and can&apos;t tell which happened. The toggle lets her check the raw text,
                    locate the failure, and report something an engineer can act on.
                  </p>
                </>
              ),
            },
            {
              num: "03",
              title: <>Reviewers suggest values, they don&apos;t edit them.</>,
              body: (
                <>
                  <p className="cs-body">
                    Each row carries a <span className="cs-em">+ Suggest Value</span> action rather
                    than an editable cell.
                  </p>
                  <p className="cs-body">
                    In a judiciary, extracted records feed analysis that feeds policy. If any reviewer
                    can overwrite a value in place, the provenance disappears and nobody can
                    reconstruct what the model originally returned. A suggestion keeps both: the
                    extracted value, the proposed correction, and who proposed it.
                  </p>
                </>
              ),
            },
            {
              num: "04",
              title: "Flagging a field requires a written reason.",
              body: (
                <>
                  <p className="cs-body">
                    The flag icon opens a text area that names the field it&apos;s about: Write a
                    reason for flagging &apos;Shipping Method&apos; for review. The user types, then
                    hits Flag for Review.
                  </p>
                  <p className="cs-body">
                    A bare flag tells an engineer that a field is wrong. It doesn&apos;t tell him what
                    wrong looks like, and prompt changes need that. Naming the field in the prompt text
                    also stops the common mistake of flagging one row and writing about another.
                  </p>
                </>
              ),
            },
            {
              num: "05",
              title: "Sensitivity is visible in the list, not buried in settings.",
              body: (
                <>
                  <p className="cs-body">
                    The Document Stores table carries keyword tags on every row, including PII Data and
                    Confidential, alongside the trigger type that governs when the store runs: file
                    based, on demand, or time based.
                  </p>
                  <p className="cs-body">
                    Someone scanning a long list of stores needs to know what&apos;s inside one before
                    opening it. Putting the tags in a detail screen would have meant opening a
                    confidential store to learn it was confidential.
                  </p>
                </>
              ),
            },
            {
              num: "06",
              title: "One set of screens, two very different documents.",
              body: (
                <>
                  <p className="cs-body">
                    The same interface holds a three field invoice and a ten page complaint with nested
                    tables. I designed the value column to carry a plain string, a number, or a table
                    summary that expands, so a row can read &quot;Table, 3 Records&quot; without the
                    layout collapsing.
                  </p>
                  <p className="cs-body">
                    The document viewer paginates because complaints run long and invoices don&apos;t.
                  </p>
                </>
              ),
            },
          ]}
        />
      </CaseSection>

      <CaseSection index={4} label="Coverage">
        <p className="cs-body">
          I built six areas, each one with blank, happy path, error, and edge case states drawn and
          handed off, along with the shared components behind them: file status, badges, alerts,
          search and filter groups, and the create and update modals.
        </p>
        <FactGrid
          items={[
            "Onboarding",
            "Dashboard",
            "Document Stores",
            "Process Flows",
            "Management",
            "Profile & Settings",
          ]}
        />
        <p className="cs-lead">
          The blank states did more work than I expected. A new user opening Document Stores on day
          one sees an empty table, and that screen has to explain what a document store is and why
          she&apos;d make one.
        </p>
      </CaseSection>

      <CaseSection index={5} label="Where It Went">
        <p className="cs-body">
          Cloudwick deployed Amorphic IDP at the Hawaii State Judiciary&apos;s Criminal Justice
          Research Institute. CJRI used it to pull drug types and quantities out of freeform text in
          complaint documents, data their case management system held but couldn&apos;t query.
        </p>
        <p className="cs-body">
          Cloudwick reported 98% extraction accuracy on manual review and processing costs near $1 per
          20 documents, and published the deployment as a customer case study.
        </p>
        <p className="cs-lead">
          Those numbers belong to the platform and the model, not to the screens.
        </p>
      </CaseSection>

      <NextProject id="amorphic-idp" />
    </>
  );
}
