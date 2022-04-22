/* eslint-disable @next/next/no-img-element */

import Modal from '@NonoviumUI/modals/Modal';
import dynamic from 'next/dynamic';
import { useState } from 'react';

import { baseUrl } from '@/lib/api';

import { IDynamicVideoThumbnail } from '../../lib/types';

//take props for image, image on-hover and image on-click launch modal

export default function DynamicVideoThumbnail(props: IDynamicVideoThumbnail) {
  const { thumbnailImage, thumbnailImageHover, videoUrl, progress } = props;
  const DynamicVideoPlayer = dynamic(
    () => import('../videoPlayer/VideoPlayer'),
    {
      ssr: false,
    }
  );

  //  image
  const [isHovered, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);

  //  modal
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow((p) => !p);

  return (
    <div
      className='w-full'
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={toggleShow}
    >
      {!isHovered ? (
        <img
          src={baseUrl + thumbnailImage}
          alt='thumbnail'
          className='w-full rounded-lg border border-gray-300 shadow-xl dark:border-gray-500 sm:w-48'
        />
      ) : (
        <img
          src={baseUrl + thumbnailImageHover}
          alt='preview'
          className='w-full rounded-lg border border-gray-300 shadow-xl dark:border-gray-500 sm:w-48'
        />
      )}
      <Modal show={show} toggleShow={toggleShow}>
        <div className='flex h-full w-full items-center justify-center'>
          <DynamicVideoPlayer
            id={`thumb-vid-${videoUrl}`}
            url={videoUrl}
            fluid={true}
            poster={baseUrl + thumbnailImage}
            progress={progress}
          />
        </div>
      </Modal>
    </div>
  );
}
