import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Sparkles, Copy, Code, Layers } from "lucide-react";

const STACK = ["Next.js 15", "React 19", "Tailwind v4", "GSAP", "Framer Motion", "Radix UI"];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 px-4">
        <div className="mx-auto max-w-3xl">
          {/* Header */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5">
            <Sparkles className="h-3.5 w-3.5 text-primary-light" />
            <span className="text-xs font-medium text-primary-light">About Aura UI</span>
          </div>
          <h1 className="font-display text-3xl font-bold md:text-4xl">
            Built for{" "}
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              vibe coders
            </span>
          </h1>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Aura UI is a library of production-ready React components with cinematic animation baked in.
            No design system to learn, no setup — just copy the code or copy the prompt and paste it straight
            into Claude Code, Cursor, or Lovable.
          </p>

          {/* How it works */}
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-border/50 bg-surface p-5">
              <Layers className="h-5 w-5 text-primary" />
              <h3 className="mt-3 font-display text-sm font-semibold">57 components</h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Heroes, navbars, features, pricing, and more — every category covered.
              </p>
            </div>
            <div className="rounded-2xl border border-border/50 bg-surface p-5">
              <Copy className="h-5 w-5 text-primary" />
              <h3 className="mt-3 font-display text-sm font-semibold">Copy code</h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Full React + Tailwind source for every component, ready to paste in.
              </p>
            </div>
            <div className="rounded-2xl border border-border/50 bg-surface p-5">
              <Code className="h-5 w-5 text-primary" />
              <h3 className="mt-3 font-display text-sm font-semibold">Copy prompt</h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Hand the prompt to your AI coding tool and let it build the component for you.
              </p>
            </div>
          </div>

          {/* Stack */}
          <div className="mt-12">
            <h2 className="font-display text-lg font-semibold">Built with</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {STACK.map((s) => (
                <span
                  key={s}
                  className="rounded-full bg-muted px-3 py-1.5 text-xs font-medium text-muted-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center">
            <h2 className="font-display text-xl font-semibold">Ready to ship?</h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
              Browse the full library and start pasting components into your project.
            </p>
            <a
              href="/components"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-primary-light"
            >
              Browse Components
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
