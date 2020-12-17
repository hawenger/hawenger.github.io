import React from 'react';
import "./Navigation.css"
 
import { NavLink } from 'react-router-dom';
 
const Navigation = (props) => {

   console.log(props.display)
   if(props.display === true)
    return (
       <div style={{marginBottom:'3em'}}className="nav-bar">
          <NavLink to="/" className="navLink">Home</NavLink>
          <NavLink to="/about" className="navLink">About</NavLink>
          <NavLink to="/contact" className="navLink">Contact</NavLink>
          <NavLink to="/portfolio" className="navLink">Portfolio</NavLink>
       </div>
    )
    return (
      <div style={{display:'none'}} className="nav-bar">
      <NavLink to="/" className="navLink">Home</NavLink>
      <NavLink to="/about" className="navLink">About</NavLink>
      <NavLink to="/contact" className="navLink">Contact</NavLink>
      <NavLink to="/portfolio" className="navLink">Portfolio</NavLink>
   </div>
    )
}
 
export default Navigation;
