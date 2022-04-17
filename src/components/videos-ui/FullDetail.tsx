import Box from '@NonoviumUI/containers/Box';
// import dynamic from 'next/dynamic';
import * as React from 'react';
import { useEffect } from 'react';

import EncodingAssetList from './EncodingAssetList';
import HeaderStatsBar from './HeaderStatsBar';
import HLSAssetList from './HLSAssetList';
import ImageAssetList from './ImageAssetList';
// import APIVideoPlayer from './APIVideoPlayer';
import VideoHeading from './VideoHeading';
import VideoPlayerCard from './VideoPlayerCard';

type FullDetailProps = {
  videoID: string;
};
// export default function FullDetail() {

export default function FullDetail({ videoID }: FullDetailProps) {
  // const { video, videoLoading } = useVideoDetail(videoID);
  const [videoPageId, setVideoPageId] = React.useState('');

  useEffect(() => {
    setVideoPageId(videoID);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <Box>
        <>
          <VideoHeading videoID={videoID} />
          {/* <DynamicAPIVideoPlayer videoID={videoID} //TODO  Keep this commented */}
          <VideoPlayerCard videoID={videoID} />
          <HeaderStatsBar videoID={videoID} />
          <EncodingAssetList videoID={videoPageId} />
          {
            // * Image Assets
          }
          <ImageAssetList videoID={videoID} />
          <HLSAssetList videoID={videoID} />
          {videoID}
        </>
      </Box>
    </div>
  );
}
