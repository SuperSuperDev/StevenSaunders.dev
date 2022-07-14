/* eslint-disable unused-imports/no-unused-vars */
import HeaderFooter from '@NonoviumUI/layout/HeaderFooter';
import { projects } from 'data/projects';
import Image from 'next/image';
import Link from 'next/link';
import { ReactElement } from 'react';

import Layout from '@/components/layout/Layout';
export default function Projects() {
  return (
    <div className='container mx-auto'>
      <h1>This page is currently under construction.</h1>
      <p>Please try again later d</p>
      <div className='mx-auto grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4'>
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
            <div className='card mx-auto shadow-xl dark:bg-slate-900' key={id}>
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
                <h2 className='card-title'>{name}</h2>
                <p>{intro}</p>
                <div className='card-actions'>
                  <Link href={`/projects/${slug}`} passHref>
                    <a>
                      <button className='btn btn-primary'>Details</button>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

Projects.getLayout = function getLayout(Projects: ReactElement) {
  return (
    <Layout>
      <HeaderFooter>{Projects}</HeaderFooter>
    </Layout>
  );
};
