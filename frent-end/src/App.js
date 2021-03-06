import React from 'react'
import HomeScreen from './Screens/HomeScreen';
import {BrowserRouter as Router,Route,NavLink} from 'react-router-dom'
import DetailsScreen from './Screens/DetailsScreen';
import CartScreen from './Screens/CartScreen';

import {useSelector,useDispatch} from 'react-redux'

const App = () => {

  const result = useSelector(state=>state.cart)

  const cartItems = result.cartItems

  console.log(cartItems.length)

  // const dispatch = useDispatch()

  

  
  return (
    <React.Fragment>
      {/* <HomeScreen/> */}
      <Router>
      <div className='grid-contanier'>

        <header className='row'>
            <div>
              <NavLink to="/" className='brand' exact={true} strict>Royal_IT</NavLink>
            </div>
            <div className='cartuser'>

              <NavLink to={'/cart'}><i className='fa fa-shopping-cart'></i>
              {
                cartItems.length > 0 && (
                  <span className='badge'>{cartItems.length}</span>
                )
              }
              
              </NavLink>

              <NavLink to="/"><i className="fa fa-user-circle"></i></NavLink>
            </div>
        </header>


        <main>
              <Route path="/" component={HomeScreen} exact={true} strict></Route>
              <Route path="/details/:id" component={DetailsScreen} exact={true} strict></Route>
              <Route path="/Cart/:id" component={CartScreen} exact={true} strict></Route>
              <Route path="/Cart" component={CartScreen} exact={true} strict></Route>
        </main>

        <footer className='row center'>Copyright@Royal_it.in</footer>

      </div>
      </Router>
    </React.Fragment>
  )
}

export default App
