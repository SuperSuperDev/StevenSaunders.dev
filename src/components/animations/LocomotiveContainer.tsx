import * as React from 'react';
import { useEffect } from 'react';

export type config = {
  [key: string]: [string, unknown];
};

export default function LocomotiveContainer({
  children,

  className,
}: {
  children: React.ReactNode;

  className?: string;
}) {
  // Put Header or Footer Here

  // const locoContainerRef = React.useRef<HTMLDivElement>(null);

  const container = React.createRef<HTMLDivElement>();
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    import('locomotive-scroll').then((locomotiveModule) => {
      const ScrollEl = document.querySelector('#main-container');
      new locomotiveModule.default({
        el: ScrollEl,
        smooth: true,
        multiplier: 1,
        class: 'is-reveal',
      });
    });
  }, []);

  return (
    <div
      ref={container}
      data-scroll-container
      id='main-container'
      className={`scroll min-h-screen ${className} m-auto`}
    >
      {children}
    </div>
  );
}
