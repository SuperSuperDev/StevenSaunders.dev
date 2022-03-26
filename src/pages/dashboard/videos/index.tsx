/* eslint-disable @next/next/no-img-element */ // TODO: remove this
import Link from 'next/link';
import { ReactElement } from 'react';

import { useUserMedia } from '@/lib/api';

import Block from '@/components/containers/Block';
import Box from '@/components/containers/Box';
import Layout from '@/components/layout/Layout';
import SidebarLayout from '@/components/layout/SidebarLayout';
import Seo from '@/components/Seo';

export default function Videos() {
  const { media, mediaLoading } = useUserMedia();

  interface MediaResults {
    friendly_token: string;
    url?: string;
    api_url?: string;
    user?: string;
    title?: string;
    description?: string;
    add_date: string;
    views?: number;
    media_type?: string;
    state?: string;
    duration?: number;
    thumbnail_url?: string;
    is_reviewed?: boolean;
    preview_url?: string;
    author_name?: string;
    author_profile?: string;
    author_thumbnail?: string;
    encoding_status?: string;
    likes?: number;
    dislikes?: number;
    reported_times?: number;
    featured?: boolean;
    user_featured?: boolean;
    size?: string;
  }

  return (
    <>
      <Seo templateTitle='My Videos' />

      <main>
        <Block>
          {mediaLoading ? (
            'Loading...'
          ) : (
            <h1 className='text-primary-500'>My Videos</h1>
          )}

          {media &&
            media.results.map((mediaItem: MediaResults) => (
              <Box
                key={mediaItem.friendly_token}
                className='border-primary-600 dark:bg-dark dark:text-white'
                variant='rnd-shadow'
              >
                <div className='sm:flex'>
                  <div className='mb-4 flex-shrink-0 sm:mb-0 sm:mr-4'>
                    <Box className='border-primary-600 dark:bg-black dark:text-primary-600'>
                      {mediaItem.thumbnail_url && (
                        <img
                          src={mediaItem.thumbnail_url}
                          alt={mediaItem.title}
                        />
                      )}
                    </Box>
                  </div>
                  <div>
                    <Box className='border-primary-600 dark:bg-dark'>
                      <h4 className='text-lg font-bold text-primary-600'>
                        <Link
                          href={`/dashboard/videos/${mediaItem.friendly_token}`}
                        >
                          <a>{mediaItem.title}</a>
                        </Link>
                      </h4>
                      <p className='mt-1'>{mediaItem.description}</p>
                    </Box>
                  </div>
                </div>
              </Box>
            ))}
          {/* // <Box>
          //   <h1>My Videos</h1>
          //   <VideoList props={videos} />
          // </Box> */}
        </Block>
      </main>
    </>
  );
}

Videos.getLayout = function getLayout(Page: ReactElement) {
  return (
    <Layout>
      <SidebarLayout>{Page}</SidebarLayout>
    </Layout>
  );
};
