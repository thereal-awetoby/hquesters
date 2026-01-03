import React, { useState } from 'react'

const Login = () => {
  
  const [currentState, setCurrentState] = useState('Login');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-24 gap-4 text-white'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='text-3xl font-semibold uppercase tracking-wider'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-blue-500' />
      </div>

      <div className='w-full px-8 py-10 rounded-xl bg-[#0a0f29] border border-gray-800 flex flex-col gap-4'>
        
        
        {currentState === 'Login' ? '' : (
          <>
            <input 
              type="text" 
              className='w-full px-3 py-2 bg-[#1a234a] border border-gray-700 rounded outline-none focus:border-blue-500 transition-all' 
              placeholder='Full Name' 
              required 
            />
            <input 
              type="text" 
              className='w-full px-3 py-2 bg-[#1a234a] border border-gray-700 rounded outline-none focus:border-blue-500 transition-all' 
              placeholder='Nickname' 
              required 
            />
          </>
        )}

        <input 
          type="email" 
          className='w-full px-3 py-2 bg-[#1a234a] border border-gray-700 rounded outline-none focus:border-blue-500 transition-all' 
          placeholder='Email' 
          required 
        />
        <input 
          type="password" 
          className='w-full px-3 py-2 bg-[#1a234a] border border-gray-700 rounded outline-none focus:border-blue-500 transition-all' 
          placeholder='Password' 
          required 
        />

        <div className='w-full flex justify-end text-sm mt-\[-8px\]'>
          {currentState === 'Login' 
            ? <p onClick={() => setCurrentState('Sign Up')} className='cursor-pointer text-gray-400 hover:text-blue-400'>
                Don't have an account? <span className='text-blue-500 underline'>Register</span>
              </p>
            : <p onClick={() => setCurrentState('Login')} className='cursor-pointer text-gray-400 hover:text-blue-400'>
                Already have an account? <span className='text-blue-500 underline'>Login</span>
              </p>
          }
        </div>

        <button className='bg-blue-600 text-white font-light px-8 py-2 mt-4 rounded hover:bg-blue-700 transition-all uppercase tracking-widest'>
          {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
        </button>
      </div>
    </form>
  )
}

export default Login