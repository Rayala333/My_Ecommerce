import React from 'react';
import Header from './Components/Header';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/about';
import Product1 from './Pages/Product1';
import Product2 from './Pages/Product2';
import Product3 from './Pages/Product3';

const App = () => {
  return (
    <div>
      <Router>
          <Header/>
          <Routes>
          <Route path="/" element={<Home/>} exact={true} strict></Route>
          <Route path="/About" element={<About/>} exact={true} strict></Route>
          <Route path="/" element={<Home/>} exact={true} strict></Route>
          <Route path="/Product1" element={<Product1/>} exact={true} strict></Route>
          <Route path="/Product2" element={<Product2/>} exact={true} strict></Route>
          <Route path="/Product3" element={<Product3/>} exact={true} strict></Route>
          </Routes>
      </Router>
      
    </div>
  )
}

export default App
