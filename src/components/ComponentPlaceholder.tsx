import {
  Sparkles, Menu, LayoutGrid, MessageSquare, CreditCard,
  HelpCircle, MousePointerClick, PanelBottom, GalleryHorizontalEnd,
  FileText, SquareStack, RectangleHorizontal, PanelTop, Loader,
  LayoutTemplate,
} from "lucide-react";
import type { ComponentCategory } from "@/lib/types";

const iconMap: Record<ComponentCategory, React.ComponentType<{ className?: string }>> = {
  heroes: Sparkles,
  navbars: Menu,
  features: LayoutGrid,
  testimonials: MessageSquare,
  pricing: CreditCard,
  faqs: HelpCircle,
  ctas: MousePointerClick,
  footers: PanelBottom,
  carousels: GalleryHorizontalEnd,
  forms: FileText,
  cards: SquareStack,
  buttons: RectangleHorizontal,
  modals: PanelTop,
  loaders: Loader,
  templates: LayoutTemplate,
};

export function ComponentPlaceholder({
  name,
  category,
  className = "",
}: {
  name: string;
  category: ComponentCategory;
  className?: string;
}) {
  const Icon = iconMap[category];
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 bg-[#1a1a2e] ${className}`}
    >
      {Icon && <Icon className="h-6 w-6 text-[#7C3AED]" />}
      <span className="text-sm font-semibold text-[#7C3AED]">{name}</span>
    </div>
  );
}
