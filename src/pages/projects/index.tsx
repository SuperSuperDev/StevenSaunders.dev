/* eslint-disable unused-imports/no-unused-vars */
import Markdown from '@NonoviumUI/Blocks/Markdown';
import Button from '@NonoviumUI/buttons/Button';
import DevIconInline from '@NonoviumUI/devLang/DevIconInline';
import HeaderFooter from '@NonoviumUI/layout/HeaderFooter';
import Seo from '@NonoviumUI/Seo';
import { Project, projects } from 'data/projects';
import Image from 'next/image';
import Link from 'next/link';
import { ReactElement } from 'react';

import getIcon from '@/lib/getIcon';
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
  links,
}: Project) {
  return (
    <div
      className='dark:pre-dark-grad mx-auto w-full py-7 shadow-xl dark:bg-transparent'
      key={id}
    >
      <div className='mx-auto grid w-full grid-cols-1 gap-4 py-7 dark:bg-transparent md:grid-cols-3 lg:grid-cols-4'>
        <div className='mx-auto w-full items-center px-4 text-center'>
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
        <div className='prose mx-auto  w-full min-w-full px-7 text-left dark:prose-invert md:col-span-2 lg:col-span-3 '>
          <h2 className='text-left text-primary-700'>{title}</h2>
          <div className='prose:max prose prose-lg max-h-72 overflow-clip text-ellipsis dark:prose-invert'>
            <Markdown
              content={intro}
              className='scrollbar max-h-72 max-w-none overflow-auto'
            />
          </div>
        </div>
      </div>
      <div className='flex flex-wrap px-7 text-center'>
        <div className='flex-grow text-left'>
          {links && (
            <>
              {links.map((link) => (
                <Link
                  href={`https://${link.url}`}
                  key={`${link.url}-${link.type}`}
                  passHref
                >
                  <a className='text-primary-700'>
                    <Button
                      variant='outline'
                      iconLeft={getIcon(link.type, 'IconComponent')}
                      className='mx-1 p-0 px-2 text-lg'
                    >
                      {link.type}
                    </Button>
                  </a>
                </Link>
              ))}
            </>
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
  subTitle,
  slug,
  screenshots,
}: Project) {
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
        <p>{subTitle}</p>
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
