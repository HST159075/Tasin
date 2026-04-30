"use client";

import { motion, Variants } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";

const frontendSkills = [
  { name: "HTML5", level: "Expert" },
  { name: "Next.JS", level: "Expert" },
  { name: "TypeScript", level: "Expert" },
  { name: "Tailwind Css", level: "Intermediate" },
  { name: "JavaScript", level: "Expert" },
  { name: "React.JS", level: "Expert" },
];

const backendSkills = [
  { name: "Node.JS", level: "Expert" },
  { name: "SQL", level: "Intermediate" },
  { name: "ExpressJS", level: "Expert" },
  { name: "Docker", level: "Intermediate" },
  { name: "MongoDB", level: "Expert" },
  { name: "Prisma", level: "Intermediate" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden">
      <div className="section-wrap relative z-10 px-4 md:px-10">
        <motion.div 
          className="mb-12 md:mb-24 lg:mb-32 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[1px] w-8 md:w-12 bg-purple-500" />
            <span className="text-purple-500 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em]">Technical Mastery</span>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tightest mb-6 md:mb-10 leading-none">Skills</h2>
          <p className="text-muted text-lg md:text-xl lg:text-3xl max-w-3xl leading-relaxed italic font-serif opacity-80">
            Mastering the modern web with a focus on <span className="text-white not-italic font-sans font-bold">real-time performance</span> and <span className="text-white not-italic font-sans font-bold">scalable architecture</span>.
          </p>
        </motion.div>
        
        {/* Refined Spacer - Responsive */}
        <div className="h-6 md:h-12 lg:h-[60px] w-full" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 lg:gap-24">
          {/* Frontend Card */}
          <motion.div 
            className="skill-card-designer glass p-12 md:p-20 rounded-[60px] border border-white/5 relative group"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[60px]" />
            <h3 className="text-4xl font-bold mb-16 flex items-center gap-6">
              <span className="w-16 h-16 flex items-center justify-center bg-orange-500/20 text-orange-500 rounded-3xl">01</span>
              Frontend
            </h3>
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {frontendSkills.map((skill, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-5 p-6 bg-white/5 rounded-3xl border border-white/5 group-hover:border-orange-500/20 transition-all hover:bg-white/10"
                >
                  <div className="w-3 h-3 rounded-full bg-orange-500 shadow-[0_0_15px_rgba(255,106,0,0.7)]" />
                  <div>
                    <div className="text-xl font-bold text-white/90">{skill.name}</div>
                    <div className="text-[12px] text-muted uppercase tracking-widest mt-1">{skill.level}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Backend Card */}
          <motion.div 
            className="skill-card-designer glass p-12 md:p-20 rounded-[60px] border border-white/5 relative group"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[60px]" />
            <h3 className="text-4xl font-bold mb-16 flex items-center gap-6">
              <span className="w-16 h-16 flex items-center justify-center bg-purple-500/20 text-purple-500 rounded-3xl">02</span>
              Backend
            </h3>
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {backendSkills.map((skill, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-5 p-6 bg-white/5 rounded-3xl border border-white/5 group-hover:border-purple-500/20 transition-all hover:bg-white/10"
                >
                  <div className="w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_15px_rgba(139,92,246,0.7)]" />
                  <div>
                    <div className="text-xl font-bold text-white/90">{skill.name}</div>
                    <div className="text-[12px] text-muted uppercase tracking-widest mt-1">{skill.level}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
