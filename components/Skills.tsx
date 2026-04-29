"use client";

import { motion } from "framer-motion";
import { Monitor, Server, Wrench } from "lucide-react";

const skillGroups = [
  {
    category: "Frontend",
    icon: <Monitor size={20} />,
    skills: [
      { name: "Next.js / React", level: "90%", icon: "⚛️" },
      { name: "Tailwind CSS", level: "92%", icon: "🎨" },
      { name: "TypeScript", level: "85%", icon: "🔷" }
    ]
  },
  {
    category: "Backend",
    icon: <Server size={20} />,
    skills: [
      { name: "Node.js", level: "82%", icon: "🟢" },
      { name: "PostgreSQL", level: "75%", icon: "🐘" },
      { name: "Socket.io", level: "78%", icon: "⚡" }
    ]
  },
  {
    category: "Tools & Others",
    icon: <Wrench size={20} />,
    skills: [
      { name: "Git / GitHub", level: "88%", icon: "🐙" },
      { name: "Vercel / VPS", level: "80%", icon: "☁️" },
      { name: "Figma", level: "70%", icon: "🎯" }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-wrap">
        <h2 className="section-title">Skills & Expertise</h2>
        
        <div className="skills-container">
          {skillGroups.map((group, idx) => (
            <motion.div 
              key={idx} 
              className="skill-group-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="group-header">
                <span className="group-icon">{group.icon}</span>
                <h3 className="group-title">{group.category}</h3>
              </div>
              
              <div className="skills-list">
                {group.skills.map((skill, i) => (
                  <div className="skill-item" key={i}>
                    <div className="skill-info">
                      <span className="skill-name">{skill.icon} {skill.name}</span>
                      <span className="skill-percentage">{skill.level}</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div 
                        className="skill-bar-fill" 
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.level }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                      ></motion.div>
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
