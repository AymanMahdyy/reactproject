import React, { Fragment } from 'react';
import Nav from '../Navbar/Nav';
import "./cart.css"
import { useSelector, useDispatch } from 'react-redux';
import { IoStar } from "react-icons/io5";
import { IoIosStarHalf } from "react-icons/io";
import { cartslice } from '../Cart/cartSlice';

const Cart = () => {
    const cartProduct=useSelector(state => state.cart)
    const dispatch = useDispatch()

    // console.log(cartProduct)
            // console.log(cartProduct)
  return (
    <Fragment>
        <Nav/>
        <div className='conteent'>

            {
               cartProduct.map(el => (
                    <div className='carrd' >
                        <img src={el.thumbnail} alt=''/>
                        <div className='infooo'>
                        <h3>{el.title}</h3>
                        <h4><span>Cat:</span>{el.category}</h4>
                        <h4><span>Brand:</span> {el.brand}</h4>
                        <h4><span>Desc:</span> {el.description}</h4>
                        <h4><span>Rating:</span> {el.rating} <IoStar color='#f9cf12'/><IoStar color='#f9cf12' /><IoStar color='#f9cf12' /><IoStar color='#f9cf12' /><IoIosStarHalf color='#f9cf12' /></h4>
                        <h4><span>Stock:</span> {el.stock}</h4>
                        <h5><span>Price:</span> {el.price}$</h5>
                        </div>
                        <button onClick={()=> dispatch(cartslice.actions.removefromcart(el))}>Remove from cart</button>
                        
                    
                    </div>
                ))
            }
        </div>


    </Fragment>
        
  );
}

export default Cart;
