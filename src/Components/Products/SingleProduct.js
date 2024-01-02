import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Nav from '../Navbar/Nav';
import "./singleproduct.css";
import { IoStar } from "react-icons/io5";
import { IoIosStarHalf } from "react-icons/io";


const SingleProduct = () => {
    const x =useParams()
    
    const single_product = x.id;


  const [products,setproducts]=useState({})
  useEffect(()=>{
    axios.get(`https://dummyjson.com/products/${single_product}`)
    .then((e)=> setproducts(e.data))
    .catch((err)=> console.log(err))
  })
  return (
    <Fragment>
      <Nav/>

                <div className='bgg'>
                <div className='cardss'>
                              <div className='contentt' key={products.id} >

                                <div className="cardd">
                                    <div className="iconimg">
                                      <img src={products.thumbnail} alt=''/>
                                    </div>
                                      <div className="infoo">
                                          <h3>{products.title}</h3>
                                          <h4><span>Cat:</span>{products.category}</h4>
                                          <h4><span>Brand:</span> {products.brand}</h4>
                                          <h4><span>Desc:</span> {products.description}</h4>
                                          <h4><span>Rating:</span> {products.rating} <IoStar color='#f9cf12'/><IoStar color='#f9cf12' /><IoStar color='#f9cf12' /><IoStar color='#f9cf12' /><IoIosStarHalf color='#f9cf12' /></h4>
                                          <h4><span>Stock:</span> {products.stock}</h4>
                                          {/* <h4>{products.images}</h4> */}
                                          <h5><span>Price:</span> {products.price}$</h5>
                                      </div>
                            
                                </div>
                              </div>
                            </div>
                </div>
                            
            



              
              
    </Fragment>
  );
}

export default SingleProduct;
