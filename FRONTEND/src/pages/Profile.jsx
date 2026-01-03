import React from 'react'
import Navbar from '../components/Navbar'

const Profile = () => {
  return (
    <div className='w-full px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] mt-10 mb-20'>
      <h2 className='text-2xl font-semibold text-white mb-6 uppercase border-b border-gray-800 pb-2'>
        Account Setting
      </h2>

      <div className='flex flex-col md:flex-row gap-10 items-start'>
        
        
        <div className='w-full md:w-1/3 flex flex-col items-center border border-gray-800 p-8 rounded-xl bg-[#0a0f29]'>
          <div className='w-32 h-32 rounded-full bg-gray-700 border-4 border-gray-800 mb-4 overflow-hidden'>
             <div className='w-full h-full flex items-center justify-center text-gray-400'>Avatar</div>
          </div>
          <button className='text-blue-400 text-sm hover:underline mb-6'>change image</button>
          
          <div className='w-full flex flex-col gap-4'>
            <button className='w-full py-3 bg-[#1a234a] border border-gray-700 text-white rounded hover:bg-blue-900 transition-colors uppercase font-medium'>
               Streak
            </button>
            <button className='w-full py-3 bg-red-900/20 border border-red-900 text-red-500 rounded hover:bg-red-900/40 transition-colors uppercase font-medium'>
               Logout
            </button>
          </div>
        </div>

        <div className='w-full md:w-2/3 border border-gray-800 p-8 rounded-xl bg-[#0a0f29]'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
            <div className='flex flex-col gap-2'>
              <label className='text-gray-400 text-sm'>Full Name</label>
              <input type="text" placeholder="Enter full name" className='bg-[#1a234a] border border-gray-700 rounded p-3 text-white outline-none focus:border-blue-500' />
            </div>
            <div className='flex flex-col gap-2'>
              <label className='text-gray-400 text-sm'>Nickname</label>
              <input type="text" placeholder="Enter nickname" className='bg-[#1a234a] border border-gray-700 rounded p-3 text-white outline-none focus:border-blue-500' />
            </div>
            <div className='flex flex-col gap-2'>
              <label className='text-gray-400 text-sm'>Github Username</label>
              <input type="text" placeholder="username" className='bg-[#1a234a] border border-gray-700 rounded p-3 text-white outline-none focus:border-blue-500' />
            </div>
            <div className='flex flex-col gap-2'>
              <label className='text-gray-400 text-sm'>Email</label>
              <input type="email" placeholder="example@mail.com" className='bg-[#1a234a] border border-gray-700 rounded p-3 text-white outline-none focus:border-blue-500' />
            </div>
          </div>

          <div className='flex justify-center mt-10'>
            <button className='px-10 py-3 bg-[#1a234a] border border-gray-700 text-white rounded-lg hover:bg-blue-800 transition-all font-medium uppercase'>
              Save All Changes
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Profile