"use client";

import React from "react";
import { motion as motionFramer } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowRight, Download, Sparkles, Brain, Award, GraduationCap } from "lucide-react";
import personalData from "@/data/personal.json";
import { MagneticButton } from "../ui/MagneticButton";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-28 pb-16"
    >
      {/* Decorative Glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[20%] left-[10%] h-[300px] w-[300px] rounded-full bg-accent-purple/10 blur-[100px]" />
        <div className="absolute bottom-[20%] right-[10%] h-[400px] w-[400px] rounded-full bg-accent-blue/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        
        {/* Left Column: Text Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left gap-6">
          <motionFramer.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-accent-purple/10 px-4 py-1.5 font-mono text-xs font-semibold tracking-wider text-accent-purple border border-accent-purple/20 uppercase"
          >
            <Sparkles className="h-3 w-3" />
            Empowering Personal Brands
          </motionFramer.div>

          <div className="flex flex-col gap-2">
            <motionFramer.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl leading-tight"
            >
              Hi, I'm <br />
              <span className="gradient-text">Divya Sharma</span>
            </motionFramer.h1>
          </div>

          {/* Subheading Roles & Type Animation */}
          <motionFramer.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-2"
          >
            <h2 className="font-heading text-xl md:text-2xl font-semibold text-white/95">
              Soft Skills Trainer • Branch Manager • Psychology Student
            </h2>
            <div className="flex items-center gap-2 font-mono text-lg md:text-xl text-text-secondary">
              <span>Spearheading</span>
              <span className="text-accent-purple font-bold">
                <TypeAnimation
                  sequence={[
                    "Leadership",
                    1500,
                    "Communication",
                    1500,
                    "Training",
                    1500,
                    "Growth",
                    1500,
                    "Psychology",
                    1500,
                    "Learning",
                    1500,
                  ]}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                />
              </span>
            </div>
          </motionFramer.div>

          {/* Intro Description */}
          <motionFramer.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-xl font-body text-base text-text-secondary md:text-lg leading-relaxed"
          >
            Empowering youth, corporate teams, and institutions through customized soft skills modules, emotional intelligence mentoring, and robust leadership operations.
          </motionFramer.p>

          {/* Action Buttons */}
          <motionFramer.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 items-center"
          >
            <MagneticButton
              onClick={() => scrollToSection("contact")}
              variant="primary"
            >
              Let's Connect
              <ArrowRight className="ml-2 h-4 w-4" />
            </MagneticButton>

            <MagneticButton
              onClick={() => scrollToSection("resume")}
              variant="secondary"
            >
              Download Resume
              <Download className="ml-2 h-4 w-4" />
            </MagneticButton>
          </motionFramer.div>
        </div>

        {/* Right Column: Premium Photo/Abstract Art Card */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <motionFramer.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-[300px] h-[400px] md:w-[350px] md:h-[450px] rounded-2xl overflow-hidden glass p-1 shadow-2xl flex items-center justify-center group"
          >
            {/* Ambient Back Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-accent-purple/20 via-accent-pink/10 to-accent-blue/20 opacity-80" />
            
            {/* Rotating boundary */}
            <div className="absolute inset-0 opacity-20 border border-dashed border-white/40 rounded-2xl group-hover:scale-95 transition-transform duration-500" />

            {/* Inner abstract branding card */}
            <div className="w-full h-full rounded-2xl bg-[#0B1120]/80 backdrop-blur-md flex flex-col items-center justify-between p-8 text-center border border-white/5 relative z-10">
              <div className="flex flex-col items-center gap-4 mt-8">
                {/* Simulated Headshot Circle */}
                <div className="relative h-24 w-24 rounded-full bg-gradient-to-tr from-accent-purple via-accent-pink to-accent-blue p-[2px] flex items-center justify-center shadow-lg shadow-accent-purple/20">
                  <div className="h-full w-full rounded-full bg-[#0B1120] flex items-center justify-center">
                    <Brain className="h-10 w-10 text-white" />
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="font-heading text-lg font-bold text-white uppercase tracking-wider">
                    Divya Sharma
                  </span>
                  <span className="font-mono text-xs text-text-secondary uppercase tracking-widest">
                    L&D Professional
                  </span>
                </div>
              </div>

              {/* Training details indicators */}
              <div className="w-full flex flex-col gap-3 font-mono text-xs text-left text-text-secondary">
                <div className="flex items-center gap-3 border-b border-white/5 pb-2">
                  <Award className="h-4 w-4 text-accent-purple" />
                  <span>TOT Certified Soft Skills Trainer</span>
                </div>
                <div className="flex items-center gap-3 border-b border-white/5 pb-2">
                  <Brain className="h-4 w-4 text-accent-pink" />
                  <span>M.A. Psychology (IGNOU)</span>
                </div>
                <div className="flex items-center gap-3 pb-1">
                  <GraduationCap className="h-4 w-4 text-accent-blue" />
                  <span>1000+ Students Mentored</span>
                </div>
              </div>

              <div className="mb-4">
                <span className="inline-block rounded-full bg-success/15 px-3 py-1 font-mono text-[10px] font-semibold text-success uppercase tracking-widest border border-success/30">
                  Active Now
                </span>
              </div>
            </div>
          </motionFramer.div>
        </div>

      </div>
    </section>
  );
}
