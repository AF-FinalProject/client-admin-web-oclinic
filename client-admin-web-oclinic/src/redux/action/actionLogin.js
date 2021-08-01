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