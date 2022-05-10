import React from 'react';
import Player from 'xgplayer';

import { baseUrl, useVideoDetail } from '@/lib/api';

interface APIVideoPlayerProps {
  videoID: string; // | string[] | undefined;
}

export default function APIVideoPlayer({ videoID }: APIVideoPlayerProps) {
  const { encodedH264FilesArray, video, videoLoading } =
    useVideoDetail(videoID);

  React.useEffect(() => {
    if (video) {
      const player = new Player({
        id: `apivp-${videoID}`,
        url: `${baseUrl}${video?.original_media_url}`,
        fitVideoSize: 'auto',
        poster: `${baseUrl}${video?.poster_url}`,
        fluid: true,
        download: video?.allow_download || false,
        pip: true,

        thumbnail: {
          width: 160,
          height: 90,
          col: 1,
          row: Math.ceil(video.duration / 10),
          urls: [`${baseUrl}${video.sprites_url}`],
          pic_num: Math.ceil(video.duration / 10),
        },
      });
      player.emit('resourceReady', encodedH264FilesArray);
    }
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
