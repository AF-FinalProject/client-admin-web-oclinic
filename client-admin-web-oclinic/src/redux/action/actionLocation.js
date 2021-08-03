import axios from 'axios'
import { apiURL } from '../../helpers/apiURL'

export const getLocations = (id) => {
    return (dispatch) => {
        axios({
            method: "GET",
            url: apiURL + '/logs/'+(id),
            headers: {
                access_token: localStorage.getItem('access_token')
            }
        })
        .then(({data}) => {
            dispatch({
                type: 'GET_LOCATIONS',
                payload: data.data.location_logs
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}