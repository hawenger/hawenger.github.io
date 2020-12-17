import React from 'react'
import { NavLink } from 'react-router-dom';

export default function ContactButton() {
    return (
        <>
        <NavLink to="/contact" className="ContactButton btn color-shift">Contact</NavLink>
        </>
    )
}
