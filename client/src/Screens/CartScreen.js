import React from 'react';
import {useParams} from 'react-router-dom';
// import { useLocation } from 'react-router-dom';

const CartScreen = () => {
    // const id = props.match.params.id;
    // const {id,qty} = useLocation()
    const {id,qty} = useParams();
    console.log(id)
    

    // const qty = props.location.search?Number(props.location.search.split("=")[1]):1
    return (
        <React.Fragment>
            <h1>{id}</h1>
            <h1>{qty}</h1>
            
        </React.Fragment>
    )
}

export default CartScreen