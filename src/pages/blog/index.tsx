import BlogList from '@NonoviumUI/blogUI/BlogList';
import FeaturedPost from '@NonoviumUI/blogUI/FeaturedPost';
import HeaderFooter from '@NonoviumUI/layout/HeaderFooter';
import { ReactElement } from 'react';

import { loadBlogPosts } from '@/lib/fetch-blog-posts';
import { IVideoDetails } from '@/lib/types';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import { DevTech } from '../../lib/types';

type props = {
  blogPosts: IVideoDetails[];
  featuredPost: IVideoDetails;
  tags: DevTech[];
};
export default function Blog({ blogPosts, featuredPost, tags }: props) {
  return (
    <>
      <Seo templateTitle='Blog' />
      <div id='content'>
        <section className='prose mx-auto mt-16 max-w-7xl px-4 text-center dark:prose-invert'>
          <h1 className='txt-shdw-distant dark:txt-shdw-distant-dark justify-items-center px-7 text-2xl leading-tight sm:text-4xl md:leading-normal'>
            Blog
          </h1>

          <FeaturedPost featuredPost={featuredPost} />
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
  const featuredPost: IVideoDetails = data.results[0];
  const blogPosts: IVideoDetails[] =
    data.results.length >= 2 ? data.results.slice(1) : data.results;
  // TODO: create getTags hook
  const tags: string[] = [];
  data.results.forEach((result: IVideoDetails) => {
    result.tags_info.forEach((tag) => {
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
