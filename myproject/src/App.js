import React,{useState} from 'react';
// import { NavLink } from 'react-router-dom';


import Search from './component/Search'
const App = () => {
  // const [data,setData]=useState(false)


  
  return (
    <div className="screen">
      <header className='row align-items-center position-relative '>
        
        <div className='col-4 fs-3 px-5 logo '>Logo</div>

        <div className='col-4   d-none d-sm-block'>
              <Search />
        </div>

        <div className='col-3 position-absolute  mx-3 '><i className="bi bi-list fs-5  d-block d-sm-none d-sm-block "></i></div>

        <div className='col-1 '>
          <ul className='d-flex mt-3 position-absolute top-0 end-0 mx-4 '>
            <li><i class="bi bi-cart4 px-2"></i></li>
            <li><i class="bi bi-person-circle px-2"></i></li>
          </ul>
        </div>
        
       
       
        
       
   
      </header>






      <main >

              


      </main>
      <footer></footer>
      
    </div>
  )
}

export default App
