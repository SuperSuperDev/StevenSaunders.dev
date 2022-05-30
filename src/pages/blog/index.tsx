import HeaderFooter from '@NonoviumUI/layout/HeaderFooter';
import { ReactElement } from 'react';

import { loadBlogPosts } from '@/lib/fetch-blog-posts';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import { IVideoDetails } from '../../lib/types';

export default function Blog({
  blogPosts: blogPosts,
}: {
  blogPosts: IVideoDetails[];
}) {
  return (
    <>
      <Seo templateTitle='Blog' />
      <main>Blog</main>
      <ul>
        {blogPosts.map(({ title }) => (
          <li key={title}>{title}</li>
        ))}
      </ul>
    </>
  );
}

Blog.getLayout = function getLayout(Blog: ReactElement) {
  return (
    <Layout>
      <HeaderFooter>{Blog}</HeaderFooter>
    </Layout>
  );
};

export async function getStaticProps() {
  const data = await loadBlogPosts();
  const featuredPost = data.results[0];
  // if data.results.length > 1  const blogPosts = data.results.slice(1), if data.results.length is 0 const blogPosts = data.results;

  const blogPosts: IVideoDetails[] =
    data.results.length >= 2 ? data.results.slice(1) : data.results;

  return {
    props: {
      featuredPost,
      blogPosts,
    },
  };
}
