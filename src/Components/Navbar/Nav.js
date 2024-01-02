import React, { Fragment } from 'react';
import "./nav.css";
import { Link } from 'react-router-dom';
import { GrProductHunt } from "react-icons/gr";


const Nav = () => {
  return (
    <Fragment>
      
        <header>
            <nav>
                <span><GrProductHunt size={60}/></span>
            <ul>
                <Link to={"/home"}>Home</Link>
                {/* <Link to={"home/:id"}>Single-Product</Link> */}
                <Link to={"/login"}>Login</Link>
                <Link to={"/cart"}>Cart</Link>
            </ul>
            </nav>
                
        </header>
        
    </Fragment>
  );
}

export default Nav;
