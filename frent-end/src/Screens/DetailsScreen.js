import React,{useEffect,useState} from 'react'
import DetailsActions from './../Actions/DetailsActions';
import { useDispatch,useSelector } from 'react-redux';
import LoadingBox from "../Components/LodingBox";
import MessageBox from '../Components/MessageBox';
// import DetailProduct from '../Components/DetailProduct';
import { NavLink } from 'react-router-dom';
import Rating from '../Components/Rating';

// import {useHistory} from 'react-router-dom'


const DetailsScreen = (props) => {


    const id = props.match.params.id;
    const result = useSelector(state=>state.details);

    // console.log(props)
    const{loading,product,error} = result;

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(DetailsActions(id))
    },[dispatch,id])


    const [qty,setQty] = useState(1);
    
    // let history= useHistory()
    const addTocartHandler =()=>{
        props.history.push(`/cart/${id}?qty=${qty}`)
        
    }
    return (
        <React.Fragment>
            {/* {<h1>{JSON.stringify(result)}</h1>} */}
            {!loading?(<LoadingBox></LoadingBox>):error==="Network Error"?(<MessageBox variant="danger">{error}</MessageBox>):(
                // JSON.stringify(product)

    

                <>
                <NavLink to='/' exact={true} strict ><i className='fa fa-home' style={{fontSize:'30px', margin:'1rem 0rem 0rem 1rem'}} ></i></NavLink>
                


                <div className='details'>
                    <div className='dimage'>
                            <img src={product.image} alt="images" />
                    </div>
                    <div className='ddetails'>
                            <p>{product.name}</p><hr></hr>
                            <h4>Brand: {product.brand}</h4>
                            <p>price: &#8377;{product.cost}</p>
                            <span><Rating rating={product.rating} numReviews={product.numReviews}></Rating></span>
                            <p>{product.description}</p><hr></hr>
                    </div>
                    <div className='pdetails'>
                    <ul className='card cart-body pbody'>
                        <li> 
                            <div className='row'>
                                <div className='gap'>Name</div>
                                <div>{product.name}</div>
                            </div>
                        </li>
                        <li>
                            <div className='row'>
                                <div className='gap'>Price</div>
                                <div>{product.cost}</div>
                               {/* { [...Array(datailproduct.cost).keys()].map((e)=>e)} */}
                            </div>
                        </li>
                        <li>
                            <div className='row'>
                                <div className='gap'>Status</div>
                                <div>{product.countInStock > 0?(<div>In Stock</div>):(<div>out of Stock</div>)}</div>
                            </div>
                        </li>
                        {product.countInStock > 0 && (
                            <li>
                                <div className='row'>
                                    <div className='gap'>Qty</div>
                                        <select value={qty} onChange={(e)=>{setQty(e.target.value)}}>
                                            {
                                                [...Array(product.countInStock).keys()].map((x)=>(
                                                
                                                <option key={x+1}>
                                                        {x+1}
                                                </option>
                                                
                                                ))
                                            }

                                        </select>

                                    {/* {(product.countInStock)} */}
                                            
                                </div>
                                <button className='buy' onClick={addTocartHandler}>CART</button>
                            </li>
                            
                        )}
                        {/* {(datailproduct.countInStock)} */}
                        {/* {[...Array(10).keys()].map((e)=>e)} */}
                    
                    </ul>
                </div>
                </div>
                </> )}
           
        </React.Fragment>
    )
}

export default DetailsScreen
