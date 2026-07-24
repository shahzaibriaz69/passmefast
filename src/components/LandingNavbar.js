'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';

const menuItems = ['OUR COURSES & PRICES', 'RESOURCES', 'INSTRUCTORS', 'AREAS WE COVER', 'HELP & SUPPORT'];

export default function LandingNavbar() {
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <motion.header
      initial={reduceMotion ? false : { opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white text-[#03064e] relative z-50"
    >
      <div className="max-w-[1216px] mx-auto h-[96px] px-5 lg:px-0 flex items-center justify-between">
        <Link href="/" aria-label="PassMeFast home" className="shrink-0">
          <img
            src="https://www.passmefast.co.uk/_next/static/media/pmf-logo.7298b5a9.svg"
            alt="PassMeFast"
            className="w-[184px] md:w-[256px] h-auto"
          />
        </Link>

        <div className="hidden md:flex items-center gap-5">
          <a href="tel:03331234949" className="font-bold text-[24px] leading-8 text-[#2bcd5a]">
            0333 123 4949
          </a>
          <button aria-label="Account" className="h-11 w-11 rounded-full border border-[#14c86e] grid place-items-center cursor-pointer">
            <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="8" r="4" />
              <path d="M5 21a7 7 0 0 1 14 0" />
            </svg>
          </button>
          <a href="#fast-track" className="w-[180px] min-h-[43px] bg-[#fa649b] hover:bg-[#ed4f87] text-white rounded-full flex items-center justify-center text-base font-normal transition-all hover:-translate-y-0.5 hover:shadow-lg">
            FAST-TRACK ME
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="md:hidden h-11 w-11 rounded-full border border-[#03064e] grid place-items-center"
        >
          <span className="text-2xl leading-none">{open ? '×' : '☰'}</span>
        </button>
      </div>

      <nav className={`${open ? 'block' : 'hidden'} md:block bg-[#03064e] text-white`}>
        <div className="max-w-[1216px] mx-auto md:h-[64px] px-5 lg:px-0 flex flex-col md:flex-row md:items-center md:justify-between">
          {menuItems.map((item) => (
            <a
              key={item}
              href={item === 'HELP & SUPPORT' ? '/help-and-support' : '#'}
              className="py-4 md:py-0 text-base leading-6 font-bold border-b border-white/10 md:border-0 hover:text-[#2bd864] transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </nav>
    </motion.header>
  );
}
