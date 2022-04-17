import React from 'react';
import Player from 'xgplayer';

import { useVideoDetail } from '@/lib/api';

interface APIVideoPlayerProps {
  videoID: string; // | string[] | undefined;
}

export default function APIVideoPlayer({ videoID }: APIVideoPlayerProps) {
  const { encodedH264FilesArray, video, videoLoading } =
    useVideoDetail(videoID);

  React.useEffect(() => {
    const player = new Player({
      id: `apivp-${videoID}`,
      url: `http://localhost${video?.original_media_url}`,
      fitVideoSize: 'auto',
      poster: `http://localhost${video?.poster_url}`,
      fluid: true,
      download: video?.allow_download || false,
      pip: true,

      thumbnail: {
        width: 160,
        height: 90,
        col: 1,
        row: Math.floor(video?.duration / 10),
        urls: [`http://localhost${video?.sprites_url}`],
        pic_num: Math.floor(video?.duration / 10),
      },
    });
    player.emit('resourceReady', encodedH264FilesArray);
    // console.log('Math.floor(video?.duration / 10) :>> ', Math.floor(video?.duration / 10));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [video]);

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
