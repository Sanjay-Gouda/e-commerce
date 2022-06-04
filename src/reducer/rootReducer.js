
import {combineReducers} from 'redux';
import {productReducer} from './productReducer/productReducer'
import {cartReducer} from './cartReducer/cartReducer'

export const rootReducer = combineReducers({productReducer,cartReducer})