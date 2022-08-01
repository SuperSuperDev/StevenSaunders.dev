import Animated from '@NonoviumUI/animations/Animated';
import AnimatedTextArray from '@NonoviumUI/animations/AnimatedTextArray';
import {
  AnimatedDevIconGrid,
  AnimatedProjectList,
  SVGDraw,
} from '@NonoviumUI/animations/GSAPAnimations';
import LatestPosts from '@NonoviumUI/blogUI/LatestPosts';
import Button from '@NonoviumUI/buttons/Button';
import Block from '@NonoviumUI/containers/Block';
import DevIconStack from '@NonoviumUI/devLang/DevIconStack';
import HeaderFooter from '@NonoviumUI/layout/HeaderFooter';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Link from 'next/link';
import React from 'react';

import { loadBlogPosts } from '@/lib/fetch-blog-posts';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import { DevTech, IVideoDetails } from '../lib/types';

type props = {
  blogPosts?: IVideoDetails[];
};

export const languages: DevTech[] = [
  'TypeScript',
  'JavaScript',
  'React',
  'Nextjs',
  'Tailwind CSS',
  'Nodejs',
  'Python',
  'Django',
  'PostgreSQL',
  'Redis',
  'Docker',
  'CSS3',
  'HTML5',
];

export default function Page({ blogPosts }: props) {
  const animationProps = {
    textArray: ['Hello', 'World'],
    delayBetween: 200,
    initialDelay: 300,
    className: 'text-4xl',
    animationName: 'tracking-in-expand',
  };

  return (
    <>
      <Seo templateTitle='Home' />
      <main className='text-center text-white'>
        <div className='o'>
          <SVGDraw />
        </div>
        <div className='relative'>
          <AnimatedDevIconGrid />
        </div>
        <div className='relative'>
          <AnimatedProjectList />
        </div>

        <div className='container w-screen py-[10vh]'>
          {/* <TextReveal> */}
          <section className='my-9 w-screen skew-y-6 flex-col items-center justify-items-center bg-gradient-to-r from-purple-900 to-red-900 bg-cover bg-fixed p-12 text-center'>
            <div className='mx-auto -skew-y-6 py-28'>
              <div className='py-12'>
                <h2 className='dark:txt-shdw-distant-dark justify-items-center p-7 text-2xl leading-tight text-white drop-shadow-md sm:text-4xl md:leading-normal'>
                  This site is built with....
                </h2>

                <div className='container mx-auto py-14'>
                  <DevIconGrid />
                </div>
              </div>
            </div>
          </section>
          {/* </Animated> */}
          {blogPosts && (
            <section className='prose mx-auto my-9 max-w-7xl flex-col items-center p-9 text-center dark:prose-invert'>
              <h2 className='dark:txt-shdw-distant-dark px-7 text-2xl leading-tight drop-shadow-md sm:text-4xl md:leading-normal'>
                Checkout my Blog
              </h2>
              <Block className='my-4 py-4'>
                <LatestPosts posts={blogPosts} showNumPosts={4} />
              </Block>
              <Block className='my-4 py-4 text-right'>
                <Link href='/blog' passHref>
                  <a>
                    <Button variant='outline'>More Posts...</Button>
                  </a>
                </Link>
              </Block>
              <AnimatedTextArray {...animationProps} />
            </section>
          )}
          {/* </TextReveal> */}
        </div>
      </main>
    </>
  );
}

Page.getLayout = function getLayout(Page: React.ReactElement) {
  return (
    <Layout>
      <HeaderFooter
        navVariant='fixed'
        className='relative bg-fixed'
        bgVariant='gradient'
      >
        {Page}
      </HeaderFooter>
    </Layout>
  );
};

export async function getStaticProps() {
  const data = await loadBlogPosts();
  const blogPosts = data?.results;

  return {
    props: {
      blogPosts,
    },
    revalidate: 10,
  };
}

export const DevIconGrid = () => (
  <div className='container'>
    <Animated
      animationName='tracking-in-expand'
      delayBetween={500}
      initialDelay={3000}
      animationTarget='children'
      targetChildren
      wrapperClassName='grid grid-cols-3 md:grid-cols-5 gap-4'
      ref={React.createRef()}
    >
      {languages.map((lang) => (
        <div className='flex justify-center rounded-xl' key={lang}>
          <div className='w-full'>
            <DevIconStack
              devTech={[lang]}
              iconFormat='DevIconWordUrl'
              title='Frontend'
              iconWidth={150}
              showTitle='never'
              className='m-0 w-full p-0 text-white'
            />
          </div>
        </div>
      ))}
    </Animated>
  </div>
);
