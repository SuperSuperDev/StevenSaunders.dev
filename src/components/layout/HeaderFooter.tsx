import NavBar from '@SuperSuperUI/layout/NavBar';
import * as React from 'react';

import clsxm from '@/lib/clsxm';

import Footer from './Footer';
enum BackgroundVariant {
  'animated-gradient',
  'gradient',
  'basic',
}

enum NavPosition {
  'fixed',
  'sticky',
  'static',
}

type props = {
  bgVariant?: keyof typeof BackgroundVariant;
  navVariant?: keyof typeof NavPosition;
} & React.ComponentPropsWithRef<'div'>;

const HeaderFooter = React.forwardRef<HTMLDivElement, props>(
  (
    {
      children,
      className,
      navVariant = 'static',
      bgVariant = 'animated-gradient',
      ...rest
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={clsxm(
          'flex h-full w-full flex-col',

          //#region //*=== Background Variant =====
          [
            bgVariant === 'animated-gradient' && [
              'anim-bg-light dark:anim-bg-dark',
            ],
            bgVariant === 'gradient' && [
              'bg-gradient-to-tr from-blue-50 via-gray-50 to-blue-50',
              'dark:bg-gradient-to-br dark:from-black dark:to-gray-900',
            ],
            bgVariant === 'basic' && ['bg-white', 'dark:bg-dark'],
          ],
          className
        )}
        {...rest}
      >
        <NavBar navVariant={navVariant} />
        <div className='flex flex-grow'>
          <main className='min-h-min min-w-min flex-1'>{children}</main>
        </div>
        <Footer />
      </div>
    );
  }
);

export default HeaderFooter;
