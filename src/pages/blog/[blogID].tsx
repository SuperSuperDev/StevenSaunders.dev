//import Button from '@NonoviumUI/buttons/Button';
import HeaderFooter from '@NonoviumUI/layout/HeaderFooter';
//import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';

import Block from '@/components/containers/Block';
import Layout from '@/components/layout/Layout';
//import SidebarLayout from '@/components/layout/SidebarLayout';
import Seo from '@/components/Seo';

//import FullDetail from '../../../components/videos-ui/FullDetail';

export default function Blog() {
  const router = useRouter();
  const { blogID } = router.query;

  return (
    <>
      <Seo templateTitle={blogID ? blogID[0] : 'Error'} />

      <main>
        <Block>
          {blogID !== null && blogID !== undefined && (
            <>
              {/* <EncodingAssetList videoID={typeof videoID === 'string' ? videoID : videoID[0]} /> */}
              {/* <Link href='/dashboard/videos/add-video' passHref>
                <Button variant='primary'>Add New Video</Button>
              </Link>
              <Link href='/dashboard/videos' passHref>
                <Button variant='outline'>View Videos</Button>
              </Link>
              <FullDetail
                videoID={typeof videoID === 'string' ? videoID : videoID[0]}
              /> */}
              {blogID}
            </>
          )}
        </Block>
      </main>
    </>
  );
}

Blog.getLayout = function getLayout(Page: ReactElement) {
  return (
    <Layout>
      <HeaderFooter>{Page}</HeaderFooter>
    </Layout>
  );
};
