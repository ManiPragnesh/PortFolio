"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { ExternalLink, Database, Activity, Smile, Network } from "lucide-react";

const projects = [
  {
    id: "panchayat",
    title: "Smart Panchayat",
    category: "Web App / DB",
    description: "Web platform to digitize Panchayat services. Features grievance redressal, document requests, and a MySQL backend for structured data storage.",
    stack: ["Python", "JavaScript", "MySQL", "HTML/CSS"],
    icon: Database,
    accent: "from-[#00f0ff]",
    link: "#"
  },
  {
    id: "diagnosis",
    title: "AI Medical Diagnosis",
    category: "Machine Learning",
    description: "Supervised ML model predicting diseases based on symptoms. Includes data preprocessing, model training, and a real-time prediction interface.",
    stack: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    icon: Activity,
    accent: "from-[#ff5e00]",
    link: "#"
  },
  {
    id: "emotion",
    title: "Multimodal Emotion AI",
    category: "Deep Learning",
    description: "Emotion recognition system combining facial expressions and speech signals using EfficientNet-B0 and Wav2Vec 2.0 with GPU acceleration.",
    stack: ["PyTorch", "TensorFlow", "OpenCV", "Librosa"],
    icon: Smile,
    accent: "from-[#00f0ff]",
    link: "#"
  },
  {
    id: "hospital",
    title: "Hospital Agentic AI",
    category: "Reinforcement Learning",
    description: "Simulates hospital operations using autonomous agents to manage bed allocation and patient queues, optimizing resources via a PPO RL agent.",
    stack: ["Python", "SimPy", "Pandas", "RL"],
    icon: Network,
    accent: "from-[#ff5e00]",
    link: "#"
  }
];

export function Systems() {
  return (
    <section id="systems" className="relative min-h-screen py-32 px-4 md:px-8 max-w-7xl mx-auto">
      <SectionHeading 
        number="02" 
        title="Core Systems" 
        subtitle="Production-grade implementations and complex problem solving." 
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-16">
        {projects.map((project, index) => {
          const Icon = project.icon;
          return (
            <motion.a
              href={project.link}
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
              className="group relative block w-full rounded-3xl bg-[#0a0a0a] border border-white/10 overflow-hidden"
            >
              {/* Hover Glow Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.accent}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
              
              {/* Visual Mockup Area (Futuristic Dashboards) */}
              <div className="relative h-64 w-full border-b border-white/10 overflow-hidden bg-black/50">
                {/* Abstract Data Visuals simulating a dashboard */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                  <motion.div 
                    className="w-full h-full flex items-end gap-2"
                    initial={false}
                  >
                    {[...Array(12)].map((_, i) => (
                      <motion.div 
                        key={i}
                        className={`flex-1 bg-gradient-to-t ${project.accent} to-transparent rounded-t-sm`}
                        initial={{ height: "10%" }}
                        whileInView={{ height: `${20 + Math.random() * 80}%` }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: i * 0.1 }}
                      />
                    ))}
                  </motion.div>
                </div>
                
                {/* Centered Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Icon className="w-20 h-20 text-white/10 group-hover:text-white/30 transition-colors duration-500" strokeWidth={1} />
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8 relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-xs font-mono text-white/50 tracking-wider uppercase mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-3xl font-bold font-sans text-white group-hover:text-[#00f0ff] transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                  <ExternalLink className="w-6 h-6 text-white/30 group-hover:text-white transition-colors duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
                
                <p className="text-white/60 font-serif leading-relaxed mb-8">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map(tech => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 text-xs font-mono text-white/70 bg-white/5 rounded-full border border-white/10 group-hover:border-white/30 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}
