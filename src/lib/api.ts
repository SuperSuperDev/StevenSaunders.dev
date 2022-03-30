import axios from 'axios';
import useSWR from 'swr';

export const baseUrl = process.env.REACT_APP_PROD_URL || 'http://localhost';

const userFetcher = (url: string) =>
  axios.get(url, { withCredentials: true }).then((res) => res.data);

export function headers() {
  return {
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
    },
  };
}

export async function fileUploadHeaders() {
  return {
    withCredentials: true,
    headers: {
      'Content-Type': 'multipart/form-data',
      'X-CSRFToken': await getCSRF(),
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
    // `${baseUrl}/api/v1/login`,
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
export async function logoutUser() {
  return axios.post(
    `${baseUrl}/spa/logout/`,
    {},
    {
      withCredentials: true,
      headers: { 'X-CSRFToken': await getCSRF() },
    }
  );
}

export function useUser() {
  const {
    data: userData,
    mutate: userMutate,
    error: userError,
  } = useSWR(`${baseUrl}/spa/whoami/`, userFetcher);

  const loading: boolean = !userData && !userError;
  const isAuthenticated: boolean = userData && userData.isAuthenticated;

  return {
    loading,
    isAuthenticated: isAuthenticated,
    user: userData,
    userMutate,
    userError: userError,
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
  const hasError: boolean = userError && mediaError;

  return {
    hasError,
    userLoading,
    mediaLoading,
    media: media,
  };
}

export function useVideoDetail(videoID: string | string[] | null) {
  const {
    data: video,
    error: videoError,
    mutate: videoMutate,
  } = useSWR(
    videoID ? `${baseUrl}/api/v1/media/${videoID}` : null,
    userFetcher,
    {
      revalidateOnFocus: false,
      revalidateIfStale: false,
      revalidateOnReconnect: false,
    }
  );

  const videoLoading = !video && !videoError;
  const hasError = videoError;

  return {
    hasError,
    videoLoading,
    videoMutate,
    video: video,
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

export async function getCSRF() {
  try {
    const res = await axios
      .get('http://localhost/spa/csrf/', {
        withCredentials: true,
      })
      .then((res) => res.headers['x-csrftoken']);
    return res;
  } catch (error) {
    return 'Error';
  }
}

// export function csrfToken() {
//   let i,
//     cookies,
//     cookie,
//     cookieVal = null;
//   if (document.cookie && '' !== document.cookie) {
//     cookies = document.cookie.split(';');
//     i = 0;
//     while (i < cookies.length) {
//       cookie = cookies[i].trim();
//       if ('csrftoken=' === cookie.substring(0, 10)) {
//         cookieVal = decodeURIComponent(cookie.substring(10));
//         break;
//       }
//       i += 1;
//     }
//   }
//   return cookieVal;
// }
