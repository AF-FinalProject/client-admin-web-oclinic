const intialState = {
  customers: [],
  customerLoading : true,
  customerDetail: {},
  customerDetailLoading: true
}

function reducer (state= intialState, action){
  if(action.type === 'GET_CUSTOMERS'){
      return {...state, customers:action.payload, customerLoading:false}
  } else if(action.type === 'GET_CUSTOMER_DETAIL'){
      return {...state, customerDetail:action.payload, customerDetailLoading:false}
  }else if(action.type === 'RESET_CUSTOMER_DETAIL'){
      return {...state, customerDetail:{}, customerDetailLoading:true}
  }
  
  return state
}

export default reducer