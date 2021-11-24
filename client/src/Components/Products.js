import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '../Components/Rating';

const Products = ({myproducts}) => {
    return (
        <React.Fragment>
            {/* {
                <p>{JSON.stringify(myproducts)}</p>
            } */}

           
                {
                    myproducts.map((element)=>(
                        
                            <div className='card m-2 pcard ' key={element._id}>
                            <Link to={`details/${element._id}`}>
                                
                                <img className="card-img img1" src={element.image} alt="images"></img>
                            </Link>
                            
                                <div className='card-body text-center'>
                                <Link to={`details/${element._id}`} className="datail">
                                        <h3>{element.name}</h3>
                                        
                                        <Rating rating={element.rating} numReviews={element.numReviews}></Rating>
                                        <div className="price">
                                            Price &#8377; {element.cost}
                                        </div>
                                </Link>
                                </div>
                            
                            </div>
                            
                        
                    ))
                    
                }
                
            
        </React.Fragment>
    )
}

export default Products
