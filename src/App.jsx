import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'
import GoToTop from './components/GoToTop'

const App = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Project/>
      <Contact/>
      <GoToTop/>
      <Footer/>
      <Navbar/>
    </div>
  )
}

export default App