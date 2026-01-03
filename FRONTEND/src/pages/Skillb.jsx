import React from 'react'
import { assets } from '../assets/assets'
import Footer from '../components/Footer';

const Skillb = () => {
  // Removed isNew properties
  const skills = [
    "SQL", "Computer Science", "React", "Vue", "Angular", "JavaScript",
    "TypeScript", "Node.js", "Python", "System Design", "Java", "ASP.NET Core",
    "API Design", "Spring Boot", "Flutter", "C++", "Rust", "Go",
    "Software Design and Architecture", "GraphQL", "React Native", "Design System",
    "Prompt Engineering", "MongoDB", "Linux", "Kubernetes", "Docker", "AWS",
    "Terraform", "Data Structures & Algorithms", "Redis", "Git and GitHub",
    "PHP", "Cloudflare", "AI Red Teaming", "AI Agents", "Next.js", "Code Review",
    "Kotlin", "HTML", "CSS", "Swift & Swift UI", "Shell / Bash", "Laravel",
    "Elasticsearch", "WordPress", "Django"
  ];

  return (
    <div className='my-10  px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <div className='flex items-center justify-center gap-4 mb-10'>
        <div className='hidden sm:block h-\[1px\] w-20 bg-blue-500'></div>
        <h2 className='text-white text-lg md:text-xl font-semibold border border-blue-500 px-6 py-2 rounded-xl bg-[#0a0f29]'>
          Skill Based Roadmaps
        </h2>
        <div className='hidden sm:block h-\[1px\] w-20 bg-blue-500'></div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className='flex items-center justify-between bg-[#1a234a] border border-gray-800 p-5 rounded-xl hover:scale-105 transition-transform cursor-pointer'>
            <span className='text-white text-lg font-medium'>
                {skill}
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

export default Skillb