import axios from "axios";
import {PRODUCT_LOADING,
        PRODUCT_LOADING_SUCCESS,
        PRODUCT_LOADING_ERROR} from "../Constants/ProductConstants"

export const ProductActions = ()=>{
        return async (dispatch)=>{
            dispatch({
                type:PRODUCT_LOADING, loading:false, product:[], error:""
            });
            try{
               const {data} = await axios.get("http://localhost:8080/brand");
            dispatch({
                type:PRODUCT_LOADING_SUCCESS, loading:true, product:data, error:""
            })
            }catch(err){
                dispatch({
                    type:PRODUCT_LOADING_ERROR, loading:true, product:[], error:err.message
                })
            }
        }
}