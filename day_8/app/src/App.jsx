import { Route,Routes } from "react-router";

import React from 'react'
import Home from './pages/Home' 
import Orders from "./pages/Orders";
import Profile from "./pages/Profile";

function App() {
  return (
    <div>
      <Routes>
        
        <Route path="/home" element={<Home/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/orders" element={<Orders/>}/>
      </Routes>
    </div>
  )
}

export default App
