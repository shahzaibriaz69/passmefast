'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';

const features = [
  ['◉', 'Practical Test Assist'],
  ['↻', 'Money-Back Guarantee'],
  ['⚙', 'Flexible courses'],
  ['▤', 'Pay in instalments'],
  ['☆', 'Excellent on Trustpilot'],
];

export default function LandingHero() {
  const reduceMotion = useReducedMotion();
  const enter = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
        };

  return (
    <>
      <motion.div {...enter(0.05)} className="bg-[#ffb523] min-h-[56px] px-4 flex items-center justify-center text-[#03064e] text-sm sm:text-base leading-6 font-medium text-center">
        <span className="mr-3 text-xl">🏅</span>
        Get an extra 5% (up to £200) off your course at point of purchase when you pay in full today!
      </motion.div>

      <motion.div {...enter(0.12)} className="bg-[#03064e] text-white">
        <div className="max-w-[1216px] mx-auto min-h-[56px] px-5 lg:px-0 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 items-center">
          {features.map(([icon, text], index) => (
            <Link
              key={text}
              href={index === 0 ? '/practical-test-assist' : '#'}
              className={`${index > 1 ? 'hidden sm:flex' : 'flex'} items-center justify-center gap-2 text-base leading-7 font-medium hover:text-[#2bd864]`}
            >
              <span className="text-base">{icon}</span>
              <span>{text}</span>
            </Link>
          ))}
        </div>
      </motion.div>

      <section className="relative overflow-hidden bg-[linear-gradient(to_right_top,#03071a,#03064e_10%,#2bcd5a)] text-white lg:h-[561px]">
        <div className="max-w-[1216px] mx-auto min-h-[560px] lg:min-h-0 lg:h-full px-5 lg:px-0 py-12 lg:pt-9 lg:pb-[46px] grid md:grid-cols-2 items-center gap-x-7 gap-y-6 lg:gap-y-[30px] relative z-10">
          <motion.div {...enter(0.2)}>
            <motion.h1 {...enter(0.26)} className="font-bold uppercase tracking-[-0.035em] text-[44px] sm:text-[52px] lg:text-[56px] leading-none lg:w-[588px]">
              <span className="block">Start learning</span>
              <span className="block text-transparent [-webkit-text-stroke:1.5px_white]">in less than</span>
              <span className="block">7 days</span>
            </motion.h1>
            <motion.p {...enter(0.34)} className="mt-7 max-w-[556px] text-lg leading-7">
              Get on the road with the UK&apos;s largest provider of independent driving instructors. Find your perfect course and book your driving lessons today.
            </motion.p>

            <motion.div {...enter(0.42)}>
              <Link
              id="fast-track"
              href="#course-recommender"
              className="mt-11 inline-flex w-[300px] min-h-[43px] items-center justify-center bg-[#fa649b] hover:bg-[#ed4f87] rounded-full px-8 text-base font-normal transition-all hover:-translate-y-0.5 hover:shadow-xl"
              >
                FAST-TRACK ME
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 80, scale: 0.94 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative self-stretch hidden md:flex items-end justify-end"
          >
            <motion.img
              src="https://images.prismic.io/passmefast/ZqIZxR5LeNNTxfEr_car-with-shadow-lg.png?auto=format%2Ccompress&fit=max&w=1200"
              alt="White car with PassMeFast logo"
              className="w-[588px] max-w-none lg:translate-y-2 drop-shadow-2xl"
              animate={reduceMotion ? {} : { y: [0, -7, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>

          <motion.div {...enter(0.5)} className="md:col-span-2">
            <Link
              href="/practical-test-assist"
              style={{ background: 'linear-gradient(90deg,#0a0f2c 0%,#1b6b4e 100%) padding-box, linear-gradient(90deg,#fa649b,#2bcd5a) border-box' }}
              className="block lg:mx-[2px] lg:h-[82px] border-2 border-transparent rounded-[18px] px-5 py-4 lg:py-0 grid sm:grid-cols-[1.5fr_1fr_1fr_1fr] items-center gap-4 transition-all hover:brightness-110 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="flex items-center gap-4">
                <span className="bg-white text-[#03064e] rounded px-2 py-1 text-[10px] font-bold">NEW</span>
                <div>
                  <h2 className="text-[20px] leading-6 font-bold">PRACTICAL TEST ASSIST&nbsp; ⊕</h2>
                  <p className="mt-1 text-xs text-white/85">Secure your test quickly and hassle free with our expert Alert System</p>
                </div>
              </div>
              <span className="hidden sm:flex items-center justify-center gap-2 text-[11px] text-center">♢ REAL TIME INSTANT<br />TEST ALERTS</span>
              <span className="hidden sm:flex items-center justify-center gap-2 text-[11px] text-center">♢ HELP WITH SECURING A<br />TEST QUICKLY</span>
              <span className="hidden sm:flex items-center justify-center gap-2 text-[11px] text-center">♢ MATCHED TO YOUR LOCAL<br />TEST CENTRE</span>
            </Link>
          </motion.div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-2 bg-[#ff5c94]" />
      </section>
    </>
  );
}
