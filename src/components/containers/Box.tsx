import React from 'react';

import clsxm from '@/lib/clsxm';

import Block from './Block';

enum BoxVariant {
  'rnd-shadow',
  'sq-shadow',
}

enum BackgroundVariant {
  'animated-gradient',
  'gradient',
  'basic',
  'transparent',
}

type BoxProps = {
  variant?: keyof typeof BoxVariant;
  bgVariant?: keyof typeof BackgroundVariant;
} & React.ComponentPropsWithRef<'div'>;

const Box = React.forwardRef<HTMLDivElement, BoxProps>(
  (
    {
      children,
      className,
      variant = 'rnd-shadow',
      bgVariant = 'basic',
      ...rest
    },
    ref
  ) => {
    return (
      <Block>
        <div
          ref={ref}
          className={clsxm(
            'mx-auto w-full max-w-7xl p-4 sm:p-6 lg:p-8',

            //#region  //*=========== Variants ===========
            [
              variant === 'rnd-shadow' && [
                'bg-transparent',
                //
                'border border-gray-200 dark:border-none',
                'rounded-md',
              ],
              variant === 'sq-shadow' && [
                'bg-white',
                'border border-gray-200',
                'rounded-none',
              ],
            ],
            'shadow-sm',
            //#endregion //*=========== Variants ===========
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
              bgVariant === 'transparent' && ['bg-transparent'],
            ],
            className
          )}
          {...rest}
        >
          {children}
        </div>
      </Block>
    );
  }
);

export default Box;
