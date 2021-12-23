import React from 'react';
import NavBar from './NavBar';

const Header = () => {
    return (
        <div className='Header'>
            <logo className="logo">Rayala</logo>
            
            <nav className='nav'><NavBar/></nav>
            
        </div>
    )
}

export default Header
