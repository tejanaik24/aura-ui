import Link from "next/link";
import { Sparkles } from "lucide-react";

const FOOTER_LINKS = {
  Product: [
    { href: "/components", label: "Components" },
    { href: "/templates", label: "Templates" },
    { href: "/about", label: "Pricing" },
  ],
  Resources: [
    { href: "/about", label: "Documentation" },
    { href: "/about", label: "Blog" },
    { href: "/about", label: "Changelog" },
  ],
  Company: [
    { href: "/about", label: "About" },
    { href: "/about", label: "Contact" },
    { href: "/about", label: "Twitter" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <span className="font-display text-lg font-bold">Aura UI</span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">
              Built for vibe coders. Paste and ship.
            </p>
          </div>

          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="mb-3 text-sm font-semibold">{heading}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-border/50 pt-6 text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Aura UI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
