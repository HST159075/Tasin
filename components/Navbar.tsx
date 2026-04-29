"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav>
      <Link href="/" className="nav-logo">
        <Image src="/logo.png" alt="Tasin Logo" width={32} height={32} className="rounded-sm" />
      </Link>
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#skills">Tech-stack</a>
        <a href="#projects">Project</a>
        <a href="#contact">Contact me</a>
        
        <div className="nav-dropdown-container">
          <button 
            className={`nav-more-btn ${isDropdownOpen ? 'active' : ''}`}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            More <ChevronDown size={14} className={`chevron ${isDropdownOpen ? 'rotate' : ''}`} />
          </button>
          
          {isDropdownOpen && (
            <div className="nav-dropdown">
              <a href="#about" onClick={() => setIsDropdownOpen(false)}>About Me</a>
              <a href="#education" onClick={() => setIsDropdownOpen(false)}>Education</a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
