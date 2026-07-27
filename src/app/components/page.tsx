"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ComponentCard } from "@/components/ComponentCard";
import { SearchBar } from "@/components/SearchBar";
import { CategoryFilter } from "@/components/CategoryFilter";
import { components, searchComponents } from "@/data/components";
import type { ComponentCategory } from "@/lib/types";

export default function ComponentsPage() {
  return (
    <Suspense>
      <ComponentsPageContent />
    </Suspense>
  );
}

function ComponentsPageContent() {
  const searchParams = useSearchParams();
  const initialCategory = (searchParams.get("category") as ComponentCategory | "all") || "all";

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<ComponentCategory | "all">(initialCategory);

  const filtered = components.filter((c) => {
    const matchesQuery = query ? searchComponents(query).includes(c) : true;
    const matchesCategory = category === "all" ? true : c.category === category;
    return matchesQuery && matchesCategory;
  });

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 px-4">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-10">
            <h1 className="font-display text-3xl font-bold md:text-4xl">Components</h1>
            <p className="mt-2 text-muted-foreground">{components.length} production-ready components. Copy code or copy prompt.</p>
          </div>

          {/* Filters */}
          <div className="mb-8 space-y-4">
            <SearchBar value={query} onChange={setQuery} />
            <CategoryFilter selected={category} onSelect={setCategory} />
          </div>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((comp) => (
                <ComponentCard key={comp.slug} component={comp} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <p className="text-muted-foreground">No components found. Try a different search or category.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
