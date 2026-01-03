import React , {useState} from 'react'
import { Routes, Route , Link } from 'react-router-dom'
import Hero from './components/Hero'
import Home from './pages/Home'
import About from './pages/About'
import Search from './pages/Search'
import Ai from './pages/Ai'
import Navbar from './components/Navbar'
import Profile from './pages/Profile'
import Roleb from './pages/Roleb'
import Skillb from './pages/Skillb'
import Footer from './components/Footer'




const App = () => {
  const [nickname, setNickname] = useState("USER");
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col"> 
      <Navbar />
      <main className="grow md:px-[7vw] lg:px-[9vw]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/search" element={<Search />} />
          <Route path="/ai" element={<Ai />} />
          <Route path="/profile" element={<Profile />} />
          <Route path='/' element={<Hero nickname={nickname} />} />
          <Route path='/profile' element={<Profile setGlobalNickname={setNickname} />} /> 
          <Route path='/roleb'element={< Roleb/>} />
          <Route  path='/skillb'element={< Skillb/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
