"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface HeroCinematicProps {
  heading?: string;
  highlight?: string;
  subtitle?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export function HeroCinematic({
  heading = "Build websites that give chills",
  highlight = "give chills",
  subtitle = "Production-ready React components. Animated heroes, GSAP sections, cinematic UI. Copy code or copy prompt.",
  primaryCta = { label: "Browse Components", href: "/components" },
  secondaryCta = { label: "View Templates", href: "/templates" },
}: HeroCinematicProps) {
  const heroRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(headingRef.current, { y: 60, opacity: 0, duration: 1 })
        .from(subRef.current, { y: 40, opacity: 0, duration: 0.8 }, "-=0.5")
        .from(ctaRef.current, { y: 30, opacity: 0, duration: 0.6 }, "-=0.4");

      if (headingRef.current) {
        gsap.to(headingRef.current, {
          yPercent: -20,
          opacity: 0.3,
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const parts = heading.split(highlight);

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900/30 via-[#0A0A0A] to-fuchsia-900/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#0A0A0A_70%)]" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
        <h1
          ref={headingRef}
          className="font-display text-5xl font-bold leading-tight tracking-tight md:text-7xl"
        >
          {parts[0]}
          <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            {highlight}
          </span>
          {parts[1] || ""}
        </h1>
        <p
          ref={subRef}
          className="mx-auto mt-6 max-w-2xl text-lg text-gray-400"
        >
          {subtitle}
        </p>
        <div ref={ctaRef} className="mt-8 flex items-center justify-center gap-4">
          <a
            href={primaryCta.href}
            className="rounded-full bg-violet-600 px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-violet-500"
          >
            {primaryCta.label}
          </a>
          <a
            href={secondaryCta.href}
            className="rounded-full border border-white/10 px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-white/5"
          >
            {secondaryCta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
