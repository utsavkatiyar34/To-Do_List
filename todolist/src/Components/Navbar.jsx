import React from 'react'
import "../Styles/Navbar.css";
import{NavLink}from "react-router-dom";
export const Navbar = () => {
  return (
        <nav className="navbar">
        <div className='logonav'>
        <NavLink to="/" className='logonav-nav'> &#60; ToDo-List &#47; &#62;</NavLink>
        </div>
        <div className='menu'>
         <ul>
                <NavLink to="/signup"  className='menulinks'>Signup</NavLink>
        </ul>
        <ul>
                <NavLink to="/login" className='menulinks'>Login</NavLink>
        </ul>
        </div>
      </nav>
  )
}
