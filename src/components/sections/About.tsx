"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { GlassCard } from "../ui/GlassCard";
import personalData from "@/data/personal.json";
import { Sparkles, Compass, Target, Star, Landmark, Brain } from "lucide-react";

export function About() {
  const storyIcons = [Compass, Target, Star, Landmark, Sparkles, Brain];

  return (
    <section id="about" className="relative py-24 overflow-hidden bg-[#0B1120]">
      {/* Background glow spot */}
      <div className="absolute top-[30%] left-[5%] pointer-events-none h-[400px] w-[400px] rounded-full bg-accent-purple/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <SectionHeading
          badge="Professional Story"
          title="My Career Journey"
          subtitle="How analytical science, team operations, and behavioral psychology combined to build my learning and development expertise."
        />

        {/* Mission Statement Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 glass rounded-2xl p-8 border border-white/5 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-accent-purple/5 to-accent-blue/5 pointer-events-none" />
          <div className="flex flex-col gap-2 z-10">
            <span className="font-mono text-xs uppercase tracking-widest text-accent-purple font-semibold">
              Mission Statement
            </span>
            <p className="font-heading text-xl md:text-2xl font-bold text-white leading-snug max-w-2xl">
              "{personalData.about.mission}"
            </p>
          </div>
          <div className="z-10 flex-shrink-0">
            <span className="inline-block rounded-full bg-gradient-to-r from-accent-purple via-accent-pink to-accent-blue p-[1px]">
              <span className="inline-block bg-[#0B1120] rounded-full px-6 py-2.5 font-heading text-sm font-semibold text-white">
                Core Philosophy
              </span>
            </span>
          </div>
        </motion.div>

        {/* Story Timeline */}
        <div className="relative border-l-2 border-dashed border-white/10 ml-4 md:ml-12 pl-8 md:pl-16 space-y-12">
          {personalData.about.story.map((item, index) => {
            const Icon = storyIcons[index % storyIcons.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Connector Dot Icon */}
                <div className="absolute -left-[50px] md:-left-[82px] top-1 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-[#0B1120] border border-white/10 z-10 group-hover:border-accent-purple/50 transition-colors">
                  <Icon className="h-5 w-5 md:h-6 md:w-6 text-accent-purple" />
                </div>

                <GlassCard className="hover:border-accent-purple/35 transition-all">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                    <span className="font-mono text-xs font-bold tracking-widest text-accent-pink uppercase bg-accent-pink/5 border border-accent-pink/10 px-3 py-1 rounded-full w-fit">
                      {item.year}
                    </span>
                    <h3 className="font-heading text-xl font-bold text-white">
                      {item.title}
                    </h3>
                  </div>
                  <p className="font-body text-sm text-text-secondary leading-relaxed md:text-base">
                    {item.description}
                  </p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
