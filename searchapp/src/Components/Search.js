import React,{useState} from 'react'

const Search = ({mydata}) => {

    const [search, setsearch] = useState("");

    const changeHandler= (e)=>{
        setsearch(e.target.value)
    }

    return (
        <React.Fragment>
            {
                <p>{JSON.stringify(mydata)}</p>
            }
          
          <center>
                                        <h1>Enter Your City</h1>
                                  <input type="text" value={search} onChange={changeHandler} />

                      {mydata.filter(City=>City.name.toLowerCase().includes(search.toLowerCase())).map(City=>
                                            
                                         {search.length !==0 && (
                                            <div style={{"border":"1px solid black" ,"padding":"10px", "margin":"10px", "max-width":"70%"}}>
                                             City.name
                                             </div>
                                         )}       
                                            
                                            )}
            </center>

        </React.Fragment>
    )
}

export default Search
