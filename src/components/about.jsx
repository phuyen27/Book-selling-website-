import React from "react";
import { FaHeadset, FaBookOpen, FaRocket, FaShieldAlt } from "react-icons/fa";
import { motion } from 'framer-motion';
import { fadeIn } from "../ultils/motion";

const features = [
  {
    icon: <FaHeadset className="text-3xl text-amber-700" />,
    title: "24/7 Support",
    desc: "We’re here whenever you need help or have questions."
  },
  {
    icon: <FaBookOpen className="text-3xl text-amber-700" />,
    title: "Wide Book Range",
    desc: "Thousands of titles from every genre and author."
  },
  {
    icon: <FaRocket className="text-3xl text-amber-700" />,
    title: "Fast Delivery",
    desc: "Books delivered quickly right to your doorstep."
  },
  {
    icon: <FaShieldAlt className="text-3xl text-amber-700" />,
    title: "Secure Payments",
    desc: "Your information is safe with our secure checkout."
  }
];

const About = () => {
  return (
    <section id="about" className="container mx-auto flex flex-col-reverse md:flex-row justify-between items-center pt-44 pb-20 px-4 sm:px-6 lg:px-8 bg-orange-50">
      
      {/* Left side */}
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial="hidden"
        whileInView="show"
        className="w-full md:w-1/2 space-y-8"
      >
        <img
          src="https://s2982.pcdn.co/wp-content/uploads/2024/10/pumpkins-and-reading.png"
          alt="Reading books"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </motion.div>

      {/* Right side */}
      <div className="w-full md:w-1/2 space-y-8 mt-12 md:mt-0 md:pl-10">
        <h1 className="text-4xl font-bold text-orange-900">Why Choose Us</h1>
        <span className="text-yellow-900 text-lg">
          Discover the World of Knowledge with us
        </span>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 rounded-xl hover:bg-orange-100 transition"
            >
              {item.icon}
              <div>
                <h3 className="font-semibold text-lg text-orange-800">
                  {item.title}
                </h3>
                <p className="text-sm text-yellow-800">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
