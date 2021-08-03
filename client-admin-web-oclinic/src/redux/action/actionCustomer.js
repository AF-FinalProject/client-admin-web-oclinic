import axios from 'axios'
import { apiURL } from '../../helpers/apiURL'

export const getCustomers = () => {
    return (dispatch) => {
        axios({
            method: "GET",
            url: apiURL + '/customers',
            headers: {
                access_token: localStorage.getItem('access_token')
            }
        })
        .then(({data}) => {
            dispatch({
                type: 'GET_CUSTOMERS',
                payload: data.data.customers
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const getCustomerOrders = (id) => {
    return (dispatch) => {
        axios({
            method: "GET",
            url: apiURL + '/orders/admin/'+(id),
            headers: {
                access_token: localStorage.getItem('access_token')
            }
        })
        .then(({data}) => {
            dispatch({
                type: 'GET_CUSTOMER_ORDERS',
                payload: data.data.orders
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}