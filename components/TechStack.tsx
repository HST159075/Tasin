"use client";

import { motion } from "framer-motion";

const technologies = [
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "ReactJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "TailwindCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "NodeJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "ExpressJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Prisma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-24 relative z-10">
      <div className="section-wrap max-w-[1000px] mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Technology Stack</h2>
          <span className="section-subtitle">Tools & Technologies</span>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {technologies.map((tech, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -8 }}
              className="w-[140px] h-[180px] md:w-[170px] md:h-[210px] flex flex-col items-center justify-center gap-6 rounded-2xl transition-all duration-300 cursor-pointer group relative overflow-hidden shadow-md hover:shadow-2xl hover:shadow-[rgba(255,106,0,0.1)] bg-[var(--bg2)] border border-[var(--border)] hover:border-[var(--orange)]"
            >
              {/* Top subtle highlight */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--orange)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <img 
                src={tech.icon} 
                alt={tech.name} 
                className="w-12 h-12 md:w-16 md:h-16 object-contain group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-500" 
              />
              <span className="text-gray-200 font-bold text-sm md:text-base tracking-wide">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
