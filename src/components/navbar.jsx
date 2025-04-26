import React, { useState } from 'react'
import { FaBookOpen, FaFeatherAlt } from 'react-icons/fa'
import { HiMenu, HiX} from 'react-icons/hi'

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

             {/*mobile menu*/}
            <button onClick={()=> setIsMenuOpen(!isMenuOpen)} className='md:hidden p-2'>
              {
                isMenuOpen ? <HiX className='size-6'/> : <HiMenu className='size-6'/>
              }
            </button>

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
            <button className='hidden md:block bg-green-900 text-white px-6 py-2.5 rounded-lg hover:bg-green-800 text-sm
            font-medium transition-all hover:shadow-lg hover:shadow-green-200'>
                <a href='#newsletter'>Get in touch</a>
            </button>
            {/*mobile menu*/}
        </div>

        {/*mobile menu*/}

        {
          isMenuOpen && (
            <div className='md:hidden bg-white border-t border-gray-100 py-4'>
              <div className='container mx-auto px-4 space-y-3'>
                {NavLinks.map((link, index) => (
                    <a 
                    key={index}
                    onClick={()=>{
                      setActiveLink(link.href)
                    }} 
                    className={`block text-sm font-medium py-2 ${activeLinks ===link.href ?"text-green-700 after:w-full" : "text-gray-600 hover:text-gray-900"}`} href={link.href}>{link.label}</a>
                ))}

                <button className='w-full md:block bg-green-900 text-white px-6 py-2.5 rounded-lg hover:bg-green-800 text-sm
                    font-medium transition-all hover:shadow-lg hover:shadow-green-200'>
                <a href='#newsletter'>Get in touch</a>
            </button>
              </div>
            </div>
          )
        }
  </nav>
  )
}

export default Navbar