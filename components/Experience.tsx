"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Freelance / Self-Employed",
    period: "2023 - Present",
    location: "Remote",
    description: "Developing high-performance web applications using the MERN stack. Focused on creating scalable architectures and real-time features.",
    achievements: [
      "Built BidBD, a real-time auction platform with secure bidding and payment integration.",
      "Optimized database queries in MongoDB, reducing data retrieval time by 40%.",
      "Implemented responsive UIs using Next.js and Tailwind CSS for various clients."
    ],
    color: "from-orange-500 to-orange-600"
  },
  {
    title: "Junior Web Developer",
    company: "Tech Solutions Hub",
    period: "2022 - 2023",
    location: "Dhaka, Bangladesh",
    description: "Contributed to frontend development and API integration for various e-commerce and portfolio projects.",
    achievements: [
      "Assisted in migrating a legacy React application to Next.js, improving SEO and performance.",
      "Developed reusable UI components that were adopted across multiple internal projects.",
      "Collaborated with the design team to ensure pixel-perfect implementation of Figma designs."
    ],
    color: "from-purple-500 to-purple-600"
  }
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 bg-transparent overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="skills-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <Briefcase className="w-4 h-4 text-orange-500" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/70">Professional Journey</span>
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl font-extrabold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            My <span className="text-orange-500">Experience</span>
          </motion.h2>
          <motion.p 
            className="text-muted text-lg max-w-2xl mx-auto opacity-80"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            A track record of building impactful solutions and growing as a full-stack engineer.
          </motion.p>
        </div>

        <div className="flex flex-col gap-10">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className="skill-card-new relative overflow-hidden flex flex-col lg:flex-row gap-10 lg:gap-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b ${exp.color} opacity-90`} />
              
              {/* Left Side: Meta Info */}
              <div className="lg:w-1/3 flex flex-col gap-4">
                <div className="flex items-center gap-2 text-orange-500 font-bold text-xs uppercase tracking-widest">
                  <Briefcase className="w-4 h-4" />
                  {exp.company}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">{exp.title}</h3>
                
                <div className="flex flex-col gap-2 mt-2">
                  <div className="skill-level-new flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </div>
                  <div className="skill-level-new flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </div>
                </div>
              </div>

              {/* Right Side: Details */}
              <div className="lg:w-2/3 flex flex-col gap-6">
                <p className="text-[15px] text-muted leading-relaxed">
                  {exp.description}
                </p>
                
                <div className="flex flex-col gap-4">
                  {exp.achievements.map((achievement, i) => (
                    <div key={i} className="skill-item-new group">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0 group-hover:scale-150 transition-transform" />
                      <span className="text-[14px] text-muted group-hover:text-white/90 transition-colors leading-relaxed">
                        {achievement}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
