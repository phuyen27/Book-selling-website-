import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { motion } from "framer-motion";
import { fadeIn, textVariant } from '../ultils/motion'

const blogPosts = [
  {
    id: 1,
    title: "The Power of Habit",
    author: "Charles Duhigg",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    summary: "An insightful look into how habits are formed and how you can reshape them to transform your life.",
    date: "April 18, 2024"
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
    summary: "Learn how small changes lead to remarkable results in personal and professional life.",
    date: "March 25, 2024"
  },
  {
    id: 3,
    title: "Deep Work",
    author: "Cal Newport",
    image: "https://images.unsplash.com/photo-1516979187457-637abb4f9356",
    summary: "Explore the importance of focused work in a distracted world and how to master it.",
    date: "February 15, 2024"
  },
  {
    id: 4,
    title: "Start with Why",
    author: "Simon Sinek",
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765",
    summary: "Discover how great leaders inspire action by starting with a powerful 'why'.",
    date: "January 10, 2024"
  },
  {
    id: 5,
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66",
    summary: "A fascinating dive into the dual systems that drive the way we think and make decisions.",
    date: "December 8, 2023"
  },
  {
    id: 6,
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    summary: "A no-nonsense guide to living a better life by caring less about unimportant things.",
    date: "November 2, 2023"
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-16 px-4 max-w-7xl mx-auto">
      <motion.div 
        variants={fadeIn('up', 0.3)}
        className="text-center mb-12"
      >
        <motion.h2 
          variants={textVariant(0.2)}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Featured Reads from Our Blog
        </motion.h2>
        <motion.p 
          variants={fadeIn('up', 0.4)}
          className="text-gray-600"
        >
          Discover thought-provoking books and insights to fuel your curiosity
        </motion.p>
      </motion.div>

      <motion.div 
        variants={fadeIn('up', 0.5)}
        className="relative"
      >
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="blog-swiper md:mb-12"
        >
          {blogPosts.map((post, index) => (
            <SwiperSlide key={post.id} className='h-full md:py-12 py-4'>
              <motion.div 
                variants={fadeIn('up', 0.3 * (index + 1))}
                className="text-center bg-white p-4 rounded-lg shadow-md h-full flex flex-col"
              >
                <motion.div 
                  variants={fadeIn('down', 0.4 * (index + 1))}
                  className="w-full h-48 mb-4"
                >
                  <motion.img
                    variants={fadeIn('up', 0.5 * (index + 1))}
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover rounded-md"
                  />
                </motion.div>
                <motion.h3 
                  variants={textVariant(0.3)}
                  className="font-semibold text-xl mb-2"
                >
                  {post.title}
                </motion.h3>
                <motion.p 
                  variants={fadeIn('up', 0.4 * (index + 1))}
                  className="text-sm text-gray-500 mb-1"
                >
                  by {post.author}
                </motion.p>
                <motion.p 
                  variants={fadeIn('up', 0.6 * (index + 1))}
                  className="text-gray-600 mb-3"
                >
                  {post.summary}
                </motion.p>
                <motion.span 
                  variants={fadeIn('up', 0.7 * (index + 1))}
                  className="text-xs text-gray-400"
                >
                  {post.date}
                </motion.span>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <motion.div 
          variants={fadeIn('up', 0.7)}
          className="flex justify-center gap-4 mt-8"
        >
          <motion.button 
            variants={fadeIn('right', 0.8)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="swiper-button-prev-custom w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-blue-500 hover:text-white cursor-pointer transition-colors"
          >
            <BsChevronLeft className="w-6 h-6" />
          </motion.button>
          <motion.button 
            variants={fadeIn('left', 0.8)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="swiper-button-next-custom w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-blue-500 hover:text-white cursor-pointer transition-colors"
          >
            <BsChevronRight className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Blog;
