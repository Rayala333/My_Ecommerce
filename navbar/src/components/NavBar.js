import React,{useState} from 'react'
import { NavLink } from 'react-router-dom';


const NavBar = () => {
    const [click,setClick] = useState(false);

    const handlerClick = ()=> setClick(!click);
    return (
        <React.Fragment>
            
            <div className='navbar'>
                <div className='nava-container'>
                    <NavLink to="/" exact className='nav-logo'>Logo</NavLink>
                    <ul className={click ? "nav-menu active":"nav-menu"} onClick={handlerClick}>
                        <li className='nav-item'><NavLink to="/"  className='nav-links' >Home</NavLink></li>
                        <li className='nav-item'><NavLink to="/about"  className='nav-links' >About</NavLink></li>
                        <li className='nav-item'><NavLink to="/services" className='nav-links' >Services</NavLink> </li>
                        <li className='nav-item'><NavLink to="/contact" className='nav-links' >Contact</NavLink></li>
                    </ul>
                    <div className='nav-icon' onClick={handlerClick}>
                    <i className={click? "fa fa-times" : "fa fa-bars"} ></i>
                    </div>
                </div>
            </div>
            
           
        </React.Fragment>
    )
}

export default NavBar
