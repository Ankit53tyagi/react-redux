import {GET_ALL_PRODUCTS, GET_SINGLE_PRODUCTS} from '../constant/types'

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

export const SelectProductReducer = (state={},{type,payload}) =>{
    switch(type){
        case GET_SINGLE_PRODUCTS : 
        return {...state,...payload}
        default :
        return state;
    }
}
