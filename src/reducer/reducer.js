import {combineReducers} from 'redux'


export function reducerName(state = null, action)
{
    if(action.type === "NAME"){
        state = action.payload
        return state
    }
    return state
}
const allReducers = combineReducers({
    name :reducerName
})

export default allReducers