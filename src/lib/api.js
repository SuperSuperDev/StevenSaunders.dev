import axios from 'axios';

import { getToken } from './auth';

const baseUrl = process.env.REACT_APP_PROD_URL || 'http://localhost:8000';

// console.log(process.env.NODE_ENV)
// console.log(baseUrl)

export function headers() {
  return {
    headers: { Authorization: `Bearer ${getToken()}` },
  };
}

//! Auth Requests
export function registerUser(formdata) {
  return axios.post(`${baseUrl}/register`, formdata);
}

export function loginUser(formdata) {
  // console.log('baseUrl >>>', baseUrl)
  return axios.post(`${baseUrl}/api/v1/api-auth/login/`, formdata); // auth-token/
}
// export function addLike(type, id, plusOrMinus) {
//   return axios.post(`${baseUrl}/like/${type}/${id}/${plusOrMinus}`, null, headers())
// }
