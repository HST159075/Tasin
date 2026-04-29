"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Mail, MessageCircle } from "lucide-react";

export default function Hero() {
  const imageRef = useRef<HTMLDivElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ["Full-Stack Web Developer", "API Developer", "Problem Solver"];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!imageRef.current) return;

    // A subtle floating effect for the image using GSAP
    gsap.to(imageRef.current, {
      y: -20,
      duration: 3,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
    });
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  return (
    <section id="home">
      <div className="hero">
        <motion.div 
          className="hero-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="hero-content">
            <motion.h1 className="hero-name" variants={itemVariants}>
              I&apos;m <span className="grad">Tasin</span>
            </motion.h1>

            <motion.div className="hero-tag" variants={itemVariants} style={{ marginBottom: '24px', display: 'flex', gap: '8px' }}>
              <span>I am a</span>
              <div style={{ position: 'relative', height: '24px', overflow: 'hidden' }}>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roleIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{ display: 'block', color: 'var(--orange)', fontWeight: 700 }}
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>
            
            <motion.p className="hero-role" variants={itemVariants}>
              Based in <strong>Bangladesh</strong>. I build fast, scalable, <br />
              real-time web applications that solve real problems.
            </motion.p>
            
            <motion.div className="hero-btns" variants={itemVariants}>
              <a href="#projects" className="btn-primary">View My Work →</a>
              <a href="/resume.pdf" download className="btn-outline">Download CV ↓</a>
              
              <div className="hero-socials">
                <a href="https://github.com/HST159075" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="GitHub">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                </a>
                <a href="#contact" className="social-icon-btn" aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a href="https://facebook.com/tasin" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a href="https://twitter.com/tasin" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                </a>
                <a href="#contact" className="social-icon-btn" aria-label="Email">
                  <Mail size={20} />
                </a>
                <a href="#contact" className="social-icon-btn" aria-label="WhatsApp">
                  <MessageCircle size={20} />
                </a>
              </div>
            </motion.div>
            
            <motion.div className="hero-stats" variants={itemVariants}>
              <div>
                <div className="stat-num">1+</div>
                <div className="stat-label">Live Projects</div>
              </div>
              <div>
                <div className="stat-num">18K+</div>
                <div className="stat-label">Platform Users</div>
              </div>
              <div>
                <div className="stat-num">5+</div>
                <div className="stat-label">Tech Stack</div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="hero-image-wrapper"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            <div className="hero-image-container" ref={imageRef}>
              <div className="image-border-animate"></div>
              <Image 
                src="/profile.jpg" 
                alt="Tasin - Full Stack Developer" 
                width={450} 
                height={550} 
                className="hero-image"
                priority
              />
              <div className="hero-image-glow"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
