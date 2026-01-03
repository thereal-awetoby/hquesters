import React from 'react'
import { assets } from '../assets/assets'
import Footer from '../components/Footer';

const Roleb = () => {
  const roles = [
    "Frontend", "Backend", "Full Stack", "DevOps", "DevSecOps", "Data Analyst",
    "AI Engineer", "AI and Data Scientist", "Data Engineer", "Android",
    "Machine Learning", "PostgreSQL", "iOS", "Blockchain", "QA",
    "Software Architect", "Cyber Security", "UX Design", "Technical Writer",
    "Game Developer", "Server Side Game Developer", "MLOps", "Product Manager",
    "Engineering Manager", "Developer Relations", "BI Analyst"
  ];

  return (
    <div className='my-20 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <div className='flex items-center justify-center gap-4 mb-10'>
        <div className='hidden sm:block h-\[1px\] w-20 bg-blue-500'></div>
        <h2 className='text-white text-lg md:text-xl font-semibold border border-blue-500 px-6 py-2 rounded-xl bg-[#0a0f29]'>
          Role Based Roadmaps
        </h2>
        <div className='hidden sm:block h-\[1px\] w-20 bg-blue-500'></div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {roles.map((role, index) => (
         <div 
            key={index} 
            className='flex items-center justify-between bg-[#1a234a] border border-gray-800 p-5 rounded-xl hover:scale-105 transition-transform cursor-pointer'>
            <span className='text-white text-lg font-medium'>
             {role}
            </span>

            <img 
                src={assets.bookmark_icon} 
                alt="bookmark" 
                className='w-5 h-5 object-contain opacity-70' 
            />
        </div>
        ))}
      </div>
    </div>
  )
}

export default Roleb