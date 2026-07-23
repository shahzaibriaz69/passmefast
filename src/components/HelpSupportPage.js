// src/components/HelpSupportPage.jsx
'use client';

import React from 'react';

export default function HelpSupportPage() {
  return (
    <div className="w-full bg-white font-sans text-[#000839]">
      
      {/* 1. TOP YELLOW DISCOUNT ANNOUNCEMENT BAR */}
      <div className="bg-[#d2b158] text-[#000839] text-[13px] font-bold py-2.5 px-4 flex items-center justify-center gap-2 relative">
        <span className="text-base">🏷️</span>
        <span>Get an extra 5% (up to £200) off your course at point of purchase when you pay in full today!</span>
        <button className="absolute right-4 text-xs font-black hover:opacity-70">✕</button>
      </div>

      {/* 2. DARK BLUE FEATURE ICONS STRIP */}
      <div className="bg-[#0c1630] text-white py-3 px-6 border-t border-blue-900/40">
        <div className="max-w-[1240px] mx-auto flex flex-wrap items-center justify-between text-xs font-bold gap-4">
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-full border border-white/40 flex items-center justify-center text-[10px]">✔</span>
            <span>Practical Test Assist</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-full border border-white/40 flex items-center justify-center text-[10px]">£</span>
            <span>Money Back Guarantee</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-full border border-white/40 flex items-center justify-center text-[10px]">🔄</span>
            <span>Flexible Courses</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-full border border-white/40 flex items-center justify-center text-[10px]">💳</span>
            <span>Multiple Ways To Pay</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-full border border-white/40 flex items-center justify-center text-[10px]">⭐</span>
            <span>Excellent on Trustpilot</span>
          </div>
        </div>
      </div>

      {/* 3. MAIN SECTION: CONTACT US */}
      <section className="py-12 px-6 text-center max-w-[900px] mx-auto">
        <h1 className="text-3xl font-black uppercase tracking-tight mb-4">CONTACT US</h1>
        <p className="text-xs font-semibold text-gray-600 mb-6">
          Current Students, if you booked after 1st July 2023, please visit the Help Centre in your Student Portal.
        </p>
        
        <button className="bg-[#ff528c] hover:bg-[#e0457b] text-white font-black text-xs px-8 py-3.5 rounded-full uppercase tracking-wider shadow-sm transition-all mb-6">
          GO TO HELP CENTRE
        </button>

        <div className="flex items-center justify-center gap-4 text-xs font-bold uppercase tracking-wider text-[#000839]">
          <span className="underline cursor-pointer hover:text-[#22c55e]">CURRENT STUDENTS</span>
          <span className="text-gray-300">|</span>
          <span className="underline cursor-pointer hover:text-[#22c55e]">NEW CUSTOMERS</span>
        </div>
      </section>

      {/* 4. NEED MORE INFORMATION / FAQ SECTION */}
      <section className="py-10 px-6 text-center max-w-[800px] mx-auto border-t border-gray-100">
        <h2 className="text-xl font-black uppercase tracking-tight mb-2">NEED MORE INFORMATION?</h2>
        <h3 className="text-sm font-extrabold uppercase tracking-wide mb-4">VISIT OUR FREQUENTLY ASKED QUESTIONS PAGE</h3>
        
        <p className="text-xs font-medium text-gray-500 leading-relaxed mb-6 max-w-[650px] mx-auto">
          For answers to common questions about courses, pricing, theory tests, practical test assist and booking support, visit our FAQs section online.<br />
          Our FAQs are designed to give learners quick, clear guidance throughout their driving journey.
        </p>

        <button className="bg-[#ff528c] hover:bg-[#e0457b] text-white font-black text-xs px-8 py-3.5 rounded-full uppercase tracking-wider shadow-sm transition-all">
          GO TO FREQUENTLY ASKED QUESTIONS
        </button>
      </section>

      {/* 5. CURRENT STUDENTS SECTION */}
      <section className="bg-[#f2faf5] py-14 px-6 border-y border-emerald-100">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-2xl font-black text-center uppercase tracking-tight mb-8">CURRENT STUDENTS</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Email Box */}
            <div className="bg-white p-8 rounded-2xl border border-emerald-100/60 shadow-sm text-center flex flex-col items-center justify-between min-h-[220px]">
              <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mb-3">
                <span className="text-xl">✉️</span>
              </div>
              <h3 className="font-extrabold uppercase text-sm mb-2">EMAIL</h3>
              <p className="text-[12px] font-semibold text-gray-600 leading-relaxed max-w-[320px]">
                If you’re an existing customer with issue / access to the Student Portal, please email us at <a href="mailto:support@passmefast.com" className="text-[#22c55e] underline">support@passmefast.com</a>.<br />
                We respond to your emails from 8am to 8pm on weekdays.
              </p>
              <a href="mailto:support@passmefast.com" className="text-xs font-black text-[#22c55e] uppercase tracking-wider underline mt-4">
                EMAIL US
              </a>
            </div>

            {/* Phone Box */}
            <div className="bg-white p-8 rounded-2xl border border-emerald-100/60 shadow-sm text-center flex flex-col items-center justify-between min-h-[220px]">
              <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mb-3">
                <span className="text-xl">📞</span>
              </div>
              <h3 className="font-extrabold uppercase text-sm mb-2">PHONE</h3>
              <p className="text-[12px] font-semibold text-gray-600 leading-relaxed max-w-[320px]">
                For urgent support with your course, our support lines are open 8am to 8pm weekdays. Call us on <a href="tel:03331234949" className="text-[#22c55e] underline">0333 123 4949</a> Option 2. Outside of these times please use our help centre or email us.
              </p>
              <a href="tel:03331234949" className="text-xs font-black text-[#22c55e] uppercase tracking-wider underline mt-4">
                CALL US
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 6. NEW CUSTOMER SUPPORT SECTION */}
      <section className="py-14 px-6 max-w-[1100px] mx-auto">
        <h2 className="text-2xl font-black text-center uppercase tracking-tight mb-8">NEW CUSTOMER SUPPORT</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          
          {/* Phone Box */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center flex flex-col items-center justify-between min-h-[340px]">
            <div>
              <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">📞</span>
              </div>
              <h3 className="font-extrabold uppercase text-sm mb-3">PHONE</h3>
              <p className="text-[12px] font-medium text-gray-600 leading-relaxed mb-4">
                If you need more info or help choosing your ideal course, call our sales team on <a href="tel:03331234949" className="text-[#22c55e] underline font-bold">0333 123 4949</a> and press option 1.
              </p>
              <div className="text-[11px] font-bold text-gray-500 space-y-1 my-4 bg-gray-50 p-3 rounded-lg">
                <p>Monday - Friday: 8am - 8pm</p>
                <p>Saturday & Sunday: 9am - 5pm</p>
              </div>
            </div>
            <a href="tel:03331234949" className="text-xs font-black text-[#22c55e] uppercase tracking-wider underline mt-2">
              CALL US
            </a>
          </div>

          {/* Timescales and Prices Box */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center flex flex-col items-center justify-between min-h-[340px]">
            <div>
              <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🏷️</span>
              </div>
              <h3 className="font-extrabold uppercase text-sm mb-3">TIMESCALES AND PRICES</h3>
              <p className="text-[12px] font-medium text-gray-600 leading-relaxed mb-4">
                For timescales and prices, please enter your postcode into our courses page.
              </p>
            </div>
            <a href="#" className="text-xs font-black text-[#22c55e] uppercase tracking-wider underline mt-2">
              VIEW PRICES
            </a>
          </div>

          {/* Request Callback Form Box */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center flex flex-col justify-between min-h-[340px]">
            <div>
              <h3 className="font-extrabold uppercase text-xs mb-1">WANT TO REQUEST A CALLBACK?</h3>
              <p className="text-[11px] text-gray-500 font-medium mb-4">
                This is for new bookings only, you will be contacted by a member of our sales team.
              </p>

              <form className="space-y-3 text-left">
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">Name</label>
                  <input 
                    type="text" 
                    placeholder="Your name" 
                    className="w-full px-3 py-2 border border-gray-200 rounded-md text-xs focus:outline-none focus:border-[#22c55e]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">Phone number</label>
                  <input 
                    type="text" 
                    placeholder="Your phone number" 
                    className="w-full px-3 py-2 border border-gray-200 rounded-md text-xs focus:outline-none focus:border-[#22c55e]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">Best time to call you?</label>
                  <select className="w-full px-3 py-2 border border-gray-200 rounded-md text-xs font-medium text-gray-600 focus:outline-none focus:border-[#22c55e]">
                    <option>Select a time slot</option>
                    <option>Morning (8am - 12pm)</option>
                    <option>Afternoon (12pm - 5pm)</option>
                    <option>Evening (5pm - 8pm)</option>
                  </select>
                </div>
              </form>
            </div>

            <button className="w-full bg-[#ff528c] hover:bg-[#e0457b] text-white font-black text-xs py-3 rounded-full uppercase tracking-wider shadow-sm transition-all mt-4">
              CALL ME BACK
            </button>
          </div>

        </div>
      </section>

      {/* 7. INSTRUCTORS SECTION */}
      <section className="bg-[#f2faf5] py-12 px-6 border-y border-emerald-100 text-center">
        <div className="max-w-[700px] mx-auto">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-4">INSTRUCTORS</h2>
          <p className="text-xs font-medium text-gray-600 mb-3">
            If you’re an instructor working with PassMeFast, please contact us through <a href="#" className="text-[#22c55e] underline font-bold">your ADI Portal</a>.
          </p>
          <p className="text-xs font-medium text-gray-600">
            If you’re interested in working with us, please <a href="#" className="text-[#22c55e] underline font-bold">register your interest</a> or call us on <a href="tel:03331234949" className="text-[#22c55e] underline font-bold">0333 123 4949</a> (option 3).
          </p>
        </div>
      </section>

      {/* 8. MAP & HEAD OFFICE SECTION */}
      <section className="py-14 px-6 max-w-[1100px] mx-auto">
        <div className="grid md:grid-cols-3 gap-6 items-center">
          
          {/* Map Preview */}
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm h-[180px] bg-gray-100 relative">
            <iframe 
              title="PassMeFast Head Office Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2374.8878847053513!2d-2.2858102!3d53.4682054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb122e20b329d%3A0x88c2ad115bb9971d!2sExchange%20Quay!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk" 
              className="w-full h-full border-0"
              loading="lazy"
            ></iframe>
          </div>

          {/* Head Office Address */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center flex flex-col items-center justify-center h-[180px]">
            <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center mb-2">
              <span className="text-lg">🏢</span>
            </div>
            <h3 className="font-extrabold uppercase text-xs mb-2">HEAD OFFICE</h3>
            <p className="text-[12px] font-semibold text-gray-600 leading-tight">
              8 Exchange Quay<br />
              Salford<br />
              M5 3EJ
            </p>
          </div>

          {/* Press & Media Enquiries */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center flex flex-col items-center justify-center h-[180px]">
            <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center mb-2">
              <span className="text-lg">📢</span>
            </div>
            <h3 className="font-extrabold uppercase text-xs mb-2">PRESS & MEDIA ENQUIRIES</h3>
            <p className="text-[12px] font-semibold text-gray-600 mb-1">Please contact</p>
            <a href="mailto:pr@passmefast.com" className="text-xs font-bold text-[#22c55e] underline">
              pr@passmefast.com
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}