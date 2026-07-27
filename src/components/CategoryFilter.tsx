"use client";

import { cn } from "@/lib/utils";
import { CATEGORIES, type ComponentCategory } from "@/lib/types";

interface CategoryFilterProps {
  selected: ComponentCategory | "all";
  onSelect: (category: ComponentCategory | "all") => void;
}

export function CategoryFilter({ selected, onSelect }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onSelect("all")}
        className={cn(
          "rounded-full px-4 py-1.5 text-xs font-medium transition-all",
          selected === "all"
            ? "bg-primary text-white"
            : "bg-surface text-muted-foreground hover:bg-surface-hover hover:text-foreground"
        )}
      >
        All
      </button>
      {CATEGORIES.filter((c) => c.id !== "templates").map((cat) => (
        <button
          key={cat.id}
          onClick={() => onSelect(cat.id)}
          className={cn(
            "rounded-full px-4 py-1.5 text-xs font-medium transition-all",
            selected === cat.id
              ? "bg-primary text-white"
              : "bg-surface text-muted-foreground hover:bg-surface-hover hover:text-foreground"
          )}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
