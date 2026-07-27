"use client";

import { useState } from "react";
import Link from "next/link";
import { Copy, Check, ExternalLink } from "lucide-react";
import { cn, copyToClipboard } from "@/lib/utils";
import { ComponentPlaceholder } from "@/components/ComponentPlaceholder";
import type { ComponentMeta } from "@/lib/types";

interface ComponentCardProps {
  component: ComponentMeta;
}

export function ComponentCard({ component }: ComponentCardProps) {
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleCopyCode = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    await copyToClipboard(component.code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleCopyPrompt = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    await copyToClipboard(component.prompt);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  return (
    <Link
      href={`/components/${component.slug}`}
      className="group relative block overflow-hidden rounded-2xl border border-border/50 bg-surface transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Preview area */}
      <div className="relative aspect-video overflow-hidden bg-[#111]">
        {/* Thumbnail (always shown) */}
        <ComponentPlaceholder
          name={component.name}
          category={component.category}
          className={cn(
            "h-full w-full transition-opacity duration-300",
            hovered ? "opacity-0" : "opacity-100"
          )}
        />

        {/* Video preview on hover */}
        {hovered && (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src={`/previews/${component.slug}.mp4`} type="video/mp4" />
          </video>
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60" />

        {/* Free/Pro badge */}
        <div className="absolute right-3 top-3">
          <span
            className={cn(
              "rounded-full px-2.5 py-0.5 text-xs font-medium",
              component.tier === "free"
                ? "bg-success/20 text-success"
                : "bg-primary/20 text-primary-light"
            )}
          >
            {component.tier === "free" ? "Free" : "Pro"}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <div className="mb-1 flex items-center justify-between">
          <h3 className="font-display text-sm font-semibold">{component.name}</h3>
          <ExternalLink className="h-3.5 w-3.5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
        </div>
        <p className="mb-3 text-xs text-muted-foreground">{component.subtitle}</p>

        {/* Tags */}
        <div className="mb-4 flex flex-wrap gap-1.5">
          {component.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex gap-2">
          <button
            onClick={handleCopyCode}
            className={cn(
              "flex flex-1 items-center justify-center gap-1.5 rounded-lg py-1.5 text-xs font-medium transition-all",
              copiedCode
                ? "bg-success/20 text-success"
                : "bg-muted text-muted-foreground hover:bg-muted hover:text-foreground"
            )}
          >
            {copiedCode ? (
              <>
                <Check className="h-3 w-3" /> Copied
              </>
            ) : (
              <>
                <Copy className="h-3 w-3" /> Copy Code
              </>
            )}
          </button>
          <button
            onClick={handleCopyPrompt}
            className={cn(
              "flex flex-1 items-center justify-center gap-1.5 rounded-lg py-1.5 text-xs font-medium transition-all",
              copiedPrompt
                ? "bg-success/20 text-success"
                : "bg-primary/10 text-primary-light hover:bg-primary/20"
            )}
          >
            {copiedPrompt ? (
              <>
                <Check className="h-3 w-3" /> Copied
              </>
            ) : (
              <>
                <Copy className="h-3 w-3" /> Copy Prompt
              </>
            )}
          </button>
        </div>
      </div>
    </Link>
  );
}
