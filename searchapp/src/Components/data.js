import React, { useEffect,useState } from 'react';
import axios  from 'axios';
import Search from './Search';


const App = () => {
  

  const [abc,setabc] = useState()
 
    useEffect( ()=>{
       axios.get("http://localhost:8080/brand").then((posRes)=>{

              const {...data} = posRes;
              setabc(data.data)
              
        
       },(errRes)=>{
              console.log(errRes)
       })
      
    },[])

 
  return (
    <React.Fragment>
       
     
    
    <Search mydata={abc}></Search>
    
    </React.Fragment>
  )
}

export default App
