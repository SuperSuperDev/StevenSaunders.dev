/* eslint-disable unused-imports/no-unused-vars */
import HeaderFooter from '@NonoviumUI/layout/HeaderFooter';
import Seo from '@NonoviumUI/Seo';
import { projects } from 'data/projects';
import Image from 'next/image';
import Link from 'next/link';
import { ReactElement } from 'react';

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
        <div className='mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 2xl:grid-cols-4'>
          {projects.map(
            ({
              domain,
              id,
              intro,
              languages,
              name,
              scope,
              screenshots,
              slug,
              tags,
              title,
            }) => (
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
                        <button className='btn btn-outline btn-info'>
                          Details
                        </button>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            )
          )}
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
