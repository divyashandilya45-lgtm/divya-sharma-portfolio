"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  badge?: string;
  align?: "left" | "center";
}

export function SectionHeading({ title, subtitle, badge, align = "center" }: SectionHeadingProps) {
  const isLeft = align === "left";

  return (
    <div className={`mb-16 flex flex-col ${isLeft ? "items-start text-left" : "items-center text-center"}`}>
      {badge && (
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4 inline-block rounded-full bg-accent-purple/10 px-4 py-1.5 font-mono text-xs font-semibold tracking-wider text-accent-purple uppercase border border-accent-purple/20"
        >
          {badge}
        </motion.span>
      )}
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl"
      >
        {title.split(" ").map((word, index) => {
          // Highlight last word or custom styling
          const isLast = index === title.split(" ").length - 1;
          return (
            <span key={index} className={isLast ? "gradient-text" : "mr-3"}>
              {word}{" "}
            </span>
          );
        })}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-4 max-w-2xl font-body text-base text-text-secondary md:text-lg"
      >
        {subtitle}
      </motion.p>

      {/* Decorative Line */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 80 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className={`mt-6 h-1 rounded-full bg-gradient-to-r from-accent-purple to-accent-blue`}
      />
    </div>
  );
}
