import NavBar from '@NonoviumUI/layout/NavBar';
import * as React from 'react';

import Footer from './Footer';

export default function HeaderFooter({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='anim-bg-light dark:anim-bg-dark flex min-w-full flex-col bg-scroll'>
      <NavBar />
      <div className='flex flex-grow'>
        <main className='min-h-min min-w-min flex-1'>{children}</main>
      </div>
      <Footer />
    </div>
  );
}
