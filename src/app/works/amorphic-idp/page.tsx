import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Amorphic IDP",
  description:
    "A review layer for generative AI extraction, designed for people who don't know what a prompt is.",
};

export default function AmorphicIDPCaseStudy() {
  return (
    <div className="container-page mb-32">

      {/* Back Navigation */}
      <div className="pt-8 mb-16">
        <Link
          href="/works"
          className="text-label font-mono uppercase tracking-wider text-metadata interactive hover:text-accent flex items-center gap-2"
        >
          <span className="text-accent">←</span> Back to Works
        </Link>
      </div>

      {/* Case Study Header */}
      <div className="grid grid-cols-12 gap-6 mb-32">
        <div className="col-span-12 md:col-span-10 lg:col-span-9">
          <p className="text-label uppercase tracking-wider font-mono text-metadata mb-8">
            AI PRODUCT · ENTERPRISE DOCUMENT PROCESSING
          </p>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tight leading-[0.9] text-foreground mb-12">
            Amorphic IDP
          </h1>
          <p className="text-2xl md:text-3xl text-foreground font-light tracking-tight leading-snug mb-16">
            Designing a review layer for generative AI extraction, for people who don&apos;t know
            what a prompt is.
          </p>

          {/* Metadata Bar */}
          <div className="flex flex-col md:flex-row md:flex-wrap gap-8 md:gap-16 border-t border-metadata/20 pt-8">
            <div className="flex flex-col gap-2">
              <span className="text-label font-mono uppercase tracking-wider text-metadata">Role</span>
              <span className="text-foreground font-light">Product Designer</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-label font-mono uppercase tracking-wider text-metadata">Team</span>
              <span className="text-foreground font-light">DigiMantra, embedded with Cloudwick</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-label font-mono uppercase tracking-wider text-metadata">Dates</span>
              <span className="text-foreground font-light">October 2024 — April 2025</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-label font-mono uppercase tracking-wider text-metadata">Surface</span>
              <span className="text-foreground font-light">Desktop web, 1440px</span>
            </div>
          </div>
        </div>
      </div>

      {/* The Product */}
      <div className="grid grid-cols-12 gap-6 border-t border-metadata/20 pt-24 mb-32">
        <div className="col-span-12 md:col-span-4 mb-12 md:mb-0">
          <h2 className="text-label font-mono uppercase tracking-wider text-metadata sticky top-32">
            The Product
          </h2>
        </div>
        <div className="col-span-12 md:col-span-8 lg:col-span-7 border-l-0 md:border-l border-metadata/20 pl-0 md:pl-8">
          <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8">
            Amorphic IDP turns business documents into structured data. A user uploads invoices,
            contracts, or court complaints. The system runs OCR, passes the text to Claude 3.5
            Sonnet through Amazon Bedrock, and returns named fields the user can query, chart, and
            export.
          </p>
          <p className="text-lg text-metadata leading-relaxed">
            Cloudwick&apos;s engineers had the extraction working before I joined. They measured 98%
            accuracy on a reviewed sample. My work started on the other side of that number.
          </p>
        </div>
      </div>

      {/* The Problem */}
      <div className="grid grid-cols-12 gap-6 border-t border-metadata/20 pt-24 mb-32">
        <div className="col-span-12 md:col-span-4 mb-12 md:mb-0">
          <h2 className="text-label font-mono uppercase tracking-wider text-metadata sticky top-32">
            The Problem
          </h2>
        </div>
        <div className="col-span-12 md:col-span-8 lg:col-span-7 border-l-0 md:border-l border-metadata/20 pl-0 md:pl-8">
          <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8">
            98% accuracy means two wrong values in every hundred documents, and nobody knows which
            two.
          </p>
          <p className="text-lg text-metadata leading-relaxed mb-8">
            A procurement team pulling shipping addresses can live with that. A research analyst at
            a state judiciary counting drug quantities across criminal complaints cannot, because
            the number she reports becomes a policy recommendation.
          </p>
          <p className="text-lg text-metadata leading-relaxed">
            So the question wasn&apos;t how to display extraction results. It was how to let someone
            with no technical background decide whether to trust a specific value on a specific
            page, and then act on that judgment without breaking the record.
          </p>
        </div>
      </div>

      {/* Oversized Pull Quote */}
      <div className="grid grid-cols-12 gap-6 my-48">
        <div className="col-span-12 md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3">
          <blockquote className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] text-foreground border-l-4 border-accent pl-8 md:pl-12">
            &quot;The reviewer never sees the model. She sees a value, a page, and a decision she
            has to be able to defend.&quot;
          </blockquote>
        </div>
      </div>

      {/* What I Designed */}
      <div className="grid grid-cols-12 gap-6 border-t border-metadata/20 pt-24 mb-32">
        <div className="col-span-12 md:col-span-4 mb-12 md:mb-0">
          <h2 className="text-label font-mono uppercase tracking-wider text-metadata sticky top-32">
            What I Designed
          </h2>
        </div>
        <div className="col-span-12 md:col-span-8 lg:col-span-7 border-l-0 md:border-l border-metadata/20 pl-0 md:pl-8">

          {/* Six decisions. Each is the decision first, the reason second — the
              reason is the part a reader can argue with. */}
          <ol className="flex flex-col gap-20">

            <li>
              <span className="text-label font-mono uppercase tracking-wider text-accent mb-4 block">
                01
              </span>
              <h3 className="text-3xl md:text-4xl font-light tracking-tight text-foreground mb-6">
                The source document sits beside the extracted values.
              </h3>
              <p className="text-lg text-metadata leading-relaxed mb-6">
                The Output screen splits in two. Extracted fields on the left as key and value
                pairs. The original document on the right with page navigation.
              </p>
              <p className="text-lg text-metadata leading-relaxed">
                A reviewer checking &quot;Distributor Address&quot; reads the model&apos;s answer and
                the page it came from without opening a second window or losing her place in a
                ten page complaint.
              </p>
            </li>

            <li>
              <span className="text-label font-mono uppercase tracking-wider text-accent mb-4 block">
                02
              </span>
              <h3 className="text-3xl md:text-4xl font-light tracking-tight text-foreground mb-6">
                OCR results and model output are separate views.
              </h3>
              <p className="text-lg text-metadata leading-relaxed mb-6">
                I put a toggle above the table: OCR Results, Output.
              </p>
              <p className="text-lg text-metadata leading-relaxed">
                Two things break in this pipeline. The scanner misreads a character, or the model
                structures the text wrong. A user looking only at the final field sees one kind of
                error and can&apos;t tell which happened. The toggle lets her check the raw text,
                locate the failure, and report something an engineer can act on.
              </p>
            </li>

            <li>
              <span className="text-label font-mono uppercase tracking-wider text-accent mb-4 block">
                03
              </span>
              <h3 className="text-3xl md:text-4xl font-light tracking-tight text-foreground mb-6">
                Reviewers suggest values, they don&apos;t edit them.
              </h3>
              <p className="text-lg text-metadata leading-relaxed mb-6">
                Each row carries a <span className="text-foreground">+ Suggest Value</span> action
                rather than an editable cell.
              </p>
              <p className="text-lg text-metadata leading-relaxed">
                In a judiciary, extracted records feed analysis that feeds policy. If any reviewer
                can overwrite a value in place, the provenance disappears and nobody can
                reconstruct what the model originally returned. A suggestion keeps both: the
                extracted value, the proposed correction, and who proposed it.
              </p>
            </li>

            <li>
              <span className="text-label font-mono uppercase tracking-wider text-accent mb-4 block">
                04
              </span>
              <h3 className="text-3xl md:text-4xl font-light tracking-tight text-foreground mb-6">
                Flagging a field requires a written reason.
              </h3>
              <p className="text-lg text-metadata leading-relaxed mb-6">
                The flag icon opens a text area that names the field it&apos;s about: Write a reason
                for flagging &apos;Shipping Method&apos; for review. The user types, then hits Flag
                for Review.
              </p>
              <p className="text-lg text-metadata leading-relaxed">
                A bare flag tells an engineer that a field is wrong. It doesn&apos;t tell him what
                wrong looks like, and prompt changes need that. Naming the field in the prompt text
                also stops the common mistake of flagging one row and writing about another.
              </p>
            </li>

            <li>
              <span className="text-label font-mono uppercase tracking-wider text-accent mb-4 block">
                05
              </span>
              <h3 className="text-3xl md:text-4xl font-light tracking-tight text-foreground mb-6">
                Sensitivity is visible in the list, not buried in settings.
              </h3>
              <p className="text-lg text-metadata leading-relaxed mb-6">
                The Document Stores table carries keyword tags on every row, including PII Data and
                Confidential, alongside the trigger type that governs when the store runs: file
                based, on demand, or time based.
              </p>
              <p className="text-lg text-metadata leading-relaxed">
                Someone scanning a long list of stores needs to know what&apos;s inside one before
                opening it. Putting the tags in a detail screen would have meant opening a
                confidential store to learn it was confidential.
              </p>
            </li>

            <li>
              <span className="text-label font-mono uppercase tracking-wider text-accent mb-4 block">
                06
              </span>
              <h3 className="text-3xl md:text-4xl font-light tracking-tight text-foreground mb-6">
                One set of screens, two very different documents.
              </h3>
              <p className="text-lg text-metadata leading-relaxed mb-6">
                The same interface holds a three field invoice and a ten page complaint with nested
                tables. I designed the value column to carry a plain string, a number, or a table
                summary that expands, so a row can read &quot;Table, 3 Records&quot; without the
                layout collapsing.
              </p>
              <p className="text-lg text-metadata leading-relaxed">
                The document viewer paginates because complaints run long and invoices don&apos;t.
              </p>
            </li>

          </ol>
        </div>
      </div>

      {/* Coverage */}
      <div className="grid grid-cols-12 gap-6 border-t border-metadata/20 pt-24 mb-32">
        <div className="col-span-12 md:col-span-4 mb-12 md:mb-0">
          <h2 className="text-label font-mono uppercase tracking-wider text-metadata sticky top-32">
            Coverage
          </h2>
        </div>
        <div className="col-span-12 md:col-span-8 lg:col-span-7 border-l-0 md:border-l border-metadata/20 pl-0 md:pl-8">
          <p className="text-lg text-metadata leading-relaxed mb-12">
            I built six areas, each one with blank, happy path, error, and edge case states drawn
            and handed off, along with the shared components behind them: file status, badges,
            alerts, search and filter groups, and the create and update modals.
          </p>

          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-6 border-t border-metadata/20 pt-8 mb-12">
            {[
              "Onboarding",
              "Dashboard",
              "Document Stores",
              "Process Flows",
              "Management",
              "Profile & Settings",
            ].map((area) => (
              <li key={area} className="flex flex-col gap-2">
                <span className="text-accent text-2xl font-light" aria-hidden="true">—</span>
                <span className="text-foreground font-light">{area}</span>
              </li>
            ))}
          </ul>

          <p className="text-xl md:text-2xl text-foreground leading-relaxed">
            The blank states did more work than I expected. A new user opening Document Stores on
            day one sees an empty table, and that screen has to explain what a document store is
            and why she&apos;d make one.
          </p>
        </div>
      </div>

      {/* Where It Went */}
      <div className="grid grid-cols-12 gap-6 border-t border-metadata/20 pt-24">
        <div className="col-span-12 md:col-span-4 mb-12 md:mb-0">
          <h2 className="text-label font-mono uppercase tracking-wider text-metadata sticky top-32">
            Where It Went
          </h2>
        </div>
        <div className="col-span-12 md:col-span-8 lg:col-span-7 border-l-0 md:border-l border-metadata/20 pl-0 md:pl-8">
          <p className="text-lg text-metadata leading-relaxed mb-8">
            Cloudwick deployed Amorphic IDP at the Hawaii State Judiciary&apos;s Criminal Justice
            Research Institute. CJRI used it to pull drug types and quantities out of freeform text
            in complaint documents, data their case management system held but couldn&apos;t query.
          </p>
          <p className="text-lg text-metadata leading-relaxed mb-8">
            Cloudwick reported 98% extraction accuracy on manual review and processing costs near
            $1 per 20 documents, and published the deployment as a customer case study.
          </p>
          <p className="text-xl md:text-2xl text-foreground leading-relaxed">
            Those numbers belong to the platform and the model, not to the screens.
          </p>
        </div>
      </div>

    </div>
  );
}
