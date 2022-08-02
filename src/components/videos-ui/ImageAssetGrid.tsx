/* eslint-disable @next/next/no-img-element */
import Box from '@SuperSuperUI/containers/Box';
import * as React from 'react';

import { useVideoDetail } from '@/lib/api';

export default function ImageAssetGrid(props: { videoID: string }) {
  const { videoID } = props;
  const { videoImageAssets, videoLoading } = useVideoDetail(videoID);

  return (
    <>
      {videoLoading ? (
        <div>loading...</div>
      ) : (
        <>
          <Box>
            <div className='prose dark:prose-invert'>
              <h2>Image Assets</h2>
            </div>
            {
              // * Thumbnail
            }
            <Box>
              <div className='grid grid-cols-3 grid-rows-3 gap-0.5 overflow-hidden'>
                <div className='box col-span-2 row-span-2'>
                  <img
                    className='w-full rounded-lg border border-gray-300 shadow-xl dark:border-gray-500'
                    src={`${videoImageAssets?.videoPosterURL}`}
                    alt='video poster image'
                  ></img>
                </div>
                <div className='box col-span-1 col-start-3 row-span-3'>
                  <div className='mb-4 max-h-40 overflow-auto sm:max-h-96'>
                    {videoImageAssets?.videoSpritesURL ? (
                      <img
                        className='w-full overflow-auto rounded-lg border border-gray-300 shadow-xl dark:border-gray-500'
                        src={videoImageAssets?.videoSpritesURL}
                        alt='video sprites image'
                      ></img>
                    ) : (
                      <div>Processing Image</div>
                    )}
                  </div>
                </div>
                <div className='box'>
                  <img
                    className='w-full rounded-lg border border-gray-300 shadow-xl dark:border-gray-500'
                    src={`${videoImageAssets?.videoThumbnailURL}`}
                    alt='video thumbnail'
                  ></img>
                </div>
                <div className='box'>
                  <img
                    className='w-full rounded-lg border border-gray-300 shadow-xl dark:border-gray-500'
                    src={`${videoImageAssets?.videoPreviewURL}`}
                    alt='video preview image'
                  ></img>
                </div>
              </div>
            </Box>
            {/* <Box>
              <div className='sm:flex'>
                <div className='mb-4 flex-shrink-0 sm:mb-0 sm:mr-4'>
                  <img
                    className='h-full w-full rounded-lg border border-gray-300 shadow-xl dark:border-gray-500 sm:h-full sm:w-48'
                    src={`${videoImageAssets?.videoThumbnailURL}`}
                    alt='video thumbnail'
                  ></img>
                </div>
                <div className='prose max-w-none overflow-hidden text-clip dark:prose-invert '>
                  <h4 className=' overflow-hidden text-clip font-bold'>
                    Thumbnail{' '}
                    <small className='text-gray-500'>
                      @{videoImageAssets?.videoThumbnailTime} secs - {videoID}
                    </small>
                  </h4>
                  <p className='mt-1 overflow-hidden text-clip break-all'>
                    {videoImageAssets?.videoThumbnailURL}
                  </p>
                </div>
              </div>
            </Box>
            <Box>
              <div className='sm:flex'>
                <div className='mb-4 max-h-72 flex-shrink-0 overflow-auto sm:mb-0 sm:mr-6'>
                  {videoImageAssets?.videoSpritesURL ? (
                    <img
                      className='w-full overflow-auto rounded-lg border border-gray-300 shadow-xl dark:border-gray-500'
                      src={videoImageAssets?.videoSpritesURL}
                      alt='video sprites image'
                    ></img>
                  ) : (
                    <div>Processing Image</div>
                  )}
                </div>
                <div className='prose max-w-none overflow-hidden text-clip dark:prose-invert'>
                  <h4 className=' overflow-hidden text-clip font-bold'>
                    Sprites <small className='text-gray-500'>- {videoID}</small>
                  </h4>
                  <p className='mt-1 overflow-hidden text-clip break-all'>
                    {videoImageAssets?.videoSpritesURL}
                  </p>
                </div>
              </div>
            </Box>
            <Box>
              <div className='sm:flex'>
                <div className='mb-4 flex-shrink-0 sm:mb-0 sm:mr-4 '>
                  <img
                    className='h-full w-full rounded-lg border border-gray-300 shadow-xl dark:border-gray-500 sm:h-full sm:w-48'
                    src={`${videoImageAssets?.videoPreviewURL}`}
                    alt='video preview image'
                  ></img>
                </div>
                <div className='prose max-w-none overflow-hidden text-clip dark:prose-invert'>
                  <h4 className=' overflow-hidden text-clip font-bold'>
                    Video Preview{' '}
                    <small className='text-gray-500'>- {videoID}</small>
                  </h4>
                  <p className='mt-1 overflow-hidden text-clip break-all'>
                    {videoImageAssets?.videoPreviewURL}
                  </p>
                </div>
              </div>
            </Box>
            <Box>
              <div className='sm:flex'>
                <div className='mb-4 flex-shrink-0 sm:mb-0 sm:mr-4 '>
                  <img
                    className='h-full w-full rounded-lg border border-gray-300 shadow-xl dark:border-gray-500 sm:h-full sm:w-48'
                    src={`${videoImageAssets?.videoPosterURL}`}
                    alt='video poster image'
                  ></img>
                </div>
                <div className='prose max-w-none overflow-hidden text-clip dark:prose-invert'>
                  <h4 className=' overflow-hidden text-clip font-bold'>
                    Video Poster{' '}
                    <small className='text-gray-500'>- {videoID}</small>
                  </h4>
                  <p className='mt-1 overflow-hidden text-clip break-all'>
                    {videoImageAssets?.videoPosterURL}
                  </p>
                </div>
              </div>
            </Box> */}
          </Box>
        </>
      )}
    </>
  );
}
