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
            image: value.image
          }))
        : [];
      setBooks(productArray);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="px-4 py-16 max-w-6xl mx-auto" id="#shop">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-12">
        📚 Our Book Collection
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {books.map((book) => (
          <div
            key={book.id}
            className="bg-green-50 rounded-xl shadow hover:shadow-2xl hover:brightness-105 transition-all duration-300 overflow-hidden group"
          >
            <img
              src={book.image}
              alt={book.title}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />

            <div className="p-3">
              <h2 className="text-sm font-semibold text-gray-800 group-hover:text-green-700 transition-colors">
                {book.title}
              </h2>
              <p className="text-xs text-gray-500 italic mt-1">{book.author}</p>
              <p className="text-base font-bold text-green-700 mt-2">
                {book.price.toLocaleString()}đ
              </p>

              <button className="mt-3 w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition-colors text-sm">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
