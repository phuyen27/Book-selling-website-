import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { ref, onValue } from "firebase/database";
import { AnimatePresence, motion } from 'framer-motion'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";  // Import icon mũi tên

const Shop = () => {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(5); // Mỗi trang sẽ hiển thị 5 sản phẩm

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

  // Tính toán các sản phẩm cần hiển thị trên mỗi trang
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  // Hàm chuyển sang trang tiếp theo
  const nextPage = () => {
    if (currentPage * booksPerPage < books.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Hàm quay lại trang trước
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
 

  return (
    <section className="px-4 py-20 max-w-7xl mx-auto" id="shop">
      <h1 className="text-4xl font-bold text-center text-amber-900 mb-4">
        📚 Explore Our Book Collection
      </h1>
      <p className="text-center text-stone-600 mb-12 max-w-xl mx-auto text-lg">
        Carefully curated books to feed your curiosity, imagination, and soul.
      </p>

      <AnimatePresence mode="wait">
  <motion.div
    key={currentPage} // key thay đổi để AnimatePresence biết khi nào cần animate
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4 }}
    className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
  >
    {currentBooks.map((book) => (
      <div
        key={book.id}
        className="bg-white border border-stone-200 rounded-xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden flex flex-col"
      >
        <div className="overflow-hidden">
          <img
            src={book.image}
            alt={book.title}
            className="cursor-pointer w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4 flex-1 flex flex-col">
          <h2 className="text-lg font-semibold text-gray-900 mb-1">{book.title}</h2>
          <p className="text-sm text-stone-500 italic mb-3">by {book.author}</p>
          <div className="mt-auto flex items-center justify-between">
            <span className="text-amber-700 font-bold text-lg">${book.price}</span>
            <button className="cursor-pointer text-sm text-white bg-amber-600 hover:bg-amber-700 px-3 py-1.5 rounded-md transition-all">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    ))}
  </motion.div>
</AnimatePresence>


     {/* Pagination - Page numbers */}
      <div className="flex justify-center gap-2 mt-8 flex-wrap">
        {Array.from({ length: Math.ceil(books.length / booksPerPage) }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={`cursor-pointer w-10 h-10 rounded-full text-sm font-semibold flex items-center justify-center 
                        ${currentPage === i + 1
                          ? "bg-amber-600 text-white"
                          : "bg-white border border-amber-400 text-amber-600 hover:bg-amber-100"}
                        transition-all`}
          >
            {i + 1}
          </button>
        ))}
      </div>

    </section>
  );
};

export default Shop;
