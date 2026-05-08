"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { ArrowRight, Code2 } from "lucide-react";

const experiments = [
  { id: 1, title: "Go-Raft Implementation", type: "Consensus Algorithm", year: "2024" },
  { id: 2, title: "eBPF Packet Filter", type: "Kernel Networking", year: "2024" },
  { id: 3, title: "CUDA Matrix Ops", type: "GPU Acceleration", year: "2023" },
  { id: 4, title: "Wasm Audio Synth", type: "WebAssembly", year: "2023" },
  { id: 5, title: "Custom malloc()", type: "Memory Management", year: "2023" },
  { id: 6, title: "OAuth 2.0 Provider", type: "Identity System", year: "2022" },
];

export function Labs() {
  return (
    <section id="labs" className="relative min-h-screen py-32 px-4 md:px-8 max-w-7xl mx-auto border-t border-white/5">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-[#00f0ff]/20 to-transparent" />
      
      <SectionHeading 
        number="03" 
        title="The Labs" 
        subtitle="Micro-architectures, prototypes, and technical experiments." 
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
        {experiments.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-all duration-300 cursor-pointer overflow-hidden"
          >
            {/* Animated border on hover */}
            <div className="absolute inset-0 rounded-2xl border border-[#ff5e00]/0 group-hover:border-[#ff5e00]/30 transition-colors duration-500" />
            
            <div className="flex justify-between items-start mb-12">
              <Code2 className="w-6 h-6 text-white/40 group-hover:text-[#ff5e00] transition-colors" />
              <span className="text-xs font-mono text-white/30">{exp.year}</span>
            </div>

            <div className="relative z-10">
              <span className="text-xs font-mono text-[#00f0ff]/70 tracking-wider uppercase block mb-1">
                {exp.type}
              </span>
              <h4 className="text-xl font-sans font-bold text-white group-hover:text-white transition-colors">
                {exp.title}
              </h4>
            </div>

            {/* Hover arrow */}
            <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300">
              <ArrowRight className="w-5 h-5 text-white" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
