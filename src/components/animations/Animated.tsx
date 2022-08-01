import React from 'react';

import getAnimationDelay from '@/lib/animations/getAnimationDelay';
import getAnimationName from '@/lib/animations/getAnimationName';

export type animatedProps = {
  children: React.ReactNode;
  delayBetween?: number;
  initialDelay?: number;
  animationName?: string;
  className?: string;
  wrapperClassName?: string;
  animationTarget?: 'wrapper' | 'children';
  targetChildren?: boolean;
} & React.ComponentPropsWithRef<'div'>;

const Animated = React.forwardRef<HTMLDivElement, animatedProps>(
  (
    {
      delayBetween = 1000,
      initialDelay = 1000,
      animationName = 'tracking-in-expand',
      className,
      children,
      wrapperClassName = 'i-am-default-wrapper',
      animationTarget = 'children',
      targetChildren = true,
    },
    ref
  ) => {
    const ChildrenWithProps = React.Children.map(children, (child, index) => {
      //console.log('child[props] :>> ', child && child.className);
      if (React.isValidElement(child)) {
        const childClassName = `
        ${child.props.className ? child.props.className : ' '}
        ${className ? className : ' '}
        ${getAnimationName(animationName)}
        ${getAnimationDelay(delayBetween, index, initialDelay)}
`;
        return React.cloneElement(child as JSX.Element, {
          className: `${childClassName} `,
        });
      }
      return child;
    });
    const wrapperClassNameFinal = `
      ${wrapperClassName}
      ${animationTarget === 'wrapper' ? className : 'no-target '}
      ${
        animationTarget === 'wrapper'
          ? getAnimationName(animationName)
          : 'no-target '
      }
      ${
        animationTarget === 'wrapper'
          ? getAnimationDelay(delayBetween, 0, initialDelay)
          : ''
      }
    `;

    return (
      <div className={wrapperClassNameFinal} ref={ref}>
        {targetChildren ? ChildrenWithProps : children}
      </div>
    );
  }
);

export default Animated;
