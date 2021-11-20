import axios from 'axios';
import { DATAILS_LOADING,DATAILS_LOADING_SUCCESS,DATAILS_LOADING_FAIL } from '../Constants/DetailsConstants';

const DetailsActions =(id)=>{
    return async (dispatch)=>{
        dispatch({
            type:DATAILS_LOADING,
            loading:false,
            product:{},
            error:""
        })
        try{
           const {data} = await axios.get(`http://localhost:8080/brand/${id}`);
           console.log(data)
           
           dispatch({
               type:DATAILS_LOADING_SUCCESS,
               loading:true,
               product:data,
               error:""
           })

        }catch(err){
            dispatch({
                type:DATAILS_LOADING_FAIL,
                loading:true,
                product:{},
                error:err.message
            })
        }
    }
}

export default DetailsActions;