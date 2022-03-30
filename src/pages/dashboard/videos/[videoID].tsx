import { useRouter } from 'next/router';
import { ReactElement, useEffect } from 'react';

import { useUser, useVideoDetail } from '@/lib/api';

import Block from '@/components/containers/Block';
import Layout from '@/components/layout/Layout';
import SidebarLayout from '@/components/layout/SidebarLayout';
import Seo from '@/components/Seo';

import FullDetail from '../../../components/videos-ui/FullDetail';

export default function VideoPage() {
  const { isAuthenticated } = useUser();
  const router = useRouter();

  const videoID = router.query['videoID'];

  // const { videoMutate } = useVideoDetail(`${videoID? videoID : null}`);
  const { videoMutate } = useVideoDetail(videoID ? videoID : null);

  useEffect(() => {
    if (videoID !== undefined) {
      videoMutate(videoID);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoID]);
  if (!isAuthenticated) return <>redirecting...</>;

  // interface VideoDetails {
  //   url: string;
  //   user: string;
  //   title: string;
  //   description: string;
  //   add_date: string;
  //   edit_date: string;
  //   media_type: string;
  //   state: string;
  //   duration: number;
  //   thumbnail_url: string;
  //   poster_url: string;
  //   thumbnail_time: number;
  //   sprites_url: string;
  //   preview_url: string;
  //   author_name: string;
  //   author_profile: string;
  //   author_thumbnail: string;
  //   encodings_info: string;
  //   encoding_status: string;
  //   views: number;
  //   likes: number;
  //   dislikes: number;
  //   reported_times: number;
  //   user_featured: boolean;
  //   original_media_url: string;
  //   size: string;
  //   video_height: number;
  //   enable_comments: boolean;
  //   categories_info: string;
  //   is_reviewed: boolean;
  //   edit_url: string;
  //   tags_info: string;
  //   hls_info: string;
  //   license: number;
  //   subtitles_info: string;
  //   ratings_info: string;
  //   add_subtitle_url: string;
  //   allow_download: boolean;
  // }

  return (
    <>
      <Seo templateTitle='My Videos' />

      <main>
        <Block>
          <FullDetail videoID={`${videoID}`} />
        </Block>
      </main>
    </>
  );
}

VideoPage.getLayout = function getLayout(Page: ReactElement) {
  return (
    <Layout>
      <SidebarLayout>{Page}</SidebarLayout>
    </Layout>
  );
};
