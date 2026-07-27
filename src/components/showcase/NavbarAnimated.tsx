"use client";

import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";

interface NavbarAnimatedProps {
  logo?: string;
  links?: { label: string; href: string }[];
  cta?: { label: string; href: string };
}

export function NavbarAnimated({
  logo = "Aura UI",
  links = [
    { label: "Components", href: "/components" },
    { label: "Templates", href: "/templates" },
    { label: "Pricing", href: "/about" },
    { label: "About", href: "/about" },
  ],
  cta = { label: "Get Started", href: "/components" },
}: NavbarAnimatedProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0A0A0A]/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <a href="/" className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-violet-400" />
          <span className="font-display text-lg font-bold">{logo}</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href + link.label}
              href={link.href}
              className="group relative text-sm text-gray-400 transition-colors hover:text-white"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-violet-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <a
          href={cta.href}
          className="hidden rounded-full bg-violet-600 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-violet-500 md:block"
        >
          {cta.label}
        </a>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-gray-400 md:hidden"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-white/5 bg-[#0A0A0A]/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1 p-4">
            {links.map((link) => (
              <a
                key={link.href + link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2 text-sm text-gray-400 transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href={cta.href}
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-full bg-violet-600 px-4 py-2 text-center text-sm font-medium text-white"
            >
              {cta.label}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
