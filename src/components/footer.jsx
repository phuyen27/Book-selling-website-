import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold text-[#4a2b1c] mb-4">About Us</h3>
            <p className="text-gray-600">
              We are passionate about books and aim to provide the best reading experience. Explore a wide range of books and discover new authors.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-[#4a2b1c] mb-4">Quick Links</h3>
            <ul className="text-gray-600 space-y-2">
              <li><a href="#home" className="hover:text-orange-700">Home</a></li>
              <li><a href="#about" className="hover:text-orange-700">About Us</a></li>
              <li><a href="#shop" className="hover:text-orange-700">Shop</a></li>
              <li><a href="#author" className="hover:text-orange-700">Authors</a></li>
              <li><a href="#contact" className="hover:text-orange-700">Contact</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold text-[#4a2b1c] mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start gap-6 text-[#7a4b2d]">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="text-xl hover:text-orange-700 transition-all" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-xl hover:text-orange-700 transition-all" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-xl hover:text-orange-700 transition-all" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className="text-xl hover:text-orange-700 transition-all" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-gray-300 pt-8">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} BookStore. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
