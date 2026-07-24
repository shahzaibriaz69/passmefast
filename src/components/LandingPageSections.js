'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';

const benefitCards = [
  {
    number: '1',
    title: 'Check your progress',
    text: <>The <b className="text-[#08b96c]">Student Portal</b> is your go-to place for everything PassMeFast</>,
    link: 'Download The Student Portal',
    image: 'https://images.prismic.io/passmefast/ZnrHNJbWFbowe11A_progress.jpg?auto=format,compress',
  },
  {
    number: '2',
    title: 'Get help from our experts',
    text: <>Access <b className="text-[#ff5c94]">Online Tuition</b> and top resources — <b className="text-[#ff5c94]">PassMeTheory</b> boosts your chances of passing your theory test first time</>,
    link: 'Learn More about PassMeTheory',
    image: 'https://images.prismic.io/passmefast/ZnrHcpbWFbowe11S_learn.jpg?auto=format,compress',
  },
  {
    number: '3',
    title: 'Driving lesson videos',
    text: <><b className="text-[#13a9c8]">Expert driving advice</b> — any time, any place, from any smartphone or computer</>,
    link: 'More About Driving Lesson Videos',
    image: 'https://images.prismic.io/passmefast/ZnrHcpbWFbowe11T_get-help.jpg?auto=format,compress',
  },
];

const products = [
  {
    title: 'Intensive driving courses',
    text: 'Our courses are designed to get you behind the wheel faster, with structured lessons and expert instructors helping you start driving sooner.',
    link: 'Discover our courses',
    href: '#fast-track',
    image: 'https://passmefast.cdn.prismic.io/passmefast/ZnrH4pbWFbowe11o_wheel.svg?auto=compress,format',
  },
  {
    title: 'Driving Test Alerts',
    text: 'Long test waits stressing you out? Practical Test Assist sends real‑time alerts for availability at your local test centre, so you can book a slot the moment you feel confident and ready to take your test.',
    link: 'Find out more',
    href: '/practical-test-assist',
    image: 'https://passmefast.cdn.prismic.io/passmefast/ZnrH4ZbWFbowe11m_protection.svg?auto=compress,format',
  },
  {
    title: 'Multiple ways to pay',
    text: 'Book today with an initial payment of only £375 or pay in full. We accept all major credit and debit cards plus American Express. Klarna* and Payl8r** available.',
    link: 'See payment options',
    href: '#fast-track',
    image: 'https://passmefast.cdn.prismic.io/passmefast/ZnrH4JbWFbowe11l_pay.svg?auto=compress,format',
  },
];

const reasons = [
  {
    title: 'Courses to suit you',
    text: 'Our driving courses can run intensively and semi-intensively or as slow as you need to go',
    link: 'See Courses',
    image: 'https://passmefast.cdn.prismic.io/passmefast/ZnrJDJbWFbowe13I_user-with-car-wheel.svg?auto=compress,format',
  },
  {
    title: 'Success stories',
    text: 'We’ve helped over 80,000 students get on the road, check out our reviews!',
    link: 'Customer Reviews',
    image: 'https://passmefast.cdn.prismic.io/passmefast/ZnrJBpbWFbowe13C_certificate.svg?auto=compress,format',
  },
  {
    title: 'Home Pickups',
    text: 'Get picked up and dropped off at home for driving lessons across most of Great Britain',
    link: 'Pickup Information',
    image: 'https://passmefast.cdn.prismic.io/passmefast/ZnrJCZbWFbowe13F_home-with-wheel.svg?auto=compress,format',
  },
];

const drivers = [
  ['Corto', '25 Hour Intermediate Course', 'https://images.prismic.io/passmefast/ZnrJw5bWFbowe13Z_1.png?auto=format,compress'],
  ['Amber Butler', '10 Hour Refresher Course', 'https://images.prismic.io/passmefast/ZnrJxJbWFbowe13a_2.png?auto=format,compress'],
  ['Sián Lilly', '30 Hours Beginner Course', 'https://images.prismic.io/passmefast/ZnrJxZbWFbowe13b_3.png?auto=format,compress'],
  ['Georgia', '40 Hours Beginner Course', 'https://images.prismic.io/passmefast/ZnrJwZbWFbowe13Y_4.png?auto=format,compress'],
  ['Philip', '25 Hour Intermediate Course', 'https://images.prismic.io/passmefast/Zwezk4F3NbkBXJa1_Group1757-2-.png?auto=format,compress'],
  ['Chloe', '10 Hour Refresher Course', 'https://images.prismic.io/passmefast/ZnrJx5bWFbowe13e_6.png?auto=format,compress'],
];

