import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '../Components/Rating';

const Products = ({myproducts}) => {
    return (
        <React.Fragment>
            {/* {
                <p>{JSON.stringify(myproducts)}</p>
            } */}

            <div className='row center manclass'>
                {
                    myproducts.map((element)=>(
                        
                            <div className='card new' key={element._id}>
                            <Link to={`details/${element._id}`}>
                                <img src={element.image} alt="images" className='imageclass'/>
                            </Link>
                            
                                <div className='card-body'>
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
                
            </div>
        </React.Fragment>
    )
}

export default Products
