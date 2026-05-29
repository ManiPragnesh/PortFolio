"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "../ui/SectionHeading";

export function Identity() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const traits = [
    { title: "Artificial Intelligence", desc: "Developing and deploying intelligent machine learning models.", color: "text-[#00f0ff]" },
    { title: "Data Science", desc: "Extracting insights through robust data analysis and feature engineering.", color: "text-[#ff5e00]" },
    { title: "Full Stack", desc: "Building responsive and scalable web applications from frontend to database.", color: "text-white" },
    { title: "Agentic Systems", desc: "Designing autonomous agents for complex simulation and problem solving.", color: "text-white/60" }
  ];

  return (
    <section id="identity" ref={containerRef} className="relative min-h-screen py-32 px-4 md:px-8 max-w-7xl mx-auto flex items-center">
      <motion.div 
        style={{ y, opacity }}
        className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center"
      >
        <div>
          <SectionHeading 
            number="01" 
            title="Identity" 
            subtitle="The architecture of a modern engineering mindset."
          />
          
          <div className="space-y-8 text-lg md:text-xl text-white/70 font-serif leading-relaxed">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              I am a computer science student and developer operating at the intersection of <strong className="text-white font-sans font-normal">Artificial Intelligence, Machine Learning, and Data Science</strong>. I don't just train models; I build complete systems around them, ensuring they are scalable and solve real-world problems.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              My philosophy is simple: <em className="text-[#00f0ff] not-italic">Build intelligently, deploy reliably.</em> The modern landscape requires engineers who can bridge the gap between complex algorithms and practical, user-facing applications.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base md:text-lg font-mono text-[#00f0ff]/80"
            >
              Open to Data Analytics, ML Engineering, and AI roles — 2027 batch
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {traits.map((trait, i) => (
            <motion.div
              key={trait.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#00f0ff]/30 transition-colors duration-500 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h3 className={`font-sans font-bold text-2xl mb-3 ${trait.color}`}>{trait.title}</h3>
              <p className="font-serif text-white/60 text-sm leading-relaxed">{trait.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
