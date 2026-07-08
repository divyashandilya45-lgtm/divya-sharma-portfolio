"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { SkillCircle } from "../ui/SkillCircle";
import skillsData from "@/data/skills.json";
import { Sparkles, Brain, Globe, CheckCircle2 } from "lucide-react";

export function Skills() {
  const [activeTab, setActiveTab] = useState<"soft" | "technical" | "languages">("soft");

  // Filter skills for presentation
  const allSkills = skillsData.categories[0].skills;
  const languages = skillsData.categories[1].skills;

  // Select top skills for circular rendering
  const coreSoftSkills = allSkills.slice(0, 4); // Leadership, Communication, Presentation, Conflict Resolution
  const remainingSkills = allSkills.slice(4); // The rest

  return (
    <section id="skills" className="relative py-24 bg-[#0B1120] overflow-hidden">
      {/* Background glow spot */}
      <div className="absolute top-[40%] right-[10%] pointer-events-none h-[500px] w-[500px] rounded-full bg-accent-pink/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <SectionHeading
          badge="Expertise"
          title="Skills Matrix"
          subtitle="Proving excellence in behavioral training, corporate operations, and professional leadership modules."
        />

        {/* Circular Skills (Top Core) */}
        <div className="mb-20">
          <h3 className="font-heading text-lg font-semibold text-white/90 mb-10 text-center uppercase tracking-widest flex items-center justify-center gap-2">
            <Sparkles className="h-5 w-5 text-accent-purple" />
            Core Training Pillars
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
            {coreSoftSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-2xl p-4 border border-white/5 w-full max-w-[200px]"
              >
                <SkillCircle name={skill.name} percentage={skill.level} size={130} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tab-like content details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left panel: General Skills list */}
          <div className="lg:col-span-8 glass rounded-2xl p-8 border border-white/5">
            <h3 className="font-heading text-lg font-semibold text-white/90 mb-8 uppercase tracking-widest flex items-center gap-2 border-b border-white/5 pb-4">
              <Brain className="h-5 w-5 text-accent-pink" />
              Professional Competencies
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {remainingSkills.map((skill, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <div className="flex justify-between items-center text-sm font-semibold">
                    <span className="text-text-secondary">{skill.name}</span>
                    <span className="font-mono text-xs text-accent-purple">{skill.level}%</span>
                  </div>
                  <div className="skill-bar-track">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      className="skill-bar-fill"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right panel: Languages and Certifications quick link */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            {/* Languages card */}
            <div className="glass rounded-2xl p-8 border border-white/5">
              <h3 className="font-heading text-lg font-semibold text-white/90 mb-6 uppercase tracking-widest flex items-center gap-2 border-b border-white/5 pb-4">
                <Globe className="h-5 w-5 text-accent-blue" />
                Languages
              </h3>

              <div className="flex flex-col gap-6">
                {languages.map((lang, index) => (
                  <div key={index} className="flex flex-col gap-2">
                    <div className="flex justify-between items-center text-sm font-semibold">
                      <span className="text-text-secondary">{lang.name}</span>
                      <span className="font-mono text-xs text-accent-blue">{lang.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-accent-blue to-accent-purple rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Methodology card */}
            <div className="glass rounded-2xl p-8 border border-white/5 flex flex-col gap-4">
              <h3 className="font-heading text-sm font-semibold text-white uppercase tracking-widest">
                Training Delivery Methods
              </h3>
              <div className="flex flex-col gap-3 text-xs text-text-secondary">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-success" />
                  <span>STAR Interview Methodology</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-success" />
                  <span>Interactive Activity-based Training</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-success" />
                  <span>Emotional Intelligence Integration</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-success" />
                  <span>Cognitive Behavioral Mentoring</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
