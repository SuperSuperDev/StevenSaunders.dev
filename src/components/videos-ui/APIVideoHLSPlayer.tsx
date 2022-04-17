//TODO : Fix hls player
// import React from 'react';
// import HlsPlayer from 'xgplayer';

// import { useVideoDetail } from '@/lib/api';

// interface APIVideoHLSPlayerProps {
//   videoID: string; // | string[] | undefined;
// }

// export default function APIVideoHLSPlayer({ videoID }: APIVideoHLSPlayerProps) {
//   const { hlsMasterFile, hlsAssets, video, videoLoading } = useVideoDetail(`${videoID ? videoID : null}`);

//   React.useEffect(() => {
//     console.log('hlsAssets.master_file', hlsAssets.master_file)
//     const url = `http://localhost${hlsAssets.master_file}`;
//     console.log('url :>> ', url);
//     new HlsPlayer({
//       id: `apihlsvp-${videoID}`,
//       url: url,
//       // fitVideoSize: "auto",
//       // poster: `http://localhost${video?.poster_url}`,
//       fluid: true,
//     });
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [videoID]);

//   return (
//     <>
//       {videoLoading ? (
//         <div>loading...</div>
//       ) : (
//         <div id={`apihlsvp-${videoID}`}></div>

//       )}
//     </>
//   );
// }
