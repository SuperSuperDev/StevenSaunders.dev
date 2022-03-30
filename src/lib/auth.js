export function setToken(token) {
  window.localStorage.setItem('token', token);
}

export function getToken() {
  return window.localStorage.getItem('token');
}

export function removeToken() {
  localStorage.removeItem('token');
}

export function getPayload() {
  const token = getToken();
  // console.log('token >>>:', token)
  if (!token) return false;
  const parts = token.split('.');
  if (parts.length < 3) return false;
  return JSON.parse(atob(parts[1]));
}

export function isAuthenticated() {
  const payload = getPayload();
  // console.log('payload>>>:', payload)
  if (!payload) return false;
  const now = Math.round(Date.now() / 1000);
  return now < payload.exp;
}

export function isOwner(userId) {
  const payload = getPayload();
  if (!payload) return false;
  return userId === payload.userId;
}

// function getCsrfToken(token) {
//   console.log('token', token);
//   return console.log(btoa(token));
// }

// getCsrfToken('697989cfa78e8cc67ba4d22456e29e5e142b7d6d');
// getCsrfToken('Njk3OTg5Y2ZhNzhlOGNjNjdiYTRkMjI0NTZlMjllNWUxNDJiN2Q2ZA==');
