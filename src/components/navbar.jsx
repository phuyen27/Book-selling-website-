import React, { useState } from 'react'
import { FaBookOpen, FaFeatherAlt } from 'react-icons/fa'
import { HiMenu, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'
import { fadeIn } from '../ultils/motion'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeLinks, setActiveLink] = useState('#home')

  const NavLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About us" },
    { href: "#author", label: "Authors" },
    { href: "#shop", label: "Shop" },
    { href: "#testimonials", label: "Testimonials" },
  ]

  const handleScroll = (href) => {
    // Khi click vào link, scroll mượt mà đến phần tương ứng
    const element = document.getElementById(href.slice(1)); // Cắt bỏ dấu # và tìm phần tử với ID tương ứng
    window.scrollTo({
      top: element.offsetTop, // Đến vị trí phần tử
      behavior: 'smooth' // Cuộn mượt mà
    });
  }

  return (
    <motion.nav
      variants={fadeIn('down', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-orange-100 shadow-sm"
    >
      <div className="w-full container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 md:h-20 h-16">
        {/* Logo */}
        <div className="flex items-center gap-1 cursor-pointer">
          <FaBookOpen className="text-amber-700 w-5 h-5 hover:scale-110 transition-transform" />
          <FaFeatherAlt className="text-orange-900 w-4 h-4 -ml-1 hover:scale-110 transition-transform" />
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
          {isMenuOpen ? <HiX className="size-6" /> : <HiMenu className="size-6" />}
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {NavLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={(e) => {
                e.preventDefault(); // Ngừng hành động mặc định của <a>
                setActiveLink(link.href); // Cập nhật active link
                handleScroll(link.href); // Cuộn mượt mà
              }}
              className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 
                hover:text-orange-900 after:w-0 hover:after:w-full after:bg-amber-400 after:transition-all
                ${activeLinks === link.href ? "text-orange-900 after:w-full" : "text-gray-700 hover:text-orange-800"}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <button className="hidden md:block bg-amber-700 text-white px-6 py-2.5 rounded-lg hover:bg-amber-800 text-sm
            font-medium transition-all hover:shadow-lg hover:shadow-amber-200">
          <a href="#newsletter">Get in touch</a>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-orange-100 py-4">
          <div className="container mx-auto px-4 space-y-3">
            {NavLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault(); // Ngừng hành động mặc định của <a>
                  setActiveLink(link.href); // Cập nhật active link
                  handleScroll(link.href); // Cuộn mượt mà
                }}
                className={`block text-sm font-medium py-2 ${activeLinks === link.href
                  ? "text-orange-900"
                  : "text-gray-700 hover:text-orange-800"}`}
              >
                {link.label}
              </a>
            ))}
            <button className="w-full bg-amber-700 text-white px-6 py-2.5 rounded-lg hover:bg-amber-800 text-sm
              font-medium transition-all hover:shadow-lg hover:shadow-amber-200">
              <a href="#newsletter">Get in touch</a>
            </button>
          </div>
        </div>
      )}
    </motion.nav>
  )
}

export default Navbar
