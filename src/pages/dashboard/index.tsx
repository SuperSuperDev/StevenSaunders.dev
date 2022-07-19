import Link from 'next/link';
import Router from 'next/router';
import React, { ReactElement } from 'react';

import { useUser } from '@/lib/api';

import Layout from '@/components/layout/Layout';
import SidebarLayout from '@/components/layout/SidebarLayout';
import UnderlineLink from '@/components/links/UnderlineLink';
import Seo from '@/components/Seo';

export default function Dashboard() {
  const { user, loading, isAuthenticated } = useUser();
  React.useEffect(() => {
    function redirectIfNotAuthenticated() {
      if (!isAuthenticated) {
        return Router.push('/login');
      }
    }
    redirectIfNotAuthenticated();
  }, [isAuthenticated]);

  return (
    <>
      <Seo templateTitle='Dashboard' />

      <main>
        {loading ? (
          'Loading...'
        ) : (
          <section className='bg-white dark:bg-black dark:text-gray-50'>
            <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
              <h1 className='mt-4'>
                Hi {user.username}, Waiting for you to Change the World!
              </h1>
              <Link href='/dashboard/profile'>
                <a>View your Profile</a>
              </Link>
              <br />
              <Link href='/dashboard/videos'>
                <a>View your Videos</a>
              </Link>
              <br />
              <Link href='/dashboard/videos/add-video'>
                <a>Add a Video</a>
              </Link>
              <p className='mt-2 text-sm text-gray-800 dark:text-gray-500'>
                Under Construction
              </p>

              <footer className='absolute bottom-2  dark:text-primary-50'>
                © {new Date().getFullYear()} By{' '}
                <UnderlineLink href='https://stevensaunders.dev'>
                  StevenSaunders.dev
                </UnderlineLink>
              </footer>
            </div>
          </section>
        )}
      </main>
    </>
  );
}

Dashboard.getLayout = function getLayout(Page: ReactElement) {
  return (
    <Layout>
      <SidebarLayout>{Page}</SidebarLayout>
    </Layout>
  );
};
