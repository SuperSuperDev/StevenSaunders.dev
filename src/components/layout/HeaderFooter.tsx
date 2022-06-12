import NavBar from '@NonoviumUI/layout/NavBar';
import * as React from 'react';

import clsxm from '@/lib/clsxm';

import Footer from './Footer';
enum BackgroundVariant {
  'animated-gradient',
  'gradient',
  'basic',
}

type props = {
  bgVariant?: keyof typeof BackgroundVariant;
} & React.ComponentPropsWithRef<'div'>;

const HeaderFooter = React.forwardRef<HTMLDivElement, props>(
  ({ children, className, bgVariant = 'animated-gradient', ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={clsxm(
          'flex min-w-full flex-col bg-scroll',

          //#region //*=== Background Variant =====
          [
            bgVariant === 'animated-gradient' && [
              'anim-bg-light dark:anim-bg-dark',
            ],
            bgVariant === 'gradient' && [
              'bg-white',
              'dark:bg-gradient-to-br dark:from-black dark:via-gray-900 dark:to-black',
            ],
            bgVariant === 'basic' && ['bg-white', 'dark:bg-dark'],
          ],
          className
        )}
        {...rest}
      >
        <NavBar />
        <div className='flex flex-grow'>
          <main className='min-h-min min-w-min flex-1'>{children}</main>
        </div>
        <Footer />
      </div>
    );
  }
);

export default HeaderFooter;
