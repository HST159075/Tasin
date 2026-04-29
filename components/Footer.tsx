"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" className="footer-logo">
              <Image src="/logo.png" alt="Tasin Logo" width={40} height={40} />
              <span>tasin.dev</span>
            </Link>
            <p className="footer-tagline">
              Crafting premium digital experiences with modern web technologies.
              Available for new projects and collaborations.
            </p>
          </div>

          <div className="footer-links-grid">
            <div className="footer-column">
              <h4>Navigation</h4>
              <Link href="#home">Home</Link>
              <Link href="#skills">Skills</Link>
              <Link href="#projects">Projects</Link>
              <Link href="#contact">Contact</Link>
            </div>
            <div className="footer-column">
              <h4>Socials</h4>
              <a href="https://github.com/HST159075" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://linkedin.com/in/tasin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://twitter.com/tasin" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://instagram.com/tasin" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-info">
            <p>&copy; 2026 Tasin. All rights reserved.</p>
            <p className="footer-location">Built from Dhaka, Bangladesh 🇧🇩</p>
          </div>
          
          <button className="back-to-top-btn" onClick={scrollToTop}>
            <ArrowUp size={16} />
            <span>Back to top</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
