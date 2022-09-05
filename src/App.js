import React from 'react';
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { About } from './components/About/About';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {

  return (
    <BrowserRouter>

      <NavBar />

      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/productos/:categoryId' element={<ItemListContainer />} />
        <Route path='/item/:itemId' element={<ItemDetailContainer />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
        <Route path='*' element={<Navigate to="/" />} />
      </Routes>

    </BrowserRouter>

  );
}

export default App;
