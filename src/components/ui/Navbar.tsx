"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(true);

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Show navbar after scrolling down 200px
    if (latest > 200) {
      setHidden(false);
    } else {
      setHidden(true);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-100%", opacity: 0 }
      }}
      initial="hidden"
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-4 bg-black/50 backdrop-blur-md border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto flex items-center">
        <a href="#" onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }} className="text-sm md:text-base font-bold font-sans tracking-widest text-white/90 hover:text-white transition-colors">
          AJJARAPU MANI PRAGNESH
        </a>
      </div>
    </motion.nav>
  );
}
