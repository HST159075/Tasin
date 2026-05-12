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
    github: "https://github.com/HST159075/L-BIDPRES",
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
    github: "https://github.com/HST159075/Tube-client",
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
    github: "https://github.com/HST159075/medistore-cliant",
    stats: [
      { num: "Secure", label: "Checkout" },
      { num: "Fast", label: "Delivery" },
      { num: "24/7", label: "Support" }
    ],
    challenges: "Designing a categorization system that is both medically accurate and user-friendly for non-expert customers was difficult. I consulted pharmaceutical guidelines for the structure.",
    future: "Integration with a digital prescription scanning feature using OCR technology for automated orders."
  },
  {
    id: 4,
    title: "Red Rose — Cosmetic Shop",
    desc: "A premium e-commerce platform for cosmetics and skincare. Features a curated collection, secure cart functionality, cash on delivery (COD) support, and user authentication for a seamless shopping experience.",
    image: "/redrose.jpg",
    tags: ["Next.js", "Tailwind CSS", "E-commerce", "Authentication", "Responsive"],
    live: "https://red-rose-seven.vercel.app",
    github: "https://github.com/HST159075/C-Red-rose",
    stats: [
      { num: "Premium", label: "Cosmetics" },
      { num: "COD", label: "Available" },
      { num: "Fast", label: "Delivery" }
    ],
    challenges: "Implementing a seamless cart and checkout flow with user authentication while ensuring a premium UI/UX design matching the brand's aesthetic.",
    future: "Integrating an AI-powered product recommendation system based on user skin type and preferences."
  },
  {
    id: 5,
    title: "Rawasi Gahlot — Premium Tailoring",
    desc: "A luxury tailoring platform for bespoke ladies' wear in Muscat, Oman. Features a multilingual interface, service gallery, and direct WhatsApp integration for seamless order placement and consultations.",
    image: "/rawasi.jpg",
    tags: ["HTML5", "CSS3", "JavaScript", "Multilingual", "Responsive"],
    live: "https://hst159075.github.io/Rawasi-tailor",
    github: "#",
    stats: [
      { num: "Luxury", label: "Abayas" },
      { num: "Muscat", label: "Oman" },
      { num: "Direct", label: "WhatsApp" }
    ],
    challenges: "Designing a multilingual UI (English & Arabic) that maintains aesthetic consistency and provides a premium user experience across all devices.",
    future: "Implementing an online fitting system where users can upload measurements and preview fabric combinations in 3D."
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
    <section id="projects" className="relative py-24 bg-transparent overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="skills-header mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <Code2 className="w-4 h-4 text-orange-500" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/70">Creative Portfolio</span>
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl font-extrabold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Featured <span className="text-orange-500">Projects</span>
          </motion.h2>
          <motion.p 
            className="text-muted text-lg max-w-2xl mx-auto opacity-80"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            A curated selection of digital experiences where complex logic meets intuitive design.
          </motion.p>
        </div>

        <div className="flex flex-col gap-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {currentProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  className="bg-[#0e0e12] border border-white/5 rounded-[32px] p-5 group cursor-pointer hover:-translate-y-2 hover:border-orange-500/30 hover:shadow-[0_10px_40px_rgba(255,106,0,0.1)] transition-all duration-500 flex flex-col"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative overflow-hidden rounded-[24px] aspect-[4/3] mb-6 border border-white/5">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Dark overlay that fades on hover */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                  </div>

                  <div className="px-2 flex flex-col flex-grow gap-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-white/5 text-white/70 border border-white/10 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-orange-500 transition-colors mb-2">
                        {project.title.split('—')[0].trim()}
                      </h3>
                      <p className="text-sm text-muted line-clamp-2 leading-relaxed">
                        {project.desc}
                      </p>
                    </div>

                    {/* Bottom row: Explore link */}
                    <div className="mt-auto pt-4 flex justify-between items-center border-t border-white/5">
                      <span className="text-xs font-bold text-orange-500 uppercase tracking-widest flex items-center gap-2">
                        Explore <ExternalLink size={14} className="group-hover:animate-pulse" />
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Pagination UI */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => paginate(i + 1)}
                  className={`w-10 h-10 rounded-full border transition-all duration-300 flex items-center justify-center font-bold text-sm ${
                    currentPage === i + 1 
                    ? 'bg-orange-500 border-orange-500 text-white shadow-[0_0_15px_rgba(255,106,0,0.3)]' 
                    : 'bg-white/5 border-white/10 text-muted hover:border-white/30 hover:bg-white/10'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
            <motion.div
              className="bg-[#0e0e12] border border-white/10 w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-[32px] relative flex flex-col lg:flex-row shadow-2xl"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <button 
                className="absolute top-4 right-4 z-50 w-10 h-10 bg-black/50 hover:bg-orange-500 rounded-full flex items-center justify-center text-white backdrop-blur-md border border-white/10 transition-all"
                onClick={() => setSelectedProject(null)}
              >
                <X size={20} />
              </button>

              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative h-[300px] lg:h-auto border-r border-white/5 bg-[#050508] p-6 lg:p-8 flex flex-col justify-center">
                <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden border border-white/5 shadow-xl">
                  <Image src={selectedProject.image} alt={selectedProject.title} fill className="object-cover" />
                </div>
                <div className="mt-8 flex flex-wrap gap-2 justify-center">
                  {selectedProject.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Info Side */}
              <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col gap-8">
                <div>
                  <h3 className="text-3xl font-extrabold text-white mb-4 leading-tight">{selectedProject.title}</h3>
                  <p className="text-[15px] text-muted leading-relaxed">{selectedProject.desc}</p>
                </div>

                <div className="grid grid-cols-3 gap-4 border-y border-white/5 py-6">
                  {selectedProject.stats.map((stat, i) => (
                    <div key={i} className="flex flex-col gap-1 text-center">
                      <span className="text-lg font-bold text-white">{stat.num}</span>
                      <span className="text-[10px] text-muted uppercase tracking-widest">{stat.label}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-6">
                  <div>
                    <h4 className="text-sm font-bold text-white flex items-center gap-2 mb-3 uppercase tracking-widest">
                      <Trophy size={16} className="text-orange-500" /> Key Challenge
                    </h4>
                    <p className="text-sm text-muted leading-relaxed">{selectedProject.challenges}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-white flex items-center gap-2 mb-3 uppercase tracking-widest">
                      <Lightbulb size={16} className="text-orange-500" /> Future Scope
                    </h4>
                    <p className="text-sm text-muted leading-relaxed">{selectedProject.future}</p>
                  </div>
                </div>

                <div className="mt-auto pt-6 flex flex-wrap gap-4">
                  <a href={selectedProject.live} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-xl transition-colors">
                    <ExternalLink size={18} /> Live Demo
                  </a>
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 font-bold py-3 px-6 rounded-xl transition-colors">
                    <Code2 size={18} /> Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
