import  axios  from 'axios';
import { ADD_ITEM } from '../Constants/CortConstants';

export const addToCort = (id,qty)=>{

    return async (dispatch)=>{
        try{
            const {data} = await axios.get(`http://localhost:8080/brand/${id}`);

        //    console.log(data)
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

        }catch(err){
            console.log(err)
        }
    }
}
