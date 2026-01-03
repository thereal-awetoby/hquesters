import React from 'react'
import { assets } from '../assets/assets.js'

const Footer = () => {
  return (
    <footer className='w-full bg-black text-white pt-12 pb-8 mt-10'>
      <div className='flex flex-col items-center gap-6'>
        
        {/* Social Logos */}
        <div className='flex gap-5'>
          {/* Ensure these match your assets.js keys */}
          <img src={assets.twitter_icon} alt="TW" className='w-10 h-10 bg-white rounded-full p-1.5 object-contain cursor-pointer hover:scale-110 transition-transform' />
          <img src={assets.twitter_icon} alt="TW" className='w-10 h-10 bg-white rounded-full p-1.5 object-contain cursor-pointer hover:scale-110 transition-transform' />
          <img src={assets.github} alt="GH" className='w-10 h-10 bg-white rounded-full p-1.5 object-contain cursor-pointer hover:scale-110 transition-transform' />
          <img src={assets.github} alt="GH" className='w-10 h-10 bg-white rounded-full p-1.5 object-contain cursor-pointer hover:scale-110 transition-transform' />
        </div>

        {/* Links */}
        <div className='flex gap-8 text-gray-300 font-serif text-lg'>
          <p className='cursor-pointer hover:text-white'>Home</p>
          <p className='cursor-pointer hover:text-white'>About</p>
          <p className='cursor-pointer hover:text-white'>Contact Us</p>
          <p className='cursor-pointer hover:text-white'>Our Team</p>
        </div>

        {/* Bottom Bar */}
        <div className='w-full border-t border-gray-900 mt-4 pt-6 text-center'>
          <p className='text-sm text-gray-500'>
            Copyright ©2026; Designed by Toby, Kay & Shad <span className='tracking-widest uppercase'>—MLH</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
