import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Skills } from "@/components/sections/Skills";
import { Certifications } from "@/components/sections/Certifications";
import { Projects } from "@/components/sections/Projects";
import { Achievements } from "@/components/sections/Achievements";
import { Testimonials } from "@/components/sections/Testimonials";
import { Resume } from "@/components/sections/Resume";
import { Gallery } from "@/components/sections/Gallery";
import { Blog } from "@/components/sections/Blog";
import { Contact } from "@/components/sections/Contact";
import { AskDivya } from "@/components/chatbot/AskDivya";
import { LoadingScreen } from "@/components/effects/LoadingScreen";
import { ScrollProgress } from "@/components/effects/ScrollProgress";
import { CursorTrail } from "@/components/effects/CursorTrail";
import { BlobGradient } from "@/components/effects/BlobGradient";
import { ParticleBackground } from "@/components/effects/ParticleBackground";
import { MouseGlow } from "@/components/effects/MouseGlow";

export default function Home() {
  return (
    <>
      {/* Visual Effects Layer */}
      <LoadingScreen />
      <ScrollProgress />
      <CursorTrail />
      <ParticleBackground />
      <BlobGradient />
      <MouseGlow />

      {/* Navigation Headers */}
      <Navbar />

      {/* Main Layout Content */}
      <main className="relative flex-grow">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Certifications />
        <Projects />
        <Achievements />
        <Testimonials />
        <Resume />
        <Gallery />
        <Blog />
        <Contact />
      </main>

      {/* Interactive AI Chatbot */}
      <AskDivya />

      {/* Page Footer */}
      <Footer />
    </>
  );
}
