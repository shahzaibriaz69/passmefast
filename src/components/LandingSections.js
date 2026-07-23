// src/components/LandingSections.js
'use client';

import React, { useState } from 'react';

export default function LandingSections() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const courseLevels = [
    {
      id: 1,
      title: 'Beginner Course',
      description:
        'Little driving experience but still want to get your licence fast? Our beginner courses could be perfect for you',
      image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80',
      btnText: 'See courses',
      href: '#beginner',
    },
    {
      id: 2,
      title: 'Intermediate Course',
      description:
        "You've almost mastered many of the fundamental skills, but still have a way to go before you're test-ready",
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
      btnText: 'See courses',
      href: '#intermediate',
    },
    {
      id: 3,
      title: 'Refresher Course',
      description:
        'If you are nearly test-ready but need to iron out a few issues, one of our refresher courses could be ideal for you',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
      btnText: 'See courses',
      href: '#refresher',
    },
  ];

  const faqs = [
    {
      question: 'Why take driving lessons with PassMeFast?',
      answer: 'PassMeFast offers intensive and semi-intensive driving courses designed to get you on the road quickly and safely with top-rated instructors.'
    },
    {
      question: 'How do I book with PassMeFast?',
      answer: 'You can book online through our course selector or give our friendly team a call to choose your preferred course and start date.'
    },
    {
      question: 'Is the first driving lesson really scary?',
      answer: 'Not at all! Your instructor will guide you step-by-step in a quiet area to ensure you feel safe and comfortable behind the wheel.'
    },
    {
      question: 'How are the courses structured?',
      answer: 'Our courses are structured into blocks of lessons tailored to your schedule, whether you want an intensive fast-track or semi-intensive approach.'
    },
    {
      question: 'Which course is right for me?',
      answer: 'We offer courses for beginners, intermediate learners, and those needing a quick refresher based on your prior driving experience.'
    },
    {
      question: 'Is 20 hours of driving lessons enough?',
      answer: 'For intermediate learners with previous experience, 20 hours is often ideal. Beginners typically need 40 to 45 hours.'
    },
    {
      question: 'Can I pass my driving test in 2 weeks?',
      answer: 'Yes, with our intensive fast-track courses, many students complete their lessons and test within 2 to 3 weeks.'
    },
    {
      question: 'Are you guaranteed to pass on a crash course?',
      answer: 'While no company can guarantee a pass, our structured learning and high pass rates give you the best possible chance of succeeding.'
    },
    {
      question: 'How many lessons will I need to pass my test?',
      answer: 'The average learner requires around 40-45 hours of professional instruction, but it depends on your existing confidence and skills.'
    },
    {
      question: 'How many driving instructors do PassMeFast work with?',
      answer: 'We work with a nationwide network of over 5,000 DVSA-approved driving instructors across the UK.'
    },
    {
      question: 'Should I learn to drive in a manual or automatic car?',
      answer: 'Manual gives you a full license to drive both types, while automatic is generally easier to learn if you struggle with gears.'
    },
    {
      question: 'Do you help with theory test revision?',
      answer: 'Yes! We provide resources, fast-tracked theory test bookings, and guidance to help you pass your theory test smoothly.'
    }
  ];

  return (
    <section className="bg-[#f2f4f7] pt-10 pb-0 px-0 w-full font-sans text-left">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-16">
        
        {/* Header Title with Orange Bar */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-[6px] h-7 bg-[#ff9900] rounded-xs shrink-0"></div>
          <h2 className="text-xl sm:text-[22px] font-black text-[#000839] tracking-tight uppercase">
            WHAT'S THE BEST COURSE OF DRIVING LESSONS FOR ME?
          </h2>
        </div>

        {/* Paragraph Description */}
        <p className="text-[#333a48] text-[14px] sm:text-[15px] leading-relaxed mb-8 max-w-[1150px] font-normal">
          Discover the options available to you when you book{' '}
          <a
            href="#lessons"
            className="text-[#40d279] hover:underline font-medium"
          >
            driving lessons
          </a>{' '}
          with PassMeFast. Whether you're a{' '}
          <a
            href="#beginner"
            className="text-[#40d279] hover:underline font-medium"
          >
            beginner starting your driving lessons
          </a>{' '}
          for the first time, intermediate or you're nearly test ready, we have a course for you. The hours of driving lessons that learners need vary for every individual e.g. a beginner may need 45 hours, an intermediate learner 25 hours and a refresher 15 hours although this is subject to experience and practice.
        </p>

        {/* 3 Top Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {courseLevels.map((card) => (
            <div
              key={card.id}
              className="rounded-[24px] overflow-hidden flex flex-col bg-[#020626] shadow-sm"
            >
              <div className="h-[230px] w-full overflow-hidden shrink-0">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover object-center rounded-t-[24px]"
                />
              </div>

              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between text-white">
                <div>
                  <h3 className="text-xl font-bold mb-3 tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-[#c3c8d4] text-[13px] leading-relaxed font-normal mb-8">
                    {card.description}
                  </p>
                </div>

                <a
                  href={card.href}
                  className="w-full bg-[#ff5288] hover:bg-[#f04379] text-white font-bold text-sm py-3 px-6 rounded-full flex items-center justify-center gap-2 transition-colors duration-200"
                >
                  <span>{card.btnText}</span>
                  <span className="text-base font-normal">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Horizontal Banner */}
        <div className="rounded-[24px] overflow-hidden bg-[#020626] grid md:grid-cols-12 shadow-sm min-h-[320px]">
          <div className="md:col-span-6 h-[260px] md:h-auto overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80"
              alt="Driving Instructors Network"
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="md:col-span-6 p-7 sm:p-10 lg:p-12 text-white flex flex-col justify-center">
            <h3 className="text-2xl sm:text-[28px] font-bold mb-3 tracking-tight leading-snug">
              Biggest national network of driving instructors
            </h3>
            
            <p className="text-[#c3c8d4] text-[13px] leading-relaxed font-normal mb-8 max-w-lg">
              Our network of over 5,000 experienced driving instructors is one of the largest in the UK. Find a driving instructor with PassMeFast in your local area to get you motoring.
            </p>

            <div>
              <a
                href="#courses"
                className="w-full sm:w-auto inline-flex bg-[#ff5288] hover:bg-[#f04379] text-white font-bold text-sm py-3 px-8 rounded-full items-center justify-center gap-2 transition-colors duration-200"
              >
                <span>See courses</span>
                <span className="text-base font-normal">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* FAQ Accordion Section */}
        <div className="mt-16 text-left">
          <h2 className="text-xl sm:text-2xl font-black text-[#000839] tracking-tight uppercase mb-6">
            COMMON QUESTIONS ABOUT OUR DRIVING LESSONS AND DRIVING INSTRUCTORS
          </h2>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#f0f3f8] hover:bg-[#e8edf5] rounded-xl border border-gray-200/60 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full py-4 px-6 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="text-[#000839] font-bold text-sm sm:text-base">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-[#000839] transition-transform duration-200 shrink-0 ml-4 ${
                      openFaqIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {openFaqIndex === index && (
                  <div className="px-6 pb-4 text-[#333a48] text-sm leading-relaxed border-t border-gray-200/40 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm text-[#333a48] font-normal mb-12">
            Got any more questions? Read all our FAQs on our{' '}
            <a
              href="#faqs"
              className="text-[#36d075] hover:underline font-medium"
            >
              Frequently Asked Questions.
            </a>
          </p>
        </div>

      </div>

      {/* Full-width Fast-Track Banner Matching Exact Screenshot */}
      <div className="w-full relative overflow-hidden bg-gradient-to-r from-[#008ba0] via-[#008a47] to-[#00ce52] text-white min-h-[300px] flex items-center mt-10">
        
        {/* Background Graphic Diagonal Streaks */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Top-Left Cyan Streak */}
          <div className="absolute top-6 left-12 w-28 h-2 bg-[#00d8f6] rotate-[-22deg] rounded-full opacity-80"></div>
          {/* Middle Long Yellow Streak */}
          <div className="absolute top-[30%] left-[20%] w-[380px] h-[7px] bg-[#e6b325] rotate-[-21deg] rounded-full opacity-90"></div>
          {/* Bottom Left Small Yellow Streak */}
          <div className="absolute bottom-10 left-10 w-32 h-[6px] bg-[#e6b325] rotate-[-21deg] rounded-full opacity-90"></div>
          {/* Bottom Center Light Cyan Streak */}
          <div className="absolute bottom-12 left-[15%] w-28 h-[6px] bg-[#a8f3ff] rotate-[-21deg] rounded-full opacity-90"></div>
          {/* Right Top Green-Yellow Streak */}
          <div className="absolute top-8 right-[10%] w-[220px] h-[6px] bg-[#b8f522] rotate-[-21deg] rounded-full opacity-90"></div>
          {/* Right Bottom Orange Streak */}
          <div className="absolute bottom-14 right-[3%] w-[160px] h-[6px] bg-[#e6b325] rotate-[-21deg] rounded-full opacity-90"></div>
        </div>

        {/* Content Container */}
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-16 w-full py-8 z-10">
          <div className="grid md:grid-cols-12 items-center gap-6">
            
            {/* Left Content */}
            <div className="md:col-span-6 lg:col-span-7 flex flex-col items-start">
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold leading-[1.15] tracking-tight mb-8 text-white max-w-lg">
                Get in the fast lane with an intensive driving course
              </h2>
              
              <a
                href="#fast-track"
                className="bg-[#ff5b92] hover:bg-[#e04a7e] text-white font-extrabold text-xs sm:text-sm tracking-wider uppercase py-3.5 px-8 rounded-full shadow-lg transition-transform active:scale-95 duration-150 inline-block"
              >
                FAST-TRACK ME
              </a>
            </div>

            {/* Right Car Graphic */}
            <div className="md:col-span-6 lg:col-span-5 flex justify-center md:justify-end relative">
              <img
                src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80"
                alt="PassMeFast Car"
                className="w-full max-w-[460px] object-contain filter drop-shadow-[0_15px_15px_rgba(0,0,0,0.3)]"
              />
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Bright Green Bar */}
      <div className="w-full h-10 bg-[#2bd864]"></div>

    </section>
  );
}