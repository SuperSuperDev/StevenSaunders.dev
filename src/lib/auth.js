import axios from 'axios';

import { baseUrl } from './api';

export function setToken(token) {
  window.localStorage.setItem('token', token);
}

export function setRefreshToken(refToken) {
  window.localStorage.setItem('refreshToken', refToken);
}

export function setTokens(token, refToken) {
  setToken(token);
  setRefreshToken(refToken);
}

export function getToken() {
  // check if document is in browser
  if (typeof document !== 'undefined') {
    return window.localStorage.getItem('token');
  }
  return null;
}

export function getRefreshToken() {
  return window.localStorage.getItem('refreshToken');
}

export function removeToken() {
  localStorage.removeItem('token');
  localStorage.removeItem('refreshToken');
}

export function getPayload() {
  const token = getToken();
  // console.log('token >>>:', token)
  if (!token) return false;
  const parts = token.split('.');
  if (parts.length < 3) return false;
  return JSON.parse(atob(parts[1]));
}

export function isTokenExpired() {
  const payload = getPayload();
  if (!payload) return true;
  const now = Math.floor(Date.now() / 1000);
  return now > payload.exp;
}

export function hasRefToken() {
  return !!getRefreshToken();
}

export function updateToken() {
  const token = getToken();
  const payload = getPayload();
  const refreshToken = getRefreshToken();
  if (!token || !payload || !refreshToken) return false;
  const now = Math.floor(Date.now() / 1000);
  if (now > payload.exp) {
    axios
      .post(`${baseUrl}/spa/token/refresh/`, { refreshToken })
      .then((res) => {
        const { token: newToken, refreshToken: newRefToken } = res.data;
        setTokens(newToken, newRefToken);
      });
  }
  return Promise.resolve(false);
}

export function isAuthenticated() {
  if (process.title === 'browser') {
    const isExpired = isTokenExpired();
    if (isExpired && hasRefToken()) {
      return updateToken();
    } else if (isExpired) {
      removeToken();
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
}

export function isOwner(userId) {
  const payload = getPayload();
  if (!payload) return false;
  return userId === payload.userId;
}
