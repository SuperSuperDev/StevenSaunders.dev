import Button from '@SuperSuperUI/buttons/Button';
import DevIconInline from '@SuperSuperUI/devLang/DevIconInline';
import HeaderFooter from '@SuperSuperUI/layout/HeaderFooter';
import { ProfileLinks, profileLinks } from 'data/profileLinks';
import { Project, projects } from 'data/projects';
import Image from 'next/image';
import Link from 'next/link';
import React, { useMemo } from 'react';

import getIcon from '@/lib/getIcon';
import { DevTech } from '@/lib/types';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export type props = {
  profileLinks: ProfileLinks[];
};

function ProfileLinksFlex() {
  return (
    <div className='flex flex-col gap-2 text-center md:float-right md:flex-row'>
      {profileLinks.map((link) => (
        <Link
          href={`https://${link.url}`}
          key={`${link.url}-${link.type}`}
          passHref
        >
          <a className=''>
            <Button
              variant='outline'
              iconLeft={getIcon(link.type, 'IconComponent')}
              className='mx-1 p-0 px-2 text-lg'
            >
              {link.label}
            </Button>
          </a>
        </Link>
      ))}
    </div>
  );
}

function AboutSection({
  title,
  description,
  iconName,
  children,
}: {
  title: string;
  description: React.ReactNode;
  children?: React.ReactNode;
  iconName: string;
}) {
  return (
    <section className='container mx-auto my-9'>
      <div className='dark:pre-dark-grad grid grid-cols-1 gap-4 p-5'>
        <div className='container mx-auto grid grid-cols-1 place-content-stretch gap-5 p-5 md:grid-cols-3'>
          <div className='mx-auto rounded-xl pt-2 text-center text-9xl text-primary-500 md:col-span-1'>
            <div className='mx-auto flex place-content-center'>
              {getIcon(iconName, 'IconComponent')}
            </div>
            <h2>{title}</h2>
          </div>
          <div className='prose prose-xl text-justify dark:prose-invert md:prose-2xl md:col-span-2'>
            {description}
            <div className='not-prose'>{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectItemCompact({ project }: { project: Project }) {
  return (
    <div
      key={project.id}
      className='grid grid-cols-1 gap-4 p-5 md:grid-cols-3 '
    >
      <div className='mx-auto w-36'>
        <Image
          src={project.screenshots.logo.url}
          alt={project.name}
          layout='responsive'
          width={150}
          height={150}
          objectFit='contain'
        />
      </div>
      <div className='md:col-span-2'>
        <h3 className='prose prose-xl dark:prose-invert'>{project.name}</h3>
        <p className='prose dark:prose-invert'>{project.intro}</p>
        {project.links && (
          <>
            {project.links.map((link) => (
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
        <div className=''>
          <DevIconInline
            iconFormat='DevIconUrl'
            devTech={project.languages as DevTech[]}
          />
        </div>
      </div>
    </div>
  );
}

export default function About() {
  const heading = <h1 className='text-primary-500'>About Me</h1>;
  const aboutIntro = (
    <>
      <p>
        I&apos;m a software developer with a passion for building things.
        I&apos;m currently working at Nonovium as a full-stack developer
        building custom video platforms for the web.
      </p>
      <p>
        While I work with a wide range of technologies, most of my experience is
        centred around JavaScript and Python working with the React and Django
        frameworks respectively.
      </p>
    </>
  );
  const bioText = (
    <>
      <p>
        I am a huge fan of travelling and seeing the world. I moved to Asia in
        my early twenties to teach English and to explore their culture. I went
        on to live there for the next 20 years, building a successful real
        estate agency in Northern Thailand and running a serviced apartment
        business. I returned to live in the UK with my family in 2019.
      </p>
      <p>
        I built my first website back in 2003 when I taught myself HTML and CSS
        to build a static site to host free teaching resources for TEFL/TESL
        teachers. Ever since then I have seen the huge benefit of using the web
        as the backbone of various businesses.
      </p>
      <p>
        Through the years I have built and hosted e-commerce sites using
        OSCommerce, and various WordPress websites including a full property
        sales and rental portal (2011-2018), utilizing mostly low-code tools and
        plugins.
      </p>
      <p>
        In 2001 I decided to take it to a new level and enrolled in General
        Assembly&apos;s Full-Stack Software Engineering Immersive Program before
        taking on a contract with Nonovium to build a custom video platform for
        a client.
      </p>
      <p>
        I am passionate about coding and building things but I am also a huge
        fan of living life to the fullest. I love to travel and see the world,
        and I love spending time with my family. I enjoy playing piano and
        guitar and love chilling out to the sounds of the blues.
      </p>
      <p>
        My contract with Nonovium is coming to an end and I am currently looking
        for the next challenge.
      </p>
    </>
  );
  //filter projects to only include those whose category is 'work'
  // TODO: add sorting by endYear

  const workProjects = useMemo(
    () =>
      projects
        .filter((project) => {
          return project.category.toLowerCase() === 'work';
        })
        .sort((a, b) => {
          return b.yearEnd - a.yearEnd;
        }),
    []
  );

  const educationProjects = useMemo(
    () =>
      projects
        .filter((project) => {
          return project.category.toLowerCase() === 'education';
        })
        .sort((a, b) => {
          return b.yearEnd - a.yearEnd;
        }),
    []
  );

  const personalProjects = useMemo(
    () =>
      projects
        .filter((project) => {
          return project.category.toLowerCase() === 'personal';
        })
        .sort((a, b) => {
          return b.yearEnd - a.yearEnd;
        }),
    []
  );

  return (
    <>
      <Seo templateTitle='About Me' />

      <section className='container mx-auto my-9'>
        <div className='dark:pre-dark-grad grid grid-cols-1 gap-4 p-5'>
          <div className='container mx-auto grid grid-cols-1 place-content-stretch gap-5 p-5 md:grid-cols-3'>
            <div className='mx-auto w-full rounded-xl pt-2 text-center md:order-last md:col-span-1'>
              <Image
                src='https://s3.pub1.infomaniak.cloud/object/v1/AUTH_598753f3935548c6a1ca8f065e534ac1/supersuperdev-pub/img/profile1.png'
                alt='Steven Saunders'
                width='280'
                height='280'
                objectFit='contain'
                className='rounded-xl shadow-xl'
              />
              <h2 className='prose prose-xl text-primary-500 dark:prose-invert'>
                Steven Saunders
              </h2>
            </div>
            <div className='prose prose-xl text-justify dark:prose-invert md:prose-2xl md:col-span-2'>
              {heading}
              {aboutIntro}
            </div>
          </div>
          <div className=''>
            <ProfileLinksFlex />
          </div>
        </div>
      </section>
      <AboutSection title='Bio' description={bioText} iconName='profile' />
      <AboutSection
        title='Relevant Work Experience'
        iconName='work'
        description=''
      >
        {workProjects.map((project) => (
          <ProjectItemCompact project={project} key={project.id} />
        ))}
      </AboutSection>
      <AboutSection title='Education' iconName='education' description=''>
        {educationProjects.map((project) => (
          <ProjectItemCompact project={project} key={project.id} />
        ))}
      </AboutSection>
      <AboutSection
        title='Personal Projects'
        iconName='personal'
        description=''
      >
        {personalProjects.map((project) => (
          <ProjectItemCompact project={project} key={project.id} />
        ))}
      </AboutSection>
    </>
  );
}

About.getLayout = function getLayout(About: React.ReactElement) {
  return (
    <Layout>
      <HeaderFooter className='bg-fixed' bgVariant='gradient'>
        {About}
      </HeaderFooter>
    </Layout>
  );
};
