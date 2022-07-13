/* eslint-disable unused-imports/no-unused-vars */
import HeaderFooter from '@NonoviumUI/layout/HeaderFooter';
import { projects } from 'data/projects';
import Image from 'next/image';
import Link from 'next/link';
import { ReactElement } from 'react';

import Layout from '@/components/layout/Layout';
export default function Projects() {
  // const project = {
  //   id: '62c567d42b901ad69400ab30',
  //   title: 'TEst',
  //   layout: [
  //     {
  //       code: "const foo = 'Bar'",
  //       language: 'javascript',
  //       id: '62c567b7af0c74b9cfd8cbd4',
  //       blockName: 'Test Code',
  //       blockType: 'code',
  //     },
  //   ],
  //   image: {
  //     id: '62c5679e2b901ad69400ab25',
  //     filename: 'Big Eye Interview Jim Rogers Thumb-2.png',
  //     mimeType: 'image/png',
  //     filesize: 1983789,
  //     width: 1920,
  //     height: 1080,
  //     sizes: {
  //       card: {
  //         width: 640,
  //         height: 480,
  //         mimeType: 'image/png',
  //         filesize: 659178,
  //         filename: 'Big Eye Interview Jim Rogers Thumb-2-640x480.png',
  //         url: 'http://localhost:3010/media/Big Eye Interview Jim Rogers Thumb-2-640x480.png',
  //       },
  //       feature: {
  //         width: 1024,
  //         height: 576,
  //         mimeType: 'image/png',
  //         filesize: 1146897,
  //         filename: 'Big Eye Interview Jim Rogers Thumb-2-1024x576.png',
  //         url: 'http://localhost:3010/media/Big Eye Interview Jim Rogers Thumb-2-1024x576.png',
  //       },
  //     },
  //     alt: 'test',
  //     createdAt: '2022-07-06T10:44:46.800Z',
  //     updatedAt: '2022-07-06T10:44:46.800Z',
  //     url: 'http://localhost:3010/media/Big Eye Interview Jim Rogers Thumb-2.png',
  //   },
  //   slug: 'test',
  //   createdAt: '2022-07-06T10:45:40.888Z',
  //   updatedAt: '2022-07-06T10:45:40.888Z',
  //   meta: {},
  // };

  return (
    <div className='container mx-auto'>
      {/* {project && <RenderBlocks layout } />} */}
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
            <div className='card mx-auto bg-transparent shadow-xl' key={id}>
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
