import React from 'react';

import clsxm from '@/lib/clsxm';

import Block from './Block';

enum BoxVariant {
  'rnd-shadow',
  'sq-shadow',
}

type BoxProps = {
  variant?: keyof typeof BoxVariant;
} & React.ComponentPropsWithRef<'div'>;

const Box = React.forwardRef<HTMLDivElement, BoxProps>(
  ({ children, className, variant = 'rnd-shadow', ...rest }, ref) => {
    return (
      <Block>
        <div
          ref={ref}
          className={clsxm(
            'mx-auto max-w-7xl p-4 sm:p-6 lg:p-8',

            //#region  //*=========== Variants ===========
            [
              variant === 'rnd-shadow' && [
                'bg-white',
                'border border-gray-200',
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
