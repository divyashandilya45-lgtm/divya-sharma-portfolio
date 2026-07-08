"use client";

import React, { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface SkillCircleProps {
  name: string;
  percentage: number;
  size?: number;
  strokeWidth?: number;
}

export function SkillCircle({ name, percentage, size = 120, strokeWidth = 8 }: SkillCircleProps) {
  const [progress, setProgress] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setProgress(percentage);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isInView, percentage]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-4">
      <div className="circular-progress relative" style={{ width: size, height: size }}>
        <svg width={size} height={size}>
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            className="stroke-glass-border fill-none"
            strokeWidth={strokeWidth}
          />
          {/* Progress circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            className="fill-none transition-all duration-[1500ms] ease-out"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            stroke="url(#skillGradient)"
          />
          <defs>
            <linearGradient id="skillGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--accent-purple)" />
              <stop offset="50%" stopColor="var(--accent-pink)" />
              <stop offset="100%" stopColor="var(--accent-blue)" />
            </linearGradient>
          </defs>
        </svg>
        <span className="progress-text font-mono font-bold text-lg text-white">
          {progress}%
        </span>
      </div>
      <span className="mt-4 text-center font-body text-sm font-semibold text-text-secondary">
        {name}
      </span>
    </div>
  );
}
