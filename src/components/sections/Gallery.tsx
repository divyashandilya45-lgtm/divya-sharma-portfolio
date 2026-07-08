"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { GlassCard } from "../ui/GlassCard";
import { Camera, Image as ImageIcon, Users, BookOpen, Mic } from "lucide-react";

interface GalleryItem {
  id: number;
  title: string;
  category: "workshops" | "seminars" | "speaking" | "certificates";
  description: string;
  gradient: string;
  icon: React.ComponentType<any>;
}

const items: GalleryItem[] = [
  {
    id: 1,
    title: "Mahindra Pride Workshop",
    category: "workshops",
    description: "Soft skills training session delivered to CSR batches.",
    gradient: "from-indigo-600/40 to-purple-600/40",
    icon: Users,
  },
  {
    id: 2,
    title: "Digital Literacy Seminar",
    category: "seminars",
    description: "Bridging the digital gap for high school girls.",
    gradient: "from-pink-600/40 to-rose-600/40",
    icon: BookOpen,
  },
  {
    id: 3,
    title: "Youth Leadership Summit",
    category: "speaking",
    description: "Keynote address on confidence and career goal setting.",
    gradient: "from-blue-600/40 to-cyan-600/40",
    icon: Mic,
  },
  {
    id: 4,
    title: "Government College Panel",
    category: "speaking",
    description: "Panel discussion on employability bridge frameworks.",
    gradient: "from-teal-600/40 to-emerald-600/40",
    icon: Mic,
  },
  {
    id: 5,
    title: "Trainer Certification Ceremony",
    category: "certificates",
    description: "Earning TOT certification for public project rollouts.",
    gradient: "from-violet-600/40 to-purple-600/40",
    icon: Users,
  },
  {
    id: 6,
    title: "Communication Mastery Activity",
    category: "workshops",
    description: "Practical group discussions and icebreaking events.",
    gradient: "from-fuchsia-600/40 to-pink-600/40",
    icon: Users,
  },
];

export function Gallery() {
  const [filter, setFilter] = useState<"all" | "workshops" | "seminars" | "speaking" | "certificates">("all");

  const filteredItems = filter === "all" ? items : items.filter((item) => item.category === filter);

  return (
    <section id="gallery" className="relative py-24 bg-[#0B1120] overflow-hidden">
      {/* Background glow spots */}
      <div className="absolute top-[20%] left-[5%] pointer-events-none h-[400px] w-[400px] rounded-full bg-accent-blue/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <SectionHeading
          badge="Activity Grid"
          title="Session Gallery"
          subtitle="Glimpses of active classroom projects, speaking presentations, and public seminars."
        />

        {/* Filter controls */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {["all", "workshops", "seminars", "speaking", "certificates"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat as any)}
              className={`px-4 py-1.5 rounded-full font-mono text-xs font-semibold tracking-wider uppercase border transition-all ${
                filter === cat
                  ? "bg-accent-purple border-accent-purple text-white shadow-lg shadow-accent-purple/20"
                  : "bg-white/5 border-white/10 text-text-secondary hover:text-white hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry/Grid display */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={item.id}
                >
                  <GlassCard className="flex flex-col justify-between hover:border-accent-purple/30 h-full p-0 overflow-hidden relative group">
                    {/* Visual Media Placeholder container */}
                    <div className={`aspect-[4/3] w-full bg-gradient-to-tr ${item.gradient} flex flex-col items-center justify-center p-6 border-b border-white/5 relative`}>
                      <div className="absolute inset-0 bg-[#0B1120]/10 backdrop-blur-[2px] opacity-100 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none" />
                      <Icon className="h-10 w-10 text-white opacity-80 mb-3 group-hover:scale-110 transition-transform duration-300" />
                      <span className="font-mono text-[10px] tracking-widest text-white/60 uppercase">
                        {item.category} Event
                      </span>
                    </div>

                    <div className="p-6">
                      <h4 className="font-heading text-lg font-bold text-white mb-2 leading-tight">
                        {item.title}
                      </h4>
                      <p className="font-body text-sm text-text-muted leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
