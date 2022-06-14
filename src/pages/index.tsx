import LatestPosts from '@NonoviumUI/blogUI/LatestPosts';
import Button from '@NonoviumUI/buttons/Button';
import Block from '@NonoviumUI/containers/Block';
import DevIconStack from '@NonoviumUI/devLang/DevIconStack';
import HeaderFooter from '@NonoviumUI/layout/HeaderFooter';
import Image from 'next/image';
import Link from 'next/link';
import { ReactElement } from 'react';

import { loadBlogPosts } from '@/lib/fetch-blog-posts';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import DevIconInline from '../components/devLang/DevIconInline';
import { IVideoDetails } from '../lib/types';

type props = {
  blogPosts?: IVideoDetails[];
};
export default function Page({ blogPosts }: props) {
  return (
    <>
      <Seo templateTitle='Home' />
      <div id='content'>
        <section className='prose mx-auto mt-16 max-w-7xl px-4 text-center dark:prose-invert'>
          <div className='mx-auto flex flex-wrap-reverse items-center'>
            <h1 className='dark:txt-shdw-distant-dark px-7 text-2xl leading-tight drop-shadow-md sm:text-4xl md:max-w-[70%] md:leading-normal'>
              I&apos;m{' '}
              <span className='text-primary-500 dark:text-primary-400'>
                Steven Saunders
              </span>
              . I&apos;m a full stack developer and software engineer with a
              passion for coding.
            </h1>
            <div className='mx-auto block min-w-[40%] py-7 px-3 drop-shadow-md md:min-w-[30%]'>
              <Image
                src='https://s3.pub1.infomaniak.cloud/object/v1/AUTH_598753f3935548c6a1ca8f065e534ac1/supersuperdev-pub/img/profile1.png'
                alt='Steven Saunders'
                width='240'
                height='240'
                layout='responsive'
                className='min-w-[180px] max-w-[240px] rounded-full'
              />
            </div>
          </div>
        </section>

        <section className='prose mx-auto my-9 max-w-7xl flex-col items-center p-9 text-center dark:prose-invert'>
          <h1 className='dark:txt-shdw-distant-dark px-7 text-2xl leading-tight drop-shadow-md sm:text-4xl md:leading-normal'>
            I build scalable, performant, and accessible web applications.
          </h1>
          <div className='min-h-[400px] py-20'>
            <DevIconInline devTech='all' iconFormat='IconComponent' />
          </div>
          {/* <div className='min-h-[200px] py-20'>
            <h1>Icon Images</h1>
            <DevIconInline devTech='all' iconFormat='DevIconUrl' />
          </div>
          <div className='min-h-[200px] py-20'>
            <h1>Icon Wordmarks</h1>
            <DevIconInline devTech='all' iconFormat='DevIconWordUrl' />
          </div> */}
        </section>
        <section className='my-9 w-screen skew-y-6 flex-col items-center justify-items-center bg-gradient-to-r from-purple-900 to-red-900 bg-cover bg-fixed p-12 text-center'>
          <div className='mx-auto -skew-y-6 py-12'>
            <h1 className='dark:txt-shdw-distant-dark justify-items-center px-7 text-2xl leading-tight text-white drop-shadow-md sm:text-4xl md:leading-normal'>
              This site is built with....
            </h1>

            <div className='container mx-auto'>
              <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
                <div className='flex justify-center rounded-xl border-2 border-primary-300 p-6 text-6xl'>
                  <DevIconStack
                    devTech={['TypeScript', 'JavaScript', 'React', 'Nextjs']}
                    iconFormat='DevIconWordUrl'
                    title='Frontend'
                    iconWidth={96}
                    showTitle='never'
                    className='text-white'
                  />
                </div>
                <div className='flex justify-center rounded-xl border-2 border-primary-300 p-6 text-6xl'>
                  <div className='basis-full'>
                    <DevIconStack
                      devTech={['Python', 'Django']}
                      iconFormat='DevIconWordUrl'
                      title='Backend'
                      iconWidth={96}
                      showTitle='never'
                      className='text-white'
                    />
                    <DevIconStack
                      devTech={['PostgreSQL', 'Redis']}
                      iconFormat='DevIconWordUrl'
                      title='Database'
                      iconWidth={96}
                      showTitle='never'
                      className='text-white'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
          </section>
        )}
      </div>
    </>
  );
}

Page.getLayout = function getLayout(Page: ReactElement) {
  return (
    <Layout>
      <HeaderFooter>{Page}</HeaderFooter>
    </Layout>
  );
};

export async function getStaticProps() {
  const data = await loadBlogPosts();
  const blogPosts = data.results;

  return {
    props: {
      blogPosts,
    },
    revalidate: 10,
  };
}
