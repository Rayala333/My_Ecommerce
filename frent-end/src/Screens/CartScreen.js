import React,{useEffect} from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import { addToCort } from './../../../client/src/Actions/CartActions';
import {addToCort} from '../Actions/CartActions'


const CartScreen = (props) => {
    const id = props.match.params.id;
    const qty = props.location.search?Number(props.location.search.split("=")[1]):1

    const result = useSelector(state=>state.cart)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(addToCort(id,qty))
    },[dispatch,id,qty])


    const detailScreen =()=>{
        // console.log(id)
        props.history.push(`/details/${id}`)
    }


    return (
        <React.Fragment>
            {/* <h1>{id}</h1>
            <h1>{qty}</h1> */}

            {/* <NavLink to={`/details/${id}`}><i class="fa fa-arrow-circle-left" aria-hidden="true"></i></NavLink> */}
            <button onClick={detailScreen}><i class="fa fa-arrow-circle-left" aria-hidden="true"></i></button>
            <h1>{JSON.stringify(result)}</h1>
            
        </React.Fragment>
    )
}

export default CartScreen
