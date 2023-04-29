import { ProductReducer } from "./ProductReducer"
import {combineReducers} from 'redux'

export const reducers = combineReducers({
    AllProducts : ProductReducer
})