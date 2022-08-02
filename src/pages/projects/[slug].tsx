import Markdown from '@SuperSuperUI/Blocks/Markdown';
import HeaderFooter from '@SuperSuperUI/layout/HeaderFooter';
import ContentUSPSGrid from '@SuperSuperUI/sections/ContentUSPSGrid';
import { Project, projects } from 'data/projects';
import Image from 'next/image';
import { ReactElement } from 'react';

import 'highlight.js/styles/github-dark.css';

import Block from '@/components/containers/Block';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

const ProjectDetail = ({ projectDetail }: { projectDetail: Project }) => {
  const {
    // domain,
    // id,
    description,
    intro,
    // languages,
    // name,
    scope,
    screenshots,
    // slug,
    // tags,
    title,
  } = projectDetail;

  return (
    <>
      <Seo templateTitle={title ? title : ''} />

      <main>
        <Block>
          <div>
            {title !== null && title !== undefined && (
              <>
                <section className='prose mx-auto mt-16 max-w-7xl px-4 pt-7 pb-12 text-center dark:prose-invert'>
                  <div className='mx-auto flex flex-row flex-wrap'>
                    <div className='mx-auto flex flex-grow basis-full'>
                      <div className='aspect-w-16 aspect-h-9 mx-auto w-full max-w-5xl rounded-b-none lg:rounded-b-lg'>
                        {screenshots?.webScreenshot?.url ? (
                          <Image
                            alt={title}
                            src={screenshots.webScreenshot.url}
                            layout='fill'
                            objectFit='cover'
                            className='rounded-lg group-hover:opacity-75'
                          />
                        ) : (
                          <div> </div>
                        )}
                      </div>
                    </div>
                  </div>
                </section>
                <section className='prose mx-auto mt-16 max-w-7xl p-4 text-center dark:prose-invert'>
                  <div className='mx-auto flex flex-col flex-wrap'>
                    <h1 className='mx-auto text-center'>{title}</h1>
                    <p>{intro}</p>
                  </div>
                </section>
                <ContentUSPSGrid {...scope} />
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

ProjectDetail.getLayout = function getLayout(ProjectDetail: ReactElement) {
  return (
    <Layout>
      <HeaderFooter bgVariant='gradient'>{ProjectDetail}</HeaderFooter>
    </Layout>
  );
};

export async function getStaticPaths() {
  const paths = projects.map((project) => ({
    params: {
      slug: project.slug,
    },
  }));
  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const projectDetail = projects.find(
    (project) => project.slug === params.slug
  );
  return {
    props: {
      projectDetail,
    },
    revalidate: 10,
  };
}

export default ProjectDetail;
