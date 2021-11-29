import  axios  from 'axios';
import { ADD_ITEM,REMOVE_ITEM } from '../Constants/CortConstants';

export const addToCort = (id,qty)=>{

    return async (dispatch,getState)=>{
        try{
            const {data} = await axios.get(`http://localhost:8080/brand/${id}`);
            console.log(data)
           console.log(data)
           dispatch({
               type:ADD_ITEM,
               data:{
                   "_id":data._id,
                   "name":data.name,
                   "brand":data.brand,
                   "rating":data.rating,
                   "image":data.image,
                   "cost":data.cost,
                   qty
               }
           })
           window.localStorage.setItem("cartItems",JSON.stringify(getState().cart.cartItems));

        }catch(err){
            console.log(err.message)
        }
    }
}


export const removeItemCart = (id)=>{
    return (dispatch,getState)=>{
        dispatch({
            type:REMOVE_ITEM,
            id:id
        })
        window.localStorage.setItem("cartItems",JSON.stringify(getState().cart.cartItems));
    }
}
