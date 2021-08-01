import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducer/index'
import reduxThunk from 'redux-thunk'

let middlewares = applyMiddleware(reduxThunk)

const store = createStore(reducer, middlewares)

export default store