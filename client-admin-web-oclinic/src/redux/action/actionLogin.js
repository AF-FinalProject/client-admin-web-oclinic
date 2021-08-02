import axios from 'axios'
import { apiURL } from '../../helpers/apiURL'
import { getOrders } from './actionOrder'

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
            dispatch({
                type: 'GET_TOKEN',
                payload: true
            })
            dispatch(getOrders())
        })
        .catch((err) => {
            console.log(err)
        })
        .finally(()=>{
            history.push('/')
        })
    }
}