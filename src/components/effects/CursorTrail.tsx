"use client";

import React, { useEffect, useState, useRef } from "react";

export function CursorTrail() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorOutlineRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const outlineRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;

      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    window.addEventListener("mousemove", onMouseMove);

    let animationFrameId: number;
    const animateOutline = () => {
      // Smooth interpolation for the trail outline
      const ease = 0.15;
      outlineRef.current.x += (mouseRef.current.x - outlineRef.current.x) * ease;
      outlineRef.current.y += (mouseRef.current.y - outlineRef.current.y) * ease;

      if (cursorOutlineRef.current) {
        cursorOutlineRef.current.style.transform = `translate3d(${outlineRef.current.x}px, ${outlineRef.current.y}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(animateOutline);
    };

    animationFrameId = requestAnimationFrame(animateOutline);

    // Hover effect styles
    const addHoverClass = () => {
      if (cursorOutlineRef.current) cursorOutlineRef.current.classList.add("cursor-hover");
    };
    const removeHoverClass = () => {
      if (cursorOutlineRef.current) cursorOutlineRef.current.classList.remove("cursor-hover");
    };

    const addInteractables = () => {
      const interactables = document.querySelectorAll("a, button, [role='button'], input, textarea, select, .magnetic-btn, .nav-link");
      interactables.forEach((el) => {
        el.addEventListener("mouseenter", addHoverClass);
        el.addEventListener("mouseleave", removeHoverClass);
      });
    };

    addInteractables();

    // Re-bind hover events on DOM updates
    const observer = new MutationObserver(addInteractables);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, []);

  if (!mounted || isMobile) return null;

  return (
    <>
      {/* Small dot that follows immediately */}
      <div
        ref={cursorDotRef}
        className="pointer-events-none fixed top-0 left-0 z-[99999] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white transition-transform duration-75 ease-out"
        style={{ mixBlendMode: "difference" }}
      />
      {/* Larger circle that trails behind */}
      <div
        ref={cursorOutlineRef}
        className="pointer-events-none fixed top-0 left-0 z-[99998] h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/40 transition-all duration-300 ease-out"
        style={{
          mixBlendMode: "difference",
        }}
      />
      <style jsx global>{`
        /* Hide native cursor for premium feel on desktop */
        @media (min-width: 768px) {
          body, a, button, [role='button'], input, textarea, select {
            cursor: none !important;
          }
        }
        .cursor-hover {
          width: 48px !important;
          height: 48px !important;
          background-color: rgba(255, 255, 255, 0.1) !important;
          border-color: rgba(255, 255, 255, 1) !important;
        }
      `}</style>
    </>
  );
}
