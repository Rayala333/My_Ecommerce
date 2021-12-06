import React from 'react';
import Nav from './components/Nav';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Contact from './components/Contact';

const Myapp = () => {
    return (
        <React.Fragment>
            <BrowserRouter>
                    <Nav/>
                    <Routes>
                    <Route path="/" element={<Home/>} exact={true} strict></Route>
                    <Route path="/about" element={<About/>} exact={true} strict></Route>
                    <Route path="/service" element={<Service/>} exact={true} strict></Route>
                    <Route path="/contact" element={<Contact/>} exact={true} strict></Route>
                    </Routes>
            </BrowserRouter>
           
        </React.Fragment>
    )
}

export default Myapp
