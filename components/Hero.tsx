"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Mail, MessageCircle, Zap } from "lucide-react";

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
            <motion.h1 
              className="hero-name" 
              variants={itemVariants}
              style={{ fontSize: 'clamp(48px, 8vw, 92px)', fontWeight: 900, letterSpacing: '-5px', lineHeight: 0.85, marginBottom: '28px' }}
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                I&apos;m <span className="grad">Tasin</span>
              </motion.span>
            </motion.h1>

            <motion.div 
              className="hero-tag" 
              variants={itemVariants} 
              style={{ marginBottom: '32px', display: 'flex', gap: '12px', fontSize: '19px', letterSpacing: '-0.5px', fontWeight: 500 }}
            >
              <span style={{ opacity: 0.7 }}>A creative</span>
              <div style={{ position: 'relative', height: '28px', overflow: 'hidden' }}>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roleIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "circOut" }}
                    style={{ display: 'block', color: 'var(--orange)', fontWeight: 800 }}
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>
            
            <motion.p 
              className="hero-role" 
              variants={itemVariants}
              style={{ fontFamily: '"Times New Roman", Times, serif', fontStyle: 'italic' }}
            >
              Based in <strong>Bangladesh</strong>. I architect fast, scalable, <br />
              real-time web applications that solve <strong>actual problems</strong>—from <br />
              robust <strong>database architecture</strong> to <strong>pixel-perfect</strong> interfaces.
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
                <a href="https://wa.me/8801887238025" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="WhatsApp">
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
            <div className="hero-image-container" ref={imageRef} style={{ background: 'transparent', border: 'none', boxShadow: 'none', position: 'relative' }}>
              
              {/* Floating Designer Badges */}
              <motion.div 
                className="absolute -top-10 -right-10 glass px-4 py-2 rounded-2xl flex items-center gap-2 border border-white/10 z-10"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs font-bold whitespace-nowrap">Available for Hire</span>
              </motion.div>

              <motion.div 
                className="absolute bottom-10 -left-10 glass px-4 py-2 rounded-2xl flex items-center gap-2 border border-white/10 z-10"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <Zap size={14} className="text-orange-500" />
                <span className="text-xs font-bold whitespace-nowrap">Full Stack Mastery</span>
              </motion.div>

              <motion.div
                animate={{ 
                  scale: [1, 1.03, 1],
                  filter: ['drop-shadow(0px 0px 0px rgba(255,106,0,0))', 'drop-shadow(0px 10px 25px rgba(255,106,0,0.3))', 'drop-shadow(0px 0px 0px rgba(255,106,0,0))']
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ 
                  scale: 1.08, 
                  filter: 'drop-shadow(0px 15px 35px rgba(255,106,0,0.6))' 
                }}
                className="relative z-10 w-full h-full flex items-center justify-center cursor-pointer"
              >
                <Image 
                  src="/tasin_nobg.png" 
                  alt="Tasin - Full Stack Developer" 
                  width={500} 
                  height={500} 
                  className="hero-image object-contain"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
