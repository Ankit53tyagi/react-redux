import {GET_ALL_PRODUCTS} from '../constant/types'

const initalState = {
    products : []
}
export const ProductReducer = (state=initalState,{type,payload}) =>{
    switch(type){
        case GET_ALL_PRODUCTS:
            return {...state,products:payload};
            default:
            return state;
    }
};
