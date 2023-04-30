import { GET_ALL_PRODUCTS, GET_SINGLE_PRODUCTS,DELETE_PRODUCTS } from "../constant/types"

export const selectedProducts = (products) =>{
    return {
        type: GET_ALL_PRODUCTS,
        payload:products
    }
}
export const selectedProduct = (product) =>{
    return {
        type: GET_SINGLE_PRODUCTS,
        payload:product
    }
}

export const removeSelectedProduct = () =>{
    return {
        type: DELETE_PRODUCTS
    }
}

