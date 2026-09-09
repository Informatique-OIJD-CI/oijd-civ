import React from 'react'
import Navbar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import PresidentsWord from './components/PresidentWord'
import StatsBand from './components/StatBand'
import Opportunities from './components/Opportunite'
import News from './components/News'
import Departments from './components/Departments'
import Partners from './components/Partners'
import Footer from './components/Footer'

export const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <PresidentsWord />
      <StatsBand />
      <Opportunities />
      <News />
      <Departments />
      <Partners />
      <Footer />
    </div>
  )
}
