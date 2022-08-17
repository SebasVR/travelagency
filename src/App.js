import React from 'react';
import './App.css';
import { NavBar } from './components/NavBar';
import { About } from './pages/About';
import Home from './pages/Home';
import Products from './pages/Products';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      {/* Importamos el componente NavBar */}
      <NavBar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
      </Routes>
    </>



  );
}

export default App;
