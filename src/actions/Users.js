import { createActions } from "reduxsauce";
const { Types, Creators } = createActions({  
    loginUser: ["email", "password", "remember"],
    resetError: null,
    loginUserLoading: null,
    processLoginUser: ["id"],
    loginUserSuccess: ["user"],
    loginUserFailure: ["errorMessage"],
    logOut: [],
  });
  
  export const UserTypes = Types;
  export default Creators;