import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: '5 Cuốn sách phát triển bản thân nên đọc năm nay',
      author: 'Nguyễn Văn A',
      date: '25 Tháng 4, 2025',
      excerpt: 'Khám phá những cuốn sách giúp bạn tư duy tích cực và đạt được mục tiêu trong cuộc sống...',
      image: '/images/self-help.jpg',
    },
    {
      id: 2,
      title: 'Phỏng vấn tác giả Trần B về tiểu thuyết mới',
      author: 'Minh Trang',
      date: '20 Tháng 4, 2025',
      excerpt: 'Một cuộc trò chuyện thú vị với tác giả nổi tiếng về quá trình sáng tác và cảm hứng...',
      image: '/images/author-interview.jpg',
    },
    {
      id: 3,
      title: 'Sách thiếu nhi hay nhất tháng 4',
      author: 'Hoàng Anh',
      date: '10 Tháng 4, 2025',
      excerpt: 'Những tựa sách giàu tính giáo dục và giải trí dành cho các bé...',
      image: '/images/kids-books.jpg',
    },
  ];

  return (
    <div className="py-20 px-6 md:px-16">
      <h2 className="text-3xl font-extrabold text-[#4b2e17] mb-12 text-center tracking-wide uppercase">
        Bài Viết Mới
      </h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={1.2}
        centeredSlides
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        breakpoints={{
          768: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {posts.map((post) => (
          <SwiperSlide key={post.id}>
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col h-full transform hover:-translate-y-1">
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-[#4e2e1c] mb-2 hover:text-[#a0673c] transition-colors cursor-pointer leading-tight">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-400 mb-3">{post.author} • {post.date}</p>
                <p className="text-base text-gray-600 flex-grow line-clamp-3">{post.excerpt}</p>
                <div className="mt-5">
                  <button className="inline-block px-4 py-2 text-sm font-semibold text-white bg-[#a0673c] rounded-full hover:bg-[#b67445] transition-colors">
                    Đọc thêm →
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Blog;
