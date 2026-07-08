"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, ArrowRight } from "lucide-react";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { useTheme } from "@/hooks/useTheme";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const allSections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Journey" },
  { id: "experience", label: "Experience Timeline" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills Matrix" },
  { id: "certifications", label: "Certifications" },
  { id: "projects", label: "Key Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "testimonials", label: "Testimonials" },
  { id: "resume", label: "Resume Hub" },
  { id: "gallery", label: "Work Gallery" },
  { id: "blog", label: "Learning Blog" },
  { id: "contact", label: "Let's Connect" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  
  const activeSection = useScrollSpy(
    allSections.map((s) => s.id),
    120
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass py-4 shadow-lg border-b border-white/5" : "bg-transparent py-6"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="group relative font-heading text-xl font-extrabold tracking-tight text-white flex items-center gap-1 cursor-pointer"
          >
            <span className="text-white group-hover:text-accent-purple transition-colors duration-300">DIVYA</span>
            <span className="gradient-text">SHARMA</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`nav-link text-sm font-medium tracking-wide uppercase transition-colors relative py-1 ${
                  activeSection === item.id ? "text-white active" : "text-text-secondary hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Utility Controls */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="rounded-full p-2 text-text-secondary hover:text-white glass transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </button>

            {/* Menu Trigger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-full p-2 text-text-secondary hover:text-white glass transition-colors md:px-4 md:py-2 md:text-xs md:font-semibold md:tracking-widest md:uppercase flex items-center gap-2"
              aria-label="Toggle Menu"
            >
              <span className="hidden md:inline">Menu</span>
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Full-screen Hamburger Overlay Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-[#0B1120]/95 backdrop-blur-2xl flex items-center justify-center"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent-purple/40 via-transparent to-transparent" />

            <div className="w-full max-w-5xl px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
              {/* Left text column */}
              <div className="hidden md:flex flex-col gap-6 text-left">
                <span className="font-mono text-xs uppercase tracking-widest text-accent-purple font-semibold">
                  Personal Brand & Portfolio
                </span>
                <h3 className="font-heading text-4xl font-extrabold text-white leading-tight">
                  Empowering professionals <br />through learning & growth.
                </h3>
                <p className="text-text-secondary text-sm max-w-sm">
                  Let's collaborate to build highly effective learning & development, customer relation, and psychological mentoring frameworks.
                </p>
                <div className="mt-4 flex flex-col gap-2 font-mono text-xs text-text-muted">
                  <p>Mandi, Himachal Pradesh, India</p>
                  <p>divyasharma@email.com</p>
                </div>
              </div>

              {/* Right menu column */}
              <nav className="flex flex-col gap-3 md:gap-4 max-h-[80vh] overflow-y-auto pr-4">
                {allSections.map((item, index) => (
                  <motion.button
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.4, ease: "easeOut" }}
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="group flex items-center justify-between text-left py-2 border-b border-white/5 hover:border-accent-purple/30 transition-colors"
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="font-mono text-xs text-text-muted">
                        {(index + 1).toString().padStart(2, "0")}
                      </span>
                      <span className={`font-heading text-lg md:text-2xl font-bold uppercase transition-colors ${
                        activeSection === item.id ? "text-accent-purple" : "text-white group-hover:text-accent-purple"
                      }`}>
                        {item.label}
                      </span>
                    </span>
                    <ArrowRight className="h-5 w-5 text-text-muted group-hover:text-accent-purple group-hover:translate-x-1 transition-all" />
                  </motion.button>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
