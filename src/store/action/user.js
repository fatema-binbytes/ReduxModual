import actions from '../constant' 

const userName = (value) => {
    return dispatch => {
        dispatch ({
            type : actions.NAME,
            payload : value
        }) 
    }
}
    
export default { userName }