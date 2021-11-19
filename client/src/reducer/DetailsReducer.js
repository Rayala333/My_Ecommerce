
import { DATAILS_LOADING,DATAILS_LOADING_SUCCESS,DATAILS_LOADING_FAIL } from '../Constants/DetailsConstants';

const initalState={
    loading:false,
    product:{},
    error:""
}

const DetailsReducer = (state=initalState,action)=>{

            switch(action.type){
                case DATAILS_LOADING:
                case DATAILS_LOADING_SUCCESS:
                case DATAILS_LOADING_FAIL:
                    return{
                        ...state,
                        loading:action.loading,
                        product:action.product,
                        error:action.error
                    }
                default:
                    return state;
            }

}
export default DetailsReducer;