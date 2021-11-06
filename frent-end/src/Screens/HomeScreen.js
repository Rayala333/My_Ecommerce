import React, { useEffect } from 'react';

import { useSelector,useDispatch } from "react-redux";
import { ProductActions } from "../Actions/ProductActions";
import LoadingBox from "../Components/LodingBox";
import MessageBox from '../Components/MessageBox';

import Products from '../Components/Products';
const HomeScreen = () => {

    const result = useSelector(state=>state.products);

    const {loading,products,error} = result;

    const dispatch = useDispatch()

    useEffect(()=>{
            dispatch(ProductActions())
    },[dispatch])

    return (
        <React.Fragment>
            
            {/* <h1>{JSON.stringify(loading)}....{JSON.stringify(products)}....{error}</h1> */}
           
        

             {!loading?(<LoadingBox></LoadingBox>):error==="Network Error"?(<MessageBox variant="danger">{error}</MessageBox>):(
                // JSON.stringify(products)
                <Products myproducts={products}></Products>
               
           )}
        </React.Fragment>
    )
}

export default HomeScreen
