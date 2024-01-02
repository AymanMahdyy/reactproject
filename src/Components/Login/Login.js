import React, { Fragment } from 'react';
import "./login.css"
import loginimg from "../../Images/buger.jpg"

const Login = () => {
  return (
    <Fragment>
        <div className='bod'>
        <div class="main-box">
                <h1><span>L</span>OGIN</h1>
                <div class="input-box">
                    <input type="email" placeholder="E-mail" name="email" required/><i class="fa-solid fa-envelope"></i>
                </div>
                <div class="input-box">
                    <input type="password" placeholder="Password" name="pass" required/><i class="fa-solid fa-lock"></i>
                </div>
                <div class="checkbox">
                    <label><input type="checkbox" required/> Remember Me</label>
                    <a href="" >Forgot Password?</a>
                    
                </div>
                <div class="btn">
                    <input type="submit" value="LOGIN"/>
                </div>
                <div class="footer">
                    <p>Don't have an account?<a href="">Register</a></p>
                </div>
        </div>
        </div>
        
    </Fragment>
  );
}

export default Login;
