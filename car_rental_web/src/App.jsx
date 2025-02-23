import React from 'react'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import About from './pages/About'
import Certified from './pages/Certified'
import CarDetails from './pages/CarDetails'

const App = () => {
  return (
    <div className="w-full min-h-screen">
     
      <Routes>
        <Route path='/' element={<SignUp/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/certified" element={<Certified />} />
        <Route path="/carDetails" element={<CarDetails />} />
   
      </Routes>
    </div>
  );
};



export default App
