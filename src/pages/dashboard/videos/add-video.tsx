import { ReactElement } from 'react';

import { useUser } from '@/lib/api';

import Block from '@/components/containers/Block';
import UploadFiles from '@/components/forms/UploadFiles';
import Layout from '@/components/layout/Layout';
import SidebarLayout from '@/components/layout/SidebarLayout';
import Seo from '@/components/Seo';

export default function AddVideo() {
  const { isAuthenticated } = useUser();

  if (!isAuthenticated) return 'redirecting...';

  return (
    <>
      <Seo templateTitle='Add Video' />

      <main>
        <Block>
          <UploadFiles />
        </Block>
      </main>
    </>
  );
}

AddVideo.getLayout = function getLayout(Page: ReactElement) {
  return (
    <Layout>
      <SidebarLayout>{Page}</SidebarLayout>
    </Layout>
  );
};

// interface MediaResults {
//   friendly_token: string;
//   url?: string;
//   api_url?: string;
//   user?: string;
//   title?: string;
//   description?: string;
//   add_date: string;
//   views?: number;
//   media_type?: string;
//   state?: string;
//   duration?: number;
//   thumbnail_url?: string;
//   is_reviewed?: boolean;
//   preview_url?: string;
//   author_name?: string;
//   author_profile?: string;
//   author_thumbnail?: string;
//   encoding_status?: string;
//   likes?: number;
//   dislikes?: number;
//   reported_times?: number;
//   featured?: boolean;
//   user_featured?: boolean;
//   size?: string;
// }
