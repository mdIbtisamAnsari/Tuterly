import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { useInView } from 'react-intersection-observer';

// Data structured around a student's learning journey using your public folder images
const steps = [
  {
    id: 1,
    title: 'Set Your Study Schedule',
    text: 'Connect with a tutor who fits into your life. Whether you are balancing university lectures, a camera hobby, or a busy calendar, our tutors map out a personalized curriculum that aligns with your timeline.',
    image: '/4.jpeg', // Points to public/4.jpeg
  },
  {
    id: 2,
    title: 'Bridge Your Knowledge Gaps',
    text: 'Every student starts somewhere different. Our platform analyzes your current experience, competence, and learning style to match you with an educator who specializes exactly in the abilities you want to grow.',
    image: '/3.jpeg', // Points to public/3.jpeg
  },
  {
    id: 3,
    title: 'Learn Code & Hard Skills 1-on-1',
    text: 'Stuck debugging an Object-Oriented Python script or setting up your development environment? Skip hours of frustrating forum scrolling. Pair program live with expert developers who explain the "why" behind the code.',
    image: '/2.jpeg', // Points to public/2.jpeg
  },
  {
    id: 4,
    title: 'Break Language Barriers',
    text: 'From conversational Spanish to technical German, connect with native speakers and professional language tutors. Practice speaking in a low-pressure environment and get instant feedback on your grammar and accent.',
    image: '/1.jpeg', // Points to public/1.jpeg
  },
];

const TimelineRow = ({ step, index }: { step: typeof steps[0]; index: number }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const isEven = index % 2 === 0;

  // Animation configurations sliding outward from the central wave line
  const textVariants: Variants = {
    hidden: { opacity: 0, x: isEven ? -40 : 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, x: isEven ? 40 : -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' as const, delay: 0.15 } },
  };

  return (
    <div ref={ref} className="relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center min-h-[50vh] py-16">
      
      {/* TEXT BLOCKS */}
      <motion.div
        variants={textVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className={`w-full px-4 flex flex-col justify-center ${
          isEven ? 'md:text-right md:pr-20 order-1' : 'md:text-left md:pl-20 order-1 md:order-2'
        }`}
      >
        <h3 className="text-3xl font-extrabold mb-4 text-slate-900 dark:text-white leading-tight">
          {step.title}
        </h3>
        <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed font-normal">
          {step.text}
        </p>
      </motion.div>

      {/* IMAGE BLOCKS */}
      <motion.div
        variants={imageVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className={`w-full px-4 flex justify-center ${
          isEven ? 'order-2 md:pl-20' : 'order-2 md:order-1 md:pr-20'
        }`}
      >
        <div className="relative group w-full max-w-md">
          {/* Subtle background glow effect on hover */}
          <div className="absolute -inset-1 bg-linear-to-r from-[#00FFB3] to-[#00FFB3] rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300 pointer-events-none"></div>
          <img
            src={step.image}
            alt={step.title}
            className="relative w-full h-72 md:h-80 object-cover rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 transition duration-300"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default function TutorJourney() {
  return (
    <div className="relative max-w-6xl mx-auto px-6 py-24">
      
      {/* CENTRAL DOWNSCALING WAVE VECTOR */}
      <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-20 hidden md:block z-0 pointer-events-none">
        <svg
          className="w-full h-full text-[#00FFB3]" 
          preserveAspectRatio="none"
          viewBox="0 0 100 1000"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Extended Bezier pathing to account for 4 distinct timeline nodes */}
          <path
            d="M50,0 
               C90,120 10,130 50,250 
               C90,370 10,380 50,500 
               C90,620 10,630 50,750 
               C90,870 10,880 50,1000"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeDasharray="4 4" /* Makes it a clean, modern dashed track line */
          />
        </svg>
      </div>

      {/* RENDER CONTENT SECTION */}
      <div className="relative z-10 space-y-16 md:space-y-0">
        {steps.map((step, index) => (
          <TimelineRow key={step.id} step={step} index={index} />
        ))}
      </div>
    </div>
  );
}