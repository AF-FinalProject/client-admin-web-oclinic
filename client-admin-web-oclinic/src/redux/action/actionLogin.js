import axios from 'axios'
import { apiURL } from '../../helpers/apiURL'
import { getOrders } from './actionOrder'
import Toastify from 'toastify-js'

export const login = ({email, password}, history) => {
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
            Toastify({
                text: 'Wellcome to Web Admin Oclinic',
                duration: 3000,
                gravity: 'bottom',
                position: 'right',
                backgroundColor: '#3CB371'
            }).showToast()
            dispatch({
                type: 'GET_TOKEN',
                payload: true
            })
            dispatch(getOrders())
        })
        .catch((err) => {
            console.log(err)
            Toastify({
                text: 'Make Sure you already input Username & Password correctly',
                duration: 3000,
                gravity: 'bottom',
                position: 'right',
                backgroundColor: 'red'
            }).showToast()
        })
        .finally(()=>{
            history.push('/')
        })
    }
}