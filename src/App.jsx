import React from 'react'
import { Routes, Route } from 'react-router-dom'
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
import DepartementsPage from './components/Pages/DepartementsPages'
import OrganisationPage from './components/Pages/OrganisationPages'
import OrganigrammePage from './components/Pages/OrganigrammePages'

const HomePage = () => (
  <>
    <Hero />
    <About />
    <PresidentsWord />
    <StatsBand />
    <Opportunities />
    <News />
    <Departments />
    <Partners />
  </>
)

export const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/departements" element={<DepartementsPage />} />
        <Route path="/organisation" element={<OrganisationPage />} />
        <Route path='/organigramme' element={<OrganigrammePage />} />
      </Routes>
      <Footer />
    </div>
  )
}