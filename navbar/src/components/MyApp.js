import React from 'react';
import NavBar from './NavBar';
import { BrowserRouter as Router ,Route,Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Services from '../Pages/Services'
import Contact from '../Pages/Contact'

const Myapp = () => {
    return (
        <Router>
            <NavBar/>
            <Routes>
                 <Route path="/" element={<Home/>} exact={true} strict></Route>
                 <Route path="/about" element={<About/>} exact={true} strict></Route>
                 <Route path="/services" element={<Services/>} exact={true} strict></Route>
                 <Route path="/contact" element={<Contact/>} exact={true} strict></Route>
            </Routes>
            
        </Router>
    )
}

export default Myapp
