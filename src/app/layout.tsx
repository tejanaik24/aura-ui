import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Aura UI",
  icons: { icon: "/main.png" },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <script src="https://cdn.tailwindcss.com" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              const theme = localStorage.getItem("theme");
              if (theme === "dark" || (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
                document.documentElement.classList.add("dark");
              }
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                darkMode: 'class',
                theme: {
                  extend: {
                    colors: {
                      background: '#09090b',
                      foreground: '#fafafa',
                      primary: { DEFAULT: '#fafafa', foreground: '#18181b' },
                      muted: { DEFAULT: '#27272a', foreground: '#a1a1aa' },
                      accent: { DEFAULT: '#27272a', foreground: '#fafafa' },
                      border: '#27272a',
                    },
                    fontFamily: { sans: ['Manrope', 'sans-serif'] },
                    animation: {
                      "aurora": "aurora 60s linear infinite",
                      "grid-flow": "grid-flow 20s linear infinite",
                      "shimmer": "shimmer 2s linear infinite",
                    },
                    keyframes: {
                      aurora: {
                        from: { backgroundPosition: "50% 50%, 50% 50%" },
                        to: { backgroundPosition: "350% 50%, 350% 50%" },
                      },
                      "grid-flow": {
                        "0%": { transform: "translateY(0)" },
                        "100%": { transform: "translateY(60px)" },
                      },
                      shimmer: {
                        from: { backgroundPosition: "0 0" },
                        to: { backgroundPosition: "-200% 0" },
                      },
                    },
                  },
                },
              };
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              body::before {
                content: "";
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                pointer-events: none;
                z-index: 9999;
                background: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E");
                mix-blend-mode: overlay;
              }
              @keyframes shimmer {
                0% { transform: translateX(-100%); }
                100% { transform: translateX(100%); }
              }
            `,
          }}
        />
        <script
          type="importmap"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              imports: {
                "react/": "https://esm.sh/react@^19.2.3/",
                "react": "https://esm.sh/react@^19.2.3",
                "framer-motion": "https://esm.sh/framer-motion@^12.23.26",
                "react-dom/": "https://esm.sh/react-dom@^19.2.3/",
                "react-router-dom": "https://esm.sh/react-router-dom@^7.10.1",
                "lucide-react": "https://esm.sh/lucide-react@^0.561.0",
                "prism-react-renderer": "https://esm.sh/prism-react-renderer@^2.3.1",
                "tailwind-merge": "https://esm.sh/tailwind-merge@^3.4.0",
                "clsx": "https://esm.sh/clsx@^2.1.1",
                "canvas-confetti": "https://esm.sh/canvas-confetti@^1.9.4",
                "@supabase/supabase-js": "https://esm.sh/@supabase/supabase-js@^2.90.1",
              },
            }),
          }}
        />
        <link rel="stylesheet" crossOrigin="anonymous" href="/assets/index-BZqb20tA.css" />
      </head>
      <body className="bg-white text-black dark:bg-black dark:text-white transition-colors">
        {children}
        <script type="module" crossOrigin="anonymous" src="/assets/index-DsaKUFRU.js" />
      </body>
    </html>
  )
}
