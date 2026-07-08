"use client";

import React from "react";
import { motion } from "framer-motion";

export function BlobGradient() {
  return (
    <div className="animated-bg pointer-events-none fixed inset-0 z-[-2] overflow-hidden">
      <motion.div
        animate={{
          x: [0, 50, -30, 30, 0],
          y: [0, -50, 30, 50, 0],
          scale: [1, 1.1, 0.95, 1.05, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="blob blob-1 absolute top-[-200px] left-[-200px] h-[600px] w-[600px] rounded-full bg-accent-purple/15 blur-[80px]"
      />
      <motion.div
        animate={{
          x: [0, -40, 50, -30, 0],
          y: [0, 50, -30, -50, 0],
          scale: [1, 0.9, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="blob blob-2 absolute right-[-150px] bottom-[-150px] h-[500px] w-[500px] rounded-full bg-accent-blue/15 blur-[80px]"
      />
      <motion.div
        animate={{
          x: [0, 30, -50, 20, 0],
          y: [0, 40, 30, -40, 0],
          scale: [1, 1.05, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        className="blob blob-3 absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-pink/10 blur-[80px]"
      />
    </div>
  );
}
