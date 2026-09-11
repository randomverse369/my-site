import type { ReactNode } from "react";
import ScrambleText from "@/components/signal/ScrambleText";

type Props = {
  index: number;
  label: string;
  children: ReactNode;
};

/**
 * The case study spine: a numbered label that holds its place while the
 * section scrolls, and the argument beside it.
 */
export default function CaseSection({ index, label, children }: Props) {
  const number = String(index).padStart(2, "0");

  return (
    <section className="sn-gutter grid grid-cols-12 gap-x-6 gap-y-8 border-t sn-rule py-[12vh]">
      <div className="col-span-12 md:col-span-4">
        <h2 className="sn-mono sn-muted md:sticky md:top-[calc(var(--nav-height)+1.5rem)]">
          <ScrambleText onScroll text={`(${number}) ${label}`} />
        </h2>
      </div>
      <div className="cs-flow col-span-12 md:col-span-8 lg:col-span-7">{children}</div>
    </section>
  );
}
