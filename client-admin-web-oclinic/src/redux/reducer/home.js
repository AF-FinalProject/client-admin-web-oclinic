const intialState = {
    order: [],
    orderLoading : true,
    orderDetail: {},
    orderDetailLoading: true,
}

function reducer (state= intialState, action){
    if(action.type === 'GET_ORDERS'){
        return {...state, order:action.payload, orderLoading:false}
    } else if(action.type === 'GET_ORDER_DETAIL'){
        return {...state, orderDetail:action.payload, orderDetailLoading:false}
    }else if(action.type === 'RESET_ORDER_DETAIL'){
        return {...state, orderDetail:{}, orderDetailLoading:true}
    // logout
    }else if(action.type === 'RESET_STORE'){
        return action.payload
    }
    
    return state
}

export default reducer