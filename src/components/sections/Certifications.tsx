"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { GlassCard } from "../ui/GlassCard";
import certificationsData from "@/data/certifications.json";
import { Award, Users, Landmark, Heart, Star, Zap, ShieldCheck } from "lucide-react";

const iconMap: Record<string, React.ComponentType<any>> = {
  Award: Award,
  Users: Users,
  Landmark: Landmark,
  Heart: Heart,
  Star: Star,
  Zap: Zap,
};

export function Certifications() {
  return (
    <section id="certifications" className="relative py-24 bg-[#0B1120] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-[30%] left-[5%] pointer-events-none h-[400px] w-[400px] rounded-full bg-accent-purple/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <SectionHeading
          badge="Credentials"
          title="Licenses & Certifications"
          subtitle="Validated training qualifications, corporate certifications, and government project mandates."
        />

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificationsData.map((item, index) => {
            const IconComponent = iconMap[item.icon] || ShieldCheck;

            return (
              <GlassCard
                key={item.id}
                delay={index * 0.08}
                className="flex flex-col justify-between hover:border-accent-purple/30 h-full group"
              >
                <div>
                  {/* Card Icon & Header */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-purple/10 border border-accent-purple/20 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-6 w-6 text-accent-purple" />
                  </div>

                  {/* Title & Issuer */}
                  <h3 className="font-heading text-lg font-bold text-white mb-2 leading-tight">
                    {item.title}
                  </h3>
                  <span className="font-mono text-xs font-semibold text-text-secondary uppercase tracking-widest block mb-4">
                    {item.issuer}
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
