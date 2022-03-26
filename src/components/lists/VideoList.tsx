import Box from '@/components/containers/Box';

import NextImage from '../NextImage';

// export interface VideoItem {
//   id: string;
//   title: string;
//   description?: string;
//   url?: string;
//   poster?: string;
// }

// export type VideoArray = VideoItem[];

function VideoListItemResponsive({ ...props }) {
  return (
    <Box>
      <div className='sm:flex'>
        <div className='mb-4 flex-shrink-0 sm:mb-0 sm:mr-4'>
          {props.poster && <NextImage src={props.poster} layout='fill' />}
        </div>
        <div>
          <h4 className='text-lg font-bold'>{props.title}</h4>
          <p className='mt-1'>{props.description}</p>
        </div>
      </div>
    </Box>
  );
}

export default function VideoList({ ...props }) {
  return (
    <>
      {props.map((video: { id: string }) => (
        <VideoListItemResponsive key={video.id} {...video} />
      ))}
    </>
  );
}
