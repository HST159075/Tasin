"use client";

import { motion } from "framer-motion";

const technologies = [
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Prisma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-20 overflow-hidden">
      <div className="section-wrap">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Technology Stack</h2>
          <span className="section-subtitle">Premium Tools I Use</span>
        </motion.div>

        <div className="relative group">
          {/* First Row */}
          <div className="flex gap-10 mb-10 animate-marquee whitespace-nowrap">
            {[...technologies, ...technologies].map((tech, idx) => (
              <motion.div 
                key={idx}
                className="tech-item-pill"
                whileHover={{ scale: 1.05, borderColor: 'var(--orange)' }}
              >
                <img src={tech.icon} alt={tech.name} className="w-10 h-10" />
                <span className="text-base font-semibold">{tech.name}</span>
              </motion.div>
            ))}
          </div>

          {/* Second Row */}
          <div className="flex gap-10 animate-marquee-reverse whitespace-nowrap">
            {[...technologies].reverse().concat([...technologies].reverse()).map((tech, idx) => (
              <motion.div 
                key={idx}
                className="tech-item-pill"
                whileHover={{ scale: 1.05, borderColor: 'var(--orange)' }}
              >
                <img src={tech.icon} alt={tech.name} className="w-10 h-10" />
                <span className="text-base font-semibold">{tech.name}</span>
              </motion.div>
            ))}
          </div>
          
          {/* Fade effect at edges */}
          <div className="absolute top-0 left-0 h-full w-40 bg-gradient-to-r from-[#050505] to-transparent z-10"></div>
          <div className="absolute top-0 right-0 h-full w-40 bg-gradient-to-l from-[#050505] to-transparent z-10"></div>
        </div>
      </div>
    </section>
  );
}
