import actions from '../constant' 

    const intName = (value) => {
        return dispatch => {
            dispatch({
                type :actions.NAME,
                payload :value
            }) 
        }
    }
    
export default {
    intName
}