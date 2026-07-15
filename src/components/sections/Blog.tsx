"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { GlassCard } from "../ui/GlassCard";
import { Calendar, Clock, ArrowUpRight, BookOpen, X, Sparkles } from "lucide-react";

interface Article {
  id: number;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  gradient: string;
  content: string[];
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
    content: [
      "In the modern workplace, technical competency and high intelligence quotients (IQ) are entry-level requirements, but they are no longer the primary differentiators of successful leaders. Research consistently proves that Emotional Intelligence (EQ)—the ability to recognize, understand, manage, and influence emotions—drives over 85% of leadership success.",
      "EQ is built on five core pillars: Self-Awareness, Self-Regulation, Motivation, Empathy, and Social Skills. In management roles, self-awareness allows leaders to understand how their moods and actions affect their team. By controlling reactive impulses (self-regulation), leaders create an environment of psychological safety, where team members feel comfortable sharing ideas and reporting operational errors without fear of retribution.",
      "Empathy is perhaps the most critical component. Active listening and sensing the unvoiced concerns of staff enable managers to resolve friction before it escalates. When employees feel understood, engagement increases, trust is cemented, and turnover drops.",
      "As a Branch Manager and student of psychology, I integrate these principles directly into daily operations, bridging management metrics with human-centric empathy. Empowering a team starts with understanding their individual psychological motivators."
    ]
  },
  {
    id: 2,
    title: "How to Crack HR Interviews: The STAR Method Guide",
    category: "Career Development",
    date: "June 2026",
    readTime: "6 min read",
    excerpt: "A step-by-step masterclass on structuring behavioral questions to demonstrate competency, problem solving, and key results.",
    gradient: "from-pink-900/30 via-rose-900/30 to-[#0B1120]",
    content: [
      "Behavioral interview questions (like 'Tell me about a time you handled a difficult client' or 'Give an example of a goal you reached') can feel daunting. However, HR professionals assess these answers using a structured framework. To stand out, candidates must utilize the STAR method: Situation, Task, Action, and Result.",
      "1. Situation: Set the scene. Describe the context of the challenge you faced. Keep this brief and objective, focusing only on details relevant to the story. For example: 'During my tenure at Focal Skill, we had a government project batch with low attendance rates.'",
      "2. Task: Outline the objective. What did you need to achieve? Explain the target clearly: 'My target was to raise active student participation by 30% within three weeks to meet project guidelines.'",
      "3. Action: Detail your steps. This is the most critical part of your response—use 'I' rather than 'We' to show your personal contribution. Detail the soft skills and strategies you deployed: 'I redesigned the module to include activity-based workshops, conducted 1-on-1 counseling with disengaged students, and gamified the assessment process.'",
      "4. Result: Share the metrics. What was the outcome? Highlight quantifiable success: 'As a result, classroom attendance increased by 45%, and 92% of students cleared the final assessment.'",
      "By structuring your experiences with STAR, you provide clear, logical, and evidence-backed proof of your problem-solving capabilities."
    ]
  },
  {
    id: 3,
    title: "Leadership Skills for Modern Workplace Operations",
    category: "Management",
    date: "May 2026",
    readTime: "4 min read",
    excerpt: "Practical tips on delegating responsibilities, team building, conflict management, and maintaining regulatory compliance.",
    gradient: "from-blue-900/30 via-cyan-900/30 to-[#0B1120]",
    content: [
      "Operational leadership is the art of translating strategic goals into daily habits. Managing a financial branch or a large training cohort requires a delicate balance of task delegation, compliance oversight, and conflict resolution.",
      "Delegation is not merely offloading work; it is aligning tasks with individual strengths. Effective leaders observe their team's competencies and assign responsibilities that encourage growth without causing burnout. Clear metrics and deadlines ensure accountability while regular check-ins offer support.",
      "In terms of compliance and regulatory frameworks, leaders must lead by example. A culture of compliance is built when the manager follows protocols rigorously and transparently, showing the team that rules protect both the customer and the institution.",
      "Finally, conflict is inevitable in any active workplace. Rather than suppressing it, leaders should address it constructively. By focusing on the problem rather than the person, and facilitating cooperative discussions, team friction can be channeled into process improvements."
    ]
  },
  {
    id: 4,
    title: "Effective Communication in the Workplace: Bridging Gaps",
    category: "Soft Skills",
    date: "April 2026",
    readTime: "5 min read",
    excerpt: "How active listening, clear presentation etiquette, and positive email writing build trust across diverse departments.",
    gradient: "from-teal-900/30 via-emerald-900/30 to-[#0B1120]",
    content: [
      "Communication is the nervous system of an organization. Misunderstandings are the leading cause of delays, reduced morale, and customer dissatisfaction. Bridging these communication gaps requires conscious effort across verbal, visual, and written channels.",
      "Active listening is the cornerstone. It means listening to understand, not to reply. Paraphrasing what the speaker said ('If I understand correctly, you mean...') ensures alignment before action is taken.",
      "In written communications, especially email, tone is easily misconstrued. Writing clearly, starting with a friendly greeting, formatting action points with bullet points, and ending with a warm closing changes how your message is received. Keep emails concise and outcome-focused.",
      "When presenting ideas, keep your audience in mind. Translate complex data into clear, narrative-driven points. By utilizing visual frameworks and engaging stories, you capture attention and inspire action."
    ]
  },
  {
    id: 5,
    title: "Unlocking Career Growth: A Continuous Learning Mindset",
    category: "Growth & Training",
    date: "March 2026",
    readTime: "4 min read",
    excerpt: "Why staying curious, seeking mentorship, and upgrading soft skills are the best catalysts for long-term professional success.",
    gradient: "from-violet-900/30 via-fuchsia-900/30 to-[#0B1120]",
    content: [
      "The rapid pace of technological change means that skills have a shorter shelf-life than ever before. To maintain long-term career growth, professionals must cultivate a continuous learning mindset. This means viewing education as a lifelong habit, not a phase.",
      "Staying curious involves seeking out training in areas adjacent to your core job. For example, a soft skills trainer studying psychology, or an operations manager learning data analysis. This cross-disciplinary approach makes you more adaptable and opens new career pathways.",
      "Mentorship is another powerful accelerator. Finding mentors who have walked the path before you offers insights that textbooks cannot provide. Similarly, mentoring others refines your own understanding and builds leadership capabilities.",
      "Invest in your soft skills. Technical abilities get you hired, but emotional intelligence, communication, and adaptability get you promoted. Upgrading your interpersonal toolkit is the single best investment you can make."
    ]
  }
];

