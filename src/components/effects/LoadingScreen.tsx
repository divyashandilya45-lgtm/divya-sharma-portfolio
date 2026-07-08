"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds loader

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
          }}
          className="loading-screen fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#0B1120]"
        >
          {/* Logo container */}
          <div className="relative flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center"
            >
              <h1 className="font-heading text-4xl font-extrabold tracking-tight text-white md:text-5xl">
                DIVYA<span className="text-accent-purple">SHARMA</span>
              </h1>
              <p className="mt-2 font-mono text-xs tracking-widest text-text-secondary uppercase">
                Soft Skills • Leadership • Psychology
              </p>
            </motion.div>

            {/* Glowing Ring */}
            <motion.div
              initial={{ rotate: 0, opacity: 0.2 }}
              animate={{ rotate: 360, opacity: 0.8 }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              className="absolute -inset-10 z-[-1] rounded-full border border-dashed border-accent-purple/40"
            />
            <motion.div
              initial={{ rotate: 360, opacity: 0.1 }}
              animate={{ rotate: 0, opacity: 0.6 }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              className="absolute -inset-14 z-[-1] rounded-full border border-dotted border-accent-blue/30"
            />
          </div>

          {/* Loader bar */}
          <div className="mt-12 h-[2px] w-48 overflow-hidden rounded-full bg-white/10">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-accent-purple via-accent-pink to-accent-blue"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
