import React from 'react'
import Hero from '../Hero/Hero'
import About from '../About/About'
import Eduction from '../Eduction/Eduction'
import Skills from '../Skills/Skills'
import Project from '../Project/Project'
import Contact from '../Contact/Contact'

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Eduction />
      <Skills />
      <Project />
      <Contact />
    </>
  )
}

export default Home