import Toastify from 'toastify-js'

export const resetStore = () => {
    Toastify({
        text: 'Succes Log Out..',
        duration: 3000,
        gravity: 'bottom',
        position: 'right',
        backgroundColor: '#3CB371'
    }).showToast()
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