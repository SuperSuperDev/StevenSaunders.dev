import axios from 'axios';
import useSWR from 'swr';

const baseUrl = process.env.REACT_APP_PROD_URL || 'http://localhost';

const userFetcher = (url: string) =>
  axios.get(url, { withCredentials: true }).then((res) => res.data);

export function headers() {
  return {
    headers: {
      'Content-Type': 'application/json',
    },
  };
}

//! Auth Requests
// export function registerUser(formdata) {
//   return axios.post(`${baseUrl}/register`, formdata);
// }

export async function loginUser(formdata: Record<string, unknown>) {
  return axios.post(
    `${baseUrl}/spa/login/`,
    { ...formdata },
    {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': await getCSRF(),
      },
    }
  );
}

export function useUser() {
  const { data, mutate, error } = useSWR(`${baseUrl}/spa/whoami/`, userFetcher);

  const loading = !data && !error;
  const isAuthenticated = data && data.isAuthenticated;

  return {
    loading,
    isAuthenticated: isAuthenticated,
    user: data,
    mutate,
  };
}

export function useSession() {
  const { data, mutate, error } = useSWR(
    `${baseUrl}/spa/session/`,
    userFetcher
  );

  const isAuthenticated = data && data.isAuthenticated;
  const loading = !data && !error;

  return {
    isAuthenticated,
    loading,
    session: data,
    mutate,
  };
}

export async function getCSRF(): Promise<string> {
  try {
    const res = await axios.get('http://localhost/spa/csrf/', {
      withCredentials: true,
    });

    const csrfToken: string = res.headers['x-csrftoken'];
    return csrfToken.toString();
  } catch (error) {
    throw new Error("Can't get CSRF token");
  }
}
