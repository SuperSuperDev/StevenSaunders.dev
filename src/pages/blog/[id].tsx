//import Button from '@SuperSuperUI/buttons/Button';
import HeaderFooter from '@SuperSuperUI/layout/HeaderFooter';
//import Link from 'next/link';
import { ReactElement } from 'react';

import { loadBlogPost, loadBlogPosts } from '@/lib/fetch-blog-posts';

//import FullDetail from '../../../components/videos-ui/FullDetail';
import Block from '@/components/containers/Block';
import Layout from '@/components/layout/Layout';
//import SidebarLayout from '@/components/layout/SidebarLayout';
import Seo from '@/components/Seo';

import { IBlogPost } from '../../lib/types';

const BlogPost = ({ blogPost }: { blogPost: IBlogPost }) => {
  const { blogID, title } = blogPost;
  return (
    <>
      <Seo templateTitle={title ? title : 'Error'} />

      <main>
        <Block>
          {title !== null && title !== undefined && (
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
              {title} {blogID}
            </>
          )}
        </Block>
      </main>
    </>
  );
};

BlogPost.getLayout = function getLayout(BlogPost: ReactElement) {
  return (
    <Layout>
      <HeaderFooter>{BlogPost}</HeaderFooter>
    </Layout>
  );
};

export async function getStaticPaths() {
  const data = await loadBlogPosts();
  const blogPosts = data.results;
  const paths = blogPosts.map((blogPost: IBlogPost) => ({
    params: {
      id: blogPost.friendly_token.toString(),
    },
  }));
  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const data: IBlogPost = await loadBlogPost(params.id);
  const blogPost = data;
  return {
    props: {
      blogPost,
    },
    revalidate: 10,
  };
}

export default BlogPost;
