"use client";

import { Award, CheckCircle2, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Next Level AI-Driven Software Engineering Bootcamp",
    issuer: "Programming Hero",
    period: "Nov, 2025 - July, 2026",
    description:
      "Advanced program covering full-stack development, cloud technologies, and AI integration into real-world software systems.",
    skills: ["Full-Stack Dev", "Cloud", "AI Integration"],
    link: "https://drive.google.com/file/d/1uubUcObriGc7i-9vc2rzUHNeW4-4YzYR/view?usp=drive_link",
  },
  {
    title: "STN-6 Full-Stack Developer Program",
    issuer: "Programming Hero",
    period: "Feb, 2026 - June, 2026",
    description:
      "Intensive full-stack track covering the MERN stack, TypeScript, database design, and production-grade application architecture.",
    skills: ["Next.js", "Node.js", "PostgreSQL", "TypeScript"],
    link: "#",
  },
];

export default function Certification() {
  return (
    <section id="certification" className="section-wrap">
      <h2 className="section-title">
        Credentials & <span className="grad">Training</span>
      </h2>

      <div className="education-grid">
        {certifications.map((cert, idx) => (
          <div key={idx} className="education-card glass">
            <div className="edu-dot" />
            <div className="edu-content">
              <div className="edu-header">
                <h3 className="edu-title flex items-center gap-2">
                  <Award size={18} className="text-[var(--orange)]" />
                  {cert.title}
                </h3>
                <span className="edu-period">{cert.period}</span>
              </div>

              <p className="edu-institution">{cert.issuer}</p>

              <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">
                {cert.description}
              </p>

              <div className="edu-details flex-wrap">
                {cert.skills.map((skill, i) => (
                  <span key={i} className="edu-group flex items-center gap-1">
                    <CheckCircle2 size={13} className="text-[var(--orange)]" />
                    {skill}
                  </span>
                ))}
              </div>

              {cert.link && cert.link !== "#" && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--orange)] mt-4 hover:opacity-80 transition"
                >
                  View credential <ExternalLink size={12} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}