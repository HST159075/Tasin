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
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;

  // Pagination Logic
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projectsData.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(projectsData.length / projectsPerPage);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="projects" className="relative">
      <div className="section-wrap px-4 md:px-10">
        <motion.div
          className="mb-12 md:mb-24 lg:mb-32 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[1px] w-8 md:w-12 bg-orange-500" />
            <span className="text-orange-500 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em]">Creative Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tightest mb-6 md:mb-10 leading-none">Projects</h2>
          <p className="text-muted text-lg md:text-xl lg:text-3xl max-w-3xl leading-relaxed italic font-serif opacity-80">
            A curated selection of digital experiences where <span className="text-white not-italic font-sans font-bold">complex logic</span> meets <span className="text-white not-italic font-sans font-bold">intuitive design</span>.
          </p>
        </motion.div>

        {/* Consistent Spacer - Responsive */}
        <div className="h-6 md:h-12 lg:h-[60px] w-full" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence mode="wait">
            {currentProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                className="project-card-new glass group cursor-pointer hover:-translate-y-2 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden rounded-[24px] aspect-[4/3] border border-white/5 shadow-2xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={450}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                    <div className="flex gap-2 mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                      {project.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 bg-orange-500/20 text-orange-400 border border-orange-500/20 rounded-lg backdrop-blur-xl">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                      {project.title.split('—')[0]}
                    </h3>
                    <div className="text-xs text-orange-500 font-black flex items-center gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150 uppercase tracking-widest">
                      Explore Case Study <ExternalLink size={14} className="animate-pulse" />
                    </div>
                  </div>
                </div>

                <div className="p-6 flex justify-between items-center group-hover:bg-white/5 transition-colors rounded-b-3xl">
                  <div>
                    <div className="text-lg font-bold text-white/90 group-hover:text-orange-500 transition-colors uppercase tracking-widest">{project.title.split('—')[0]}</div>
                    <div className="text-[10px] text-muted font-medium mt-1">Platform Architecture & Design</div>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-orange-500 group-hover:border-orange-500 group-hover:text-white transition-all duration-500 transform group-hover:rotate-[360deg]">
                    <ExternalLink size={18} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Pagination UI */}
        {totalPages > 1 && (
          <motion.div 
            className="mt-16 flex justify-center items-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => paginate(i + 1)}
                className={`w-12 h-12 rounded-full border transition-all duration-300 flex items-center justify-center font-bold text-sm ${
                  currentPage === i + 1 
                  ? 'bg-orange-500 border-orange-500 text-white shadow-[0_0_20px_rgba(255,106,0,0.4)]' 
                  : 'bg-white/5 border-white/10 text-muted hover:border-white/30'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </motion.div>
        )}
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
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg> Source Code
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
