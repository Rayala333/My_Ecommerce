import React,{useEffect} from 'react';
import {useParams,useLocation, NavLink, useNavigate} from 'react-router-dom';
import quryString from 'query-string';
import { useSelector, useDispatch } from 'react-redux';
import { addToCort } from '../Actions/CartActions';





const CartScreen = () => {
   
    const {id} = useParams();

    // const location = useLocation()  
                                                    // this is used to find wich position we are in 
    // console.log(location)

    const {search} =useLocation()
    // console.log(search)
    const { qty } = quryString.parse(search)



    const result = useSelector(state=>state.cart)
    // console.log(result)
    const dispatch = useDispatch()

    useEffect(()=>{
            dispatch(addToCort(id,qty))
    },[dispatch,id,qty])
   
    // console.log(id,qty)

    // (`/details/${id}`)
    const navigate = useNavigate()

    const detailScreen =()=>{
        // console.log(id)
        navigate(`/details/${id}`)
    }





    return (
        <React.Fragment>
            <NavLink to={`/details/${id}`}><i class="fa fa-arrow-circle-left" aria-hidden="true"></i></NavLink>
            {/* <button onClick={detailScreen}><i class="fa fa-arrow-circle-left " aria-hidden="true"></i></button> */}

           
           <h1>{JSON.stringify(result)}</h1>
            
        </React.Fragment>
    )
}

export default CartScreen