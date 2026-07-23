// src/components/LandingSections.js
'use client';

export default function LandingSections() {
  // 1. Extra Benefits Data
  const benefits = [
    {
      id: 1,
      numColor: 'border-emerald-500 text-emerald-600 bg-emerald-50',
      title: 'Check your progress',
      description: (
        <>
          The <span className="font-bold text-emerald-600">Student Portal</span> is your go-to place for everything PassMeFast
        </>
      ),
      linkText: 'Download The Student Portal',
      href: '#student-portal',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 2,
      numColor: 'border-pink-500 text-pink-600 bg-pink-50',
      title: 'Get help from our experts',
      description: (
        <>
          Access <span className="font-bold text-pink-500">Online Tuition</span> and top resources — <span className="font-bold text-pink-500">PassMeTheory</span> boosts your chances of passing your theory test first time
        </>
      ),
      linkText: 'Learn More about PassMeTheory',
      href: '#passmetheory',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 3,
      numColor: 'border-cyan-500 text-cyan-600 bg-cyan-50',
      title: 'Driving lesson videos',
      description: (
        <>
          <span className="font-bold text-cyan-500">Expert driving advice</span> — any time, any place, from any smartphone or computer
        </>
      ),
      linkText: 'More About Driving Lesson Videos',
      href: '#lesson-videos',
      image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=600&q=80',
    },
  ];

  // 2. Lessons & Products Data
  const products = [
    {
      id: 1,
      title: 'Intensive driving courses',
      description:
        'Our courses are designed to get you behind the wheel faster, with structured lessons and expert instructors helping you start driving sooner.',
      btnText: 'Discover our courses',
      href: '#courses',
      icon: (
        <div className="relative w-20 h-20 flex items-center justify-center">
          <div className="absolute top-1 right-2 w-2 h-2 rounded-full bg-pink-400"></div>
          <div className="absolute bottom-2 left-1 w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
          <div className="absolute right-0 bottom-4 w-4 h-1 bg-cyan-400 rounded-full"></div>
          <svg className="w-16 h-16 text-[#041129]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="9" strokeWidth="1.5" />
            <circle cx="12" cy="12" r="3" strokeWidth="1.5" />
            <line x1="12" y1="3" x2="12" y2="9" strokeWidth="1.5" />
            <line x1="4" y1="15" x2="9.5" y2="13.5" strokeWidth="1.5" />
            <line x1="20" y1="15" x2="14.5" y2="13.5" strokeWidth="1.5" />
          </svg>
        </div>
      ),
    },
    {
      id: 2,
      title: 'Driving Test Alerts',
      description:
        'Long test waits stressing you out? Practical Test Assist sends real-time alerts for availability at your local test centre, so you can book a slot the moment you feel confident and ready to take your test.',
      btnText: 'Find out more',
      href: '#alerts',
      icon: (
        <div className="relative w-20 h-20 flex items-center justify-center">
          <div className="absolute top-1 right-4 w-2 h-2 rounded-full bg-pink-400"></div>
          <div className="absolute bottom-2 left-2 w-2.5 h-2.5 rounded-full bg-amber-400"></div>
          <svg className="w-16 h-16 text-[#041129]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
      ),
    },
    {
      id: 3,
      title: 'Multiple ways to pay',
      description:
        'Book today with an initial payment of only £375 or pay in full. We accept all major credit and debit cards plus American Express. Klarna* and Payl8r** available.',
      btnText: 'See payment options',
      href: '#payment-options',
      icon: (
        <div className="relative w-20 h-20 flex items-center justify-center">
          <div className="absolute top-1 left-3 w-2.5 h-2.5 rounded-full bg-amber-400"></div>
          <div className="absolute top-4 right-1 w-2 h-2 rounded-full bg-pink-400"></div>
          <div className="absolute top-3 right-6 w-1 h-3 bg-emerald-400 rounded-full"></div>
          <svg className="w-16 h-16 text-[#041129]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 8v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      ),
    },
  ];

  // 3. Locations List Data
  const locations = [
    'Birmingham',
    'Brighton',
    'Bristol',
    'Derby',
    'Doncaster',
    'Edinburgh',
    'Glasgow',
    'Huddersfield',
    'Leeds',
    'Liverpool',
    'London',
    'Manchester',
  ];

  return (
    <div className="bg-[#F8FAFC] text-slate-800 font-sans w-full overflow-hidden">

      {/* 1. TOP PINK STRIP */}
      <div className="h-[5px] bg-[#E91E63] w-full"></div>

      {/* 2. PAYMENT METHODS SECTION */}
      <section className="bg-white pt-8 pb-10 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-3">
          <div className="flex flex-col items-center justify-center bg-white border border-gray-200 rounded-xl w-[105px] h-[52px] shadow-sm">
            <svg className="w-5 h-3.5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <rect x="2" y="5" width="20" height="14" rx="2" strokeWidth="1.5" />
              <line x1="2" y1="10" x2="22" y2="10" strokeWidth="1.5" />
            </svg>
            <span className="text-[10px] font-bold text-gray-700 mt-1">Credit/Debit</span>
          </div>

          <div className="flex items-center justify-center bg-white border border-gray-200 rounded-xl w-[105px] h-[52px] shadow-sm">
            <span className="text-[#003087] font-black italic tracking-tighter text-base">
              Pay<span className="text-[#0079C1]">Pal</span>
            </span>
          </div>

          <div className="flex items-center justify-center bg-[#FFB3C7] rounded-xl w-[105px] h-[52px] shadow-sm">
            <span className="text-slate-900 font-black text-sm tracking-tight">Klarna.</span>
          </div>

          <div className="flex items-center justify-center bg-[#B2B0D6] rounded-xl w-[105px] h-[52px] shadow-sm">
            <span className="text-slate-900 font-black text-sm tracking-tight">Payl8r</span>
          </div>

          <div className="flex items-center justify-center bg-white border border-gray-200 rounded-xl w-[105px] h-[52px] shadow-sm">
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4 fill-slate-900" viewBox="0 0 170 170">
                <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.34.13-9.14-1.9-14.4-6.07-3.37-2.73-7.25-7.38-11.65-13.96-5.87-8.7-10.4-18.45-13.6-29.27-3.2-10.8-4.8-21.03-4.8-30.68 0-13.9 3.56-25.27 10.67-34.1 7.12-8.83 16.03-13.34 26.73-13.53 4.58 0 9.77 1.22 15.56 3.67 5.79 2.45 9.71 3.73 11.75 3.84 1.8.11 5.82-1.18 12.06-3.88 6.24-2.7 11.41-3.92 15.52-3.67 11.98.88 21.28 5.25 27.9 13.12-10.68 6.46-15.91 15.42-15.7 26.88.22 9.04 3.65 16.59 10.3 22.65 6.64 6.06 14.54 9.5 23.7 10.32-2.52 7.52-5.91 15.02-10.18 22.5zM119.22 31.84c0-6.75 2.45-13.41 7.35-19.98 4.9-6.57 11.13-10.87 18.69-12.91.54 1.3.81 2.5.81 3.59 0 6.64-2.52 13.33-7.56 20.08-5.04 6.75-11.23 10.97-18.57 12.67-.11-.98-.72-2.13-.72-3.45z"/>
              </svg>
              <span className="font-bold text-sm text-slate-900 tracking-tight">Pay</span>
            </div>
          </div>

          <div className="flex items-center justify-center bg-white border border-gray-200 rounded-xl w-[105px] h-[52px] shadow-sm">
            <span className="font-bold text-sm tracking-tight flex items-center gap-1">
              <span className="text-[#4285F4] font-black">G</span>
              <span className="text-gray-700 font-bold">Pay</span>
            </span>
          </div>
        </div>
      </section>

      {/* 3. COURSE RECOMMENDER BANNER */}
      <section className="bg-white py-12 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="max-w-2xl">
            <h2 className="text-xl sm:text-2xl lg:text-[25px] font-black text-[#041129] tracking-tight uppercase leading-tight mb-3">
              BOOK YOUR INTENSIVE DRIVING LESSONS TODAY WITH EXPERT INDEPENDENT INSTRUCTORS
            </h2>
            <p className="text-[#4B5563] text-xs sm:text-sm font-medium leading-relaxed max-w-xl">
              Take our quick and easy Course Recommender for a spin to find out exactly which course you need to get on the road
            </p>
          </div>

          <div className="shrink-0 pt-2 md:pt-0">
            <div className="p-[2.5px] rounded-full bg-gradient-to-r from-[#00D2FF] via-[#0072FF] to-[#10B981] inline-block shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_20px_rgba(0,210,255,0.5)] transition-all duration-300">
              <a
                href="#wizard"
                className="flex items-center gap-3 bg-[#02112B] hover:bg-[#051A3D] text-white text-xs sm:text-sm font-extrabold uppercase px-8 py-3.5 rounded-full transition-colors duration-200"
              >
                <span>TRY OUR COURSE RECOMMENDER</span>
                <span className="text-base font-normal">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EXTRA BENEFITS WITH PASSMEFAST */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-1.5 h-7 bg-[#00D2FF] rounded-full"></div>
          <h2 className="text-xl sm:text-2xl font-black text-[#041129] tracking-tight uppercase">
            EXTRA BENEFITS WITH PASSMEFAST
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div className="p-6 sm:p-8 flex-1">
                <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center font-bold text-base mb-5 ${card.numColor}`}>
                  {card.id}
                </div>

                <h3 className="text-xl font-extrabold text-[#041129] mb-3 tracking-tight">
                  {card.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                  {card.description}
                </p>

                <a
                  href={card.href}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#041129] hover:text-[#00D2FF] border-b-2 border-[#041129] pb-0.5 transition-colors duration-200"
                >
                  <span>{card.linkText}</span>
                  <span className="text-sm">›</span>
                </a>
              </div>

              <div className="relative h-48 sm:h-56 w-full bg-slate-100 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. OUR DRIVING LESSONS AND PRODUCTS */}
      <section className="pb-14 pt-2 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-1.5 h-7 bg-[#FFB800] rounded-full"></div>
          <h2 className="text-xl sm:text-2xl font-black text-[#041129] tracking-tight uppercase">
            OUR DRIVING LESSONS AND PRODUCTS
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8 flex flex-col justify-between items-center text-center transition-all duration-300 hover:shadow-md"
            >
              <div className="flex flex-col items-center w-full">
                <div className="mb-6 flex items-center justify-center">
                  {item.icon}
                </div>

                <h3 className="text-xl font-black text-[#041129] mb-4 tracking-tight">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal mb-8 max-w-xs">
                  {item.description}
                </p>
              </div>

              <a
                href={item.href}
                className="w-full bg-[#02112B] hover:bg-[#051A3D] text-white font-black text-xs sm:text-sm py-3.5 px-6 rounded-full flex items-center justify-center gap-2 transition-colors duration-200 uppercase tracking-wider"
              >
                <span>{item.btnText}</span>
                <span className="text-base font-normal">→</span>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* 6. FIND DRIVING LESSONS NEAR ME - EXACT PASSMEFAST FULL-WIDTH LAYOUT */}
      <section className="w-full bg-white py-12 px-6 sm:px-12 lg:px-20 border-t border-b border-gray-100 relative overflow-hidden">
        <div className="w-full relative min-h-[480px]">
          
          <div className="grid lg:grid-cols-12 gap-8 items-stretch relative z-10">
            
            {/* Left Column: Heading, Vector Map, and Overlaid Text */}
            <div className="lg:col-span-8 relative flex flex-col justify-between min-h-[440px]">
              
              {/* Heading */}
              <div className="flex items-center gap-3 z-20">
                <div className="w-1.5 h-7 bg-[#10B981] rounded-full"></div>
                <h2 className="text-xl sm:text-2xl font-black text-[#041129] tracking-tight uppercase">
                  FIND DRIVING LESSONS NEAR ME
                </h2>
              </div>

              {/* Full Background Map Graphic */}
              <div className="absolute inset-0 pointer-events-none flex items-center justify-start z-0 opacity-80 pl-2 sm:pl-10">
                <div className="relative w-full max-w-[550px] h-[450px]">
                  <svg className="w-full h-full text-emerald-100 fill-current" viewBox="0 0 300 400" preserveAspectRatio="xMinYMid meet">
                    <path d="M 120,20 C 140,20 150,30 160,50 C 170,70 180,90 190,110 C 200,130 210,150 220,170 C 230,190 220,220 200,240 C 180,260 170,280 150,300 C 130,320 110,300 100,280 C 90,260 100,240 110,220 C 120,200 100,180 90,160 C 80,140 90,120 100,100 C 110,80 100,40 120,20 Z" />
                  </svg>

                  {/* Green Pins */}
                  <span className="absolute top-[18%] left-[42%] w-4 h-4 sm:w-5 sm:h-5 bg-[#10B981] rounded-full border-2 border-white shadow-sm"></span>
                  <span className="absolute top-[28%] left-[50%] w-4 h-4 sm:w-5 sm:h-5 bg-[#10B981] rounded-full border-2 border-white shadow-sm"></span>
                  <span className="absolute top-[42%] left-[56%] w-4 h-4 sm:w-5 sm:h-5 bg-[#10B981] rounded-full border-2 border-white shadow-sm"></span>
                  <span className="absolute top-[48%] left-[62%] w-4 h-4 sm:w-5 sm:h-5 bg-[#10B981] rounded-full border-2 border-white shadow-sm"></span>
                  <span className="absolute top-[46%] left-[36%] w-4 h-4 sm:w-5 sm:h-5 bg-[#10B981] rounded-full border-2 border-white shadow-sm"></span>
                  <span className="absolute top-[58%] left-[52%] w-4 h-4 sm:w-5 sm:h-5 bg-[#10B981] rounded-full border-2 border-white shadow-sm"></span>
                  <span className="absolute top-[68%] left-[60%] w-4 h-4 sm:w-5 sm:h-5 bg-[#10B981] rounded-full border-2 border-white shadow-sm"></span>
                  <span className="absolute top-[70%] left-[48%] w-4 h-4 sm:w-5 sm:h-5 bg-[#10B981] rounded-full border-2 border-white shadow-sm"></span>

                  {/* Dark Navy Active Pin */}
                  <span className="absolute top-[44%] left-[46%] w-5 h-5 sm:w-6 sm:h-6 bg-[#02112B] rounded-full border-2 border-white shadow-md"></span>
                </div>
              </div>

              {/* Text Overlaid directly on top of the Map Graphic */}
              <div className="relative z-10 mt-auto max-w-md pt-28 text-slate-700 text-xs sm:text-sm leading-relaxed font-semibold">
                Our experienced instructors operate nationwide. So whether you're looking for intensive driving courses or{' '}
                <a href="#london" className="underline text-[#041129] decoration-slate-400 underline-offset-2 hover:text-[#10B981]">driving lessons</a> in{' '}
                <a href="#london" className="underline text-[#041129] decoration-slate-400 underline-offset-2 hover:text-[#10B981]">London</a>,{' '}
                <a href="#newcastle" className="underline text-[#041129] decoration-slate-400 underline-offset-2 hover:text-[#10B981]">Newcastle</a>,{' '}
                <a href="#norwich" className="underline text-[#041129] decoration-slate-400 underline-offset-2 hover:text-[#10B981]">Norwich</a>,{' '}
                <a href="#plymouth" className="underline text-[#041129] decoration-slate-400 underline-offset-2 hover:text-[#10B981]">Plymouth</a> or{' '}
                <a href="#preston" className="underline text-[#041129] decoration-slate-400 underline-offset-2 hover:text-[#10B981]">Preston</a>, find out more about learning to drive in your area.
              </div>

            </div>

            {/* Right Column: Cities List with Divider Lines & Pill CTA */}
            <div className="lg:col-span-4 flex flex-col justify-between pt-2">
              <div className="divide-y divide-slate-100">
                {locations.map((city, idx) => (
                  <a
                    key={idx}
                    href={`#${city.toLowerCase()}`}
                    className="block py-2.5 text-[#041129] text-sm sm:text-base font-medium hover:text-[#10B981] transition-colors"
                  >
                    {city}
                  </a>
                ))}
              </div>

              {/* Pink Pill Button */}
              <div className="mt-8">
                <a
                  href="#all-locations"
                  className="w-full bg-[#FF5A8D] hover:bg-[#ff437b] text-white font-extrabold text-sm py-3.5 px-6 rounded-full flex items-center justify-center gap-2 shadow-sm transition-colors tracking-wide"
                >
                  <span>All locations</span>
                  <span className="text-base font-normal">→</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}