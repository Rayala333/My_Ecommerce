import React,{useEffect} from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import { addToCort } from './../../../client/src/Actions/CartActions';
import {addToCort,removeItemCart} from '../Actions/CartActions';
import MessageBox from '../Components/MessageBox';



const CartScreen = (props) => {
    const id = props.match.params.id;
    const qty = props.location.search?Number(props.location.search.split("=")[1]):1

    const result = useSelector(state=>state.cart)

    const {cartItems} =result
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(addToCort(id,qty))
    },[dispatch,id,qty])


    // const detailScreen =()=>{
    //     // console.log(id)
    //     props.history.push(`/details/${id}`)
    // }

    const removeFromCartHandler = (id)=>{
        dispatch(removeItemCart(id));
    }
    const checkoutHandler = ()=>{
        console.log("payment")
        alert('payment')
    }


    return (
        <React.Fragment>
            {/* <h1>{id}</h1>
            <h1>{qty}</h1> */}

            {/* <NavLink to={`/details/${id}`}><i class="fa fa-arrow-circle-left" aria-hidden="true"></i></NavLink> */}
            {/* <button onClick={detailScreen}><i class="fa fa-arrow-circle-left" aria-hidden="true"></i></button> */}
            {/* <h1>{JSON.stringify(result)}</h1> */}

            <div className='row top'>
                <div className='col-5 '>
                    <h1>Shoping Cart....</h1>
                    {
                        cartItems.length === 0?(<MessageBox>Cart is Empty <br/><NavLink to='/' exact={true} strict>Go for shoping</NavLink></MessageBox>):(
                            <ul >
                                {
                                    cartItems.map((element)=>(
                                        <li key={element.id} className='row'>{
                                            <>
                                            <div className=' col-2'>
                                                <div><img src={element.image} alt="images" className='small' /></div>
                                            </div>
                                            <div className='col-2 elename'>
                                                
                                                <NavLink to={`/details/${element._id}`}>{element.name}</NavLink>
                                            </div>
                                            <div className='col-2 elecount'>
                                            <select
                                                value={element.qty}
                                                onChange={(e) =>
                                                    dispatch(
                                                    addToCort(element._id, Number(e.target.value))
                                                    )
                                                }
                                                >
                                                {[...Array(element.countInStock).keys()].map((x) => (
                                                    <option key={x + 1} value={x + 1}>
                                                    {x + 1}
                                                    </option>
                                                ))}
                                                </select>
                                                
                                            </div>
                                            <div className='elecost'>${element.cost}</div>

                                            <div>
                                            <button type="button"className='eledelete' onClick={() => removeFromCartHandler(element._id)}>
                                                Delete
                                            </button>
                                           </div>

                                            </>
                                        }</li>
                                    ))
                                }
                            </ul>
                        )
                    }
                    
                </div>
                <div className='col-5 chickout '>
                <ul>
                            <li>
                              <h2>
                                Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)} items) : $
                                {cartItems.reduce((a, c) => a + c.cost * c.qty, 0)}
                              </h2>
                            </li>
                            
                            <li>
                                <button
                                    type="button"
                                    onClick={checkoutHandler}
                                    className="primary block"
                                    disabled={cartItems.length == 0}
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
