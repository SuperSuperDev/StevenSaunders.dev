import { CalendarIcon as CalendarIconOutline } from '@heroicons/react/outline';
import { CalendarIcon } from '@heroicons/react/solid';
import Markdown from '@SuperSuperUI/Blocks/Markdown';
import HeaderFooter from '@SuperSuperUI/layout/HeaderFooter';
import Image from 'next/image';
import { ReactElement } from 'react';
import slugify from 'slugify';

import 'highlight.js/styles/github-dark.css';

import { baseUrl } from '@/lib/api';
import { loadBlogPost, loadBlogPosts } from '@/lib/fetch-blog-posts';
import { publishedOnDate } from '@/lib/helper';

import Block from '@/components/containers/Block';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import { IBlogPost } from '../../../lib/types';
const BlogPostDetail = ({ blogPostDetail }: { blogPostDetail: IBlogPost }) => {
  const { title, hero_url, description, add_date, edit_date } = blogPostDetail;
  const datePublished = publishedOnDate(new Date(add_date ? add_date : ''), 3);
  const dateEdited = publishedOnDate(new Date(edit_date ? edit_date : ''), 3);

  return (
    <>
      <Seo templateTitle={title ? title : ''} />

      <main>
        <Block>
          <div>
            {title !== null && title !== undefined && (
              <>
                <section className='prose mx-auto mt-16 max-w-7xl px-4 text-center dark:prose-invert'>
                  <div className='mx-auto flex flex-row flex-wrap'>
                    <div className='mx-auto flex flex-grow basis-full'>
                      <div className='aspect-w-16 aspect-h-9 mx-auto w-full max-w-5xl rounded-b-none lg:rounded-b-lg'>
                        <Image
                          alt={title}
                          src={`${baseUrl}${hero_url}`}
                          layout='fill'
                          objectFit='cover'
                          className='rounded-lg group-hover:opacity-75 '
                        />
                      </div>
                    </div>
                  </div>
                </section>
                <section className='prose mx-auto mt-16 max-w-7xl px-4 text-center dark:prose-invert'>
                  <div className='mx-auto flex flex-col flex-wrap'>
                    <h1 className='mx-auto text-center'>{title}</h1>

                    <div className='mx-auto flex flex-row text-center text-sm text-gray-500'>
                      <CalendarIcon
                        className='mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400'
                        aria-hidden='true'
                      />
                      {datePublished}
                    </div>
                    {dateEdited !== dateEdited && (
                      <div className='mx-auto flex flex-row text-center text-sm text-gray-500'>
                        <CalendarIconOutline
                          className='mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400'
                          aria-hidden='true'
                        />
                        Updated: {dateEdited}
                      </div>
                    )}
                  </div>
                </section>
                <section className='mx-auto mt-16 max-w-7xl px-4'>
                  <article className=' prose-code:not-prose dark:prose-code:no-prose prose mx-auto flex w-full flex-col flex-wrap dark:prose-invert'>
                    <Markdown content={description} />
                  </article>
                </section>
              </>
            )}
          </div>
        </Block>
      </main>
    </>
  );
};

BlogPostDetail.getLayout = function getLayout(BlogPostDetail: ReactElement) {
  return (
    <Layout>
      <HeaderFooter bgVariant='gradient'>{BlogPostDetail}</HeaderFooter>
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
