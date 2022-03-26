import dynamic from 'next/dynamic';
import * as React from 'react';

import Box from '@/components/containers/Box';

const DynamicVideoPlayer = dynamic(
  () => import('@/components/videoPlayer/VideoPlayer'),
  { ssr: false }
);

const defaultPlayer = {
  id: 'vs',
  url: 'http://videocms.jcloud.ik-server.com//media/encoded/7/admin1/5f47ebfc2bb840129579ea73bf784772.5f47ebfc2bb840129579ea73bf784772.caminandes_llamigos_1080p151.mp4.mp4',
  poster:
    'http://videocms.jcloud.ik-server.com//media/original/thumbnails/user/admin1/5f47ebfc2bb840129579ea73bf784772.caminandes_llamigos_1080p151.mp4_Bn9Sg69.jpg',
  fluid: true,
};

export default function VideoHomePage() {
  return (
    <>
      <h1>Video Home Page</h1>
      <Box>
        <DynamicVideoPlayer {...defaultPlayer} />
      </Box>
    </>
  );
}
