import axios from 'axios'
import { apiURL } from '../../helpers/apiURL'

export const login = ({email, password}) => {
    return (dispatch) => {
        axios({
            method: 'POST',
            url: apiURL + '/login',
            data: {
                email,
                password
            }
        })
        .then(({data}) => {
            localStorage.setItem('access_token', data.access_token)
            dispatch({
                type: 'GET_TOKEN',
                payload: true
            })
        }).catch((err) => {
            console.log(err)
        });
    }
}

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
            console.log(data,'ini data order dari new combine')
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

export const resetStore = () => {
    return{
        type: 'RESET_STORE',
        payload: {
            order: [],
            orderLoading : true,
            orderDetail: {},
            orderDetailLoading: true,
            token:false
        }
    }
}