export function Blog() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  return (
    <section id="blog" className="relative py-36 md:py-52 lg:py-60 bg-bg-primary overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-[30%] left-[5%] pointer-events-none h-[400px] w-[400px] rounded-full bg-accent-purple/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <SectionHeading
          badge="Future Ready"
          title="Learning Blog"
          subtitle="Thoughts, tutorials, and insights regarding soft skills, emotional intelligence, and counseling psychology."
        />

        {/* Blog layout grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {articles.map((post, index) => (
            <GlassCard
              key={post.id}
              delay={index * 0.08}
              className="flex flex-col justify-between hover:border-accent-purple/30 h-full p-0 overflow-hidden relative group cursor-pointer"
            >
              <div onClick={() => setSelectedArticle(post)} className="h-full flex flex-col justify-between">
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

                  <span className="flex items-center gap-1 font-mono text-xs font-semibold text-white group-hover:text-accent-purple transition-colors mt-auto w-fit">
                    Read Full Article
                    <ArrowUpRight className="h-4 w-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Full Article Reader Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1120]/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto glass p-6 md:p-10 rounded-2xl border border-white/10 shadow-2xl"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 rounded-full p-2 text-text-secondary hover:text-white glass transition-colors"
                aria-label="Close reader"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Header */}
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span className="font-mono text-xs font-bold text-accent-purple bg-accent-purple/10 border border-accent-purple/20 px-3 py-1 rounded-full uppercase tracking-wider">
                  {selectedArticle.category}
                </span>
                <div className="flex gap-3 font-mono text-[11px] text-text-muted">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {selectedArticle.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {selectedArticle.readTime}
                  </span>
                </div>
              </div>

              <h3 className="font-heading text-2xl md:text-3xl font-extrabold text-white mb-8 leading-snug">
                {selectedArticle.title}
              </h3>

              {/* Main Content paragraphs */}
              <div className="space-y-6 text-text-secondary font-body text-sm md:text-base leading-relaxed">
                {selectedArticle.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Footer CTA */}
              <div className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-2 text-xs font-mono text-text-muted">
                  <Sparkles className="h-4 w-4 text-accent-purple" />
                  <span>Curated for Divya Sharma Portfolio Hub</span>
                </div>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="rounded-xl px-5 py-2 glass hover:text-white hover:border-accent-purple/50 font-mono text-xs text-white"
                >
                  Close Article
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
