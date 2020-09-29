import React from 'react';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Product from './Components/Product/Product';
import ProductItem from './Components/ProductItem/ProductItem';
import NotFound from './NotFound'
import { Routes, Route } from 'react-router-dom';

export default function Root() {
    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='product' element={<Product />} />
            <Route path='/product/:id' element={<ProductItem />} />
            <Route path='*' element={<NotFound/>} />
        </Routes>
    );
}