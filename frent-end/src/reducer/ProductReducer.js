import {PRODUCT_LOADING,
        PRODUCT_LOADING_SUCCESS,
        PRODUCT_LOADING_ERROR} from "../Constants/ProductConstants";

const initialState={
    loading:false,
    products:[],
    error:""
};

export const ProductReducer = (state=initialState,action)=>{
        switch(action.type){
            case PRODUCT_LOADING:
            case PRODUCT_LOADING_SUCCESS:
            case PRODUCT_LOADING_ERROR:
                return{
                    ...state,
                    loading:action.loading,
                    products:action.product,
                    error:action.error
                }
            default:{
                return state;
            }
        }
}