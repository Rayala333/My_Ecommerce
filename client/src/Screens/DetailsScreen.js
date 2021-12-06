import React,{useEffect,useState} from 'react'
import DetailsActions from './../Actions/DetailsActions';
import { useDispatch,useSelector } from 'react-redux';
import LoadingBox from "../Components/LodingBox";
import MessageBox from '../Components/MessageBox';

import Rating from '../Components/Rating';
import { NavLink } from 'react-router-dom';

import {useParams,useNavigate} from 'react-router-dom';
// import {useHistory} from 'react-router-dom';

import ReactImageMagnify from 'react-image-magnify';




const DetailsScreen = () => {
    
        const {id} = useParams()
        

        // console.log(id)
        // const history= useHistory()
        const navigate = useNavigate()
        // console.log(navigate)
        

    const result = useSelector(state=>state.details);

   
    const{loading,product,error} = result;

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(DetailsActions(id))
    },[dispatch,id])

    const [qty,setQty] = useState(1)

    
    const addTocartHandler =()=>{
        navigate(`/cart/${id}?qty=${qty}`)
        // console.log(id)
    }

    


    return (
        <React.Fragment>
            {/* {<h1>{JSON.stringify(result)}</h1>} */}
            {!loading?(<LoadingBox></LoadingBox>):error==="Network Error"?(<MessageBox variant="danger">{error}</MessageBox>):(
                // JSON.stringify(product)

                
                


                <div className="container-fluid ">
        
                <div className="row ">
                 <NavLink to='/'  ><i className='fa fa-home' style={{fontSize:'30px', margin:'1rem 0rem 0rem 1rem'}} ></i></NavLink>
                    
                    <div className="col-md-1 col-xs-5 col-lg-2 mt-5 "  >
                        {/* <img src={product.image} alt="images"  className="w-100"/> */}

                        <ReactImageMagnify {...{
                                                smallImage: {
                                                    alt: 'Wristwatch by Ted Baker London',
                                                    isFluidWidth: true,
                                                    src: product.image,
                                                    width:300,
                                                   
                        
                                                },
                                                largeImage: {
                                                    src: product.image,
                                                    width: 1200,
                                                    height: 1800,
                                                    
                                                }
                                            }} />


                    </div>

                    <div className="col-md-7 col-xs-12 col-lg-5 mt-5 fs-5">
                        <p>{product.name}</p><hr></hr>
                        <h4>Brand: {product.brand}</h4>
                        <p>price: &#8377;{product.cost}</p>
                        <span><Rating rating={product.rating} numReviews={product.numReviews}></Rating></span>
                        <p>{product.description}</p><hr></hr>
                    </div>
                    <div className="col-md-12 col-lg-5 col-xs-12 mt-5">
                        <ul className="card  mt-4 bg-light">
                            <li className="row ">
                                <div className="col-6 fs-3">Name</div>
                                <div className="col-6 fs-3">{product.name}</div>
                            </li><hr></hr>
                            <li className="row ">
                                <div className="col-6 fs-3">Price</div>
                                <div className="col-6 fs-3">{product.cost}</div>
                            </li>
                            <li className="row ">
                                <div className="col-6 fs-3">Status</div>
                                <div className="col-6  fs-3">{product.countInStock > 0?(<div>In Stock</div>):(<div>out of Stock</div>)}</div>
                            </li>
                            {product.countInStock > 0 && (
                            <li className="row col-12 col-xs-12 my-3">
                                <div className="col-6 fs-3">Qty</div>
                                <div className="col-6 fs-4">
                                        <select qty={qty} onChange={(e)=>setQty(e.target.value)}>
                                            {[...Array(product.countInStock).keys()].map((e)=>
                                                <option key={e+1}>
                                                        {e+1}
                                                </option>
                                            )}
                                        </select>
                                </div>
                                   
                                <button className='mt-3 bg-primary bg-gradient text-white h5 p-1' onClick={addTocartHandler}>Buy</button>
                                
                            </li>
                            
                            )}
                            <li>{product.size}</li>
                           
                           

                        </ul>

                    </div>
                    
                </div>
        </div>
       
               
           )}
        </React.Fragment>
    )
}

export default DetailsScreen
