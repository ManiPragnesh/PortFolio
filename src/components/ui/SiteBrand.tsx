"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useState, useEffect } from "react";

export function SiteBrand() {
  const { scrollY } = useScroll();
  
  // Apply a gentle physics spring to the scroll value for a premium cinematic glide
  const smoothY = useSpring(scrollY, { stiffness: 60, damping: 20, mass: 0.5 });
  
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Calculate transforms based on scroll position (extended to 500px for a longer, more elegant transition)
  // Move from top-center to top-left corner
  const top = useTransform(smoothY, [0, 500], ["20vh", "6vh"]);
  const left = useTransform(smoothY, [0, 500], ["50vw", "max(80px, 12vw)"]);
  
  // Maintain true centering to prevent aggressive horizontal sweeps
  const x = "-50%";
  const y = "-50%";
  
  // Shrink significantly to act as a discrete logo
  const scale = useTransform(smoothY, [0, 500], [1, 0.2]);

  if (!isMounted) return null;

  return (
    <>
      {/* The Animated Brand Name */}
      <motion.div
        style={{
          position: "fixed",
          top,
          left,
          x,
          y,
          scale,
          transformOrigin: "center center",
          zIndex: 50,
        }}
        className="pointer-events-none flex flex-col"
      >
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold font-sans tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 whitespace-nowrap pointer-events-auto cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          AJJARAPU MANI PRAGNESH
        </motion.h1>
      </motion.div>
    </>
  );
}
