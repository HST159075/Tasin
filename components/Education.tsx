"use client";

import { motion } from "framer-motion";

export default function Education() {
  const educationData = [
    {
      title: "Higher Secondary Certificate (HSC)",
      institution: "Khulna City Corporation College",
      period: "2024",
      group: "Science Group",
      result: "GPA: 3.75"
    },
    {
      title: "Secondary School Certificate (SSC)",
      institution: "North Madarsha High School",
      period: "2022",
      group: "Science Group",
      result: "GPA: 4.17"
    }
  ];

  return (
    <section id="education">
      <div className="section-wrap">
        <h2 className="section-title">Education</h2>
        
        <div className="education-grid">
          {educationData.map((item, index) => (
            <motion.div 
              key={index}
              className="education-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="edu-dot"></div>
              <div className="edu-content">
                <div className="edu-header">
                  <h3 className="edu-title">{item.title}</h3>
                  <span className="edu-period">{item.period}</span>
                </div>
                <div className="edu-institution">{item.institution}</div>
                <div className="edu-details">
                  <span className="edu-group">▸ {item.group}</span>
                  <span className="edu-result">• {item.result}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
