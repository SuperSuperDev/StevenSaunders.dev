import Box from '@NonoviumUI/containers/Box';
import StatBarCard from '@NonoviumUI/statistics/StatBarCard';
// import dynamic from 'next/dynamic';
import * as React from 'react';

import { useVideoDetail } from '@/lib/api';
import clsxm from '@/lib/clsxm';
import { secondsToHHMMSS } from '@/lib/helper';

// import APIVideoPlayer from './APIVideoPlayer';
import VideoHeading from './VideoHeading';
import VideoPlayerCard from './VideoPlayerCard';

type FullDetailProps = {
  videoID: string;
} & React.ComponentPropsWithoutRef<'div'>;
// export default function FullDetail() {

export default function FullDetail({
  videoID,
  className,
  ...rest
}: FullDetailProps) {
  // if (videoID === undefined) {
  //   return <>Error: Video Not Found!</>;
  // }

  const { video } = useVideoDetail(`${videoID ? videoID : null}`);
  const formattedDuration = video?.duration
    ? secondsToHHMMSS(video.duration)
    : '';
  const statsArray = [
    {
      statTitle: 'duration',
      statValue: video?.duration ? formattedDuration : '',
    },
    {
      statTitle: 'original size',
      statValue: video?.size ? video.size.toString() : '0',
    },
    {
      statTitle: 'encoding status',
      statValue: video?.encoding_status ? video.encoding_status : 'unknown',
    },
  ];
  // const DynamicAPIVideoPlayer = dynamic(
  //   () => import('./APIVideoPlayer'),
  //   { ssr: false }
  // );

  return (
    <div className={clsxm('', className)} {...rest}>
      <Box>
        {videoID ? (
          <>
            <VideoHeading videoID={videoID} />
            {/* <DynamicAPIVideoPlayer videoID={videoID} /> */}
            <VideoPlayerCard videoID={videoID} />
            <StatBarCard statsArray={statsArray} />
            `${videoID}`
          </>
        ) : (
          'No videoID'
        )}
      </Box>
    </div>
  );
}
