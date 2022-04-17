import axios from 'axios';
import useSWR from 'swr';

import publishedOnDate from '@/helpers/publishedOnDate';

import { secondsToHHMMSS } from './helper';
import {
  IEncodedH264VideoArray,
  IEncodedVideo,
  IEncodedVideoArray,
  IPostMeta,
  IVideoDetails,
} from './types';

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
  const isAuthenticated: boolean = userData?.isAuthenticated;

  return {
    loading,
    isAuthenticated,
    user: userData,
    userMutate,
    userError,
  };
}

export function useUserMedia() {
  const { data: user, error: userError } = useSWR(
    `${baseUrl}/spa/whoami/`,
    userFetcher
  );
  const { data: media, error: mediaError } = useSWR(
    user ? `${baseUrl}/api/v1/media/?author=${user.username}` : null,
    userFetcher,
    {
      refreshInterval: 1000,
      revalidateOnFocus: false,
    }
  );

  const userLoading = !user && !userError;
  const mediaLoading = !media && !mediaError;
  const hasError: boolean = userError && mediaError;

  return {
    hasError,
    userLoading,
    mediaLoading,
    media,
  };
}

// export function useUserMediaByID(videoID: string) {
//   const key = `${baseUrl}/api/v1/media/${videoID}`;
//   console.log('key', key)
//   const { data: video, error: videoError } = useSWR(
//     key,
//     userFetcher,
//     {
//       refreshInterval: 5000,
//       revalidateIfStale: false,
//     }
//   );

//   const videoLoading = !video && !videoError;
//   const hasError: boolean = videoError;
//     console.log('video', video)
//   return {
//     hasError,
//     videoLoading,
//     video,
//   };

// }

export function useVideoDetail(videoID: string) {
  // need to check that videoID is a string. As types throws error on useRouter...
  // we also check videoID is not 'null' or 'undefined as the VideoPage [videoID].tsx
  // passes this as a string
  const shouldFetch =
    videoID &&
    videoID !== 'null' &&
    videoID !== null &&
    videoID !== 'undefined' &&
    videoID !== undefined;

  const {
    data: video,
    error: videoError,
    mutate: videoMutate,
  } = useSWR<IVideoDetails>(
    // shouldFetch ? `${baseUrl}/api/v1/media/${videoID}` : null,
    shouldFetch ? `${baseUrl}/spa/video/${videoID}` : null,
    userFetcher,
    {
      refreshInterval: 2000,
      revalidateOnFocus: false,
      revalidateIfStale: true,
      revalidateOnReconnect: false,
    }
  );
  const formattedDuration = video?.duration
    ? secondsToHHMMSS(video.duration)
    : '';

  const dateModified = publishedOnDate(
    new Date(video?.edit_date ? video.edit_date : ''),
    3
  );
  const datePublished = publishedOnDate(
    new Date(video?.add_date ? video.add_date : ''),
    3
  );

  const videoThumbnailURL = video?.thumbnail_url
    ? baseUrl + video?.thumbnail_url
    : undefined;
  const videoThumbnailTime = video?.thumbnail_time
    ? baseUrl + video?.thumbnail_time
    : undefined;
  const videoSpritesURL = video?.sprites_url
    ? baseUrl + video.sprites_url
    : undefined;
  const videoPreviewURL = video?.preview_url
    ? baseUrl + video?.preview_url
    : undefined;
  const hlsAssets: Record<string, unknown> = video?.hls_info;
  const hlsMasterFile = hlsAssets?.master_file;

  // TODO: video returns true with just videoID, need to fix that, for now check if we have formattedDuration
  const videoLoading = !videoError && !formattedDuration;
  const hasError = videoError;

  const postMeta: IPostMeta = {
    title: video?.title,
    state: video?.state,
    datePublished,
    dateModified,
    formattedDuration,
  };

  const videoImageAssets = {
    videoThumbnailURL,
    videoThumbnailTime,
    videoSpritesURL,
    videoPreviewURL,
    videoPosterURL: video?.poster_url ? baseUrl + video?.poster_url : undefined,
  };

  // const encodingAssets = video?.encodings_info &&  Object.keys(video?.encodings_info).map((key, i) => {
  //   return {
  //     resolution: key,
  //     encoding: video?.encodings_info[key],
  //   };
  // });

  // const encodingAssets = video?.encodings_info &&  Object.keys(video?.encodings_info).map((key, i) => {
  //   const filesArray = [];
  //   const encodedFiles = Object.keys(video?.encodings_info[key]).map((key2, i2) => {
  //       const encodedVideo = video?.encodings_info[key][key2];
  //       const encodedVideoFiles =  {
  //             resolution: key,
  //             encoder: key2,
  //             ...encodedVideo,
  //       };
  //       console.log('encodedVideoFiles', encodedVideoFiles)
  //       filesArray.push(encodedVideoFiles);
  //     })
  //   console.log('filesArray', filesArray)
  //   return filesArray;
  // });

  const encodedFilesArray: IEncodedVideoArray = [];
  const encodedH264FilesArray: IEncodedH264VideoArray = [];
  // eslint-disable-next-line unused-imports/no-unused-vars
  const encodingAssets =
    video?.encodings_info &&
    Object.keys(video?.encodings_info).map((key) => {
      const encodedFiles = Object.keys(video?.encodings_info[key]).map(
        (key2) => {
          const encodedVideo = video?.encodings_info[key][key2];
          const extendedEncodedVideo: IEncodedVideo = {
            resolution: key,
            encoder: key2,
            thumbnail: video.thumbnail_url,
            ...encodedVideo,
          };
          encodedFilesArray.push({
            ...extendedEncodedVideo,
          });
          if (extendedEncodedVideo.encoder === 'h264') {
            encodedH264FilesArray.push({
              name: extendedEncodedVideo.title || 'pending',
              url: baseUrl + extendedEncodedVideo.url,
            });
          }
        }
      );
      return encodedFiles;
    });

  return {
    hasError,
    videoLoading,
    videoMutate,
    video,
    postMeta,
    videoImageAssets,
    encodedFilesArray,
    encodedH264FilesArray,
    hlsAssets,
    hlsMasterFile,
  };
}

export function useSession() {
  const { data, mutate, error } = useSWR(
    `${baseUrl}/spa/session/`,
    userFetcher
  );

  const isAuthenticated = data?.isAuthenticated;
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
