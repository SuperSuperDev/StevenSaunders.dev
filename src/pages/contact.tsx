import Button from '@SuperSuperUI/buttons/Button';
import ContactForm from '@SuperSuperUI/forms/ContactForm';
import HeaderFooter from '@SuperSuperUI/layout/HeaderFooter';
import { ProfileLinks, profileLinks } from 'data/profileLinks';
import Link from 'next/link';
import React from 'react';

import getIcon from '@/lib/getIcon';

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

export default function Contact() {
  const heading = <h1 className='text-primary-500'>Contact Me</h1>;
  const contactIntro = (
    <>
      <p>
        Want to discuss a project? Get in touch with me by filling in the form
        below, or reach out via{' '}
        <a href='https://www.linkedin.com/in/stevensaundersdev/'>LinkedIn</a>.
      </p>
    </>
  );

  return (
    <>
      <Seo templateTitle='Contact Me' />

      <section className='container mx-auto my-9'>
        <div className='dark:pre-dark-grad grid grid-cols-1 gap-4 p-5'>
          <div className='container mx-auto grid grid-cols-1 place-content-stretch gap-5 p-5 md:grid-cols-3'>
            <div className='mx-auto w-full rounded-xl pt-2 text-center md:order-last md:col-span-1'>
              {getIcon('contact', 'IconComponent')}
            </div>
            <div className='prose prose-xl text-justify dark:prose-invert md:prose-2xl md:col-span-2'>
              {heading}
              {contactIntro}
            </div>
          </div>
          <div className=''>
            <ProfileLinksFlex />
          </div>
        </div>
      </section>
      <section className='container mx-auto my-9'>
        <div className='dark:pre-dark-grad grid grid-cols-1 gap-4 p-5'>
          <div className='container mx-auto grid grid-cols-1 place-content-stretch gap-5 p-5 md:grid-cols-3'>
            <div className='mx-auto rounded-xl pt-2 text-center text-9xl text-primary-500 md:col-span-1'>
              <div className='mx-auto flex place-content-center'>
                {getIcon('message', 'IconComponent')}
              </div>
              <h2>Send me a message</h2>
            </div>
            <div className='prose prose-xl text-justify dark:prose-invert md:prose-2xl md:col-span-2'>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

Contact.getLayout = function getLayout(Contact: React.ReactElement) {
  return (
    <Layout>
      <HeaderFooter className='bg-fixed' bgVariant='gradient'>
        {Contact}
      </HeaderFooter>
    </Layout>
  );
};
