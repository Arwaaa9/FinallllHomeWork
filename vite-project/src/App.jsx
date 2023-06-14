import { useState } from 'react'
import './App.css'
import Nav from './Components/Nav'
import Home from './Components/Home'
import SignUp from './Components/SignUp'
import { Routes, Route } from 'react-router-dom'
import Profile from './Components/Profile'
import ProfileUpdate from './Components/ProfileUpdate'
import Galary from './Components/cards'
import ImgDetail from './Components/Detail'
import Footer from './Components/Footer'

function App() {


  return (
    <>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/SignUp" element={< SignUp />}></Route>
        <Route path="/Profile" element={< Profile />}></Route>
        <Route path="/ProfileUpdate" element={< ProfileUpdate />}></Route>
        <Route path="/cards" element={< Galary />}></Route>
        <Route path="/cards/:id" element={< ImgDetail />}></Route>
      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App
