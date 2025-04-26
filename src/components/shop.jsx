import React from 'react'

const books = [
  {
    id: 1,
    title: "Bí mật tư duy triệu phú",
    author: "T. Harv Eker",
    price: 99000,
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
  },
  {
    id: 2,
    title: "Đắc nhân tâm",
    author: "Dale Carnegie",
    price: 79000,
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e"
  },
  {
    id: 3,
    title: "Tuổi trẻ đáng giá bao nhiêu",
    author: "Rosie Nguyễn",
    price: 85000,
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794"
  },
]

const Shop = () => {
  return (
<div className="px-6 py-16 max-w-7xl mx-auto" id='#shop'>
  <h1 className="text-4xl font-bold text-center text-green-700 mb-14">📚 Sách Hay Mỗi Ngày</h1>
  
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
    {books.map(book => (
      <div 
        key={book.id} 
        className="bg-green-50 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
      >
        <img 
          src={book.image} 
          alt={book.title} 
          className="w-full h-64 object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-300"
        />
        
        <div className="p-5">
          <h2 className="text-lg font-semibold text-gray-800 group-hover:text-green-700 transition-colors">
            {book.title}
          </h2>
          <p className="text-sm text-gray-500 italic mt-1">{book.author}</p>
          <p className="text-base font-bold text-green-700 mt-3">{book.price.toLocaleString()}đ</p>
          
          <button className="mt-5 w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-2.5 rounded-xl transition-colors">
            <span>Thêm vào giỏ</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 6h13a1 1 0 001-1M7 13l1.5-6M6 21a1 1 0 100-2 1 1 0 000 2zm12 0a1 1 0 100-2 1 1 0 000 2z"/></svg>
          </button>
        </div>
      </div>
    ))}
  </div>
</div>

  )
}

export default Shop
