/* eslint-disable @next/next/no-img-element */
import Button from '@NonoviumUI/buttons/Button';
import Box from '@NonoviumUI/containers/Box';
import StatBarCard from '@NonoviumUI/statistics/StatBarCard';
import * as React from 'react';

import { baseUrl, useVideoDetail } from '@/lib/api';

import DownloadPrivateFile from './DownloadPrivateFiles';
import DynamicVideoThumbnail from './DynamicVideoThumbnail';
import { IEncodedVideoArray } from '../../lib/types';

// type EncodingAssetListItemProps = {
//   videoID: string;
// }

export default function EncodingAssetList(props: { videoID: string }) {
  const { videoID } = props;
  const { encodedFilesArray, videoLoading } = useVideoDetail(videoID);
  const [videos, setVideos] = React.useState<IEncodedVideoArray | null>(null);
  // const DynamicVideoPlayer = dynamic(
  //   () => import('../videoPlayer/VideoPlayer'),
  //   {
  //     ssr: false,
  //   }
  // );

  React.useEffect(() => {
    const getVideos = () => {
      const videoFiles = [...encodedFilesArray];
      setVideos(videoFiles);
    };
    getVideos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(encodedFilesArray)]);

  return (
    <Box>
      <div className='prose dark:prose-invert'>
        <h2>Encoded Assets</h2>
      </div>
      {videoLoading && !videos ? (
        <div>loading...</div>
      ) : (
        <>
          {videos?.map((video) => {
            const fileType = video?.url?.split('.').slice(-1)[0];
            return (
              <Box key={video.encoding_id}>
                <div className='sm:flex'>
                  <div className='prose mb-4 flex-shrink-0 dark:prose-invert sm:mb-0 sm:mr-4 sm:pt-0'>
                    <DynamicVideoThumbnail
                      thumbnailImage={video.thumbnail}
                      thumbnailImageHover={video.preview}
                      videoUrl={baseUrl + video.url}
                      progress={video.progress ? video.progress : 0}
                    />
                    {video.progress && video.progress < 100 && (
                      <div className='prose w-full max-w-none overflow-hidden text-clip text-center dark:prose-invert'>
                        <h4 className='mb-1 text-gray-500'>
                          {video.progress}%
                        </h4>
                      </div>
                    )}
                  </div>
                  <div className='prose w-full max-w-none overflow-hidden text-clip text-center dark:prose-invert'>
                    <StatBarCard
                      statsArray={[
                        {
                          statTitle: 'Codec',
                          statValue: video.encoder
                            ? video.encoder.toUpperCase()
                            : '-',
                        },
                        {
                          statTitle: 'Size',
                          statValue: video.size ? video.size.toString() : '0',
                        },
                        {
                          statTitle: 'Status',
                          statValue:
                            video.status === 'success'
                              ? video.status
                              : `${video.status} (${video.progress}%)`,
                        },
                      ]}
                      //className='mt-0'
                    />
                    {video.url && (
                      <>
                        {
                          //  FIXME: Download not currently working, require work on server side for CSRF/CORS
                        }
                        <DownloadPrivateFile
                          fileURL={`${baseUrl}${video.url}`}
                          fileName={`${video.title}.${fileType}`}
                          buttonText={`Download ${fileType}`}
                        />
                        {
                          // TODO: Add confirmation modal or text on successful copy to clipboard
                        }
                        <Button
                          key={`copyurl-${baseUrl}${video.url}`}
                          rounding='none'
                          onClick={() => {
                            navigator.clipboard.writeText(
                              `${baseUrl}${video.url}`
                            );
                          }}
                        >
                          Copy Url
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              </Box>
            );
          })}
        </>
      )}
    </Box>
  );
}
