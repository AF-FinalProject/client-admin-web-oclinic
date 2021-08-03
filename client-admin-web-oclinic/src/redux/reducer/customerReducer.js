const intialState = {
  customers: [],
  customerLoading : true,
  customerOrders: [],
  customerOrdersLoading: true
}

function reducer (state= intialState, action){
  if(action.type === 'GET_CUSTOMERS'){
      return {...state, customers:action.payload, customerLoading:false}
  } else if(action.type === 'GET_CUSTOMER_ORDERS'){
      return {...state, customerOrders:action.payload, customerOrdersLoading:false}
  }else if(action.type === 'RESET_CUSTOMER_ORDER'){
      return {...state, customerOrders:[], customerOrdersLoading:true}
  }
  
  return state
}

export default reducer