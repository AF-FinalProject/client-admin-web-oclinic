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