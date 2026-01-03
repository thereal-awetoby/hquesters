import React, { useRef, useState } from 'react'

const Profile = ({ setGlobalNickname }) => {
  const fileInputRef = useRef(null);
  const [image, setImage] = useState(null);
  
  // State to toggle between view mode and edit mode
  const [isEditing, setIsEditing] = useState(false);
  
  // Full user data state
  const [userData, setUserData] = useState({
    fullName: "Enter full name",
    nickname: "USER",
    github: "username",
    email: "example@mail.com"
  });

  const handleSave = () => {
    setIsEditing(false); // Lock inputs
    setGlobalNickname(userData.nickname); // Update nickname in Hero
  };

  return (
    <div className='w-full px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] mt-10 mb-20'>
      <h2 className='text-2xl font-semibold text-white mb-6 uppercase border-b border-gray-800 pb-2'>
        Account Setting
      </h2>

      <div className='flex flex-col md:flex-row gap-10 items-start'>
        
        {/* Profile Sidebar */}
        <div className='w-full md:w-1/3 flex flex-col items-center border border-gray-800 p-8 rounded-xl bg-[#0a0f29]'>
          <input 
            type="file" 
            ref={fileInputRef} 
            className='hidden' 
            accept="image/*" 
            onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))} 
          />
          <div className='w-32 h-32 rounded-full bg-gray-700 border-4 border-gray-800 mb-4 overflow-hidden flex items-center justify-center'>
             {image ? (
               <img src={image} className='w-full h-full object-cover' alt="Profile" />
             ) : (
               <div className='text-gray-400'>Avatar</div>
             )}
          </div>
          <button onClick={() => fileInputRef.current.click()} className='text-blue-400 text-sm hover:underline mb-6'>Change image</button>
          
          <div className='w-full flex flex-col gap-4'>
            <button className='w-full py-3 bg-[#1a234a] border border-gray-700 text-white rounded hover:bg-blue-900 transition-colors uppercase font-medium'>
               Streak
            </button>
            <button className='w-full py-3 bg-red-900/20 border border-red-900 text-red-500 rounded hover:bg-red-900/40 transition-colors uppercase font-medium'>
               Logout
            </button>
          </div>
        </div>

        {/* Account Settings Form */}
        <div className='w-full md:w-2/3 border border-gray-800 p-8 rounded-xl bg-[#0a0f29]'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
            
            {/* Full Name */}
            <div className='flex flex-col gap-2'>
              <label className='text-gray-400 text-sm'>Full Name</label>
              <input 
                type="text" 
                disabled={!isEditing}
                value={userData.fullName}
                onChange={(e) => setUserData({...userData, fullName: e.target.value})}
                className={`border rounded p-3 text-white transition-all ${isEditing ? 'bg-[#1a234a] border-blue-500' : 'bg-transparent border-gray-700'}`} 
              />
            </div>

            {/* Nickname */}
            <div className='flex flex-col gap-2'>
              <label className='text-gray-400 text-sm'>Nickname</label>
              <input 
                type="text" 
                disabled={!isEditing}
                value={userData.nickname}
                onChange={(e) => setUserData({...userData, nickname: e.target.value})}
                className={`border rounded p-3 text-white transition-all ${isEditing ? 'bg-[#1a234a] border-blue-500' : 'bg-transparent border-gray-700'}`} 
              />
            </div>

            {/* Github Username */}
            <div className='flex flex-col gap-2'>
              <label className='text-gray-400 text-sm'>Github Username</label>
              <input 
                type="text" 
                disabled={!isEditing}
                value={userData.github}
                onChange={(e) => setUserData({...userData, github: e.target.value})}
                className={`border rounded p-3 text-white transition-all ${isEditing ? 'bg-[#1a234a] border-blue-500' : 'bg-transparent border-gray-700'}`} 
              />
            </div>

            {/* Email */}
            <div className='flex flex-col gap-2'>
              <label className='text-gray-400 text-sm'>Email</label>
              <input 
                type="email" 
                disabled={!isEditing}
                value={userData.email}
                onChange={(e) => setUserData({...userData, email: e.target.value})}
                className={`border rounded p-3 text-white transition-all ${isEditing ? 'bg-[#1a234a] border-blue-500' : 'bg-transparent border-gray-700'}`} 
              />
            </div>
          </div>

          <div className='flex justify-center gap-4 mt-10'>
            {!isEditing ? (
              <button onClick={() => setIsEditing(true)} className='px-10 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium uppercase'>
                Edit Profile
              </button>
            ) : (
              <button onClick={handleSave} className='px-10 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium uppercase'>
                Save All Changes
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Profile