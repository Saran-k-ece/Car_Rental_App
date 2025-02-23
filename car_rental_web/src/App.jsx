import React from 'react'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import CarDetails from './pages/CarDetails'
import CarCategory from './pages/CarCategory'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import About from './pages/About'

const App = () => {
  return (
    <div className="w-full min-h-screen">
     
      <Routes>
        <Route path='/' element={<SignUp/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/certified" element={<Home />} />
        <Route path="/carDetails/:id" element={<CarDetails />} />
        <Route path="/carCategory" element={<CarCategory />} />
      </Routes>
    </div>
  );
};



export default App
