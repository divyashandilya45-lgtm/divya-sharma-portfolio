"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { GlassCard } from "../ui/GlassCard";
import { Calendar, Clock, ArrowUpRight, BookOpen } from "lucide-react";

interface Article {
  id: number;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  gradient: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: "The Importance of Emotional Intelligence (EQ) in Leadership",
    category: "Psychology & Leadership",
    date: "July 2026",
    readTime: "5 min read",
    excerpt: "Why emotional awareness, empathy, and social competencies determine over 85% of executive and organizational success.",
    gradient: "from-indigo-900/30 via-purple-900/30 to-[#0B1120]",
  },
  {
    id: 2,
    title: "How to Crack HR Interviews: The STAR Method Guide",
    category: "Career Development",
    date: "June 2026",
    readTime: "6 min read",
    excerpt: "A step-by-step masterclass on structuring behavioral questions to demonstrate competency, problem solving, and key results.",
    gradient: "from-pink-900/30 via-rose-900/30 to-[#0B1120]",
  },
  {
    id: 3,
    title: "Leadership Skills for Modern Workplace Operations",
    category: "Management",
    date: "May 2026",
    readTime: "4 min read",
    excerpt: "Practical tips on delegating responsibilities, team building, conflict management, and maintaining regulatory compliance.",
    gradient: "from-blue-900/30 via-cyan-900/30 to-[#0B1120]",
  },
  {
    id: 4,
    title: "Effective Communication in the Workplace: Bridging Gaps",
    category: "Soft Skills",
    date: "April 2026",
    readTime: "5 min read",
    excerpt: "How active listening, clear presentation etiquette, and positive email writing build trust across diverse departments.",
    gradient: "from-teal-900/30 via-emerald-900/30 to-[#0B1120]",
  },
  {
    id: 5,
    title: "Unlocking Career Growth: A Continuous Learning Mindset",
    category: "Growth & Training",
    date: "March 2026",
    readTime: "4 min read",
    excerpt: "Why staying curious, seeking mentorship, and upgrading soft skills are the best catalysts for long-term professional success.",
    gradient: "from-violet-900/30 via-fuchsia-900/30 to-[#0B1120]",
  },
];

export function Blog() {
  return (
    <section id="blog" className="relative py-24 bg-[#0B1120] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-[30%] left-[5%] pointer-events-none h-[400px] w-[400px] rounded-full bg-accent-purple/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <SectionHeading
          badge="Future Ready"
          title="Learning Blog"
          subtitle="Thoughts, tutorials, and insights regarding soft skills, emotional intelligence, and counseling psychology."
        />

        {/* Blog layout grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((post, index) => (
            <GlassCard
              key={post.id}
              delay={index * 0.08}
              className="flex flex-col justify-between hover:border-accent-purple/30 h-full p-0 overflow-hidden relative group"
            >
              {/* Top Accent Gradient */}
              <div className={`h-32 bg-gradient-to-b ${post.gradient} p-6 border-b border-white/5 flex items-end relative`}>
                <BookOpen className="h-6 w-6 text-accent-purple/80 absolute top-6 right-6" />
                <span className="font-mono text-[10px] font-bold text-accent-purple bg-accent-purple/10 border border-accent-purple/20 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {post.category}
                </span>
              </div>

              {/* Body Content */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex gap-4 font-mono text-[10px] text-text-muted mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-white mb-3 group-hover:text-accent-purple transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="font-body text-sm text-text-muted leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                </div>

                <a
                  href="#contact"
                  className="flex items-center gap-1 font-mono text-xs font-semibold text-white group-hover:text-accent-purple transition-colors mt-auto w-fit"
                >
                  Request Article PDF
                  <ArrowUpRight className="h-4 w-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </GlassCard>
          ))}
        </div>

      </div>
    </section>
  );
}
