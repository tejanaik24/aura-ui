# Competitor Analysis — UI/UX Design Patterns

## 1. 21st.dev

**What:** Y Combinator-backed community registry of React UI components
**Stack:** Next.js 14, Supabase, Clerk, Cloudflare R2, Tailwind + Radix UI
**Model:** Open source + AI credits (free tier: 2 copies/day, 100 AI credits/month)

### Key Features
- **Magic Chat** — AI-powered UI builder from natural language
- **Magic MCP** — generate components inside Cursor/Windsurf
- **CLI** — `npx shadcn add "https://21st.dev/r/shadcn/accordion"`
- **AI Variant Generation** — side-by-side comparison
- **Site Clone** — recreate any website design from URL (Pro)
- **Components SDK** — deploy AI agents with sandboxed execution

### Component Categories (from their site)
| Category | Count | Examples |
|----------|-------|----------|
| Heroes | 306 | Gradient, particle, video bg |
| Features | 112 | Grids, bento, cards |
| AI Chats | 77 | Chat bubbles, input, streaming |
| Buttons | 588 | Variants, sizes, icons |
| Cards | 503 | Profile, product, stats |
| Forms | 185 | Input, select, checkbox |
| Pricing | 53 | Tables, comparison |
| Testimonials | 55 | Carousel, grid |
| Footers | 53 | Multi-column, minimal |
| Navigation | 17 | Navbar, sidebar |

### Design Patterns
- **Dark theme** — primary aesthetic
- **Component preview** — live iframe + code
- **One-click copy** — instant install
- **Semantic search** — find by description
- **Grid layout** — masonry-style cards
- **Category sidebar** — filter by type

---

## 2. MotionSites.ai

**What:** AI-generated website templates + sections marketplace
**Model:** Freemium (some free, most premium)
**Focus:** Animated hero sections, landing pages

### Key Features
- **Fresh Drops Daily** — new templates every day
- **AI Design Prompts** — copy/paste to generate
- **Animated Backgrounds** — video/WebM backgrounds
- **Section Library** — heroes, features, CTAs
- **Categories** — SaaS, Agency, E-commerce, Portfolio, Health, etc.

### Template Categories
| Category | Count | Style |
|----------|-------|-------|
| Hero Sections | 100+ | Animated, cinematic |
| Landing Pages | 50+ | Full-page templates |
| SaaS | 30+ | Dashboard, pricing |
| Agency | 20+ | Portfolio, creative |
| E-commerce | 15+ | Product, checkout |
| Portfolio | 15+ | 3D, interactive |
| Health/Wellness | 10+ | Calm, organic |
| Real Estate | 10+ | Luxury, property |

### Design Patterns
- **Cinematic heroes** — video/WebM backgrounds, particle effects
- **Glassmorphism** — frosted glass cards, blur effects
- **Gradient text** — colorful text headings
- **Scroll animations** — reveal on scroll
- **3D elements** — Three.js, Spline integration
- **Dark + accent** — dark backgrounds with vibrant accents
- **Premium badges** — "Premium" vs "Copy" labels
- **Preview cards** — thumbnail + category + price

### Visual Style
- Background: #0A0A0A (near black)
- Accent: Electric violet, cyan, gradient
- Typography: Bold, large headings
- Animation: GSAP, Framer Motion, Three.js
- Layout: Full-width heroes, grid cards

---

## 3. Codrops (tympanus.net/codrops)

**What:** Web design inspiration + tutorials since 2009
**Model:** Free content, Patreon support
**Focus:** Creative web experiments, case studies

### Key Features
- **Creative Hub** — showcase of original demos
- **Webzibition** — 2,000+ handpicked websites
- **Case Studies** — deep dives into web experiences
- **Tutorials** — step-by-step front-end guides
- **Studio Spotlights** — agency interviews
- **Motion Highlights** — animation roundups

### Content Categories
| Category | Focus |
|----------|-------|
| Case Studies | Engineering behind award-winning sites |
| Tutorials | GSAP, Three.js, WebGL, CSS |
| Creative Hub | Interactive demos |
| Webzibition | Website inspiration gallery |
| Designer Spotlights | Portfolio reviews |
| Developer Spotlights | Code deep dives |

### Recent Articles (July 2026)
1. **ZERO** — Interactive narrative engineering
2. **Three.js Conference** — Speaker lineup
3. **Trionn** — GSAP + Three.js + Lenis + Web Audio
4. **makemepulse** — Interactive worlds across Web/XR
5. **The Sleepers** — WebGL with lightweight techniques
6. **Wave Propagation** — Three.js cube grid
7. **Interactive Comic** — Studio375 anniversary

### Design Patterns
- **Case study format** — problem → solution → code
- **Visual-heavy** — large hero images, video embeds
- **Clean typography** — readable, well-spaced
- **Minimal navigation** — content-first
- **Categorized content** — tags, categories, series
- **External links** — to live demos, GitHub repos

---

## Comparison Matrix

| Feature | 21st.dev | MotionSites | Codrops |
|---------|----------|-------------|---------|
| **Type** | Component registry | Template marketplace | Inspiration + tutorials |
| **Model** | Freemium + AI | Freemium | Free + Patreon |
| **Stack** | Next.js, Supabase | Next.js, R2 | WordPress, KeyCDN |
| **Components** | 5,000+ | 200+ templates | Demos, not components |
| **AI Features** | Magic Chat, MCP, Variant Gen | AI prompts | None |
| **Install Method** | `npx shadcn add` | Copy/paste | View source |
| **Preview** | Live iframe | Animated preview | Screenshot/video |
| **Dark Theme** | Yes | Yes | Yes |
| **Search** | Semantic, filters | Category, type | Tags, categories |
| **Community** | Discord, GitHub | None | Patreon |

---

## What Aura UI Should Steal

### From 21st.dev
1. **CLI installer** — `npx aura-ui add button`
2. **AI-powered search** — semantic, not just keyword
3. **Component preview** — live iframe + code
4. **Category sidebar** — filter by type
5. **One-click copy** — instant install

### From MotionSites
1. **Animated hero templates** — video/WebM backgrounds
2. **Glassmorphism cards** — frosted glass effect
3. **Gradient text headings** — colorful, modern
4. **Daily drops** — freshness signal
5. **Premium/Free labels** — clear tier distinction

### From Codrops
1. **Case study format** — engineering deep dives
2. **Tutorial integration** — teach while selling
3. **Studio spotlights** — community building
4. **Webzibition** — curated inspiration gallery
5. **Motion highlights** — animation roundups

---

## Aura UI Differentiator

**"Components + Templates + AI — all in one place"**

- 21st.dev = components only
- MotionSites = templates only
- Codrops = inspiration only
- **Aura UI = all three + AI-powered workflow**

### Unique Value
1. **Templates + Components** — not just one or the other
2. **AI-assisted** — built for Claude Code/Cursor users
3. **Indian market** — ₹ pricing, local payment (Razorpay)
4. **Developer-focused** — code-first, not design-first
5. **Free tier generous** — 20 components + 3 templates
