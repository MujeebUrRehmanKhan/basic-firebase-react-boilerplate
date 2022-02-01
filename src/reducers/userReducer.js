import { UserTypes } from "../actions/Users"

const initialState = {
  loading: false,
  user: null,
  userAuthToken: null
}
const userReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case UserTypes.LOGIN_USER:
      return Object.assign({}, prevState, { loading: true, error: "" });
    case UserTypes.LOGIN_USER_SUCCESS:
      return Object.assign({}, prevState, { loading: false }, { ...action.user });
    case UserTypes.LOGIN_USER_FAILURE:
      return Object.assign({}, prevState, { loading: false }, { error: action.errorMessage });
    case UserTypes.LOG_OUT:
      return Object.assign({}, initialState);
    case UserTypes.RESET_ERROR:
      return Object.assign({}, prevState, { loading: false, error: "" });
    default:
      return prevState;
  }
}

export default userReducer