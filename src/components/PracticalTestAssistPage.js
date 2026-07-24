'use client';

import { useState } from 'react';
import Link from 'next/link';
import LandingNavbar from './LandingNavbar';
import Footer from './Footer';

const faqs = [
  {
    question: 'What is Practical Test Assist?',
    answer: 'Practical Test Assist is designed to help you find and secure an earlier practical driving test. We actively monitor availability and notify you when suitable slots become available.',
  },
  {
    question: 'How does Practical Test Assist work?',
    answer: 'Once you’re registered, our system searches for earlier test dates that match your preferences. When a suitable slot becomes available, you’ll receive an alert so you can act quickly and book it.',
    extra: ['Act fast — cancellations go within minutes', 'Turn Student Portal notifications on', 'Stay alert throughout the day', 'Mondays are key for newly released slots', 'Be flexible with locations and times'],
  },
  {
    question: 'How do I book a test once I find one?',
    answer: 'When you receive a notification, follow the link provided and log in to the DVSA booking system using your driving licence number. From there, select and confirm your new test date.',
  },
  {
    question: 'How should I search for tests?',
    answer: 'Check regularly and keep your availability as flexible as possible. The more centres and dates you’re open to, the higher your chances of finding a test quickly.',
  },
  {
    question: 'When is the best time to find new test slots?',
    answer: 'Mondays are typically the best day for new practical test slots to be released, so stay especially alert at the start of the week.',
  },
  {
    question: 'What should I do when I receive an alert?',
    answer: 'Act immediately. Test slots can be taken within minutes, so logging in and booking as soon as you receive a notification gives you the best chance of securing it.',
  },
  {
    question: 'How do I use the practical test alerts?',
    answer: 'Keep Student Portal notifications switched on, act immediately when an alert arrives and stay alert throughout the day. Be particularly active on Mondays.',
  },
  {
    question: 'How to Book or Change Your Practical Test',
    answer: 'Go to the official GOV.UK booking service, log in with your driving licence details, select your preferred test centre, check available dates and confirm a suitable slot.',
  },
  {
    question: 'Should I book the earliest test available?',
    answer: 'Not always. Your test date should align with your course progress and lesson hours. Speak with your instructor and only book when you are confident and test-ready.',
  },
  {
    question: 'What’s the best approach when booking a test?',
    answer: 'Stay flexible with dates and locations, use alerts and act quickly. Focus on being fully prepared, not simply getting the earliest date.',
  },
  {
    question: 'Should I book my test in a random location?',
    answer: 'No. Book at a test centre you have trained in or know well, and choose a location your instructor supports and covers.',
  },
  {
    question: 'Can I reschedule my test to a different location?',
    answer: 'Yes, but confirm that your instructor covers the new test centre and that you have enough time to practise in that area before changing the booking.',
  },
  {
    question: 'Can I book a practical test on behalf of someone else?',
    answer: 'No. The DVSA requires bookings to use the candidate’s own accurate details. Improper bookings may be cancelled and the test fee may be retained.',
  },
  {
    question: 'What should I do to avoid issues with my booking?',
    answer: 'Always use your correct details, check your licence number and booking reference, avoid unofficial booking methods and follow DVSA guidelines.',
  },
];

const benefits = [
  {
    title: 'Courses to suit you',
    text: 'Our driving courses can run intensively and semi-intensively or as slow as you need to go',
    icon: '◉',
  },
  {
    title: 'Success stories',
    text: "We've helped over 80,000 students get on the road",
    icon: '▤',
  },
  {
    title: 'Home pickups',
    text: 'Get picked up and dropped off at home for driving lessons across most of Great Britain',
    icon: '⌂',
  },
];

