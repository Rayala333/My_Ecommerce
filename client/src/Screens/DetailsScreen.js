import React,{useEffect,useState} from 'react'
import DetailsActions from './../Actions/DetailsActions';
import { useDispatch,useSelector } from 'react-redux';
import LoadingBox from "../Components/LodingBox";
import MessageBox from '../Components/MessageBox';
import { NavLink } from 'react-router-dom';
import Rating from '../Components/Rating';
// import DetailProduct from '../Components/DetailProduct';


import {useParams} from 'react-router-dom';

const DetailsScreen = (props) => {
    
        const {id} = useParams()
// const DetailsScreen = (props) => {
    // const id = props.match.params.id;
    const result = useSelector(state=>state.details);
    
    const{loading,product,error} = result;

    console.log(id)
    const dispatch = useDispatch()


    useEffect(()=>{
        dispatch(DetailsActions(id))
    },[dispatch])



    const [qty,setQty] = useState(1)

    


    const addTocartHandler =()=>{
      props.history.push(`/cart/${id}?qty=${qty}`)
         console.log(id)
     }
    return (
        <React.Fragment>
            {/* {<h1>{JSON.stringify(result)}</h1>} */}
            {!loading?(<LoadingBox></LoadingBox>):error==="Network Error"?(<MessageBox variant="danger">{error}</MessageBox>):(
                // JSON.stringify(product)
                // <DetailProduct datailproduct={product}></DetailProduct>
                <div class="container-fluid">
        
                    <div class="row ">
                     <NavLink to='/' exact={true} strict ><i class='fa fa-home' style={{fontSize:'30px', margin:'1rem 0rem 0rem 1rem'}} ></i></NavLink>
                        
                        <div class="col-2 mt-5 ">
                            <img src={product.image} alt="images"  class="w-100"/>
                        </div>

                        <div class="col-5 mt-5 fs-5">
                            <p>{product.name}</p><hr></hr>
                            <h4>Brand: {product.brand}</h4>
                            <p>price: &#8377;{product.cost}</p>
                            <span><Rating rating={product.rating} numReviews={product.numReviews}></Rating></span>
                            <p>{product.description}</p><hr></hr>
                        </div>
                        <div class="col-4  m-4">
                            <ul class="card mt-5 bg-light">
                                <li class="row ">
                                    <div class="col-6 fs-3">Name</div>
                                    <div class="col-6 fs-3">{product.name}</div>
                                </li><hr></hr>
                                <li class="row ">
                                    <div class="col-6 fs-3">Price</div>
                                    <div class="col-6 fs-3">{product.cost}</div>
                                </li>
                                <li class="row ">
                                    <div class="col-6 fs-3">Status</div>
                                    <div class="col-6 fs-3">{product.countInStock > 0?(<div>In Stock</div>):(<div>out of Stock</div>)}</div>
                                </li>
                                {product.countInStock > 0 && (
                                <li class="row col-12 my-3">
                                    <div class="col-6 fs-3">Qty</div>
                                    <div class="col-5 fs-3">
                                        <select value={qty} onChange={(e)=>{setQty(e.target.value)}}>
                                             {
                                                 [...Array(product.countInStock).keys()].map((e)=>
                                                 
                                                  <option key={e+1}>
                                                        {e+1}
                                                 </option>
                                                 )
                                                
                                             }
                                        </select>
                                    </div>
                                    <button class='mt-3 bg-primary bg-gradient' onClick={addTocartHandler}>Buy</button>
                                </li>
                                
                                )}

                            </ul>

                        </div>
                        
                    </div>
            </div>
               
           )}
        </React.Fragment>
    )
}

export default DetailsScreen
