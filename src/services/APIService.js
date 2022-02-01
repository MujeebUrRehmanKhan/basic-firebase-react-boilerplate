import {
  AuthenticatedAPIClientPromise,
  UnauthenticatedAPIClient
} from "./APIGenerator";

export default {
  get: async (url, queryParamObj, headers) => {
    const response = await (await AuthenticatedAPIClientPromise()).get(url, queryParamObj, { headers });
    if (response.ok) {
      return response.data;
    }

    return null;
  },
  getPublicDocs: async (url, queryParamObj) => {
    const response = await UnauthenticatedAPIClient.get(url, queryParamObj);
    if (response.ok) {
      return response.data;
    }

    return null;
  },
  put: async (path, data) => {
    const response = await (await AuthenticatedAPIClientPromise()).put(
      path,
      data
    );
    if (response.ok) {
      return response.data;
    }

    return null;
  },
  post: async (path, data, headers) => {
    const response = await (await AuthenticatedAPIClientPromise()).post(
      path,
      data,
      { headers }
    );
    if (response.ok) {
      return response.data;
    }

    return null;
  },
  delete: async (path, headers) => {
    const response = await (await AuthenticatedAPIClientPromise()).delete(
      path,
      {},
      { headers }
    );
    if (response.ok) {
      return response.data;
    }

    return null;
  }

};
