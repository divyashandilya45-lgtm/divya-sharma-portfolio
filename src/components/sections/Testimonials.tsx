"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { GlassCard } from "../ui/GlassCard";
import testimonialsData from "@/data/testimonials.json";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  // Autoplay functionality
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  const activeTestimonial = testimonialsData[currentIndex];

  return (
    <section id="testimonials" className="relative py-24 bg-[#0B1120] overflow-hidden">
      {/* Ambient background blur */}
      <div className="absolute bottom-[20%] right-[10%] pointer-events-none h-[400px] w-[400px] rounded-full bg-accent-blue/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <SectionHeading
          badge="Reviews & Feedback"
          title="Voice of Stakeholders"
          subtitle="Read what students, program leads, institution principals, and organizational heads say about the training impact."
        />

        {/* Carousel Container */}
        <div className="relative mx-auto max-w-4xl px-4 flex flex-col items-center">
          <div className="w-full relative min-h-[350px] md:min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.98, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -10 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <GlassCard className="w-full max-w-3xl flex flex-col justify-between p-8 md:p-12 relative overflow-hidden h-full">
                  {/* Decorative Background Quote Symbol */}
                  <Quote className="absolute -top-6 -right-6 h-36 w-36 text-white/3 opacity-[0.02] pointer-events-none rotate-180" />

                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-6 text-amber-400">
                    {Array.from({ length: activeTestimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-amber-400" />
                    ))}
                  </div>

                  {/* Quote Content */}
                  <p className="font-body text-base md:text-lg text-text-secondary leading-relaxed mb-8 italic">
                    "{activeTestimonial.text}"
                  </p>

                  {/* Speaker Details */}
                  <div className="flex items-center gap-4 mt-auto border-t border-white/5 pt-6">
                    {/* Placeholder Avatar */}
                    <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-accent-purple to-accent-blue p-[1px] flex items-center justify-center">
                      <div className="h-full w-full rounded-full bg-[#0B1120] flex items-center justify-center font-heading text-white font-bold text-sm">
                        {activeTestimonial.name.split(" ").map(n => n[0]).join("")}
                      </div>
                    </div>

                    <div className="flex flex-col gap-0.5">
                      <span className="font-heading text-base font-bold text-white leading-tight">
                        {activeTestimonial.name}
                      </span>
                      <span className="font-mono text-xs text-text-muted">
                        {activeTestimonial.role} • {activeTestimonial.organization}
                      </span>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="flex h-10 w-10 items-center justify-center rounded-full glass text-text-secondary hover:text-white transition-colors"
              aria-label="Previous Review"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            
            <div className="flex items-center gap-2 font-mono text-xs text-text-muted">
              <span className="text-white font-bold">{currentIndex + 1}</span>
              <span>/</span>
              <span>{testimonialsData.length}</span>
            </div>

            <button
              onClick={nextSlide}
              className="flex h-10 w-10 items-center justify-center rounded-full glass text-text-secondary hover:text-white transition-colors"
              aria-label="Next Review"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
