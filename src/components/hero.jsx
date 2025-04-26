import React from 'react'
import { FaBookOpen } from 'react-icons/fa'
import hero1 from '../assets/hero_1.png';
import hero2 from '../assets/hero_2.png';
import hero3 from '../assets/hero_3.png';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../ultils/motion';

const Hero = () => {
  return (
    <section className='container mx-auto flex flex-col md:flex-row justify-between items-center pt-44 pb-20 px-4 sm:px-6 lg:px-8'>
      {/*left col*/}
      <div className='w-full md:w-1/2 space-y-8'>
        <motion.div
         variants={fadeIn('right',0.2)}
         initial="hidden"
         whileInView="show">   
          <div className='flex items-center gap-2 w-fit px-4 py-2 rounded-4xl bg-pink-50 hover:bg-pink-200 transitions-colors cursor-pointer
          group'>
            <FaBookOpen className='text-green-500 w-5 h-5 group-hover:scale-110 transition-transform' />
            <span className='text-sm font-medium'>Let's go shop</span>
          </div>
          </motion.div>

          <motion.h1
           variants={textVariant(0.3)}
           initial="hidden"
           whileInView="show"
           className='text-3xl md:text-4xl lg:text-5xl font-bold leading-tight'>
            Discover the World of Knowledge with 
            <span className='text-green-600 relative inline-block'>
              Books for Every Mind
              <span className='absolute bottom-0 left-0 w-full h-0.5 bg-green-200/60'></span>
            </span> 
            <span className='inline-block animate-spin-slow ml-2'>📖</span>

          </motion.h1>

           {/* Optional Additions for Right Column */}
          <motion.p
           variants={fadeIn('up',0.4)}
           initial="hidden"
           whileInView="show"
           className='text-sm md:text-base text-gray-700'>
            Explore our collection of books for all ages and interests. Whether you’re looking for the latest bestsellers or timeless classics, we’ve got you covered.
          </motion.p>
          
          {/* Call-to-action Button */}
          <motion.button 
          variants={fadeIn('right',0.1)}
          initial="hidden"
          whileInView="show"
          className='bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-all'>
            Shop Now
          </motion.button>
        
    </div>

      {/*right col*/}
      <div className='w-full md:w-1/2 flex gap-4 mt-16 md:mt-0'>
        <motion.div 
        variants={fadeIn('up',0.4)}
        initial="hidden"
        whileInView="show"
        className='flex flex-col gap-4 flex-1'>
          <img 
            src={hero1} 
            alt="Hero 1" 
            className='rounded-2xl object-cover h-[430px] w-full shadow-md transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl hover:brightness-110' 
          />
        </motion.div>

        <motion.div 
        variants={fadeIn('up',0.5)}
        initial="hidden"
        whileInView="show"
        className='flex flex-col gap-4 flex-1'>
          <div className='relative'>
            <img 
              src={hero2} 
              alt="Hero 2" 
              className='rounded-2xl object-cover h-[430px] w-full relative top-24 shadow-md transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl hover:brightness-110' 
            />
          </div>
        </motion.div>
        <motion.div 
        variants={fadeIn('up',0.6)}
        initial="hidden"
        whileInView="show"
        className='flex flex-col gap-4 flex-1'>
          <img 
            src={hero3} 
            alt="Hero 3" 
            className='rounded-2xl object-cover h-[430px] w-full shadow-md transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl hover:brightness-110' 
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero