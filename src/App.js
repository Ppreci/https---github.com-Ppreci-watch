import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import {Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Routes>
        <Route path='' element={<Hero />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
