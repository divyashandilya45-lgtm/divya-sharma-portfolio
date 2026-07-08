"use client";

import React, { useEffect, useState } from "react";
import { useMousePosition } from "@/hooks/useMousePosition";

export function MouseGlow() {
  const { x, y } = useMousePosition();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className="mouse-glow pointer-events-none fixed z-0 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 transition-opacity duration-300"
      style={{
        left: `${x}px`,
        top: `${y}px`,
      }}
    />
  );
}
