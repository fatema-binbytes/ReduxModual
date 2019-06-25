import actions from '../constant' 
const intCounter = (value) => {
    
    return dispatch => {
        dispatch({
            type :actions.NAME,
            payload :value
      }) 
     }
}
export default {
    intCounter
}