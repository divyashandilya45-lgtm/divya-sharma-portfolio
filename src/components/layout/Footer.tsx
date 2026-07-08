"use client";

import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FiArrowUp } from "react-icons/fi";
import personalData from "@/data/personal.json";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative border-t border-white/5 bg-[#0B1120] py-16">
      <div className="mx-auto max-w-7xl px-6 md:px-12 flex flex-col items-center">
        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none opacity-5 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-accent-purple/30 via-transparent to-transparent" />

        {/* Quote section */}
        <div className="mb-12 max-w-xl text-center">
          <p className="font-heading text-lg md:text-xl font-medium italic text-white/90">
            "{personalData.quote}"
          </p>
          <div className="mt-4 h-[2px] w-12 bg-accent-purple mx-auto rounded-full" />
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 mb-8">
          <a
            href={personalData.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full glass text-text-secondary hover:text-white hover:border-accent-purple/50 hover:bg-accent-purple/10 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn className="h-5 w-5" />
          </a>
          <a
            href={personalData.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full glass text-text-secondary hover:text-white hover:border-accent-purple/50 hover:bg-accent-purple/10 transition-all duration-300"
            aria-label="GitHub"
          >
            <FaGithub className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${personalData.contact.email}`}
            className="flex h-10 w-10 items-center justify-center rounded-full glass text-text-secondary hover:text-white hover:border-accent-purple/50 hover:bg-accent-purple/10 transition-all duration-300"
            aria-label="Email"
          >
            <HiOutlineMail className="h-5 w-5" />
          </a>
        </div>

        {/* Brand signature */}
        <div className="w-full border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-text-muted">
          <p>© {new Date().getFullYear()} Divya Sharma. All rights reserved.</p>
          <p>
            Designed with Premium Aesthetics & Frameworks
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 rounded-full px-4 py-2 glass hover:text-white hover:border-accent-purple/50 transition-colors"
          >
            Back to Top
            <FiArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
