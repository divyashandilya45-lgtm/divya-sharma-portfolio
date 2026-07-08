"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { GlassCard } from "../ui/GlassCard";
import projectsData from "@/data/projects.json";
import { Award, Target, CheckCircle2, ChevronRight, LayoutGrid, X } from "lucide-react";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);

  return (
    <section id="projects" className="relative py-24 bg-[#0B1120] overflow-hidden">
      {/* Background glow spot */}
      <div className="absolute top-[20%] left-[10%] pointer-events-none h-[400px] w-[400px] rounded-full bg-accent-blue/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <SectionHeading
          badge="Portfolio"
          title="Training Initiatives"
          subtitle="Detailed case studies of key skill enhancement and community training projects implemented."
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <GlassCard
              key={project.id}
              delay={index * 0.1}
              className="flex flex-col justify-between hover:border-accent-purple/35 h-full cursor-pointer group"
            >
              <div onClick={() => setSelectedProject(project)}>
                {/* Visual Accent */}
                <div
                  className="h-2 w-12 rounded-full mb-6"
                  style={{ backgroundColor: project.color }}
                />

                <span className="font-mono text-[10px] font-bold tracking-widest text-text-muted uppercase mb-2 block">
                  {project.category}
                </span>

                <h3 className="font-heading text-xl font-bold text-white mb-4 group-hover:text-accent-purple transition-colors leading-snug">
                  {project.title}
                </h3>

                <p className="font-body text-sm text-text-secondary leading-relaxed mb-6 line-clamp-3">
                  {project.overview}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.skillsUsed.slice(0, 3).map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono text-text-secondary bg-white/5 border border-white/10 px-2.5 py-1 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                  {project.skillsUsed.length > 3 && (
                    <span className="text-[10px] font-mono text-accent-purple bg-accent-purple/5 border border-accent-purple/15 px-2.5 py-1 rounded">
                      +{project.skillsUsed.length - 3} More
                    </span>
                  )}
                </div>
              </div>

              <button
                onClick={() => setSelectedProject(project)}
                className="mt-auto flex items-center gap-2 font-mono text-xs font-bold text-white group-hover:text-accent-purple transition-colors border-t border-white/5 pt-4 w-full text-left"
              >
                View Project Details
                <ChevronRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Expanded Project Details Overlay Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1120]/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto glass p-6 md:p-8 rounded-2xl border border-white/10 shadow-2xl"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 rounded-full p-2 text-text-secondary hover:text-white glass transition-colors"
                aria-label="Close details"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Title & Category */}
              <span className="font-mono text-xs font-bold tracking-widest text-accent-purple uppercase block mb-2">
                {selectedProject.category}
              </span>
              <h3 className="font-heading text-2xl md:text-3xl font-extrabold text-white mb-6">
                {selectedProject.title}
              </h3>

              <div className="space-y-6">
                {/* Overview */}
                <div>
                  <h4 className="font-heading text-sm font-semibold text-white/95 uppercase tracking-wider mb-2 flex items-center gap-2">
                    <LayoutGrid className="h-4 w-4 text-accent-purple" />
                    Overview
                  </h4>
                  <p className="font-body text-sm text-text-secondary leading-relaxed">
                    {selectedProject.overview}
                  </p>
                </div>

                {/* Objectives */}
                <div>
                  <h4 className="font-heading text-sm font-semibold text-white/95 uppercase tracking-wider mb-2.5 flex items-center gap-2">
                    <Target className="h-4 w-4 text-accent-pink" />
                    Key Objectives
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-text-secondary">
                    {selectedProject.objectives.map((obj, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4.5 w-4.5 text-accent-pink mt-0.5 flex-shrink-0" />
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Impact */}
                <div className="bg-gradient-to-r from-accent-purple/10 to-accent-blue/10 rounded-xl p-4 border border-accent-purple/20">
                  <h4 className="font-heading text-sm font-semibold text-white uppercase tracking-wider mb-2 flex items-center gap-2">
                    <Award className="h-4 w-4 text-success" />
                    Program Impact
                  </h4>
                  <p className="font-body text-sm text-white/90 leading-relaxed font-medium">
                    {selectedProject.impact}
                  </p>
                </div>

                {/* Skills Used */}
                <div>
                  <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider mb-3">
                    Skills Integrated
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.skillsUsed.map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-mono text-white bg-accent-purple/20 border border-accent-purple/30 px-3 py-1.5 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
