"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { ArrowRight, FileText } from "lucide-react";
import Link from "next/link";

const recentNotes = [
  { slug: "building-secure-systems", title: "Building Secure Systems in Go", date: "2024-03-15", readingTime: "5 min read" },
  { slug: "understanding-ebpf", title: "Understanding eBPF for Network Observability", date: "2024-02-28", readingTime: "8 min read" },
  { slug: "nextjs-framer-motion", title: "Cinematic Web Experiences with Next.js", date: "2024-01-10", readingTime: "6 min read" },
];

export function Notes() {
  return (
    <section id="notes" className="relative min-h-screen py-32 px-4 md:px-8 max-w-7xl mx-auto">
      <SectionHeading 
        number="05" 
        title="Field Notes" 
        subtitle="Implementation logs, technical deep dives, and architectural reflections." 
      />

      <div className="mt-16 flex flex-col gap-6">
        {recentNotes.map((note, i) => (
          <Link href={`/notes/${note.slug}`} key={note.slug}>
            <motion.article 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col md:flex-row md:items-center justify-between p-8 rounded-2xl bg-white/[0.01] hover:bg-white/[0.03] border border-white/5 hover:border-[#00f0ff]/20 transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="mt-1 bg-white/5 p-3 rounded-xl">
                  <FileText className="w-6 h-6 text-[#00f0ff] opacity-80" />
                </div>
                <div>
                  <div className="flex items-center gap-4 text-sm font-mono text-white/40 mb-2">
                    <span>{note.date}</span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span>{note.readingTime}</span>
                  </div>
                  <h3 className="text-2xl font-sans font-bold text-white group-hover:text-[#00f0ff] transition-colors">
                    {note.title}
                  </h3>
                </div>
              </div>

              <div className="mt-6 md:mt-0 ml-auto md:ml-0 flex items-center justify-center w-12 h-12 rounded-full border border-white/10 group-hover:border-[#00f0ff]/50 bg-black transition-colors">
                <ArrowRight className="w-5 h-5 text-white/50 group-hover:text-[#00f0ff] transition-colors" />
              </div>
            </motion.article>
          </Link>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link href="/notes" className="inline-flex items-center gap-2 text-white/60 hover:text-white font-mono text-sm tracking-widest uppercase transition-colors">
          View All Notes <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
