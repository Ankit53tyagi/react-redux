import { GET_ALL_PRODUCTS, GET_SINGLE_PRODUCTS } from "../constant/types"

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