import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='nav-bar'>
            <ul className='nav-list'> 
                <li className='nav-item'><NavLink to="/" className="navlink">Home</NavLink></li>
                <li className='nav-item'><NavLink to="/About" className="navlink">About</NavLink></li>
                <li className='nav-item'><NavLink to="/" className="navlink">Services</NavLink>
                    <ul>
                        <li><NavLink to="product1" className="navlinks">Product</NavLink></li>
                        <li><NavLink to="product2" className="navlinks">Product</NavLink></li>
                        <li><NavLink to="product3" className="navlinks">Product</NavLink></li>
                    </ul>
                
                </li>
            </ul>
            <div className='nav-icon'>
                <i className='fa fa-bars'></i>
            </div>
            
        </div>
    )
}

export default NavBar
