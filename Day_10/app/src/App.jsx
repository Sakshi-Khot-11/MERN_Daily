import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Register from './pages/Register'
import Login from './pages/Login'
import { Route,Routes } from 'react-router'
import {ToastContainer} from 'react-toastify'


function App() {


  return (
    <>
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>

    </Routes>
    <ToastContainer/>
    {/* <Home/>
    <Profile/> */}
         </>
  )
}

export default App
