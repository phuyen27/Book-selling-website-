import React from "react";
import { motion } from "framer-motion";

const authors = [
  {
    name: "John Grisham",
    image:
      "https://imageio.forbes.com/specials-images/imageserve/666c5a13ba43429cc1280f78/Photo-of-John-Grisham-taken-against-a-red-background-/0x0.jpg?format=jpg&crop=2708,1523,x0,y140,safe&width=1440",
  },
  {
    name: "Henry Wadsworth",
    image:
      "https://imageio.forbes.com/specials-images/imageserve/6671672de54b373fe7880c1f/Portrait-Of-Henry-Wadsworth-Longfellow-/0x0.jpg?format=jpg&crop=1520,856,x0,y176,safe&width=1440",
  },
  {
    name: "J.K. Rowling",
    image:
      "https://imageio.forbes.com/specials-images/imageserve/666c5d03e48ffe96216cc96e/J-K--Rowling-attends-the-European-premiere-of--Fantastic-Beasts-And-Where-To-Find/960x0.jpg?format=jpg&width=1440",
  },
];

const Authors = () => {
  return (
    <section id="author" className="bg-[#fefaf6] py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl md:text-4xl font-bold text-[#5a3826] text-center mb-6">
        ✨ Featured Authors
      </h1>

      <div className="flex justify-center gap-6 text-sm sm:text-base font-medium text-[#7a4b2d] mb-10">
        <span className="cursor-pointer hover:text-[#a05e39] transition">
          Top 200 Authors
        </span>
        <span className="cursor-pointer hover:text-[#a05e39] transition">
          Favorite India Authors
        </span>
        <span className="cursor-pointer hover:text-[#a05e39] transition">
          Under 30
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {authors.map((author, index) => (
          <motion.div
            key={index}
            className="bg-white border border-[#ecd9c6] rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 30 }} // Mới load thì opacity 0 và y = 30
            animate={{ opacity: 1, y: 0 }} // Sau khi load thì opacity = 1 và y = 0
            transition={{ delay: index * 0.2, duration: 0.8, type: "spring" }} // Độ trễ và animation mượt
          >
            <div className="overflow-hidden">
              <img
                src={author.image}
                alt={author.name}
                className="w-full h-72 object-cover transform transition-transform duration-300 hover:-translate-y-2"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-[#4a2b1c] tracking-wide">
                {author.name}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Authors;
