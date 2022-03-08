import React from 'react';

import clsxm from '@/lib/clsxm';

enum BlockVariant {
  'default',
}

type BlockProps = {
  variant?: keyof typeof BlockVariant;
} & React.ComponentPropsWithRef<'div'>;

const Block = React.forwardRef<HTMLDivElement, BlockProps>(
  ({ children, className, variant = 'default', ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={clsxm(
          'my-6',
          //#region  //*=========== Variants ===========
          [variant === 'default' && ['bg-white bg-opacity-0']],
          //#endregion //*=========== Variants ===========
          className
        )}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

export default Block;
