import React,{useEffect} from 'react';
import {useParams,useLocation, NavLink, useNavigate} from 'react-router-dom';
import quryString from 'query-string';
import { useSelector, useDispatch } from 'react-redux';
import { addToCort,removeItemCart } from '../Actions/CartActions';
import MessageBox from '../Components/MessageBox';





const CartScreen = () => {
   
    const {id} = useParams();

    // const location = useLocation()  
    
                                                    // this is used to find wich position we are in 
    // console.log(location)

    const {search} =useLocation()
    console.log(search)
    const { qty } = quryString.parse(search)

    

    
    const result = useSelector(state=>state.cart)
    const {cartItems} =result

    
    // console.log(result)
    const dispatch = useDispatch()

    useEffect(()=>{
            dispatch(addToCort(id,qty))
    },[dispatch,id,qty])
   
    // console.log(id,qty)

    // (`/details/${id}`)
    // const navigate = useNavigate()

    // const detailScreen =()=>{
    //     // console.log(id)
    //     navigate(`/details/${id}`)
    // }

    const removeFromCartHandler = (id)=>{
        dispatch(removeItemCart(id));
        alert(`item is delated ${id}`)
    }
   
    const checkoutHandler = ()=>{
        console.log("payment")
        alert(`dont't go back will doing pament `)
    }



    return (
        <React.Fragment>
            {/* <NavLink to={`/details/${id}`}><i class="fa fa-arrow-circle-left" aria-hidden="true"></i></NavLink> */}
            {/* <button onClick={detailScreen}><i class="fa fa-arrow-circle-left " aria-hidden="true"></i></button> */}

          
        
           {/* <h1>{JSON.stringify(result)}</h1> */}
           <div className='row'>
               <div className='col-lg-7 col-sm-12 col-xs-12 col-md-12'>
                   <h1>Shoping Cort...</h1>
                   {
                        cartItems.length === 0?(<MessageBox>Cart is Empty <br/><NavLink to='/' exact={true} strict>Go for shoping</NavLink></MessageBox>):(
                            <ul>
                                {
                                    cartItems.map((element)=>(
                                        <li key={element.id} className='row '>
                                            <div className='col-lg-2 col-sm-12  col-md-2'>
                                                <img src={element.image} className='img-fluid' alt='imagess'/>
                                            </div>
                                            <div className='col-lg-2 col-sm-2  col-xs-3 col-md-2 cartProduct'>
                                            <NavLink to={`/details/${element._id}`}>
                                                <h4>{element.name}</h4>
                                            </NavLink>
                                            </div>
                                            <div className='col-2 col-sm-2  col-xs-3 col-md-2 cartProduct'> 
                                            <select value={element.qty}  onChange={(e) =>dispatch(addToCort(element._id, Number(e.target.value)))}>
                                               
                                            {[...Array(element.countInStock).keys()].map((x) => (
                                                    <option key={x + 1} value={x + 1}>
                                                    {x + 1}
                                                    </option>
                                                ))}

                                            </select>
                                           
                                            </div>
                                            <div className='col-2 col-sm-2 col-xs-3 col-md-2 cartProduct'> 
                                                     ₹{ element.cost}
                                            </div>
                                            <div className='col-2 col-sm-2 col-md-2 cartProduct'> 
                                                    <button onClick={() => removeFromCartHandler(element._id)}>
                                                    <i class="fa fa-trash-o" aria-hidden="true"></i>
                                                    </button>
                                            </div>
                                            <div>
                                            
                                            </div>

                                        </li>
                                    ))
                                }
                            </ul>
                        )
                   }
               </div>
               <div className='col-lg-4 col-sm-12  col-xs-12 card-body cartProduct'>
                       <ul className="pament ">
                       <li>
                              <h2 className='col-sm-12 col-xs-12 col-md-6 col-lg-12'>
                                Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)} items) : ₹
                                {cartItems.reduce((a, c) => a + c.cost * c.qty, 0)}
                                
                               
                              </h2>
                            </li>
                            
                            <li >
                                <button
                                    type="button"
                                    onClick={checkoutHandler}
                                    className='proceed col-md-6 '
                                    disabled={cartItems.length === 0}
                                   
                                >
                                Proceed to Checkout
                            </button>
                            </li>
                       </ul>
               </div>
           </div>
            
        </React.Fragment>
    )
}

export default CartScreen