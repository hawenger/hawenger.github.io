import React from 'react';
import { NavLink } from 'react-router-dom';

export default function PortfolioButton() {

    return (
        <>
        <NavLink to="/portfolio" className="PortfolioButton btn color-shift">Portfolio</NavLink>
        </>
    )
}
    
  