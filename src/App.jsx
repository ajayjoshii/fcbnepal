import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar';
import AboutHero from './pages/About/Leaders';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Statementfaith from './pages/About/Statementfaith';
import Church_CovenantParent from './components/Church_Covenant/Church_CovenantParent';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about/our-leaders' element={<AboutHero />} />
        <Route path='/plan-a-visit' element={<Contact />} />
        <Route path='/about/statement-of-faith' element={<Statementfaith />} />
        <Route path='/about/church-covenant' element={<Church_CovenantParent />} />
      </Routes>
      <Footer />

    </>

  )
}

export default App