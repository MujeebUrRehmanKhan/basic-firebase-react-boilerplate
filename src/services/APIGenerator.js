import { create } from "./../../node_modules/apisauce";
import { API_URL } from "../URL_CONSTANTS";
import store from '../store'

global.defaultUserToken = null

function select(state) {
  return state.user.userAuthToken
}

export function apiListener() {
  let token = select(store.getState())
  global.defaultUserToken = select(store.getState())
  generateSecuredAPI(true)
}


function generateAPIClient({ apiKey, authToken }) {
  return create({
    baseURL: API_URL,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...(authToken ? { userToken: `${authToken}` } : {})
    },
    timeout: 30 * 1000
  });
}

let SECURED_API_SINGLETON = false;

async function generateSecuredAPI(tokenChanged = false) {
  if (SECURED_API_SINGLETON && !tokenChanged) {
    return SECURED_API_SINGLETON;
  }
  
  const token = select(store.getState())
  if (token) {
    SECURED_API_SINGLETON = generateAPIClient({
      authToken: token
    });
    return SECURED_API_SINGLETON;
  } else {
    // Return an unauthenticated api client so current action completes
    return generateAPIClient({});
  }
}

export const AuthenticatedAPIClientPromise = generateSecuredAPI;
export const UnauthenticatedAPIClient = generateAPIClient({});
