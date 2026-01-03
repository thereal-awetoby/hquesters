import React from 'react'
import {assets} from '../assets/assets.js'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {

    const[visible, setVisible] = React.useState(false);

  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      
        <Link to="/"><img src={assets.hqlogo} alt="logo" className='w-36 object-cover'/></Link>

        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>

            <NavLink to="/" className='flex flex-col items-center gap-1'>
              <p>HOME</p> 
              <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to="/ai" className='flex flex-col items-center gap-1'>
              <p>AI TUTOR</p> 
              <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink> 
            <div className='group relative flex flex-col items-center gap-1 cursor-pointer'>
                <p>ROADMAPS</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden group-hover:block' />
                <div className='group-hover:block hidden absolute dropdown-menu right-0 top-full pt-4 z-50'>
                    <div className='flex flex-col gap-2 w-48 py-3 px-5 bg-slate-100 text-gray-500 rounded shadow-lg'>
                        <p className='cursor-pointer hover:text-black'>Role based roadmap</p>
                        <p className='cursor-pointer hover:text-black'>Skill based roadmap</p>
                        <p className='cursor-pointer hover:text-black'>Project ideas</p>
                    </div>
                </div>
            </div> 
             <NavLink to="/about" className='flex flex-col items-center gap-1'>
              <p>ABOUT</p> 
              
              <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink> 
        </ul>

        <div className='flex items-center gap-6'>
            <img src={assets.search_icon} alt="search" className='w-5 cursor-pointer'/>

            <div className='group relative'>
                <img src={assets.profile_icon} alt="user" className='w-5 cursor-pointer'/>
                <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                    <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'> 
                      <NavLink onClick={() => setVisible(false)} to="/profile" className='cursor-pointer hover:text-black'>PROFILE</NavLink>
                      <NavLink onClick={() => setVisible(false)} to="/bookmark" className='cursor-pointer hover:text-black'>BOOKMARKS</NavLink>
                      <NavLink onClick={() => setVisible(false)} to="/logout" className='cursor-pointer hover:text-black'>LOGOUT</NavLink>
                    </div>
                </div>
            </div>
            <img onClick={() => setVisible(true)} src={assets.menu_icon} alt="menu" className='w-5 cursor-pointer sm:hidden'/>
        </div>

        {/* Sidebar menu for small screens */}      
        <div className={'absolute top-0 right-0 bottom-0 bg-white transition-all overflow-hidden '+ (visible ? 'w-full' : 'w-0')}> 
            <div className='flex flex-col  text-gray-600'>
                <div onClick={()=> setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                    <img src={assets.dropdown_icon} alt="logo" className='h-4 rotate-180'/> 
                  <p>Back</p>
                </div>
                <NavLink onClick={() => setVisible(false)} className='py-2 p1-6 border' to="/"><p>HOME</p></NavLink> 
                <NavLink onClick={() => setVisible(false)} className='py-2 p1-6 border' to="/search"><p>SEARCH</p></NavLink>
                <NavLink onClick={() => setVisible(false)} className='py-2 p1-6 border' to="/ai"><p>AI</p></NavLink>
                <NavLink onClick={() => setVisible(false)} className='py-2 p1-6 border' to="/about"><p>ABOUT</p></NavLink>
            </div>
        </div>

    </div>
  )
} 

export default Navbar
