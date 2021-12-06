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
                    <ul className={click ? "nav-menu active":"nav-menu"}>
                        <li className='nav-item'><NavLink to="/" activeClassName="active" className='nav-links' onClick={handlerClick}>Home</NavLink></li>
                        <li className='nav-item'><NavLink to="/about" className='nav-links' onClick={handlerClick}>About</NavLink></li>
                        <li className='nav-item'><NavLink to="/services" className='nav-links' onClick={handlerClick}>Services</NavLink></li>
                        <li className='nav-item'><NavLink to="/contact" className='nav-links' onClick={handlerClick}>Contact</NavLink></li>
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
