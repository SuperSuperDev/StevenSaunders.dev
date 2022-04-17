import React from 'react';
import Player from 'xgplayer';

import { IVideoPlayerProps } from '../../lib/types';

const defaultPlayer = {
  id: 'vs',
  url: 'http://videocms.jcloud.ik-server.com//media/encoded/7/admin1/5f47ebfc2bb840129579ea73bf784772.5f47ebfc2bb840129579ea73bf784772.caminandes_llamigos_1080p151.mp4.mp4',
  poster:
    'http://videocms.jcloud.ik-server.com//media/original/thumbnails/user/admin1/5f47ebfc2bb840129579ea73bf784772.caminandes_llamigos_1080p151.mp4_Bn9Sg69.jpg',
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
  const [playerInput, setPlayerInput] = React.useState<VideoPlayerProps>({
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

  return <div id={playerInput.id} />;
}
