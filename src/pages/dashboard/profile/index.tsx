import Link from 'next/link';
import { ReactElement } from 'react';

import { useUser } from '@/lib/api';

import Layout from '@/components/layout/Layout';
import SidebarLayout from '@/components/layout/SidebarLayout';
import UnderlineLink from '@/components/links/UnderlineLink';
import Seo from '@/components/Seo';

export default function Profile() {
  const { user, loading } = useUser();

  return (
    <>
      <Seo templateTitle='My Profile' />

      <main>
        {loading ? (
          'Loading...'
        ) : (
          <section className='bg-white dark:bg-black dark:text-gray-50'>
            <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
              <h1 className='mt-4'>
                Hi {user.name}, This is what your profile says about you!
              </h1>
              <Link href='/dashboard'>
                <a>View your Dashboard</a>
              </Link>
              <p className='mt-2 text-sm text-gray-800 dark:text-gray-500'>
                Under Construction
              </p>

              <footer className='absolute bottom-2  dark:text-primary-50'>
                © {new Date().getFullYear()} By{' '}
                <UnderlineLink href='https://nonovium.com'>
                  Nonovium
                </UnderlineLink>
              </footer>
            </div>
          </section>
        )}
      </main>
    </>
  );
}

Profile.getLayout = function getLayout(Page: ReactElement) {
  return (
    <Layout>
      <SidebarLayout>{Page}</SidebarLayout>
    </Layout>
  );
};
