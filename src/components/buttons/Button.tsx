import * as React from 'react';
import { ImSpinner2 } from 'react-icons/im';

import clsxm from '@/lib/clsxm';

enum ButtonVariant {
  'primary',
  'outline',
  'ghost',
  'light',
  'dark',
}

enum ButtonRounding {
  'left',
  'right',
  'top',
  'bottom',
  'md',
  'lg',
  'none',
  'full',
}

type ButtonProps = {
  isLoading?: boolean;
  isDarkBg?: boolean;
  disabled?: boolean;
  srText?: string;
  // TODO: Icon size and alignment could be impproved
  iconLeft?: JSX.Element;
  iconRight?: JSX.Element;
  variant?: keyof typeof ButtonVariant;
  rounding?: keyof typeof ButtonRounding;
} & React.ComponentPropsWithRef<'button'>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      disabled: buttonDisabled,
      isLoading,
      srText,
      iconLeft,
      iconRight,
      variant = 'primary',
      rounding = 'md',
      isDarkBg = false,
      ...rest
    },
    ref
  ) => {
    const disabled = isLoading || buttonDisabled;

    return (
      <button
        ref={ref}
        type='button'
        disabled={disabled}
        className={clsxm(
          'relative inline-flex items-center px-4 py-2 font-semibold',
          'focus:outline-none focus-visible:ring focus-visible:ring-primary-500',
          'shadow-sm',
          'transition-colors duration-75',
          //#region  //*=========== Rounding ===========
          [
            rounding === 'left' && ['rounded-l-md'],
            rounding === 'right' && ['rounded-r-md'],
            rounding === 'top' && ['rounded-t-md'],
            rounding === 'bottom' && ['rounded-b-md'],
            rounding === 'md' && ['rounded-md'],
            rounding === 'lg' && ['rounded-lg'],
            rounding === 'none' && ['rounded-none'],
            rounding === 'full' && ['rounded-full'],
          ],
          //#region  //*=========== Variants ===========
          [
            variant === 'primary' && [
              'bg-primary-500 text-white',
              'border border-primary-600',
              'hover:bg-primary-600 hover:text-white',
              'active:bg-primary-500',
              'disabled:bg-primary-400 disabled:hover:bg-primary-400',
            ],
            variant === 'outline' && [
              'text-primary-500',
              'border border-primary-500',
              'hover:bg-primary-50 active:bg-primary-100 disabled:bg-primary-100',
              isDarkBg &&
                'hover:bg-gray-900 active:bg-gray-800 disabled:bg-gray-800',
            ],
            variant === 'ghost' && [
              'text-primary-500',
              'shadow-none',
              'hover:bg-primary-50 active:bg-primary-100 disabled:bg-primary-100',
              isDarkBg &&
                'hover:bg-gray-900 active:bg-gray-800 disabled:bg-gray-800',
            ],
            variant === 'light' && [
              'bg-white text-dark ',
              'border border-gray-300',
              'hover:bg-gray-100 hover:text-dark',
              'active:bg-white/80 disabled:bg-gray-200',
            ],
            variant === 'dark' && [
              'bg-gray-900 text-white',
              'border border-gray-600',
              'hover:bg-gray-800 active:bg-gray-700 disabled:bg-gray-700',
            ],
          ],
          //#endregion  //*======== Variants ===========
          'disabled:cursor-not-allowed',
          isLoading &&
            'relative text-transparent transition-none hover:text-transparent disabled:cursor-wait',
          className
        )}
        {...rest}
      >
        {isLoading && (
          <div
            className={clsxm(
              'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
              {
                'text-white': ['primary', 'dark'].includes(variant),
                'text-black': ['light'].includes(variant),
                'text-primary-500': ['outline', 'ghost'].includes(variant),
              }
            )}
          >
            <ImSpinner2 className='animate-spin' />
          </div>
        )}
        {srText && <span className='sr-only'>{srText}</span>}
        <div className='inline-flex items-center gap-2'>
          {iconLeft && <span>{iconLeft}</span>}
          <span>{children}</span>
          {iconRight && <span>{iconRight}</span>}
        </div>
      </button>
    );
  }
);

export default Button;
