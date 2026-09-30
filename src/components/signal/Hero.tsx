"use client";

import { useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { onIntroDone } from "@/lib/intro";
import NoiseField from "./NoiseField";
import SplitReveal from "./SplitReveal";
import LocalClock from "./LocalClock";

gsap.registerPlugin(SplitText, ScrollTrigger, useGSAP);

/**
 * Full-bleed opening: the noise field, the standfirst and facts, and the name
 * set edge to edge. `data-hero-name` tells SiteHeader to keep the name out of
 * the bar while this one is on screen.
 */
export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const fieldRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const nameWrapRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      const wrap = nameWrapRef.current;
      const name = nameRef.current;
      if (!wrap || !name) return;

      // Edge to edge: measure the name at 100px, then scale it to the column.
      const fit = () => {
        const style = getComputedStyle(wrap);
        const available =
          wrap.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight);
        // A hidden tab lays out at zero width; keep the CSS size until it has one.
        if (available <= 0) return;
        name.style.fontSize = "100px";
        const width = name.getBoundingClientRect().width;
        if (width > 0) name.style.fontSize = `${(available / width) * 100}px`;
      };

      fit();
      const ro = new ResizeObserver(fit);
      ro.observe(wrap);
      document.fonts?.ready.then(fit);

      gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
        // aria: "none" leaves the accessibility tree alone. The default writes
        // aria-label onto each .sn-name-line <span>, where ARIA prohibits it;
        // letting it label the chars instead would read the name out one
        // letter at a time. The <h1> carries the name itself, and the spans
        // are hidden in the markup below.
        const split = SplitText.create(name.querySelectorAll(".sn-name-line"), {
          type: "chars",
          aria: "none",
        });
        fit(); // Split characters lose a little kerning; re-fit to the real width.

        // The name rises as the preloader lifts off it, or at once on a
        // return visit. The tween is built paused inside this context, so a
        // revert always owns it, and the intro only presses play. Wrapping the
        // callback in contextSafe instead nested the two GSAP contexts inside
        // each other whenever the intro was already over (the callback then
        // runs synchronously, inside this matchMedia context), and reverting
        // them on navigation recursed until the stack overflowed.
        gsap.set(split.chars, { yPercent: 115 });
        const rise = gsap.to(split.chars, {
          yPercent: 0,
          duration: 1.4,
          ease: "expo.out",
          stagger: 0.04,
          paused: true,
        });
        const stop = onIntroDone(() => rise.play());

        // On the way out the name sinks behind the next section and the field dims.
        const exit = () => ({
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        });
        gsap.to(name, { yPercent: 40, ease: "none", scrollTrigger: exit() });
        gsap.to(fieldRef.current, { opacity: 0.25, ease: "none", scrollTrigger: exit() });

        return () => {
          stop();
          split.revert();
        };
      });

      return () => ro.disconnect();
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      data-bleed
      data-tone="dark"
      aria-labelledby="hero-name"
      className="relative isolate flex h-[100svh] min-h-[620px] flex-col overflow-hidden"
    >
      <div ref={fieldRef} className="absolute inset-0 -z-10">
        <NoiseField className="absolute inset-0 size-full" quietRef={copyRef} />
      </div>

      <div
        ref={copyRef}
        className="sn-gutter mt-auto grid grid-cols-12 items-end gap-x-6 gap-y-8 pb-6 md:pb-8"
      >
        <SplitReveal
          as="p"
          onScroll={false}
          waitForIntro
          delay={0.5}
          className="sn-lead col-span-12 max-w-[34ch] [text-wrap:balance] md:col-span-6 lg:col-span-5"
        >
          {/* Sachin's philosophy, not his sector: the line he had before the
              redesign was about cutting through noise to deliver value to
              users and businesses both. Keep it about how he works. */}
          I cut through the <em className="sn-serif">noise</em> to design products that serve the
          people using them and the business paying for them.
        </SplitReveal>

        <dl className="sn-mono col-span-12 grid grid-cols-2 gap-x-6 gap-y-5 md:col-span-5 md:col-start-8 lg:col-span-4 lg:col-start-9">
          <div>
            <dt className="sn-muted">Role</dt>
            <dd className="mt-1">Senior Product Designer</dd>
          </div>
          <div>
            <dt className="sn-muted">Experience</dt>
            <dd className="mt-1">7+ years</dd>
          </div>
          <div>
            <dt className="sn-muted">Local time</dt>
            <dd className="mt-1">
              <LocalClock /> IST
            </dd>
          </div>
          <div>
            <dt className="sn-muted">Status</dt>
            <dd className="mt-1 flex items-start gap-2">
              <span
                aria-hidden="true"
                className="sn-pulse mt-[0.3em] size-2 shrink-0 rounded-full bg-signal"
              />
              Open to senior roles at AI companies
            </dd>
          </div>
        </dl>
      </div>

      <div ref={nameWrapRef} className="sn-gutter pb-[1.5vw]">
        {/* The name is set on the <h1>, where aria-label is permitted, and the
            two lines are hidden: split into characters they would otherwise be
            announced letter by letter. */}
        <h1
          id="hero-name"
          ref={nameRef}
          data-hero-name
          aria-label="Sachin Barnwal"
          className="sn-mega w-max"
        >
          <span aria-hidden="true" className="sn-name-line block pt-[0.06em] [overflow:clip] md:inline-block">
            Sachin
          </span>{" "}
          <span aria-hidden="true" className="sn-name-line block pt-[0.06em] [overflow:clip] md:inline-block">
            Barnwal
          </span>
        </h1>
      </div>
    </section>
  );
}
