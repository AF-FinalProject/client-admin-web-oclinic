import axios from 'axios'
import { apiURL } from '../../helpers/apiURL'
import Toastify from 'toastify-js'

export const getOrders = () => {
    return (dispatch) => {
        axios({
            method: "GET",
            url: apiURL + '/orders/admin',
            headers: {
                access_token: localStorage.getItem('access_token')
            }
        })
        .then(({data}) => {
            dispatch({
                type: 'GET_ORDERS',
                payload: data.data.orders
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}


export const getOrderDetail = (id) => {
    return (dispatch) => {
        axios({
            method: "GET",
            url: apiURL + '/orders/' + id,
            headers: {
                access_token: localStorage.getItem('access_token')
            }
        })
        .then(({data}) => {
            dispatch({
                type: 'GET_ORDER_DETAIL',
                payload: data.data.order
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}


export const deleteOrder = (id) => {
    return (dispatch) => {
        axios({
            method: "DELETE",
            url: apiURL + '/orders/' + id,
            headers: {
                access_token: localStorage.getItem('access_token')
            }
        })
        .then(() => {
            Toastify({
                text: 'Success deleted data order',
                duration: 3000,
                gravity: 'bottom',
                position: 'right',
                backgroundColor: '#3CB371'
            }).showToast()
            dispatch(getOrders())
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}


export const editOrder = (data) => {
    const { id, 
            // status_payment, 
            status_swab } = data
    // console.log( id, status_payment, status_swab,'====================')
    return (dispatch) => {        
        axios({
            method: "PUT",
            url: apiURL + '/orders/' + id,
            headers: {
                access_token: localStorage.getItem('access_token')
            },
            data: {
                // status_payment: status_payment,
                status_swab: status_swab
            }
        })
        .then(() => {
            Toastify({
                text: 'Success update data order',
                duration: 3000,
                gravity: 'bottom',
                position: 'right',
                backgroundColor: '#3CB371'
            }).showToast()
            dispatch(getOrders())
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const resetOrderDetail = () => {
    return{
        type: 'RESET_ORDER_DETAIL'
    }
}




