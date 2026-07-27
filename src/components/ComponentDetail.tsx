"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Copy, Check, ExternalLink } from "lucide-react";
import { cn, copyToClipboard } from "@/lib/utils";
import { ComponentPlaceholder } from "@/components/ComponentPlaceholder";
import type { ComponentMeta } from "@/lib/types";

export function ComponentDetail({ component }: { component: ComponentMeta }) {
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedPrompt, setCopiedPrompt] = useState(false);

  const handleCopyCode = async () => {
    await copyToClipboard(component.code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleCopyPrompt = async () => {
    await copyToClipboard(component.prompt);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  return (
    <div className="mx-auto max-w-4xl">
      {/* Back */}
      <Link href="/components" className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
        <ArrowLeft className="h-4 w-4" /> Back to components
      </Link>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <h1 className="font-display text-3xl font-bold">{component.name}</h1>
          <span className={cn(
            "rounded-full px-2.5 py-0.5 text-xs font-medium",
            component.tier === "free" ? "bg-success/20 text-success" : "bg-primary/20 text-primary-light"
          )}>
            {component.tier === "free" ? "Free" : "Pro"}
          </span>
        </div>
        <p className="text-muted-foreground">{component.subtitle}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {component.tags.map((tag) => (
            <span key={tag} className="rounded-md bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground">{tag}</span>
          ))}
        </div>
      </div>

      {/* Preview */}
      <div className="mb-8 overflow-hidden rounded-2xl border border-border/50 bg-surface">
        <ComponentPlaceholder
          name={component.name}
          category={component.category}
          className="aspect-video w-full"
        />
      </div>

      {/* Action Buttons */}
      <div className="mb-8 flex gap-3">
        <button
          onClick={handleCopyCode}
          className={cn(
            "flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all",
            copiedCode
              ? "bg-success/20 text-success"
              : "bg-primary text-white hover:bg-primary-light"
          )}
        >
          {copiedCode ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          {copiedCode ? "Copied!" : "Copy Code"}
        </button>
        <button
          onClick={handleCopyPrompt}
          className={cn(
            "flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all border",
            copiedPrompt
              ? "bg-success/20 text-success border-success/30"
              : "border-border text-foreground hover:bg-surface-hover"
          )}
        >
          {copiedPrompt ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          {copiedPrompt ? "Copied!" : "Copy Prompt"}
        </button>
      </div>

      {/* Description */}
      <div className="mb-8">
        <h2 className="font-display text-lg font-semibold mb-2">About this component</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">{component.description}</p>
      </div>

      {/* Code */}
      <div className="mb-8">
        <h2 className="font-display text-lg font-semibold mb-3">Source Code</h2>
        <div className="overflow-x-auto rounded-xl border border-border/50 bg-surface p-4">
          <pre className="text-xs text-muted-foreground whitespace-pre-wrap font-mono leading-relaxed">
            {component.code}
          </pre>
        </div>
      </div>

      {/* Prompt */}
      <div className="mb-8">
        <h2 className="font-display text-lg font-semibold mb-3">AI Prompt</h2>
        <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
          <p className="text-sm text-foreground leading-relaxed">{component.prompt}</p>
        </div>
      </div>
    </div>
  );
}
