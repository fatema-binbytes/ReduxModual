import { combineReducers } from 'redux' 
import reducer from './user'

const allReducers = combineReducers ({
   user : reducer
})
export default allReducers