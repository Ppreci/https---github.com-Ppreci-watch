import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import LogIn from './Pages/LogIn'

const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Routes>
        <Route path='' element={<Home />}/>
        <Route path='/login' element={<LogIn />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
