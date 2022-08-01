import React from 'react';

import getAnimationDelay from '@/lib/animations/getAnimationDelay';
import getAnimationName from '@/lib/animations/getAnimationName';

export type props = {
  textArray: string[];
  delayBetween: number;
  initialDelay: number;
  animationName: string;
  className?: string;
};

export default function AnimatedTextArray({
  textArray: textArray,
  delayBetween: delayBetween = 0,
  initialDelay: initialDelay = 1000,
  animationName: animationName = 'tracking-in-expand',
  className: className,
}: props) {
  const [array] = React.useState(textArray);

  return (
    <div>
      {array.map((text, index) => {
        return (
          <span
            key={index}
            className={`${className ? className : ''} ${getAnimationName(
              animationName
            )} ${getAnimationDelay(delayBetween, index, initialDelay)}`}
          >
            {text}{' '}
          </span>
        );
      })}
    </div>
  );
}
