import React from 'react';
import Player from 'xgplayer';

const defaultPlayer = {
  id: 'vs',
  url: 'http://videocms.jcloud.ik-server.com//media/encoded/7/admin1/5f47ebfc2bb840129579ea73bf784772.5f47ebfc2bb840129579ea73bf784772.caminandes_llamigos_1080p151.mp4.mp4',
  poster:
    'http://videocms.jcloud.ik-server.com//media/original/thumbnails/user/admin1/5f47ebfc2bb840129579ea73bf784772.caminandes_llamigos_1080p151.mp4_Bn9Sg69.jpg',
  fluid: true,
};

type VideoPlayerProps = {
  id?: string;
  url?: string;
  poster?: string;
  fluid?: boolean;
} & Partial<typeof defaultPlayer>;

export default function VideoPlayer(props: VideoPlayerProps) {
  React.useEffect(() => {
    new Player({
      ...defaultPlayer,
      ...props,
    });
  }, [props]);

  return (
    <>
      <div id={props.id}></div>
    </>
  );
}
