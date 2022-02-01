
import { combineReducers } from 'redux'
import userReducer from "./userReducer"
import confReducer from "./confReducer"
import { UserTypes } from "../actions/Users"

const appReducer = combineReducers({
  user: userReducer,
  conf: confReducer
})


// reset the state of a redux store
const rootReducer = (state, action) => {
  if (action.type === UserTypes.LOG_OUT) {
    state = undefined;
  }
  return appReducer(state, action)
}


export default rootReducer