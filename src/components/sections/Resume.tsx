"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { GlassCard } from "../ui/GlassCard";
import { MagneticButton } from "../ui/MagneticButton";
import { Download, FileText, ExternalLink, Award, Landmark, Briefcase, Mail, Phone, MapPin } from "lucide-react";
import personalData from "@/data/personal.json";

export function Resume() {
  const handleDownload = () => {
    // Triggers download of the resume file
    window.open("/resume.pdf", "_blank");
  };

  return (
    <section id="resume" className="relative py-24 bg-[#0B1120] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-[30%] left-[5%] pointer-events-none h-[400px] w-[400px] rounded-full bg-accent-purple/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <SectionHeading
          badge="Curriculum Vitae"
          title="Resume Hub"
          subtitle="Explore the detailed profile overview, verified credentials, and download a printable PDF copy of the resume."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left panel: Description & Action buttons */}
          <div className="lg:col-span-5 flex flex-col items-start gap-6">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-white leading-tight">
              Looking for a verified <br />
              <span className="gradient-text">L&D Specialist?</span>
            </h3>
            <p className="font-body text-sm text-text-secondary leading-relaxed md:text-base">
              You can read the full professional profile summary, work milestones, and key competencies on the right, or click below to download a copy.
            </p>

            <div className="flex flex-wrap gap-4 mt-2">
              <MagneticButton onClick={handleDownload} variant="primary" className="shadow-lg shadow-accent-purple/20">
                Download PDF Copy
                <Download className="ml-2 h-4 w-4" />
              </MagneticButton>
              
              <MagneticButton onClick={() => window.open("/resume.pdf", "_blank")} variant="secondary">
                Open in New Tab
                <ExternalLink className="ml-2 h-4 w-4" />
              </MagneticButton>
            </div>
          </div>

          {/* Right panel: High-Fidelity Visual Resume Sheet */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden flex flex-col"
            >
              {/* Top gradient highlight */}
              <div className="h-2 w-full bg-gradient-to-r from-accent-purple via-accent-pink to-accent-blue" />
              
              <div className="p-6 md:p-8 space-y-6">
                {/* Header info */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/5 pb-5">
                  <div>
                    <h4 className="font-heading text-xl font-bold text-white tracking-wide">
                      DIVYA SHARMA
                    </h4>
                    <span className="font-mono text-xs text-accent-purple uppercase tracking-widest block mt-0.5">
                      L&D Specialist • Branch Operations Manager
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 text-[11px] font-mono text-text-muted">
                    <span className="flex items-center gap-1.5 justify-end">
                      <Mail className="h-3.5 w-3.5 text-accent-purple" />
                      {personalData.contact.email}
                    </span>
                    <span className="flex items-center gap-1.5 justify-end">
                      <MapPin className="h-3.5 w-3.5 text-accent-pink" />
                      Mandi, Himachal Pradesh
                    </span>
                  </div>
                </div>

                {/* Profile Summary */}
                <div className="space-y-2">
                  <h5 className="font-heading text-xs font-bold text-white uppercase tracking-widest flex items-center gap-2">
                    <FileText className="h-4 w-4 text-accent-purple" />
                    Profile Summary
                  </h5>
                  <p className="font-body text-xs text-text-secondary leading-relaxed">
                    Empathetic Soft Skills Trainer, Operational Manager, and Psychology scholar. Certified TOT specialist with experience training 1000+ students on communication, leadership, and STAR interview methodologies. Proven track record managing microfinance branch operations and delivering CSR projects.
                  </p>
                </div>

                {/* Experience snippet */}
                <div className="space-y-3">
                  <h5 className="font-heading text-xs font-bold text-white uppercase tracking-widest flex items-center gap-2">
                    <Briefcase className="h-4 w-4 text-accent-pink" />
                    Key Professional Milestones
                  </h5>
                  
                  <div className="space-y-3 border-l border-white/5 pl-4 ml-1.5">
                    {/* Item 1 */}
                    <div className="relative">
                      <div className="absolute -left-[20.5px] top-1.5 h-2 w-2 rounded-full bg-accent-pink" />
                      <div className="flex justify-between items-baseline gap-2 mb-0.5">
                        <span className="font-heading text-xs font-bold text-white">Branch Manager</span>
                        <span className="font-mono text-[9px] text-text-muted">Current</span>
                      </div>
                      <span className="font-mono text-[10px] text-text-secondary block mb-1">Himalaya Gramin Nidhi Ltd</span>
                      <p className="font-body text-[11px] text-text-muted leading-relaxed">
                        Directing financial branch operations, credit processing, team management, compliance, and customer relations.
                      </p>
                    </div>

                    {/* Item 2 */}
                    <div className="relative">
                      <div className="absolute -left-[20.5px] top-1.5 h-2 w-2 rounded-full bg-accent-blue" />
                      <div className="flex justify-between items-baseline gap-2 mb-0.5">
                        <span className="font-heading text-xs font-bold text-white">Soft Skills Trainer</span>
                        <span className="font-mono text-[9px] text-text-muted">Previous</span>
                      </div>
                      <span className="font-mono text-[10px] text-text-secondary block mb-1">Naandi Foundation & CSR Initiatives</span>
                      <p className="font-body text-[11px] text-text-muted leading-relaxed">
                        Led Mahindra Pride Classroom and Skill Bridge Program, coaching underprivileged youth on career preparedness.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Education snippet */}
                <div className="space-y-2">
                  <h5 className="font-heading text-xs font-bold text-white uppercase tracking-widest flex items-center gap-2">
                    <Landmark className="h-4 w-4 text-accent-blue" />
                    Academic Highlights
                  </h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                    <div className="glass p-2.5 rounded-lg border border-white/5">
                      <div className="flex justify-between items-baseline gap-2">
                        <span className="font-heading text-[11px] font-bold text-white">M.A. Psychology</span>
                        <span className="font-mono text-[9px] text-accent-purple font-semibold">Pursuing</span>
                      </div>
                      <span className="font-mono text-[9px] text-text-muted">IGNOU</span>
                    </div>
                    <div className="glass p-2.5 rounded-lg border border-white/5">
                      <div className="flex justify-between items-baseline gap-2">
                        <span className="font-heading text-[11px] font-bold text-white">M.Sc. Physics/Science</span>
                        <span className="font-mono text-[9px] text-success font-semibold">Completed</span>
                      </div>
                      <span className="font-mono text-[9px] text-text-muted">DAV College</span>
                    </div>
                  </div>
                </div>

                {/* Core Competencies tags */}
                <div className="space-y-2 border-t border-white/5 pt-4">
                  <h5 className="font-heading text-[10px] font-bold text-white uppercase tracking-widest">
                    Expertise Highlights
                  </h5>
                  <div className="flex flex-wrap gap-1.5">
                    {["Communication", "Leadership Coaching", "STAR Method", "Branch Management", "Behavioral Mentoring"].map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[9px] font-mono text-white bg-white/5 border border-white/10 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
