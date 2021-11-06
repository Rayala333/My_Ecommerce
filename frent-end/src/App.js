import React from 'react'
import HomeScreen from './Screens/HomeScreen';
import {BrowserRouter as Router,Route,NavLink} from 'react-router-dom'

const App = () => {
  return (
    <React.Fragment>
      {/* <HomeScreen/> */}
      <Router>
      <div className='grid-contanier'>

        <header className='row'>
            <div>
              <NavLink to="\" className='brand' exact={true} strict>Royal_IT</NavLink>
            </div>
            <div className='cartuser'>
              <NavLink to="\"><i class="fa fa-shopping-cart"></i></NavLink>
              <NavLink to="\"><i class="fa fa-user-circle"></i></NavLink>
            </div>
        </header>


        <main>
              <Route path="/" component={HomeScreen} exact={true} strict></Route>
        </main>

        <footer className='row center'>Copyright@Royal_it.in</footer>

      </div>
      </Router>
    </React.Fragment>
  )
}

export default App
