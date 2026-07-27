import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ComponentCard } from "@/components/ComponentCard";
import { components, getFeaturedComponents } from "@/data/components";
import { CATEGORIES } from "@/lib/types";
import { Sparkles, Zap, Copy, Code, ArrowRight } from "lucide-react";

export default function Home() {
  const featured = getFeaturedComponents();

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-background to-fuchsia-900/20" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#7C3AED15_0%,_transparent_70%)]" />

          <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5">
              <Sparkles className="h-3.5 w-3.5 text-primary-light" />
              <span className="text-xs font-medium text-primary-light">57 production-ready components</span>
            </div>

            <h1 className="font-display text-5xl font-bold leading-tight tracking-tight md:text-7xl lg:text-8xl">
              Built for{" "}
              <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                vibe coders
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
              Paste and ship. React components with GSAP animations, Three.js 3D, and cinematic UI.
              Copy code or copy prompt — works with Claude Code, Cursor, and Lovable.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/components"
                className="flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-primary-light"
              >
                Browse Components <ArrowRight className="h-4 w-4" />
              </Link>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5"><Copy className="h-3.5 w-3.5" /> Copy Code</span>
                <span className="text-border">|</span>
                <span className="flex items-center gap-1.5"><Code className="h-3.5 w-3.5" /> Copy Prompt</span>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-20 px-4">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center font-display text-2xl font-bold md:text-3xl">How it works</h2>
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                { step: "01", title: "Browse", desc: "Find the component you need from 57+ options.", icon: Sparkles },
                { step: "02", title: "Copy Code", desc: "One click — full React + Tailwind source code.", icon: Copy },
                { step: "03", title: "Ship It", desc: "Paste into your project and ship today.", icon: Zap },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary-light">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <p className="mt-4 text-xs text-primary-light font-medium">Step {item.step}</p>
                  <h3 className="mt-1 font-display text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-20 px-4">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center font-display text-2xl font-bold md:text-3xl">Browse by category</h2>
            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
              {CATEGORIES.filter((c) => c.id !== "templates").map((cat) => {
                const count = components.filter((c) => c.category === cat.id).length;
                return (
                  <Link
                    key={cat.id}
                    href={`/components?category=${cat.id}`}
                    className="group rounded-xl border border-border/50 bg-surface p-4 text-center transition-all hover:border-primary/30 hover:bg-surface-hover"
                  >
                    <p className="font-display text-2xl font-bold text-primary-light">{count}</p>
                    <p className="mt-1 text-xs text-muted-foreground group-hover:text-foreground">{cat.label}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured Components */}
        <section className="py-20 px-4">
          <div className="mx-auto max-w-6xl">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-2xl font-bold md:text-3xl">Featured components</h2>
              <Link href="/components" className="text-sm text-primary-light hover:underline">
                View all →
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {featured.map((comp) => (
                <ComponentCard key={comp.slug} component={comp} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-32 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 via-fuchsia-600/10 to-violet-600/10 animate-aurora bg-[length:200%_200%]" />
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold md:text-5xl">
              Ready to build{" "}
              <span className="text-primary-light">something amazing</span>?
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Join vibe coders shipping faster with curated, animated components.
            </p>
            <Link
              href="/components"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-primary-light"
            >
              Start Building <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
