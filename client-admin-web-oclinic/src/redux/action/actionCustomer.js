import axios from 'axios'
import { apiURL } from '../../helpers/apiURL'
import { getOrders } from './actionOrder'

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
            dispatch(getOrders())
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

export const deleteCustomerOrder = (id, custId) => {
    return (dispatch) => {
        axios({
            method: "DELETE",
            url: apiURL + '/orders/' + id,
            headers: {
                access_token: localStorage.getItem('access_token')
            }
        })
        .then(() => {
            dispatch(getCustomerOrders(custId))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}