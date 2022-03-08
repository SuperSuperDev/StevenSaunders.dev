import * as React from 'react';

import SidebarLayout from '@/components/layout/SidebarLayout';
import UnderlineLink from '@/components/links/UnderlineLink';
import Seo from '@/components/Seo';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function Dashboard() {
  return (
    <SidebarLayout>
      <Seo templateTitle='Dashboard' />

      <main>
        <section className='bg-white dark:bg-black dark:text-gray-50'>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
            <h1 className='mt-4'>Waiting for Change</h1>

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
      </main>
    </SidebarLayout>
  );
}
