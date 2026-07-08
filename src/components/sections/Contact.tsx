"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import emailjs from "@emailjs/browser";
import { SectionHeading } from "../ui/SectionHeading";
import { GlassCard } from "../ui/GlassCard";
import { MagneticButton } from "../ui/MagneticButton";
import personalData from "@/data/personal.json";
import { Mail, Phone, MapPin, Send, CalendarDays, CheckCircle2 } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";


export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formType, setFormType] = useState<"query" | "booking">("query");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    date: "",
    time: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#7c3aed", "#ec4899", "#3b82f6", "#22C55E"],
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // EmailJS integration template configuration
      // Replace service_id, template_id, and public_key with actual EmailJS parameters
      const serviceId = "YOUR_SERVICE_ID";
      const templateId = "YOUR_TEMPLATE_ID";
      const publicKey = "YOUR_PUBLIC_KEY";

      if (serviceId !== "YOUR_SERVICE_ID") {
        await emailjs.sendForm(serviceId, templateId, formRef.current!, publicKey);
      } else {
        // Fallback simulation for local testing
        await new Promise((resolve) => setTimeout(resolve, 1500));
      }

      setSuccess(true);
      triggerConfetti();
      
      // Clear form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        date: "",
        time: "",
      });

      setTimeout(() => setSuccess(false), 5000);
    } catch (error) {
      console.error("Email send failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-[#0B1120] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-[40%] right-[10%] pointer-events-none h-[500px] w-[500px] rounded-full bg-accent-purple/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <SectionHeading
          badge="Let's Talk"
          title="Get In Touch"
          subtitle="Ready to transform your communication skills, schedule a branch audit, or book a psychology mentorship session?"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left panel: Info Hub */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div className="glass rounded-2xl p-8 border border-white/5 flex flex-col justify-center h-full">
              <h3 className="font-heading text-xl font-bold text-white mb-6 uppercase tracking-wider">
                Contact Directory
              </h3>

              <div className="flex flex-col gap-6">
                {/* Email item */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-purple/10 border border-accent-purple/20 flex-shrink-0">
                    <Mail className="h-5 w-5 text-accent-purple" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-text-muted uppercase tracking-widest block mb-0.5">
                      Direct Email
                    </span>
                    <a href={`mailto:${personalData.contact.email}`} className="font-heading text-sm font-semibold text-white hover:text-accent-purple transition-colors">
                      {personalData.contact.email}
                    </a>
                  </div>
                </div>

                {/* Phone item */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-pink/10 border border-accent-pink/20 flex-shrink-0">
                    <Phone className="h-5 w-5 text-accent-pink" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-text-muted uppercase tracking-widest block mb-0.5">
                      Call / WhatsApp
                    </span>
                    <a href={`tel:${personalData.contact.phone}`} className="font-heading text-sm font-semibold text-white hover:text-accent-pink transition-colors">
                      {personalData.contact.phone}
                    </a>
                  </div>
                </div>

                {/* LinkedIn item */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-blue/10 border border-accent-blue/20 flex-shrink-0">
                    <FaLinkedinIn className="h-5 w-5 text-accent-blue" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-text-muted uppercase tracking-widest block mb-0.5">
                      LinkedIn Networking
                    </span>
                    <a href={personalData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="font-heading text-sm font-semibold text-white hover:text-accent-blue transition-colors">
                      Divya Sharma Profile
                    </a>
                  </div>
                </div>

                {/* Location item */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-success/10 border border-success/20 flex-shrink-0">
                    <MapPin className="h-5 w-5 text-success" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-text-muted uppercase tracking-widest block mb-0.5">
                      Geographic Base
                    </span>
                    <span className="font-heading text-sm font-semibold text-white">
                      {personalData.contact.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right panel: Animated Form Hub */}
          <div className="lg:col-span-7">
            <GlassCard className="h-full">
              {/* Form Option Selector Tabs */}
              <div className="flex gap-4 mb-8 border-b border-white/5 pb-4">
                <button
                  type="button"
                  onClick={() => setFormType("query")}
                  className={`font-heading text-sm font-bold pb-2 transition-all relative ${
                    formType === "query" ? "text-white" : "text-text-muted hover:text-text-secondary"
                  }`}
                >
                  General Enquiry
                  {formType === "query" && (
                    <motion.div layoutId="contactTab" className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent-purple" />
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setFormType("booking")}
                  className={`font-heading text-sm font-bold pb-2 transition-all relative ${
                    formType === "booking" ? "text-white" : "text-text-muted hover:text-text-secondary"
                  }`}
                >
                  Book training/mentorship session
                  {formType === "booking" && (
                    <motion.div layoutId="contactTab" className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent-purple" />
                  )}
                </button>
              </div>

              {success ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center p-8 h-[300px]"
                >
                  <CheckCircle2 className="h-16 w-16 text-success mb-6" />
                  <h4 className="font-heading text-xl font-bold text-white mb-2">
                    Message Sent Successfully!
                  </h4>
                  <p className="font-body text-sm text-text-secondary max-w-sm">
                    Thank you for reaching out. Divya will review your details and connect with you shortly.
                  </p>
                </motion.div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  {/* Name field */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="font-mono text-xs text-text-secondary uppercase tracking-widest">
                      Your Name
                    </label>
                    <input
                      required
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className="w-full glass border border-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder-text-muted focus:outline-none focus:border-accent-purple/50 transition-colors"
                    />
                  </div>

                  {/* Contact Fields group */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="font-mono text-xs text-text-secondary uppercase tracking-widest">
                        Email Address
                      </label>
                      <input
                        required
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="jane@example.com"
                        className="w-full glass border border-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder-text-muted focus:outline-none focus:border-accent-purple/50 transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="phone" className="font-mono text-xs text-text-secondary uppercase tracking-widest">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91-XXXXX-XXXXX"
                        className="w-full glass border border-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder-text-muted focus:outline-none focus:border-accent-purple/50 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Conditional Fields for Booking Sessions */}
                  {formType === "booking" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-white/5 pt-6"
                    >
                      <div className="flex flex-col gap-2">
                        <label htmlFor="date" className="font-mono text-xs text-text-secondary uppercase tracking-widest">
                          Preferred Date
                        </label>
                        <input
                          required
                          type="date"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          className="w-full glass border border-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder-text-muted focus:outline-none focus:border-accent-purple/50 transition-colors"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="time" className="font-mono text-xs text-text-secondary uppercase tracking-widest">
                          Preferred Time Slot
                        </label>
                        <input
                          required
                          type="time"
                          id="time"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          className="w-full glass border border-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder-text-muted focus:outline-none focus:border-accent-purple/50 transition-colors"
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* Message field */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="font-mono text-xs text-text-secondary uppercase tracking-widest">
                      Message / training Objectives
                    </label>
                    <textarea
                      required
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={formType === "booking" ? "Please detail the number of participants, age bracket, and key soft skill competencies to cover." : "Let me know your requirements..."}
                      className="w-full glass border border-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder-text-muted focus:outline-none focus:border-accent-purple/50 transition-colors resize-none"
                    />
                  </div>

                  {/* Form Submission */}
                  <div className="flex justify-end pt-4">
                    <MagneticButton type="submit" variant="primary" className="w-full md:w-auto">
                      {loading ? (
                        "Sending..."
                      ) : formType === "booking" ? (
                        <>
                          Book Session
                          <CalendarDays className="ml-2 h-4 w-4" />
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </MagneticButton>
                  </div>
                </form>
              )}
            </GlassCard>
          </div>

        </div>

      </div>
    </section>
  );
}