export default function PracticalTestAssistPage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="bg-white text-[#03064e]">
      <LandingNavbar />

      <div className="bg-[#ffb523] min-h-[56px] px-4 flex items-center justify-center text-center text-sm sm:text-base leading-6 font-medium">
        <span className="mr-3 text-xl">🏅</span>
        Get an extra 5% (up to £200) off your course at point of purchase when you pay in full today!
      </div>

      <div className="bg-[#03064e] text-white">
        <div className="max-w-[1216px] mx-auto min-h-[56px] px-5 lg:px-0 grid grid-cols-2 md:grid-cols-4 items-center gap-3 text-base leading-7 font-medium">
          <span className="flex justify-center gap-2"><b>◉</b> Practical Test Assist</span>
          <span className="flex justify-center gap-2"><b>↻</b> Money-Back Guarantee</span>
          <span className="hidden md:flex justify-center gap-2"><b>⚙</b> Flexible courses</span>
          <span className="hidden md:flex justify-center gap-2"><b>☆</b> Excellent on Trustpilot</span>
        </div>
      </div>

      <main>
        <section className="border-b-[6px] border-[#ff5c94] bg-[linear-gradient(115deg,#00104f_0%,#00674f_100%)] text-white">
          <div className="max-w-[1216px] mx-auto grid md:grid-cols-2 min-h-[430px]">
            <div className="px-5 py-12 sm:p-12 lg:pl-0 flex flex-col justify-center">
              <h1 className="text-[34px] sm:text-[42px] leading-tight font-bold">
                Practical<span className="text-[#2bd864]">Tests</span>Assist
              </h1>
              <p className="mt-6 max-w-[550px] text-sm sm:text-[15px] leading-6 text-white/90">
                Take the guesswork out of booking your practical test with our complete test readiness and support package. Designed to help you secure a test quickly and be fully prepared when the day comes, this package combines smart test alerts, expert support, and practical resources to give you the best possible chance of success.
              </p>
              <Link href="/#fast-track" className="mt-8 w-fit bg-[#ff5c94] rounded-full px-8 py-4 text-xs font-bold uppercase">
                See our courses&nbsp;&nbsp; →
              </Link>
            </div>
            <img
              src="https://images.prismic.io/passmefast/abqrzrbci2UF6MFN_hands-on-wheel.png?auto=format,compress"
              alt="Learner holding a steering wheel"
              className="w-full h-full min-h-[300px] object-cover"
            />
          </div>
        </section>

        <section className="bg-[#f4f5f7] border-b border-slate-200">
          <div className="max-w-[1216px] mx-auto px-5 py-7 grid md:grid-cols-3 gap-6 items-center text-center">
            <div>
              <div className="text-[#00b67a] tracking-widest text-xl">★★★★★</div>
              <p className="mt-1 text-xs font-semibold">4.4 out of 5 based on 12,433 reviews</p>
            </div>
            <blockquote className="text-xs leading-5 text-slate-600">
              “I got paired with Carl, fantastic instructor! Managed to pass my test first time thanks to him!” <b className="text-[#03064e]">— Ben</b>
            </blockquote>
            <blockquote className="text-xs leading-5 text-slate-600">
              “My instructor was incredible and I found the whole experience very smooth.” <b className="text-[#03064e]">— Emily</b>
            </blockquote>
          </div>
        </section>

        <section className="max-w-[1216px] mx-auto px-5 py-16 sm:py-20">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
            <img
              src="https://images.prismic.io/passmefast/Z_PltHdAxsiBwaNx_studentbeans-first-image.png?auto=format,compress"
              alt="Learner having a driving lesson"
              className="w-full rounded-2xl object-cover aspect-[1.35]"
            />
            <div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-8 bg-[#ff5c94] rounded-sm" />
                <h2 className="text-[24px] leading-8 font-bold uppercase">How it works</h2>
              </div>
              <p className="mt-6 text-sm leading-6 text-slate-600">
                While we can’t book your test for you, we use our industry experience to guide you on the best times to book and help you stay one step ahead. With our test alert system, you’ll be instantly notified as soon as new test slots become available, giving you the best chance to secure a date quickly.
              </p>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                Alongside this, we support both you and your instructor to ensure you’re progressing towards test standard, with clear communication and a focused plan to get you ready.
              </p>
              <h3 className="mt-6 text-sm font-bold">What’s included:</h3>
              <ul className="mt-3 pl-5 list-disc space-y-2 text-sm leading-5 text-slate-600">
                <li>Access to our test alert system with real-time push notifications for new test availability</li>
                <li>Support for you and your instructor, ensuring you both stay aligned and test-focused</li>
                <li>Access to our library of virtual driving lessons to reinforce your knowledge and skills</li>
                <li>Practical Test Readiness Checklist to make sure all key areas are covered before your test</li>
              </ul>
              <p className="mt-5 text-sm leading-6 text-slate-600">
                From finding a test to feeling fully prepared, this package gives you the tools, support, and confidence to pass.
              </p>
              <Link href="/#fast-track" className="mt-7 inline-flex bg-[#03064e] text-white rounded-full px-8 py-4 text-xs font-bold uppercase">
                See our courses&nbsp;&nbsp; →
              </Link>
            </div>
          </div>
        </section>

        <section className="max-w-[1216px] mx-auto px-5 pb-20">
          <h2 className="text-[24px] font-bold uppercase mb-7">Frequently asked questions</h2>
          <div className="border-t border-slate-200">
            {faqs.map((faq, index) => (
              <article key={faq.question} className="border-b border-slate-200">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  aria-expanded={openFaq === index}
                  className="w-full py-5 flex items-center justify-between gap-5 text-left"
                >
                  <span className="text-sm sm:text-[16px] font-semibold">{faq.question}</span>
                  <span className="text-xl">{openFaq === index ? '−' : '⌄'}</span>
                </button>
                {openFaq === index && (
                  <div className="pb-6 max-w-4xl text-sm leading-6 text-slate-600">
                    <p>{faq.answer}</p>
                    {faq.extra && (
                      <ul className="mt-3 pl-5 list-disc space-y-1">
                        {faq.extra.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    )}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#f4f5f7] py-16">
          <div className="max-w-[1216px] mx-auto px-5">
            <div className="flex items-center gap-3 mb-9">
              <span className="w-2 h-8 bg-[#ff5c94] rounded-sm" />
              <h2 className="text-[22px] sm:text-[24px] leading-8 font-bold uppercase">Why choose PassMeFast for your intensive driving course?</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {benefits.map((benefit) => (
                <article key={benefit.title} className="bg-white rounded-xl p-7 shadow-sm min-h-[210px] flex flex-col">
                  <span className="text-3xl">{benefit.icon}</span>
                  <h3 className="mt-5 text-xl font-bold">{benefit.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{benefit.text}</p>
                  <a href="#" className="mt-auto pt-5 text-xs font-bold underline">Learn more&nbsp; ›</a>
                </article>
              ))}
            </div>

            <div className="max-w-[520px] mx-auto mt-16 text-center">
              <h2 className="text-[28px] sm:text-[36px] font-bold">Subscribe to PassMeFast</h2>
              <form className="mt-7 space-y-3" onSubmit={(event) => event.preventDefault()}>
                <input aria-label="Your name" placeholder="Your name" className="w-full rounded-full bg-white border border-slate-200 px-5 py-3 text-sm outline-none" />
                <input aria-label="Email address" type="email" placeholder="Email address" className="w-full rounded-full bg-white border border-slate-200 px-5 py-3 text-sm outline-none" />
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <label className="flex items-start gap-2 text-left text-[10px] leading-4 text-slate-500">
                    <input type="checkbox" className="mt-0.5" />
                    We’d love to let you know about our courses, news and offers via email.
                  </label>
                  <button className="bg-[#ff8daf] text-white rounded-full px-7 py-3 text-xs font-bold uppercase">Subscribe</button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
