"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Zap } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "Next.JS / React", level: "Expert" },
      { name: "TypeScript", level: "Advanced" },
      { name: "Tailwind CSS", level: "Expert" },
      { name: "Framer Motion", level: "Advanced" },
      { name: "Redux / Context", level: "Advanced" },
      { name: "HTML5 / CSS3", level: "Expert" },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.JS / Express", level: "Advanced" },
      { name: "MongoDB", level: "Expert" },
      { name: "PostgreSQL", level: "Expert" },
      { name: "Prisma / Mongoose", level: "Advanced" },
      { name: "REST", level: "Advanced" },
      { name: "Socket.io", level: "Intermediate" },
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "GitHub", level: "Expert" },
      { name: "Docker", level: "Intermediate" },
      { name: "Vercel / Netlify", level: "Advanced" },
      { name: "Postman", level: "Expert" },
      { name: "Figma UI/UX", level: "Intermediate" },
      { name: "Neon / Supabase", level: "Advanced" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 bg-transparent overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-4 relative z-10">

        {/* Header */}
        <div className="skills-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <Zap className="w-4 h-4 text-orange-500" />
          </motion.div>
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Technical <span className="text-orange-500">Skills</span>
          </motion.h2>
          <motion.p
            className="text-muted text-lg max-w-2xl mx-auto opacity-80"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            A comprehensive overview of my technical abilities, developed through dedicated learning.
          </motion.p>
        </div>

        {/* Custom CSS Grid Layout */}
        <div className="skills-grid-new">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              className="skill-card-new"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h3 className="skill-card-title">{category.title}</h3>

              <div className="skill-items-grid">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-item-new">
                    <CheckCircle2 size={20} className="skill-check-icon text-orange-500" />
                    <div className="skill-data">
                      <span className="skill-name-new">{skill.name}</span>
                      <span className="skill-level-new">{skill.level}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
