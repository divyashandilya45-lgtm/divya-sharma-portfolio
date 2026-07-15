"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { GlassCard } from "../ui/GlassCard";
import testimonialsData from "@/data/testimonials.json";
import { Quote, Star } from "lucide-react";

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-36 md:py-52 lg:py-60 bg-bg-primary overflow-hidden">
      {/* Ambient background blur */}
      <div className="absolute bottom-[20%] right-[10%] pointer-events-none h-[400px] w-[400px] rounded-full bg-accent-blue/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <SectionHeading
          badge="Reviews & Feedback"
          title="Voice of Stakeholders"
          subtitle="Hear directly from the students, program leads, institution principals, and organizational heads who have experienced the training."
        />

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {testimonialsData.map((item, index) => (
            <GlassCard
              key={item.id}
              delay={index * 0.08}
              className="flex flex-col justify-between p-8 relative overflow-hidden h-full hover:border-accent-purple/30 group"
            >
              {/* Background Quote Symbol */}
              <Quote className="absolute -top-4 -right-4 h-24 w-24 text-white/5 opacity-[0.03] pointer-events-none rotate-180 transition-transform duration-500 group-hover:scale-110" />

              <div>
                {/* Rating Stars */}
                <div className="flex gap-1 mb-6 text-amber-400">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="h-4.5 w-4.5 fill-amber-400" />
                  ))}
                </div>

                {/* Quote Content */}
                <p className="font-body text-sm md:text-base text-text-secondary leading-relaxed mb-8 italic">
                  "{item.text}"
                </p>
              </div>

              {/* Speaker Details */}
              <div className="flex items-center gap-4 mt-auto border-t border-white/5 pt-6 z-10">
                {/* Placeholder Avatar */}
                <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-accent-purple to-accent-blue p-[1px] flex items-center justify-center">
                  <div className="h-full w-full rounded-full bg-bg-primary flex items-center justify-center font-heading text-white font-bold text-xs">
                    {item.name.split(" ").map(n => n[0]).join("")}
                  </div>
                </div>

                <div className="flex flex-col gap-0.5">
                  <span className="font-heading text-sm font-bold text-white leading-tight">
                    {item.name}
                  </span>
                  <span className="font-mono text-[10px] text-text-muted">
                    {item.role} • {item.organization}
                  </span>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

      </div>
    </section>
  );
}
