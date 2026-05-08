"use client";

import { ReactNode } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  href?: string;
  className?: string;
}

export function Button({ children, variant = "primary", href, className, ...props }: ButtonProps) {
  const baseStyles = "relative inline-flex items-center justify-center px-6 py-3 text-sm font-medium tracking-widest uppercase transition-all duration-300 ease-out overflow-hidden";
  
  const variants = {
    primary: "bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/50 hover:bg-[#00f0ff]/20 hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]",
    secondary: "bg-[#ff5e00]/10 text-[#ff5e00] border border-[#ff5e00]/50 hover:bg-[#ff5e00]/20 hover:shadow-[0_0_20px_rgba(255,94,0,0.4)]",
    outline: "bg-transparent text-white border border-white/20 hover:border-white/60 hover:bg-white/5"
  };

  const Content = (
    <>
      <span className="relative z-10 font-sans">{children}</span>
      {/* Decorative corners */}
      <span className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-current opacity-50" />
      <span className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-current opacity-50" />
      <span className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-current opacity-50" />
      <span className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-current opacity-50" />
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={cn(baseStyles, variants[variant], className)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {Content}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={cn(baseStyles, variants[variant], className)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {Content}
    </motion.button>
  );
}
