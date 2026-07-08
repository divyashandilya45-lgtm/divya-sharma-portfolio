"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { GlassCard } from "../ui/GlassCard";
import { AnimatedCounter } from "../ui/AnimatedCounter";
import { Award, Users, MapPin, CheckCircle, Landmark, GraduationCap } from "lucide-react";

export function Achievements() {
  const cards = [
    {
      label: "Years Experience",
      value: 3,
      suffix: "+",
      description: "Delivering soft skills and corporate operations training",
      icon: Award,
    },
    {
      label: "Students Trained",
      value: 1000,
      suffix: "+",
      description: "Across government schools, colleges, and CSR modules",
      icon: Users,
    },
    {
      label: "Key Training States",
      value: 4,
      suffix: "",
      description: "Delivered regional programs across North India",
      icon: MapPin,
    },
  ];

  const highlights = [
    "TOT Certified Trainer at Focal Skill",
    "Best Branch Manager Award at Himalaya Gramin Nidhi",
    "Naandi Foundation Government CSR Project Lead",
    "Empowered Underprivileged Youth Employability Frameworks",
  ];

  const trainingStates = [
    { name: "Himachal Pradesh", x: "45%", y: "25%", label: "Mandi (Base)" },
    { name: "Delhi NCR", x: "50%", y: "65%", label: "Corporate Training" },
    { name: "Rajasthan", x: "25%", y: "55%", label: "CSR Classrooms" },
    { name: "Uttar Pradesh", x: "65%", y: "50%", label: "Govt Skill Bridges" },
  ];

  return (
    <section id="achievements" className="relative py-24 bg-[#0B1120] overflow-hidden">
      {/* Background glow spot */}
      <div className="absolute top-[30%] left-[5%] pointer-events-none h-[400px] w-[400px] rounded-full bg-accent-purple/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <SectionHeading
          badge="Track Record"
          title="Milestones & Achievements"
          subtitle="Measurable indicators of impact, operational leadership, and community reach."
        />

        {/* Counter cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <GlassCard key={index} delay={index * 0.1} className="text-center flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-purple/10 border border-accent-purple/20 mb-6">
                  <Icon className="h-6 w-6 text-accent-purple" />
                </div>
                <div className="mb-2">
                  <AnimatedCounter value={card.value} suffix={card.suffix} />
                </div>
                <h4 className="font-heading text-lg font-bold text-white mb-2">
                  {card.label}
                </h4>
                <p className="font-body text-sm text-text-secondary">
                  {card.description}
                </p>
              </GlassCard>
            );
          })}
        </div>

        {/* Map & Highlights split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Highlights checklist */}
          <div className="lg:col-span-5 glass rounded-2xl p-8 border border-white/5 flex flex-col justify-center">
            <h3 className="font-heading text-xl font-bold text-white mb-6 uppercase tracking-wider flex items-center gap-2">
              <Landmark className="h-5.5 w-5.5 text-accent-purple" />
              Accreditation Awards
            </h3>

            <div className="flex flex-col gap-5">
              {highlights.map((text, index) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  key={index}
                  className="flex items-start gap-3.5"
                >
                  <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="font-body text-sm md:text-base text-text-secondary">
                    {text}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Interactive World/Regional State Map */}
          <div className="lg:col-span-7 glass rounded-2xl p-8 border border-white/5 flex flex-col items-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent-purple/5 via-transparent to-transparent pointer-events-none" />
            
            <h3 className="font-heading text-lg font-bold text-white mb-8 text-center uppercase tracking-wider flex items-center gap-2">
              <MapPin className="h-5 w-5 text-accent-pink" />
              Regional Deployment Map
            </h3>

            {/* Stylized vector map plot representing North India States */}
            <div className="relative w-full max-w-[450px] aspect-[4/3] rounded-xl bg-white/3 border border-white/5 overflow-hidden flex items-center justify-center p-4">
              <svg className="w-full h-full opacity-10 absolute inset-0" viewBox="0 0 100 100" fill="none">
                {/* Abstract geographic boundaries */}
                <path d="M10,20 Q30,5 50,20 T90,20 T70,70 T20,80 Z" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                <path d="M40,30 Q50,45 60,30 T80,50 T45,85 Z" fill="rgba(124, 58, 237, 0.05)" stroke="rgba(124, 58, 237, 0.1)" strokeWidth="0.5" />
              </svg>

              {/* State Interactive Nodes */}
              {trainingStates.map((state, index) => (
                <div
                  key={index}
                  className="absolute cursor-pointer group"
                  style={{ left: state.x, top: state.y }}
                >
                  {/* Glowing map dot */}
                  <div className="map-dot" />

                  {/* Dynamic Tooltip */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none glass px-3 py-1.5 rounded-lg border border-white/10 shadow-lg text-center z-20 whitespace-nowrap">
                    <span className="font-heading text-xs font-bold text-white block">
                      {state.name}
                    </span>
                    <span className="font-mono text-[10px] text-text-secondary">
                      {state.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 font-mono text-xs text-text-muted text-center max-w-sm">
              Hover over glowing nodes to see specific regional training initiatives.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
