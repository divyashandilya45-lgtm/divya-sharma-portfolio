"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { GlassCard } from "../ui/GlassCard";
import experienceData from "@/data/experience.json";
import { Building2, GraduationCap, Presentation, Plane, Briefcase, Calendar, ChevronDown, ChevronUp, CheckCircle } from "lucide-react";

const iconMap: Record<string, React.ComponentType<any>> = {
  Building2: Building2,
  GraduationCap: GraduationCap,
  Presentation: Presentation,
  Plane: Plane,
};

const detailedAchievements: Record<number, string[]> = {
  1: [
    "Supervised credit verification and loan disbursement operations.",
    "Led a branch team of financial professionals, improving operational audit scores.",
    "Analyzed market trends to expand local lending portfolios."
  ],
  2: [
    "Coached 1000+ girls on career readiness, interview skills, and presentation.",
    "Facilitated Mahindra Pride Classroom and Skill Bridge modules across government colleges.",
    "Designed and conducted interactive mock group discussions and soft skill assessments."
  ],
  3: [
    "Authorized under TOT (Training of Trainers) government-sponsored program.",
    "Facilitated regional training workshops, delivering training materials to peer instructors.",
    "Conducted soft skill validation audits and student competence testing."
  ],
  4: [
    "Managed custom client itineraries, flight reservations, and bookings.",
    "Negotiated tariffs and supplier contracts with wholesale tour providers.",
    "Ensured high customer satisfaction ratings through active communication."
  ]
};

export function Experience() {
  const [expandedCard, setExpandedCard] = React.useState<number | null>(null);

  return (
    <section id="experience" className="relative py-24 bg-[#0B1120] overflow-hidden">
      {/* Background glow spot */}
      <div className="absolute top-[20%] right-[5%] pointer-events-none h-[400px] w-[400px] rounded-full bg-accent-blue/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <SectionHeading
          badge="Career Timeline"
          title="Professional Experience"
          subtitle="A track record of management, corporate training delivery, and customer relationship building. Click on any card to view detailed key achievements."
        />

        {/* Timeline Path */}
        <div className="relative mx-auto max-w-4xl">
          {/* Vertical timeline center line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent-purple via-accent-blue to-transparent transform md:-translate-x-1/2" />

          <div className="space-y-16">
            {experienceData.map((item, index) => {
              const IconComponent = iconMap[item.icon] || Briefcase;
              const isEven = index % 2 === 0;
              const isExpanded = expandedCard === item.id;

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col md:flex-row items-stretch ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline node dot */}
                  <div className="absolute left-4 md:left-1/2 top-6 flex h-8 w-8 items-center justify-center rounded-full bg-[#0B1120] border-2 border-accent-purple transform -translate-x-1/2 z-10 shadow-lg shadow-accent-purple/35">
                    <IconComponent className="h-4 w-4 text-accent-purple" />
                  </div>

                  {/* Spacer Column for desktop alignment */}
                  <div className="hidden md:block w-1/2" />

                  {/* Card Container */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-8 md:pr-8">
                    <motion.div
                      initial={{ opacity: 0, y: 30, x: isEven ? 30 : -30 }}
                      whileInView={{ opacity: 1, y: 0, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <GlassCard 
                        className="hover:border-accent-purple/30 cursor-pointer select-none"
                      >
                        <div onClick={() => setExpandedCard(isExpanded ? null : item.id)}>
                          {/* Period & Subtitle */}
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-4 border-b border-white/5 pb-3">
                            <span className="font-heading text-lg font-bold text-white">
                              {item.role}
                            </span>
                            <div className="flex items-center gap-1.5 font-mono text-xs text-text-secondary bg-white/5 px-2.5 py-1 rounded-full">
                              <Calendar className="h-3 w-3 text-accent-pink" />
                              {item.period}
                            </div>
                          </div>

                          {/* Company & Type */}
                          <div className="flex justify-between items-center gap-2 mb-4">
                            <span className="font-mono text-xs font-semibold text-accent-purple uppercase tracking-wider">
                              {item.company}
                            </span>
                            <span className="text-[10px] font-mono font-semibold tracking-widest text-text-muted uppercase border border-white/10 px-2 py-0.5 rounded">
                              {item.type}
                            </span>
                          </div>

                          <p className="font-body text-sm text-text-secondary leading-relaxed mb-4">
                            {item.description}
                          </p>

                          {/* Expand Trigger Text */}
                          <div className="flex items-center gap-1 font-mono text-[10px] text-accent-purple font-bold mb-4 uppercase tracking-widest hover:text-accent-pink transition-colors">
                            {isExpanded ? (
                              <>
                                Hide Achievements <ChevronUp className="h-3 w-3" />
                              </>
                            ) : (
                              <>
                                View Achievements <ChevronDown className="h-3 w-3" />
                              </>
                            )}
                          </div>
                        </div>

                        {/* Interactive Expandable Detailed Achievements */}
                        <motion.div
                          initial={false}
                          animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden border-t border-white/5 pt-4 mt-2"
                        >
                          <h6 className="font-heading text-[11px] font-bold text-white uppercase tracking-wider mb-3">
                            Core Responsibilities & Successes
                          </h6>
                          <ul className="space-y-2 mb-6">
                            {(detailedAchievements[item.id] || []).map((achievement, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-xs text-text-muted leading-relaxed">
                                <CheckCircle className="h-3.5 w-3.5 text-success mt-0.5 flex-shrink-0" />
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>

                        {/* Highlights Tags */}
                        <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                          {item.highlights.map((highlight, idx) => (
                            <span
                              key={idx}
                              className="text-[11px] font-mono font-medium text-white/90 bg-accent-purple/10 border border-accent-purple/20 px-2.5 py-1 rounded-md"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </GlassCard>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
