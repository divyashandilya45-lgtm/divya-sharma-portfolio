"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, User, Bot, Sparkles } from "lucide-react";
import personalData from "@/data/personal.json";
import skillsData from "@/data/skills.json";
import experienceData from "@/data/experience.json";
import certificationsData from "@/data/certifications.json";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export function AskDivya() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Set initial welcome message
  useEffect(() => {
    setMessages([
      {
        id: 1,
        text: `Hi there! I'm Ask Divya, an AI assistant representing Divya Sharma. You can ask me about her experience, training projects, credentials, psychology background, or how to get in touch. What would you like to know?`,
        sender: "bot",
        timestamp: new Date(),
      },
    ]);
  }, []);

  // Auto scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  const getBotResponse = (query: string): string => {
    const q = query.toLowerCase();

    // Contact/Mail check
    if (q.includes("contact") || q.includes("email") || q.includes("mail") || q.includes("phone") || q.includes("number") || q.includes("reach") || q.includes("call")) {
      return `You can reach Divya Sharma directly via email at ${personalData.contact.email} or call her at ${personalData.contact.phone}. She is based in ${personalData.contact.location}. You can also connect on LinkedIn: ${personalData.contact.linkedin}`;
    }

    // Resume check
    if (q.includes("resume") || q.includes("cv") || q.includes("download") || q.includes("pdf")) {
      return `Sure! You can download Divya's complete resume PDF using the button in the 'Resume Hub' section of this page, or ask her directly at ${personalData.contact.email}. Let me know if you want me to explain any specific past role!`;
    }

    // Skills check
    if (q.includes("skill") || q.includes("expertise") || q.includes("proficien") || q.includes("train") || q.includes("teach") || q.includes("star") || q.includes("excel")) {
      const topSkills = skillsData.categories[0].skills.slice(0, 5).map((s) => s.name).join(", ");
      return `Divya specializes in soft skills coaching. Her key competencies include: ${topSkills}. She is also highly experienced with the STAR interview method, conflict resolution, and activity-based learning modules.`;
    }

    // Experience check
    if (q.includes("experience") || q.includes("work") || q.includes("job") || q.includes("himalaya") || q.includes("naandi") || q.includes("focal") || q.includes("manager")) {
      const roles = experienceData.map((e) => `${e.role} at ${e.company} (${e.period})`).join("; ");
      return `Divya's career is built on diverse experience: ${roles}. She has successfully managed financial branch operations and led government and CSR soft skills classrooms for Naandi Foundation.`;
    }

    // Certifications check
    if (q.includes("certif") || q.includes("licens") || q.includes("tot")) {
      const certs = certificationsData.map((c) => c.title).join(", ");
      return `Divya holds multiple credentials, including: ${certs}. She is notably a TOT (Training of Trainers) Certified Specialist for government and CSR skill development frameworks.`;
    }

    // Education check
    if (q.includes("education") || q.includes("degree") || q.includes("college") || q.includes("psychology") || q.includes("study") || q.includes("ma")) {
      return `Divya is currently pursuing an M.A. in Psychology from IGNOU. She previously completed an M.Sc from DAV College, a PGDCA from NIELIT, and a Financial Accounting Diploma from NSIC. She combines computer literacy, operations management, and psychology to deliver holistic training.`;
    }

    // About/Who is check
    if (q.includes("who is") || q.includes("divya") || q.includes("about") || q.includes("background") || q.includes("story")) {
      return `${personalData.about.intro} Her journey spans science academics, training leadership with major CSR initiatives, branch office administration, and psychological studies.`;
    }

    // Projects check
    if (q.includes("project") || q.includes("initiative") || q.includes("classroom") || q.includes("mahindra") || q.includes("pride")) {
      return `Divya has led major training projects: Mahindra Pride Classroom, Digital Equalizers for Girls, and the government Skill Bridge Program. Each initiative focused on communication, confidence building, and employability enhancement.`;
    }

    // Default response
    return `Interesting question! Divya Sharma has expertise in soft skills training, psychology counseling, and branch operations. You can ask me specifically about her 'experience', 'skills', 'education', 'certifications', or 'how to contact' her!`;
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: input,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botMessage: Message = {
        id: Date.now() + 1,
        text: getBotResponse(userMessage.text),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="chatbot-container">
      {/* Trigger Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-accent-purple via-accent-pink to-accent-blue text-white shadow-lg shadow-accent-purple/35 cursor-pointer relative"
        aria-label="Ask Divya AI Chatbot"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="chatbot-window absolute bottom-16 right-0 border border-white/10 shadow-2xl glass flex flex-col z-50 bg-[#0B1120]/95"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/5 bg-gradient-to-r from-accent-purple/20 via-accent-pink/10 to-accent-blue/20 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-accent-purple to-accent-blue p-[1px] flex items-center justify-center">
                  <div className="h-full w-full rounded-full bg-[#0B1120] flex items-center justify-center">
                    <Sparkles className="h-4 w-4 text-accent-purple" />
                  </div>
                </div>
                <div>
                  <h4 className="font-heading text-sm font-bold text-white leading-tight">
                    Ask Divya
                  </h4>
                  <span className="font-mono text-[9px] text-success font-semibold flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
                    AI Assistant Active
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-text-muted hover:text-white transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Message Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 max-h-[300px] min-h-[250px]">
              {messages.map((msg) => {
                const isBot = msg.sender === "bot";
                return (
                  <div key={msg.id} className={`flex gap-2.5 ${!isBot ? "flex-row-reverse" : ""}`}>
                    {/* Icon bubble */}
                    <div className={`h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0 border border-white/5 ${
                      isBot ? "bg-accent-purple/10" : "bg-white/5"
                    }`}>
                      {isBot ? <Bot className="h-4 w-4 text-accent-purple" /> : <User className="h-4 w-4 text-accent-blue" />}
                    </div>
                    {/* Message Bubble */}
                    <div className={`max-w-[75%] rounded-2xl px-4 py-2.5 text-xs md:text-sm leading-relaxed ${
                      isBot
                        ? "bg-white/3 border border-white/5 text-white/90 rounded-tl-none"
                        : "bg-accent-purple/20 border border-accent-purple/15 text-white rounded-tr-none"
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                );
              })}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex gap-2.5">
                  <div className="h-8 w-8 rounded-full bg-accent-purple/10 flex items-center justify-center flex-shrink-0 border border-white/5">
                    <Bot className="h-4 w-4 text-accent-purple" />
                  </div>
                  <div className="bg-white/3 border border-white/5 rounded-2xl rounded-tl-none px-4 py-3 flex gap-1.5 items-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent-purple animate-bounce" style={{ animationDelay: "0ms" }} />
                    <div className="h-1.5 w-1.5 rounded-full bg-accent-purple animate-bounce" style={{ animationDelay: "150ms" }} />
                    <div className="h-1.5 w-1.5 rounded-full bg-accent-purple animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}
              <div ref={scrollRef} />
            </div>

            {/* Input area */}
            <div className="p-3 border-t border-white/5 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask about her skills, timeline, contact..."
                className="flex-1 glass border border-white/5 rounded-xl px-4 py-2.5 text-xs text-white placeholder-text-muted focus:outline-none focus:border-accent-purple/50"
              />
              <button
                onClick={handleSend}
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-purple text-white hover:bg-accent-purple/90 transition-colors"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
