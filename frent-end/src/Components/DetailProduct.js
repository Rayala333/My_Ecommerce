import React, { useState } from 'react';
import Rating from '../Components/Rating';
import { NavLink } from 'react-router-dom';

const DetailProduct = ({datailproduct}) => {

        // const [qty,setQty] = useState([1]);
        // console.log(qty)
        const [qty,setQty] = useState(2);

        const addTocartHandler =()=>{
            datailproduct.history.push(`/cart/${datailproduct}?qty=${qty}`);
        }

        
    return (
        <React.Fragment>
           
            
           {/* <p>{JSON.stringify(datailproduct)}</p> */}
           <NavLink to='/' exact={true} strict ><i className='fa fa-home' style={{fontSize:'30px', margin:'1rem 0rem 0rem 1rem'}} ></i></NavLink>

           <div className='details'>
                <div className='dimage'>
                        <img src={datailproduct.image} alt="images" />
                </div>
                <div className='ddetails'>
                        <p>{datailproduct.name}</p><hr></hr>
                        <h4>Brand: {datailproduct.brand}</h4>
                        <p>price: &#8377;{datailproduct.cost}</p>
                        <span><Rating rating={datailproduct.rating} numReviews={datailproduct.numReviews}></Rating></span>
                        <p>{datailproduct.description}</p><hr></hr>
                </div>
                <div className='pdetails'>
                    <ul className='card cart-body pbody'>
                        <li> 
                            <div className='row'>
                                <div className='gap'>Name</div>
                                <div>{datailproduct.name}</div>
                            </div>
                        </li>
                        <li>
                            <div className='row'>
                                <div className='gap'>Price</div>
                                <div>{datailproduct.cost}</div>
                               {/* { [...Array(datailproduct.cost).keys()].map((e)=>e)} */}
                            </div>
                        </li>
                        <li>
                            <div className='row'>
                                <div className='gap'>Status</div>
                                <div>{datailproduct.countInStock > 0?(<div>In Stock</div>):(<div>out of Stock</div>)}</div>
                            </div>
                        </li>
                        {datailproduct.countInStock > 0 && (
                            <li>
                                <div className='row'>
                                    <div className='gap'>Qty</div>
                                        <select value={qty} onChange={(e)=>{setQty(e.target.value)}}>
                                            {
                                                [...Array(datailproduct.countInStock).keys()].map((e)=>(
                                                    <option key={e+1}>
                                                            {e+2}
                                                    </option>
                                                ))
                                            }

                                        </select>
                                    
                                            
                                </div>
                                <button className='buy' onClick={addTocartHandler}>CART</button>
                            </li>
                        )}
                        {/* {(datailproduct.countInStock)} */}
                        {/* {[...Array(10).keys()].map((e)=>e)} */}
                    
                    </ul>
                </div>
           </div>
           
        </React.Fragment>
    )
}

export default DetailProduct
