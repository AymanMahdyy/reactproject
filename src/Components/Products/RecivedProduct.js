import React, { Fragment, useEffect, useState } from 'react';
import "./product.css"
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { cartslice } from '../Cart/cartSlice';
import { Link } from 'react-router-dom';

const RecivedProduct = () => {
  const cartProduct = useSelector(state => state.cartState)
  const dispatch = useDispatch()

  const [products,setproducts]=useState([])
  useEffect(()=>{
    axios.get(`https://dummyjson.com/products`)
    .then((e)=> setproducts(e.data.products))
    .catch((err)=> console.log(err))
  })
  return (
    <Fragment>
      <div className='cards'>
        {
          products.map((el)=>(
            <div className='content' key={el.id} >

              <div className="card">
                <div className="iconimg">
                  <img src={el.thumbnail} alt=''/>
                </div>
                <div className="info">
                    <h3>{el.title}</h3>
                    <h4>{el.category}</h4>
                    <h5><span>Price:</span> {el.price}$</h5>
                </div>
            <div className='btns'>
              <Link className='link' to={`${el.id}`}>ReadMore</Link>
              <button onClick={()=> dispatch(cartslice.actions.addtocart(el))}>Add to cart</button>
              {/* <button onClick={()=> dispatch(cartslice.actions.removefromcart(el))}>Remove from cart</button> */}
              </div>
            </div>
            </div>
          ))
        }

      </div>

    </Fragment>
  );
}

export default RecivedProduct;
