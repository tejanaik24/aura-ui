import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aura UI — Built for Vibe Coders. Paste and Ship.",
  description:
    "Production-ready React components + website templates for Claude Code, Cursor, and Lovable users. Animated heroes, GSAP sections, cinematic UI — copy code or copy prompt.",
  keywords: [
    "react components",
    "vibe coders",
    "GSAP",
    "Framer Motion",
    "Tailwind CSS",
    "animated components",
    "Claude Code",
    "Cursor",
    "Lovable",
    "copy paste components",
    "India",
    "Next.js",
  ],
  openGraph: {
    title: "Aura UI — Built for Vibe Coders. Paste and Ship.",
    description:
      "60+ production-ready React components. Animated heroes, GSAP sections, cinematic UI. Copy code or copy prompt.",
    type: "website",
    siteName: "Aura UI",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aura UI — Built for Vibe Coders. Paste and Ship.",
    description:
      "60+ production-ready React components. Animated heroes, GSAP sections, cinematic UI.",
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-foreground font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
