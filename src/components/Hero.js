// src/components/Hero.js
'use client';
import { useState } from 'react';

export default function Hero() {
  const [postcode, setPostcode] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (postcode.trim()) {
      alert(`Searching courses for postcode: ${postcode}`);
    }
  };

  return (
    <section className="w-full font-sans">
      
      {/* 1. Yellow Promo Banner */}
      <div className="bg-[#FFB800] text-slate-900 py-4 px-4 text-center font-bold text-xs sm:text-sm flex items-center justify-center gap-2">
        <span className="text-base">🏁</span>
        <span>Get an extra 5% (up to £200) off your course at point of purchase when you pay in full today!</span>
      </div>

      {/* 2. Dark Navy Feature Strip */}
      <div className="bg-[#051129] text-white py-5 px-4 text-xs font-semibold border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-3 text-slate-100">
          <div className="flex items-center gap-1.5">⏱️ Practical Test Assist</div>
          <div className="flex items-center gap-1.5">💷 Money-Back Guarantee</div>
          <div className="flex items-center gap-1.5">🔄 Flexible courses</div>
          <div className="flex items-center gap-1.5">💳 Pay in instalments</div>
          <div className="flex items-center gap-1.5">⭐ Excellent on Trustpilot</div>
        </div>
      </div>

      {/* 3. Main Green & Blue Gradient Hero */}
      <div className="relative bg-gradient-to-r from-[#021B38] via-[#084C36] to-[#05A86B] text-white py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-8 items-center">
          
          {/* Left Text & Postcode Search */}
          <div className="md:col-span-7 z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none mb-6">
              <span className="block text-white">START LEARNING</span>
              <span className="block text-transparent [-webkit-text-stroke:1.5px_white] my-1">
                IN LESS THAN
              </span>
              <span className="block text-white">7 DAYS</span>
            </h1>

            <p className="text-emerald-50 text-sm sm:text-base mb-8 max-w-lg font-medium leading-relaxed">
              Get on the road with the UK's largest provider of independent driving instructors. Find your perfect course and book your driving lessons today.
            </p>

            {/* Postcode Search Box */}
            <form onSubmit={handleSearch} className="max-w-md">
              <div className="bg-white p-1.5 rounded-full shadow-2xl flex items-center justify-between border-2 border-white">
                <div className="flex items-center gap-2 pl-4 flex-1">
                  <span className="text-slate-500 text-base">📍</span>
                  <input
                    type="text"
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value)}
                    placeholder="Enter postcode"
                    className="w-full text-slate-900 font-bold text-sm outline-none placeholder-gray-400 bg-transparent"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#E91E63] hover:bg-[#d81b5b] text-white font-black text-xs sm:text-sm px-6 py-3 rounded-full transition shadow-md uppercase tracking-wider whitespace-nowrap"
                >
                  FAST-TRACK ME
                </button>
              </div>
            </form>
          </div>

          {/* Right White Driving Car Image */}
          <div className="md:col-span-5 flex justify-center items-center">
            <img
              src="https://pngimg.com/uploads/hatchback/hatchback_PNG15.png"
              alt="PassMeFast Driving School Car"
              className="w-full max-w-md h-auto object-contain filter drop-shadow-[0_20px_20px_rgba(0,0,0,0.5)] transform hover:scale-105 transition duration-300"
            />
          </div>

        </div>
      </div>

    </section>
  );
}