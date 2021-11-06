import React from 'react';
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

                            <img src={element.image} alt="images" className='imageclass'/>
                            <div className='card-body'>
                                <h2>{element.name}</h2>
                                <Rating rating={element.rating} numReviews={element.numReviews}></Rating>
                                <div className="price">
                                    Price $ {element.cost}
                                </div>

                            </div>
                        </div>
                    ))
                }
            </div>
        </React.Fragment>
    )
}

export default Products
