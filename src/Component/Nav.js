import React from 'react';
import "./nav.css";
// import Login from './Login';


const Nav = () => {
  return (
   <>
   <nav>
        <input type="checkbox" id="sidebar-active"></input>
        <label for="sidebar-active" className="open-sidebar-button">
          <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#5f6368"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
        </label>

        <div className="links-container">
            <label for="sidebar-active" className="close-sidebar-button">
                <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#5f6368"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
            </label>
            <img src={require("./pp.jpg")} alt="logo"  id='imgstyle'></img>
           
             
            <a href="#"className="home-link">Home</a>
            
            <a href="">Menu</a>
            <a href="#">Payment</a>
            <a href="#">Contact</a>
            <a href="./Login.js">Login</a>
            <a href="#">About</a>
        </div>
    </nav>
   </>
  )
}

export default Nav