const courses = [
  ['Beginner Course', 'Little driving experience but still want to get your licence fast? Our beginner courses could be perfect for you', 'https://images.prismic.io/passmefast/ZnrKnZbWFbowe14Q_driving-instructor-holding-checklist.jpg?auto=format,compress'],
  ['Intermediate Course', "You've almost mastered many of the fundamental skills, but still have a way to go before you're test-ready", 'https://images.prismic.io/passmefast/ZnrKnpbWFbowe14R_driving-school-test-arab-instructor.jpg?auto=format,compress'],
  ['Refresher Course', 'If you are nearly test-ready but need to iron out a few issues, one of our refresher courses could be ideal for you', 'https://images.prismic.io/passmefast/ZnrKn5bWFbowe14S_woman-male-driving-instructor-during-driving-test.jpg?auto=format,compress'],
];

const faqs = [
  ['Why take driving lessons with PassMeFast?', 'We offer a wide range of intensive driving courses and driving lessons designed to prepare you for any driving challenge you may face. Our DVSA-registered instructors are experts at helping learners build confidence and get test-ready.'],
  ['How do I book with PassMeFast?', 'Tell us about your availability and we will build a driving course that suits your schedule. Get started online or call our friendly team on 0333 123 4949.'],
  ['Is the first driving lesson really scary?', 'It is not as daunting as you may imagine. You will meet your instructor, cover the important checks and start at a pace that feels comfortable.'],
  ['How are the courses structured?', 'Choose fully intensive driving lessons of up to 5 hours a day or semi-intensive lessons of around 2 hours. We shape the course around your needs.'],
  ['Which course is right for me?', 'Use our quick Course Recommender and we will suggest the right number of hours based on your current driving experience.'],
  ['Is 20 hours of driving lessons enough?', 'Every learner is different. A complete beginner commonly needs more hours, while an experienced learner may only need a refresher course.'],
  ['Can I pass my driving test in 2 weeks?', 'Many learners complete their lessons in two weeks. The exact timing depends on your experience, availability and practical test dates.'],
  ['Are you guaranteed to pass on a crash course?', 'No driving school can guarantee a pass, but a focused course with an experienced instructor gives you the skills and preparation you need.'],
  ['How many lessons will I need to pass my test?', 'The DVSA states that successful candidates take an average of 48 hours of professional lessons plus private practice. Your needs may vary.'],
  ['How many driving instructors do PassMeFast work with?', 'We work with a national network of more than 5,000 friendly, experienced independent driving instructors.'],
  ['Should I learn to drive in a manual or automatic car?', 'Manual gives you the option to drive both transmission types, while automatic can be easier to learn. Pick the option that best suits you.'],
  ['Do you help with theory test revision?', 'Yes. PassMeTheory online tuition and learning resources can help you prepare for the trickiest parts of the theory test.'],
];

const cities = ['Birmingham', 'Brighton', 'Bristol', 'Derby', 'Doncaster', 'Edinburgh', 'Glasgow', 'Huddersfield', 'Leeds', 'Liverpool', 'London', 'Manchester'];

const sectionVariants = {
  hidden: { opacity: 0, y: 42 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.11,
      delayChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.985 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.58, ease: [0.22, 1, 0.36, 1] },
  },
};

function SectionTitle({ children, color = '#13a9c8' }) {
  return (
    <motion.div variants={itemVariants} className="flex items-center gap-4 mb-10">
      <span className="w-2 h-8 rounded-sm shrink-0" style={{ backgroundColor: color }} />
      <h2 className="text-[#03064e] text-[22px] sm:text-[24px] leading-8 font-bold uppercase">{children}</h2>
    </motion.div>
  );
}

function PinkButton({ children, className = '' }) {
  return (
    <a href="#fast-track" className={`inline-flex items-center justify-center gap-3 bg-[#fa649b] hover:bg-[#ed4f87] text-white rounded-full px-8 min-h-[43px] text-base font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg ${className}`}>
      {children}<span>→</span>
    </a>
  );
}

