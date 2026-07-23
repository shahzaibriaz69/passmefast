// src/components/Navbar.jsx
'use client';

import React, { useState } from 'react';

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null); // 'courses' | 'resources' | 'instructors' | 'areas' | null

  return (
    <header className="relative w-full bg-white z-50 font-sans border-b border-gray-100 select-none">
      
      {/* 1. TOP MAIN BAR */}
      <div className="max-w-[1240px] mx-auto px-6 h-[88px] flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-2.5 cursor-pointer">
          <div className="w-11 h-11 bg-[#22c55e] text-white rounded-md flex items-center justify-center font-black text-2xl tracking-tighter">
            P
          </div>
          <div className="flex flex-col">
            <span className="text-[#000839] font-black text-2xl tracking-tight leading-none">
              PASS<span className="text-[#22c55e]">ME</span>FAST
            </span>
            <span className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest mt-1">
              YOUR <span className="text-[#22c55e]">FASTER</span> ROUTE TO DRIVING
            </span>
          </div>
        </div>

        {/* Right Info & Actions */}
        <div className="flex items-center gap-6">
          <a href="tel:03331234949" className="text-[#000839] font-black text-2xl tracking-tight hover:opacity-80">
            0333 123 4949
          </a>
          <div className="w-[42px] h-[42px] rounded-full border-[1.5px] border-gray-300 flex items-center justify-center text-[#000839] cursor-pointer hover:bg-gray-50">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <button className="bg-[#ff528c] hover:bg-[#e0457b] text-white font-extrabold text-xs tracking-wider px-6 py-3.5 rounded-full shadow-sm uppercase transition-all">
            FAST-TRACK ME
          </button>
        </div>
      </div>

      {/* 2. SECONDARY NAVIGATION BAR */}
      <div className="border-t border-gray-200 bg-white">
        <div className="max-w-[1240px] mx-auto px-6 h-12 flex items-center justify-start gap-12 text-[13px] font-black tracking-wide text-[#000839] relative">
          
          {/* MENU 1: OUR COURSES & PRICES */}
          <div 
            className="py-3 cursor-pointer"
            onMouseEnter={() => setActiveMenu('courses')}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <span className={`uppercase tracking-wider pb-1 transition-all border-b-2 ${activeMenu === 'courses' ? 'border-[#000839]' : 'border-transparent'}`}>
              OUR COURSES & PRICES
            </span>

            {/* DROPDOWN 1 OVERLAY */}
            {activeMenu === 'courses' && (
              <div className="absolute top-[48px] left-0 w-[940px] bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100 p-8 z-50 cursor-default">
                <div className="flex justify-between gap-6">
                  
                  {/* Left Column: What we offer */}
                  <div className="w-[260px]">
                    <h3 className="font-extrabold text-[#000839] text-[15px] mb-4">What we offer</h3>
                    <ul className="space-y-2.5 text-[13px] font-bold text-[#000839]">
                      <li className="hover:text-[#22c55e] cursor-pointer">Course Recommender</li>
                      <li className="hover:text-[#22c55e] cursor-pointer">Driving Lessons</li>
                      <li className="hover:text-[#22c55e] cursor-pointer">Manual Driving Lessons</li>
                      <li className="hover:text-[#22c55e] cursor-pointer">Automatic Driving Lessons</li>
                      <li className="hover:text-[#22c55e] cursor-pointer">Beginners Driving Lessons</li>
                      <li className="hover:text-[#22c55e] cursor-pointer">Refresher Driving Lessons</li>
                      <li className="hover:text-[#22c55e] cursor-pointer">Semi Intensive Driving Lessons</li>
                      <li className="hover:text-[#22c55e] cursor-pointer">Motorway Driving Lessons</li>
                      <li className="hover:text-[#22c55e] cursor-pointer">PassProtect</li>
                      <li className="hover:text-[#22c55e] cursor-pointer">Practical Test Assist</li>
                      <li className="hover:text-[#22c55e] cursor-pointer">Student, Youth and Apprentice</li>
                      <li className="hover:text-[#22c55e] cursor-pointer">First Driving Lesson</li>
                    </ul>
                  </div>

                  {/* Middle Column: Our Driving Courses */}
                  <div className="w-[200px]">
                    <h3 className="font-extrabold text-[#000839] text-[15px] mb-4">Our Driving Courses</h3>
                    <ul className="space-y-2.5 text-[13px] font-bold text-[#000839]">
                      <li className="hover:text-[#22c55e] cursor-pointer">10 Hour Course</li>
                      <li className="hover:text-[#22c55e] cursor-pointer">15 Hour Course</li>
                      <li className="hover:text-[#22c55e] cursor-pointer">20 Hour Course</li>
                      <li className="hover:text-[#22c55e] cursor-pointer">25 Hour Course</li>
                      <li className="hover:text-[#22c55e] cursor-pointer">30 Hour Course</li>
                      <li className="hover:text-[#22c55e] cursor-pointer">35 Hour Course</li>
                      <li className="hover:text-[#22c55e] cursor-pointer">40 Hour Course</li>
                      <li className="hover:text-[#22c55e] cursor-pointer">48 Hour Course</li>
                    </ul>
                  </div>

                  {/* Right Column: Green Card Box */}
                  <div className="w-[410px] bg-[#22c55e] rounded-xl p-3 flex flex-col justify-center">
                    <div className="bg-[#f2faf5] rounded-lg p-6 text-center flex flex-col items-center justify-between h-[300px] relative mt-4">
                      
                      <div className="w-12 h-12 bg-white rounded-full border-2 border-[#000839] flex items-center justify-center absolute -top-6 shadow-sm">
                        <svg className="w-6 h-6 text-[#000839]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="9" strokeWidth="2" />
                          <path strokeLinecap="round" strokeWidth="2" d="M12 7v5l3 3" />
                        </svg>
                      </div>

                      <div className="mt-4">
                        <h4 className="font-black text-[#000839] text-base tracking-wide uppercase mb-3">
                          BUILD YOUR CONFIDENCE
                        </h4>
                        <p className="text-[13px] font-bold text-[#000839] leading-relaxed max-w-[280px] mx-auto">
                          Take the stress out of test day with PassProtect - our dedicated driving lesson support package
                        </p>
                      </div>

                      <button className="bg-[#ff528c] hover:bg-[#e0457b] text-white font-extrabold text-xs px-7 py-3 rounded-full uppercase tracking-wider shadow-sm transition-all">
                        Find out More
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            )}
          </div>

          {/* MENU 2: RESOURCES */}
          <div 
            className="py-3 cursor-pointer"
            onMouseEnter={() => setActiveMenu('resources')}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <span className={`uppercase tracking-wider pb-1 transition-all border-b-2 ${activeMenu === 'resources' ? 'border-[#000839]' : 'border-transparent'}`}>
              RESOURCES
            </span>

            {/* DROPDOWN 2 OVERLAY */}
            {activeMenu === 'resources' && (
              <div className="absolute top-[48px] left-[-160px] w-[960px] bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100 p-8 z-50 cursor-default">
                <div className="grid grid-cols-3 gap-8">
                  
                  {/* Column 1 */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-extrabold text-[#000839] text-[15px] mb-3">Learning to Drive</h3>
                      <ul className="space-y-2.5 text-[13px] font-bold text-[#000839]">
                        <li className="hover:text-[#22c55e] cursor-pointer">The Complete Guide to Learning to Drive</li>
                        <li className="hover:text-[#22c55e] cursor-pointer">Can You Learn to Drive in Your Own Car?</li>
                        <li className="hover:text-[#22c55e] cursor-pointer">Practising Driving: What You Need to Know</li>
                        <li className="hover:text-[#22c55e] cursor-pointer">What Will My First Driving Lesson Be Like</li>
                        <li className="hover:text-[#22c55e] cursor-pointer">What's the Best Car to Learn to Drive in?</li>
                        <li className="hover:text-[#22c55e] cursor-pointer">5 Ways to Speed Up Learning to Drive</li>
                        <li className="hover:text-[#22c55e] cursor-pointer">Mock Driving Tests</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-extrabold text-[#000839] text-[15px] mb-3">Manoeuvres</h3>
                      <ul className="space-y-2.5 text-[13px] font-bold text-[#000839]">
                        <li className="hover:text-[#22c55e] cursor-pointer">Emergency Stop</li>
                        <li className="hover:text-[#22c55e] cursor-pointer">Bay Parking</li>
                        <li className="hover:text-[#22c55e] cursor-pointer">Reversing Around A Corner</li>
                        <li className="hover:text-[#22c55e] cursor-pointer">Parallel Parking</li>
                        <li className="hover:text-[#22c55e] cursor-pointer">Pulling Over Safely</li>
                      </ul>
                    </div>
                  </div>

                  {/* Column 2 */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-extrabold text-[#000839] text-[15px] mb-3">Ready to drive</h3>
                      <ul className="space-y-2.5 text-[13px] font-bold text-[#000839]">
                        <li className="hover:text-[#22c55e] cursor-pointer">Applying for your Provisional Driving Licence</li>
                        <li className="hover:text-[#22c55e] cursor-pointer">Can I Get Financial Help with Driving Lessons?</li>
                        <li className="hover:text-[#22c55e] cursor-pointer">Automatic vs. Manual - Which is Best?</li>
                        <li className="hover:text-[#22c55e] cursor-pointer">How Much Does It Cost To Learn To Drive?</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-extrabold text-[#000839] text-[15px] mb-3">Rules of the road</h3>
                      <ul className="space-y-2.5 text-[13px] font-bold text-[#000839]">
                        <li className="hover:text-[#22c55e] cursor-pointer">UK Road Markings Explained</li>
                        <li className="hover:text-[#22c55e] cursor-pointer">Who Has Right of Way at a Junction?</li>
                        <li className="hover:text-[#22c55e] cursor-pointer">Overtaking and Undertaking</li>
                        <li className="hover:text-[#22c55e] cursor-pointer">Single vs Double Yellow Lines</li>
                        <li className="hover:text-[#22c55e] cursor-pointer">On-Street Parking Rules Explained</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-extrabold text-[#000839] text-[15px] mb-3">Driving licence</h3>
                      <ul className="space-y-2.5 text-[13px] font-bold text-[#000839]">
                        <li className="hover:text-[#22c55e] cursor-pointer">What Vehicles Can You Drive With Your Licence?</li>
                      </ul>
                    </div>
                  </div>

                  {/* Column 3 */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-extrabold text-[#000839] text-[15px] mb-3">Theory test</h3>
                      <ul className="space-y-2.5 text-[13px] font-bold text-[#000839]">
                        <li className="hover:text-[#22c55e] cursor-pointer">Should I Take My Theory Test First?</li>
                        <li className="hover:text-[#22c55e] cursor-pointer">How Do I Know I'm Ready?</li>
                        <li className="hover:text-[#22c55e] cursor-pointer">How I Passed the Theory Test First Time</li>
                        <li className="hover:text-[#22c55e] cursor-pointer">Hazard Perception: Dos and Don'ts</li>
                        <li className="hover:text-[#22c55e] cursor-pointer">Different Types of Motorway Signs</li>
                        <li className="hover:text-[#22c55e] cursor-pointer">My Theory Test Is About to Expire!</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-extrabold text-[#000839] text-[15px] mb-3">Practical test</h3>
                      <ul className="space-y-2.5 text-[13px] font-bold text-[#000839]">
                        <li className="hover:text-[#22c55e] cursor-pointer">What Happens After a Driving Test?</li>
                        <li className="hover:text-[#22c55e] cursor-pointer">What Happens In A Driving Test?</li>
                        <li className="hover:text-[#22c55e] cursor-pointer">How to Appeal a Driving Test</li>
                        <li className="hover:text-[#22c55e] cursor-pointer">Driving Test Cancellations</li>
                        <li className="hover:text-[#22c55e] cursor-pointer">Driving Test Examiners</li>
                        <li className="hover:text-[#22c55e] cursor-pointer">Driving Test Faults Explained</li>
                      </ul>
                    </div>
                  </div>

                </div>
              </div>
            )}
          </div>

          {/* MENU 3: INSTRUCTORS */}
          <div 
            className="py-3 cursor-pointer relative"
            onMouseEnter={() => setActiveMenu('instructors')}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <span className={`uppercase tracking-wider pb-1 transition-all border-b-2 ${activeMenu === 'instructors' ? 'border-[#000839]' : 'border-transparent'}`}>
              INSTRUCTORS
            </span>

            {/* DROPDOWN 3 OVERLAY */}
            {activeMenu === 'instructors' && (
              <div className="absolute top-[48px] left-1/2 -translate-x-1/2 w-[1080px] bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100 p-8 z-50 cursor-default">
                <div className="flex justify-between gap-8">
                  
                  {/* Column 1: Become an instructor */}
                  <div className="w-[260px]">
                    <h3 className="font-extrabold text-[#000839] text-[15px] mb-4">Become an instructor</h3>
                    <ul className="space-y-2.5 text-[13px] font-bold text-[#000839]">
                      <li className="hover:text-[#22c55e] cursor-pointer">How to become an ADI</li>
                      <li className="hover:text-[#22c55e] cursor-pointer">Get work from PassMeFast</li>
                      <li className="hover:text-[#22c55e] cursor-pointer">Instructor Login</li>
                    </ul>
                  </div>

                  {/* Column 2: Finding an instructor */}
                  <div className="w-[340px]">
                    <h3 className="font-extrabold text-[#000839] text-[15px] mb-4">Finding an instructor</h3>
                    <ul className="space-y-2.5 text-[13px] font-bold text-[#000839]">
                      <li className="hover:text-[#22c55e] cursor-pointer">Choosing a Driving Instructor</li>
                      <li className="hover:text-[#22c55e] cursor-pointer">Checking that your instructor is DVSA Approved</li>
                      <li className="hover:text-[#22c55e] cursor-pointer">5 signs of a bad driving instructor</li>
                      <li className="hover:text-[#22c55e] cursor-pointer">Driving instructor qualities</li>
                      <li className="hover:text-[#22c55e] cursor-pointer">About PMF instructors</li>
                      <li className="hover:text-[#22c55e] cursor-pointer">Automatic driving instructors</li>
                      <li className="hover:text-[#22c55e] cursor-pointer">Checking an instructor's pass rate</li>
                      <li className="hover:text-[#22c55e] cursor-pointer">Female Driving Instructors</li>
                      <li className="hover:text-[#22c55e] cursor-pointer">All Driving Instructor Resources</li>
                    </ul>
                  </div>

                  {/* Column 3: Award Banner Card */}
                  <div className="w-[420px] bg-[#22c55e] rounded-xl p-3 flex flex-col justify-center">
                    <div className="bg-[#f2faf5] rounded-lg p-6 text-center flex flex-col items-center justify-between min-h-[320px]">
                      
                      {/* Award Badge Details */}
                      <div className="flex flex-col items-center py-2">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-10 h-10 rounded-full bg-[#b91c1c] text-white flex items-center justify-center font-serif text-xl font-bold">
                            II
                          </div>
                          <div className="text-left leading-tight">
                            <span className="block font-serif text-xl italic tracking-tight text-[#000839]">Intelligent</span>
                            <span className="block font-black text-2xl tracking-tight text-[#000839] uppercase -mt-1">Instructor</span>
                          </div>
                        </div>

                        <span className="font-serif text-2xl italic font-bold text-[#d97706] tracking-wide mt-1">
                          Awards 2025
                        </span>
                        <span className="text-3xl font-black text-[#d97706] tracking-widest uppercase">
                          GOLD
                        </span>
                        <span className="text-[13px] font-serif italic text-[#d97706] mt-0.5">
                          Professional Support Provider of the Year
                        </span>
                      </div>

                      {/* Bottom Box & CTA Link */}
                      <div className="border-t border-gray-200 pt-3 w-full">
                        <p className="text-[13px] font-black text-[#000839] leading-snug mb-1.5 px-2">
                          Are you an instructor looking to build your business?
                        </p>
                        <a href="#" className="text-[13px] font-extrabold text-[#000839] underline decoration-[#000839] hover:text-[#22c55e] transition-colors">
                          Register or login <span className="font-semibold text-gray-700">to our industry leading portal</span>
                        </a>
                      </div>

                    </div>
                  </div>

                </div>
              </div>
            )}
          </div>

          {/* MENU 4: AREAS WE COVER */}
          <div 
            className="py-3 cursor-pointer relative"
            onMouseEnter={() => setActiveMenu('areas')}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <span className={`uppercase tracking-wider pb-1 transition-all border-b-2 ${activeMenu === 'areas' ? 'border-[#000839]' : 'border-transparent'}`}>
              AREAS WE COVER
            </span>

            {/* DROPDOWN 4 OVERLAY */}
            {activeMenu === 'areas' && (
              <div className="absolute top-[48px] left-1/2 -translate-x-1/2 w-[1080px] bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100 p-8 z-50 cursor-default">
                <div className="grid grid-cols-3 gap-10 text-[13px]">
                  
                  {/* Column 1: London & North West */}
                  <div className="space-y-6">
                    <div>
                      <ul className="space-y-2 font-bold text-[#000839]">
                        <li className="hover:text-[#22c55e] cursor-pointer">Hounslow</li>
                        <li className="hover:text-[#22c55e] cursor-pointer">Kingston-upon-Thames</li>
                        <li className="hover:text-[#22c55e] cursor-pointer">London</li>
                        <li className="hover:text-[#22c55e] cursor-pointer">North London</li>
                        <li className="hover:text-[#22c55e] cursor-pointer">South London</li>
                        <li className="hover:text-[#22c55e] cursor-pointer">West London</li>
                        <li className="hover:text-[#22c55e] cursor-pointer">All areas</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-extrabold text-[#000839] text-[15px] mb-3">North West</h3>
                      <ul className="space-y-2 font-bold text-[#000839]">
                        <li className="hover:text-[#22c55e] cursor-pointer">Crewe</li>
                        <li className="hover:text-[#22c55e] cursor-pointer">Liverpool</li>
                        <li className="hover:text-[#22c55e] cursor-pointer">Manchester</li>
                        <li className="hover:text-[#22c55e] cursor-pointer">Warrington</li>
                        <li className="hover:text-[#22c55e] cursor-pointer">Wigan</li>
                        <li className="hover:text-[#22c55e] cursor-pointer">All areas</li>
                      </ul>
                    </div>
                  </div>

                  {/* Column 2: Midlands & Yorkshire */}
                  <div className="space-y-6">
                    <div>
                      <ul className="space-y-2 font-bold text-[#000839]">
                        <li className="hover:text-[#22c55e] cursor-pointer">Leicester</li>
                        <li className="hover:text-[#22c55e] cursor-pointer">Northampton</li>
                        <li className="hover:text-[#22c55e] cursor-pointer">Nottingham</li>
                        <li className="hover:text-[#22c55e] cursor-pointer">Stoke-on-Trent</li>
                        <li className="hover:text-[#22c55e] cursor-pointer">Walsall</li>
                        <li className="hover:text-[#22c55e] cursor-pointer">Warwick</li>
                        <li className="hover:text-[#22c55e] cursor-pointer">Wolverhampton</li>
                        <li className="hover:text-[#22c55e] cursor-pointer">All areas</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-extrabold text-[#000839] text-[15px] mb-3">Yorkshire</h3>
                      <ul className="space-y-2 font-bold text-[#000839]">
                        <li className="hover:text-[#22c55e] cursor-pointer">Bradford</li>
                        <li className="hover:text-[#22c55e] cursor-pointer">Doncaster</li>
                        <li className="hover:text-[#22c55e] cursor-pointer">Halifax</li>
                        <li className="hover:text-[#22c55e] cursor-pointer">Huddersfield</li>
                        <li className="hover:text-[#22c55e] cursor-pointer">Hull</li>
                        <li className="hover:text-[#22c55e] cursor-pointer">Leeds</li>
                        <li className="hover:text-[#22c55e] cursor-pointer">Rotherham</li>
                        <li className="hover:text-[#22c55e] cursor-pointer">Sheffield</li>
                        <li className="hover:text-[#22c55e] cursor-pointer">York</li>
                      </ul>
                    </div>
                  </div>

                  {/* Column 3: Southampton & Other Areas */}
                  <div className="space-y-6">
                    <div>
                      <ul className="space-y-2 font-bold text-[#000839]">
                        <li className="hover:text-[#22c55e] cursor-pointer">Southampton</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-extrabold text-[#000839] text-[15px] mb-3">Other Areas</h3>
                      <ul className="space-y-2 font-bold text-[#000839]">
                        <li className="hover:text-[#22c55e] cursor-pointer">All Counties and Locations</li>
                        <li className="hover:text-[#22c55e] cursor-pointer">Bristol</li>
                        <li className="hover:text-[#22c55e] cursor-pointer">Cornwall</li>
                        <li className="hover:text-[#22c55e] cursor-pointer">Reading</li>
                        <li className="hover:text-[#22c55e] cursor-pointer">Tyne and Wear</li>
                      </ul>
                    </div>
                  </div>

                </div>
              </div>
            )}
          </div>

          <span className="uppercase tracking-wider hover:text-[#22c55e] cursor-pointer py-3">HELP & SUPPORT</span>

        </div>
      </div>

    </header>
  );
}