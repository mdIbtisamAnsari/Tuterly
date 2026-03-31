import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import img1 from "../assets/1.jpeg"
import img2 from "../assets/2.jpeg"
import img3 from "../assets/3.jpeg"
import img4 from "../assets/4.jpeg"


type NavbarProps = {
    user: { fullName: string; profile?: string; email: string, role:'teacher'|'student' } | null;
};


const Hero: React.FC<NavbarProps> = ({ user }) => {
  const stars = [
    { src: img1, top: '15%', left: '10%', delay: 0, size: 'w-16 h-16' },
    { src: img2, top: '25%', right: '15%', delay: 0.3, size: 'w-12 h-12' },
    { src: img3, bottom: '20%', left: '20%', delay: 0.6, size: 'w-14 h-14' },
    { src: img4, top: '40%', right: '25%', delay: 0.9, size: 'w-10 h-10' }
  ];

  const buttonText:"Find a Teacher"|"Find a Student" = user?.role==="teacher" ? "Find a Student" : "Find a Teacher";

  return (
    <>
      <section className='relative bg-primary p-8 overflow-hidden'>
        {stars.map((star, idx) => (
          <motion.img
            key={idx}
            src={star.src}
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ 
              opacity: 0.7, 
              scale: 1, 
              rotate: 0,
              y: [0, -10, 0]
            }}
            transition={{
              delay: star.delay,
              duration: 0.8,
              y: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            className={`absolute ${star.size} object-cover rounded-full shadow-lg z-0 opacity-70`}
            style={{
              top: star.top,
              left: star.left,
              right: star.right,
              bottom: star.bottom,
              filter: 'brightness(0.8) contrast(1.2)'
            }}
            alt={`Star ${idx + 1}`}
          />
        ))}

        <div className='grid md:items-center justify-items-center md:mt-25'>
          <h1 className='font-heading text-8xl max-md:text-5xl p-8 z-10 row-start-1 col-start-1 text-center max-md:pt-20 md:tracking-widest leading-snug text-white drop-shadow-lg'>
            Ignite Your Learning
          </h1>

          <img
            src="logo.svg"
            className='blur relative md:scale-200 row-start-1 col-start-1 z-5'
          />
        </div>
        <div className='flex gap-4 mt-25 z-10 relative justify-center max-sm:flex-col'>
          
            <motion.button
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className='text-center bg-white text-primary font-medium px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-200'
            >
              <Link to='/portal' className='w-full h-full flex items-center justify-center'>
                {buttonText}
              </Link>
            </motion.button>
          
          
          <motion.button
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className='border border-white/30 text-white font-medium px-6 py-3 rounded-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-200'
          >
            Become a Teacher
          </motion.button>
        </div>
        <p className='text-accent text-center mt-30 z-10 relative'>
          Bridge the gap between curiosity and mastery. Whether you're a student seeking
          guidance <br></br>or a tutor looking to share knowledge, our platform makes
          personalized learning seamless.
        </p>
      </section>
    </>
  );
};

export default Hero;