export default function LandingPageSections() {
  const [openFaq, setOpenFaq] = useState(null);
  const reduceMotion = useReducedMotion();
  const sectionReveal = reduceMotion
    ? {}
    : {
        variants: sectionVariants,
        initial: 'hidden',
        whileInView: 'visible',
        viewport: { once: true, amount: 0.12 },
      };

  return (
    <main className="bg-white text-[#03064e]">
      <motion.section {...sectionReveal} className="py-8 lg:py-[44px] border-b border-slate-100">
        <motion.img
          variants={itemVariants}
          src="https://www.passmefast.co.uk/_next/static/media/payoptionsdesktop-nobg.49ef8e30.png"
          alt="Credit, PayPal, Klarna, Payl8r, Apple Pay and Google Pay"
          className="mx-auto w-[768px] max-w-[90%] h-auto"
        />
      </motion.section>

      <motion.section {...sectionReveal} id="course-recommender" className="max-w-[1216px] mx-auto px-5 lg:px-0 pt-[35px] pb-[88px] flex flex-col lg:flex-row items-center justify-between gap-9">
        <motion.div variants={itemVariants} className="max-w-[760px]">
          <h1 className="max-w-[712px] text-[24px] leading-8 font-bold uppercase">Book your intensive driving lessons today with expert independent instructors</h1>
          <p className="mt-4 max-w-[672px] text-lg leading-7 text-[#03064e]">Take our quick and easy Course Recommender for a spin to find out exactly which course you need to get on the road</p>
        </motion.div>
        <motion.a variants={itemVariants} href="#fast-track" className="shrink-0 w-[376px] h-[56px] lg:translate-x-px lg:translate-y-3 rounded-full p-[2px] bg-gradient-to-r from-cyan-400 to-emerald-400">
          <span className="flex w-full h-full items-center justify-center rounded-full bg-[#03064e] text-white text-base font-semibold">TRY OUR COURSE RECOMMENDER&nbsp;&nbsp; →</span>
        </motion.a>
      </motion.section>

      <motion.section {...sectionReveal} className="bg-[#f5f6f8] py-16">
        <div className="max-w-[1216px] mx-auto px-5 lg:px-0">
          <SectionTitle>Extra benefits with PassMeFast</SectionTitle>
          <div className="grid md:grid-cols-3 gap-4">
            {benefitCards.map((card) => (
              <motion.article variants={itemVariants} key={card.title} className="bg-white rounded-2xl overflow-hidden flex flex-col h-[516px] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="p-6 flex-1 flex flex-col">
                  <span className="w-10 h-10 rounded-full border-2 border-[#0bbf70] grid place-items-center text-sm font-bold">{card.number}</span>
                  <h3 className="mt-[38px] text-[24px] leading-6 font-semibold">{card.title}</h3>
                  <p className="mt-4 text-base text-[#03064e] leading-6">{card.text}</p>
                  <a
                    href="#"
                    style={{
                      width: card.number === '1' ? '225px' : card.number === '2' ? '250px' : '258px',
                      transform: `translateY(${card.number === '2' ? 7 : 2}px)`,
                    }}
                    className="mt-auto border-b border-[#03064e] text-base leading-6 font-normal"
                  >
                    {card.link} ›
                  </a>
                </div>
                <img src={card.image} alt="" className="h-[231px] w-full object-cover" />
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section {...sectionReveal} className="max-w-[1216px] mx-auto px-5 lg:px-0 py-16">
        <SectionTitle color="#ffb523">Our driving lessons and products</SectionTitle>
        <div className="grid md:grid-cols-3 gap-4">
          {products.map((item) => (
            <motion.article variants={itemVariants} key={item.title} className="bg-[#f5f6f8] rounded-2xl px-6 py-9 text-center flex flex-col items-center min-h-[420px] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <img src={item.image} alt="" className="h-[90px] w-[110px] object-contain" />
              <h3 className="mt-6 text-[24px] leading-7 font-bold">{item.title}</h3>
              <p className="mt-4 mb-8 text-base text-[#03064e]/75 leading-6">{item.text}</p>
              <Link href={item.href} className="mt-auto w-full min-h-[43px] bg-[#03064e] hover:bg-[#111568] text-white rounded-full px-6 flex items-center justify-center gap-3 text-base font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg">{item.link}<span>→</span></Link>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section {...sectionReveal} className="relative isolate overflow-hidden pt-10 pb-12 min-[866px]:pt-16 min-[866px]:pb-20">
        <div className="pointer-events-none hidden min-[866px]:block absolute top-10 -z-10 min-[866px]:top-[calc(50%-26rem)] left-[calc(50%-30rem)] xl:left-[calc(50%-26rem)]">
          <img
            src="https://images.prismic.io/passmefast/ZrIOFUaF0TcGItvC_uk-map.webp?auto=format,compress"
            alt="Map of Great Britain showing PassMeFast locations"
            className="w-[600px] max-w-none h-auto object-contain"
          />
        </div>
        <div className="max-w-[1216px] mx-auto px-5 lg:px-0">
          <SectionTitle color="#11bd70">Find driving lessons near me</SectionTitle>
          <div className="grid grid-cols-1 min-[866px]:grid-cols-12 items-center gap-y-12">
            <motion.div variants={itemVariants} className="min-[866px]:col-span-8">
              <div className="text-base leading-6 max-w-sm text-[#03064e]">
                <p className="mb-6">
                  Our experienced instructors operate nationwide. So whether you&apos;re looking for intensive driving courses or driving lessons in{' '}
                  <a href="#" className="underline">London</a>,{' '}
                  <a href="#" className="underline">Newcastle</a>,{' '}
                  <a href="#" className="underline">Norwich</a>,{' '}
                  <a href="#" className="underline">Plymouth</a> or{' '}
                  <a href="#" className="underline">Preston</a>, find out more about learning to drive in your area.
                </p>
              </div>
              <img
                src="https://images.prismic.io/passmefast/ZrIOFUaF0TcGItvC_uk-map.webp?auto=format,compress"
                alt="Map of Great Britain showing PassMeFast locations"
                className="mt-8 w-full max-w-[420px] mx-auto h-auto object-contain min-[866px]:hidden"
              />
            </motion.div>
            <motion.div variants={itemVariants} className="min-[866px]:col-span-4">
              <ul className="divide-y divide-[#03064e]/20 min-[866px]:border-b min-[866px]:border-[#03064e]/20 min-[866px]:w-2/3">
                {cities.map((city) => (
                  <li key={city} className="py-2 min-[866px]:py-3">
                    <a href="#" className="text-base font-normal text-[#03064e] hover:text-[#11bd70] transition-colors">{city}</a>
                  </li>
                ))}
              </ul>
              <PinkButton className="w-full mt-11">All locations</PinkButton>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section {...sectionReveal} className="bg-[#f3f4f6] relative overflow-hidden pt-10 pb-16 min-[866px]:pt-16 min-[866px]:pb-20">
        <div className="max-w-[1216px] mx-auto px-5 lg:px-0">
          <SectionTitle color="#ff5c94">Why learn to drive with PassMeFast?</SectionTitle>
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {reasons.map((item) => (
              <motion.article
                variants={itemVariants}
                key={item.title}
                className="flex flex-col justify-between bg-white rounded-[10px] p-6 min-h-[269px] shadow-[0_4px_12px_0px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  <img src={item.image} alt={`${item.title} image`} className="min-h-14 max-h-16 w-auto object-contain object-left" />
                  <div className="mt-7 mb-8">
                    <h3 className="text-2xl font-bold leading-6">{item.title}</h3>
                    <p className="mt-3 mb-6 text-sm leading-5 text-[#03064e]">{item.text}</p>
                  </div>
                </div>
                <a
                  href="#"
                  className="w-fit inline-flex items-center border-b-2 border-[#03064e] hover:border-[#fa649b] text-[#03064e] no-underline"
                >
                  <span className="flex items-center leading-4 pb-1.5 text-sm font-normal">
                    {item.link}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ms-3.5 shrink-0" aria-hidden="true">
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </span>
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section {...sectionReveal} className="pt-10">
        <div className="max-w-[1216px] mx-auto px-5 lg:px-0"><SectionTitle>Happy drivers</SectionTitle></div>
        <div className="grid grid-cols-2 lg:grid-cols-3">
          {drivers.map(([name, course, image]) => (
            <motion.article variants={itemVariants} key={name} className="relative h-[380px] sm:h-[500px] lg:h-[594px] overflow-hidden group">
              <img src={image} alt={`${name} with a driving test pass certificate`} className="w-full h-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#03064e]/90 via-transparent to-transparent flex flex-col justify-end p-6 sm:p-10 text-white">
                <div className="text-[#ffb523] tracking-widest">★★★★★</div>
                <h3 className="mt-2 text-xl font-bold">{name}</h3>
                <p className="mt-1 text-sm">{course}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section {...sectionReveal} className="bg-[#f5f6f8] py-16">
        <div className="max-w-[1216px] mx-auto px-5 lg:px-0">
          <SectionTitle color="#ffb523">What&apos;s the best course of driving lessons for me?</SectionTitle>
          <p className="max-w-[1120px] text-sm leading-6 text-slate-600 mb-10">
            Discover the options available to you when you book <u>driving lessons</u> with PassMeFast. Whether you&apos;re a <u>beginner starting your driving lessons</u> for the first time, intermediate or you&apos;re nearly test ready, we have a course for you. The hours of driving lessons that learners need vary for every individual.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {courses.map(([title, text, image]) => (
              <motion.article variants={itemVariants} key={title} className="rounded-2xl overflow-hidden bg-[#03064e] text-white">
                <img src={image} alt="" className="w-full h-[300px] object-cover" />
                <div className="p-7 min-h-[260px] flex flex-col">
                  <h3 className="text-[24px] font-bold">{title}</h3>
                  <p className="mt-4 text-sm leading-6 text-white/75">{text}</p>
                  <div className="mt-auto pt-7"><PinkButton className="w-full">See courses</PinkButton></div>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.article variants={itemVariants} className="mt-5 rounded-2xl overflow-hidden bg-[#03064e] text-white grid md:grid-cols-2">
            <img
              src="https://images.prismic.io/passmefast/ZtHb2UaF0TcGJmLz_woman-taking-her-drivers-license-test-vehicle2.png?auto=format,compress"
              alt="Woman taking her driving test"
              className="w-full h-full min-h-[350px] object-cover"
            />
            <div className="p-8 sm:p-12 flex flex-col justify-center">
              <h3 className="text-[24px] leading-8 font-bold">Biggest national network of driving instructors</h3>
              <p className="mt-5 text-sm leading-6 text-white/75">Our network of over 5,000 experienced driving instructors is one of the largest in the UK. Find a driving instructor with PassMeFast in your local area to get you motoring.</p>
              <div className="mt-8"><PinkButton className="w-full">See courses</PinkButton></div>
            </div>
          </motion.article>
        </div>
      </motion.section>

      <motion.section {...sectionReveal} className="max-w-[1216px] mx-auto px-5 lg:px-0 py-16">
        <SectionTitle color="#10bd70">Common questions about our driving lessons and driving instructors</SectionTitle>
        <div className="border-t border-slate-200">
          {faqs.map(([question, answer], index) => (
            <motion.article variants={itemVariants} key={question} className="border-b border-slate-200">
              <button
                type="button"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full py-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:text-[#10bd70] transition-colors"
                aria-expanded={openFaq === index}
              >
                <span className="text-[18px] sm:text-[20px] font-semibold">{question}</span>
                <span className="text-2xl font-light cursor-pointer">{openFaq === index ? '−' : '+'}</span>
              </button>
              {openFaq === index && <p className="pb-6 max-w-4xl text-sm leading-6 text-slate-600">{answer}</p>}
            </motion.article>
          ))}
        </div>
        <p className="mt-7 text-sm">Got any more questions? Read all our FAQs on our <u>Frequently Asked Questions</u>.</p>
      </motion.section>

      <motion.section {...sectionReveal} className="relative justify-center overflow-hidden bg-gradient-to-r from-[#000e4b] to-[#00ff4a] flex w-full py-4 before:absolute before:-left-[85%] before:-top-[110%] before:z-0 before:h-full before:w-full before:rounded-full before:bg-[#000e4b]/40 before:content-[''] after:absolute after:-bottom-[100%] after:-right-[85%] after:z-0 after:h-full after:w-full after:rounded-full after:bg-white/25 after:content-['']">
        <div className="relative z-10 max-w-[1216px] mx-auto w-full px-5 lg:px-0 flex flex-col min-[866px]:flex-row gap-10 items-center">
          <motion.div variants={itemVariants} className="w-full h-max text-center min-[866px]:text-left">
            <h3 className="mt-4 max-w-lg font-bold text-4xl max-[866px]:text-2xl leading-10 mb-11 mx-auto min-[866px]:mx-0 text-white">
              Get in the fast lane with an intensive driving course
            </h3>
            <a
              href="#fast-track"
              className="inline-flex items-center justify-center gap-3 w-max rounded-full border-2 border-[#fa649b] bg-[#fa649b] hover:bg-[#ed4f87] hover:border-[#ed4f87] text-white py-3 px-10 text-lg font-semibold transition-all duration-300"
            >
              FAST-TRACK ME
            </a>
          </motion.div>
          <motion.img
            variants={itemVariants}
            src="https://images.prismic.io/passmefast/ZqIZxR5LeNNTxfEr_car-with-shadow-lg.png?auto=format%2Ccompress&fit=max&w=1920"
            alt=""
            className="hidden min-[866px]:block min-w-full xl:min-w-[680px] w-[680px] max-w-none h-auto"
          />
        </div>
      </motion.section>
    </main>
  );
}
