/* eslint-disable unused-imports/no-unused-vars */
import Markdown from '@NonoviumUI/Blocks/Markdown';
import Button from '@NonoviumUI/buttons/Button';
import DevIconInline from '@NonoviumUI/devLang/DevIconInline';
import HeaderFooter from '@NonoviumUI/layout/HeaderFooter';
import Seo from '@NonoviumUI/Seo';
import { projects, ProjectType } from 'data/projects';
import Image from 'next/image';
import Link from 'next/link';
import { ReactElement } from 'react';

import { DevTech } from '@/lib/types';

import Layout from '@/components/layout/Layout';
export default function Projects() {
  return (
    <>
      <Seo templateTitle='Projects' />
      <section className='container mx-auto py-7'>
        <h1>Projects</h1>
        <p>Some of my projects, past and present</p>
      </section>
      <section className='container mx-auto py-7'>
        <div className='mx-auto grid grid-cols-1 gap-4'>
          {projects.map((project) => (
            <ProjectListItem {...project} key={project.id} />
          ))}
        </div>
      </section>
      <section className='container mx-auto py-7'>
        <div className='mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 2xl:grid-cols-4'>
          {projects.map((project) => (
            <ProjectGridItem {...project} key={project.id} />
          ))}
        </div>
      </section>
    </>
  );
}

Projects.getLayout = function getLayout(Projects: ReactElement) {
  return (
    <Layout>
      <HeaderFooter bgVariant='gradient'>{Projects}</HeaderFooter>
    </Layout>
  );
};
export function ProjectListItem({
  id,
  name,
  title,
  intro,
  slug,
  screenshots,
  description,
  subTitle,
  languages,
}: ProjectType) {
  return (
    <div className='dark:pre-dark-grad mx-auto w-full py-7 shadow-xl dark:bg-transparent  '>
      <div className='mx-auto grid w-full grid-cols-1 gap-4 py-7 dark:bg-transparent md:grid-cols-3'>
        <div className='mx-auto w-full items-center text-center' key={id}>
          <figure>
            <Image
              src={screenshots.logo.url}
              alt={`${name} logo`}
              className='rounded-xl'
              width={300}
              height={300}
            />
          </figure>
          <p className='break-word px-7 text-center'>{subTitle}</p>
        </div>
        <div className='prose mx-auto w-full px-7 text-left dark:prose-invert md:col-span-2 '>
          <h2 className='text-left text-primary-700'>{title}</h2>
          <div className='max-h-72` prose prose-lg overflow-clip text-ellipsis dark:prose-invert'>
            <p>
              <Markdown
                content={intro}
                className='scrollbar max-h-72 w-full overflow-auto'
              />
            </p>
          </div>
        </div>
      </div>
      <div className='flex px-7 text-center'>
        <div className='text-center'>
          {description && (
            <div className='items-center text-center'>
              <div className=''>
                <Link href={`/projects/${slug}`} passHref>
                  <a>
                    <Button variant='outline'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                      </svg>
                    </Button>
                  </a>
                </Link>
              </div>
            </div>
          )}
        </div>
        <div className='grow'>
          <DevIconInline
            iconFormat='DevIconUrl'
            devTech={languages as DevTech[]}
          />{' '}
        </div>
        <div className=''>
          {description && (
            <div className='text-right'>
              <Link href={`/projects/${slug}`} passHref>
                <a>
                  <Button variant='outline'>Read More</Button>
                </a>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function ProjectGridItem({
  id,
  name,
  title,
  intro,
  slug,
  screenshots,
}: ProjectType) {
  return (
    <div
      className='dark:pre-dark-grad card mx-auto w-full shadow-xl dark:bg-transparent'
      key={id}
    >
      <figure className='px-10 pt-10'>
        <Image
          src={screenshots.logo.url}
          alt={`${name} logo`}
          className='rounded-xl'
          width={300}
          height={300}
        />
      </figure>
      <div className='card-body items-center text-center'>
        <h2 className='card-title'>{title}</h2>
        <p>{intro}</p>
        <div className='card-actions'>
          <Link href={`/projects/${slug}`} passHref>
            <a>
              <button className='btn btn-outline btn-info'>Details</button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
