// src/components/Footer.js
'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';

const linkCols = [
  {
    title: 'PassMeFast',
    links: [
      ['Frequently Asked Questions', '/faq'],
      ['About Us', '/about'],
      ['Contact Us', '/contact'],
      ['Careers & Vacancies', '/careers'],
      ['Instructors Needed', '/instructors'],
    ],
  },
  {
    title: 'Our Driving Courses',
    links: [
      ['Intensive Driving Courses', '/courses/intensive'],
      ['Automatic Driving Lessons', '/courses/automatic'],
      ['Female Driving Instructors', '/courses/female-instructors'],
      ['Driving Lesson Prices', '/prices'],
      ['Student Discount', '/discounts/student'],
      ['Apprentice & Youth Discount', '/discounts/apprentice'],
      ['Graduate Discount', '/discounts/graduate'],
    ],
  },
  {
    title: 'Courses Nationwide',
    links: [
      ['All Areas Covered', '/areas'],
      ['London', '/areas/london'],
      ['Manchester', '/areas/manchester'],
      ['Edinburgh', '/areas/edinburgh'],
      ['Hampshire', '/areas/hampshire'],
      ['West Midlands', '/areas/west-midlands'],
      ['Cardiff', '/areas/cardiff'],
    ],
  },
  {
    title: 'Driving Content',
    links: [
      ['Help & Resources', '/resources'],
      ['Pratical Test', '/tests/practical'],
      ['Theory Test', '/tests/theory'],
      ['Course Guides', '/guides'],
      ['Driving Advice', '/advice'],
      ['Written in the Stars', '/blog'],
    ],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const reduceMotion = useReducedMotion();
  const reveal = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 36 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.1 },
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
      };

  return (
    <footer className="w-full text-left font-sans text-[#03064e]">
      <motion.section {...reveal} className="flex flex-wrap bg-[#2bcd5a]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full py-12 text-sm flex flex-row flex-wrap">
          <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-5 md:grid-rows-3 w-full p-2 gap-5 gap-x-10">
            {/* Phone + socials */}
            <div className="py-12 w-full order-1 md:order-2 md:col-span-2 flex flex-col items-center justify-center text-white">
              <a
                href="tel:03331234949"
                className="mb-4 text-center text-2xl font-bold text-white hover:underline underline-offset-2"
              >
                0333 123 4949
              </a>
              <ul className="flex gap-4">
                <li>
                  <a href="https://www.facebook.com/passmefast/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <div className="rounded-full bg-[#03064e] size-12 flex items-center justify-center text-white hover:opacity-50 transition-all">
                      <svg className="size-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/passmefast" target="_blank" rel="noopener noreferrer" aria-label="X">
                    <div className="rounded-full bg-[#03064e] size-12 flex items-center justify-center text-white hover:opacity-50 transition-all">
                      <svg className="size-5" viewBox="0 0 1200 1227" fill="none" aria-hidden="true">
                        <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" fill="white" />
                      </svg>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/passmefastuk/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <div className="rounded-full bg-[#03064e] size-12 flex items-center justify-center text-white hover:opacity-50 transition-all">
                      <svg className="size-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" />
                      </svg>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            {/* Link columns */}
            <div className="h-full w-full order-2 md:order-1 md:col-span-3 md:row-span-3 grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-10">
              {linkCols.map((col) => (
                <div key={col.title} className="border-b first:border-t py-3 border-white md:border-0 first:md:border-t-0">
                  <div className="flex justify-between uppercase flex-col w-full md:border-b md:border-white/80 md:pb-2">
                    <h3 className="font-bold text-white text-sm">{col.title}</h3>
                  </div>
                  <ul className="overflow-hidden flex flex-col gap-2">
                    {col.links.map(([label, href]) => (
                      <li key={label} className="w-full first-of-type:pt-3 last-of-type:pb-4">
                        <Link href={href} className="text-sm text-[#03064e] hover:underline underline-offset-2">
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Trustpilot + payments + legal */}
            <div className="w-full order-3 md:col-span-2 md:row-span-2 flex flex-col items-center gap-8">
              <a
                href="https://uk.trustpilot.com/review/passmefast.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg px-4 pt-3 pb-2 w-max flex items-center gap-2"
              >
                <span className="font-bold text-sm text-black underline">Excellent</span>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className="bg-[#00b67a] text-white px-1 text-[10px] leading-5">★</span>
                  ))}
                </div>
                <span className="font-bold text-xs text-black flex items-center gap-1">★ Trustpilot</span>
              </a>

              <div className="flex flex-wrap justify-center gap-3">
                <span className="bg-white px-2.5 py-1 rounded font-black text-xs text-[#1a1f71] italic">VISA</span>
                <span className="bg-white px-2.5 py-1 rounded font-bold text-xs text-[#eb001b]">mastercard</span>
                <span className="bg-white px-2.5 py-1 rounded font-bold text-xs text-[#006fcf]">AMEX</span>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="bg-white px-3 py-1 rounded font-extrabold text-xs text-black">Klarna.</span>
                <span className="bg-white px-3 py-1 rounded font-black text-xs text-[#00b5ad] italic">Payl8r</span>
                <span className="bg-white px-3 py-1 rounded font-bold text-xs text-black">Pay</span>
                <span className="bg-white px-3 py-1 rounded font-bold text-xs text-black">G Pay</span>
              </div>

              <div>
                <p className="text-sm text-white text-center mb-4 mt-5">*Klarna only available on purchases under £2,500</p>
                <p className="text-sm text-white text-center">
                  ** Subject to affordability assessments. STAR GENIE LTD T/A PASSMEFAST is an Introducer Appointed Representative of Social Money LTD t/a Payl8r who is authorised by the FCA under ref. 675283. Missed payments may affect your credit file, future borrowing and incur fees.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section {...reveal} className="border-t border-white bg-[#2bcd5a] text-sm font-semibold text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-wrap md:flex-nowrap items-center justify-between">
          <div className="w-full py-2 text-center md:text-left">
            <ul className="flex justify-center flex-col md:flex-row py-2 md:justify-start [&>li]:py-3 [&>li]:pr-4 md:[&>li]:py-0">
              <li><Link href="/terms" className="hover:underline underline-offset-2">Terms & Conditions</Link></li>
              <li><Link href="/complaints" className="hover:underline underline-offset-2">Complaints Policy</Link></li>
              <li><Link href="/privacy" className="hover:underline underline-offset-2">Privacy Notice</Link></li>
              <li><Link href="/cookies" className="hover:underline underline-offset-2">Cookie Policy</Link></li>
            </ul>
            <p className="py-2 text-center md:text-left">Star Genie Limited trading as PassMeFast. Company number 10093359.</p>
          </div>
          <div className="w-full pb-2 text-center md:text-right">
            <p className="py-2">Copyright © {currentYear} owned by Star Genie Limited</p>
            <p className="py-2">PassMeFast, 8 Exchange Quay, Salford, England, M5 3EJ</p>
          </div>
        </div>
      </motion.section>
    </footer>
  );
}
