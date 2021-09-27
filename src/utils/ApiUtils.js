import axios from 'axios';
import config from './Config';

axios.defaults.baseURL = 'http://localhost:3000/';
axios.defaults.timeout = 0;

export const ApiUtils = {axios: axios.create({baseURL: config.API_URL, timeout: 0}), dispatch: null};

// Add a request interceptor
ApiUtils.axios.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  if (!error.response) {
    return Promise.reject(error.message);
  }
  let message = error?.response?.data?.error || error?.response?.data?.errors.join(', ');
  // Do something with request error
  return Promise.reject(message);
});

ApiUtils.axios.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error) {
  if (!error.response) {
    return Promise.reject(error.message);
  }
  let message = error?.response?.data?.error || error?.response?.data?.errors?.join(', ');
  return Promise.reject(message);
});

export const baseApi = (url, method, params, data, responseType) => ApiUtils.axios.request({
  url,
  method,
  params,
  data,
  responseType
});
