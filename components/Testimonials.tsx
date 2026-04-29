"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Product Manager at TechFlow",
    text: "Tasin is an exceptional developer. He took our complex bidding requirements and turned them into a seamless real-time platform. Highly recommended!",
    avatar: "AJ"
  },
  {
    name: "Sarah Williams",
    role: "Founder of MediCare",
    text: "The healthcare platform Tasin built for us is both robust and user-friendly. His attention to detail in the UI and security is impressive.",
    avatar: "SW"
  },
  {
    name: "Rahat Ahmed",
    role: "CTO at CineWorld",
    text: "Working with Tasin was a breeze. He delivered a high-performance movie portal that exceeded our expectations. A true MERN stack expert.",
    avatar: "RA"
  }
];

export default function Testimonials() {
  const doubledTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" style={{ overflow: 'hidden' }}>
      <div className="section-wrap">
        <h2 className="section-title">Client Feedback</h2>
        
        <div className="marquee-container">
          <motion.div 
            className="marquee-track"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {doubledTestimonials.map((item, index) => (
              <div className="testimonial-card marquee-item" key={index}>
                <div className="testi-header">
                  <Quote className="quote-icon" size={24} />
                  <div className="stars">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="var(--orange)" stroke="none" />)}
                  </div>
                </div>
                
                <p className="testi-text">&quot;{item.text}&quot;</p>
                
                <div className="testi-footer">
                  <div className="testi-avatar">{item.avatar}</div>
                  <div className="testi-info">
                    <h4 className="testi-name">{item.name}</h4>
                    <span className="testi-role">{item.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
