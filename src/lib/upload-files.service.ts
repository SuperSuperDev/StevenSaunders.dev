import axios from 'axios';

import { baseUrl } from './api';
class UploadFilesService {
  upload(
    csrfToken: string,
    file: File,
    onUploadProgress: (progressEvent: ProgressEvent) => void
  ) {
    const formData = new FormData();
    //const csrfToken = csrfToken();
    formData.append('media_file', file);
    // formData.append('token', 'bbc504e39fdb565f72b8122ba8a30ac4fa142697');
    return axios.post(`${baseUrl}/api/v1/media/`, formData, {
      withCredentials: true,
      headers: {
        'Content-Type': 'multipart/form-data',
        'X-CSRFTOKEN': csrfToken,
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
