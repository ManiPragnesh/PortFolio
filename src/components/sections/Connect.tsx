"use client";

import { motion } from "framer-motion";
import { Mail, FileText } from "lucide-react";

function GithubIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.18-.35 6.52-1.55 6.52-7.02a5.2 5.2 0 0 0-1.42-3.6 4.9 4.9 0 0 0-.14-3.55s-1.15-.37-3.77 1.4a13.3 13.3 0 0 0-7 0C6.15 2.8 5 3.17 5 3.17a4.9 4.9 0 0 0-.14 3.55 5.2 5.2 0 0 0-1.42 3.6c0 5.46 3.33 6.66 6.51 7.02A4.8 4.8 0 0 0 9 18v4" />
    </svg>
  );
}

function LinkedinIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function Connect() {
  const links = [
    { name: "GitHub", icon: GithubIcon, href: "https://github.com/ManiPragnesh", color: "hover:text-white" },
    { name: "LinkedIn", icon: LinkedinIcon, href: "https://linkedin.com/in/ajjarapu-mani-pragnesh", color: "hover:text-[#0a66c2]" },
    { name: "Email", icon: Mail, href: "mailto:ajjarapumanipragnesh@gmail.com", color: "hover:text-[#00f0ff]" },
    { name: "Resume", icon: FileText, href: "#", color: "hover:text-[#ff5e00]" },
  ];

  return (
    <footer id="connect" className="relative border-t border-white/5 bg-black py-20 px-4 md:px-8 mt-32 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-1/2 bg-gradient-to-t from-[#00f0ff]/5 to-transparent blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-sans text-white mb-2">AJJARAPU MANI PRAGNESH</h2>
          <p className="text-white/40 font-mono text-sm tracking-wider uppercase">AI & ML Engineer</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-6"
        >
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <a 
                key={link.name}
                href={link.href}
                className={`text-white/40 transition-colors duration-300 ${link.color} p-2 rounded-full hover:bg-white/5`}
                aria-label={link.name}
              >
                <Icon className="w-6 h-6" />
              </a>
            );
          })}
        </motion.div>
        
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 text-center flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-white/30">
        <p>© {new Date().getFullYear()} AJJARAPU MANI PRAGNESH. All rights reserved.</p>
        <p>Built with Next.js, Tailwind & Framer Motion</p>
      </div>
    </footer>
  );
}
