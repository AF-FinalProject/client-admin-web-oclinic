import { combineReducers } from 'redux'
import order from './orderReducer.js'
import customer from './customerReducer.js'

const combinedReducers = combineReducers({
    order, customer
})

export default combinedReducers