import type { ComponentMeta, ComponentCategory } from "@/lib/types";

export const components: ComponentMeta[] = [
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // SECTION A: MARKETING BLOCKS (35 components)
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

  // --- HEROES (5) ---
  {
    slug: "hero-cinematic",
    name: "Cinematic Hero",
    subtitle: "Full-screen hero with gradient backdrop and scroll-triggered GSAP reveal",
    description: "A dramatic full-screen hero section with animated gradient background, staggered text entrance via GSAP, and a scroll-triggered parallax effect. Perfect for agency and SaaS landing pages.",
    category: "heroes",
    tags: ["GSAP", "Tailwind"],
    tier: "free",
    featured: true,
    previewVideo: "https://picsum.photos/seed/hero-cinematic/640/360",
    code: `"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function HeroCinematic() {
  const heroRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.from(headingRef.current, { y: 60, opacity: 0, duration: 1 })
      .from(subRef.current, { y: 40, opacity: 0, duration: 0.8 }, "-=0.5")
      .from(ctaRef.current, { y: 30, opacity: 0, duration: 0.6 }, "-=0.4");

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
  }, []);

  return (
    <section ref={heroRef} className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Animated gradient backdrop */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900 via-[#0A0A0A] to-fuchsia-900 opacity-80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#0A0A0A_70%)]" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
        <h1 ref={headingRef} className="font-display text-5xl font-bold leading-tight tracking-tight md:text-7xl">
          Build <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">websites that give chills</span>
        </h1>
        <p ref={subRef} className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
          Production-ready React components. Animated heroes, GSAP sections, cinematic UI. Copy code or copy prompt.
        </p>
        <div ref={ctaRef} className="mt-8 flex items-center justify-center gap-4">
          <a href="/components" className="rounded-full bg-violet-600 px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-violet-500">
            Browse Components
          </a>
          <a href="/about" className="rounded-full border border-white/10 px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-white/5">
            View Templates
          </a>
        </div>
      </div>
    </section>
  );
}`,
    prompt: "Build me a cinematic hero section with full-screen gradient backdrop (violet to fuchsia to dark), staggered GSAP text entrance animation, and scroll-triggered parallax fade. Use React, Tailwind CSS, GSAP with ScrollTrigger. Include a heading, subtitle, and two CTA buttons (primary filled + secondary outline). Dark theme, space-grotesk font for heading.",
  },
  {
    slug: "hero-spline-3d",
    name: "Hero with 3D Object",
    subtitle: "Split-screen hero with Spline 3D model on the right",
    description: "A split-layout hero with animated text on the left and an interactive Spline 3D scene on the right. The 3D model responds to mouse movement.",
    category: "heroes",
    tags: ["Spline", "Framer"],
    tier: "pro",
    featured: true,
    previewVideo: "https://picsum.photos/seed/hero-spline/640/360",
    code: `"use client";

import { motion } from "framer-motion";

export function HeroSpline3D() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-display text-5xl font-bold leading-tight md:text-6xl">
            The future of <span className="text-violet-400">digital design</span>
          </h1>
          <p className="mt-6 text-lg text-gray-400">
            Ship stunning websites in minutes, not months.
          </p>
          <a href="#" className="mt-8 inline-block rounded-full bg-violet-600 px-8 py-3 text-sm font-semibold text-white hover:bg-violet-500 transition-colors">
            Get Started
          </a>
        </motion.div>

        <div className="relative h-[500px]">
          {/* Replace with your Spline scene */}
          <iframe
            src="https://my.spline.design/your-scene/"
            className="h-full w-full border-0"
            title="3D Scene"
          />
        </div>
      </div>
    </section>
  );
}`,
    prompt: "Build me a split-screen hero section. Left side: animated heading + subtitle + CTA button with Framer Motion entrance. Right side: embedded Spline 3D scene (iframe). Use React, Tailwind CSS, Framer Motion. Dark theme, responsive (stacks vertically on mobile).",
  },
  {
    slug: "hero-video-bg",
    name: "Hero with Video Background",
    subtitle: "Full-screen hero with autoplay video background and dark overlay",
    description: "A dramatic hero with autoplay looping video background, dark gradient overlay, centered content with entrance animations.",
    category: "heroes",
    tags: ["Framer", "Tailwind"],
    tier: "free",
    featured: true,
    previewVideo: "https://picsum.photos/seed/hero-video/640/360",
    code: `"use client";

import { motion } from "framer-motion";

export function HeroVideoBg() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center"
      >
        <h1 className="font-display text-5xl font-bold md:text-7xl">
          Your Brand <span className="text-violet-400">Headline</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-gray-300">
          A short compelling subtitle that explains what you do.
        </p>
        <a href="#" className="mt-8 inline-block rounded-full bg-violet-600 px-8 py-3 text-sm font-semibold text-white hover:bg-violet-500 transition-colors">
          Call to Action
        </a>
      </motion.div>
    </section>
  );
}`,
    prompt: "Build me a hero section with autoplay video background. Dark gradient overlay (60% opacity), centered text with Framer Motion fade-in animation, heading + subtitle + CTA button. Use React, Tailwind CSS, Framer Motion. Dark theme.",
  },
  {
    slug: "hero-clip-path",
    name: "Hero with Clip-Path Text",
    subtitle: "Hero with text that reveals through an animated clip-path mask",
    description: "A cinematic hero where the heading text is revealed through an expanding clip-path animation, creating a dramatic entrance effect.",
    category: "heroes",
    tags: ["GSAP", "Tailwind"],
    tier: "pro",
    previewVideo: "https://picsum.photos/seed/hero-clip/640/360",
    code: `"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function HeroClipPath() {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { clipPath: "inset(0 100% 0 0)" },
      { clipPath: "inset(0 0% 0 0)", duration: 1.2, ease: "power4.inOut", delay: 0.3 }
    );
  }, []);

  return (
    <section className="flex min-h-screen items-center justify-center bg-[#0A0A0A]">
      <div className="text-center">
        <h1
          ref={textRef}
          className="font-display text-6xl font-bold text-white md:text-8xl"
          style={{ clipPath: "inset(0 100% 0 0)" }}
        >
          REVEAL TEXT
        </h1>
        <p className="mt-6 text-gray-400">Scroll-triggered cinematic clip-path animation</p>
      </div>
    </section>
  );
}`,
    prompt: "Build me a hero with clip-path text reveal animation. The heading text starts hidden (clip-path: inset(0 100% 0 0)) and animates to fully visible using GSAP. Use React, Tailwind CSS, GSAP. Dark background, centered layout.",
  },
  {
    slug: "hero-particles",
    name: "Hero with Particle Field",
    subtitle: "Hero with animated floating particle dots in the background",
    description: "A hero section with a canvas-based particle field animation creating a constellation-like effect behind the content.",
    category: "heroes",
    tags: ["Three.js", "Tailwind"],
    tier: "pro",
    previewVideo: "https://picsum.photos/seed/hero-particles/640/360",
    code: `"use client";

import { useEffect, useRef } from "react";

export function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles: { x: number; y: number; vx: number; vy: number }[] = [];

    function resize() {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas!.width,
        y: Math.random() * canvas!.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      });
    }

    function draw() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas!.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas!.height) p.vy *= -1;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
        ctx!.fillStyle = "rgba(124, 58, 237, 0.5)";
        ctx!.fill();
      });
      animId = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0" />
      <div className="relative z-10 text-center">
        <h1 className="font-display text-5xl font-bold md:text-7xl">Particle Hero</h1>
        <p className="mt-4 text-gray-400">Floating constellation background</p>
      </div>
    </section>
  );
}`,
    prompt: "Build me a hero section with a canvas-based particle field. 80 floating dots with slow random movement, connected by proximity lines. Purple accent color (#7C3AED). Use React, Tailwind CSS, HTML5 Canvas. Dark background, centered content.",
  },

  // --- PRELOADERS (2) ---
  {
    slug: "preloader-gsap",
    name: "GSAP Page Preloader",
    subtitle: "Full-screen loading animation that wipes away to reveal content",
    description: "A cinematic preloader with a brand name that splits and slides apart, revealing the page underneath. Uses GSAP timeline for coordinated animation.",
    category: "loaders",
    tags: ["GSAP", "Tailwind"],
    tier: "free",
    featured: true,
    previewVideo: "https://picsum.photos/seed/preloader-gsap/640/360",
    code: `"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export function PreloaderGSAP() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => setLoading(false),
    });
    tl.to(textRef.current, { opacity: 1, duration: 0.5, delay: 0.3 })
      .to(textRef.current, { opacity: 0, duration: 0.3, delay: 0.5 })
      .to(topRef.current, { yPercent: -100, duration: 0.8, ease: "power4.inOut" }, "-=0.1")
      .to(bottomRef.current, { yPercent: 100, duration: 0.8, ease: "power4.inOut" }, "<");
  }, []);

  if (!loading) return null;

  return (
    <div ref={overlayRef} className="fixed inset-0 z-[9998] flex">
      <div ref={topRef} className="h-1/2 w-full bg-[#0A0A0A]" />
      <div ref={bottomRef} className="h-1/2 w-full bg-[#0A0A0A]" />
      <div ref={textRef} className="absolute inset-0 flex items-center justify-center opacity-0">
        <span className="font-display text-3xl font-bold text-white">Loading...</span>
      </div>
    </div>
  );
}`,
    prompt: "Build me a GSAP page preloader. Two halves (top and bottom) that split apart to reveal the page. Show a loading text that fades out before the split. Use React, GSAP timeline. Dark overlay (#0A0A0A), smooth power4 easing.",
  },
  {
    slug: "preloader-counter",
    name: "Counter Preloader",
    subtitle: "Loading screen with animated percentage counter from 0 to 100",
    description: "A minimal preloader with an animated counter that counts from 0 to 100, then fades out to reveal the page content.",
    category: "loaders",
    tags: ["GSAP", "Tailwind"],
    tier: "pro",
    previewVideo: "https://picsum.photos/seed/preloader-counter/640/360",
    code: `"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export function PreloaderCounter() {
  const [count, setCount] = useState(0);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obj = { val: 0 };
    gsap.to(obj, {
      val: 100,
      duration: 2.5,
      ease: "power2.inOut",
      onUpdate: () => setCount(Math.round(obj.val)),
      onComplete: () => {
        gsap.to(overlayRef.current, {
          opacity: 0,
          duration: 0.5,
          onComplete: () => {
            if (overlayRef.current) overlayRef.current.style.display = "none";
          },
        });
      },
    });
  }, []);

  return (
    <div ref={overlayRef} className="fixed inset-0 z-[9998] flex items-center justify-center bg-[#0A0A0A]">
      <div className="text-center">
        <span className="font-display text-7xl font-bold text-white tabular-nums">{count}</span>
        <div className="mt-4 h-0.5 w-48 overflow-hidden rounded-full bg-gray-800">
          <div className="h-full bg-violet-500 transition-none" style={{ width: \`\${count}%\` }} />
        </div>
      </div>
    </div>
  );
}`,
    prompt: "Build me a counter preloader. Large animated number counting from 0 to 100 with a progress bar below it. Uses GSAP for smooth counting animation. After reaching 100, the overlay fades out. Use React, Tailwind CSS, GSAP. Dark theme, centered layout.",
  },

  // --- NAVBARS (3) ---
  {
    slug: "navbar-animated",
    name: "Animated Navbar",
    subtitle: "Sticky navigation bar with blur backdrop and hover underline animation",
    description: "A sleek sticky navbar with glassmorphism backdrop, logo, navigation links with animated underline on hover, and a CTA button.",
    category: "navbars",
    tags: ["Framer", "Tailwind"],
    tier: "free",
    featured: true,
    previewVideo: "https://picsum.photos/seed/navbar-animated/640/360",
    code: `"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = ["Components", "Templates", "Pricing", "About"];

export function NavbarAnimated() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0A0A0A]/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <a href="/" className="font-display text-lg font-bold">Aura UI</a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a key={link} href="#" className="group relative text-sm text-gray-400 hover:text-white transition-colors">
              {link}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-violet-500 transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        <a href="#" className="hidden rounded-full bg-violet-600 px-5 py-2 text-sm font-medium text-white hover:bg-violet-500 md:block">
          Get Started
        </a>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-gray-400">
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
    </header>
  );
}`,
    prompt: "Build me an animated sticky navbar with glassmorphism backdrop blur. Include logo, nav links with hover underline animation (width transition), and a CTA button. Mobile hamburger menu. Use React, Tailwind CSS, Framer Motion. Dark theme.",
  },
  {
    slug: "navbar-magnetic",
    name: "Navbar with Magnetic Hover",
    subtitle: "Navigation with a pill that follows your cursor between links",
    description: "A navbar where a background pill shape smoothly follows the cursor as it moves between navigation links, creating a magnetic effect.",
    category: "navbars",
    tags: ["Framer", "Tailwind"],
    tier: "pro",
    previewVideo: "https://picsum.photos/seed/navbar-magnetic/640/360",
    code: `"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

const links = ["Home", "Features", "Pricing", "Blog"];

export function NavbarMagnetic() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 });

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-center gap-1 px-4">
        {links.map((link, i) => (
          <a
            key={link}
            href="#"
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            className="relative z-10 rounded-full px-5 py-2 text-sm text-gray-400 transition-colors hover:text-white"
          >
            {link}
          </a>
        ))}
      </nav>
    </header>
  );
}`,
    prompt: "Build me a navbar with a magnetic hover pill. A rounded pill shape follows the cursor position between nav links. Use React, Tailwind CSS, Framer Motion for smooth pill movement. Dark theme, centered links.",
  },
  {
    slug: "navbar-mobile-drawer",
    name: "Mobile Drawer Nav",
    subtitle: "Slide-in mobile navigation with staggered link animations",
    description: "A mobile navigation drawer that slides in from the right with staggered link entrance animations and a close button.",
    category: "navbars",
    tags: ["Framer", "Tailwind"],
    tier: "free",
    previewVideo: "https://picsum.photos/seed/navbar-drawer/640/360",
    code: `"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = ["Home", "Components", "Templates", "Pricing", "About"];

export function NavbarMobileDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)} className="text-white">
        <Menu className="h-6 w-6" />
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-50 bg-black/60"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 z-50 h-full w-80 bg-[#0A0A0A] p-8"
            >
              <button onClick={() => setOpen(false)} className="absolute right-4 top-4 text-gray-400">
                <X className="h-6 w-6" />
              </button>
              <nav className="mt-16 flex flex-col gap-4">
                {links.map((link, i) => (
                  <motion.a
                    key={link}
                    href="#"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="text-lg text-gray-300 hover:text-white transition-colors"
                  >
                    {link}
                  </motion.a>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}`,
    prompt: "Build me a mobile drawer navigation. Hamburger button opens a slide-in panel from the right with staggered link animations. Overlay backdrop, close button. Use React, Tailwind CSS, Framer Motion AnimatePresence. Dark theme.",
  },

  // --- FEATURES (3) ---
  {
    slug: "features-bento",
    name: "Bento Features Grid",
    subtitle: "Asymmetric grid layout showing features in bento box style cards",
    description: "A bento-style asymmetric grid layout for showcasing features, with varying card sizes and subtle hover effects.",
    category: "features",
    tags: ["Framer", "Tailwind"],
    tier: "free",
    featured: true,
    previewVideo: "https://picsum.photos/seed/features-bento/640/360",
    code: `"use client";

import { motion } from "framer-motion";
import { Zap, Palette, Rocket, Shield, Code, Layers } from "lucide-react";

const features = [
  { icon: Zap, title: "Lightning Fast", desc: "Optimized for speed.", colSpan: "col-span-2", iconColor: "text-yellow-400" },
  { icon: Palette, title: "Customizable", desc: "Change any color.", colSpan: "col-span-1", iconColor: "text-pink-400" },
  { icon: Rocket, title: "Production Ready", desc: "Ship today.", colSpan: "col-span-1", iconColor: "text-violet-400" },
  { icon: Shield, title: "Type Safe", desc: "Full TypeScript support.", colSpan: "col-span-1", iconColor: "text-green-400" },
  { icon: Code, title: "Copy & Paste", desc: "No npm install needed.", colSpan: "col-span-2", iconColor: "text-blue-400" },
  { icon: Layers, title: "Stack Friendly", desc: "Works with any stack.", colSpan: "col-span-3", iconColor: "text-orange-400" },
];

export function FeaturesBento() {
  return (
    <section className="py-24 px-4">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center font-display text-3xl font-bold md:text-4xl">Everything you need</h2>
        <div className="mt-12 grid grid-cols-3 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={\`rounded-2xl border border-white/5 bg-[#111] p-6 hover:border-white/10 transition-colors \${f.colSpan}\`}
            >
              <f.icon className={\`h-6 w-6 \${f.iconColor}\`} />
              <h3 className="mt-4 font-display text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-400">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`,
    prompt: "Build me a bento-style features grid. 6 feature cards in an asymmetric grid (some span 2 columns). Each card has an icon, title, and description. Framer Motion scroll-triggered entrance. Use React, Tailwind CSS, Framer Motion, Lucide icons. Dark theme, #111 card backgrounds.",
  },
  {
    slug: "features-icon-cards",
    name: "Features with Icon Cards",
    subtitle: "Horizontal row of icon cards with hover glow effect",
    description: "A features section with evenly spaced icon cards that have a subtle glow effect on hover.",
    category: "features",
    tags: ["Framer", "Tailwind"],
    tier: "free",
    previewVideo: "https://picsum.photos/seed/features-icons/640/360",
    code: `"use client";

import { motion } from "framer-motion";
import { Cpu, Globe, Lock, Sparkles } from "lucide-react";

const features = [
  { icon: Cpu, title: "AI-Powered", desc: "Built with modern AI patterns." },
  { icon: Globe, title: "Global CDN", desc: "Fast everywhere in the world." },
  { icon: Lock, title: "Secure by Default", desc: "Enterprise-grade security." },
  { icon: Sparkles, title: "Beautiful UI", desc: "Designed to impress." },
];

export function FeaturesIconCards() {
  return (
    <section className="py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center font-display text-3xl font-bold md:text-4xl">Why choose us</h2>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-2xl border border-white/5 bg-[#111] p-6 text-center transition-all hover:border-violet-500/30 hover:shadow-lg hover:shadow-violet-500/5"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400 group-hover:bg-violet-500/20 transition-colors">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-400">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`,
    prompt: "Build me a features section with icon cards. 4 cards in a row, each with a centered icon (violet accent), title, and description. Hover adds glow shadow and border highlight. Use React, Tailwind CSS, Framer Motion, Lucide icons. Dark theme.",
  },
  {
    slug: "features-scroll-reveal",
    name: "Features with Scroll Reveal",
    subtitle: "Features that slide in from alternating sides as you scroll",
    description: "A features section where each feature slides in from alternating left/right sides as the user scrolls down, creating a dynamic reveal effect.",
    category: "features",
    tags: ["GSAP", "Framer"],
    tier: "pro",
    previewVideo: "https://picsum.photos/seed/features-scroll/640/360",
    code: `"use client";

import { motion } from "framer-motion";

const features = [
  { title: "Step One", desc: "Get started in seconds.", img: "https://picsum.photos/seed/step1/600/400" },
  { title: "Step Two", desc: "Customize everything.", img: "https://picsum.photos/seed/step2/600/400" },
  { title: "Step Three", desc: "Ship to production.", img: "https://picsum.photos/seed/step3/600/400" },
];

export function FeaturesScrollReveal() {
  return (
    <section className="py-24 px-4">
      <div className="mx-auto max-w-5xl space-y-24">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={\`flex flex-col items-center gap-8 md:flex-row \${i % 2 !== 0 ? "md:flex-row-reverse" : ""}\`}
          >
            <div className="flex-1">
              <h3 className="font-display text-2xl font-bold">{f.title}</h3>
              <p className="mt-3 text-gray-400">{f.desc}</p>
            </div>
            <img src={f.img} alt={f.title} className="flex-1 rounded-2xl border border-white/5" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}`,
    prompt: "Build me a features section with alternating scroll-reveal layout. 3 features, each with text on one side and image on the other. Alternates left/right. Framer Motion whileInView slide-in from alternating sides. Use React, Tailwind CSS, Framer Motion. Dark theme.",
  },

  // --- TESTIMONIALS (3) ---
  {
    slug: "testimonials-carousel",
    name: "Testimonials Carousel",
    subtitle: "Auto-playing testimonial cards with smooth slide transitions",
    description: "An auto-playing testimonials carousel with smooth horizontal slide transitions and dot navigation.",
    category: "testimonials",
    tags: ["Framer", "Tailwind"],
    tier: "free",
    featured: true,
    previewVideo: "https://picsum.photos/seed/testi-carousel/640/360",
    code: `"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  { name: "John Doe", role: "Founder, StartupX", text: "This library saved us weeks of development time." },
  { name: "Jane Smith", role: "CTO, TechCorp", text: "The quality of these components is unreal." },
  { name: "Alex Johnson", role: "Designer, StudioY", text: "Finally, animated components that actually look good." },
];

export function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % testimonials.length), 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 px-4">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl font-bold md:text-4xl">Loved by developers</h2>
        <div className="relative mt-12 h-48">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <p className="text-lg text-gray-300 italic">&ldquo;{testimonials[current].text}&rdquo;</p>
              <p className="mt-4 font-display font-semibold">{testimonials[current].name}</p>
              <p className="text-sm text-gray-500">{testimonials[current].role}</p>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={\`h-2 rounded-full transition-all \${i === current ? "w-8 bg-violet-500" : "w-2 bg-gray-700"}\`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}`,
    prompt: "Build me an auto-playing testimonials carousel. 3 testimonial cards with quote, name, and role. Auto-advances every 4 seconds with Framer Motion AnimatePresence. Dot navigation below. Use React, Tailwind CSS, Framer Motion. Dark theme.",
  },
  {
    slug: "testimonials-marquee",
    name: "Testimonials Marquee",
    subtitle: "Infinite horizontal scrolling testimonials that never stop",
    description: "An infinite horizontal marquee of testimonial cards that continuously scroll from right to left, creating a dynamic social proof section.",
    category: "testimonials",
    tags: ["Framer", "Tailwind"],
    tier: "pro",
    previewVideo: "https://picsum.photos/seed/testi-marquee/640/360",
    code: `"use client";

import { motion } from "framer-motion";

const testimonials = [
  { name: "John Doe", text: "Amazing components!" },
  { name: "Jane Smith", text: "Saved us weeks." },
  { name: "Alex Lee", text: "Love the animations." },
  { name: "Sam Wilson", text: "Best UI library." },
  { name: "Chris Park", text: "Truly premium." },
];

function MarqueeRow({ items, reverse }: { items: typeof testimonials; reverse?: boolean }) {
  return (
    <div className="relative overflow-hidden py-3">
      <motion.div
        className="flex gap-4"
        animate={{ x: reverse ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {[...items, ...items].map((t, i) => (
          <div key={i} className="shrink-0 rounded-xl border border-white/5 bg-[#111] p-5 w-72">
            <p className="text-sm text-gray-300">&ldquo;{t.text}&rdquo;</p>
            <p className="mt-3 text-xs font-semibold text-violet-400">{t.name}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function TestimonialsMarquee() {
  return (
    <section className="py-24">
      <h2 className="text-center font-display text-3xl font-bold md:text-4xl">Trusted by thousands</h2>
      <div className="mt-12">
        <MarqueeRow items={testimonials} />
        <MarqueeRow items={testimonials.slice(2)} reverse />
      </div>
    </section>
  );
}`,
    prompt: "Build me an infinite marquee of testimonial cards. Two rows scrolling in opposite directions. Each card has a quote and name. Use React, Tailwind CSS, Framer Motion animate with linear easing and repeat infinity. Dark theme.",
  },
  {
    slug: "testimonials-grid",
    name: "Testimonials Grid",
    subtitle: "3-column grid of testimonial cards with avatars",
    description: "A clean grid layout of testimonial cards, each with an avatar, quote, name, and role.",
    category: "testimonials",
    tags: ["Tailwind"],
    tier: "free",
    previewVideo: "https://picsum.photos/seed/testi-grid/640/360",
    code: `"use client";

import { motion } from "framer-motion";

const testimonials = [
  { name: "John Doe", role: "Founder", text: "Incredible quality.", avatar: "https://picsum.photos/seed/avatar1/100/100" },
  { name: "Jane Smith", role: "Designer", text: "Beautiful components.", avatar: "https://picsum.photos/seed/avatar2/100/100" },
  { name: "Alex Lee", role: "Developer", text: "Saves so much time.", avatar: "https://picsum.photos/seed/avatar3/100/100" },
];

export function TestimonialsGrid() {
  return (
    <section className="py-24 px-4">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center font-display text-3xl font-bold md:text-4xl">What people say</h2>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-white/5 bg-[#111] p-6"
            >
              <p className="text-sm text-gray-300">&ldquo;{t.text}&rdquo;</p>
              <div className="mt-4 flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="h-10 w-10 rounded-full" />
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`,
    prompt: "Build me a testimonials grid section. 3 cards in a row with quote text, avatar image, name, and role. Framer Motion staggered entrance. Use React, Tailwind CSS, Framer Motion. Dark theme, #111 card backgrounds.",
  },

  // --- STATS (1) ---
  {
    slug: "stats-counter",
    name: "Animated Stats Counter",
    subtitle: "Numbers that count up from zero when scrolled into view",
    description: "A stats section with animated counters that count up from zero to their target values when scrolled into view.",
    category: "features",
    tags: ["GSAP", "Tailwind"],
    tier: "free",
    previewVideo: "https://picsum.photos/seed/stats-counter/640/360",
    code: `"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export function StatsCounter() {
  const stats = [
    { label: "Components", value: 60, suffix: "+" },
    { label: "Happy Users", value: 2500, suffix: "+" },
    { label: "Stars", value: 150, suffix: "" },
  ];

  return (
    <section className="py-24 px-4">
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-3">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-display text-4xl font-bold text-violet-400">
              <Counter target={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-2 text-sm text-gray-400">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}`,
    prompt: "Build me an animated stats counter section. 3 stats in a row, each with a number that counts up from 0 to target when scrolled into view. Use React, Tailwind CSS, Framer Motion useInView. Dark theme, violet accent for numbers.",
  },

  // --- PRICING (2) ---
  {
    slug: "pricing-2-tier",
    name: "Pricing Table (2 Tier)",
    subtitle: "Simple two-column pricing comparison with highlighted recommended plan",
    description: "A clean two-tier pricing table with a free plan and a pro plan, where the pro plan is visually highlighted.",
    category: "pricing",
    tags: ["Tailwind"],
    tier: "free",
    previewVideo: "https://picsum.photos/seed/pricing-2tier/640/360",
    code: `"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "â‚¹0",
    period: "forever",
    features: ["20 components", "Copy code", "Copy prompts", "Community support"],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "â‚¹99",
    period: "/month",
    features: ["60+ components", "All templates", "CLI installer", "Weekly drops", "Priority support"],
    cta: "Go Pro",
    highlighted: true,
  },
];

export function Pricing2Tier() {
  return (
    <section className="py-24 px-4">
      <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6 md:grid-cols-2">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={\`rounded-2xl border p-8 \${
              plan.highlighted
                ? "border-violet-500/50 bg-[#111] shadow-lg shadow-violet-500/10"
                : "border-white/5 bg-[#111]"
            }\`}
          >
            <h3 className="font-display text-lg font-semibold">{plan.name}</h3>
            <div className="mt-4">
              <span className="text-4xl font-bold">{plan.price}</span>
              <span className="text-sm text-gray-500">{plan.period}</span>
            </div>
            <ul className="mt-6 space-y-3">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                  <Check className="h-4 w-4 text-violet-400" /> {f}
                </li>
              ))}
            </ul>
            <button className={\`mt-8 w-full rounded-xl py-3 text-sm font-semibold transition-colors \${
              plan.highlighted
                ? "bg-violet-600 text-white hover:bg-violet-500"
                : "border border-white/10 text-white hover:bg-white/5"
            }\`}>
              {plan.cta}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}`,
    prompt: "Build me a 2-tier pricing table. Free plan (â‚¹0) and Pro plan (â‚¹99/month). Pro plan has violet border glow and highlighted background. Each has feature list with checkmarks and a CTA button. Use React, Tailwind CSS, Framer Motion, Lucide Check icon. Dark theme.",
  },
  {
    slug: "pricing-3-tier-toggle",
    name: "Pricing Table (3 Tier + Toggle)",
    subtitle: "Three-column pricing with monthly/annual toggle switch",
    description: "A three-tier pricing table with a monthly/annual toggle. Annual prices show a discount. The middle plan is highlighted as recommended.",
    category: "pricing",
    tags: ["Framer", "Tailwind"],
    tier: "pro",
    previewVideo: "https://picsum.photos/seed/pricing-3tier/640/360",
    code: `"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  { name: "Starter", monthly: 0, annual: 0, features: ["10 components", "Basic support"] },
  { name: "Pro", monthly: 99, annual: 79, features: ["60+ components", "All templates", "CLI installer", "Priority support"] },
  { name: "Team", monthly: 299, annual: 249, features: ["Everything in Pro", "Team seats", "Custom components", "Dedicated support"] },
];

export function Pricing3TierToggle() {
  const [annual, setAnnual] = useState(false);

  return (
    <section className="py-24 px-4">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center font-display text-3xl font-bold md:text-4xl">Simple pricing</h2>
        <div className="mt-8 flex items-center justify-center gap-3">
          <span className={\`text-sm \${!annual ? "text-white" : "text-gray-500"}\`}>Monthly</span>
          <button onClick={() => setAnnual(!annual)} className={\`relative h-6 w-11 rounded-full bg-gray-700 transition-colors \${annual ? "bg-violet-600" : ""}\`}>
            <span className={\`absolute top-0.5 h-5 w-5 rounded-full bg-white transition-transform \${annual ? "left-5.5 translate-x-0" : "left-0.5"}\`} />
          </button>
          <span className={\`text-sm \${annual ? "text-white" : "text-gray-500"}\`}>Annual <span className="text-xs text-green-400">Save 20%</span></span>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={\`rounded-2xl border p-6 \${i === 1 ? "border-violet-500/50 bg-[#111]" : "border-white/5 bg-[#111]"}\`}
            >
              {i === 1 && <span className="mb-3 inline-block rounded-full bg-violet-500/20 px-3 py-1 text-xs text-violet-400">Recommended</span>}
              <h3 className="font-display text-lg font-semibold">{plan.name}</h3>
              <p className="mt-2 text-3xl font-bold">â‚¹{annual ? plan.annual : plan.monthly}<span className="text-sm text-gray-500">/mo</span></p>
              <ul className="mt-4 space-y-2">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                    <Check className="h-4 w-4 text-violet-400" /> {f}
                  </li>
                ))}
              </ul>
              <button className={\`mt-6 w-full rounded-xl py-2.5 text-sm font-semibold \${i === 1 ? "bg-violet-600 text-white" : "border border-white/10 text-white"}\`}>
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`,
    prompt: "Build me a 3-tier pricing table with monthly/annual toggle. Starter (â‚¹0), Pro (â‚¹99/mo, recommended), Team (â‚¹299/mo). Annual shows 20% discount. Toggle switch between monthly and annual. Use React, Tailwind CSS, Framer Motion, Lucide icons. Dark theme.",
  },

  // --- FAQ (1) ---
  {
    slug: "faq-accordion",
    name: "FAQ Accordion",
    subtitle: "Animated accordion with smooth expand/collapse and plus icon rotation",
    description: "A frequently asked questions section with an animated accordion that smoothly expands and collapses answers with a rotating plus/minus icon.",
    category: "faqs",
    tags: ["Framer", "Tailwind"],
    tier: "free",
    featured: true,
    previewVideo: "https://picsum.photos/seed/faq-accordion/640/360",
    code: `"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  { q: "What is Aura UI?", a: "A curated library of 60+ production-ready React components built for vibe coders." },
  { q: "Do I need to install anything?", a: "No. Just copy the code or use the CLI installer. Works with any React project." },
  { q: "Can I use these in commercial projects?", a: "Yes. All components are MIT licensed for personal and commercial use." },
  { q: "What stack do the components use?", a: "React, Tailwind CSS, GSAP, and Framer Motion. Some use Three.js for 3D." },
];

export function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 px-4">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-center font-display text-3xl font-bold md:text-4xl">Frequently asked questions</h2>
        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-xl border border-white/5 bg-[#111]">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between p-5 text-left"
              >
                <span className="text-sm font-medium">{faq.q}</span>
                <motion.span animate={{ rotate: open === i ? 45 : 0 }} transition={{ duration: 0.2 }}>
                  <Plus className="h-5 w-5 text-gray-400" />
                </motion.span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-sm text-gray-400">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}`,
    prompt: "Build me an FAQ accordion section. 4 questions with expand/collapse answers. Smooth height animation, rotating plus icon. Use React, Tailwind CSS, Framer Motion AnimatePresence. Dark theme, #111 card backgrounds.",
  },

  // --- CTA (2) ---
  {
    slug: "cta-gradient",
    name: "CTA Section (Gradient)",
    subtitle: "Full-width call-to-action with animated gradient background",
    description: "A bold call-to-action section with an animated gradient background, large heading, and action buttons.",
    category: "ctas",
    tags: ["GSAP", "Tailwind"],
    tier: "free",
    featured: true,
    previewVideo: "https://picsum.photos/seed/cta-gradient/640/360",
    code: `"use client";

import { motion } from "framer-motion";

export function CTAGradient() {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-violet-600 opacity-20 animate-aurora" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#0A0A0A_70%)]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 mx-auto max-w-3xl text-center"
      >
        <h2 className="font-display text-4xl font-bold md:text-5xl">
          Ready to build <span className="text-violet-400">something amazing</span>?
        </h2>
        <p className="mt-6 text-lg text-gray-400">
          Join thousands of vibe coders shipping faster with Aura UI.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="/components" className="rounded-full bg-violet-600 px-8 py-3 text-sm font-semibold text-white hover:bg-violet-500 transition-colors">
            Browse Components
          </a>
          <a href="/about" className="rounded-full border border-white/10 px-8 py-3 text-sm font-semibold text-white hover:bg-white/5 transition-colors">
            View Pricing
          </a>
        </div>
      </motion.div>
    </section>
  );
}`,
    prompt: "Build me a CTA section with animated gradient background. Large heading with violet accent text, subtitle, and two buttons (primary + secondary). Animated aurora gradient effect. Use React, Tailwind CSS, Framer Motion. Dark theme.",
  },
  {
    slug: "cta-split",
    name: "CTA Section (Split Layout)",
    subtitle: "Side-by-side CTA with image on one side and text on the other",
    description: "A split-layout call-to-action with text content on the left and an image or graphic on the right.",
    category: "ctas",
    tags: ["Framer", "Tailwind"],
    tier: "pro",
    previewVideo: "https://picsum.photos/seed/cta-split/640/360",
    code: `"use client";

import { motion } from "framer-motion";

export function CTASplit() {
  return (
    <section className="py-24 px-4">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl font-bold md:text-4xl">Start building today</h2>
          <p className="mt-4 text-gray-400">Get access to 60+ production-ready components. Copy code or copy prompt.</p>
          <div className="mt-8 flex gap-4">
            <a href="#" className="rounded-full bg-violet-600 px-6 py-3 text-sm font-semibold text-white hover:bg-violet-500 transition-colors">
              Get Started Free
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <img src="https://picsum.photos/seed/cta-image/600/400" alt="Preview" className="rounded-2xl border border-white/5" />
        </motion.div>
      </div>
    </section>
  );
}`,
    prompt: "Build me a split-layout CTA section. Left side: heading, description, CTA button. Right side: image. Framer Motion entrance from alternating sides. Use React, Tailwind CSS, Framer Motion. Dark theme.",
  },

  // --- FOOTERS (3) ---
  {
    slug: "footer-multi-column",
    name: "Footer (Multi-Column)",
    subtitle: "Full footer with multiple link columns, logo, and newsletter signup",
    description: "A comprehensive multi-column footer with logo, description, link columns, and a newsletter email input.",
    category: "footers",
    tags: ["Tailwind"],
    tier: "free",
    featured: true,
    previewVideo: "https://picsum.photos/seed/footer-multi/640/360",
    code: `export function FooterMultiColumn() {
  return (
    <footer className="border-t border-white/5 bg-[#0A0A0A] py-16 px-4">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 md:grid-cols-4">
        <div className="col-span-2 md:col-span-1">
          <span className="font-display text-lg font-bold">Aura UI</span>
          <p className="mt-3 text-sm text-gray-400">Built for vibe coders. Paste and ship.</p>
        </div>
        {[
          { title: "Product", links: ["Components", "Templates", "Pricing"] },
          { title: "Resources", links: ["Docs", "Blog", "Changelog"] },
          { title: "Company", links: ["About", "Twitter", "Contact"] },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="text-sm font-semibold">{col.title}</h4>
            <ul className="mt-3 space-y-2">
              {col.links.map((l) => (
                <li key={l}><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-12 max-w-6xl border-t border-white/5 pt-6 text-center text-xs text-gray-500">
        &copy; 2026 Aura UI. All rights reserved.
      </div>
    </footer>
  );
}`,
    prompt: "Build me a multi-column footer. Logo + description, 3 link columns (Product, Resources, Company), copyright line at bottom. Use React, Tailwind CSS. Dark theme, border-top separator.",
  },
  {
    slug: "footer-minimal",
    name: "Footer (Minimal Centered)",
    subtitle: "Clean centered footer with logo and minimal links",
    description: "A minimal centered footer with logo, a few navigation links, and copyright text.",
    category: "footers",
    tags: ["Tailwind"],
    tier: "free",
    previewVideo: "https://picsum.photos/seed/footer-minimal/640/360",
    code: `export function FooterMinimal() {
  return (
    <footer className="border-t border-white/5 bg-[#0A0A0A] py-12 px-4 text-center">
      <span className="font-display text-lg font-bold">Aura UI</span>
      <nav className="mt-4 flex items-center justify-center gap-6">
        {["Components", "Templates", "About", "Twitter"].map((l) => (
          <a key={l} href="#" className="text-sm text-gray-400 hover:text-white transition-colors">{l}</a>
        ))}
      </nav>
      <p className="mt-6 text-xs text-gray-500">&copy; 2026 Aura UI.</p>
    </footer>
  );
}`,
    prompt: "Build me a minimal centered footer. Logo at top, horizontal row of 4 links, copyright below. Use React, Tailwind CSS. Dark theme.",
  },
  {
    slug: "footer-mega",
    name: "Footer (Dark Mega)",
    subtitle: "Large footer with 5 columns, social icons, and back-to-top button",
    description: "A large mega footer with 5 columns of links, social media icons, and a back-to-top button.",
    category: "footers",
    tags: ["Tailwind"],
    tier: "pro",
    previewVideo: "https://picsum.photos/seed/footer-mega/640/360",
    code: `import { ArrowUp } from "lucide-react";

export function FooterMega() {
  return (
    <footer className="border-t border-white/5 bg-[#0A0A0A] py-16 px-4">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 md:grid-cols-5">
        <div className="col-span-2 md:col-span-1">
          <span className="font-display text-lg font-bold">Aura UI</span>
          <p className="mt-3 text-sm text-gray-400">Built for vibe coders. Paste and ship.</p>
        </div>
        {[{ title: "Product", links: ["Components", "Templates", "CLI", "Pricing"] },
          { title: "Resources", links: ["Docs", "Blog", "Changelog", "Status"] },
          { title: "Company", links: ["About", "Careers", "Contact"] },
          { title: "Legal", links: ["Privacy", "Terms", "License"] },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="text-sm font-semibold">{col.title}</h4>
            <ul className="mt-3 space-y-2">
              {col.links.map((l) => (
                <li key={l}><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl items-center justify-between border-t border-white/5 pt-6">
        <p className="text-xs text-gray-500">&copy; 2026 Aura UI.</p>
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="text-gray-400 hover:text-white transition-colors">
          <ArrowUp className="h-4 w-4" />
        </button>
      </div>
    </footer>
  );
}`,
    prompt: "Build me a dark mega footer with 5 columns of links, logo, description, copyright, and back-to-top button. Use React, Tailwind CSS. Dark theme.",
  },

  // --- REMAINING MARKETING (8) ---
  {
    slug: "image-gallery-masonry",
    name: "Image Gallery (Masonry)",
    subtitle: "Pinterest-style masonry image grid with hover zoom effect",
    description: "A masonry-style image gallery that arranges images in a Pinterest-like layout with hover zoom and overlay effects.",
    category: "carousels",
    tags: ["Tailwind"],
    tier: "free",
    previewVideo: "https://picsum.photos/seed/gallery-masonry/640/360",
    code: `"use client";

import { motion } from "framer-motion";

const images = Array.from({ length: 8 }, (_, i) => ({
  src: \`https://picsum.photos/seed/gallery\${i}/400/\${300 + Math.floor(Math.random() * 200)}\`,
  span: i % 3 === 0 ? "row-span-2" : "",
}));

export function ImageGalleryMasonry() {
  return (
    <section className="py-24 px-4">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center font-display text-3xl font-bold md:text-4xl">Our Work</h2>
        <div className="mt-12 columns-2 gap-4 md:columns-3">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="mb-4 overflow-hidden rounded-xl"
            >
              <img src={img.src} alt="" className="w-full transition-transform duration-300 hover:scale-105" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`,
    prompt: "Build me a masonry image gallery. 8 images in a Pinterest-style column layout using CSS columns. Hover zoom effect. Use React, Tailwind CSS, Framer Motion. Dark theme.",
  },
  {
    slug: "scroll-marquee",
    name: "Scroll Marquee (Horizontal)",
    subtitle: "Auto-scrolling horizontal strip of logos or text",
    description: "An infinitely scrolling horizontal marquee strip, perfect for logo clouds or feature lists.",
    category: "carousels",
    tags: ["Tailwind"],
    tier: "free",
    previewVideo: "https://picsum.photos/seed/marquee-scroll/640/360",
    code: `"use client";

import { motion } from "framer-motion";

const items = ["React", "Next.js", "Tailwind", "GSAP", "Framer", "Three.js", "TypeScript", "Vercel"];

export function ScrollMarquee() {
  return (
    <section className="py-16 overflow-hidden">
      <div className="relative">
        <motion.div
          className="flex gap-8 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {[...items, ...items].map((item, i) => (
            <span key={i} className="text-2xl font-display font-bold text-gray-600">{item}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}`,
    prompt: "Build me an infinite horizontal marquee of text items. Items scroll continuously from right to left. Use React, Tailwind CSS, Framer Motion animate with linear easing. Dark theme, large gray text.",
  },
  {
    slug: "logo-cloud",
    name: "Logo Cloud (Animated)",
    subtitle: "Row of logos with subtle opacity animation on hover",
    description: "A logo cloud section displaying partner or client logos with hover effects and smooth entrance animations.",
    category: "features",
    tags: ["Framer", "Tailwind"],
    tier: "free",
    previewVideo: "https://picsum.photos/seed/logo-cloud/640/360",
    code: `"use client";

import { motion } from "framer-motion";

const logos = ["Company A", "Company B", "Company C", "Company D", "Company E", "Company F"];

export function LogoCloud() {
  return (
    <section className="py-16 px-4">
      <p className="text-center text-sm text-gray-500">Trusted by leading teams</p>
      <div className="mx-auto mt-8 flex max-w-4xl flex-wrap items-center justify-center gap-12">
        {logos.map((logo, i) => (
          <motion.span
            key={logo}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-lg font-bold text-gray-600 transition-colors hover:text-gray-400"
          >
            {logo}
          </motion.span>
        ))}
      </div>
    </section>
  );
}`,
    prompt: "Build me a logo cloud section. 6 placeholder company names in a flex row with staggered opacity entrance and hover brightness effect. Use React, Tailwind CSS, Framer Motion. Dark theme.",
  },
  {
    slug: "team-grid",
    name: "Team Grid Cards",
    subtitle: "Grid of team member cards with photo, name, and role",
    description: "A team section with a grid of member cards featuring photos, names, roles, and social links.",
    category: "cards",
    tags: ["Framer", "Tailwind"],
    tier: "free",
    previewVideo: "https://picsum.photos/seed/team-grid/640/360",
    code: `"use client";

import { motion } from "framer-motion";

const team = [
  { name: "John Doe", role: "Founder & CEO", img: "https://picsum.photos/seed/team1/400/400" },
  { name: "Jane Smith", role: "Lead Designer", img: "https://picsum.photos/seed/team2/400/400" },
  { name: "Alex Lee", role: "Head of Engineering", img: "https://picsum.photos/seed/team3/400/400" },
];

export function TeamGrid() {
  return (
    <section className="py-24 px-4">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center font-display text-3xl font-bold md:text-4xl">Meet the team</h2>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <img src={m.img} alt={m.name} className="mx-auto h-40 w-40 rounded-full object-cover border-2 border-white/5" />
              <h3 className="mt-4 font-display text-lg font-semibold">{m.name}</h3>
              <p className="text-sm text-gray-400">{m.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`,
    prompt: "Build me a team grid section. 3 member cards in a row with circular photo, name, and role. Framer Motion staggered entrance. Use React, Tailwind CSS, Framer Motion. Dark theme.",
  },
  {
    slug: "timeline-vertical",
    name: "Timeline (Vertical)",
    subtitle: "Vertical timeline with alternating left/right entries and connecting line",
    description: "A vertical timeline component with alternating entries on left and right sides, connected by a central line with dot markers.",
    category: "features",
    tags: ["Framer", "Tailwind"],
    tier: "free",
    previewVideo: "https://picsum.photos/seed/timeline/640/360",
    code: `"use client";

import { motion } from "framer-motion";

const events = [
  { year: "2024", title: "Founded", desc: "Started building components." },
  { year: "2025", title: "Launch", desc: "Launched with 30 components." },
  { year: "2026", title: "Growth", desc: "Expanded to 60+ components." },
];

export function TimelineVertical() {
  return (
    <section className="py-24 px-4">
      <div className="mx-auto max-w-3xl">
        <div className="relative border-l border-white/10 ml-4 space-y-12">
          {events.map((e, i) => (
            <motion.div
              key={e.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative pl-8"
            >
              <div className="absolute -left-1.5 top-1 h-3 w-3 rounded-full bg-violet-500" />
              <span className="text-xs text-violet-400">{e.year}</span>
              <h3 className="mt-1 font-display text-lg font-semibold">{e.title}</h3>
              <p className="mt-1 text-sm text-gray-400">{e.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`,
    prompt: "Build me a vertical timeline with left-aligned entries. Central line with dot markers, each entry has year, title, and description. Framer Motion staggered entrance. Use React, Tailwind CSS, Framer Motion. Dark theme, violet accent dots.",
  },
  {
    slug: "video-section",
    name: "Video Section with Play Button",
    subtitle: "Video thumbnail with centered play button overlay",
    description: "A video section showing a thumbnail image with a centered play button overlay that triggers a video modal on click.",
    category: "carousels",
    tags: ["Framer", "Tailwind"],
    tier: "free",
    previewVideo: "https://picsum.photos/seed/video-section/640/360",
    code: `"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";

export function VideoSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="py-24 px-4">
      <div className="mx-auto max-w-4xl">
        <div className="relative cursor-pointer overflow-hidden rounded-2xl" onClick={() => setPlaying(true)}>
          <img src="https://picsum.photos/seed/video-thumb/1200/600" alt="" className="w-full" />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <motion.div whileHover={{ scale: 1.1 }} className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
              <Play className="h-6 w-6 text-white ml-1" fill="white" />
            </motion.div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {playing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-8"
            onClick={() => setPlaying(false)}
          >
            <button className="absolute right-6 top-6 text-white"><X className="h-6 w-6" /></button>
            <div className="w-full max-w-4xl aspect-video rounded-xl bg-gray-900 flex items-center justify-center text-gray-500">
              Video player placeholder
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}`,
    prompt: "Build me a video section with thumbnail and play button overlay. Clicking opens a fullscreen modal with video player. Use React, Tailwind CSS, Framer Motion, Lucide Play/X icons. Dark theme.",
  },
  {
    slug: "horizontal-scroll",
    name: "Horizontal Scroll Section",
    subtitle: "Content that scrolls horizontally as user scrolls vertically",
    description: "A section that pins and scrolls content horizontally as the user scrolls vertically down the page, creating a side-scrolling experience.",
    category: "features",
    tags: ["GSAP", "Tailwind"],
    tier: "pro",
    previewVideo: "https://picsum.photos/seed/horizontal-scroll/640/360",
    code: `"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const panels = [
  { title: "Panel 1", color: "from-violet-600 to-violet-900" },
  { title: "Panel 2", color: "from-fuchsia-600 to-fuchsia-900" },
  { title: "Panel 3", color: "from-blue-600 to-blue-900" },
  { title: "Panel 4", color: "from-emerald-600 to-emerald-900" },
];

export function HorizontalScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={containerRef} className="relative h-[200vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-6 px-4">
          {panels.map((p) => (
            <div key={p.title} className={\`h-[70vh] w-[80vw] shrink-0 rounded-2xl bg-gradient-to-br \${p.color} p-8 flex items-end\`}>
              <h3 className="font-display text-3xl font-bold">{p.title}</h3>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}`,
    prompt: "Build me a horizontal scroll section. 4 colored panels scroll horizontally as user scrolls vertically. Uses Framer Motion useScroll + useTransform. Use React, Tailwind CSS, Framer Motion. Dark theme.",
  },
  {
    slug: "text-scramble",
    name: "Text Scramble Effect",
    subtitle: "Text that decrypts character by character with random symbols",
    description: "A text element that appears to decrypt or scramble through random characters before settling on the final text.",
    category: "loaders",
    tags: ["GSAP", "Tailwind"],
    tier: "pro",
    previewVideo: "https://picsum.photos/seed/text-scramble/640/360",
    code: `"use client";

import { useEffect, useRef, useState } from "react";

const chars = "!@#$%^&*()_+{}|:<>?~\`-=[];',./";

export function TextScramble({ text }: { text: string }) {
  const [display, setDisplay] = useState(text);
  const frameRef = useRef(0);

  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplay(
        text
          .split("")
          .map((char, i) => {
            if (i < iteration) return char;
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );
      if (iteration >= text.length) clearInterval(interval);
      iteration += 1 / 3;
    }, 30);
    return () => clearInterval(interval);
  }, [text]);

  return <span className="font-mono">{display}</span>;
}

export function TextScrambleSection() {
  return (
    <section className="flex min-h-screen items-center justify-center">
      <h1 className="font-display text-5xl font-bold md:text-7xl">
        <TextScramble text="AURA UI" />
      </h1>
    </section>
  );
}`,
    prompt: "Build me a text scramble/decrypt effect. Text cycles through random characters before settling on the final text, character by character. Use React, Tailwind CSS. No external dependencies needed.",
  },
  {
    slug: "film-grain-overlay",
    name: "Film Grain Overlay",
    subtitle: "Subtle noise texture overlay that adds cinematic texture to any section",
    description: "A CSS-based film grain noise overlay that adds subtle cinematic texture to any section it's applied to.",
    category: "loaders",
    tags: ["Tailwind"],
    tier: "free",
    previewVideo: "https://picsum.photos/seed/film-grain/640/360",
    code: `export function FilmGrainOverlay() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Content goes here */}
      <div className="relative z-10 text-center">
        <h1 className="font-display text-5xl font-bold">Cinematic Content</h1>
        <p className="mt-4 text-gray-400">With film grain overlay</p>
      </div>

      {/* Film grain overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-20 opacity-[0.03]"
        style={{
          backgroundImage: \`url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")\`,
          mixBlendMode: "overlay",
        }}
      />
    </section>
  );
}`,
    prompt: "Build me a film grain overlay component. A div with SVG noise texture, pointer-events-none, absolute positioned, opacity 0.03, mix-blend-mode overlay. Apply over any section for cinematic texture. Use React, Tailwind CSS.",
  },

  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // SECTION B: UI COMPONENTS (25 components)
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

  // --- BUTTONS (5) ---
  {
    slug: "btn-magnetic",
    name: "Magnetic Button",
    subtitle: "Button that subtly follows your cursor when you hover near it",
    description: "A button that magnetically pulls toward the cursor when it enters a surrounding magnetic field area.",
    category: "buttons",
    tags: ["Framer", "Tailwind"],
    tier: "free",
    featured: true,
    previewVideo: "https://picsum.photos/seed/btn-magnetic/640/360",
    code: `"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export function BtnMagnetic() {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  function handleMouse(e: React.MouseEvent) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.3);
    y.set((e.clientY - cy) * 0.3);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <section className="flex min-h-screen items-center justify-center">
      <motion.button
        ref={ref}
        style={{ x: springX, y: springY }}
        onMouseMove={handleMouse}
        onMouseLeave={reset}
        className="rounded-full bg-violet-600 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-violet-500"
      >
        Hover me
      </motion.button>
    </section>
  );
}`,
    prompt: "Build me a magnetic button. When cursor enters the button area, the button follows the cursor with spring physics. Use React, Tailwind CSS, Framer Motion useMotionValue + useSpring. Dark theme, violet background.",
  },
  {
    slug: "btn-shimmer",
    name: "Shimmer Button",
    subtitle: "Button with a moving light shimmer across its surface",
    description: "A button with a subtle animated shimmer/glint effect that sweeps across its surface periodically.",
    category: "buttons",
    tags: ["Tailwind"],
    tier: "free",
    previewVideo: "https://picsum.photos/seed/btn-shimmer/640/360",
    code: `export function BtnShimmer() {
  return (
    <section className="flex min-h-screen items-center justify-center">
      <button className="group relative overflow-hidden rounded-full bg-violet-600 px-8 py-3 text-sm font-semibold text-white">
        <span className="relative z-10">Shimmer Button</span>
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      </button>
    </section>
  );
}`,
    prompt: "Build me a shimmer button. A light gradient sweeps across the button on hover using CSS transition translateX. Use React, Tailwind CSS. No external dependencies. Dark theme, violet background.",
  },
  {
    slug: "btn-gradient",
    name: "Gradient Button",
    subtitle: "Button with animated gradient border that shifts colors",
    description: "A button with an animated gradient border that continuously shifts through colors, with a dark inner fill.",
    category: "buttons",
    tags: ["Tailwind"],
    tier: "free",
    previewVideo: "https://picsum.photos/seed/btn-gradient/640/360",
    code: `export function BtnGradient() {
  return (
    <section className="flex min-h-screen items-center justify-center">
      <button className="relative rounded-full bg-[#0A0A0A] px-8 py-3 text-sm font-semibold text-white before:absolute before:inset-0 before:-z-10 before:rounded-full before:bg-gradient-to-r before:from-violet-500 before:via-fuchsia-500 before:to-violet-500 before:animate-aurora before:bg-[length:200%_200%]">
        Gradient Border
      </button>
    </section>
  );
}`,
    prompt: "Build me a gradient button with animated gradient border. The border is a gradient that shifts colors. Use React, Tailwind CSS, CSS animation. Dark inner fill, gradient outer glow.",
  },
  {
    slug: "btn-ghost-fill",
    name: "Ghost Button with Hover Fill",
    subtitle: "Outline button that fills with color from left to right on hover",
    description: "A ghost/outline button that fills with a solid color from left to right when hovered, with smooth color transition.",
    category: "buttons",
    tags: ["Tailwind"],
    tier: "free",
    previewVideo: "https://picsum.photos/seed/btn-ghost/640/360",
    code: `export function BtnGhostFill() {
  return (
    <section className="flex min-h-screen items-center justify-center">
      <button className="group relative overflow-hidden rounded-full border border-white/20 px-8 py-3 text-sm font-semibold text-white transition-colors duration-300">
        <span className="absolute inset-0 -z-10 w-0 bg-violet-600 transition-all duration-300 group-hover:w-full" />
        Ghost Button
      </button>
    </section>
  );
}`,
    prompt: "Build me a ghost button with hover fill effect. Outline button that fills with violet from left to right on hover. Use React, Tailwind CSS, CSS transition width. Dark theme.",
  },
  {
    slug: "btn-icon-variants",
    name: "Icon Button Variants",
    subtitle: "Collection of icon buttons in different styles â€” circle, square, rounded",
    description: "A showcase of icon button variants including circular, square, rounded, with different sizes and hover effects.",
    category: "buttons",
    tags: ["Tailwind"],
    tier: "free",
    previewVideo: "https://picsum.photos/seed/btn-icons/640/360",
    code: `import { Plus, Download, Heart, Share2 } from "lucide-react";

export function BtnIconVariants() {
  return (
    <section className="flex min-h-screen items-center justify-center gap-4">
      <button className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-600 text-white hover:bg-violet-500 transition-colors">
        <Plus className="h-5 w-5" />
      </button>
      <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-600 text-white hover:bg-violet-500 transition-colors">
        <Download className="h-5 w-5" />
      </button>
      <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white hover:bg-white/5 transition-colors">
        <Heart className="h-5 w-5" />
      </button>
      <button className="flex items-center gap-2 rounded-full bg-violet-600 px-5 py-2.5 text-sm text-white hover:bg-violet-500 transition-colors">
        <Share2 className="h-4 w-4" /> Share
      </button>
    </section>
  );
}`,
    prompt: "Build me icon button variants. 4 buttons: circle (filled), square (filled), rounded (outline), and pill with label. Each uses a Lucide icon. Use React, Tailwind CSS. Dark theme, violet accent.",
  },

  // --- CARDS (5) ---
  {
    slug: "card-product",
    name: "Product Card",
    subtitle: "E-commerce product card with image, price, and add-to-cart button",
    description: "A product card for e-commerce with product image, name, price, rating, and add-to-cart button.",
    category: "cards",
    tags: ["Tailwind"],
    tier: "free",
    previewVideo: "https://picsum.photos/seed/card-product/640/360",
    code: `import { Star, ShoppingCart } from "lucide-react";

export function CardProduct() {
  return (
    <section className="flex min-h-screen items-center justify-center p-4">
      <div className="w-72 overflow-hidden rounded-2xl border border-white/5 bg-[#111]">
        <img src="https://picsum.photos/seed/product1/400/300" alt="Product" className="h-48 w-full object-cover" />
        <div className="p-4">
          <h3 className="font-display text-sm font-semibold">Product Name</h3>
          <div className="mt-1 flex items-center gap-1">
            {Array.from({ length: 5 }, (_, i) => (
              <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-lg font-bold">â‚¹999</span>
            <button className="flex items-center gap-1.5 rounded-lg bg-violet-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-violet-500 transition-colors">
              <ShoppingCart className="h-3.5 w-3.5" /> Add
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}`,
    prompt: "Build me a product card with image, name, star rating, price, and add-to-cart button. Use React, Tailwind CSS, Lucide icons. Dark theme, #111 background.",
  },
  {
    slug: "card-blog-post",
    name: "Blog Post Card",
    subtitle: "Blog card with thumbnail, category tag, title, and date",
    description: "A blog post preview card with thumbnail image, category badge, title, excerpt, author, and date.",
    category: "cards",
    tags: ["Tailwind"],
    tier: "free",
    previewVideo: "https://picsum.photos/seed/card-blog/640/360",
    code: `export function CardBlogPost() {
  return (
    <section className="flex min-h-screen items-center justify-center p-4">
      <div className="w-80 overflow-hidden rounded-2xl border border-white/5 bg-[#111]">
        <img src="https://picsum.photos/seed/blog1/600/300" alt="" className="h-44 w-full object-cover" />
        <div className="p-5">
          <span className="rounded-full bg-violet-500/20 px-2.5 py-0.5 text-xs text-violet-400">Tutorial</span>
          <h3 className="mt-3 font-display text-base font-semibold">How to build animated components</h3>
          <p className="mt-2 text-xs text-gray-400 line-clamp-2">Learn the fundamentals of GSAP and Framer Motion for stunning UI.</p>
          <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
            <span>John Doe</span>
            <span>Jul 27, 2026</span>
          </div>
        </div>
      </div>
    </section>
  );
}`,
    prompt: "Build me a blog post card with thumbnail image, category badge (violet), title, excerpt (2 lines max), author, and date. Use React, Tailwind CSS. Dark theme, #111 background.",
  },
  {
    slug: "card-team-member",
    name: "Team Member Card",
    subtitle: "Team card with photo, name, role, and social links",
    description: "A team member card featuring a circular avatar, name, role description, and social media icon links.",
    category: "cards",
    tags: ["Tailwind"],
    tier: "free",
    previewVideo: "https://picsum.photos/seed/card-team/640/360",
    code: `import { Twitter, Github, Linkedin } from "lucide-react";

export function CardTeamMember() {
  return (
    <section className="flex min-h-screen items-center justify-center p-4">
      <div className="w-64 rounded-2xl border border-white/5 bg-[#111] p-6 text-center">
        <img src="https://picsum.photos/seed/member1/200/200" alt="" className="mx-auto h-20 w-20 rounded-full object-cover border-2 border-white/5" />
        <h3 className="mt-4 font-display text-sm font-semibold">Jane Smith</h3>
        <p className="text-xs text-gray-400">Lead Designer</p>
        <div className="mt-4 flex items-center justify-center gap-3">
          <a href="#" className="text-gray-500 hover:text-white transition-colors"><Twitter className="h-4 w-4" /></a>
          <a href="#" className="text-gray-500 hover:text-white transition-colors"><Github className="h-4 w-4" /></a>
          <a href="#" className="text-gray-500 hover:text-white transition-colors"><Linkedin className="h-4 w-4" /></a>
        </div>
      </div>
    </section>
  );
}`,
    prompt: "Build me a team member card. Circular photo, name, role, and 3 social media icon links (Twitter, GitHub, LinkedIn). Use React, Tailwind CSS, Lucide icons. Dark theme.",
  },
  {
    slug: "card-stat",
    name: "Stat Card (with Icon)",
    subtitle: "Compact card showing a metric with icon and label",
    description: "A stat card displaying a metric value with an icon, label, and optional trend indicator.",
    category: "cards",
    tags: ["Tailwind"],
    tier: "free",
    previewVideo: "https://picsum.photos/seed/card-stat/640/360",
    code: `import { TrendingUp, Users, DollarSign, Activity } from "lucide-react";

const stats = [
  { icon: Users, label: "Users", value: "12,345", change: "+12%", color: "text-violet-400 bg-violet-500/10" },
  { icon: DollarSign, label: "Revenue", value: "â‚¹4.2L", change: "+8%", color: "text-green-400 bg-green-500/10" },
  { icon: Activity, label: "Active", value: "1,024", change: "+23%", color: "text-blue-400 bg-blue-500/10" },
];

export function CardStat() {
  return (
    <section className="flex min-h-screen items-center justify-center gap-4 p-4">
      {stats.map((s) => (
        <div key={s.label} className="w-56 rounded-2xl border border-white/5 bg-[#111] p-5">
          <div className={\`flex h-10 w-10 items-center justify-center rounded-xl \${s.color}\`}>
            <s.icon className="h-5 w-5" />
          </div>
          <p className="mt-3 text-xs text-gray-400">{s.label}</p>
          <p className="text-2xl font-bold">{s.value}</p>
          <span className="text-xs text-green-400">{s.change}</span>
        </div>
      ))}
    </section>
  );
}`,
    prompt: "Build me stat cards. 3 cards in a row, each with an icon in a colored circle, label, large value, and trend percentage. Use React, Tailwind CSS, Lucide icons. Dark theme, #111 backgrounds.",
  },
  {
    slug: "card-glass",
    name: "Glass Card (Frosted)",
    subtitle: "Translucent card with frosted glass blur effect",
    description: "A card with a frosted glass effect using backdrop blur, semi-transparent background, and subtle border.",
    category: "cards",
    tags: ["Tailwind"],
    tier: "free",
    featured: true,
    previewVideo: "https://picsum.photos/seed/card-glass/640/360",
    code: `export function CardGlass() {
  return (
    <section className="flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-transparent to-fuchsia-600/20" />
      <div className="relative z-10 w-80 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <h3 className="font-display text-lg font-semibold">Glass Card</h3>
        <p className="mt-2 text-sm text-gray-300">A frosted glass card with backdrop blur and translucent background.</p>
        <button className="mt-4 rounded-lg bg-white/10 px-4 py-2 text-xs font-medium text-white hover:bg-white/20 transition-colors">
          Learn More
        </button>
      </div>
    </section>
  );
}`,
    prompt: "Build me a glass card with frosted effect. Semi-transparent background (bg-white/5), backdrop-blur-xl, border-white/10, with gradient backdrop. Use React, Tailwind CSS. Dark theme.",
  },

  // --- FORMS (4) ---
  {
    slug: "input-animated-label",
    name: "Input Field (Animated Label)",
    subtitle: "Text input where the label floats up on focus with smooth transition",
    description: "A form input field with a label that animates upward when the input is focused or has a value, creating a floating label effect.",
    category: "forms",
    tags: ["Framer", "Tailwind"],
    tier: "free",
    previewVideo: "https://picsum.photos/seed/input-label/640/360",
    code: `"use client";

import { useState } from "react";

export function InputAnimatedLabel() {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");

  const active = focused || value.length > 0;

  return (
    <section className="flex min-h-screen items-center justify-center p-4">
      <div className="relative w-80">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="peer h-12 w-full rounded-xl border border-white/10 bg-[#111] px-4 pt-5 pb-1 text-sm text-white outline-none transition-colors focus:border-violet-500"
          placeholder=" "
        />
        <label className={\`absolute left-4 transition-all duration-200 \${
          active
            ? "top-1.5 text-[10px] text-violet-400"
            : "top-3.5 text-sm text-gray-500"
        }\`}>
          Your email
        </label>
      </div>
    </section>
  );
}`,
    prompt: "Build me an input field with animated floating label. Label moves up and shrinks when input is focused or has value. Use React, Tailwind CSS, CSS transitions. Dark theme, violet focus border.",
  },
  {
    slug: "input-search",
    name: "Search Input",
    subtitle: "Search field with icon, clear button, and keyboard shortcut hint",
    description: "A search input with a search icon, clear button, and a keyboard shortcut hint badge.",
    category: "forms",
    tags: ["Tailwind"],
    tier: "free",
    previewVideo: "https://picsum.photos/seed/input-search/640/360",
    code: `"use client";

import { useState } from "react";
import { Search, X } from "lucide-react";

export function InputSearch() {
  const [value, setValue] = useState("");
  return (
    <section className="flex min-h-screen items-center justify-center p-4">
      <div className="relative w-96">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search..."
          className="h-11 w-full rounded-xl border border-white/10 bg-[#111] pl-10 pr-20 text-sm text-white placeholder:text-gray-500 outline-none focus:border-violet-500 transition-colors"
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
          {value && (
            <button onClick={() => setValue("")} className="text-gray-500 hover:text-white">
              <X className="h-4 w-4" />
            </button>
          )}
          <kbd className="rounded-md bg-white/5 px-1.5 py-0.5 text-[10px] text-gray-500 border border-white/10">âŒ˜K</kbd>
        </div>
      </div>
    </section>
  );
}`,
    prompt: "Build me a search input with search icon on left, clear X button when text exists, and a keyboard shortcut badge (âŒ˜K) on the right. Use React, Tailwind CSS, Lucide icons. Dark theme.",
  },
  {
    slug: "toast-notification",
    name: "Toast Notification",
    subtitle: "Slide-in notification toast that auto-dismisses after a few seconds",
    description: "A notification toast that slides in from the top-right corner and auto-dismisses after a timeout, with success/error variants.",
    category: "modals",
    tags: ["Framer", "Tailwind"],
    tier: "free",
    previewVideo: "https://picsum.photos/seed/toast/640/360",
    code: `"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, X, AlertCircle } from "lucide-react";

export function ToastNotification() {
  const [toasts, setToasts] = useState<{ id: number; msg: string; type: "success" | "error" }[]>([]);

  function add(type: "success" | "error") {
    const id = Date.now();
    const msg = type === "success" ? "Component copied!" : "Something went wrong";
    setToasts((t) => [...t, { id, msg, type }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 3000);
  }

  return (
    <section className="flex min-h-screen items-center justify-center gap-4">
      <button onClick={() => add("success")} className="rounded-lg bg-violet-600 px-4 py-2 text-sm text-white">Success Toast</button>
      <button onClick={() => add("error")} className="rounded-lg bg-red-600 px-4 py-2 text-sm text-white">Error Toast</button>

      <div className="fixed right-4 top-4 z-[9999] flex flex-col gap-2">
        <AnimatePresence>
          {toasts.map((t) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              className={\`flex items-center gap-3 rounded-xl border px-4 py-3 text-sm backdrop-blur-xl \${
                t.type === "success" ? "border-green-500/20 bg-green-500/10" : "border-red-500/20 bg-red-500/10"
              }\`}
            >
              {t.type === "success" ? <CheckCircle className="h-4 w-4 text-green-400" /> : <AlertCircle className="h-4 w-4 text-red-400" />}
              {t.msg}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}`,
    prompt: "Build me a toast notification system. Click buttons to trigger success/error toasts that slide in from the right and auto-dismiss after 3s. Use React, Tailwind CSS, Framer Motion AnimatePresence, Lucide icons. Dark theme.",
  },
  {
    slug: "modal-dialog",
    name: "Modal / Dialog",
    subtitle: "Centered modal overlay with backdrop blur and close button",
    description: "A modal dialog that opens centered on screen with a dark backdrop, close button, and content area.",
    category: "modals",
    tags: ["Framer", "Tailwind"],
    tier: "free",
    previewVideo: "https://picsum.photos/seed/modal/640/360",
    code: `"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export function ModalDialog() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)} className="rounded-lg bg-violet-600 px-4 py-2 text-sm text-white">Open Modal</button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md rounded-2xl border border-white/10 bg-[#111] p-6"
            >
              <div className="flex items-center justify-between">
                <h2 className="font-display text-lg font-semibold">Modal Title</h2>
                <button onClick={() => setOpen(false)} className="text-gray-400 hover:text-white"><X className="h-5 w-5" /></button>
              </div>
              <p className="mt-4 text-sm text-gray-400">This is a modal dialog with backdrop blur and smooth entrance animation.</p>
              <button className="mt-6 w-full rounded-xl bg-violet-600 py-2.5 text-sm font-semibold text-white hover:bg-violet-500">Confirm</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}`,
    prompt: "Build me a modal dialog. Click button opens a centered modal with backdrop blur, scale animation, close button, title, description, and confirm button. Use React, Tailwind CSS, Framer Motion AnimatePresence. Dark theme.",
  },

  // --- REMAINING UI (6) ---
  {
    slug: "accordion",
    name: "Accordion",
    subtitle: "Expandable content panels with smooth height animation",
    description: "A general-purpose accordion component with expand/collapse functionality and smooth height animation.",
    category: "modals",
    tags: ["Framer", "Tailwind"],
    tier: "free",
    previewVideo: "https://picsum.photos/seed/accordion/640/360",
    code: `"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const items = [
  { title: "Section 1", content: "Content for section 1." },
  { title: "Section 2", content: "Content for section 2." },
  { title: "Section 3", content: "Content for section 3." },
];

export function Accordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="flex min-h-screen items-center justify-center p-4">
      <div className="w-96 space-y-2">
        {items.map((item, i) => (
          <div key={i} className="rounded-xl border border-white/5 bg-[#111]">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-center justify-between p-4 text-sm font-medium"
            >
              {item.title}
              <motion.span animate={{ rotate: open === i ? 180 : 0 }}><ChevronDown className="h-4 w-4 text-gray-400" /></motion.span>
            </button>
            <AnimatePresence>
              {open === i && (
                <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                  <p className="px-4 pb-4 text-sm text-gray-400">{item.content}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}`,
    prompt: "Build me an accordion with expand/collapse. 3 sections with smooth height animation, rotating chevron icon. Use React, Tailwind CSS, Framer Motion AnimatePresence, Lucide ChevronDown. Dark theme.",
  },
  {
    slug: "badge-variants",
    name: "Badge Variants",
    subtitle: "Collection of badge styles â€” solid, outline, soft, and dot indicators",
    description: "A showcase of badge variants including solid, outline, soft background, and dot indicator styles.",
    category: "cards",
    tags: ["Tailwind"],
    tier: "free",
    previewVideo: "https://picsum.photos/seed/badges/640/360",
    code: `export function BadgeVariants() {
  return (
    <section className="flex min-h-screen items-center justify-center gap-3 flex-wrap p-4">
      <span className="rounded-full bg-violet-600 px-3 py-1 text-xs font-medium text-white">Solid</span>
      <span className="rounded-full border border-violet-500 px-3 py-1 text-xs font-medium text-violet-400">Outline</span>
      <span className="rounded-full bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-400">Soft</span>
      <span className="inline-flex items-center gap-1.5 rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400">
        <span className="h-1.5 w-1.5 rounded-full bg-green-400" /> Active
      </span>
      <span className="inline-flex items-center gap-1.5 rounded-full bg-yellow-500/10 px-3 py-1 text-xs font-medium text-yellow-400">
        <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" /> Pending
      </span>
      <span className="inline-flex items-center gap-1.5 rounded-full bg-red-500/10 px-3 py-1 text-xs font-medium text-red-400">
        <span className="h-1.5 w-1.5 rounded-full bg-red-400" /> Error
      </span>
    </section>
  );
}`,
    prompt: "Build me badge variants. 6 badges: solid violet, outline, soft background, and 3 dot-indicator badges (green active, yellow pending, red error). Use React, Tailwind CSS. Dark theme.",
  },
  {
    slug: "avatar-group",
    name: "Avatar + Avatar Group",
    subtitle: "Individual avatar and stacked avatar group with count overflow",
    description: "An avatar component with sizes, and an avatar group that stacks avatars with an overflow count badge.",
    category: "cards",
    tags: ["Tailwind"],
    tier: "free",
    previewVideo: "https://picsum.photos/seed/avatar-group/640/360",
    code: `export function AvatarGroup() {
  const avatars = Array.from({ length: 5 }, (_, i) => \`https://picsum.photos/seed/avatar\${i}/100/100\`);

  return (
    <section className="flex min-h-screen items-center justify-center gap-8">
      <img src={avatars[0]} className="h-10 w-10 rounded-full border-2 border-[#0A0A0A]" />
      <img src={avatars[0]} className="h-14 w-14 rounded-full border-2 border-[#0A0A0A]" />

      <div className="flex -space-x-3">
        {avatars.slice(0, 4).map((a, i) => (
          <img key={i} src={a} className="relative h-10 w-10 rounded-full border-2 border-[#0A0A0A]" style={{ zIndex: 4 - i }} />
        ))}
        <div className="relative flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#0A0A0A] bg-violet-600 text-xs font-medium" style={{ zIndex: 0 }}>
          +3
        </div>
      </div>
    </section>
  );
}`,
    prompt: "Build me avatar and avatar group components. Individual avatars in small/medium sizes, and a stacked avatar group with negative margin overlap and a +N overflow badge. Use React, Tailwind CSS. Dark theme.",
  },
  {
    slug: "progress-bar",
    name: "Progress Bar (Animated)",
    subtitle: "Animated progress bar with percentage label and gradient fill",
    description: "An animated progress bar that fills from left to right with a gradient, showing percentage text.",
    category: "loaders",
    tags: ["Framer", "Tailwind"],
    tier: "free",
    previewVideo: "https://picsum.photos/seed/progress/640/360",
    code: `"use client";

import { motion } from "framer-motion";

export function ProgressBar() {
  return (
    <section className="flex min-h-screen items-center justify-center p-4">
      <div className="w-96 space-y-6">
        {[72, 45, 90].map((val, i) => (
          <div key={i}>
            <div className="flex justify-between text-xs text-gray-400 mb-1">
              <span>Progress {i + 1}</span>
              <span>{val}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/5">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: \`\${val}%\` }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut", delay: i * 0.2 }}
                className="h-full rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}`,
    prompt: "Build me animated progress bars. 3 bars with different percentages, gradient fill (violet to fuchsia), percentage label. Animate width from 0 when scrolled into view. Use React, Tailwind CSS, Framer Motion. Dark theme.",
  },
  {
    slug: "skeleton-loader",
    name: "Skeleton Loader",
    subtitle: "Pulsing placeholder shapes shown while content loads",
    description: "A skeleton loader component with pulsing placeholder shapes that simulate content loading states.",
    category: "loaders",
    tags: ["Tailwind"],
    tier: "free",
    previewVideo: "https://picsum.photos/seed/skeleton/640/360",
    code: `export function SkeletonLoader() {
  return (
    <section className="flex min-h-screen items-center justify-center p-4">
      <div className="w-80 space-y-4 rounded-2xl border border-white/5 bg-[#111] p-5">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-full bg-white/5 animate-pulse" />
          <div className="space-y-2 flex-1">
            <div className="h-3 w-3/4 rounded bg-white/5 animate-pulse" />
            <div className="h-2.5 w-1/2 rounded bg-white/5 animate-pulse" />
          </div>
        </div>
        <div className="space-y-2">
          <div className="h-2.5 w-full rounded bg-white/5 animate-pulse" />
          <div className="h-2.5 w-5/6 rounded bg-white/5 animate-pulse" />
          <div className="h-2.5 w-4/6 rounded bg-white/5 animate-pulse" />
        </div>
        <div className="h-40 w-full rounded-xl bg-white/5 animate-pulse" />
      </div>
    </section>
  );
}`,
    prompt: "Build me a skeleton loader. Pulsing placeholder shapes: circular avatar, two text lines, paragraph lines, and a large rectangle. Use Tailwind CSS animate-pulse. Dark theme, bg-white/5.",
  },
  {
    slug: "cookie-consent",
    name: "Cookie Consent Banner",
    subtitle: "Bottom banner asking user to accept cookies with accept/reject buttons",
    description: "A cookie consent banner that slides up from the bottom of the screen with accept and reject options.",
    category: "modals",
    tags: ["Framer", "Tailwind"],
    tier: "free",
    previewVideo: "https://picsum.photos/seed/cookie/640/360",
    code: `"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie } from "lucide-react";

export function CookieConsent() {
  const [visible, setVisible] = useState(true);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-[9999] border-t border-white/5 bg-[#111]/95 p-4 backdrop-blur-xl"
        >
          <div className="mx-auto flex max-w-5xl items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Cookie className="h-5 w-5 text-violet-400" />
              <p className="text-sm text-gray-300">We use cookies to improve your experience.</p>
            </div>
            <div className="flex gap-2">
              <button onClick={() => setVisible(false)} className="rounded-lg px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors">Reject</button>
              <button onClick={() => setVisible(false)} className="rounded-lg bg-violet-600 px-4 py-2 text-sm text-white hover:bg-violet-500 transition-colors">Accept</button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}`,
    prompt: "Build me a cookie consent banner. Slides up from bottom with cookie icon, message, reject and accept buttons. Dismisses on click. Use React, Tailwind CSS, Framer Motion, Lucide Cookie icon. Dark theme.",
  },
  {
    slug: "breadcrumb",
    name: "Breadcrumb",
    subtitle: "Navigation breadcrumb with separators and active state",
    description: "A breadcrumb navigation component showing the current page hierarchy with clickable separators.",
    category: "navbars",
    tags: ["Tailwind"],
    tier: "free",
    previewVideo: "https://picsum.photos/seed/breadcrumb/640/360",
    code: `import { ChevronRight, Home } from "lucide-react";

export function Breadcrumb() {
  const items = [
    { label: "Home", href: "/", icon: Home },
    { label: "Components", href: "/components" },
    { label: "Heroes", href: "/components/heroes" },
  ];

  return (
    <section className="flex min-h-screen items-center justify-center p-4">
      <nav className="flex items-center gap-2 text-sm">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-2">
            {i > 0 && <ChevronRight className="h-3 w-3 text-gray-600" />}
            {item.icon && <item.icon className="h-3.5 w-3.5" />}
            <a href={item.href} className={\`transition-colors \${i === items.length - 1 ? "text-white" : "text-gray-500 hover:text-gray-300"}\`}>
              {item.label}
            </a>
          </span>
        ))}
      </nav>
    </section>
  );
}`,
    prompt: "Build me a breadcrumb navigation. Show Home > Components > Heroes with chevron separators, Home icon, and active state on last item. Use React, Tailwind CSS, Lucide icons. Dark theme.",
  },
  {
    slug: "tabs-animated",
    name: "Tabs (Animated Underline)",
    subtitle: "Tab navigation with sliding underline indicator",
    description: "A tab component with an animated underline that slides to the active tab, with smooth content transitions.",
    category: "modals",
    tags: ["Framer", "Tailwind"],
    tier: "free",
    previewVideo: "https://picsum.photos/seed/tabs/640/360",
    code: `"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";

const tabs = ["Overview", "Features", "Pricing", "FAQ"];

export function TabsAnimated() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  return (
    <section className="flex min-h-screen items-center justify-center p-4">
      <div className="w-96">
        <div className="relative flex border-b border-white/5">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              ref={(el) => { refs.current[i] = el; }}
              onClick={() => setActive(i)}
              className={\`relative px-4 py-3 text-sm transition-colors \${i === active ? "text-white" : "text-gray-500 hover:text-gray-300"}\`}
            >
              {tab}
            </button>
          ))}
          <motion.div
            className="absolute bottom-0 h-0.5 bg-violet-500"
            animate={{
              left: refs.current[active]?.offsetLeft ?? 0,
              width: refs.current[active]?.offsetWidth ?? 0,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        </div>
        <div className="p-4 text-sm text-gray-400">Content for {tabs[active]}</div>
      </div>
    </section>
  );
}`,
    prompt: "Build me animated tabs. 4 tabs with a sliding underline indicator that follows the active tab using spring physics. Use React, Tailwind CSS, Framer Motion. Dark theme, violet underline.",
  },
  {
    slug: "pagination",
    name: "Pagination",
    subtitle: "Page navigation with numbered buttons, prev/next, and active state",
    description: "A pagination component with numbered page buttons, previous/next arrows, and highlighted active page.",
    category: "navbars",
    tags: ["Tailwind"],
    tier: "free",
    previewVideo: "https://picsum.photos/seed/pagination/640/360",
    code: `import { ChevronLeft, ChevronRight } from "lucide-react";

export function Pagination() {
  const pages = [1, 2, 3, "...", 10];

  return (
    <section className="flex min-h-screen items-center justify-center">
      <nav className="flex items-center gap-1">
        <button className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 hover:bg-white/5 hover:text-white transition-colors">
          <ChevronLeft className="h-4 w-4" />
        </button>
        {pages.map((p, i) => (
          <button key={i} className={\`flex h-9 w-9 items-center justify-center rounded-lg text-sm transition-colors \${
            p === 1 ? "bg-violet-600 text-white" : "text-gray-500 hover:bg-white/5 hover:text-white"
          }\`}>
            {p}
          </button>
        ))}
        <button className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 hover:bg-white/5 hover:text-white transition-colors">
          <ChevronRight className="h-4 w-4" />
        </button>
      </nav>
    </section>
  );
}`,
    prompt: "Build me a pagination component. Numbered page buttons with prev/next arrows. Active page has violet background. Use React, Tailwind CSS, Lucide icons. Dark theme.",
  },
];

// Helper functions
export function getComponentBySlug(slug: string): ComponentMeta | undefined {
  return components.find((c) => c.slug === slug);
}

export function getComponentsByCategory(category: ComponentCategory): ComponentMeta[] {
  return components.filter((c) => c.category === category);
}

export function getFeaturedComponents(): ComponentMeta[] {
  return components.filter((c) => c.featured);
}

export function getFreeComponents(): ComponentMeta[] {
  return components.filter((c) => c.tier === "free");
}

export function searchComponents(query: string): ComponentMeta[] {
  const q = query.toLowerCase();
  return components.filter(
    (c) =>
      c.name.toLowerCase().includes(q) ||
      c.subtitle.toLowerCase().includes(q) ||
      c.description.toLowerCase().includes(q) ||
      c.tags.some((t) => t.toLowerCase().includes(q))
  );
}
