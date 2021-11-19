import React from 'react';
import {useLocation} from 'react-router-dom'

const CartScreen = (props) => {
    const id = props.match.params.id;
   

    const qty = props.location.search?Number(props.location.search.split("=")[1]):1
    return (
        <React.Fragment>
            <h1>{id}</h1>
            <h1>{qty}</h1>
            
        </React.Fragment>
    )
}

export default CartScreen