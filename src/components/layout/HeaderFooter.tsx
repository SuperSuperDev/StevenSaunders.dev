import NavBar from '@NonoviumUI/layout/NavBar';
import * as React from 'react';

import Footer from './Footer';

export default function HeaderFooter({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className='flex h-screen flex-col'>
        <NavBar />
        <div className='flex flex-grow'>
          <main className='min-h-min'>{children}</main>
        </div>
        <Footer />
      </div>
    </>
  );
}
