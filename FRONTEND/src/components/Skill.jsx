import React from 'react'
import { assets } from '../assets/assets.js'
import { Link } from 'react-router-dom';

const RoadmapGrid = () => {
  const courses = [
    "SQL", "Computer Science", "React",
    "Vue", "Angular", "JavaScript",
    "TypeScript", "Node.js", "Python"
  ];

    return (
        <div className='w-full mt-8'>
            <p className='text-xl font-normal text-center text-white'>— SKILL BASED ROADMAP —</p>

            <div className='w-full mt-10 mb-20'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                    {courses.map((course, index) => (
                    <div 
                        key={index} 
                        className='flex items-center justify-between bg-[#1a234a] border border-gray-800 p-5 rounded-xl hover:scale-105 transition-transform cursor-pointer'>
                        <span className='text-white text-lg font-medium'>
                        {course}
                        </span>
            
                        <img 
                        src={assets.bookmark_icon} 
                        alt="bookmark" 
                        className='w-5 h-5 object-contain opacity-70' 
                        />
                    </div>
                    ))}
                </div>
                <div className='flex justify-end mt-1'>
                <Link  to="/skillb" 
                 className='text-gray-400 hover:text-white text-sm font-medium flex items-center gap-1 transition-colors underline underline-offset-4'>
                  See all skill roadmaps
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
        </div>
   )
}

export default RoadmapGrid