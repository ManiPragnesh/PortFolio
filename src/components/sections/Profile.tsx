"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import { Download, Award, BookOpen, Target } from "lucide-react";

export function Profile() {
  return (
    <section id="profile" className="relative min-h-screen py-32 px-4 md:px-8 max-w-7xl mx-auto border-t border-white/5">
      <SectionHeading 
        number="06" 
        title="Profile" 
        subtitle="Credentials, capabilities, and professional history." 
      />

      <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Main Resume Content */}
        <div className="lg:col-span-8 space-y-16">
          
          {/* Education */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-4">
              <BookOpen className="w-6 h-6 text-[#ff5e00]" />
              <h3 className="text-2xl font-sans font-bold text-white">Education</h3>
            </div>
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">B.Tech in Computer Science (AI & ML)</h4>
                  <p className="text-white/60 font-serif">SRM Institute of Science and Technology</p>
                </div>
                <div className="text-left md:text-right">
                  <span className="font-mono text-[#00f0ff] bg-[#00f0ff]/10 px-3 py-1 rounded-full text-sm">2023 - 2027</span>
                </div>
              </div>
              <p className="text-white/70 font-serif">
                Specializing in Artificial Intelligence and Machine Learning. Building a strong foundation in algorithms, data structures, and intelligent systems.
              </p>
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-4">
              <Award className="w-6 h-6 text-[#ff5e00]" />
              <h3 className="text-2xl font-sans font-bold text-white">Experience</h3>
            </div>
            <ul className="space-y-4">
              {[
                { name: "Machine Learning Intern", org: "Prodigy InfoTech", year: "Aug 2025 - Sep 2025" },
                { name: "Java Full Stack Developer Intern", org: "EduSkills Academy", year: "Apr 2025 - Jun 2025" },
                { name: "Artificial Intelligence Intern", org: "Edunet Foundation", year: "Mar 2025" },
                { name: "Cloud Networking Intern", org: "EduSkills Academy", year: "Jan 2025 - Mar 2025" },
              ].map((exp, i) => (
                <li key={i} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <div>
                    <h5 className="font-bold text-white">{exp.name}</h5>
                    <span className="text-sm font-serif text-white/50">{exp.org}</span>
                  </div>
                  <span className="font-mono text-xs text-white/30">{exp.year}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Sidebar Capabilities */}
        <div className="lg:col-span-4">
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 sticky top-24"
          >
            <div className="flex items-center gap-4 mb-8">
              <Target className="w-6 h-6 text-[#00f0ff]" />
              <h3 className="text-xl font-sans font-bold text-white">Technical Focus</h3>
            </div>
            
            <div className="space-y-6">
              {[
                { category: "Languages", skills: "Python, C, C++, SQL" },
                { category: "AI & Machine Learning", skills: "Scikit-learn, Model Training, Feature Engineering" },
                { category: "Data Science & Analysis", skills: "NumPy, Pandas, Matplotlib" },
                { category: "Frameworks & Tech", skills: "FastAPI, TensorFlow, PyTorch" },
              ].map((area, i) => (
                <div key={i}>
                  <h5 className="text-sm font-mono text-[#00f0ff] uppercase tracking-wider mb-2">{area.category}</h5>
                  <p className="font-serif text-white/70 leading-relaxed">{area.skills}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <Button variant="primary" className="w-full flex items-center justify-center gap-2">
                <Download className="w-4 h-4" /> Download Resume (PDF)
              </Button>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
