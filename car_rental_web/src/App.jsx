import React from 'react'
import {Routes,Route} from 'react-router-dom'
import CarDetails from './pages/CarDetails'
import CarCategory from './pages/CarCategory'
import Home from './pages/Home'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/certified" element={<Home />} />
        <Route path="/carDetails/:id" element={<CarDetails />} />
        <Route path="/carCategory" element={<CarCategory />} />
      </Routes>
    </div>
  );
};



export default App
