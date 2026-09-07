import React from 'react'
import Navbar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import PresidentsWord from './components/PresidentWord'
import StatsBand from './components/StatBand'

export const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <PresidentsWord />
      <StatsBand />
    </div>
  )
}
