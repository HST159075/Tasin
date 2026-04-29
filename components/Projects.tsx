"use client";

import Image from "next/image";
import { useState } from "react";
import { X, ExternalLink, Code2, Lightbulb, Trophy } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "BidBD — Real-Time Auction Platform",
    desc: "Bangladesh's #1 auction marketplace for products and real estate. Features live bidding with countdown timers, smart filters by location & price, seller dashboard, and secure payments via SSLCommerz & bKash.",
    image: "/bidbd.jpg",
    tags: ["Next.js", "Tailwind CSS", "PostgreSQL", "Real-time", "SSLCommerz", "bKash"],
    live: "https://bid-press.vercel.app",
    github: "#", // Add your github link here
    stats: [
      { num: "2,400+", label: "Live Auctions" },
      { num: "18,000+", label: "Active Bidders" },
      { num: "1,200+", label: "Verified Sellers" }
    ],
    challenges: "Building a synchronized real-time countdown for thousands of users simultaneously was the biggest hurdle. I implemented a robust server-side clock synchronization to ensure fairness in bidding.",
    future: "Plans to integrate AI-driven price suggestions for sellers and an automated dispute resolution system."
  },
  {
    id: 2,
    title: "CineRate — Movie & Series Rating Portal",
    desc: "A full-featured movie and series discovery platform. Users can browse top-rated and newly added titles, write reviews, manage a personal watchlist, and subscribe for premium HD/4K streaming.",
    image: "/cinerate.jpg",
    tags: ["Next.js", "Tailwind CSS", "TMDB API", "Subscription Plans", "Watchlist"],
    live: "https://tube-client.vercel.app",
    github: "#",
    stats: [
      { num: "Top Rated", label: "Movies & Series" },
      { num: "৳299/mo", label: "Premium Plan" },
      { num: "4K", label: "Streaming Quality" }
    ],
    challenges: "Handling complex state management for user watchlists across multiple devices while maintaining high performance with the TMDB API was a key challenge.",
    future: "Implementing a community-based 'Party Watch' feature where users can watch trailers and discuss in real-time."
  },
  {
    id: 3,
    title: "MediStore — Online Pharmacy & Healthcare",
    desc: "A modern online pharmacy platform designed for seamless medicine discovery and ordering. Features secure medicine categorizations, healthcare product listings, and an intuitive shopping experience.",
    image: "/medistore.jpg",
    tags: ["Next.js", "Tailwind CSS", "E-commerce", "Healthcare", "Responsive"],
    live: "https://medistore-dusky.vercel.app",
    github: "#",
    stats: [
      { num: "Secure", label: "Checkout" },
      { num: "Fast", label: "Delivery" },
      { num: "24/7", label: "Support" }
    ],
    challenges: "Designing a categorization system that is both medically accurate and user-friendly for non-expert customers was difficult. I consulted pharmaceutical guidelines for the structure.",
    future: "Integration with a digital prescription scanning feature using OCR technology for automated orders."
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);

  return (
    <section id="projects">
      <div className="section-wrap">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projectsData.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="proj-info">
                <div className="proj-featured"><span className="live-dot"></span> LIVE PROJECT</div>
                <h3 className="proj-title">{project.title}</h3>
                <p className="proj-desc">{project.desc}</p>
                <div className="proj-tags">
                  {project.tags.slice(0, 4).map(tag => (
                    <span className="proj-tag" key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="proj-stats-row">
                  {project.stats.map((stat, i) => (
                    <div key={i}>
                      <div className="proj-stat-num">{stat.num}</div>
                      <div className="proj-stat-label">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <div className="proj-links" style={{marginTop: '24px', display: 'flex', gap: '12px'}}>
                  <button onClick={() => setSelectedProject(project)} className="proj-link btn-view-more">
                    ✨ View Details
                  </button>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="proj-link">
                    <ExternalLink size={14} /> Live Demo
                  </a>
                </div>
              </div>
              <div className="proj-image-container">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  width={500} 
                  height={300} 
                  className="proj-image"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="modal-overlay">
            <motion.div 
              className="modal-content"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
            >
              <button className="modal-close" onClick={() => setSelectedProject(null)}>
                <X size={24} />
              </button>
              
              <div className="modal-grid">
                <div className="modal-image-side">
                  <Image src={selectedProject.image} alt={selectedProject.title} width={800} height={450} className="modal-main-img" />
                  <div className="modal-tags">
                    {selectedProject.tags.map(tag => <span key={tag} className="proj-tag">{tag}</span>)}
                  </div>
                </div>
                
                <div className="modal-info-side">
                  <h3 className="modal-title">{selectedProject.title}</h3>
                  
                  <div className="modal-section">
                    <h4><Code2 size={18} className="modal-icon" /> Tech Stack</h4>
                    <p>{selectedProject.tags.join(", ")}</p>
                  </div>

                  <div className="modal-section">
                    <h4><Trophy size={18} className="modal-icon" /> Challenges Faced</h4>
                    <p>{selectedProject.challenges}</p>
                  </div>

                  <div className="modal-section">
                    <h4><Lightbulb size={18} className="modal-icon" /> Future Plans</h4>
                    <p>{selectedProject.future}</p>
                  </div>

                  <div className="modal-actions">
                    <a href={selectedProject.live} target="_blank" rel="noopener noreferrer" className="modal-btn primary">
                      <ExternalLink size={18} /> Live Project
                    </a>
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="modal-btn github">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg> Source Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
