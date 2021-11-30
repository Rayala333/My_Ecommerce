import React from 'react';
import {BrowserRouter as Router,Route,Routes,NavLink} from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import DetailsScreen from './Screens/DetailsScreen';
import CartScreen from './Screens/CartScreen';

import {useSelector,useDispatch} from 'react-redux'

const App = () => {

  const result = useSelector(state=>state.cart)

  const cartItems = result.cartItems
  
  return (
    <React.Fragment>
      <Router>
            <div className="container-fluid">
                <div className="row  header">
                    <div className="col">
                      <NavLink to="/" className='brand' >Royal_IT</NavLink>
                    </div>
                    <div className="col icones" >
                      <NavLink to={'/cart/${id}?qty=${qty}'} ><i className="fa fa-shopping-cart"></i>
                      {
                        cartItems.length > 0 && (
                          <span class="badge badge-primary shift ">{cartItems.length}</span>
                        )
                      }
                      </NavLink>
                      <NavLink to="/" ><i className="fa fa-user-circle"></i></NavLink>
                    </div>
                </div>

                <div className="row main m-4 ">
                  <Routes>
                <Route path="/" element={<HomeScreen/>} exact={true} strict></Route>
                <Route path="/details/:id" element={<DetailsScreen/>}  exact={true} strict></Route>
                <Route path="/Cart/:id" element={<CartScreen/>}  exact={true} strict></Route>
                </Routes>
                </div>
                <div className="row footer">
                        <h6>Copyright@Royal_it.in</h6>  
                </div>

            </div>
      </Router>
    </React.Fragment>
  )
}

export default App


