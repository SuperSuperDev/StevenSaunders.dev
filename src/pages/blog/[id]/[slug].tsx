//import Button from '@NonoviumUI/buttons/Button';
import HeaderFooter from '@NonoviumUI/layout/HeaderFooter';
//import Link from 'next/link';
import { ReactElement } from 'react';
import slugify from 'slugify';

import { loadBlogPost, loadBlogPosts } from '@/lib/fetch-blog-posts';

//import FullDetail from '../../../components/videos-ui/FullDetail';
import Block from '@/components/containers/Block';
import Layout from '@/components/layout/Layout';
//import SidebarLayout from '@/components/layout/SidebarLayout';
import Seo from '@/components/Seo';

import { IBlogPost } from '../../../lib/types';

const BlogPostDetail = ({ blogPostDetail }: { blogPostDetail: IBlogPost }) => {
  const { blogID, title } = blogPostDetail;
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

BlogPostDetail.getLayout = function getLayout(BlogPostDetail: ReactElement) {
  return (
    <Layout>
      <HeaderFooter>{BlogPostDetail}</HeaderFooter>
    </Layout>
  );
};

export async function getStaticPaths() {
  const data = await loadBlogPosts();
  const blogPosts = data.results;
  const paths = blogPosts.map((blogPostDetail: IBlogPost) => ({
    params: {
      slug: slugify(blogPostDetail.title, { lower: true }),
      id: blogPostDetail.friendly_token.toString(),
    },
  }));
  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps({
  params,
}: {
  params: { id: string; slug: string };
}) {
  const data = await loadBlogPost(params.id);
  const blogPostDetail = await data;
  return {
    props: {
      blogPostDetail,
    },
    revalidate: 10,
  };
}

export default BlogPostDetail;
