"use client";

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const BackgroundAnimation = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Parallax effect for orbs
  const y1 = useTransform(scrollY, [0, 2000], [0, -200]);
  const y2 = useTransform(scrollY, [0, 2000], [0, 200]);
  const y3 = useTransform(scrollY, [0, 2000], [0, -100]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {/* Designer-grade complex gradients */}
      <motion.div
        className="absolute rounded-full"
        animate={{
          x: [0, 80, -30, 0],
          y: [0, 40, 60, 0],
          rotate: [0, 90, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        style={{
          width: '800px',
          height: '800px',
          background: 'radial-gradient(circle, rgba(255, 107, 0, 0.15) 0%, transparent 70%)',
          top: '-20%',
          left: '-10%',
          filter: 'blur(100px)',
          y: y1
        }}
      />

      <motion.div
        className="absolute rounded-full"
        animate={{
          x: [0, -100, 60, 0],
          y: [0, 80, -40, 0],
          rotate: [0, -90, 0],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        style={{
          width: '700px',
          height: '700px',
          background: 'radial-gradient(circle, rgba(14, 165, 233, 0.12) 0%, transparent 70%)',
          bottom: '10%',
          right: '-10%',
          filter: 'blur(100px)',
          y: y2
        }}
      />

      <motion.div
        className="absolute rounded-full"
        animate={{
          x: [0, 120, -100, 0],
          y: [0, -100, 80, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        style={{
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
          top: '20%',
          left: '15%',
          filter: 'blur(110px)',
        }}
      />

      {/* Abstract Floating Shapes (The "Designer" Touch) */}
      <div className="absolute inset-0">
        <FloatingShapes />
      </div>

      {/* Subtle Bottom Glow */}
      <div 
        className="absolute bottom-0 left-0 w-full h-[60vh] pointer-events-none opacity-40"
        style={{
          background: 'linear-gradient(to top, rgba(255, 106, 0, 0.05), transparent)'
        }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0">
        <Particles count={40} />
      </div>
    </div>
  );
};

const FloatingShapes = () => {
  return (
    <>
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute border border-white/5 rounded-full"
          initial={{ 
            width: 100 + i * 150, 
            height: 100 + i * 150, 
            x: Math.random() * 100 + "%", 
            y: Math.random() * 100 + "%",
            opacity: 0.1 
          }}
          animate={{ 
            x: ["-5%", "5%", "-5%"], 
            y: ["-5%", "5%", "-5%"],
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 20 + i * 5, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          style={{
            borderWidth: '1px',
            borderStyle: 'dashed',
          }}
        />
      ))}
    </>
  );
};

const Particles = ({ count }: { count: number }) => {
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    const newParticles = [...Array(count)].map((_, i) => ({
      id: i,
      x: Math.random() * 100 + "%",
      y: Math.random() * 100 + "%",
      opacity: Math.random() * 0.3 + 0.1,
      duration: Math.random() * 8 + 8,
      size: Math.random() * 2 + 1,
    }));
    setParticles(newParticles);
  }, [count]);

  return (
    <>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute bg-white rounded-full"
          initial={{
            x: p.x,
            y: p.y,
            opacity: p.opacity,
          }}
          animate={{
            y: [null, "-50px", "50px"],
            opacity: [0.1, 0.5, 0.1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            width: p.size + 'px',
            height: p.size + 'px',
          }}
        />
      ))}
    </>
  );
};

export default BackgroundAnimation;
