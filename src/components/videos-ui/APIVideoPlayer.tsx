import React from 'react';
import Player from 'xgplayer';

import { useVideoDetail } from '@/lib/api';

interface APIVideoPlayerProps {
  videoID: string; // | string[] | undefined;
}

export default function APIVideoPlayer({ videoID }: APIVideoPlayerProps) {
  const { video, videoLoading } = useVideoDetail(`${videoID ? videoID : null}`);

  React.useEffect(() => {
    new Player({
      id: `apivp-${videoID}`,
      url: `http://localhost${video?.original_media_url}`,
      poster: `http://localhost${video?.poster_url}`,
      fluid: true,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoID]);

  return (
    <>
      {videoLoading ? (
        <div>loading...</div>
      ) : (
        <div id={`apivp-${videoID}`}></div>
      )}
    </>
  );
}
