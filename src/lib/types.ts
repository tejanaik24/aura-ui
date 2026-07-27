export type ComponentCategory =
  | "heroes"
  | "navbars"
  | "features"
  | "testimonials"
  | "pricing"
  | "faqs"
  | "ctas"
  | "footers"
  | "carousels"
  | "forms"
  | "cards"
  | "buttons"
  | "modals"
  | "loaders"
  | "templates";

export type ComponentTier = "free" | "pro";

export type StackTag = "GSAP" | "Framer" | "Three.js" | "Tailwind" | "R3F" | "Spline" | "Radix";

export interface ComponentMeta {
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  category: ComponentCategory;
  tags: StackTag[];
  tier: ComponentTier;
  previewVideo: string;
  code: string;
  prompt: string;
  featured?: boolean;
}

export const CATEGORIES: { id: ComponentCategory; label: string; icon: string }[] = [
  { id: "heroes", label: "Heroes", icon: "Sparkles" },
  { id: "navbars", label: "Navbars", icon: "Menu" },
  { id: "features", label: "Features", icon: "LayoutGrid" },
  { id: "testimonials", label: "Testimonials", icon: "MessageSquare" },
  { id: "pricing", label: "Pricing", icon: "CreditCard" },
  { id: "faqs", label: "FAQs", icon: "HelpCircle" },
  { id: "ctas", label: "CTAs", icon: "MousePointerClick" },
  { id: "footers", label: "Footers", icon: "PanelBottom" },
  { id: "carousels", label: "Carousels", icon: "GalleryHorizontalEnd" },
  { id: "forms", label: "Forms", icon: "FileText" },
  { id: "cards", label: "Cards", icon: "SquareStack" },
  { id: "buttons", label: "Buttons", icon: "RectangleHorizontal" },
  { id: "modals", label: "Modals & Overlays", icon: "PanelTop" },
  { id: "loaders", label: "Loaders & Effects", icon: "Loader" },
  { id: "templates", label: "Templates", icon: "LayoutTemplate" },
];

export const STACK_TAGS: StackTag[] = ["GSAP", "Framer", "Three.js", "Tailwind", "R3F", "Spline", "Radix"];
