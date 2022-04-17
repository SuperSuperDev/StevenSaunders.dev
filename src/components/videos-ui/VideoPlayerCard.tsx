import dynamic from 'next/dynamic';
import * as React from 'react';

import { useVideoDetail } from '@/lib/api';
import clsxm from '@/lib/clsxm';

type VideoHeadingProps = {
  videoID: string;
} & React.ComponentPropsWithoutRef<'div'>;

export default function VideoPlayerCard({
  videoID,
  className,
  ...rest
}: VideoHeadingProps) {
  const { videoLoading } = useVideoDetail(`${videoID ? videoID : null}`);

  const DynamicVideoPlayer = dynamic(() => import('./APIVideoPlayer'), {
    ssr: false,
  });

  return (
    <div className={clsxm('', className)} {...rest}>
      {videoLoading ? (
        <p>Loading, please wait...</p>
      ) : (
        <div className='bg-white py-1 dark:bg-dark sm:py-4'>
          <div className='relative'>
            <div className='absolute inset-0 h-full' />
            <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
              <div className='mx-auto h-full max-w-4xl rounded-lg shadow-lg'>
                <DynamicVideoPlayer videoID={videoID} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
