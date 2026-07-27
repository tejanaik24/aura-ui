"use client";

import { motion } from "framer-motion";
import { Zap, Palette, Rocket, Shield, Code, Layers, type LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  colSpan?: string;
  iconColor?: string;
}

interface FeaturesBentoProps {
  heading?: string;
  features?: Feature[];
}

const defaultFeatures: Feature[] = [
  { icon: Zap, title: "Lightning Fast", description: "Optimized for speed and performance.", colSpan: "col-span-2", iconColor: "text-yellow-400" },
  { icon: Palette, title: "Fully Customizable", description: "Change any color, spacing, or style.", colSpan: "col-span-1", iconColor: "text-pink-400" },
  { icon: Rocket, title: "Production Ready", description: "Ship today with confidence.", colSpan: "col-span-1", iconColor: "text-violet-400" },
  { icon: Shield, title: "Type Safe", description: "Full TypeScript support included.", colSpan: "col-span-1", iconColor: "text-green-400" },
  { icon: Code, title: "Copy & Paste", description: "No npm install needed. Just paste.", colSpan: "col-span-2", iconColor: "text-blue-400" },
  { icon: Layers, title: "Stack Friendly", description: "Works with any React stack or framework.", colSpan: "col-span-3", iconColor: "text-orange-400" },
];

export function FeaturesBento({
  heading = "Everything you need",
  features = defaultFeatures,
}: FeaturesBentoProps) {
  return (
    <section className="py-24 px-4">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center font-display text-3xl font-bold md:text-4xl">
          {heading}
        </h2>
        <div className="mt-12 grid grid-cols-3 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-2xl border border-white/5 bg-[#111] p-6 transition-colors hover:border-white/10 ${f.colSpan || "col-span-1"}`}
            >
              <f.icon className={`h-6 w-6 ${f.iconColor || "text-violet-400"}`} />
              <h3 className="mt-4 font-display text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-400">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
