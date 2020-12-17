import React from 'react'
import { NavLink } from 'react-router-dom';

export default function AboutButton() {
    
    function aboutButton() {
        console.log('About')
    }
return (
    <>
    <NavLink to="/about" className="AboutButton btn color-shift">About</NavLink>
    </>
)

}