"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar?: string;
}

interface TestimonialsCarouselProps {
  heading?: string;
  testimonials?: Testimonial[];
  autoPlayMs?: number;
}

const defaultTestimonials: Testimonial[] = [
  { quote: "This library saved us weeks of development time. The quality is unreal.", name: "John Doe", role: "Founder, StartupX" },
  { quote: "Finally, animated components that actually look good out of the box.", name: "Jane Smith", role: "CTO, TechCorp" },
  { quote: "Copy, paste, ship. That's the entire workflow. Love it.", name: "Alex Lee", role: "Designer, StudioY" },
];

export function TestimonialsCarousel({
  heading = "Loved by developers",
  testimonials = defaultTestimonials,
  autoPlayMs = 4000,
}: TestimonialsCarouselProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setCurrent((p) => (p + 1) % testimonials.length),
      autoPlayMs
    );
    return () => clearInterval(timer);
  }, [testimonials.length, autoPlayMs]);

  return (
    <section className="py-24 px-4">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl font-bold md:text-4xl">{heading}</h2>
        <div className="relative mt-12 h-48">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <p className="text-lg text-gray-300 italic">
                &ldquo;{testimonials[current].quote}&rdquo;
              </p>
              <p className="mt-4 font-display font-semibold">
                {testimonials[current].name}
              </p>
              <p className="text-sm text-gray-500">{testimonials[current].role}</p>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? "w-8 bg-violet-500" : "w-2 bg-gray-700"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
