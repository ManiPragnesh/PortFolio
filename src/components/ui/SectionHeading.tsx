"use client";

import { motion } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SectionHeadingProps {
  number: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({ number, title, subtitle, className }: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col mb-16", className)}>
      <div className="flex items-end gap-4 mb-4 overflow-hidden">
        <motion.h2
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold font-sans tracking-tight uppercase"
        >
          {title}
        </motion.h2>
      </div>
      
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-white/60 font-serif max-w-2xl"
        >
          {subtitle}
        </motion.p>
      )}
      
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "circOut", delay: 0.4 }}
        className="h-[1px] w-full bg-gradient-to-r from-white/20 via-[#00f0ff]/20 to-transparent mt-8 origin-left"
      />
    </div>
  );
}
