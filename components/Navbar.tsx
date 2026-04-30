"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Zap, Layers, Briefcase, MessageSquare, Plus, User, GraduationCap } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("home");
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home", href: "#home", icon: <Home size={18} /> },
    { id: "skills", label: "Skills", href: "#skills", icon: <Zap size={18} /> },
    { id: "tech", label: "Tech", href: "#tech-stack", icon: <Layers size={18} /> },
    { id: "projects", label: "Projects", href: "#projects", icon: <Briefcase size={18} /> },
    { id: "contact", label: "Contact", href: "#contact", icon: <MessageSquare size={18} /> },
  ];

  return (
    <div className="nav-container">
      <motion.nav 
        className={`unique-navbar ${isScrolled ? 'scrolled' : ''}`}
        initial={{ y: -100, x: "-50%" }}
        animate={{ y: 0, x: "-50%" }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <Link href="/" className="unique-logo">
          <Image src="/logo.png" alt="Tasin" width={28} height={28} className="logo-img" />
        </Link>

        <div className="unique-links">
          {navItems.map((item) => (
            <a 
              key={item.id}
              href={item.href}
              className={`unique-link ${activeItem === item.id ? 'active' : ''}`}
              onClick={() => setActiveItem(item.id)}
            >
              <span className="icon">{item.icon}</span>
              <span className="label">{item.label}</span>
              {activeItem === item.id && (
                <motion.div 
                  layoutId="active-pill"
                  className="active-bg"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}

          <div className="more-trigger-container">
            <button 
              className={`unique-link more-btn ${isMoreOpen ? 'active' : ''}`}
              onClick={() => setIsMoreOpen(!isMoreOpen)}
            >
              <Plus size={18} className={`plus-icon ${isMoreOpen ? 'rotate' : ''}`} />
              <span className="label">More</span>
            </button>

            <AnimatePresence>
              {isMoreOpen && (
                <motion.div 
                  className="unique-dropdown"
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 10 }}
                >
                  <a href="#about" onClick={() => setIsMoreOpen(false)}>
                    <User size={16} /> About Me
                  </a>
                  <a href="#education" onClick={() => setIsMoreOpen(false)}>
                    <GraduationCap size={16} /> Education
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.nav>
    </div>
  );
}
