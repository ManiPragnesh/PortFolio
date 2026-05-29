"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "../ui/SectionHeading";

const milestones = [
  { year: "2021", title: "Foundational Years", desc: "Completed early academics with a strong focus on mathematics and sciences, laying the groundwork for logical problem-solving." },
  { year: "2023", title: "Entering Computer Science", desc: "Began B.Tech in Computer Science at SRM Institute of Science and Technology, specializing in Artificial Intelligence & Machine Learning." },
  { year: "Early 2025", title: "Cloud & AI Immersion", desc: "Configured OSPF and BGP routing protocols, virtualized networks using VMware, and designed star and mesh topologies, reducing packet loss by 18%." },
  { year: "Mid 2025", title: "Full Stack Development", desc: "Built an enterprise inventory tracking application, designing 12 REST APIs in Spring Boot and optimizing MySQL database indexing to reduce search query response times by 35%." },
  { year: "Late 2025", title: "Machine Learning Focus", desc: "Developed Random Forest and Gradient Boosting regression models on housing and consumer transaction datasets, improving prediction accuracy by 14% and reducing inference latency to 12ms." }
];

export function Evolution() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="evolution" className="relative min-h-screen py-32 px-4 md:px-8 max-w-7xl mx-auto" ref={containerRef}>
      <SectionHeading 
        number="04" 
        title="Evolution" 
        subtitle="The timeline of architectural thinking and technical capability." 
      />

      <div className="relative mt-24 max-w-4xl mx-auto">
        {/* The Path Base */}
        <div className="absolute top-0 bottom-0 left-4 md:left-1/2 md:-translate-x-1/2 w-px bg-white/10" />
        
        {/* The Glowing Path */}
        <motion.div 
          style={{ height: lineHeight }}
          className="absolute top-0 left-4 md:left-1/2 md:-translate-x-1/2 w-[2px] bg-gradient-to-b from-[#00f0ff] via-[#ff5e00] to-[#00f0ff] shadow-[0_0_15px_rgba(0,240,255,0.6)]"
        />

        <div className="space-y-24">
          {milestones.map((milestone, i) => {
            const isEven = i % 2 === 0;
            return (
              <div key={milestone.year} className="relative flex items-center md:justify-between w-full">
                
                {/* Node Dot */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-black border-2 border-[#00f0ff] z-10"
                />

                {/* Content */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7 }}
                  className={`w-full md:w-5/12 pl-12 md:pl-0 ${isEven ? "md:text-right md:pr-12" : "md:ml-auto md:pl-12"}`}
                >
                  <span className="text-[#ff5e00] font-mono text-xl md:text-2xl font-bold tracking-widest block mb-2">
                    {milestone.year}
                  </span>
                  <h3 className="text-2xl font-sans font-bold text-white mb-3">
                    {milestone.title}
                  </h3>
                  <p className="text-white/60 font-serif leading-relaxed">
                    {milestone.desc}
                  </p>
                </motion.div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
