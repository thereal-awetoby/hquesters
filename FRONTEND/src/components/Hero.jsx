import React from 'react'
import { assets } from '../assets/assets.js'
import { Link } from 'react-router-dom'

const Hero = ({ nickname }) => { 
  
  return (
    <div className='flex flex-col sm:flex-row border border-grey-400 mt-32'>
        <div className='w-full border-2  border-[#5589c9] bg-[#5589c9] p-8 sm:w-1/2 object-cover'>
            <h1 className='text-xl md:text-2xl font-medium uppercase'>
              HELLO<span className='font-bold'>{nickname ||'USER'} </span>
            </h1>
            <p className='text-lg font-normal text-black mt-1'>What do you want to learn today</p>

            <p className='text-lg font-normal text-black mt-1 pt-5'>YOU HAVE A 3 DAY STEAK</p>
        </div>

    
        {/* Hero Right Side */}
        <img src ={assets.sidemenu} alt="hero_image" className='w-full sm:w-1/2 object-cover'/> 
    </div>
  )     
}

export default Hero
