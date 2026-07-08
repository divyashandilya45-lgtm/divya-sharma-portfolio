"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { GlassCard } from "../ui/GlassCard";
import { MagneticButton } from "../ui/MagneticButton";
import { Download, FileText, ExternalLink, Award, Landmark, Briefcase } from "lucide-react";

export function Resume() {
  const handleDownload = () => {
    // Standard download routine (triggers file download once resume.pdf is uploaded by user)
    window.open("/resume.pdf", "_blank");
  };

  return (
    <section id="resume" className="relative py-24 bg-[#0B1120] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-[30%] left-[5%] pointer-events-none h-[400px] w-[400px] rounded-full bg-accent-purple/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <SectionHeading
          badge="Documents Hub"
          title="Curriculum Vitae"
          subtitle="Access full curriculum summary, credentials verification, or download the printable PDF copy."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left panel: Description & Action buttons */}
          <div className="lg:col-span-5 flex flex-col items-start gap-6">
            <h3 className="font-heading text-2xl font-bold text-white leading-tight">
              Looking for a verified <br />
              <span className="gradient-text">L&D Professional?</span>
            </h3>
            <p className="font-body text-sm text-text-secondary leading-relaxed md:text-base">
              Explore the summary of skills, certifications, and operational accomplishments in detail, or download the formal corporate layout for your records.
            </p>

            <div className="flex flex-wrap gap-4 mt-2">
              <MagneticButton onClick={handleDownload} variant="primary">
                Download Resume PDF
                <Download className="ml-2 h-4 w-4" />
              </MagneticButton>
              
              <MagneticButton onClick={() => window.open("/resume.pdf", "_blank")} variant="secondary">
                Preview In Tab
                <ExternalLink className="ml-2 h-4 w-4" />
              </MagneticButton>
            </div>
          </div>

          {/* Right panel: Visual resume summary card dashboard */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass rounded-2xl p-6 md:p-8 border border-white/5 shadow-2xl relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent-purple/5 to-accent-blue/5 rounded-2xl pointer-events-none" />

              {/* Resume Header */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/5 pb-6 mb-6">
                <div>
                  <h4 className="font-heading text-lg font-bold text-white">
                    DIVYA SHARMA
                  </h4>
                  <span className="font-mono text-xs text-text-muted">
                    L&D Specialist • Branch Operations Lead
                  </span>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[10px] font-bold text-accent-purple bg-accent-purple/10 border border-accent-purple/20 px-3 py-1 rounded-full uppercase">
                  <FileText className="h-3.5 w-3.5" />
                  Executive Summary
                </div>
              </div>

              {/* Resume Highlights details */}
              <div className="space-y-6">
                {/* Exp highlight */}
                <div className="flex items-start gap-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-purple/10 border border-accent-purple/20 flex-shrink-0">
                    <Briefcase className="h-5 w-5 text-accent-purple" />
                  </div>
                  <div>
                    <h5 className="font-heading text-sm font-bold text-white mb-1">
                      Professional Operations Management
                    </h5>
                    <p className="font-body text-xs text-text-secondary leading-relaxed">
                      Branch Manager directing Himalaya Gramin Nidhi financial systems and credit distributions.
                    </p>
                  </div>
                </div>

                {/* Training highlight */}
                <div className="flex items-start gap-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-pink/10 border border-accent-pink/20 flex-shrink-0">
                    <Award className="h-5 w-5 text-accent-pink" />
                  </div>
                  <div>
                    <h5 className="font-heading text-sm font-bold text-white mb-1">
                      CSR Project Execution
                    </h5>
                    <p className="font-body text-xs text-text-secondary leading-relaxed">
                      Delivered corporate social responsibility modules under Naandi Foundation (Mahindra Pride, Digital Equalizers).
                    </p>
                  </div>
                </div>

                {/* Academic highlight */}
                <div className="flex items-start gap-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-blue/10 border border-accent-blue/20 flex-shrink-0">
                    <Landmark className="h-5 w-5 text-accent-blue" />
                  </div>
                  <div>
                    <h5 className="font-heading text-sm font-bold text-white mb-1">
                      Psychology & Human Behavior
                    </h5>
                    <p className="font-body text-xs text-text-secondary leading-relaxed">
                      Deepening educational structures with M.A. Psychology to implement cognitive behavioral learning cycles.
                    </p>
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
