import BlogList from '@SuperSuperUI/blogUI/BlogList';
import FeaturedPost from '@SuperSuperUI/blogUI/FeaturedPost';
import HeaderFooter from '@SuperSuperUI/layout/HeaderFooter';
import { ReactElement } from 'react';

import { loadBlogPosts } from '@/lib/fetch-blog-posts';
import { IVideoDetails } from '@/lib/types';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import { DevTech } from '../../lib/types';

type props = {
  blogPosts: IVideoDetails[];
  featuredPost: IVideoDetails | null;
  tags: DevTech[];
};
export default function Blog({ blogPosts, featuredPost, tags }: props) {
  return (
    <>
      <Seo templateTitle='Blog' />
      <div id='content'>
        <section className='prose mx-auto mt-4 max-w-7xl px-4 text-center dark:prose-invert md:mt-8'>
          <h1 className='txt-shdw-distant dark:txt-shdw-distant-dark justify-items-center px-7 text-2xl leading-tight sm:text-4xl md:leading-normal'>
            Blog
          </h1>
          {featuredPost && <FeaturedPost featuredPost={featuredPost} />}
        </section>
        <section className='container mx-auto'>
          <BlogList blogPosts={blogPosts} tags={tags} />
        </section>
      </div>
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
  const results: IVideoDetails[] = Array.isArray(data?.results)
    ? data.results
    : [];
  const featuredPost: IVideoDetails | null = results[0] ?? null;
  const blogPosts: IVideoDetails[] =
    results.length >= 2 ? results.slice(1) : [];
  // TODO: create getTags hook
  const tags: string[] = [];
  results.forEach((result: IVideoDetails) => {
    const postTags = Array.isArray(result?.tags_info) ? result.tags_info : [];
    postTags.forEach((tag) => {
      if (!tags.includes(tag.title)) {
        tags.push(tag.title);
      } else {
        return;
      }
    });
  });
  return {
    props: {
      featuredPost,
      blogPosts,
      tags,
    },
    revalidate: 10,
  };
}

// export async function getStaticPaths() {
//   const data = await loadBlogPosts();
//   const blogPosts: IVideoDetails[] = data.results;

//   const paths = blogPosts.map((blogPost) => ({
//     params: { slug: slugify(blogPost.title) },
//   }));

//   return { paths, fallback: false };
// }
