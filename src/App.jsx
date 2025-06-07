import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Eduction from './Components/Eduction/Eduction'
import Skills from './Components/Skills/Skills'
import Project from './Components/Project/Project'
import Contact from './Components/Contact/Contact'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='' element={<Home />}/>
            <Route path='About' element={<About />}/>
            <Route path='Eduction' element={<Eduction />} />
            <Route path='Skills' element={<Skills />} />
            <Route path='Project' element={<Project />} />
            <Route path='Contact' element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
