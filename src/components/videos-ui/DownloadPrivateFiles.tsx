import Button from '@NonoviumUI/buttons/Button';
import axios from 'axios';
import { useEffect, useState } from 'react';

import { getCSRF } from '../../lib/api';

interface IDownloadFile {
  fileURL: string;
  fileName: string;
  buttonText?: string | undefined;
  buttonClass?: string | undefined;
}

export default function DownloadPrivateFile(props: IDownloadFile) {
  const [download, setDownload] = useState(false);
  const buttonText = props.buttonText ? props.buttonText : 'Download';
  useEffect(() => {
    async function downloadApi() {
      const csrfToken = await getCSRF();

      try {
        // It doesn't matter whether this api responds with
        // the Content-Disposition header or not
        const response = await axios.get(props.fileURL, {
          withCredentials: true,
          responseType: 'blob', // this is important!
          headers: {
            'X-CSRFTOKEN': csrfToken,
          },
        });
        // you can mention a type if you wish
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        //this is the name with which the file will be downloaded
        link.setAttribute('download', props.fileName);
        link.click();
        // no need to append link as child to body.
        // this is important too, otherwise we will be unnecessarily spiking memory!
        setTimeout(() => window.URL.revokeObjectURL(url), 0);
        setDownload(false);
      } catch (e) {
        return e;
      }
    }

    if (download) {
      downloadApi();
    }
  }, [download, props]);

  return (
    <Button
      onClick={() => setDownload(true)}
      rounding='none'
      className={props.buttonClass ? props.buttonClass : 'bg-primary-500 p-2'}
    >
      {buttonText}
    </Button>
  );
}
