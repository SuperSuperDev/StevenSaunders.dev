import React from 'react';
import Player from 'xgplayer';

import { IVideoPlayerProps } from '../../lib/types';

const defaultPlayer = {
  id: 'vs',
  url: 'https://vcms-ssl.capt.nonovium.com/media/encoded/7/admin1/4edaffd01f264cff914264b632cb5089.4edaffd01f264cff914264b632cb5089.caminandes_llamigos_1080p1511_-_Copy.mp4.mp4',
  poster:
    'https://vcms-ssl.capt.nonovium.com/media/original/thumbnails/user/admin1/4edaffd01f264cff914264b632cb5089.caminandes_llamigos_1080p1511_-_Copy.mp4_eDq3E3Z.jpg',
  fluid: true,
  fitVideoSize: 'auto',
};

type VideoPlayerProps = {
  id: string;
  url: string;
  poster?: string;
  fluid?: boolean;
  fitVideoSize?: 'auto' | 'fixWidth' | 'fixHeight' | undefined;
  progress?: number;
};

export default function VideoPlayer(props: IVideoPlayerProps) {
  const [playerInput, setPlayerInput] = React.useState<IVideoPlayerProps>({
    id: '',
    url: '',
    poster: defaultPlayer.poster,
    fluid: true,
    fitVideoSize: 'auto',
    progress: 0,
  });

  const [hasFinished, setHasFinished] = React.useState(false);

  function player(playerInput: VideoPlayerProps) {
    setHasFinished(true);
    return new Player({
      id: playerInput.id,
      url: playerInput.url,
      poster: playerInput.poster,
      fluid: playerInput.fluid,
      fitVideoSize: playerInput.fitVideoSize,
    });
  }

  React.useEffect(() => {
    setPlayerInput({
      ...playerInput,
      id: props.id,
      url: props.url,
      poster: props.poster,
      progress: props.progress,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props]);

  React.useEffect(() => {
    if (playerInput.progress === 100 && !hasFinished) {
      setHasFinished(true);
      player(playerInput);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playerInput]);

  return (
    <>
      {playerInput.url ? (
        <div id={playerInput.id}></div>
      ) : (
        <div>loading...</div>
      )}
    </>
  );
}
