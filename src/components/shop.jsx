import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { ref, onValue } from "firebase/database";

const Shop = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const productsRef = ref(db, "products/");
    const unsubscribe = onValue(productsRef, (snapshot) => {
      const data = snapshot.val();
      const productArray = data
        ? Object.entries(data).map(([id, value]) => ({
            id,
            title: value.title,
            author: value.author,
            price: value.price,
            image: value.image,
          }))
        : [];
      setBooks(productArray);
    });

    return () => unsubscribe();
  }, []);

  return (
    <section className="px-4 py-20 max-w-7xl mx-auto " id="shop">
      <h1 className="text-4xl font-extrabold text-center text-amber-900 mb-4">
        📖 Our Cozy Book Corner
      </h1>
      <p className="text-center text-stone-700 mb-12 max-w-xl mx-auto">
        Browse through our warm collection of hand-picked titles perfect for every mood and mind.
      </p>

      {/* Danh sách sách */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {books.map((book) => (
          <div
            key={book.id}
            className="bg-[#e8ded1] rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 flex flex-col"
          >
            <img
              src={book.image}
              alt={book.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-4 flex-1 flex flex-col">
              <h2 className="text-lg font-semibold text-amber-800 mb-1">{book.title}</h2>
              <p className="text-sm text-stone-600 mb-2 italic">by {book.author}</p>
              <div className="mt-auto">
                <p className="text-lg font-bold text-amber-700">${book.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Shop;
