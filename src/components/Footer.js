// src/components/Footer.js
'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2bd864] text-[#000839] font-sans pt-12 pb-6 px-4 sm:px-8 lg:px-16 w-full text-left">
      <div className="max-w-[1280px] mx-auto">
        
        {/* Main Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-10">
          
          {/* Left Side: 2x2 Grid Layout for Links */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            
            {/* Top-Left: PASSMEFAST */}
            <div>
              <h3 className="font-extrabold text-sm sm:text-base uppercase tracking-wider mb-2 text-[#000839]">
                PASSMEFAST
              </h3>
              <div className="w-full h-[1px] bg-white/70 mb-4"></div>
              <ul className="space-y-2.5 text-sm font-medium text-[#000839]/90">
                <li><Link href="/faq" className="hover:underline">Frequently Asked Questions</Link></li>
                <li><Link href="/about" className="hover:underline">About Us</Link></li>
                <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>
                <li><Link href="/careers" className="hover:underline">Careers & Vacancies</Link></li>
                <li><Link href="/instructors" className="hover:underline">Instructors Needed</Link></li>
              </ul>
            </div>

            {/* Top-Right: OUR DRIVING COURSES */}
            <div>
              <h3 className="font-extrabold text-sm sm:text-base uppercase tracking-wider mb-2 text-[#000839]">
                OUR DRIVING COURSES
              </h3>
              <div className="w-full h-[1px] bg-white/70 mb-4"></div>
              <ul className="space-y-2.5 text-sm font-medium text-[#000839]/90">
                <li><Link href="/courses/intensive" className="hover:underline">Intensive Driving Courses</Link></li>
                <li><Link href="/courses/automatic" className="hover:underline">Automatic Driving Lessons</Link></li>
                <li><Link href="/courses/female-instructors" className="hover:underline">Female Driving Instructors</Link></li>
                <li><Link href="/prices" className="hover:underline">Driving Lesson Prices</Link></li>
                <li><Link href="/discounts/student" className="hover:underline">Student Discount</Link></li>
                <li><Link href="/discounts/apprentice" className="hover:underline">Apprentice & Youth Discount</Link></li>
                <li><Link href="/discounts/graduate" className="hover:underline">Graduate Discount</Link></li>
              </ul>
            </div>

            {/* Bottom-Left: COURSES NATIONWIDE */}
            <div>
              <h3 className="font-extrabold text-sm sm:text-base uppercase tracking-wider mb-2 text-[#000839]">
                COURSES NATIONWIDE
              </h3>
              <div className="w-full h-[1px] bg-white/70 mb-4"></div>
              <ul className="space-y-2.5 text-sm font-medium text-[#000839]/90">
                <li><Link href="/areas" className="hover:underline">All Areas Covered</Link></li>
                <li><Link href="/areas/london" className="hover:underline">London</Link></li>
                <li><Link href="/areas/manchester" className="hover:underline">Manchester</Link></li>
                <li><Link href="/areas/edinburgh" className="hover:underline">Edinburgh</Link></li>
                <li><Link href="/areas/hampshire" className="hover:underline">Hampshire</Link></li>
                <li><Link href="/areas/west-midlands" className="hover:underline">West Midlands</Link></li>
                <li><Link href="/areas/cardiff" className="hover:underline">Cardiff</Link></li>
              </ul>
            </div>

            {/* Bottom-Right: DRIVING CONTENT */}
            <div>
              <h3 className="font-extrabold text-sm sm:text-base uppercase tracking-wider mb-2 text-[#000839]">
                DRIVING CONTENT
              </h3>
              <div className="w-full h-[1px] bg-white/70 mb-4"></div>
              <ul className="space-y-2.5 text-sm font-medium text-[#000839]/90">
                <li><Link href="/resources" className="hover:underline">Help & Resources</Link></li>
                <li><Link href="/tests/practical" className="hover:underline">Pratical Test</Link></li>
                <li><Link href="/tests/theory" className="hover:underline">Theory Test</Link></li>
                <li><Link href="/guides" className="hover:underline">Course Guides</Link></li>
                <li><Link href="/advice" className="hover:underline">Driving Advice</Link></li>
                <li><Link href="/blog" className="hover:underline">Written in the Stars</Link></li>
              </ul>
            </div>

          </div>

          {/* Right Side: Phone, Socials, Badges & Legal Text */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-center text-center">
            
            {/* Phone Number */}
            <a
              href="tel:03331234949"
              className="text-3xl sm:text-4xl font-black text-[#000839] hover:opacity-80 transition-opacity mb-4 tracking-tight"
            >
              0333 123 4949
            </a>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mb-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#000839] text-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#000839] text-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#000839] text-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>

            {/* Trustpilot Box */}
            <div className="bg-white rounded-lg px-4 py-2.5 flex items-center gap-2 shadow-xs mb-5 border border-gray-100">
              <span className="font-bold text-sm text-black underline">Excellent</span>
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="bg-[#00b67a] text-white p-1 text-[10px] leading-none">
                    ★
                  </div>
                ))}
              </div>
              <span className="font-extrabold text-xs text-black flex items-center gap-1 ml-1">
                ★ Trustpilot
              </span>
            </div>

            {/* Payment Cards Line 1 */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-3">
              <span className="bg-white px-2.5 py-1 rounded font-black text-xs text-[#1a1f71] italic tracking-tighter shadow-xs">VISA</span>
              <span className="bg-white px-2.5 py-1 rounded font-bold text-xs text-[#eb001b] shadow-xs">mastercard</span>
              <span className="bg-white px-2.5 py-1 rounded font-bold text-xs text-[#006fcf] shadow-xs">AMEX</span>
            </div>

            {/* Payment Cards Line 2 */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
              <span className="bg-white px-3 py-1 rounded font-extrabold text-xs text-black shadow-xs">Klarna.</span>
              <span className="bg-white px-3 py-1 rounded font-black text-xs text-[#00b5ad] italic shadow-xs">Payl8r</span>
              <span className="bg-white px-3 py-1 rounded font-bold text-xs text-black shadow-xs flex items-center gap-1">Pay</span>
              <span className="bg-white px-3 py-1 rounded font-bold text-xs text-black shadow-xs">G Pay</span>
            </div>

            {/* Legal Disclaimers */}
            <div className="text-[11px] leading-relaxed text-[#000839]/80 font-normal max-w-md space-y-2 text-center">
              <p>*Klarna only available on purchases under £2,500</p>
              <p>
                ** Subject to affordability assessments. STAR GENIE LTD T/A PASSMEFAST is an Introducer Appointed Representative of Social Money LTD t/a Payl8r who is authorised by the FCA under ref. 675283. Missed payments may affect your credit file, future borrowing and incur fees.
              </p>
            </div>

          </div>

        </div>

        {/* Separator Line */}
        <div className="w-full h-[1px] bg-white/70 mb-6"></div>

        {/* Bottom Bar Links & Copyright */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between text-xs font-bold text-[#000839] gap-4">
          
          {/* Policy Links */}
          <div className="flex flex-wrap gap-4 sm:gap-6">
            <Link href="/terms" className="hover:underline">Terms & Conditions</Link>
            <Link href="/complaints" className="hover:underline">Complaints Policy</Link>
            <Link href="/privacy" className="hover:underline">Privacy Notice</Link>
            <Link href="/cookies" className="hover:underline">Cookie Policy</Link>
          </div>

          {/* Copyright Text */}
          <div className="text-left md:text-right space-y-1">
            <p>Copyright © {currentYear} owned by Star Genie Limited.</p>
            <p className="font-medium text-[11px] opacity-90">
              Star Genie Limited trading as PassMeFast. Company number 10093359.
            </p>
            <p className="font-medium text-[11px] opacity-90">
              PassMeFast, 8 Exchange Quay, Salford, England, M5 3EQ
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
}