import React from 'react'
import Footer from './components/Footer'
// import Header from './components/Header'
import Navbar from './components/Navbar'
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import LogIn from './Pages/LogIn'
import SignUp from './Pages/SignUp'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Cart from './components/Cart'


const App = () => {
  return (
    <div>
      {/* <Header /> */}
      <Navbar />
      <Cart />
      <Routes>
        <Route path='' element={<Home />}/>
        <Route path='/login' element={<LogIn />}/>
        <Route path='/signup' element={<SignUp />}/>
      </Routes>
      <Footer />
      <ToastContainer/>
    </div>
  )
}

export default App
