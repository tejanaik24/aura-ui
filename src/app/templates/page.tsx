import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LayoutTemplate, Rocket, Briefcase, ShoppingBag, User, Newspaper, Sparkles } from "lucide-react";

const TEMPLATES = [
  { name: "SaaS Landing", desc: "Full landing page for a SaaS product — hero, features, pricing, FAQ.", icon: Rocket },
  { name: "Agency Portfolio", desc: "Case studies, services, and a bold hero for creative agencies.", icon: Briefcase },
  { name: "E-commerce Store", desc: "Product grid, cart, and checkout flow with cinematic product pages.", icon: ShoppingBag },
  { name: "Personal Portfolio", desc: "Minimal single-page site for designers and developers.", icon: User },
  { name: "Blog & Newsletter", desc: "Editorial layout with article grid and subscribe CTA.", icon: Newspaper },
  { name: "AI Product Launch", desc: "Full-page template built for AI tool launches and waitlists.", icon: Sparkles },
];

export default function TemplatesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 px-4">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5">
              <LayoutTemplate className="h-3.5 w-3.5 text-primary-light" />
              <span className="text-xs font-medium text-primary-light">Coming soon</span>
            </div>
            <h1 className="font-display text-3xl font-bold md:text-4xl">Templates</h1>
            <p className="mt-2 max-w-2xl text-muted-foreground">
              Full-page templates built from Aura UI components. Paste and ship an entire site, not just a section.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TEMPLATES.map((t) => (
              <div
                key={t.name}
                className="group relative overflow-hidden rounded-2xl border border-border/50 bg-surface p-6"
              >
                <div className="absolute right-3 top-3">
                  <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                    Soon
                  </span>
                </div>
                <div className="flex h-32 items-center justify-center rounded-xl bg-[#1a1a2e]">
                  <t.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mt-4 font-display text-sm font-semibold">{t.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{t.desc}</p>
              </div>
            ))}
          </div>

          {/* Waitlist CTA */}
          <div className="mt-16 rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center">
            <h2 className="font-display text-xl font-semibold">Want early access?</h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
              Templates are in the works. Browse the component library while you wait.
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
