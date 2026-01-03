import React , {useState} from 'react'
import { Routes, Route , Link } from 'react-router-dom'
import Hero from './components/Hero'
import Home from './pages/Home'
import About from './pages/About'
import Search from './pages/Search'
import Ai from './pages/Ai'
import Navbar from './components/Navbar'
import Profile from './pages/Profile'




const App = () => {
  const [nickname, setNickname] = useState("USER");
  return (
    <div className=" md:px-[7vw] lg:px-[9vw] min-h-screen bg-slate-950">
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<Search />} />
        <Route path="/ai" element={<Ai />} />
        <Route path="/profile" element={<Profile />} />
        <Route path='/' element={<Hero nickname={nickname} />} />
        <Route path='/profile' element={<Profile setGlobalNickname={setNickname} />} /> 
      </Routes>
    </div>
  )
}

export default App
