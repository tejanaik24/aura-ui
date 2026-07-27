"use client";

import { motion } from "framer-motion";

interface CTAGradientProps {
  heading?: string;
  highlight?: string;
  subtitle?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export function CTAGradient({
  heading = "Ready to build something amazing?",
  highlight = "something amazing",
  subtitle = "Join thousands of vibe coders shipping faster with curated, animated components.",
  primaryCta = { label: "Browse Components", href: "/components" },
  secondaryCta = { label: "View Pricing", href: "/about" },
}: CTAGradientProps) {
  const parts = heading.split(highlight);

  return (
    <section className="relative overflow-hidden py-32 px-4">
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 via-fuchsia-600/10 to-violet-600/10 animate-aurora bg-[length:200%_200%]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#0A0A0A_70%)]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 mx-auto max-w-3xl text-center"
      >
        <h2 className="font-display text-4xl font-bold md:text-5xl">
          {parts[0]}
          <span className="text-violet-400">{highlight}</span>
          {parts[1] || ""}
        </h2>
        <p className="mt-6 text-lg text-gray-400">{subtitle}</p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a
            href={primaryCta.href}
            className="rounded-full bg-violet-600 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-violet-500"
          >
            {primaryCta.label}
          </a>
          <a
            href={secondaryCta.href}
            className="rounded-full border border-white/10 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/5"
          >
            {secondaryCta.label}
          </a>
        </div>
      </motion.div>
    </section>
  );
}
