import { combineReducers } from 'redux'
import order from './orderReducer.js'
import customer from './customerReducer.js'
import location from './locationReducer.js'

const combinedReducers = combineReducers({
    order, customer, location
})

export default combinedReducers