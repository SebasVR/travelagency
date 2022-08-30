import React from 'react';
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { About } from './components/About/About';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import { Route, Routes } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

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
