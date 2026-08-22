import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar';
  import AboutHero from './pages/About/Leaders';

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about/our-leaders' element={<AboutHero />} />
      </Routes>
    </>

  )
}

export default App