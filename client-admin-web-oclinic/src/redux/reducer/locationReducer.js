const intialState = {
  locations: [],
  locationLoading : true
}

function reducer (state= intialState, action){
  if(action.type === 'GET_LOCATIONS'){
      return {...state, locations:action.payload, locationLoading:false}
  }else if(action.type === 'RESET_LOCATION'){
      return {...state, locations:[], locationLoading:true}
  }
  
  return state
}

export default reducer