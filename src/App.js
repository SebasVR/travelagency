import React from 'react';
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { About } from './pages/About/About';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import { Route, Routes } from 'react-router-dom';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';

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

      <ItemListContainer />
      
    </>

  );
}

export default App;
