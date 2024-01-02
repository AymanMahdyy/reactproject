import React, { Fragment } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Routes/Home';
import Login from './Components/Login/Login';
import Cart from './Components/Cart/Cart';
import SingleProduct from './Components/Products/SingleProduct';


function App() {
  return (
    <Fragment>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
            {/* <Route path='/single_product' element={<Products/>}></Route> */}
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='home/:id' element={<SingleProduct/>}></Route>

          </Routes>
    </Fragment>


  );
}
export default App;
