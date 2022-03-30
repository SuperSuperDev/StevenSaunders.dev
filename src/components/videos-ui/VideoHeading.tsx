import * as React from 'react';

import { useVideoDetail } from '@/lib/api';
import clsxm from '@/lib/clsxm';

type VideoHeadingProps = {
  videoID: string;
} & React.ComponentPropsWithoutRef<'div'>;

export default function VideoHeading({
  videoID,
  className,
  ...rest
}: VideoHeadingProps) {
  const { video, videoLoading } = useVideoDetail(`${videoID ? videoID : null}`);

  return (
    <div className={clsxm('', className)} {...rest}>
      {videoLoading ? (
        <p>Loading, please wait...</p>
      ) : (
        <>
          <h1 className='text-primary-500'>{video.title}</h1>
        </>
      )}
    </div>
  );
}
