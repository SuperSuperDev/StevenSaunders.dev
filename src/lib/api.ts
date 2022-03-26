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

  const loading: boolean = !data && !error;
  const isAuthenticated: boolean = data && data.isAuthenticated;

  return {
    loading,
    isAuthenticated: isAuthenticated,
    user: data,
    mutate,
  };
}

export function useUserMedia() {
  const { data: user, error: userError } = useSWR(
    `${baseUrl}/spa/whoami/`,
    userFetcher
  );
  const { data: media, error: mediaError } = useSWR(
    user ? `${baseUrl}/api/v1/media/?author=${user.username}` : null,
    userFetcher
  );

  const userLoading = !user && !userError;
  const mediaLoading = !media && !mediaError;
  const hasError = userError && mediaError;

  return {
    hasError,
    userLoading,
    mediaLoading,
    media: media,
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
