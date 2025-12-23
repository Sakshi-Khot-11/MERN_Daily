
import Home from './pages/Home'
import Profile from './pages/Profile'
import Orders from './pages/Orders'
import { Route,Routes } from 'react-router-dom'

function App() {
  

  return (
    <>
      
        <Routes>
         <Route path='/home' element={<Home/>}/>
         <Route path='/orders' element={<Orders/>}/>
         <Route path='/profile' element={<Profile/>}/>

        
        </Routes>
     
      
    </>
  )
}

export default App
