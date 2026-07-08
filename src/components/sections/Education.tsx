"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { GlassCard } from "../ui/GlassCard";
import educationData from "@/data/education.json";
import { Brain, Monitor, Calculator, Microscope, School } from "lucide-react";

const iconMap: Record<string, React.ComponentType<any>> = {
  Brain: Brain,
  Monitor: Monitor,
  Calculator: Calculator,
  Microscope: Microscope,
  School: School,
};

export function Education() {
  return (
    <section id="education" className="relative py-24 bg-[#0B1120] overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute bottom-[10%] left-[5%] pointer-events-none h-[400px] w-[400px] rounded-full bg-accent-purple/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <SectionHeading
          badge="Academic Background"
          title="Education History"
          subtitle="A combination of advanced sciences, computer applications, financial management, and developmental psychology."
        />

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationData.map((item, index) => {
            const IconComponent = iconMap[item.icon] || School;

            return (
              <GlassCard
                key={item.id}
                delay={index * 0.1}
                className="flex flex-col justify-between hover:border-accent-blue/30 h-full"
              >
                <div>
                  {/* Card Header Icon & Status */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-blue/10 border border-accent-blue/20">
                      <IconComponent className="h-6 w-6 text-accent-blue" />
                    </div>
                    <span className={`font-mono text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border ${
                      item.status === "Pursuing"
                        ? "bg-accent-purple/15 border-accent-purple/35 text-accent-purple"
                        : "bg-success/15 border-success/35 text-success"
                    }`}>
                      {item.status}
                    </span>
                  </div>

                  {/* Degree & Inst */}
                  <h3 className="font-heading text-xl font-bold text-white mb-2 leading-tight">
                    {item.degree}
                  </h3>
                  <span className="font-mono text-xs font-semibold text-text-secondary uppercase tracking-widest block mb-4">
                    {item.institution}
                  </span>

                  <p className="font-body text-sm text-text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </GlassCard>
            );
          })}
        </div>

      </div>
    </section>
  );
}
