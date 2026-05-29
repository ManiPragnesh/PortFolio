"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "../ui/Button";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background glow effects */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute w-[60vw] h-[60vw] rounded-full bg-gradient-to-tr from-[#00f0ff]/10 to-transparent blur-[120px]"
        />
        <motion.div 
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute w-[40vw] h-[40vw] rounded-full bg-gradient-to-bl from-[#ff5e00]/10 to-transparent blur-[100px] translate-x-1/4 translate-y-1/4"
        />
      </div>

      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto"
      >
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold font-sans tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 mb-6"
        >
          AJJARAPU MANI PRAGNESH
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6 flex flex-col items-center"
        >
          <p className="text-xl md:text-2xl font-serif text-white/80 max-w-3xl leading-relaxed">
            ML project experience <span className="text-[#00f0ff]">+</span> Data Analysis capability <span className="text-[#ff5e00]">+</span> fresher bridging technical and analytical sides
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-12">
            <Button variant="primary" href="#systems">
              Explore Systems
            </Button>
            <Button variant="outline" href="#connect">
              Initialize Contact
            </Button>
          </div>
        </motion.div>
      </motion.div>

    </section>
  );
}
