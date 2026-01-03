import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Search from './pages/Search'
import Ai from './pages/Ai'
import Navbar from './components/Navbar'
import Profile from './pages/Profile'

const App = () => {
  return (
    <div className=" md:px-[7vw] lg:px-[9vw] min-h-screen bg-slate-950">
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<Search />} />
        <Route path="/ai" element={<Ai />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  )
}

export default App
