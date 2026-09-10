import Image from "next/image";
import WorksList from "@/components/WorksList";
import HeroSection from "@/components/HeroSection";
import ExperienceList from "@/components/ExperienceList";

const capabilities = [
  "Problem Solving",
  "User Research",
  "Competitor Analysis",
  "Design Systems",
  "AI Prototyping",
];

const Asterisk = () => (
  <span aria-hidden="true" className="text-metadata/60">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" className="size-6">
      <path d="M12 5v14M5.5 8.5l13 7M18.5 8.5l-13 7" />
    </svg>
  </span>
);

export default function Home() {
  return (
    <div className="w-full">
      {/* The hero band keeps the page ground rather than going white: the
          iridescent plate blends in `color`, which takes its luminosity from
          the backdrop, so over pure white it composites to nothing. */}
      {/* Pulled up under <main>'s nav offset and given it back as padding, so
          the white plane runs behind the floating nav pill as it does in the
          design instead of leaving a strip of page ground above it. */}
      <div className="relative -mt-[calc(var(--nav-height,4.75rem)+2rem)] overflow-hidden bg-background pb-24 pt-[calc(var(--nav-height,4.75rem)+5rem)] md:pb-32 md:pt-[calc(var(--nav-height,4.75rem)+7rem)]">
        {/* The iridescent plate. `mix-blend-mode: color` takes hue and
            saturation from the artwork and luminosity from what is behind it,
            so it has to sit in the same stacking context as this white plane —
            inside the z-10 content wrapper it had only transparency to blend
            with and rendered as the raw chrome image. */}
        <Image
          src="/hero-iridescence.png"
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="100vw"
          className="iridescence scale-[1.6] object-cover saturate-[2.75]"
        />
        <HeroSection />
      </div>

      <div className="pt-20 md:pt-28">
        <WorksList />
      </div>

      <div className="container-page mb-32 md:mb-40">
        {/* Experience */}
        <section
          className="mt-24 grid grid-cols-12 gap-x-6 gap-y-10 border-t border-rule pt-16"
          aria-labelledby="since-heading"
        >
          <div className="col-span-12 md:col-span-4">
            <p className="label text-metadata">Where I&apos;ve worked</p>
            <h2
              id="since-heading"
              className="display mt-2 text-d3 text-foreground"
            >
              Designing for humans since 2019
            </h2>
          </div>

          <div className="col-span-12 md:col-span-7 md:col-start-6">
            <ExperienceList />
          </div>
        </section>

        {/* 0 to 1 */}
        <section className="mt-32 md:mt-40" aria-labelledby="zero-to-one-heading">
          <h2
            id="zero-to-one-heading"
            className="display text-d2 text-foreground max-w-[820px]"
          >
            Building products from 0 to 1
          </h2>

          <div className="mt-16 flex items-center justify-end gap-10">
            <span aria-hidden="true" className="hidden h-px flex-1 bg-rule md:block" />
            <p className="text-body-lg text-steel md:max-w-[519px]">
              I take unclear requirements and turn them into products people
              actually use.
            </p>
          </div>
        </section>
      </div>

      {/* Capabilities. The track is twice as wide as the strip and clipped to
          it, so the loop reads as continuous inside the page column. */}
      <div className="container-page mb-32 md:mb-40">
        <div className="overflow-hidden border-y border-rule py-6">
          <div className="marquee-track flex w-max items-center gap-4">
            {[0, 1].map((copy) => (
              <ul
                key={copy}
                aria-hidden={copy === 1}
                className="flex items-center gap-4"
              >
                {capabilities.map((item) => (
                  <li key={item} className="flex items-center gap-4">
                    <span className="whitespace-nowrap px-4 py-2 text-body-lg font-medium text-metadata">
                      {item}
                    </span>
                    <Asterisk />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
