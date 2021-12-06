import React,{useState} from 'react';

import { NavLink } from 'react-router-dom';

const Nav = () => {

    const [isMobile, setIsMobile] = useState(false);
    return (
        <nav className='navbar'>
            <h2 className='logo'>Logo</h2>
           
            <ul className={isMobile? "nav-links-mobile " : "nav-links "}
                        onClick={()=>setIsMobile(false)} >
            
                <NavLink to='/' style={{ textDecoration: 'none' }}><li >Home</li></NavLink>
                <NavLink to='/about' style={{ textDecoration: 'none' }}><li>About</li></NavLink>
                <NavLink to='/service'style={{ textDecoration: 'none' }} ><li>Service</li></NavLink>
                <NavLink to='/contact' style={{ textDecoration: 'none' }}><li>Contact</li></NavLink>
                
            </ul>
           
            <button className='mobile-menu-icon' onClick={()=>{setIsMobile(!isMobile)}}>
                {isMobile? <i className="bi bi-x-lg"></i> : <i className="bi bi-list" ></i>}
            </button>
        </nav>
    )
}

export default Nav;
