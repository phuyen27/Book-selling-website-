import React, { useState } from 'react'
import { FaBookOpen, FaFeatherAlt } from 'react-icons/fa'

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const [activeLinks, setActiveLink] = useState('#home')

  const NavLinks= [
    {href:"#home", label:"Home"},
    {href:"#about", label:"About us"},
    {href:"#shop", label:"Shop"},
    {href:"#testimonials", label:"Testimonials"},
  ]

  return (
    <nav className='fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm'>
        <div className='w-full container mx-auto flex items-center justify-between px-4 sm:px-6
        lg:px-8 md:h-20 h-16'>
            {/*logo*/}
           
            <div className='flex items-center gap-1 cursor-pointer'>
              <FaBookOpen className='text-green-500 w-5 h-5 hover:scale-110 transition-transform' />
              <FaFeatherAlt className='text-green-800 w-4 h-4 -ml-1 hover:scale-110 transition-transform' />
            </div>

            {/*navtiems*/}

            <div className='hidden md:flex items-center gap-10'>
              {
                NavLinks.map((link, index)=> (
                  <a key={index} href={link.href}
                  onClick={()=>setActiveLink(link.href)}
                   className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5
                    hover:text-green-700 after:w-0 hover:after:w-full after:bg-green-400 after:transition-all 
                    ${activeLinks === link.href ? "text-green-700 after:w-full" : "text-gray-600 hover:text-gray-900"} `}>
                    {link.label}</a>
                ))
              }
            </div>
            {/*btn*/}
            
            {/*mobile menu*/}
        </div>
  </nav>
  )
}

export default Navbar