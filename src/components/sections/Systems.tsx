"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { Database, Activity, Smile, Network, Car } from "lucide-react";

function Github(props: any) {
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

const projects = [
  {
    id: "hospital",
    title: "Hospital Agentic AI",
    category: "Reinforcement Learning",
    description: "Discrete-event hospital simulation using PPO Reinforcement Learning agents for admission control, ICU allocation, and queue management. Achieved a 34% reduction in patient wait times and a 22% improvement in ICU utilization compared to baseline.",
    stack: ["Python", "SimPy", "Pandas", "RLlib"],
    icon: Network,
    accent: "from-[#ff5e00]",
    link: "https://github.com/ManiPragnesh/Hospital-Agentic-AI"
  },
  {
    id: "traffic",
    title: "Predictive Traffic Modeling",
    category: "Machine Learning / Web App",
    description: "SVR model predicting traffic congestion from traffic flow and weather datasets. Achieved a low RMSE of 0.14 and MAE of 0.09 on test data. Built FastAPI backend and React dashboard for real-time visualization.",
    stack: ["Python", "Scikit-learn", "FastAPI", "React", "Mapbox"],
    icon: Car,
    accent: "from-[#00f0ff]",
    link: "https://github.com/ManiPragnesh/Predictive-Traffic-Congestion-Modeling"
  },
  {
    id: "emotion",
    title: "Multimodal Emotion AI",
    category: "Deep Learning",
    description: "Transfer learning system fine-tuning EfficientNet-B0 (facial) and Wav2Vec 2.0 (speech) for emotion recognition across 7 classes on the RAVDESS dataset. Achieved 87.5% validation accuracy. GPU-accelerated training reduced training time by 65%.",
    stack: ["PyTorch", "TensorFlow", "OpenCV", "Librosa"],
    icon: Smile,
    accent: "from-[#ff5e00]",
    link: "https://github.com/ManiPragnesh/Multimodal-Emotion-AI"
  },
  {
    id: "diagnosis",
    title: "AI Medical Diagnosis",
    category: "Machine Learning",
    description: "Built a supervised ML disease prediction model trained on a dataset of 4,900+ patient symptom records. Evaluated multiple algorithms, selecting a Random Forest classifier that achieved 96.2% diagnostic accuracy.",
    stack: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    icon: Activity,
    accent: "from-[#00f0ff]",
    link: "https://github.com/ManiPragnesh/AI-Medical-Diagnosis"
  },
  {
    id: "panchayat",
    title: "Smart Panchayat",
    category: "Web App / DB",
    description: "Digitized Panchayat services web platform managing 5 core citizen record types with a secure MySQL backend. Achieved a 45% reduction in administrative processing time.",
    stack: ["Python", "JavaScript", "MySQL", "HTML/CSS"],
    icon: Database,
    accent: "from-[#ff5e00]",
    link: "https://github.com/ManiPragnesh/Smart-Panchayat"
  }
];

export function Systems() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="systems" className="relative min-h-screen py-32 px-4 md:px-8 max-w-7xl mx-auto" ref={containerRef}>
      <SectionHeading 
        number="02" 
        title="Selected Work" 
        subtitle="Engineered systems, models, and real-world implementations." 
      />

      <div className="relative mt-24 max-w-5xl mx-auto">
        {/* The Path Base */}
        <div className="absolute top-0 bottom-0 left-4 md:left-1/2 md:-translate-x-1/2 w-px bg-white/10" />
        
        {/* The Glowing Path */}
        <motion.div 
          style={{ height: lineHeight }}
          className="absolute top-0 left-4 md:left-1/2 md:-translate-x-1/2 w-[2px] bg-gradient-to-b from-[#00f0ff] via-[#ff5e00] to-[#00f0ff] shadow-[0_0_15px_rgba(0,240,255,0.6)]"
        />

        <div className="space-y-24">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const isEven = index % 2 === 0;
            return (
              <div key={project.id} className="relative flex items-center md:justify-between w-full">
                
                {/* Node Dot */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-black border-2 border-[#00f0ff] z-10"
                />

                {/* Content Card Wrapper */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7 }}
                  className={`w-full md:w-[45%] pl-12 md:pl-0 ${isEven ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}
                >
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block w-full rounded-3xl bg-[#0a0a0a] border border-white/10 overflow-hidden"
                  >
                    {/* Hover Glow Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.accent}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
                    
                    {/* Visual Mockup Area (Futuristic Dashboards) */}
                    <div className="relative h-48 w-full border-b border-white/10 overflow-hidden bg-black/50">
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
                        <Icon className="w-16 h-16 text-white/10 group-hover:text-white/30 transition-colors duration-500" strokeWidth={1} />
                      </div>
                    </div>

                    {/* Content Area */}
                    <div className="p-6 relative z-10">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <span className="text-xs font-mono text-white/50 tracking-wider uppercase mb-1 block">
                            {project.category}
                          </span>
                          <h3 className="text-2xl font-bold font-sans text-white group-hover:text-[#00f0ff] transition-colors duration-300">
                            {project.title}
                          </h3>
                        </div>
                        <Github className="w-5 h-5 text-white/30 group-hover:text-white transition-colors duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </div>
                      
                      <p className="text-white/60 font-serif text-sm leading-relaxed mb-6">
                        {project.description}
                      </p>

                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex flex-wrap gap-1.5">
                          {project.stack.map(tech => (
                            <span 
                              key={tech} 
                              className="px-2.5 py-0.5 text-[10px] font-mono text-white/70 bg-white/5 rounded-full border border-white/10 group-hover:border-white/30 transition-colors duration-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center gap-1.5 text-xs font-mono text-[#00f0ff] bg-[#00f0ff]/5 border border-[#00f0ff]/20 px-2.5 py-0.5 rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                          <Github className="w-3 h-3" />
                          <span>Repo</span>
                        </div>
                      </div>
                    </div>
                  </motion.a>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
