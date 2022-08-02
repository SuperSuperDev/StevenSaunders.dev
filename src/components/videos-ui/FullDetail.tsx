import Block from '@SuperSuperUI/containers/Block';
import * as React from 'react';

import EncodingAssetList from './EncodingAssetList';
import HeaderStatsBar from './HeaderStatsBar';
import HLSAssetList from './HLSAssetList';
import ImageAssetGrid from './ImageAssetGrid';
import VideoHeading from './VideoHeading';
import VideoPlayerCard from './VideoPlayerCard';

export default function FullDetail(props: { videoID: string }) {
  const { videoID } = props;

  return (
    <div>
      <Block>
        <>
          <VideoHeading videoID={videoID} />
          {/* <DynamicAPIVideoPlayer videoID={videoID} //TODO  Keep this commented */}
          <VideoPlayerCard videoID={videoID} />
          <HeaderStatsBar videoID={videoID} />
          <ImageAssetGrid videoID={videoID} />
          <EncodingAssetList videoID={videoID} />
          <HLSAssetList videoID={videoID} />
          {/* <ImageAssetList videoID={videoID} /> */}
          {videoID}
        </>
      </Block>
    </div>
  );
}
