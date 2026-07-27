# Aura UI — Handoff Document
## Last session: 2026-07-27

## Quick Start
`ash
cd "C:\claude code\aura-ui"
npm run dev  # Runs on port 3001
`

## Project Status: Phase 1 COMPLETE, Phase 2 READY

### Architecture
- Next.js 15.1.3 + React 19 + Tailwind v4
- GSAP + Framer Motion + Radix UI + Lucide icons
- Dark theme: #0A0A0A bg, white text, #7C3AED violet accent
- Fonts: Space Grotesk (display) + Inter (body)

### File Structure
src/
  app/
    layout.tsx          — Root layout (PostCSS Tailwind v4, Google Fonts)
    page.tsx            — Landing page (hero, how-it-works, categories, featured, CTA)
    globals.css         — Tailwind v4, custom theme, keyframes
    components/
      page.tsx          — Components listing (search + category filter)
      [slug]/page.tsx   — Component detail (code view, copy buttons)
  components/
    Navbar.tsx          — Site navbar
    Footer.tsx          — Multi-column footer
    ComponentCard.tsx   — Card with video hover, copy buttons, tier badge
    ComponentDetail.tsx — Full detail view with code + prompt
    SearchBar.tsx       — Search input
    CategoryFilter.tsx  — Category pill filters
    showcase/
      HeroCinematic.tsx     — GSAP hero with scroll parallax
      NavbarAnimated.tsx    — Animated navbar with underline hover
      FeaturesBento.tsx     — Bento grid features
      TestimonialsCarousel.tsx — Auto-play carousel
      CTAGradient.tsx        — Gradient CTA with aurora
  lib/
    types.ts            — ComponentMeta, ComponentCategory, CATEGORIES, STACK_TAGS
    utils.ts            — cn(), copyToClipboard(), slugify()
  data/
    components.ts       — 57 component entries with code/prompts/metadata

### Key Data
- 57 components cataloged (heroes: 5, navbars: 3, features: 7, testimonials: 3, pricing: 2, faqs: 1, ctas: 2, footers: 3, carousels: 1, forms: 2, cards: 5, buttons: 5, modals: 2, loaders: 2, misc: 6)
- 5 showcase components with live code
- All components have: name, subtitle, description, category, tags, tier (free/pro), code, prompt

### Known Issues (Non-critical)
- Favicon 404 (no favicon.ico created yet)
- NEXTJS-PORTAL white bg (Next.js dev overlay, not in production)

### What's Next (Phase 2)
1. Add more showcase components (pricing, forms, cards, loaders, etc.)
2. Record video previews for /public/previews/[slug].mp4
3. Build about page
4. Build templates page
5. Hook up CLI to API
6. Add favicon + og:image

### PRD Location
D:\Vyzma\_BRAIN\AURA-UI-PRD.md

### Design Standard
D:\Vyzma\_BRAIN\design-dna.md