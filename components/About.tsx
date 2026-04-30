"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

export default function About() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="relative overflow-hidden">
      <div className="section-wrap relative z-10">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Who I Am
        </motion.h2>

        <div className="about-grid">
          {/* Image Side */}
          <motion.div 
            className="about-image-side"
            initial={{ opacity: 0, scale: 0.8, x: -50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          >
            <motion.div 
              className="about-img-frame"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image 
                src="/profile.jpg" 
                alt="Tasin" 
                width={280} 
                height={280} 
                className="about-img"
              />
              <div className="about-img-decor"></div>
            </motion.div>
          </motion.div>
          
          {/* Text Content */}
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="about-desc-serif">
              My journey into the world of code started with a simple curiosity about how the internet works. 
              What began as tinkering with HTML/CSS soon turned into a full-blown passion for building 
              <strong> scalable, real-time applications</strong> that solve actual problems. 
              I specialize in bridging the gap between robust <strong>database architecture</strong> and 
              <strong> pixel-perfect</strong> user interfaces.
            </p>
            <p className="about-desc-serif">
              I thrive in the <strong>MERN Stack</strong> ecosystem and love working on projects that involve 
              real-time data, like my auction platform <strong>BidBD</strong>. I enjoy the challenge of optimizing 
              database queries and creating seamless, intuitive user interfaces that feel premium and fast.
            </p>
            <p className="about-desc-serif">
              When I&apos;m not staring at a code editor, you&apos;ll probably find me on a <strong>cricket field</strong> 
              or exploring <strong>digital painting</strong>. I believe that a creative mind outside of programming 
              helps me approach coding problems with a unique and fresh perspective.
            </p>
          </motion.div>

          {/* Info Cards Side */}
          <motion.div 
            className="about-info"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: "📍", label: "Location", val: "Bangladesh" },
              { icon: "💼", label: "Role", val: "Full Stack Developer" },
              { icon: "✉️", label: "Email", val: "hsttasin90@gmail.com" },
              { icon: "🟢", label: "Status", val: "Open to Opportunities" }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                className="info-row group glass" 
                variants={itemVariants}
                whileHover={{ x: 10, borderColor: 'var(--orange)', backgroundColor: 'rgba(255, 106, 0, 0.05)' }}
              >
                <div className="info-icon group-hover:scale-110 transition-transform">{item.icon}</div>
                <div>
                  <div className="info-label">{item.label}</div>
                  <div className="info-val">{item.val}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Decorative Blur */}
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-pink-500/5 blur-[100px] pointer-events-none rounded-full"></div>
    </section>
  );
}
