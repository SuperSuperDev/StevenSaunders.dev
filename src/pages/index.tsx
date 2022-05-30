import HeaderFooter from '@NonoviumUI/layout/HeaderFooter';
import Image from 'next/image';
import { ReactElement } from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import DevIconInline from '../components/devLang/DevIconInline';

export default function Page() {
  return (
    <>
      <Seo templateTitle='Home' />
      <div id='content'>
        <section className='prose mx-auto mt-16 max-w-7xl px-4 text-center dark:prose-invert'>
          <div className='mx-auto flex flex-wrap-reverse items-center'>
            <h1 className='txt-shdw-distant dark:txt-shdw-distant-dark px-7 text-2xl leading-tight sm:text-4xl md:max-w-[70%] md:leading-normal'>
              I&apos;m{' '}
              <span className='text-primary-500 dark:text-primary-400'>
                Steven Saunders
              </span>
              . I&apos;m a full stack developer and software engineer with a
              passion for coding.
            </h1>
            <div className='mx-auto block min-w-[40%] py-7 px-3 md:min-w-[30%]'>
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
          <h1 className='txt-shdw-distant dark:txt-shdw-distant-dark px-7 text-2xl leading-tight sm:text-4xl md:leading-normal'>
            I build scalable, performant, and accessible web applications.
          </h1>
          <div className='min-h-[400px] py-20'>
            <DevIconInline devTech='all' iconFormat='IconComponent' />
          </div>
          <div className='min-h-[200px] py-20'>
            <h1>Icon Images</h1>
            <DevIconInline devTech='all' iconFormat='DevIconUrl' />
          </div>
          <div className='min-h-[200px] py-20'>
            <h1>Icon Wordmarks</h1>
            <DevIconInline devTech='all' iconFormat='DevIconWordUrl' />
          </div>
        </section>
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
