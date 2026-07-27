import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ComponentDetail } from "@/components/ComponentDetail";
import { getComponentBySlug, components } from "@/data/components";

export function generateStaticParams() {
  return components.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const comp = getComponentBySlug(slug);
  if (!comp) return {};
  return {
    title: `${comp.name} — Aura UI`,
    description: comp.description,
  };
}

export default async function ComponentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const comp = getComponentBySlug(slug);
  if (!comp) notFound();

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 px-4">
        <ComponentDetail component={comp} />
      </main>
      <Footer />
    </>
  );
}
