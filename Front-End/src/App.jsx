import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Create from './components/Create'
import Update from './components/Update'
import Regsiter from './components/Regsiter'
import Login from './components/Login'
import Cart from './components/Cart'
import Navbar from './components/Navbar'
import About from './components/About'

function App() {
 

  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Regsiter/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/home' element={<Home/>}></Route>
    <Route path='/cart' element={<Cart/>}></Route>
    <Route path='/create' element={<Create/>}></Route>
    <Route path='/update/:id' element={<Update/>}></Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App
