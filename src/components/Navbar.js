// src/components/Navbar.js
'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 text-slate-500 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1 text-2xl font-black tracking-wider text-slate-900">
            <span className="text-[#10B981]">PASS</span>MEFAST
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8 font-extrabold text-xs tracking-wider text-slate-700 uppercase">
            <Link href="#courses" className="hover:text-[#10B981] transition">COURSES & PRICES</Link>
            <Link href="#how-it-works" className="hover:text-[#10B981] transition">HOW IT WORKS</Link>
            <Link href="#areas" className="hover:text-[#10B981] transition">AREAS COVERED</Link>
            <Link href="#reviews" className="hover:text-[#10B981] transition">REVIEWS</Link>
            <Link href="#contact" className="hover:text-[#10B981] transition">CONTACT</Link>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:03331234567" className="text-xs font-extrabold text-slate-800 hover:text-[#10B981]">
              📞 0333 123 4567
            </a>
            <Link 
              href="#search" 
              className="bg-[#E91E63] hover:bg-[#d81b5b] text-white font-extrabold text-xs px-5 py-2.5 rounded-full shadow-md uppercase tracking-wider transition"
            >
              BOOK NOW
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-800 p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}