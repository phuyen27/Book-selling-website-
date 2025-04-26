import React, { useState } from "react";

const BookOpenCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-64 h-40 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        perspective: "1000px",
      }}
    >
      <div
        className="relative w-full h-full transition-transform duration-500 ease-in-out"
        style={{
          transformStyle: "preserve-3d",
          transform: isHovered
            ? "scale(1.05) rotateX(5deg)"
            : "scale(1) rotateX(0deg)",
        }}
      >
        {/* Mặt trước */}
        <div
          className="absolute w-full h-full bg-amber-100 rounded-xl shadow-lg flex items-center justify-center text-2xl font-bold text-amber-800"
          style={{
            backfaceVisibility: "hidden",
          }}
        >
          📖 Open Me
        </div>

        {/* Mặt sau - thông tin sách */}
        <div
          className="absolute w-full h-full bg-amber-50 rounded-xl shadow-lg flex flex-col items-center justify-center p-4"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
        >
          <h2 className="text-xl font-semibold text-amber-900 mb-2">Welcome!</h2>
          <p className="text-sm text-stone-600 text-center">
            Dive into the world of stories 🌟
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookOpenCard;
