

 import actions from '../constant'

const reducerName = (state = '',action) =>
{ switch(action.type){
        case  actions.NAME : 
        state = action.payload
            break
        default:
          break
        }
       return state
    }
  
export default reducerName