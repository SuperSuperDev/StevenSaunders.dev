import Block from '@SuperSuperUI/containers/Block';
import dynamic from 'next/dynamic';
import * as React from 'react';

import { useVideoDetail } from '@/lib/api';

type VideoHeadingProps = {
  videoID: string;
};

export default function VideoPlayerCard({ videoID }: VideoHeadingProps) {
  const { video, videoLoading } = useVideoDetail(videoID);

  const status = video?.encoding_status;

  const DynamicVideoPlayer = dynamic(() => import('./APIVideoPlayer'), {
    ssr: false,
  });

  return (
    <div>
      {videoLoading ? (
        <p>Loading, please wait...</p>
      ) : (
        <div className='bg-white py-1 dark:bg-dark sm:py-4'>
          <div className='relative'>
            <div className='absolute inset-0 h-full' />
            <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
              <div className='mx-auto h-full max-w-4xl rounded-lg shadow-lg'>
                {status === 'success' ? (
                  <DynamicVideoPlayer videoID={videoID} />
                ) : (
                  <div className='aspect-video w-full bg-primary-700'>
                    <div className='mx-auto h-full max-w-2xl py-16 px-4 text-center sm:py-20 sm:px-6 lg:px-8'>
                      <h2 className='text-3xl font-extrabold text-white sm:text-4xl'>
                        <Block>We are working our magic.</Block>
                        <Block>Your encoding status is: </Block>
                        <Block>{status}</Block>
                      </h2>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
