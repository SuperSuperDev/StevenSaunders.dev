import axios from 'axios';

import { baseUrl } from './api';
import { getToken } from './auth';
class UploadFilesService {
  upload(file: File, onUploadProgress: (progressEvent: ProgressEvent) => void) {
    const formData = new FormData();
    //const csrfToken = csrfToken();
    formData.append('media_file', file);
    return axios.post(`${baseUrl}/spa/video/`, formData, {
      withCredentials: false,
      headers: {
        'Content-Type': 'multipart/form-data',
        // 'X-CSRFTOKEN': csrfToken,
        Authorization: `JWT ${getToken()}`,
      },
      onUploadProgress,
    });
  }

  // getFiles() {
  //   return axios.get(`${baseUrl}/fu/`, {
  //     ...headers,
  //   });
  // }
}
export default new UploadFilesService();
