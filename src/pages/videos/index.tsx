import dynamic from 'next/dynamic';
import * as React from 'react';

import { IVideoPlayerProps } from '@/lib/types';

import Box from '@/components/containers/Box';

const DynamicVideoPlayer = dynamic(
  () => import('@/components/videoPlayer/VideoPlayer'),
  { ssr: false }
);

export default function VideoHomePage() {
  const swiftSrc =
    'https://supersuperdev-pub.598753f3935548c6a1ca8f065e534ac1.s3.pub1.infomaniak.cloud/test-video/1080.caminandes.mp4';
  // const vcmsSrc = 'https://vcms-ssl.capt.nonovium.com/media/encoded/7/admin1/4edaffd01f264cff914264b632cb5089.4edaffd01f264cff914264b632cb5089.caminandes_llamigos_1080p1511_-_Copy.mp4.mp4'

  const defaultPlayerProps: IVideoPlayerProps = {
    id: 'vs',
    url: swiftSrc,
    poster:
      'https://vcms-ssl.capt.nonovium.com/media/original/thumbnails/user/admin1/4edaffd01f264cff914264b632cb5089.caminandes_llamigos_1080p1511_-_Copy.mp4_eDq3E3Z.jpg',
    fluid: true,
    progress: 100,
  };
  return (
    <>
      <h1>Video Home Page</h1>
      <Box>
        <DynamicVideoPlayer {...defaultPlayerProps} />
      </Box>
    </>
  );
}
